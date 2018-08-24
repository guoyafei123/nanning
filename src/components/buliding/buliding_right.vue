<template>
        <div class="toolright">
          <!-- 筛选 -->
            <section class="my-filter padding5 bg-gray-222 clearfix">
                <!-- 日期筛选 -->
                <div class="col-sm-12 padding0">
                <div class="upd-elmdate">
                    <el-date-picker
                    v-model="dateValue"
                    size="mini"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2"
                    @change="chooseTimeRange">
                    </el-date-picker>
                </div>
                </div>
            </section>
            <!-- 详情 -->
            <section class="bulid-iteminfo display-none">
              <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>                
                <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择 -->
                    <div class="personinfo">
                            <p>
                            <span class="size-20 font-blue">{{buildBaseInfo.name?buildBaseInfo.name:"暂无名称"}}</span>
                            <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分{{buildTotalScore?buildTotalScore:"0"}}</span>
                            <span class="float-right">
                                    <span class="bgbox-max bg-gray-333 font-gray-999 size-10">{{buildBaseInfo.property?buildBaseInfo.property:"无"}}</span>
                                </span>
                            </p>
                            <p class="col-sm-12 text-left padding0">
                                <span>
                                    <i class="fas fa-industry"></i> {{buildBaseInfo.location?buildBaseInfo.location:"无"}}</span>
                            </p>
                            <!-- <P class="col-sm-5 text-right padding0">
                                <span class="text-right">
                                </span>
                            </P>  -->
                    </div>
                </div>
                <section>
                  <div class="row toolcount margin-top20">
                      <div class="col-sm-4 font-gray-999 padding-right0">
                        <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                          <li>
                            <h1 class="toolcount-p1">{{buildBaseInfo.countRoom?buildBaseInfo.countRoom:"0"}}</h1>
                          </li>
                          <li>
                            <p class="size-10 ">Room Total</p>
                          </li>
                          <li>
                            <p class="size-16 font-blue">总房间数量</p>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                        <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                          <li>
                            <p class="size-18 font-white">信息统计</p>
                          </li>
                          <li>
                            <p class="size-10 set-scaleright">Repair Statistics</p>
                          </li>
                          <li class="row text-center padding-right16 margin-top40">
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">{{buildBaseInfo.floors?buildBaseInfo.floors:"0"}}</p>
                              <p>楼层数量</p>
                            </div>
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">{{buildBaseInfo.floors?buildBaseInfo.floors:"0"}}</p>
                              <p>设备数量</p>
                            </div>
                            <div class="col-sm-4">
                              <p class="size-16 show font-white">{{buildBaseInfo.area?buildBaseInfo.area:"0"}}</p>
                              <p>面积 m²</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>
                </section>
                <section>
                    <h4 class="p-title margin-top30">统计</h4>
                    <div class="row cardinfo-style margin-top10 font-gray-999">
                        <p class="col-sm-4">当前隐患数<span class="font-yellow">{{buildTroubleMap.NOWTROUBLE?buildTroubleMap.NOWTROUBLE:"0"}}</span></p>
                        <p class="col-sm-4">当前报警数<span class="font-red">{{buildAlarmMap.NOWALARM?buildAlarmMap.NOWALARM:"0"}}</span></p>
                        <p class="col-sm-4">当前危险品数<span class="font-yellow">{{buildTroubleMap.allDanger?buildTroubleMap.allDanger:"0"}}</span></p>
                        <p class="col-sm-4">历史隐患数<span class="font-white">{{buildTroubleMap.nowDanger?buildTroubleMap.nowDanger:"0"}}</span></p>
                        <p class="col-sm-4">历史报警数<span class="font-white">{{buildAlarmMap.ALLALARM?buildAlarmMap.ALLALARM:"0"}}</span></p>
                        <p class="col-sm-4">历史危险品数<span class="font-white">{{buildTroubleMap.ALLTROUBLE?buildTroubleMap.ALLTROUBLE:"0"}}</span></p>
                        <p class="col-sm-4">相关巡检路线<span>{{buildPlanCount?buildPlanCount:"0"}}</span></p>
                    </div>
                </section>
                <section>
                    <div class="textandimg margin-top30">
                        <h4 class="p-title">建筑信息</h4>
                        <div class="row textandimg-main margin-top20 size-12">
                            <div class="col-sm-6">
                                <span>建筑用途 </span>
                                <strong>{{buildBaseInfo.property?buildBaseInfo.property:"暂无"}} </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑类型 </span>
                                <strong>{{buildBaseInfo.type?buildBaseInfo.type:"暂无"}}</strong>
                            </div>

                            <div class="col-sm-12">
                                <span>建筑年份 </span>
                                <strong>{{buidyear.substring(0,10)}} </strong>
                            </div>
                            <div class="col-sm-12">
                                <span>结构类型 </span>
                                <strong>{{buildBaseInfo.structure?buildBaseInfo.structure:"暂无"}}</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>楼层数量 </span>
                                <strong>{{buildBaseInfo.floors?buildBaseInfo.floors:"1"}}层</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>房间数量 </span>
                                <strong>{{buildBaseInfo.countRoom?buildBaseInfo.countRoom:"1"}}个</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>占地面积 </span>
                                <strong>{{buildBaseInfo.area?buildBaseInfo.area:"0"}} m² </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑高度 </span>
                                <strong>{{buildBaseInfo.heightOfBuilding?buildBaseInfo.heightOfBuilding:"不详"}}m</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑经度 </span>
                                <strong>{{buildBaseInfo.pointX?buildBaseInfo.pointX:"未知"}} </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑维度 </span>
                                <strong>{{buildBaseInfo.pointY?buildBaseInfo.pointY:"未知"}}</strong>
                            </div>
                                              
                        </div>
                    </div>
                    <!-- 安防信息 -->
                    <section>
                      <div class="textandimg margin-top30">
                            <h4 class="p-title">安防信息</h4>
                            <div class="row textandimg-main margin-top20 size-12">
                                <div class="col-sm-12">
                                      <span>管理单位 </span>
                                      <strong>{{buildBaseInfo.unitName ? buildBaseInfo.unitName:"暂为空"}} </strong>
                                  </div>
                                <div class="col-sm-6">                                   
                                    <span>消防负责人 </span>
                                    <strong>{{buildBaseInfo.linkname?buildBaseInfo.linkname:"暂无"}}</strong>
                                </div>
                                <div class="col-sm-6">                                   
                                    <span>联系电话 </span>
                                    <strong>{{buildBaseInfo.phone?buildBaseInfo.phone:"暂无"}}</strong>
                                </div>               
                              </div>
                        </div>
                    </section>
                </section>
            </section>
            <!-- 统计 -->
            <section class="bulid-lineinfo">
              <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                <div class="personinfo">
                    <p>
                    <span class="size-20 font-blue">{{buildCountDataSocres.unitName ? buildCountDataSocres.unitName:'暂无名称'}}</span>
                    <span class="float-right">
                            <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">{{buildCountDataSocres.buildingName ? buildCountDataSocres.buildingName:'暂无名称'}}</span>
                        </span>
                    </p>
                    <p class="col-sm-12 text-left padding0">
                        <span>
                            <i class="fas fa-industry"></i> {{buildCountDataSocres.totalScore ? buildCountDataSocres.totalScore:'0'}}</span>
                    </p>
                    <!-- <P class="col-sm-5 text-right padding0">
                        <span class="text-right">
                        </span>
                    </P> -->                        
                </div>
              </div>
              <section>
                <div class="toolcount margin-top10">
                  <h4 class="p-title">
                    安全评分占比
                  </h4>
        					<div id="pieb1" class="margin-top10" style="width: 100%;height:160px;margin: 0 auto;"></div>
        				</div>
			</section>
			<section>
				<div class="toolcount margin-top10">
					<h4 class="p-title">
                    建筑报警数量
                  </h4>
					<div id="axis1" style="width: 100%;height:160px;margin: 0 auto;"></div>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top10">
					<h4 class="p-title">
                    建筑隐患数量
                    <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
                  </h4>
					<div id="myChart1" style="width: 100%;height:160px;margin: 0 auto;"></div>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
