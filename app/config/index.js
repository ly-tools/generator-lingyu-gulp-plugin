'use strict';

const DIRECTORIES = ['lib', 'test'];
const FILES = [
  '.eslintrc',
  '.travis.yml',
  'index.js',
  'LICENSE',
  'package.json',
  'README.md'
];

module.exports = (appname, type) => {
  const name = appname.split(' ').join('-');
  const common = [{
    type: 'input',
    name: 'name',
    message: 'Name',
    default: name.indexOf('gulp-') === 0 ? name : 'gulp-' + name
  }, {
    type: 'input',
    name: 'version',
    message: 'Version',
    default: '1.0.0'
  }, {
    type: 'input',
    name: 'author',
    message: 'Author',
    default: 'Your name'
  }, {
    type: 'input',
    name: 'description',
    message: 'Description',
    default: '...'
  }, {
    type: 'input',
    name: 'repositoryUrl',
    message: 'Repository URL',
    default: '...'
  }];
  return {
    prompt: common,
    fn: (ctx, done) => {
      return data => {
        DIRECTORIES.forEach(val => ctx.directory(val, val));
        ctx.template('gitignore', '.gitignore');
        FILES.forEach(name => ctx.template(name, name, data););
        done();
      };
    }
  };
};
