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
    <!-- 详情 -->
    <section class="per-iteminfo display-none">
      <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
      <section class="margin-top20">
        <div class="personinfo">
          <p>
            <span class="size-20 font-blue">段亚伟</span>
            <span class="bgbox-min bg-gray-666 font-black size-10">巡检人员</span>
            <span class="bgbox-min bg-blue font-black size-10">在线</span>
            <span class="float-right">
                      <span class="bgbox-max bg-blue font-black size-10">
                          <i class="icon iconfont icon-dianhua-mian- size-12"></i> 打电话</span>
                      <span class="bgbox-max bg-gray-333 font-gray-999 size-10">
                          <i class="icon iconfont icon-xiaoxi-mian-- size-12"></i> 发消息</span>
                  </span>
          </p>
          <p class="col-sm-7 text-left padding0">
            <span><i class="fas fa-industry"></i> 良庆区中心小学</span>
          </p>
          <p class="col-sm-5 text-right padding0">
            注册时间:<strong class="font-gray-999">2018-16:23 13:56:37</strong>            
          </p>
        </div>
      </section>
      <section>
        <div class="row toolcount margin-top30">
                  <div class="col-sm-4 font-gray-666 padding-right0">
                    <ul class="toolcount-left margin-top0 padding-left0" id="toolcount">
                      <li class="col-xs-offset-1 col-xs-10 margin-bottom15 padding-left5 padding-left5">
                        <!-- <h1 class="toolcount-p1">8.7</h1> -->
                        <img src="../assets/images/head.jpg" class="img-responsive img-circle" alt="段亚伟">
                      </li>
                      <li class="col-xs-offset-1 col-xs-10 padding-left5 padding-left5 text-center">
                        <h4 class="size-16 font-blue show">段亚伟</h4>
                        <span class="size-12 font-gray-ccc">男 25岁 河北邯郸<br>1861596479</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                      <li>
                        <p class="size-18 font-white">个人数据</p>
                      <li>
                        <p class="size-10 set-scaleright">Personnel Statistics</p>
                      </li>
                      <li class="margin-top20">
                          <p>在线时长 <strong class="font-white">3229分钟</strong></p>
                      </li>
                      <li class="row text-left">
                        <div class="col-sm-6">
                          <p>报警响应 <strong class="font-red">23次</strong></p>
                        </div>
                        <div class="col-sm-6">
                          <p>平均响应时长 <strong class="font-blue">1227s</strong></p>
                        </div>
                      </li>
                      <li class="row text-center padding-right16 margin-top10">
                        <div class="col-sm-4 personnel-borderright">
                          <p class="size-16 show font-white">269</p>
                          <p>巡检完成数</p>
                        </div>
                        <div class="col-sm-4 personnel-borderright">
                          <p class="size-16 show font-white">87</p>
                          <p>隐患发现数</p>
                        </div>
                        <div class="col-sm-4">
                          <p class="size-16 show font-white">63</p>
                          <p>隐患解决数</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
      </section>
      <section>
        <div class="toolcompanyrate margin-top30">
          <h2 class="size-16 font-gray-ccc">
            <ul class="row padding0 margin0 size-12 font-gray-999">
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0 padding-left5 container-padding5">
                    <p>
                                      <span class="toolcompanyrate-char-bg">
                                          <span class="toolcompanyrate-char-qg" style="width:50%;"></span>
                                      </span>
                    </p>
                    <p class="size-10">巡检完成率</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-right5 font-blue size-16 text-center">
                    <span>97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0 padding-left5 container-padding5">
                    <p>
                                      <span class="toolcompanyrate-char-bg">
                                          <span class="toolcompanyrate-char-qg" style="width:79%;"></span>
                                      </span>
                    </p>
                    <p class="size-10">隐患发现率</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-right5 font-blue size-16 text-center">
                    <span>97.6%</span>
                  </div>
                </div>
              </li>
              <li class="col-sm-4">
                <div class="row margin0 padding0">
                  <div class="toolcompanyrate-char col-sm-6 padding0 padding-left5 container-padding5">
                    <p>
                                      <span class="toolcompanyrate-char-bg">
                                          <span class="toolcompanyrate-char-qg" style="width:15%;"></span>
                                      </span>
                    </p>
                    <p class="size-10">隐患解决率</p>
                  </div>
                  <div class="col-sm-6 padding-top7 padding-right5 font-blue size-16 text-center">
                    <span>97.6%</span>
                  </div>
                </div>
              </li>

            </ul>
          </h2>
        </div>
      </section>
      <section>
        <div class="toolregionrate margin-top40">
          <h4 class="p-title">巡检记录
            <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                <i class="icon iconfont icon-weibiaoti10 size-12"></i>
              </span></h4>
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
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>08:26:36 09-23</td>
                    <td>控烟严格巡检</td>
                    <td>
                      <span class="font-blue">10</span>/30</td>
                    <td>
                      <a>
                        <i class="fas fa-flag-checkered font-blue"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5">分页</td>
                  </tr>
                </table>
                
              </div>
        </div>
      </section>
    </section>
    <!-- 统计 -->
    <section class="per-lineinfo">      
        <section class="margin-top20">
          <div class="personinfo">
            <p>
              <span class="size-20 font-blue">南宁市良庆区</span>
            </p>
            <p>
              <span><i class="fas fa-industry"></i> 良庆区中心小学</span>
            </p>
          </div>
        </section>
        <section>
          <div class="toolcount margin-top20">
            <h4 class="p-title">人员数量</h4>
            <div class="col-sm-7 font-gray-999 padding-right0 size-12">
              <div class="row text-center margin-top30">
                <div class="col-sm-12 text-left margin-bottom20">
                        <p>总数 <span class="font-white">263</span></p>
                      </div>
                <div class="col-sm-4 personnel-borderright">
                  <p class="size-16 font-blue">42</p>
                  <p>巡检人员</p>
                </div>
                <div class="col-sm-4 personnel-borderright">
                  <p class="size-16 font-yellow">37</p>
                  <p>管理人员</p>
                </div>
                <div class="col-sm-4">
                  <p class="size-16 font-white">25</p>
                  <p>监控人员</p>
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
            <h4 class="p-title">评分统计{{setvuextest}}</h4>
            <div class="row margin-top20 padding-left10">
                  <el-radio-group v-model="workervalue">
                    <el-radio :label="1" class="col-xs-3">巡检人员</el-radio>
                    <el-radio :label="2" class="col-xs-3">监控人员</el-radio>
                    <el-radio :label="3" class="col-xs-3">管理人员</el-radio>
                  </el-radio-group>
              </div>
            <div class="row">              
              <div class="col-sm-6">
                <div id="axis1" style="width: 100%;height:150px;margin: 0 auto;"></div>
              </div>
              <div class="col-sm-6">
                <section>
                  <div class="toolcompanyrate margin-top0">
                      <ul class="size-12 font-gray-999">
                        <li class="col-sm-12">
                          <div class="row margin0 padding0">
                            <div class="toolcompanyrate-char col-sm-5 padding-right0 padding-left5 padding-top5">
                              <small class="font-blue">
                                评分最高
                              </small>
                              <p>段亚伟</p>
                            </div>
                            <div class="col-sm-7 margin0 padding-left5 padding-right0">
                              <span class="size-36 font-blue">9.9</span>
                              <sup class="size-10">分</sup>
                            </div>
                          </div>
                        </li>
                        <li class="col-sm-12">
                          <div class="row margin0 padding0">
                            <div class="toolcompanyrate-char col-sm-5 padding-right0 padding-left5 padding-top5">
                              <small class="font-red">
                                评分最低
                              </small>
                              <p>段亚伟</p>
                            </div>
                            <div class="col-sm-7 margin0 padding-left5 padding-right0">
                              <span class="size-36 font-red">3.6</span>
                              <sup class="size-10">分</sup>
                            </div>
                          </div>
                        </li>
                      </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="toolcount margin-top30">
            <h4 class="p-title">人数变化
              <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                <i class="icon iconfont icon-weibiaoti10 size-12"></i>
              </span>
            </h4>
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
      vuexone:'123',
      // 单选按钮
      workervalue:1,
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
      value7: "",
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
      this.vuexone=this.setvuextest;
      console.log(this.setvuextest)
    }
  },
};
</script>

<style scoped>
  .line-height70{
    line-height: 70px !important;
  }
</style>
