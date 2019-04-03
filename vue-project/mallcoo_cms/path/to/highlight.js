import Vue from "vue";
import Hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; //样式文件

let Highlight = {};
Highlight.install = function(vue, option) {
  Vue.directive("highlight", function(el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
      Hljs.highlightBlock(block);
    });
  });
};

export default Highlight;
