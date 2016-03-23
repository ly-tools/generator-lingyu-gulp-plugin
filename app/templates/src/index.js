import through from 'through2';
const DEFAULT_CONFIG = {};

export default config => {
  config = {
    ...DEFAULT_CONFIG,
    ...config
  };
  return through.obj((file, encoding, callback) => {
    // your logic here
    callback(null, file);
  }, done => {
    // your logic here
    done();
  });
};
