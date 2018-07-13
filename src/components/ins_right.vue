<template>
  <div class="">
    <div class="toolright font-white  margin-top20">
      <section>
          <div class="personinfo">
            <p>
              <span class="size-20">南宁市良庆区</span>
            </p>
            <p>
              <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> 良庆区中心小学</span>
            </p>
          </div>
      </section>
      <section>
          <div class="input-group datatime btn-group date-picker input-daterange datatime margin-top20" data-date="today" data-date-format="yyyy-mm-dd"
              data-original-title="" title="">
            <span class="input-group-btn" data-original-title="" title="">
                <i class="fa fa-th-large"></i> 时间 </span>
            <input type="text" class="form-control" name="from" id="troubleStartTime">
            <span class="input-group-btn" data-original-title="" title=""> 至 </span>
            <input type="text" class="form-control" name="to" id="troubleEndTime">
            <span class="input-group-btn" data-original-title="" title="">
                确定
            </span>
            <span class="input-group-btn" data-original-title="" title=""> 今 周 月 年 </span>
          </div>
      </section>
      <!-- <section>
          <div class="personinfo">
            <p>
              <span class="size-20">控烟严格巡查</span>
              <span class="bgbox-min bg-gray-666 font-black">举报检查</span>
              <span class="bgbox-min bg-blue font-black">每天4次</span>
              <span class="float-right">
                        <span class="font-blue">
                            <i class="fa fa-th-large"></i> 进行中</span>
                    </span>
            </p>
            <p>
              <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> 良庆区中心小学</span>
              <span class="size-12 font-gray-666 float-right set-positiontop2">最新更新 <span class="font-gray-999">2018.7.6 08:00:00</span></span>
            </p>
          </div>
        </section>
        <section>
            <div class="input-group datatime btn-group date-picker input-daterange datatime margin-top20" data-date="today" data-date-format="yyyy-mm-dd"
                data-original-title="" title="">
              <span class="input-group-btn" data-original-title="" title="">
                  <i class="fa fa-th-large"></i> 时间 </span>
              <input type="text" class="form-control" name="from" id="troubleStartTime">
              <span class="input-group-btn" data-original-title="" title=""> 至 </span>
              <input type="text" class="form-control" name="to" id="troubleEndTime">
              <span class="input-group-btn" data-original-title="" title="">
                  确定
              </span>
              <span class="input-group-btn" data-original-title="" title=""> 今 周 月 年 </span>
            </div>
        </section> -->
      <section class="inspection-iteminfo display-none" >
        <section>
          <div class="row toolcount margin-top40">
            <div class="col-sm-4  font-gray-999 padding-right0">
              <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                <li>
                  <p class="line-height95 size-60">360</p>
                </li>
                <li>
                  <p class="size-10">Running State</p>
                </li>
                <li>
                  <p class="size-16 font-blue">路线总完成数</p>
                </li>
              </ul>
            </div>
            <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
              <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                <li>
                  <p class="size-18 font-gray-ccc">路线统计</p>
                </li>
                <li>
                  <p class="size-10 set-scaleright">Repair Statistics</p>
                </li>
                <li>
                  <p class="size-12">发布时间 <span class="font-gray-ccc">2018.7.6 08:00:00</span></p>
                </li>
                <li>
                  <p class="size-12">运行时长 <span class="font-blue">645</span>天</p>
                </li>
                <li class="row text-center padding-right16">
                  <div class="col-sm-4 container-padding0 personnel-borderright">
                    <p class="size-16 font-white">25</p>
                    <p class="size-12 margin-bottom0">隐患总数</p>
                  </div>
                  <div class="col-sm-4 container-padding0 personnel-borderright">
                    <p class="size-16 font-white">25</p>
                    <p class="size-12 margin-bottom0">巡检人数</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-16 font-white">25</p>
                    <p class="size-12 margin-bottom0">节点总数</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
            <div class="toolbuildrate margin-top30">
            <h2 class="size-14 font-gray-ccc">
              <span class="tool-rect bg-blue"></span>巡检人员
              <span class="float-right popup-inspectbtn font-blue">
                        2人
                    </span></h2>
            <ul class="row padding-left0 size-12 font-gray-999 text-center">
              <li class="col-sm-3">
                <div class="toolbuildrate-people">
                  <img src="../assets/images/people.png">
                  <br/>
                </div>
                <span class="margin-top10 display-inline-block">段亚伟</span>
                <br/>
                <span>93%</span>
              </li>
              <li class="col-sm-3">
                <div class="toolbuildrate-people">
                  <img src="../assets/images/people.png">
                  <br/>
                </div>
                <span class="margin-top10 display-inline-block">段亚伟</span>
                <br/>
                <span>93%</span>
              </li>

            </ul>
          </div>
        </section>
        <section>
            <div class="toolbuildrate margin-top30">
            <h2 class="size-14 font-gray-ccc">
              <span class="tool-rect bg-blue"></span>路线详情 </h2>
              <div class="panel-group tablist-item" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default bg-none border-none border-radiusnone">
                  <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
                    <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
                    <h4 class="panel-title">
                      <a role="button" class="size-12" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        国西中天大厦<span class="itemtitle-value display-inline-block margin-left10 bg-red font-black">1.6</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body padding3">
                      <ul class="size-12 font-gray-999 tablist-itemul">
                        <li>
                          <span>国西中天大厦1层
                            <span class="float-right">
                              <i class="fa fa-th-large font-yellow"></i>
                              <span class="font-blue">23</span>/<span class="font-yellow">14</span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span>国西中天大厦1层
                            <span class="float-right">
                              <i class="fa fa-th-large font-yellow"></i>
                              <span class="font-blue">23</span>/<span class="font-yellow">14</span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span>国西中天大厦1层
                            <span class="float-right">
                              <i class="fa fa-th-large font-yellow"></i>
                              <span class="font-blue">23</span>/<span class="font-yellow">14</span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span>国西中天大厦1层
                            <span class="float-right">
                              <i class="fa fa-th-large font-yellow"></i>
                              <span class="font-blue">23</span>/<span class="font-yellow">14</span>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </section>
      </section>

      <section class="inspection-lineinfo">

        <section>
          <div class="row toolcount">
            <h2 class="size-16 font-gray-ccc margin-top0 margin-bottom0">
              <span class="tool-rect bg-blue"></span>巡检统计
            </h2>

            <div class="col-sm-7  font-gray-999 padding-right0">
              <div class="row text-center margin-top50">
                <div class="col-sm-12 text-left">
                  <p class="size-12">巡检路线 <span class="font-white">{{ins_planInspectionCount.plancount}} </span>&nbsp; 巡检人员 <span class="font-white">{{ins_planInspectionCount.planing}} </span></p>
                </div>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-white">{{ins_planInspectionCount.amount}}</p>
                  <p class="size-12 margin-bottom0">次数统计</p>
                </div>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-white">{{ins_planInspectionCount.finish}}</p>
                  <p class="size-12 margin-bottom0">已完成</p>
                </div>
                <div class="col-sm-4 container-padding0">
                  <p class="size-16 font-white">{{ins_planInspectionCount.nofinish}}</p>
                  <p class="size-12 margin-bottom0">未完成</p>
                </div>
              </div>
            </div>
            <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
              <div id="ins_charCount" style="width: 100%;height:150px;margin: 0 auto;"></div>
            </div>
          </div>
        </section>
        <section>
          <div class="row toolcount">
            <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
              <span class="tool-rect bg-blue "></span>路线巡检任务完成
            </h2>
            <div id="ins_charCompletion" style="width: 100%;height:200px;margin: 0 auto;"></div>
          </div>
        </section>
        <section>
          <div class="row toolcount margin-top30">
            <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
              <span class="tool-rect bg-blue"></span>巡检完成率历史趋势
              <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666">
                      <i class="fa fa-th-large"></i>
                  </span>
            </h2>
            {{ins_queryTrendPieGraph.amount}}
            {{ins_queryTrendPieGraph.finishedAmount}}
            <div id="ins_charHistoricaltrend" style="width: 100%;height:180px;margin: 0 auto;"></div>
          </div>
        </section>
      </section>
    </div>
    <div class="ceshi-btn">
      <button @click="moren">详情</button>
      <button @click="jianzhu">统计</button>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    ins_planInspectionCount: {
      type: Object,
      required: true
    }
  },
  // 加入 watch 监听数据变化
  watch: {
    // ins_queryTrendPieGraph(val){
    //   this.ins_queryTrendPieGraphs = this.ins_queryTrendPieGraph;
    // },
    // currentValue(val){
    //   this.$emit('input',val)
    // }
  },
  data() {
    return {
      // 饼状图参数-请求
      queryTrendPieGraph_parameter: {
        unitId: 4,
        planId: 486
      },
      // 饼状图参数-返回
      ins_queryTrendPieGraph: {
        amount: "",
        finishedAmount: ""
      }
    };
  },
  methods: {
    moren() {
      $(".inspection-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".inspection-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".inspection-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".inspection-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    draw_pie(id,data) {
      console.log(this.ins_queryTrendPieGraph);
      var fin_per=data.finishedAmount/(data.finishedAmount+data.amount)*100;
      var amo_per=data.amount/(data.finishedAmount+data.amount)*100;
      console.log();
      let d = [
        {
          value: data.finishedAmount,
          name: "完成率 "
        },
        {
          value: data.amount,
          name: "额定任务次数 "
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
    chart_one() {
      // 巡检完成率历史趋势曲线图
      var ins_charHistoricaltrend = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "123", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // 图例
        legend: {
          data: ["高", "低"]
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
            data: [100, 499, 50, 1111, 45, 345, 907],
            name: "低",
            type: "line",
            symbol: "none",
            smooth: true,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#333"
                }
              ]
            }
          },
          {
            data: [300, 950, 900, 800, 700, 600, 700],
            name: "高",
            type: "line",
            symbol: "none",
            smooth: true,
            areaStyle: { normal: {} },
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255,255,255,0.3)" // 0% 处的颜色
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

      // 区域相关路线巡检任务完成数量
      var ins_charCompletion = {
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
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "12"],
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
          y: 40,
          x2: 0,
          y2: 20,
          x: 0,
          borderWidth: 1
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220, 192],
            itemStyle: {
              normal: {
                // 值显示在柱子顶部
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: function(params) {
                      if (params.value > 0 && params.value < 100) {
                        return "#333333";
                      } else if (params.value >= 100 && params.value <= 200) {
                        return "#666666";
                      } else if (params.value >= 200 && params.value <= 300) {
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
                  if (params.value > 0 && params.value < 100) {
                    return "#333333";
                  } else if (params.value >= 100 && params.value <= 200) {
                    return "#666666";
                  } else if (params.value >= 200 && params.value <= 300) {
                    return "#999999";
                  }
                  return "#bad616";
                }
              }
            }
          }
        ]
      };

      let ins_charHistoricaltrendf = this.$echarts.init(
        document.getElementById("ins_charHistoricaltrend")
      );
      // ins_charHistoricaltrendf.setOption(ins_charHistoricaltrend);
      // let ins_charCompletionf = this.$echarts.init(
      //   document.getElementById("ins_charCompletion")
      // );
      // ins_charCompletionf.setOption(ins_charCompletion);
    },

    getData() {
      // 请求饼状图
      this.$fetch(
        "/api/inspection/queryTrendPieGraph",
        this.queryTrendPieGraph_parameter
      )
        .then(response => {
          console.log(response.data);
          let data = response.data;
          if (response.data) {
            this.ins_queryTrendPieGraph.amount = data.result[0].amount;
            this.ins_queryTrendPieGraph.finishedAmount =
              data.result[0].finishedAmount;
            if (this.ins_queryTrendPieGraph) {
              this.draw_pie('ins_charCompletion',this.ins_queryTrendPieGraph);
            }
          }
        })
        .then(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.chart_one();
    this.getData();
  }
};
</script>

<style scoped>
.line-height95 {
  line-height: 118px !important;
}
.padding-right16 {
  padding-right: 16px;
}
</style>
