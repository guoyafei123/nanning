
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
      },
      // 曲线图请求数据
      queryTrendMapGraph_parameter: {
        unitId: 4,
        startTime: "2018-06-01",
        endTime: "2018-07-01"
      },
      ins_queryTrendMapGraph: {},
      options: [
        {
          value: "选项1",
          label: "路线名称"
        },
        {
          value: "选项2",
          label: "路线名称"
        },
        {
          value: "选项3",
          label: "路线名称"
        },
        {
          value: "选项4",
          label: "路线名称"
        },
        {
          value: "选项5",
          label: "路线名1称"
        }
      ],
      optionsvalue: "路线名称"
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
    draw_piemin(id, data) {
      // console.log(this.ins_planInspectionCount);
      var fin_per = data.finish / data.amount * 100;
      if (fin_per == 0) {
      }
      console.log();
      let d = [
        {
          value: data.finish,
          name: "区域巡检完成率 " + fin_per.toFixed(2) + "%"
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
    draw_piemax(id, data) {
      console.log(this.ins_queryTrendPieGraph);
      var fin_per = data.finishedAmount / data.amount * 100;
      console.log();
      let d = [
        {
          value: data.finishedAmount,
          name: "完成率 " + fin_per.toFixed(2) + "%"
        },
        {
          value: data.amount - data.finishedAmount,
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
        }
      ];
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 3) == "完成率") {
              name = "已完成";
            } else {
              name = data.name;
            }
            return name + ":" + data.value + "次";
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
    draw_line(id, date, datacount) {
      // 巡检完成率历史趋势曲线图
      var char = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
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
            data: datacount,
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
          // {
          //   data: [300, 950, 900, 800, 700, 600, 700],
          //   name: "高",
          //   type: "line",
          //   symbol: "none",
          //   smooth: true,
          //   areaStyle: { normal: {} },
          //   color: {
          //     colorStops: [
          //       {
          //         offset: 0,
          //         color: "rgba(255,255,255,0.3)" // 0% 处的颜色
          //       }
          //     ]
          //   }
          // }
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
              this.draw_piemax(
                "ins_charCompletion",
                this.ins_queryTrendPieGraph
              );
            }
          }
        })
        .then(err => {
          console.log(err);
        });
      this.draw_piemin("ins_charCount", this.ins_planInspectionCount);

      // 请求历史曲线图
      this.$fetch(
        "/api/inspection/queryTrendMapGraph",
        this.queryTrendMapGraph_parameter
      )
        .then(response => {
          console.log(response.data);
          let data = response.data;
          if (response.data) {
            console.log(data);
            this.draw_line(
              "ins_charHistoricaltrend",
              data.result.date,
              data.result.dataCount
            );
          }
        })
        .then(err => {
          console.log(err);
        });
    }
  },
  mounted() {
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
