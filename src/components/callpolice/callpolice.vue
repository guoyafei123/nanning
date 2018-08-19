<template>
    <div class="row">
      <!-- #头部 -->
      <!-- <header-vue></header-vue> -->
      <!-- #头部 End-->
      <!-- #左边 -->
      <section id="left" class="position-fixed-left z-index-20">
        <div class="overlay"></div>
        <!-- <call_left-vue></call_left-vue> -->
        <template>
          <div class="toolleft margin-right0 size-12">
            <section>
              <div class="toolcount">
                <div class="set-width-50  font-gray-999 padding-right0">
                  <ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
                    <li>
                      <h1 class="toolcount-p1 font-red">{{ins_queryAlarmStats.ALARMTOTAL}}</h1>
                    </li>
                    <li> 
                    <p class="size-10">Alarm Number</p>
                  </li>
                    <li>
                      <p class="size-18 font-blue">当前报警数</p>
                    </li>
                  </ul>
                </div>
                <div class="set-width-50 display-inline-block font-gray-999 toolcount-right">
                  <ul class="padding-left0 margin-bottom0">
                    <li>
                      <p>故障数</p>
                      <p class="font-blue font-italic float-right size-14">{{ins_queryAlarmStats.FAULTNUM}}</p>
                    </li>
                    <li>
                      <p>故障处理</p>
                      <p class="font-blue font-italic float-right size-14">{{ins_queryAlarmStats.FAULTDEAL}}</p>
                    </li>
                    <li>
                      <p>发生火情</p>
                      <p class="font-blue font-italic float-right size-14">{{ins_queryAlarmStats.FIRENUM}}</p>
                    </li>
                    <li>
                      <p>报警确认</p>
                      <p class="font-blue font-italic float-right size-14">{{ins_queryAlarmStats.ALARMDEAL}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div class="toolroute font-gray-ccc margin-left37">
                <span class="toolroute-rect bg-blue"></span>
                <ul class="padding-left10 padding-right5 clearfix">
                  <li>
                    <p class="font-gray-666 size-12">中心小学</p>
                  </li>
                  <li>
                    <p class="font-blue size-16">报警信息
                      <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                                  <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                              </span>
                    </p>
                  </li>
                  <li>
                      <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择"  @change="tolineitem">
                        <el-option v-for="item in ins_queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                      </el-select>
                      <!-- <div class="float-right">
                        <a class="upd-btn">展开表单</a>
                      </div> -->
                  </li>
                  <li>                      
                      <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
                        <thead>
                          <tr>
                            <!-- <th >序号</th> -->
                            <th >报警源</th>
                            <th style="max-width:20px !important;">类型</th>
                            <th >发生时间</th>
                            <th >状态</th>
                            <th>查看</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
                            <!-- <td>{{(getAlarmList_parameter.currentPage-1)*getAlarmList_parameter.pageSize+index+1}}</td> -->
                            <td v-if="item.nickName=='' || item.nickName==null">{{item.deviceTypeName}}</td>
                            <td v-if="item.nickName">{{item.nickName}}</td>
                            <td class="font-red " style="max-width:20px !important;">
                              <i data-toggle="tooltip" title="设备报警" v-if="item.eventLevel==1 && !item.nickName" class="icon iconfont icon-shebeibaojing-xian- set-ciontop3" ></i>
                              <i data-toggle="tooltip" title="火情" v-if="item.eventLevel==2" class="icon iconfont icon-huoqing-xian- set-ciontop3" ></i>
                              <i data-toggle="tooltip" title="人工报警" v-if="item.eventLevel==1 && item.nickName" class="icon iconfont icon-rengongbaojing-xian- set-ciontop3" ></i>
                              <i data-toggle="tooltip" title="故障" v-if="item.eventLevel==0" class="icon iconfont icon-guzhang-gai-xian- set-ciontop3" ></i>
                            </td>
                            <td>{{(item.startTime).substring(5)}}</td>
                            <td>
                              <i data-toggle="tooltip" title="关闭" v-if="item.status==1" class="icon iconfont icon-baojingjiechu-mian- font-blue set-ciontop4" ></i>
                              <i  data-toggle="tooltip" title="进行中" v-if="item.status==0" class="icon iconfont icon-huoqing-mian- font-red set-ciontop4" ></i>
                            </td>
                            <td >
                              <a v-on:click="toitmeinfo(item)" data-toggle="tooltip" title="查看详情">
                              <i class="fas fa-chevron-circle-right" ></i>
                            </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </li>
                  <li class="upd-pagin">
                    <div>
                      <el-pagination style="float: left;"
                        small
                        layout="total"
                        :total="tableData.totalRow">
                      </el-pagination>
                      <span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.getAlarmList_parameter.pageSize)}}页</span>
                      <el-pagination style="float: right;background: transparent"
                        small
                        layout="prev, pager, next"
                        :page-size="this.getAlarmList_parameter.pageSize"
                        :total="tableData.totalRow" 
                        current-page.sync="this.getAlarmList_parameter.currentPage"
                        @current-change="handleCurrentChange">
                      </el-pagination>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </template>
      </section>
      <!-- #左边 End-->
      <!-- #右边 -->
      <section id="right" class="position-fixed-right container-padding5 z-index-20">
        <div class="overlay"></div>
        <!-- <call_right-vue></call_right-vue> -->
        <template>
          <div class="toolright">
                <section class="my-filter padding5 bg-gray-222 clearfix">
                  <div class="col-sm-12 padding0">
                    <div class="upd-elmdate">
                      <el-date-picker
                        v-model="value7"
                        size="mini"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2">
                      </el-date-picker>
                    </div>
                  </div>
                </section>
                <section class="row margin-top20 clearfix">
                <!-- 已选择单位 -->                  
                    <div class="col-sm-7">
                      <div class="personinfo">
                        <p>
                          <span class="size-20 font-blue">中心小学</span>
                          <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                        </p>
                        <p class="text-left padding0">
                          <span><i class="fas fa-industry"></i> 中心小学</span>
                        </p>
                      </div>
                    </div>
                    <!-- 已选择单位巡检任务总数 -->                  
                    <div class="col-sm-5 font-white text-right size-12">                      
                      <i class="icon iconfont icon-xunjian-xian- size-14 font-blue"></i> 报警总数<br>
                      <span class="size-22 font-blue">1746</span>
                    </div>
                </section> 
                <section class="dan-lineinfo margin-top10">
                  <div class="toolcount">
                  <h4 class="p-title">报警统计</h4>
                  <div class="col-sm-7 font-gray-999 padding-right0 text-center margin-top50 size-12">
                    <div class="row" v-if="ins_getAlarmCount">
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">{{ins_getAlarmCount.alarmSum}}</p>
                        <p>警报总数</p>
                      </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">{{ins_getAlarmCount.peopleAlarm}}</p>
                        <p>人工报警</p>
                      </div>
                      <div class="col-sm-4">
                        <p class="size-16 font-white">{{ins_getAlarmCount.deviceAlarm}}</p>
                        <p>设备报警</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 font-gray-999 text-right size-12">
                    <div id="call_charpiemin" style="width: 100%;height:140px;text-align: right;"></div>
                  </div>
                </div>
                    <!-- <section>
                        <div class="toolcount">
                            <div class="col-sm-12  font-gray-999 padding-right0">
                              <div class="row text-center size-12">
                                  <template v-if="ins_getAlarmCount">
                                    <div class="col-sm-4 container-padding0 personnel-borderright">
                                    <p class="size-16 font-blue">{{ins_getAlarmCount.troubleSum}}</p>
                                    <p>故障总数</p>
                                    </div>
                                    <div class="col-sm-4 container-padding0 personnel-borderright">
                                    <p class="size-16 font-gray-ccc">{{ins_getAlarmCount.actiomAlarm}}</p>
                                    <p>故障处理</p>
                                    </div>
                                    <div class="col-sm-4 container-padding0">
                                    <p class="size-16 font-gray-ccc">{{ins_getAlarmCount.fireALarm}}</p>
                                    <p>火情总数</p>
                                    </div>
                                  </template>
                              </div>
                            </div>
                        </div>                        
                    </section> -->
                    <section>
                        <div class="toolcount">
                            <h4 class="p-title">报警情况</h4>
                            <!-- <template>
                              <div class="row margin-top20 padding-left10">
                                <el-radio-group @change="callradio" v-model="radiovalue">
                                  <el-radio label="1" class="col-xs-3">报警率</el-radio>
                                  <el-radio label="2" class="col-xs-3">火情发生率</el-radio>
                                </el-radio-group>
                              </div>                              
                            </template> -->
                            <div id="call_charpiemax" style="width: 100%;height:180px;margin: 0 auto;text-align: center;"></div>
                        </div>
                    </section>
                    <section>
                        <div class="toolcount margin-top20">
                            <h4 class="p-title">报警历史趋势
                            <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                              <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                            </span>
                            </h4>
                            <div id="call_charline" style="width: 100%;height:160px;margin: 0 auto;"></div>
                        </div>
                    </section>
                </section>

                <section class="dan-iteminfo display-none overflow-scr">
                  <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
                    <!-- <section>
                        <div class="personinfo">
                            <p>
                            <span class="size-20">A365 F57D 的设备详情</span>
                            <span class="bgbox-min bg-gray-666 font-black">消防栓报警按钮</span>
                            <span class="float-right">
                                    <span class="bgbox-max bg-gray-333 font-gray-999 size-10">灭火设备</span>
                                </span>
                            </p>
                            <p>
                                <span>
                                    <i class="fas fa-industry"></i> 良庆区中心小学</span>
                            </p>
                        </div>
                    </section>-->
                  
                    <section>
                      <div class="textandimg row imgs-nthof-block">
                        <h4 class="p-title">报警信息</h4>
                        <div class="row textandimg-main padding-left15">
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">报警源 </span>
                            <!-- <td v-if="ins_getAlarmDetail.isUser==0">{{ins_getAlarmDetail.deviceTypeName}}</td>
                            <td v-if="ins_getAlarmDetail.isUser==1">{{ins_getAlarmDetail.nickName}}</td> -->
                            <span class="size-12 font-gray-999" v-if="ins_getAlarmDetail.userId==0">{{ins_getAlarmDetail.deviceTypeName}}</span>
                            <span class="size-12 font-gray-999" v-if="ins_getAlarmDetail.userId==1">{{ins_getAlarmDetail.nickName}}</span>
                          </div>
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">报警地点 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.unitName}}&nbsp;{{ins_getAlarmDetail.buildingName}}&nbsp;{{ins_getAlarmDetail.floorNumber}}&nbsp;{{ins_getAlarmDetail.roomNumber}}</span>
                          </div>
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">报警时间 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.startTime}}</span>
                          </div>
                          <div class="col-sm-12">
                            <!-- <span class="size-12 font-gray-666">描述 </span> -->
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.remark}}</span>
                          </div>
                          <!-- <div class="textandimg-img imgs-nthof">
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                                <video :src="item" width="100%"  controls="controls"></video>
                              </div>
                            </template>
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                                <img :src="item">
                              </div>
                            </template>
                          </div> -->
                        </div>
                        <h4 class="p-title">报警确认</h4>
                        <div class="row textandimg-main padding-left15">
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">确认人 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.confirmNickName}}</span>
                          </div>
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">确认时间 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.confirmTime}}</span>
                          </div>
                          <div class="col-sm-12">
                            <!-- <span class="size-12 font-gray-666">描述 </span> -->
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.confirmReason}}</span>
                          </div>
                          <div class="textandimg-img imgs-nthof">
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                                <video :src="item" width="100%"  controls="controls"></video>
                              </div>
                            </template>
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                                <img :src="item">
                              </div>
                            </template>
                          </div>
                        </div>
                        <template v-if="infoShow"> 
                          <h4 class="p-title">报警关闭</h4>
                          <div class="row textandimg-main padding-left15">
                            <div class="col-sm-12">
                              <span class="size-12 font-gray-666">关闭 </span>
                              <span class="size-12 font-gray-999">{{ins_getAlarmDetail.cancelNickName}}</span>
                            </div>
                            <div class="col-sm-12">
                              <span class="size-12 font-gray-666">关闭时间 </span>
                              <span class="size-12 font-gray-999">{{ins_getAlarmDetail.cancelTime}}</span>
                            </div>
                            <!-- <div class="textandimg-img imgs-nthof">
                              <template v-for="item in ins_getAlarmDetail.imgUrl">
                                <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                                  <video :src="item" width="100%"  controls="controls"></video>
                                </div>
                              </template>
                              <template v-for="item in ins_getAlarmDetail.imgUrl">
                                <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                                  <img :src="item">
                                </div>
                              </template>
                            </div> -->
                          </div>
                        </template>
                      </div>
                    </section>
                </section>
          </div>
        </template>
      </section>
      <!-- #右边 End-->
      <!-- 弹窗 -->
    <el-dialog title="" :visible.sync="dialogVisible" top="120px" style="background-color: rgba(0,0,0,1);">
      <a class="go-back" @click="dialogVisible = false" data-toggle="tooltip" title="关闭"><i class="el-icon-circle-close-outline size-24"></i></a>
      <earlyinfo-vue></earlyinfo-vue>
    </el-dialog>
    </div>
