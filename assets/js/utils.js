function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
};

/**
 * 图片转base64格式
 */
function img2base64(url, crossOrigin) {
    return new Promise(resolve => {
        const img = new Image();

        img.onload = () => {
            const c = document.createElement('canvas');

            c.width = img.naturalWidth;
            c.height = img.naturalHeight;

            const cxt = c.getContext('2d');

            cxt.drawImage(img, 0, 0);
            // 得到图片的base64编码数据
            resolve(c.toDataURL('image/png'));
        };

        crossOrigin && img.setAttribute('crossOrigin', crossOrigin);
        img.src = url;
    });
}


/**
 * 在本地进行文件保存
 * @param  {String} data     要保存到本地的图片数据
 * @param  {String} filename 文件名
 */
function saveFile(data, filename) {
    const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = data;
    save_link.download = filename;

    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
}

/**
 * 计算与当前时间差
 * @param {String} date  2017-12-12
 * @return {String} 
 */

function countDate(date) {
    if(!date) return
    var s1 = date;
    s1 = new Date(s1.replace(/-/g, "/"));
    s2 = new Date();//当前日期：2017-04-24
    var days = s2.getTime() - s1.getTime();
    var time = parseInt(days / (1000 * 60 * 60 * 24));
    return -time
}