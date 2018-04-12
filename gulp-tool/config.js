const project = 'project1';
const src = project+'/src';
const build = project+'/build';

module.exports = {
  html: {
    url: project+'/*.html',
    url2: build,
    url3: project+'/layout/*.html'
  },
  css:{
    url: src+'/sass/*.scss',
    url2: build+'/assets/css',
    url3: src+'/sass/**/*.scss',
  },
  js:{
    url: src+'/js/*.js',
    url2: build+'/assets/js'
  },
  static:{
    url: src+'/static/*',
    url2: build+'/assets'
  },
  build: build,
  project: project
};