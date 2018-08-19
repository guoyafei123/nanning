// 手机号验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(str)
}
//名称
export function isvalidName(str){
    const reg = /^.{3,20}$/;
    return reg.test(str)
}
//姓名
export function isName(str){
    const reg = /^[\u4e00-\u9fa5]{0,}$/;
    return reg.test(str)
}