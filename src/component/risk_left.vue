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
                
            </div>
        </div>
        <div id="myChart" style="width: 100%;height:50px;margin: 0 auto;"></div>
    </section>
    <section>
      <div class="toolroute font-gray-ccc margin-left37">
        <span class="toolroute-rect bg-blue"></span>
        <ul class="padding-left5 padding-right5">
          <li>
            <p class="font-gray-666 size-12">中心小学</p>
          </li>
          <li>
            <p class="font-blue size-16">巡检路线
              <span class="float-right toolroute-padding8 popup-routebtn font-gray-666">
                            <i class="fa fa-th-large"></i>
                        </span>
            </p>
          </li>
          <li>
            <div class="input-group bg-none toolroute-padding8">
              <div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle dropdown-btnstyle bg-black02" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">全部类型
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu toolroute-pan font-gray-666">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>

                </ul>
              </div>
              <!-- /btn-group -->
              <input type="text" class="form-control bg-none toolroute-sec " aria-label="hellow">
              <span class="input-group-btn">
                            <button class="btn btn-default dropdown-btnstyle bg-black02 glyphicon-searchdiv" type="button">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </span>

            </div>
            <!-- /input-group -->
          </li>
          <li>
            <div class="table-responsive">
              <table class="table size-12 table-condensed toolroute-table margin-top10">
                <tr>
                  <th>序号</th>
                  <th>路线名称</th>
                  <th>巡检统计</th>
                  <th>状态</th>
                  <th>更新时间</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-blue"></i>
                  </td>
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
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
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </li>
          <li>
            分页
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
      mounted(){
        this.chart_one()
      },
      methods:{
        chart_one(){
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
            setInterval(function() {
					var a = (99 * Math.random()).toFixed(2);
					go(a);
				}, 1000)
            go(30.33);
            
            // 根据值判断柱子颜色的柱状图
            var option1 = {
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
                    position: 'insideRight'
                }
            },
            data: [320, 532, 901]
        }
    ]
            };
            let myChart1 = this.$echarts.init(document.getElementById("myChart"));
            myChart1.setOption(option1);
        },
      }
    }
</script>

<style scoped>

</style>
