// 手机号验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(str)
}
//名称
export function isvalidName(str){
    const reg = /^.{2,30}$/;
    return reg.test(str)
}
//姓名
export function isName(str){
    const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    return reg.test(str)
}
