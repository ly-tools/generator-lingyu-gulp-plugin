import 'babel-polyfill';
import path from 'path';
import run from 'run-gulp-task';
import PrettyError from 'pretty-error';
const pe = new PrettyError();
const CWD = process.cwd();
const testPath = path.join(CWD, 'test');

describe('...', function() {
  describe('case1', () => {
    let casePath = path.join(testPath, 'case1');
    before(done => {
      process.chdir(casePath);
      run('default', path.join(process.cwd(), 'gulpfile.js'))
        .catch(e => {
          console.log(pe.render(e));
          return e;
        })
        .then(e => {
          process.chdir(CWD);
          done(e);
        });
    });
    it('...', function() {
      // your test
    });
  });
  describe('case2', () => {
    let casePath = path.join(testPath, 'case2');
    before(done => {
      process.chdir(casePath);
      run('default', path.join(process.cwd(), 'gulpfile.js'))
        .catch(e => {
          console.log(pe.render(e));
          return e;
        })
        .then(e => {
          process.chdir(CWD);
          done(e);
        });
    });
    it('...', function() {
      // your test
    });
  });
});
