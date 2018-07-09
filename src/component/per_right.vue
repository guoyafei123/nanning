<template>
  <div class="toolright font-white  margin-top-40" style="overflow-y: auto;height: 100%;">
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
        <p>
          <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> 良庆区中心小学</span>
        </p>
        <p>
          <span class="size-12 font-gray-666">男</span>
          <span class="size-12 font-gray-666">25岁</span>
          <span class="size-12 font-gray-666">19919852100</span>
          <span class="size-12 font-gray-666 float-right set-positiontop2">广西省南宁市良庆区强子街8号</span>
        </p>
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
              <p class="size-18 font-white">个人数据统计</p>
            </li>
            <li>
              <p class="size-10 set-scaleright">Personnel Statistics</p>
            </li>
            <li>
              <p class="set-width-50 size-12">在线时长</p>
              <p class="display-inline-block font-white">3229分钟
              </p>
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
    </section>
    <section>
      <div class="toolregionrate margin-top40">
        <h2 class="size-16 font-gray-ccc">
          <span class="tool-rect bg-blue"></span>历史趋势
          <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666">
                    <i class="fa fa-th-large"></i>
                </span>
        </h2>
        <div id="echar1" style="width: 100%;height:180px;margin: 0 auto;"></div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
      mounted(){
        this.chart_one();
        this.pie_one();
      },
      methods:{
        chart_one(){
          var option = {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', '123', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              show: true,
              axisLine: {
                lineStyle: {
                  color: '#999',

                }
              }
            },

            yAxis: {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#999',

                }
              },
              splitLine: {
                lineStyle: {
                  // 使用深浅的间隔色
                  color: ['#333']
                }
              },
            },
            // 图例
            legend: {
              data: ['高', '低']
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
            series: [{
              data: [100, 499, 50, 1111, 45, 345, 907],
              name: '低',
              type: 'line',
              symbol: 'none',
              smooth: true,
              color: {
                colorStops: [{
                  offset: 0,
                  color: '#333'
                }]
              }
            }, {
              data: [300, 950, 900, 800, 700, 600, 700],
              name: '高',
              type: 'line',
              symbol: 'none',
              smooth: true,
              areaStyle: { normal: {} },
              color: {
                colorStops: [{
                  offset: 0,
                  color: 'rgba(255,255,255,0.3)' // 0% 处的颜色
                }],
              },

            }],
            tooltip: {
              enterable: true,
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
          };
          let myChart = this.$echarts.init(document.getElementById('echar1'));
          myChart.setOption(option)
        },
        pie_one(){
          var pieOption = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '70%'],
                label: {
                  normal: {
                    position: 'inner'
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                color: ['#bad616', '#333'],
                data: [
                  { value: 335, name: '50%', selected: true },
                  { value: 679, name: '' }
                ]
              }
            ]
          };
          let myChart1 = this.$echarts.init(document.getElementById('pie1'));
          myChart1.setOption(pieOption);
          let myChart2 = this.$echarts.init(document.getElementById('pie2'));
          myChart2.setOption(pieOption);
          let myChart3 = this.$echarts.init(document.getElementById('pie3'));
          myChart3.setOption(pieOption);
        }
      }
    }
</script>

<style scoped>
  .line-height70{
    line-height: 70px !important;
  }
</style>
