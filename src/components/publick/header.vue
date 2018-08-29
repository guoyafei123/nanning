<template>
  <header id="header" class="position-fixed-top z-index-30">
    <div class="header-main">
      <div class="header-left margin-top30 position-left20 z-index-100">
        <p class="version-title">
          <!-- 数雨如歌 -->智慧消防大数据监控平台 政府版
          <span class="size-10 version-num">BETA3.0</span>
        </p>
        <el-select v-model="unitvalue" size="mini" @change="optionchange">
          <el-option v-for="item in queryUnit" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="header-middle">
        <ul>
          <li>
            <canvas class="bg-none" id="header-canvas-people" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span class="font-blue">{{userAnalyseDate.userOnlineCount}}</span>/
                <span>{{userAnalyseDate.userCount}}</span>
              </p>
              <p class="size-12">人员在线</p>
            </div>
          </li>
          <li>
            <canvas class="bg-none" id="header-canvas-host" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span class="font-blue">{{transmissionDate.transmissionOnlineCount}}</span>/
                <span>{{transmissionDate.transmissionCount}}</span>
              </p>
              <p class="size-12">主机在线</p>
            </div>
          </li>
          <el-tooltip class="item" placement="top">
            <div slot="content" class="text-center"> {{dateFormat(date)}}<br>{{weatherData.weather}}</div>
            <li class="header-time">

              <p class="font-blue size-12">
               <!-- <i class="icon iconfont icon-qinglang-xian- size-14"></i>--><span>{{weatherData.weather}}</span>
              </p>
              <p class="size-36 font-white">
                {{TimeFormat(date)}}
              </p>
            </li>
          </el-tooltip>
          <li>
            <canvas class="bg-none" id="header-canvas-cpu" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span>{{buildCount}}</span>
              </p>
              <p class="size-12">建筑数量</p>
            </div>
          </li>
          <li>
            <canvas class="bg-none" id="header-canvas-memory" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span>{{deviceCount}}</span>
              </p>
              <p class="size-12">设备数量</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="header-right margin-top30 font-gray-666">
        <div class="header-head">
					<span class="">
                <div class="display-inline-block">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        <span class="header-head-portrait">
                            <img src="../../assets/images/people.png" class="img-responsive img-circle">
                        </span>
					<span class="user-name">{{username}}</span>
					<span class="caret"></span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><span @click="signIn = true"><i
              class="icon iconfont icon-huiyuanquerendaodian size-14"></i> 打卡</span></el-dropdown-item>
						<el-dropdown-item><span @click="getUserInfogetUserInfo()"><i
              class="icon iconfont icon-xunjianyuan-mian- size-14"></i> 个人信息</span></el-dropdown-item>
						<el-dropdown-item><router-link to="/operationLog"><i
              class="icon iconfont icon-caozuorizhi-xian- size-14"></i> 操作日志</router-link></el-dropdown-item>
						<el-dropdown-item @click="logout"><i class="icon iconfont icon-guanbi2 size-14"></i> 注销</el-dropdown-item>
					</el-dropdown-menu>
					</el-dropdown>
				</div>
				</span>
        </div>
        <ul class="top-btn">
          <li>
            <span class="point"></span>
            <a @click="showMessages()">
              <el-tooltip class="item" content="消息" placement="top">
                <i class="icon iconfont icon-xiaoxi-mian--"></i>
              </el-tooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <el-tooltip class="item" content="搜索" placement="top">
                <i class="icon iconfont icon-sousuo-mian-"></i>
              </el-tooltip>
            </a>
          </li>
          <li>
            <router-link to="/Unit_management" @click.native="management">
              <el-tooltip class="item" content="管理" placement="top">
                <i class="icon iconfont icon-shezhi-mian-"></i>
              </el-tooltip>
            </router-link>
          </li>
          <li>
            <router-link to="/Add_alarm">
              <el-tooltip class="item" content="添加警报" placement="top">
                <i class="icon iconfont icon-jingshi-xian-"></i>
              </el-tooltip>
            </router-link>
          </li>
          <!-- <li>
                      <a href="#">
                          <el-tooltip class="item" content="九屏监控" placement="top">
                              <i class="icon iconfont icon-jiuping-mian-"></i>
                          </el-tooltip>
                      </a>
                  </li> -->
          <li>
            <a @click="voice()" class="voice">
              <el-tooltip class="item" content="声音" placement="top">
                <i class="icon iconfont icon-tongzhi-mian-"></i>
              </el-tooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <el-tooltip class="item" content="帮助" placement="top">
                <i class="icon iconfont icon-bangzhu-mian-"></i>
              </el-tooltip>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 消息模态窗 -->
    <div class="modal fade" id="showmessages" aria-labelledby="messagesLabel" aria-hidden="true">
      <!-- 消息中心 -->
      <messages-vue></messages-vue>
    </div>
    <!-- 个人信息弹窗 -->
    <el-dialog show-close :visible.sync="personnelInfo" width="30%" center>
      <div class="dialog-header">
        <h3 class="el-dialog__title">个人信息</h3>
        <small class="font-blue">{{userInfoData.unitName?userInfoData.unitName:"-"}}</small>
        <button type="button" class="el-dialog__headerbtn" @click="personnelInfo = false">
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </button>
      </div>
      <div class="dialog-content text-center clearfix">
        <div class="myhead">
          <img :src="userInfoData.headImgUrl" class="img-responsive img-circle center-block">
          <h3>{{userInfoData.nickName?userInfoData.nickName:"-"}}</h3>
          <h4>角色：<span>{{userInfoData.roleName?userInfoData.roleName:"-"}}</span></h4><h4>账号：<span>{{userInfoData.username?userInfoData.username:"-"}}</span></h4>
        </div>
        <ul class="mytotal list-inline col-sm-12">
          <li><h2 class="font-red">{{userCountData.alarmConfirmCount}}</h2>
            <p>处理报警数(次)</p></li>
          <li><h2 class="font-yellow">{{userCountData.troubleConfirmCount}}</h2>
            <p>处理隐患数(次)</p></li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
		    <el-button @click="personnelInfo = false">关 闭</el-button>
		  </span>
    </el-dialog>
      <!-- 签到弹窗 -->
    <el-dialog show-close :visible.sync="signIn" width="30%" center>
      <div class="dialog-header">
        <h3 class="el-dialog__title">工作考勤</h3>
        <small class="font-blue">瑞和家园</small>
        <button type="button" class="el-dialog__headerbtn" @click="signIn = false">
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </button>
      </div>
      <div class="dialog-content text-center clearfix">
        <h2 class="font-blue margin-bottom20" style="display: none;"><i
          class="el-icon-circle-check-outline size-100"></i><br>今日已打卡</h2>
        <div class="myhead">
          <img src="../../assets/images/QR.png" class="img-responsive center-block qrcode">
          <h2 class="font-red margin-top20">今日尚未打卡</h2>
          <h4>二维码<span class="font-blue">2分钟</span>更新一次，请使用<span class="font-blue">智慧消防APP</span>扫一扫打卡</h4>
        </div>
        <div class="mytotal margin-top10">
          <h5>本月未打卡 <span class="font-red">3</span>次</h5>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="signIn = false">关 闭</el-button>
      </span>
    </el-dialog>
  </header>

