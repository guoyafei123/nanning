<template>
  <div class="">
    <div class="toolright font-white  margin-top20">

        <section class="dan-lineinfo">
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
                    <span class="tool-rect bg-blue"></span>隐患数量
                    </h2>
                    <div class="col-sm-7  font-gray-999 padding-right0">
                        
                    <div class="row text-center margin-top50">
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                        <p class="size-16 font-blue">42</p>
                        <p class="size-12 margin-bottom0">隐患总数</p>
                        </div>
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                        <p class="size-16 font-gray-ccc">102</p>
                        <p class="size-12 margin-bottom0">发现数量</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                        <p class="size-16 font-gray-ccc">25</p>
                        <p class="size-12 margin-bottom0">解决数量</p>
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
                    <span class="tool-rect bg-blue "></span>隐患类型
                    </h2>
                    <div class="font-gray-999 padding-right0 margin-top10 ">
                        <div class="row text-left set-padding30">
                        <div class="col-sm-4 container-padding0">
                            <p class="size-12 margin-bottom0">
                            <i class="fa fa-th-large"></i> 危险品 62</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                            <p class="size-12 margin-bottom0 font-blue">
                            <i class="fa fa-th-large font-blue"></i> 易燃物 12</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                            <p class="size-12 margin-bottom0">
                            <i class="fa fa-th-large"></i> 占用 36</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                            <p class="size-12 margin-bottom0">
                            <i class="fa fa-th-large"></i> 损坏 12</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                            <p class="size-12 margin-bottom0">
                            <i class="fa fa-th-large"></i> 遮挡14</p>
                        </div>
                        </div>
                    </div>
                    <div id="axis1" style="width: 100%;height:150px;margin: 0 auto;padding-left:15px"></div>
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

        <section class="dan-iteminfo display-none">
            <section>
                <div class="personinfo">
                    <p>
                    <span class="size-20">A365 F57D 的设备详情</span>
                    <span class="bgbox-min bg-gray-666 font-black">消防栓报警按钮</span>
                    <span class="float-right">
                            <span class="bgbox-max bg-gray-333 font-gray-999">灭火设备</span>
                        </span>
                    </p>
                    <p>
                        <span class="size-12 font-gray-666">
                            <i class="fa fa-th-large"></i> 良庆区中心小学</span>
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
                        <p class="font-blue size-50">
                            正常
                        </p>
                        </li>
                        <li>
                        <p class="size-10">Running State</p>
                        </li>
                        <li>
                        <p class="size-16 font-blue">设备运行正常</p>
                        </li>
                    </ul>
                    </div>
                    <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                        <li>
                        <p class="size-18 font-white">维保统计</p>
                        </li>
                        <li>
                        <p class="size-10 set-scaleright">Pepair Statistics</p>
                        </li>
                        <li>
                        <p class="set-width-50 size-12">运行时长</p>
                        <p class="display-inline-block font-blue">3229天
                        </p>
                        </li>
                        <li class="row text-center">
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                            <p class="size-16 font-white">42</p>
                            <p class="size-12 margin-bottom0">故障次数</p>
                        </div>
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                            <p class="size-16 font-white">25</p>
                            <p class="size-12 margin-bottom0">维保次数</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                            <p class="size-16 font-white">25</p>
                            <p class="size-12 margin-bottom0">更换周期</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
            <section>
                <div class="textandimg">
                    <h2 class="size-16 font-gray-ccc margin-bottom20 margin-top40">
                    <span class="tool-rect bg-blue"></span>设备信息
                    </h2>
                    <div class="row textandimg-main">
                    <div class="col-sm-7">
                        <span class="size-12 font-gray-666">设备名称 </span>
                        <span class="size-12 font-gray-999">A365F57D </span>
                    </div>
                    <div class="col-sm-5">
                        <span class="size-12 font-gray-666">设备类型 </span>
                        <span class="size-12 font-gray-999">灭火设备</span>
                    </div>
                    <div class="col-sm-7">
                        <span class="size-12 font-gray-666">投入时间 </span>
                        <span class="size-12 font-gray-999">2016.06.06 </span>
                    </div>
                    <div class="col-sm-5">
                        <span class="size-12 font-gray-666">设备标码 </span>
                        <span class="size-12 font-gray-999">
                                <span class="font-blue">查看 </span>
                                <span class="font-blue"> 下载 </span>
                            </span>
                    </div>
                    <div class="col-sm-12">
                        <span class="size-12 font-gray-666">设备位置 </span>
                        <span class="size-12 font-gray-999">良庆区中心小学01号楼301室</span>
                    </div>
                    <div class="col-sm-7">
                        <span class="size-12 font-gray-666">离地高度 </span>
                        <span class="size-12 font-gray-999">2.23m</span>
                    </div>
                    <div class="col-sm-5">
                        <span class="size-12 font-gray-666">距离顶部 </span>
                        <span class="size-12 font-gray-999">2.1m</span>
                    </div>
                    <div class="col-sm-7">
                        <span class="size-12 font-gray-666">发生厂商 </span>
                        <span class="size-12 font-gray-999">广西精密仪器有限公司
                                <i class="fa fa-th-large"></i>
                            </span>
                    </div>
                    <div class="col-sm-5">
                        <span class="size-12 font-gray-666">生产日期 </span>
                        <span class="size-12 font-gray-999">2015.03.06</span>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="textandimg">
                    <h2 class="size-16 font-gray-ccc margin-bottom20 margin-top40">
                    <span class="tool-rect bg-blue"></span>维保信息
                    </h2>
                    <div class="row textandimg-main">
                    <div class="col-sm-7">
                        <span class="size-12 font-gray-666">维保单位 </span>
                        <span class="size-12 font-gray-999">中心小学 </span>
                    </div>
                    <div class="col-sm-5">
                        <span class="size-12 font-gray-666">维保人员 </span>
                        <span class="size-12 font-gray-999">赵堆船
                                <i class="fa fa-th-large"></i>
                            </span>
                    </div>
                    <div class="col-sm-7">
                        <span class="size-12 font-gray-666">维保到期 </span>
                        <span class="size-12 font-yellow">2018.12.06</span>
                    </div>
                    <div class="col-sm-5">
                        <span class="size-12 font-gray-666">更换周期 </span>
                        <span class="size-12 font-blue">360 天</span>
                    </div>
                    </div>
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
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".dan-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-iteminfo")
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          top: "0"
        },
        xAxis: {
          type: "value",
          show: false
        },
        yAxis: {
          type: "category",
          show: false
        },
        series: [
          {
            name: "搜索引擎",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight",
                color: "#000"
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
            data: [220, 532, 901, 40, 400, 123]
          }
        ]
      };
      let riskchar1b = this.$echarts.init(document.getElementById("axis1"));
      riskchar1b.setOption(riskchar1f);
    //   let riskchar2b = this.$echarts.init(document.getElementById("riskchar2"));
    //   riskchar2b.setOption(option1);
    //   let riskchar3b = this.$echarts.init(document.getElementById("riskchar3"));
    //   riskchar3b.setOption(option);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      let mypie1 = this.$echarts.init(document.getElementById("pieb1"));
      mypie1.setOption(pie);
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
