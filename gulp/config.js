const project = 'note'; //项目主目录
const src = project+'/src';  //源文件目录
const build = project+'/build';  //开发环境目录
const dest = project+'/dest';  //生产环境目录

module.exports = {
  html: {
    srcPath: project+'/*.html',
    devPath: build,
    prdPath: dest,
  },
  css:{
    srcPath: src+'/sass/*.scss',
    devPath: build+'/assets/css',
    prdPath: dest+'/assets/css',
  },
  js:{
    srcPath: src+'/js/*.js',
    devPath: build+'/assets/js',
    prdPath: dest+'/assets/js'
  },
  static:{
    srcPath: src+'/static/*',
    devPath: build+'/assets',
    prdPath: dest+'/assets'
  },
  src: src,
  build: build,
  dest: dest,
  project: project
};