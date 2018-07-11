<template>
  <div class="">
    <div class="toolright font-white  margin-top20">

      <section class="risk-iteminfo display-none" >
        <section>
          <div class="personinfo">
            <p>
              <span class="size-20 font-blue">实验教学楼</span>
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
        <section>
          <div class="row toolcount margin-top40">
            <div class="col-sm-4  font-gray-999 padding-right0">
              <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                <li>
                  <p class="line-height86 size-60 font-red"><span class="size-100">1</span>.7</p>
                </li>
                <li>
                  <div id="riskchar1" style="width: 130%;height:50px;margin: 0 auto;"></div>
                </li>
              </ul>
            </div>
            <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
              <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                <li>
                  <!-- <p class="size-18 font-gray-ccc">路线统计</p>s -->
                  <div id="riskchar2" style="width: 230px;height:150px;margin: 0 auto;"></div>
                </li>
              </ul>
              
            </div>
          </div>
        </section>

        <section id="inspectbtn-company">
          <div class="toolcompanyrate">
            <h2 class="size-16 font-gray-ccc">
              <span class="tool-rect bg-blue"></span>单项风险</h2>
            <ul class="row padding0 margin0 size-12 font-gray-999">
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                      <span class="toolcompanyrate-char-bg">
                          <span class="toolcompanyrate-char-qg" style="width:50%;"></span>
                      </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:79%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:15%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:67%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:34%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:22%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:97%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:37%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                  <span class="toolcompanyrate-char-bg">
                                      <span class="toolcompanyrate-char-qg" style="width:82%;"></span>
                                  </span>
                    </p>
                    <p>单位A</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div class="row toolcount margin-top30">
            <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
              <span class="tool-rect bg-blue"></span>历史评估
              <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666">
                      <i class="fa fa-th-large"></i>
                  </span>
            </h2>
            <div id="riskchar3" style="width: 380px;height:180px;margin: 0 auto;"></div>
          </div>
        </section>

        
      </section>

      <section class="risk-lineinfo">
        <section>
          <div class="personinfo">
            <p>
              <span class="size-20 font-blue">南宁市良庆区</span>
              <span class="float-right">
                        <span class="font-blue">
                            <i class="fa fa-th-large"></i> 评分2.6</span>
                    </span>
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
        <section>
          <div class="row toolcount">
            <h2 class="size-16 font-gray-ccc margin-top0 margin-bottom0">
              <span class="tool-rect bg-blue"></span>安全评分
            </h2>
            <div class="col-sm-7  font-gray-999 padding-right0">
                
              <div class="row text-center margin-top50">
                <p class="text-left toolcountp1">单位评分 <span class="font-blue">2处 </span> <span>高于 </span> <span>6.0</span></p>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-red">42</p>
                  <p class="size-12 margin-bottom0">红色预警</p>
                </div>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-orange">无</p>
                  <p class="size-12 margin-bottom0">橙色预警</p>
                </div>
                <div class="col-sm-4 container-padding0">
                  <p class="size-16 font-yellow">25</p>
                  <p class="size-12 margin-bottom0">黄色预警</p>
                </div>
              </div>
            </div>
            <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
              <div id="pieb1" style="width: 100%;height:150px;margin: 0 auto;"></div>
            </div>
          </div>
        </section>
        <section>
          <div class="row toolcount">
            <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
              <span class="tool-rect bg-blue "></span>风险系数
            </h2>
            <div class="font-gray-999 padding-right0 margin-top10 ">
                <div class="row text-left set-padding30">
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 建筑防火</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 消防设施</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 火灾危险源</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 消防安全管理</p>
                  </div>
                   <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 灭火救援</p>
                  </div>
                </div>
              </div>
            <div id="axis1" style="width: 100%;height:200px;margin: 0 auto;"></div>
          </div>
        </section>
        <section>
          <div class="row toolcount margin-top30">
            <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
              <span class="tool-rect bg-blue"></span>历史趋势
              <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666">
                      <i class="fa fa-th-large"></i>
                  </span>
            </h2>
            <div id="myChart" style="width: 100%;height:180px;margin: 0 auto;"></div>
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
  data() {
    return {};
  },
  methods: {
    moren() {
      $(".risk-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".risk-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".risk-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".risk-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    chart_one() {
      var option = {
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
      var pie = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
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
            data: [
              { value: 335, name: "50%", selected: true },
              { value: 679, name: "" }
            ]
          }
        ]
      };

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
        // 横向柱子
            var riskchar1f = {
                            tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top:'0'
                },
                xAxis:  {
                    type: 'value',
                    show:false
                },
                yAxis: {
                    type: 'category',
                    show:false
                },
                series: [
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                color:'#000'
                            }
                        },
                        itemStyle: {
                        normal: {
                            
                            color: function(params) {
                            if (params.value > 0 && params.value < 300) {
                                return "#333333";
                            } else if (params.value >= 100 && params.value <= 600) {
                                return "#666666";
                            } else if (params.value >= 200 && params.value <= 900) {
                                return "#999999";
                            }
                            return "#bad616";
                            }
                        }
                        },
                        data: [220, 532, 901]
                    }
                ]
            };
            let riskchar1b = this.$echarts.init(document.getElementById("riskchar1"));
            riskchar1b.setOption(riskchar1f);
            let riskchar2b = this.$echarts.init(document.getElementById("riskchar2"));
            riskchar2b.setOption(option1);
            let riskchar3b = this.$echarts.init(document.getElementById("riskchar3"));
            riskchar3b.setOption(option);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      let mypie1 = this.$echarts.init(document.getElementById("pieb1"));
      mypie1.setOption(pie);
      let myChart1 = this.$echarts.init(document.getElementById("axis1"));
      myChart1.setOption(option1);
    }
  },
  mounted() {
    this.chart_one();
  }
};
</script>

<style scoped>
.line-height86 {
  line-height: 86px !important;
}
.padding-right16 {
  padding-right: 16px;
}
</style>
