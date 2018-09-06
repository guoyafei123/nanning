export default class myUtils {
    /**
     * 判断字符串是否为空
     * @param str
     * @returns {boolean}
     */
    static isNull(str) {
        return str == null || str.length === 0 || str === '';
    }

    /**
     *
     * @desc  判断是否为身份证号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }

    /**
     *
     * @desc   判断是否为手机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isPhoneNum(str) {
        return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
    }
    /**
     * @desc   获取当前时间
     * @param  {Number} days 加减时间天数
     * @return {String}
     */
    static getNowFormatDate(days){
        var date = new Date();
        var date_s = date.getTime();//转化为时间戳毫秒数
        date.setTime(date_s + days * 1000 * 60 * 60 * 24);//设置新时间比旧时间多一天
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    /* 根据文件名后缀区分返回文件类型
    * @param: fileName - 文件名称
    * @param: 数据返回 1) 无后缀匹配 - false
    * @param: 数据返回 2) 匹配图片 - image
    * @param: 数据返回 3) 匹配 txt - txt
    * @param: 数据返回 4) 匹配 excel - excel
    * @param: 数据返回 5) 匹配 word - word
    * @param: 数据返回 6) 匹配 pdf - pdf
    * @param: 数据返回 7) 匹配 ppt - ppt
    * @param: 数据返回 8) 匹配 视频 - video
    * @param: 数据返回 9) 匹配 音频 - radio
    * @param: 数据返回 10) 其他匹配项 - other
    */
    static matchType(fileName){
        // 后缀获取
        var suffix = '';
        // 获取类型结果
        var result = '';
        try {
            var flieArr = fileName.split('.');
            suffix = flieArr[flieArr.length - 1];
        } catch (err) {
            suffix = '';
        }
        // fileName无后缀返回 false
        if (!suffix) {
            result = false;
            return result;
        }
        // 图片格式
        var imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
        // 进行图片匹配
        result = imglist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'image';
            return result;
        };
        // 匹配txt
        var txtlist = ['txt'];
        result = txtlist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'txt';
            return result;
        };
        // 匹配 excel
        var excelist = ['xls', 'xlsx'];
        result = excelist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'excel';
            return result;
        };
        // 匹配 word
        var wordlist = ['doc', 'docx'];
        result = wordlist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'word';
            return result;
        };
        // 匹配 pdf
        var pdflist = ['pdf'];
        result = pdflist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'pdf';
            return result;
        };
        // 匹配 ppt
        var pptlist = ['ppt'];
        result = pptlist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'ppt';
            return result;
        };
        // 匹配 视频
        var videolist = ['mp4', 'm2v', 'mkv'];
        result = videolist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'video';
            return result;
        };
        // 匹配 音频
        var radiolist = ['mp3', 'wav', 'wmv'];
        result = radiolist.some(function (item) {
            return item == suffix;
        });
        if (result) {
            result = 'radio';
            return result;
        }
        // 其他 文件类型
        result = 'other';
        return result;
    }
    static getByIdUnitInfo(unitId){
        var unitInfo = {
            name:"",
            location:"",
            totalScore:0
        }
        // 获取单位信息
        if(unitId==0 || unitId==null){
            unitInfo.name = "管理单位";
            unitInfo.location = "无位置";
            unitInfo.totalScore = 0;
        }else{
            this.$fetch("/api/unit/queryUnitInfo",{'unitId':unitId}).then(response => {
                let data = response.data;
                if(response.data) {
                    unitInfo.name = data.unitInfo.name;
                    unitInfo.location = data.unitInfo.location;
                    unitInfo.totalScore = data.totalScore;
                }
            });
        }
        console.log(unitInfo);
        return unitInfo;
    }
}