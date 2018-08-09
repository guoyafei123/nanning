<template>
  <div class="toolleft margin-right0">
    <section>
        <div class="tool-charmax">
            <div>
                <!--需要按照  1.16/1 的宽高比例进行创建 可自适应布局-->
                <canvas id="canvas-big" width="260" height="200"></canvas>
            </div>
            <div class="tool-charmaxvalue">
                <p class="font-blue size-66">8.7</p>
                <div id="myChart1" style="width: 130%;height:50px;margin: 0 auto;"></div>
            </div>
        </div>
        
    </section>
    <section>
      <div class="toolroute font-gray-ccc margin-left37">
        <span class="toolroute-rect bg-blue"></span>
        <ul class="padding-left10 padding-right5 clearfix">
          <li>
            <p class="font-gray-666 size-12">中心小学</p>
          </li>
          <li>
            <p class="font-blue size-16">风险评估
              <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                <i class="icon iconfont icon-weibiaoti10 size-12"></i>
              </span>
            </p>
          </li>
          <li>
            <div class="table-responsive">
              <table class="table size-12 table-condensed toolroute-table margin-top10">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>建筑名称</th>
                  <th>所属单位</th>
                  <th class="safe">安全评分</th>
                  <th class="risk">风险系数</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>瑞和家园3号楼</td>
                  <td>瑞和家园</td>
                  <td class="safe">
                   <span class="bgbox-max bg-red font-black" data-toggle="tooltip" title="安全评分">1.9</span> 
                  </td>
                  <td class="risk">91.86%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>实验教学楼7号</td>
                  <td>实验小学</td>
                  <td class="safe">
                   <span class="bgbox-max bg-orange font-black" data-toggle="tooltip" title="安全评分">2.7</span> 
                  </td>
                  <td class="risk">73.14%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>三年级教学楼</td>
                  <td>实验小学</td>
                  <td class="safe">
                   <span class="bgbox-max bg-orange font-black" data-toggle="tooltip" title="安全评分">3.3</span> 
                  </td>
                  <td class="risk">65.89%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>二年级教学楼</td>
                  <td>实验小学</td>
                  <td class="safe">
                   <span class="bgbox-max bg-yellow font-black" data-toggle="tooltip" title="安全评分">4.3</span> 
                  </td>
                  <td class="risk">56.92%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>瑞和家园8号</td>
                  <td>瑞和家园</td>
                  <td class="safe">
                   <span class="bgbox-max bg-yellow font-black" data-toggle="tooltip" title="安全评分">4.8</span> 
                  </td>
                  <td class="risk">54.73%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>三年级教学楼</td>
                  <td>实验小学</td>
                  <td class="safe">
                   <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">7.7</span> 
                  </td>
                  <td class="risk">31.74%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>瑞和家园7号</td>
                  <td>瑞和家园</td>
                  <td class="safe">
                   <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">8.4</span> 
                  </td>
                  <td class="risk">23.86%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>瑞和家园12号</td>
                  <td>瑞和家园</td>
                  <td class="safe">
                   <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">8.7</span> 
                  </td>
                  <td class="risk">20.47%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>五年级教学楼</td>
                  <td>实验小学</td>
                  <td class="safe">
                   <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">9.0</span> 
                  </td>
                  <td class="risk">13.07%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>一年级教学楼</td>
                  <td>实验小学</td>
                  <td class="safe">
                   <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">9.2</span> 
                  </td>
                  <td class="risk">10.35%</td>
                  <td>
                    <a v-on:click="toitmeinfo(item)">
                      <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <span class="size-12">分页</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
      // 表格
      mounted(){        
        this.chart_two()
      },
      methods:{
        chart_two(){
          function go(num) {
					//清除画布,每次重绘
					var canvas_big = document.getElementById("canvas-big");
					var cxt = canvas_big.getContext("2d");
					canvas_big.width = canvas_big.width;
					canvas_big.height = canvas_big.height;
                    cxt.fillStyle='rgba(0,0,0,0)';
					//适配处理
					var width = canvas_big.height * 0.8;
					var height = canvas_big.height * 0.8;
					var r = width / 2;
					var arclineWidth = width / 16.666666;
					var arclen = width / 33.333333;
					var arclen3 = width / 20;
					var radi2 = r * 0.855;
					var radi3 = r * 1
					var bacColor = '#333';
					var forColor = '#b7d216';
					cxt.translate(width / 2, height / 2 + height * 0.2);

					//中间文字说明
					cxt.textAlign = "center";
					cxt.textBaseline = "middle";
					cxt.fillStyle = "#666666";
					cxt.font = "normal 10px 黑体";
					cxt.fillText("当日综合评估", 0, -20);

					cxt.fillStyle = "#b7d216";
					cxt.font = "normal 20px 黑体";
					cxt.fillText("安全评分", 0, 0);

					cxt.fillStyle = "#f4f4f4";
					cxt.font = "normal 10px 黑体";
					cxt.fillText("风险系数:" + num + '%', 0, 20);

					//右上角字体说明
					cxt.fillStyle = "#999";
					cxt.textAlign = "left";
					cxt.font = "normal 10px 黑体";
					cxt.fillText("报警 ", radi2 * 0.2 * 1.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#f13131";
					cxt.textAlign = "left";
					cxt.font = "normal 10px 黑体";
					cxt.fontWeight = '900';
					cxt.fillText(num, radi2 * 0.2 * 3, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#999";
					cxt.font = "normal 10px 黑体";
					cxt.fontWeight = '900';
					cxt.fillText("隐患", radi2 * 0.2 * 5.1, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#ffcc00";
					cxt.textAlign = "left";
					cxt.font = "normal 10px 黑体";
					cxt.fontWeight = '900';
					cxt.fillText(num, radi2 * 0.2 * 6.6, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#999";
					cxt.font = "normal 10px 黑体";
					cxt.fontWeight = '900';
					cxt.fillText("危险品", radi2 * 0.2 * 8.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#ff7800";
					cxt.textAlign = "left";
					cxt.font = "normal 10px 黑体";
					cxt.fontWeight = '900';
					cxt.fillText(num, radi2 * 0.2 * 10.7, 0 - radi2 - r * 0.38);

					//画底格
					for(var i = 0, angle = Math.PI, tmp, len; i < 30; i++) {
						cxt.beginPath();
						cxt.lineWidth = arclineWidth;
						len = arclen;
						cxt.strokeStyle = bacColor;
						//					cxt.fillStyle　=　'#0099FF';
						tmp = radi2;
						cxt.moveTo(
							tmp * Math.sin(angle),
							tmp * Math.cos(angle),
						);
						tmp -= len;
						cxt.lineTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
						cxt.stroke();
						cxt.closePath();
						angle += Math.PI / 15;
					}

					// 画内圆
					cxt.beginPath();
					cxt.lineWidth = 1;
					cxt.arc(0, 0, r * 0.75, 0, 2 * Math.PI);
					cxt.stroke();
					cxt.closePath();

					// 画外圆
					cxt.beginPath();
					cxt.lineWidth = 1;
					cxt.arc(0, 0, r * 0.9, 0, 2 * Math.PI);
					cxt.stroke();
					cxt.closePath();

					//画右上角装饰中心实体圆
					cxt.beginPath();
					cxt.lineWidth = 1;
					cxt.arc(radi2 * 0.2, 0 - radi2, r * 0.02, 0, 2 * Math.PI);
					cxt.fillStyle = bacColor
					cxt.fill();
					cxt.stroke();
					cxt.closePath();

					//画右上角装饰小小圆
					cxt.beginPath();
					cxt.strokeStyle = bacColor;
					cxt.lineWidth = 1;
					cxt.arc(radi2 * 0.2, 0 - radi2, r * 0.25, 0, 2 * Math.PI);
					cxt.stroke();
					cxt.closePath();

					//画右上角折线条
					cxt.beginPath();
					cxt.lineWidth = 1;
					cxt.strokeStyle = '#999';
					cxt.moveTo(radi2 * 0.2, 0 - radi2);
					cxt.lineTo(radi2 * 0.2, 0 - radi2 - r * 0.17);
					cxt.lineTo(radi2 * 0.2 * 1.8, 0 - radi2 - r * 0.28);
					cxt.lineTo(radi2 * 0.2 * 13, 0 - radi2 - r * 0.28);
					cxt.stroke();
					cxt.closePath();

					//画最外圈装饰
					for(var i = 0, angle = Math.PI, tmp, len; i < 160; i++) {
						cxt.beginPath();
						cxt.lineWidth = 1;
						len = arclen3;
						cxt.strokeStyle = bacColor;
						tmp = radi3;
						cxt.moveTo(
							tmp * Math.sin(angle),
							tmp * Math.cos(angle),
						);
						tmp -= len;
						cxt.lineTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
						cxt.stroke();
						cxt.closePath();
						angle += Math.PI / 80;
					}

					//计算要画的前景色块比例
					var n = Math.round(num / 100 * 360 * 0.0833333);
					//再次绘制比例圆
					for(var i = 0, angle = Math.PI, tmp, len; i < n; i++) {
						cxt.beginPath();
						cxt.lineWidth = arclineWidth;
						len = arclen;
						cxt.strokeStyle = forColor;
						tmp = radi2;
						cxt.moveTo(
							tmp * Math.sin(angle),
							tmp * Math.cos(angle)
						);
						tmp -= len;
						cxt.lineTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
						cxt.stroke();
						cxt.closePath();
						angle += Math.PI / 15;
					}
					//齐活儿
                }
                // clearInterval(setinter);
                // var setinter=setInterval(function() {
				// 	var a = (99 * Math.random()).toFixed(2);
				// 	go(a);
				// }, 1000)
            go(30.33);
            
            // 横向柱子
            var option11 = {
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
            let myChart11 = this.$echarts.init(document.getElementById("myChart1"));
            myChart11.setOption(option11);
        },
      }
    }
</script>

<style scoped>

</style>
