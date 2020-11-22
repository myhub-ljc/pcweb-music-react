//对播放量数据的展示做一个优化处理
export function getCount(count) {
    if(count < 0) return 0;
    if(count < 10000) return count;
    if(Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 10000) + '万';
    } else {
        return Math.floor(count / 10000) / 10 + '亿';
    }
}

//原图片太大，让开发者把图片大小传进来吧
export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}*${size}`;
}