<template>
  <div class="toolright font-white  margin-top-40" style="overflow-y: auto;height: 100%;">
    <section class="per-iteminfo display-none">
      <section>
        <div class="personinfo">
          <p>
            <span class="size-24">段亚伟</span>
            <span class="bgbox-min bg-gray-666 font-black">巡检人员</span>
            <span class="bgbox-min bg-blue font-black">在线</span>
            <span class="float-right">
                      <span class="bgbox-max bg-gray-333 font-gray-999">
                          <i class="fa fa-th-large"></i> 打电话</span>
                      <span class="bgbox-max bg-gray-333 font-blue">
                          <i class="fa fa-th-large"></i> 发消息</span>
                  </span>
          </p>
          <p class="col-sm-5 text-left padding0">
            <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> 良庆区中心小学</span>
          </p>
          <p class="col-sm-7 text-right padding0">
            <span class="size-12 font-gray-666">男</span>
            <span class="size-12 font-gray-666">25岁</span>
            <span class="size-12 font-gray-666">河北邯郸</span>
            <span class="size-12 font-gray-666">19919852100</span>
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
                <p class="line-height70">
                  8.<span class="size-36">7</span>
                </p>
              </li>
              <li>
                <p class="size-10">Personnel Score</p>
              </li>
              <li>
                <p class="size-16 font-blue">个人综合评分</p>
              </li>
            </ul>
          </div>
          <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
            <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
              <li>
                <p class="size-18 font-white">个人数据</p>
              </li>
              <li>
                <p class="size-10 set-scaleright">Personnel Statistics</p>
              </li>
              <li>
                <p class="set-width-50 size-12">在线时长</p>
                <p class="display-inline-block font-blue">3229分钟
                </p>
              </li>
              <li class="row text-left size-12">
                <div class="col-sm-6">
                  <p class=" margin-bottom0">报警响应次数 <span class="font-gray-ccc">23次</span></p>
                </div>
                <div class="col-sm-6">
                  <p class=" margin-bottom0">平均响应时 <span class="font-gray-ccc">12.2分</span></p>
                </div>
              </li>
              <li class="row text-center">
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-white">25</p>
                  <p class="size-12 margin-bottom0">巡检完成数</p>
                </div>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-white">25</p>
                  <p class="size-12 margin-bottom0">隐患发现数</p>
                </div>
                <div class="col-sm-4 container-padding0">
                  <p class="size-16 font-white">25</p>
                  <p class="size-12 margin-bottom0">隐患解决数</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="toolcompanyrate margin-top40">
          <h2 class="size-16 font-gray-ccc">
            <ul class="row padding0 margin0 size-12 font-gray-999">
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0">
                    <p>
                                      <span class="toolcompanyrate-char-bg">
                                          <span class="toolcompanyrate-char-qg" style="width:50%;"></span>
                                      </span>
                    </p>
                    <p>巡检完成</p>
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
                    <p>隐患发现</p>
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
                    <p>隐患解决</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                    <span class="">97.6%</span>
                  </div>
                </div>
              </li>

            </ul>
          </h2>
        </div>
      </section>
      <section>
        <div class="toolregionrate margin-top40">
          <h2 class="size-16 font-gray-ccc">
            <span class="tool-rect bg-blue"></span>历史趋势
            <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666">
                      <i class="fa fa-th-large"></i>
                  </span>
          </h2>
          <div class="table-responsive">
                <table class="table size-12 table-condensed toolroute-table margin-top10">
                  <tr>
                    <th>序号</th>
                    <th>巡检日期</th>
                    <th>路线名称</th>
                    <th>巡检统计</th>
                    <th>状态</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-blue"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-blue"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-blue"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-gray-666"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-gray-666"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-gray-666"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-gray-666"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </td>
                    <td>
                      <a>
                        <i class="fa fa-th-large font-gray-666"></i>
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
        </div>
      </section>
    </section>
    <section class="per-lineinfo">
        <section>
          <div class="personinfo">
            <p>
              <span class="size-20 font-blue">南宁市良庆区</span>
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
              <span class="tool-rect bg-blue"></span>人员数量
            </h2>
            <div class="col-sm-7  font-gray-999 padding-right0">
                
              <div class="row text-center margin-top50">
                <p class="text-left toolcountp1">总数 <span class="font-blue">89 </span></p>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-red" >123</p>
                  <p class="size-12 margin-bottom0">巡检人员</p>
                </div>
                <div class="col-sm-4 container-padding0 personnel-borderright">
                  <p class="size-16 font-blue">13</p>
                  <p class="size-12 margin-bottom0">管理人员</p>
                </div>
                <div class="col-sm-4 container-padding0">
                  <p class="size-16 font-gray-999">25</p>
                  <p class="size-12 margin-bottom0">监控人员</p>
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
              <span class="tool-rect bg-blue "></span>{{setvuextest}}
            </h2>
            <div class="font-gray-999 padding-right0 margin-top10 ">
                <div class="row text-left set-padding30">
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 巡检人员</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 监控人员</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-12 margin-bottom0">
                      <i class="fa fa-th-large"></i> 管理人员</p>
                  </div>
                </div>
              </div>
            <div class="row">
              
              <div class="col-sm-6" >
                <div id="axis1" style="width: 100%;height:150px;margin: 0 auto;"></div>
              </div>
              <div class="col-sm-6" >
                <section>
                  <div class="toolcompanyrate margin-top40">
                    <h2 class="size-16 font-gray-ccc">
                      <ul class="row padding0 margin0 size-12 font-gray-999">
                        <li class="col-sm-12">
                          <div class="row margin0 padding0">
                            <div class="toolcompanyrate-char col-sm-6 padding0">
                              <p class="font-blue">
                                评分最高
                              </p>
                              <p>段亚伟</p>
                            </div>
                            <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                              <span class="font-blue">9.9分</span>
                            </div>
                          </div>
                        </li>
                        <li class="col-sm-12">
                          <div class="row margin0 padding0">
                            <div class="toolcompanyrate-char col-sm-6 padding0">
                              <p class="font-red">
                                评分最低
                              </p>
                              <p>段亚伟</p>
                            </div>
                            <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                              <span class="font-red">2.9分</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </h2>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="row toolcount margin-top30">
            <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
              <span class="tool-rect bg-blue"></span>人数变化
              <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666">
                      <i class="fa fa-th-large"></i>
                  </span>
            </h2>
            <div id="myChart" style="width: 100%;height:180px;margin: 0 auto;"></div>
          </div>
        </section>
    </section>
    <!-- <section>
      <div class="toolpie margin-top40">
        <h2 class="size-16 font-gray-ccc">
          <ul class="row padding0 margin0 size-12 font-gray-999">
            <li class="col-sm-4 container-padding0">
              <p class="size-12 font-gray-999 text-center ">执行任务比</p>
              <div id="pie1" style="height: 100px;width: 100%;"></div>
            </li>
            <li class="col-sm-4 container-padding0">
              <p class="size-12 font-gray-999 text-center ">隐患解决占比</p>
              <div id="pie2" style="height: 100px;width: 100%;"></div>
            </li>
            <li class="col-sm-4 container-padding0">
              <p class="size-12 font-gray-999 text-center ">隐患发现占比</p>
              <div id="pie3" style="height: 100px;width: 100%;"></div>
            </li>
          </ul>
        </h2>
      </div>
    </section> -->
    <div class="ceshi-btn">
      <button @click="moren">详情</button>
      <button @click="jianzhu">统计</button>
    </div>
  </div>
</template>

<script>
  import{mapState} from "vuex"
  export default {
  data() {
    return {
      vuexone:'123'
    };
  },
  methods: {
    moren() {
      $(".per-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".per-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".per-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".per-iteminfo")
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

      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      let axis1b = this.$echarts.init(document.getElementById("axis1"));
      axis1b.setOption(option1);
      let mypie1 = this.$echarts.init(document.getElementById("pieb1"));
      mypie1.setOption(pie);
    }

  },
  mounted() {
    this.chart_one();
  },

  computed:mapState([
    'setvuextest'
  ]),
  watch:{
    setvuextest(){
      console.log(this.vuexone);
      // this.vuexone=this.setvuextest;
    }
  },
};
</script>

<style scoped>
  .line-height70{
    line-height: 70px !important;
  }
</style>
