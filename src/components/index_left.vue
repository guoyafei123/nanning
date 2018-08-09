<template>
  <div class="row toolleft margin-right0">
    <!-- 今日警报 -->
    <section class="common-left-statistics mian-warning-statistics">
        <ul class="list-unstyled">
            <li class="col-sm-7 size-50">
              <!-- 今日警报发生数量 -->
                <i class="icon iconfont icon-baojing-xian- size-50"></i> <span v-if="queryAlarmData.alarmCount">{{queryAlarmData.alarmCount.ALLALARM}}</span> 
            </li>
            <li class="col-sm-5 text-right">
              <!-- 今日警报title -->
              <small>Warning Statistics</small>
              <h3><span class="badge badge-statistics bg-blue font-black">{{alarmtext}}</span>警报</h3>
            </li>
            <li class="col-sm-12">
              <!-- 历史未解决，已确认，复位/关闭 -->
                <h5>未解决 <span v-if="queryAlarmData.alarmCount">{{queryAlarmData.alarmCount.UNSOLVE}}</span></h5>
                <h5>已确认 <span v-if="queryAlarmData.alarmCount">{{queryAlarmData.alarmCount.CONFIRMED}}</span></h5>
                <h5>复位/关闭 <span v-if="queryAlarmData.alarmCount">{{queryAlarmData.alarmCount.CLOSED}}</span></h5>
              <span class="indexdateabox alarmdate">
                  <span class="indexdateactive">日</span>
                  <span>月</span>
                  <span>年</span>
                </span>
            </li>
            <li class="col-sm-12 container-padding20 mian-chart">
              <div id="charalarm" style="width: 100%;height:130px;margin: 0 auto;"></div>
            </li>
        </ul>        
    </section>
    <!-- 今日隐患 -->
    <section class="common-left-statistics mian-dangers-statistics">
        <ul class="list-unstyled">
            <li class="col-sm-7 size-50">
              <!-- 今日隐患发生数量 -->
                <i class="icon iconfont icon-yinhuan-xian- size-50"></i> <span v-if="queryTroubleData.troubleCount">{{queryTroubleData.troubleCount.ALLTROUBLE}}</span> 
            </li>
            <li class="col-sm-5 text-right">
              <!-- 今日隐患title -->
              <small>Warning Statistics</small>
              <h3><span class="badge badge-statistics bg-blue font-black">{{troubletext}}</span>隐患</h3>
            </li>
            <li class="col-sm-12">
              <!-- 历史未解决，已确认，复位/关闭 -->
                <h5>未解决 <span v-if="queryTroubleData.troubleCount">{{queryTroubleData.troubleCount.SOLVE}}</span></h5>
                <h5>已解决 <span v-if="queryTroubleData.troubleCount">{{queryTroubleData.troubleCount.UNSOLVE}}</span></h5>
                <span class="indexdateabox troubledate">
                  <span class="indexdateactive">日</span>
                  <span>月</span>
                  <span>年</span>
                </span>
            </li>
            <li class="col-sm-12 container-padding20 mian-chart">
              <div id="chartrouble" style="width: 100%;height:130px;margin: 0 auto;"></div>
            </li>
        </ul>        
    </section>
    <!-- 今日巡检完成 -->
    <section class="common-left-statistics common-top-statistics">
        <ul class="list-unstyled">
            <li class="col-sm-7 text-left">
              <!-- 今日巡检发生数量 -->
              <div class="size-50">
                <i class="icon iconfont icon-xunjian-xian- size-50"></i><span>{{planInspectionCount.finish}}</span> 
              </div>
              <!-- 今日巡检title -->
              <div class="margin-top20">
                <small>Complete Statistics</small>
                <h3><span class="badge badge-statistics bg-blue font-black">今日</span>巡检完成</h3>
              </div>
            </li>
            <li class="col-sm-5 mian-pie-chart">
              <!-- 巡检完成占比（饼图） -->
              <div id="charCount" style="width: 100%;height:150px;margin: 0 auto;"></div>
            </li>
            <li class="col-sm-12 margin-top10">
              <!-- 历史未解决，已确认，复位/关闭 -->
              <h5>额定任务<span>{{planInspectionCount.amount}}</span></h5>
              <h5>巡检人员<span>{{planInspectionCount.plansum}}</span></h5>
              <h5>巡检路线<span>{{planInspectionCount.plancount}}</span></h5>
            </li>
        </ul>        
    </section>
  </div>
</template>