</template>

<script>
import HeaderVue from "../publick/header.vue";
// import Call_leftVue from './call_left.vue';
// import Call_rightVue from './call_right.vue';
export default {
  components: {
    "header-vue": HeaderVue,
    // 'earlyinfo-vue':earlyinfoVue
    // 'call_left-vue':Call_leftVue,
    // 'call_right-vue':Call_rightVue
  },
  data() {
    return {
      // 时间配置
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: "",

      ins_queryInspectionNameList: Object,
      ins_queryInspectionNameListvalue: "全部状态",
      // 表格-请求
      getAlarmList_parameter: {
        unitId: null,
        currentPage: 1,
        pageSize: 10
      },
      // 报警统计-请求
      tableData: Object,
      queryAlarmStats_parameter: {
        unitId: null
      },

      ins_queryAlarmStats: Object,
      // 报警数据统计
      getAlarmCount_parameter:{
        unitId:null,
        beginTime: null,
        endTime: null
      },
      radiovalue:'1',
      ins_getAlarmCount:Object,
      // 饼图数据
      getAlarmRate_parameter: {
        unitId: null,
        beginTime: null,
        endTime: null,
        type:1
      },
      ins_getAlarmRate: Object,
      // 折线图数据
      getHistoryAlarmRate_parameter: {
        unitId: null,
        beginTime: null,
        endTime: null,
        type: 1
      },
      ins_getHistoryAlarmRate: Object,
      // 报警详情
      getAlarmDetail_parameter: {
        alarmId: 555
      },
      ins_getAlarmDetail: Object,
      infoShow:true
    };
  },
  methods: {
    // tab切换  
    // 实时警报列表展开/折叠
    openEarlyList(){
      $(".unit-info").slideToggle(
        function(){
        $(".unit-btn-close").toggle();
        $(".unit-btn-open").toggle();
        $(".early-warning").toggleClass("scrollheight");
      });
      
    },
    // 锁定/关闭
     earlyTool(){
            $(".icon-suo-guan-mian-,.icon-guanbi-mian-").toggleClass("active");
     },
     // 返回
    jianzhu() {
      $(".dan-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    toitmeinfo(item) {
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      // 请求报警详情
      let eventLevel=item.eventLevel;
      console.log(item)
      if(eventLevel==0 ||eventLevel==2){
        this.infoShow=true;
      }else{
        this.infoShow=false;
      }
      this.getAlarmDetail_parameter.alarmId = item.id;
      this.$fetch("/api/alarm/getAlarmDetail", this.getAlarmDetail_parameter)
        .then(response => {
          if (response) {
            console.log(response);
            this.ins_getAlarmDetail = response.data.alarm;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页:` + val);
      this.getAlarmList_parameter.currentPage = val;
      this.getTable();
    },
    tolineitem() {
      console.log(this.ins_queryInspectionNameListvalue);
      $("#lookroute").removeClass("upd-btn-dis");
    },
    callradio(){
      console.log(this.radiovalue);
      this.troubleCount.type=this.radiovalue;
      this.get_Pie();
    },
    getTable() {
      // 请求报警列表
      this.$fetch("/api/alarm/getAlarmList", this.getAlarmList_parameter)
        .then(response => {
          if (response) {
            console.log(response);
            this.tableData = response.data.pager;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    getData() {
      // 请求报警统计
      this.$fetch(
        "/api/alarm/queryAlarmStats",
        this.queryAlarmStats_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_queryAlarmStats = response.data.result;
        }
      })
      .then(err => {
        console.log(err);
      });

      // 请求报警数据统计
      this.$fetch(
        "/api/alarm/getAlarmCount",
        this.getAlarmCount_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_getAlarmCount = response.data.alarmCount;
          console.log(this.ins_getAlarmCount);
          this.draw_piemin(
              "call_charpiemin",
              response.data.alarmCount
            );
        }
      })
      .then(err => {
        console.log(err);
      });

      

      // 请求折线图数据
      this.$fetch("/api/alarm/getHistoryAlarmRate", this.getHistoryAlarmRate_parameter)
        .then(response => {
          if (response) {
            this.ins_getHistoryAlarmRate = response.data;
            console.log(this.ins_getHistoryAlarmRate);
            this.draw_line("call_charline", response.data.historyAlarmRate);
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    get_Pie(){
      // 请求报警饼图数据
      this.$fetch("/api/alarm/getAlarmRate", this.getAlarmRate_parameter)
      .then(response => {
        if (response) {
          this.ins_getAlarmRate = response.data.alarmRate[0] 
          this.draw_piemax(
            "call_charpiemax",
            this.ins_getAlarmRate,
            1
          );
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    draw_piemin(id, data) {
      let a = data.peopleAlarm / data.alarmSum * 100;
      let b = data.deviceAlarm / data.alarmSum * 100;
      let d;
      if (data.alarmSum == 0) {
        d = [
          {
            value: 0,
            name: "暂无统计",
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          }
        ];
      } else {
        d = [
          {
            value: data.peopleAlarm,
            name: "人工报警" + a.toFixed(2) + "%",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          },
          {
            value: data.deviceAlarm,
            name: "设备报警" + b.toFixed(2) + "%",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          }
        ];
      }
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 3) == "人工报") {
              name = "人工报警";
            } else if (data.name.substring(0, 3) == "设备报") {
              name = "设备报警";
            }
            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#333"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      chars.setOption(char);
    },
    draw_piemax(id, data,type) {
      let name;
      if(type==1){
        name="单位报警率" + data.alarmRate+"%"
      }else{
        name="火情发生率" + data.alarmRate+"%"
      }
      let d = [
          {
            value: data.unitAlarm,
            // value: 2,
            name: name,
          },
          {
            value: data.sumAlarm-data.unitAlarm,
            // value: 4,
            name: "未完成",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: false
              }
            }
          },
        ];
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 2) == "单位") {
              name = "单位报警数";
            } else if (data.name.substring(0, 2) == "火情") {
              name = "火情发生数";
            }else{
              name=data.name
            }

            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#c69e00", "#ff7800", "#f13131", "#ccc"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      // chars.setOption({});
      chars.setOption(char);
    },
    draw_line(id, data) {
      // 巡检完成率历史趋势曲线图
      // let data = response.data.result.dateMap;
      let a = [],
        b = [];
      for (var value in data) {
        a.push(value);
        b.push(data[value]);
      }
      // console.log(a);
      // console.log(b);
      var char = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: a,
          show: true,
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },

        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ["#333"]
            }
          }
        },

        // 调整实际显示的 margin
        grid: {
          y: 30,
          x2: 10,
          y2: 30,
          x: 40,
          borderWidth: 1
        },
        // 数据
        series: [
          {
            data: b,
            type: "line",
            symbol: "none",
            smooth: true,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#999"
                }
              ]
            }
          }
        ],
        tooltip: {
          enterable: true,
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        }
      };
      let charf = this.$echarts.init(document.getElementById(id));
      charf.setOption(char);
    },
  },
  mounted() {
    this.$store.commit('route_path',this.$route.path);
    this.getTable();
    this.getData();
    this.get_Pie();
    $("[data-toggle='tooltip']").tooltip();
  }
};
</script>

<style scoped>
.row {
  position: relative;
  z-index: 22;
}
.line-height50{
  line-height: 50px;
}
</style>
