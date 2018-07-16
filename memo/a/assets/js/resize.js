/* 长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 750/10 = 75px */
updataHtml();
function updataHtml() {
    var w = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize = w / 10 + 'px';
}
window.onresize = function () {
    updataHtml();
}