<script>
import{mapState} from "vuex";
export default {
  data() {
    return {
      troubletext:'今日',
      alarmtext:'今日',
      planInspectionCount_parmar: {},
      planInspectionCount: {
        finish: "",
        nofinish: "",
        amount: "",
        plancount: "",
        planing: "",
        weekRate: "",
        monthRate: "",
        dayRate: "",
        historyRate: "",
        plansum: "",
        troubleRate: ""
      },
      queryAlarmData_parmar:{
        dateType:1
      },
      queryAlarmData:Object,
      queryTroubleData_parmar:{
        dateType:1
      },
      queryTroubleData:Object,
      torightdata:{
        allalarm:'',
        alltrouble:'',
        finish:''
      }
    };
  },
  computed:mapState([
    'toIndexLeftAlarmChar',
  ]),
  watch:{
    toIndexLeftAlarmChar(){
      console.log(this.toIndexLeftAlarmChar);
      this.getalarm();
    },
  },
  methods: {
    getdata() {
      this.$fetch(
        "/api/inspection/planInspectionCount",
        this.planInspectionCount_parmar
      ).then(response => {
        if (response.data) {
          let data = response.data;
          this.torightdata.finish=data.planInstanceCount.finish
          this.planInspectionCount.finish = data.planInstanceCount.finish;
          this.planInspectionCount.nofinish =
            data.planInstanceCount.nofinish;
          this.planInspectionCount.amount = data.planInstanceCount.amount;
          this.planInspectionCount.plancount =
            data.planInstanceCount.plancount;
          this.planInspectionCount.planing = data.instanceIngCount.planing;
          this.planInspectionCount.weekRate = data.instanceByDay.weekRate;
          this.planInspectionCount.monthRate = data.instanceByDay.monthRate;
          this.planInspectionCount.dayRate = data.instanceByDay.dayRate;
          this.planInspectionCount.historyRate =
            data.instanceByDay.historyRate;
          this.planInspectionCount.plansum = data.instanceIngCount.plansum;
          this.planInspectionCount.troubleRate =
            data.instanceByDay.troubleRate;
          this.draw_piemin('charCount', this.planInspectionCount);
        }
      });
    },
    getalarm(){
      this.$fetch(
        "/api/alarmstats/queryAlarmTroubleData",
        this.queryAlarmData_parmar
      ).then(response => {
        if (response.data) {
          this.queryAlarmData=response.data.result;
          // this.torightdata.alltrouble=this.queryAlarmData.troubleCount.ALLTROUBLE;
          // this.torightdata.allalarm=this.queryAlarmData.alarmCount.UNSOLVE;
          // this.$store.commit('torightdata',this.torightdata);
          if(response.data.result.alarmLineChart)
          this.draw_line(
            "charalarm",this.queryAlarmData.alarmLineChart.lineChartsDate,this.queryAlarmData.alarmLineChart.lineChartsCount
          );
        }
      });
    },
    gettrouble(){
       this.$fetch(
        "/api/alarmstats/queryAlarmTroubleData",
        this.queryTroubleData_parmar
      ).then(response => {
        if (response.data) {
          this.queryTroubleData=response.data.result;
          if(response.data.result.troubleLineChart)
          this.draw_line(
            "chartrouble",this.queryTroubleData.troubleLineChart.lineChartsDate,this.queryTroubleData.troubleLineChart.lineChartsCount
          );
        }
      });
    },
    draw_piemin(id, data) {
      let value;
      let name;
      if (data.amount != 0) {
        value = 0;
        name = "暂无统计";
      } else {
        value = data.finish / data.amount * 100;
        name = "区域巡检完成率 " + value.toFixed(2) + "%";
      }
      let d = [
        {
          value: value,
          name: name
        }
      ];
      var char = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            // selectedMode: "single",
            radius: [0, "70%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            color: ["#bad616", "#333"],
            data: d
          }
        ]
      };
      
      let chars = this.$echarts.init(document.getElementById(id));
      chars.setOption(char);
    },
    draw_line(id,d1,d2) {
      let a=d1,b=d2;
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
          y: 5,
          x2: 10,
          y2: 30,
          x: 25,
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
    this.getdata();
    this.getalarm();
    this.gettrouble();
    let that=this;
    $('.troubledate span').click(function(){
      $(this).addClass('indexdateactive').siblings().removeClass('indexdateactive');
      var value=$(this).html();
      if(value=='日'){
        that.troubletext='今日';
        that.queryTroubleData_parmar.dateType=1;
      }else if(value=='月'){
        that.troubletext='本月';
        that.queryTroubleData_parmar.dateType=2;
      }else if(value=='年'){
        that.troubletext='本年';
        that.queryTroubleData_parmar.dateType=3;
      }
      that.gettrouble();
    })
    $('.alarmdate span').click(function(){
      $(this).addClass('indexdateactive').siblings().removeClass('indexdateactive');
      var value=$(this).html();
      if(value=='日'){
        that.alarmtext='今日';
        that.queryAlarmData_parmar.dateType=1;
      }else if(value=='月'){
        that.alarmtext='本月';
        that.queryAlarmData_parmar.dateType=2;
      }else if(value=='年'){
        that.alarmtext='本年';
        that.queryAlarmData_parmar.dateType=3;
      }
      that.getalarm();
    })
  }
};
</script>