import moment from "moment";
import{mapState} from "vuex";
export default {
  data() {
    return {
      // 时间筛选
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
      dateValue: '',
      //点击接收的参数对象
      builddata: Object,
      getBuildIngAssess_parameter: {
        unitId: null,
        startTime: "2018-06-01",
				endTime: "2018-08-09"
      },
      getBuildIngAssess: Object,
      //建筑安全评分级别
      buildAssessScore: Object,
      //建筑报警数折线图
      buildAlarmCount: Object,
      //建筑隐患数折线图
      buildTroubleCount: Object,
      buildCountDataSocres:Object,
      buildDetailinfo:Object,
      buildDetails_parameter:{
        buildingId:324
      },
      buildPlanCount: Object,
      buildTotalScore: Object,
      buildAlarmMap: Object,
      buildTroubleMap: Object,
      buildBaseInfo: Object,
      buidyear: "",
      getunitid:Object
    };
  },
  computed:mapState([
    'tobuilditem',
    'buildCountDataSocre',
    'buildDetailinfos',
    'unitid'
  ]),
  watch:{
    // 建筑详情
    tobuilditem(){
      this.builddata =this.tobuilditem;
      this.buildDetails_parameter.buildingId = this.builddata.id;
      this.getBuildDetails();
    },
    buildCountDataSocre(){
      this.buildCountDataSocres=this.buildCountDataSocre;
    },
    
    buildDetailinfos(){
      if(this.buildDetailinfos[0] == null){
        this.jianzhu();
      }else{
        this.buildDetaiData=this.buildDetailinfos[0];
        this.buildDetails_parameter.buildingId = this.buildDetaiData.buildingId;
        this.getBuildDetails();
      }
    },
    unitid(){
      if(this.unitid!=0){
        this.getunitid=this.unitid;
      }else{
        this.getunitid=null;
      }
      this.getBuildIngAssess_parameter.unitId=this.getunitid;
      this.getData();
      
    }
  },
  methods: {
    moren() {
      $(".bulid-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".bulid-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    chooseTimeRange(t) {
				this.dateValue = t;
				var st = moment(this.dateValue[0]).format('YYYY-MM-DD');
        var et = moment(this.dateValue[1]).format('YYYY-MM-DD');
        this.getBuildIngAssess_parameter.startTime = st;
        this.getBuildIngAssess_parameter.endTime = et;
				this.getData();
		},
		defaultTimeVaule() {
        var startDate = this.getNowFormatDate();
        this.getBuildIngAssess_parameter.startTime = startDate;
        this.getBuildIngAssess_parameter.endTime = startDate;
				this.dateValue = [startDate,startDate];
		},
		//获取当前时间：
		getNowFormatDate(){
				var date = new Date();
 				// var date_s = date.getTime();//转化为时间戳毫秒数
				// date.setTime(date_s + days * 1000 * 60 * 60 * 24);//设置新时间比旧时间多一天
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
		},
    getData() {
      // 请求统计数据
      this.$fetch("/api/building/getBuildIngAssess",this.getBuildIngAssess_parameter).then(response => {
        if (response.data) {
           this.buildAssessScore = response.data.info.buildIngAssess;
           this.buildAlarmCount = response.data.info.buildAlarm;
           this.buildTroubleCount = response.data.info.buildTrouble;
           //开始调用画图
           this.drawPieChart("pieb1",this.buildAssessScore);
           this.drawBarChart("axis1",this.buildAlarmCount);
           this.drawBarChart("myChart1",this.buildTroubleCount);
        }
      });
    },
    //划饼状图
    drawPieChart(id,data){
      let a = data.zero;
      let b = data.one;
      let c = data.two;
      let d = data.three;
      let e = data.five;
      var pie = {
        title: {
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["0-2", "2-4", "4-6", "6-8","8-10"],
          
        },
        series: [
          {
            name: "安全评分",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            label: {
              normal: {                
                color:"#fff",
                fontsize:"10px"
              }
            },
            data: [
              { value: a, name: "0-2" },
              { value: b, name: "2-4" },
              { value: c, name: "4-6" },
              { value: d, name: "6-8" },
              { value: e, name: "8-10" }             
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",

              }
            }
          }
        ]
      };
      let mypie1 = this.$echarts.init(document.getElementById(id));
      mypie1.setOption(pie);
    },
    //划饼状图
    drawBarChart(id,data){
      let a = data.lineChartsDate;
      let b = data.lineChartsCount;
         // 根据值判断柱子颜色的柱状图
      var option1 = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            show: true,
            data: a,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        grid: {
          y: 15,
          x2: 0,
          y2: 20,
          x: 0,
          borderWidth: 1
        },
        series: [
          {
            name: "数量",
            type: "bar",
            barWidth: "60%",
            data: b,
            itemStyle: {
              normal: {
                // 值显示在柱子顶部
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: function(params) {
                      if (params.value > 0 && params.value < 2) {
                        return "#333333";
                      } else if (params.value >= 2 && params.value <= 5) {
                        return "#666666";
                      } else if (params.value >= 5 && params.value <= 10) {
                        return "#999999";
                      }
                      return "#bad616";
                    }
                  },
                  formatter: function(params) {
                    if (params.value == 0) {
                      return "";
                    } else {
                      return params.value;
                    }
                  }
                },
                color: function(params) {
                  if (params.value > 0 && params.value < 2) {
                    return "#333333";
                  } else if (params.value >= 2 && params.value <= 5) {
                    return "#666666";
                  } else if (params.value >= 5 && params.value <= 10) {
                    return "#999999";
                  }
                  return "#bad616";
                }
              }
            }
          }
        ]
      };
      let myChart2 = this.$echarts.init(document.getElementById(id));
      myChart2.setOption(option1);
    },
    getBuildDetails(){
      this.$fetch(
          "/api/building/queryBuildDetailInfo", 
          this.buildDetails_parameter
          ).then(response => {
            if (response.data) {
                let data = response.data;
                this.buildPlanCount = data.buildStatsInfo.planCount;
                this.buildTotalScore = data.buildStatsInfo.totalScore;
                this.buildAlarmMap = data.buildStatsInfo.buildAlarmMap;
                this.buildTroubleMap = data.buildStatsInfo.buildingTrouble;
                this.buildBaseInfo = data.buildInfo;
                this.buidyear = data.buildInfo.buildYear;
            }
        });
    }
  },
  mounted() {
    if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
      this.getBuildIngAssess_parameter.unitId=sessionStorage.unitid;
    }
    if(sessionStorage.unitid==0){
      this.getBuildIngAssess_parameter.unitId=null;
    }
    this.defaultTimeVaule();
    this.getData();
  }
};
</script>