</template>

<script>
  import messagesVue from "./messages.vue";
  import {mapState} from "vuex";

  export default {
    components: {
      "messages-vue": messagesVue,
    },
    // 选择器
    data() {
      return {
        //时间
        date: new Date(),
        // 弹窗
        signIn: false,
        personnelInfo: false,

        areavalue: "选项2",
        unitvalue: "全部单位",
        queryUnit: Object,
        username: '-',
        //人员在线
        userAnalyseDate: Object,
        userAnalyseDate_param: {
          unitId: null
        },
        getBuildingData_parameter:{
          unitId:null
        },
        getDeviceData_parameter:{
          unitId:null
        },
        buildCount:null,
        deviceCount:null,
        //请求天气
        weatherData:Object,
        getWeatherData_parameter:{
          cityName:"nanning"
        },
        //主机在线
        transmissionDate:Object,
        getTransmissionDate_parameter:{
          unitId:null
        },
        queryUserInfo_parameter:{
          userId:null
        },
        userCountData: Object,
        userInfoData: Object
      };
    },
    computed: mapState([
      'userinfo',
    ]),
    watch: {
      userinfo() {
        //this.getuserinfo=this.userinfo;
        //console.log(this.userinfo);
      }
    },
    //其他
    mounted() {
      // //console.log(this.userinfo);
      this.userAnalyse();
      this.getBuildingData();
      this.getDeviceData();
      this.getTransmission();
      this.mini_go("header-canvas-cpu", 1);
      this.mini_go("header-canvas-memory", 1);
      $("[data-toggle='tooltip']").tooltip();
      this.getunitlist();
      this.getuserinfo();
      this.getWeather();
      let _this = this; //声明一个变量指向vue实例this,保证作用域一致
      this.timer = setInterval(function () {
        _this.date =new Date();//修改数据date
      }, 1000);
      this.weathers = setInterval(function () {
        _this.getWeather()
      }, 1000*60*60*5);
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
      }
      if (this.weathers) {
        clearInterval(this.weathers);//在vue实例销毁钱，清除我们的定时器
      }
    },

    methods: {
      TimeFormat:function(time) {
        let date=new Date(time);
        let hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
        let minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
        let seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
        // 拼接
        return  hours+":"+minutes+":"+seconds;
      },
      dateFormat:function(time) {
        /* 在日期格式中，月份是从0开始的，因此要加0
      * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
      * */
        let date=new Date(time);
        let year=date.getFullYear();
        let month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
        let day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
        // 拼接
        return year+"-"+month+"-"+day ;
      },
      // 显示消息模态窗
      modal_per() {
        $("#modal_per").modal('show');
      },
      // 显示消息模态窗
      showMessages() {
        $("#showmessages").modal("toggle");
        $("#showmessages").on("show.bs.modal", function () {
          $(".icon-xiaoxi-mian--").addClass("font-white");
        });
      },
      // 开关声音
      voice() {
        $(".icon-tongzhi-mian-").toggleClass("font-blue");
      },

      mini_go(id, num) {
        //画底圆
        //mini图配置
        var canvas_mini = document.getElementById(id);

        canvas_mini.width = canvas_mini.width;
        canvas_mini.height = canvas_mini.height;
        var cxt_mini = canvas_mini.getContext("2d");
        cxt_mini.fillStyle = "rgba(255, 255, 255, 0)";
        // cxt_mini.globalAlpha= (Math.sin(0) + 1) / 2;
        var mini_width = canvas_mini.width;
        var mini_height = canvas_mini.height;
        var mini_r = mini_width / 2;
        cxt_mini.translate(mini_width / 2, mini_height / 2);
        var radi2_mini = mini_r * 0.855;
        cxt_mini.rotate(5.5);
        // 画底圆
        cxt_mini.translate(-25, -25);
        cxt_mini.translate(mini_width / 2, mini_height / 2);
        cxt_mini.clearRect(0, 0, mini_width, mini_height);
        cxt_mini.beginPath();
        cxt_mini.lineWidth = 2;
        cxt_mini.strokeStyle = "#fff";
        cxt_mini.arc(0, 0, mini_r * 0.75, 0, 2 * Math.PI);
        cxt_mini.stroke();
        cxt_mini.closePath();
        //画比例圆
        cxt_mini.beginPath();
        cxt_mini.lineWidth = 2;
        cxt_mini.strokeStyle = "#bad616";
        cxt_mini.arc(0, 0, mini_r * 0.75, 0, 2 * Math.PI * num, true);
        cxt_mini.stroke();
        cxt_mini.closePath();
        //画斜杠
        cxt_mini.beginPath();
        cxt_mini.lineWidth = 2;
        cxt_mini.strokeStyle = "#fff";
        var moveto = mini_width * 0.133333333;
        var lineto = mini_width * 0.377777777;
        cxt_mini.moveTo(moveto, 0);
        cxt_mini.lineTo(lineto, 0);
        cxt_mini.stroke();
        cxt_mini.closePath();
      },
      getunitlist() {
        this.$fetch("/api/unit/queryUnit")
          .then(response => {
            if (response) {
              this.queryUnit = response.data.unitList;
              this.$store.commit('mapAllUnit', response.data.unitList);
              //console.log(this.queryUnit);
              //console.log(this.queryUnit.length);
              if (this.queryUnit.length == 1) {
                this.unitvalue = this.queryUnit[0].name;
                this.$store.commit('unitid', this.queryUnit[0].id);
              } else if (this.queryUnit.length > 1) {
                if (sessionStorage.unitid) {
                  response.data.unitList.forEach(element => {
                    if (element.id == sessionStorage.unitid) {
                      this.unitvalue = element.name;
                      return;
                    }
                  });
                } else {
                  this.unitvalue = '全部单位';
                }
                this.queryUnit.unshift({
                  id: 0,
                  name: '全部单位'
                })
                this.$store.commit('unitid', null);
              }
            }
          })
          .then(err => {
            //console.log(err);
          });
      },
      //请求在线
      userAnalyse() {
        this.$fetch("/api/user/userAnalyse", this.userAnalyseDate_param)
          .then(response => {
            if (response) {
              this.userAnalyseDate = response.data.userAnalyse;
              let number = (this.userAnalyseDate.userOnlineCount) / (this.userAnalyseDate.userCount);
              let str = Number(number).toFixed(2);
              if (str == 1) {
                str = 0
              }
              this.mini_go("header-canvas-people", 1 - str);
            }
          })
          .then(err => {
            //console.log(err);
          });
      },
      //建筑
      getBuildingData() {
        this.$fetch( "/api/building/queryBuildStatisInfo", this.getBuildingData_parameter
        ).then(response => {
          if (response.data) {
            this.buildCount = response.data.buildStats.TOTALBUILD
          }
        });
      },
      //退出登录
      logout() {
        this.$fetch( "/cas/logout",).then(response => {
          if (response.data) {

          }
        });
      },
      //请求天气接口
      getWeather() {
        this.$fetch( "/api/weather/toDayWeather", this.getWeatherData_parameter
        ).then(response => {
          if (response.data) {
            this.weatherData = response.data.weather
          }
        });
      },
      //设备
      getDeviceData() {
        this.$fetch( "/api/device/alarmAndMalfunctionDeviceCount", this.getDeviceData_parameter
        ).then(response => {
          if (response.data) {
            this.deviceCount = response.data.deviceTotal;
          }
        });
      },
      //主机在线
      getTransmission() {
        this.$fetch( "/api/device/transmission_analyse", this.getTransmissionDate_parameter
        ).then(response => {
          if (response.data) {
            this.transmissionDate = response.data.transmissionAnalyse
            let number = (this.userAnalyseDate.transmissionOnlineCount) / (this.userAnalyseDate.transmissionCount);
            let str = Number(number).toFixed(2);
            if (str == 1) {
              str = 0
            }
            this.mini_go("header-canvas-host", 1-str);
          }
        });
      },
      getUserInfogetUserInfo(){
        this.queryUserInfo_parameter.userId = localStorage.userId;
        this.personnelInfo = true;
        this.$fetch("/api/alarmstats/queryUserData",
                this.queryUserInfo_parameter)
                .then(response => {
                if (response.data) {
                  let data = response.data;
                  this.userCountData = data.info;
                  this.userInfoData = data.info.user;
                }
				});
      },
      optionchange() {
        //console.log(this.unitvalue);
        sessionStorage.unitid = this.unitvalue;
        this.$store.commit('unitid', this.unitvalue);
      },
      getuserinfo() {
        this.username = localStorage.name
      },
      management() {
        this.$store.commit('mapShow', false);
      }
    }
  };
</script>

<style scoped>

</style>
