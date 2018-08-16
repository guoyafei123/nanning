<template>
        <div class="toolright">
            <!-- 筛选 -->
            <section class="my-filter padding5 bg-gray-222 clearfix">
                      <!-- 单位筛选 -->
                      <div class="col-sm-3 padding0">
                        <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="value7" placeholder="瑞和家园">
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
            <section v-show="itemtrue==false" class="risk-lineinfo">
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
                              <i class="fas fa-industry"></i> 中心小学</span>
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
                <div class="toolcount">
                  <h4 class="p-title">风险系数</h4>
                  <div id="axis1" style="width: 100%;height:200px;margin: 0 auto;"></div>
                </div>
              </section>
              <section>
                <h4 class="p-title margin-top30">风险系数</h4>
                <div class="row cardinfo-style margin-top10 font-gray-999">
                  <p class="col-sm-4">建筑防火 <span>3.5</span></p>
                  <p class="col-sm-4">火灾危险源 <span>3.5</span></p>
                  <p class="col-sm-4">消防设施 <span>3.5</span></p>
                  <p class="col-sm-4">消防安全管理 <span>3.5</span></p>
                  <p class="col-sm-4">灭火救援 <span>3.5</span></p>
                  <p class="col-sm-4">建筑评估 <span>3.5</span></p>
                  <p class="col-sm-4">生活用火隐患 <span>3.5</span></p>
                  <p class="col-sm-4">消防给水 <span>3.5</span></p>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top30">
                  <h4 class="p-title">安全评分变化趋势
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </h4>
                  <div id="myChart" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>
            </section>

            <section v-show="itemtrue==true" class="risk-iteminfo">
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
                              <i class="fas fa-industry"></i> 中心小学</span>
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
                <div class="toolcount">
                  <h4 class="p-title">风险系数</h4>
                  <div id="axis11" style="width: 100%;height:200px;margin: 0 auto;"></div>
                </div>
              </section>
              <section>
                <h4 class="p-title margin-top30">风险系数</h4>
                <div class="row cardinfo-style margin-top10 font-gray-999">
                  <p class="col-sm-4">建筑参数 <span>3.5</span></p>
                  <p class="col-sm-4">耐火等级 <span>3.5</span></p>
                  <p class="col-sm-4">建筑内防火间距 <span>3.5</span></p>
                  <p class="col-sm-4">安全疏散条件 <span>3.5</span></p>
                  <p class="col-sm-4">避雷 <span>3.5</span></p>
                  <p class="col-sm-4">电气设备隐患 <span>3.5</span></p>
                  <p class="col-sm-4">火灾警报系统 <span>3.5</span></p>
                  <p class="col-sm-4">消防给水 <span>3.5</span></p>
                  <p class="col-sm-4">灭火设备 <span>3.5</span></p>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top30">
                  <h4 class="p-title">安全评分变化趋势
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </h4>
                  <div id="myChart11" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>
            </section>
        </div>
      </template>

    <script>
    import{mapState} from "vuex";
export default {
  
  data() {
    return {
      // 单选按钮
      workervalue: 1,
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
      options: [
        {
          value: "选项1",
          label: "怀化市"
        },
        {
          value: "选项2",
          label: "怀化市兴宁区"
        },
        {
          value: "选项3",
          label: "怀化市横县"
        }
      ],
      //风险统计参数
      riskAssessCount_parameter:{

      },
      riskAssessCountData:Object,

      //曲线图请求数据
      queryTrendMapGraph_parameter: {  
        unitId: 4,
        startTime: "2018-06-01",
        endTime: "2018-08-09"
      },
      lineChatMapGraphData:Object,
      
      //风险详情
      queryRiskDetails_parameter:{
        inspectionPlanId:486,
        beginTime:'2018-06-01',
        endTime:'2018-08-09'
      },
      riskAssessDetails:Object,
      itemtrue: false,
    };
  },
  computed:mapState([
    'toriskitem',
  ]),
  watch:{
    // 所有巡检单位
    toriskitem(){
      this.itemtrue=this.toriskitem;
      this.drawPieChart("myChart11",null);
      this.drawLineChart("axis11",null);
    },
  },

  methods: {
    getData() {
      // 请求统计数据
      this.$fetch("/api/inspection/planInspectionCount").then(response => {
        console.log(response.data);
        let data = response.data;
        if (response.data) {
         
        }
      });
      
      // 请求历史曲线图
      this.$fetch(
        "/api/inspection/queryTrendMapGraph",
        this.queryTrendMapGraph_parameter
      ).then(response => {
          if (response) {
            let data = response.data.result.dateMap;
            let a=[],b=[];
            for (var value in data) {			
              a.push(value);
              b.push(data[value]);
            }
            this.drawLineChart(
              "myChart11",response.data.result.dateMap
            );
          }
        })
        .then(err => {
          console.log(err);
        });

      // 请求历史曲线图
      this.$fetch(
        "/api/inspection/queryTrendMapGraph",
        this.queryTrendMapGraph_parameter
      ).then(response => {
          if (response) {
            let data = response.data.result.dateMap;
            let a=[],b=[];
            for (var value in data) {			
              a.push(value);
              b.push(data[value]);
            }
            this.drawLineChart(
              "myChart11",response.data.result.dateMap
            );
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    //right-折线图
    drawLineChart(id,data){
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
          data: ["评分"]
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
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      let myChart11 = this.$echarts.init(document.getElementById("myChart11"));
      myChart11.setOption(option);
    },
    //left-柱状图
    drawPieChart(id,data){
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
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            data: [220, 532, 901]
          }
        ]
      };
      let axis1 = this.$echarts.init(document.getElementById("axis1"));
      axis1.setOption(option1);
      let axis11 = this.$echarts.init(document.getElementById("axis11"));
      axis11.setOption(option1);
    }
  },
  mounted() {
    this.$store.commit("route_path", this.$route.path);
    // 右侧图表
    this.drawPieChart("myChart",null);
    this.drawLineChart("axis1",null);
    //this.getData();
  }
};
</script>
