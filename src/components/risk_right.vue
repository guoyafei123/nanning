<template>
  <div class="toolright">
      <!-- 筛选 -->
        <section class="my-filter padding5 bg-gray-222 clearfix">
                  <!-- 单位筛选 -->
                  <div class="col-sm-3 padding0">
                    <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <!-- 日期筛选 -->
                  <div class="col-sm-9 padding0">
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
      <section class="risk-iteminfo display-none" >
        <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
        <section>
          <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择 -->
                    <div class="personinfo">
                        <p>
                        <span class="size-20 font-blue">中心小学</span>                        
                        <span class="float-right">
                            <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                        </span>
                        </p>
                        <p class="col-sm-5 text-left padding0">
                            <span>
                                <i class="fas fa-industry"></i> 良庆区中心小学</span>
                        </p>
                        <P class="col-sm-7 text-right padding0">
                            <span class="text-right">
                            最新更新<span class="font-gray-999">2018.07.09 08:00:00</span>
                            </span>
                        </P>                        
                    </div>
            </div>
        </section>
        <section>
          <div class="toolcount margin-top20 clearfix">
            <h4 class="p-title">安全评分</h4>
            <div class="col-sm-4 font-gray-999 padding0 margin-top20">
              <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                <li>
                  <p class="line-height86 size-60 font-blue"><span class="size-100">8</span>.7</p>
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
              <h4 class="p-title">单项风险</h4>
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
            <h4 class="p-title">安全评分变化趋势
              <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                <i class="icon iconfont icon-weibiaoti10 size-12"></i>
              </span>
            </h4>
            <div id="riskchar3" style="width: 380px;height:180px;margin: 0 auto;"></div>
          </div>
        </section>

        
      </section>

      <section class="risk-lineinfo">
        <section>
          <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择 -->
                    <div class="personinfo">
                        <p>
                        <span class="size-20 font-blue">中心小学</span>                        
                        <span class="float-right">
                            <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                        </span>
                        </p>
                        <p class="col-sm-5 text-left padding0">
                            <span>
                                <i class="fas fa-industry"></i> 良庆区中心小学</span>
                        </p>
                        <P class="col-sm-7 text-right padding0">
                            <span class="text-right">
                            最新更新<span class="font-gray-999">2018.07.09 08:00:00</span>
                            </span>
                        </P>                        
                    </div>
            </div>
        </section>
        <section>
          <div class="toolcount margin-top20">
            <h4 class="p-title">安全评分</h4>
            <div class="col-sm-7 font-gray-999 padding-right0 size-12">
              <div class="row text-center margin-top30">
                <div class="col-sm-12 text-left margin-bottom20">
                        <p class="">单位评分 <span class="font-blue">3处</span> <span>低于</span> <span>4.0</span></p>
                      </div>
                <div class="col-sm-4 personnel-borderright">
                  <p class="size-16 font-red">2</p>
                  <p>红色预警</p>
                </div>
                <div class="col-sm-4 personnel-borderright">
                  <p class="size-16 font-orange">无</p>
                  <p>橙色预警</p>
                </div>
                <div class="col-sm-4">
                  <p class="size-16 font-yellow">3</p>
                  <p>黄色预警</p>
                </div>
              </div>
            </div>
            <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
              <div id="pieb1" style="width: 100%;height:150px;margin: 0 auto;"></div>
            </div>
          </div>
        </section>
        <section>
          <div class="toolcount">
            <h4 class="p-title">风险系数</h4>
            <div class="row margin-top20 padding-left10">
                  <el-radio-group v-model="workervalue">
                    <el-radio :label="1" class="col-xs-3">建筑防火</el-radio>
                    <el-radio :label="2" class="col-xs-3">消防设施</el-radio>
                    <el-radio :label="3" class="col-xs-3">火灾危险源</el-radio>
                    <el-radio :label="4" class="col-xs-3">消防安全管理</el-radio>
                    <el-radio :label="5" class="col-xs-3">灭火救援</el-radio>
                  </el-radio-group>
              </div>
            <div id="axis1" style="width: 100%;height:200px;margin: 0 auto;"></div>
          </div>
        </section>
        <section>
          <div class="toolcount margin-top40">
            <h4 class="p-title">安全评分变化趋势
              <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                <i class="icon iconfont icon-weibiaoti10 size-12"></i>
              </span>
            </h4>
            <div id="myChart" style="width: 100%;height:180px;margin: 0 auto;"></div>
          </div>
        </section>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 单选按钮
      workervalue:1,
    };
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
