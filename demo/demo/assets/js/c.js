var _this = this;

// 地图已加载过
if (Map.loadComplete) {
    // 地图切换
    // Map.visibleGroupIDs = Map.groupIDs;
    // if(para.sfid == para.efid){
    Utils.changeFid(parseInt(para.sfid));
    // isAllLayer = false;
    // }else{
    //     Utils.changeFid(parseInt(para.sfid), true);
    //     isAllLayer = true;
    // }
    Map.showCompass = true;

    this.createrNavi(points);
} else {
    // 在当前页 初次载入地图
    Map.on('loadComplete', () => {
        // 地图切换
        // Map.visibleGroupIDs = Map.groupIDs;
        // if(para.sfid == para.efid){
        Utils.changeFid(parseInt(para.sfid));
        // isAllLayer = false;
        // }else{
        //     Utils.changeFid(parseInt(para.sfid), true);
        //     isAllLayer = true;
        // }
        Map.showCompass = true;

        // 地图加载完执行画导航路径
        _this.createrNavi(points);
    })
}


// first: true,
// 初始化跟随点
// var coord = {
//     x: 0,
//     y: 0,
//     z: 56,
//     fid: 1
// };
// this.addLocationMarker(coord);
// 只初始化一次
// if (!this.first) {
//     return
// }


// this.locationMarker.x = coord.x;
// this.locationMarker.y = coord.y;
// this.locationMarker.groupID = coord.fid;

// setTimeout(() => {
//     $('#logMask').append('---remove---');
// }, 100);

// $('#logMask').html(JSON.stringify(coord))


// count++;
// if (count > 5) {
//     count = 0;
// }
// //定位坐标点
// var showdata = [{
//         x: 11871696.739999998,
//         y: 3079593.71,
//         fid: 1
//     },
//     {
//         x: 11871736.335,
//         y: 3079530.705,
//         fid: 1
//     },
// {
//     x: 12961615,
//     y: 4861850,
//     fid: 1
// },
// {
//     x: 12961620,
//     y: 4861850,
//     fid: 1
// },
// {
//     x: 12961625,
//     y: 4861850,
//     fid: 1
// }
// ];
// console.log('count:'+count)
// var tmp = showdata[count - 1];
// loc.pointerCenter(tmp);

// var p = {
//     sname: encodeURIComponent($('#iptStart').val()),
//     sfid: $('#iptStart').data('fid'),
//     sx: $('#iptStart').data('x'),
//     sy: $('#iptStart').data('y'),
//     ename: encodeURIComponent($('#iptEnd').val()),
//     efid: $('#iptEnd').data('fid'),
//     ex: $('#iptEnd').data('x'),
//     ey: $('#iptEnd').data('y')
// }