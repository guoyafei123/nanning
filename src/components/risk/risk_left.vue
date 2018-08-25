<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="tool-charmax">
				<div>
					<!--需要按照  1.16/1 的宽高比例进行创建 可自适应布局-->
					<canvas id="canvas-big" width="260" height="200"></canvas>
				</div>
				<div class="tool-charmaxvalue">
					<p class="line-height86 size-60 font-blue"><span class="size-100">8</span>.7</p>
					<div id="myChart1" style="width: 130%;height:50px;margin: 0 auto;"></div>
				</div>
			</div>

		</section>
		<section>
			<div class="toolroute font-gray-ccc">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 clearfix">
					<li>
						<p class="font-gray-666 size-10">Risk Info</p>
					</li>
					<li>
						<p class="font-blue size-16">风险评估
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666">
					            <el-tooltip content="全屏" placement="top">
						            <i class="icon iconfont icon-weibiaoti10 size-14"></i>
						        </el-tooltip>
					        </span>
						</p>
					</li>
					<li>
						<div class="table-responsive">

							<table class="table size-12 table-condensed toolroute-table margin-top10">
								<thead>
									<tr>
										<th>建筑名称</th>
										<th>所属单位</th>
										<th class="safe">安全评分</th>
										<th class="risk">风险系数</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
									<tr @click="toiteminfo(1)">
										<td>瑞和家园3号楼</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>瑞和家园</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-red font-black">1.9</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>91.86%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr @click="toiteminfo(2)">
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验教学</span>
											</el-tooltip>
										楼7号</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验小学</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-orange font-black">2.7</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>73.14%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr @click="toiteminfo(3)">
										<td>三年级教学楼</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验小学</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-orange font-black">3.3</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>65.89%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>二年级教学楼</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验小学</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-yellow font-black">4.3</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>56.92%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>瑞和家园8号</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>瑞和家园</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-yellow font-black">4.8</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>54.73%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>三年级教学楼</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验小学</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-blue font-black">7.7</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>31.74%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>瑞和家园7号</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>瑞和家园</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-blue font-black">8.4</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>23.86%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>瑞和家园12号</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>瑞和家园</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-blue font-black">8.7</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>20.47%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>五年级教学楼</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验小学</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-blue font-black">9.0</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>13.07%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
											</a>
										</td>
									</tr>
									<tr>
										<td>
											<el-tooltip content="一年级教学楼" placement="top">
												<span>一年级教学楼</span>
											</el-tooltip>
										</td>
										<td>
											<el-tooltip content="单位名称" placement="top">
												<span>实验小学</span>
											</el-tooltip>
										</td>
										<td class="safe">
											<el-tooltip placement="top">
												<div slot="content">安全评分 8.0</div>
												<span class="bgbox-max bg-blue font-black">9.2</span>
											</el-tooltip>
										</td>
										<td class="risk">
											<el-tooltip placement="top">
												<div slot="content">风险系数 20.56%</div>
												<span>10.35%</span>
											</el-tooltip>
										</td>
										<td>
											<a @click="moren">
												<el-tooltip content="查看详情" placement="top">
													<i class="fas fa-chevron-circle-right"></i>
												</el-tooltip>
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
		data() {
			return {
				// 单选按钮
				workervalue: 1,
				pickerOptions2: {
					shortcuts: [{
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
				options: [{
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
				itemtrue: false,
				//风险评估统计参数
				risk_riskCount_parameter: {},
				//风险评估参数-返回
				risk_riskCount: {
					riskFactor: "",
					alarm: "",
					trouble: "",
					danger: "",
					totalScore: "",
					min: "",
					max: "",
					centre: ""
				},
				// 表格-请求
				queryRiskList_parameter: {
					id: null,
					unitId: 4,
					type: null,
					buidingId: null,
					startTime: null,
					endTime: null,
					currentPage: "1",
					pageSize: 10
				},
				// 表格返回
				tableData: Object,
			};
		},
		methods: {
			chart_left() {
				function go(num) {
					//清除画布,每次重绘
					var canvas_big = document.getElementById("canvas-big");
					var cxt = canvas_big.getContext("2d");
					canvas_big.width = canvas_big.width;
					canvas_big.height = canvas_big.height;
					cxt.fillStyle = "rgba(0,0,0,0)";
					//适配处理
					var width = canvas_big.height * 0.8;
					var height = canvas_big.height * 0.8;
					var r = width / 2;
					var arclineWidth = width / 16.666666;
					var arclen = width / 33.333333;
					var arclen3 = width / 20;
					var radi2 = r * 0.855;
					var radi3 = r * 1;
					var bacColor = "#333";
					var forColor = "#b7d216";
					cxt.translate(width / 2, height / 2 + height * 0.2);

					//中间文字说明
					cxt.textAlign = "center";
					cxt.textBaseline = "middle";
					cxt.fillStyle = "#888";
					cxt.font = "normal 12px 黑体";
					cxt.fillText("当日综合评估", -8, -20);

					cxt.fillStyle = "#b7d216";
					cxt.font = "normal 24px 黑体";
					cxt.fillText("安全评分", 0, 0);

					cxt.fillStyle = "#f4f4f4";
					cxt.font = "normal 12px 黑体";
					cxt.fillText("风险系数:" + num + "%", 0, 24);

					//右上角字体说明
					cxt.fillStyle = "#999";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fillText("报警 ", radi2 * 0.2 * 1.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#f13131";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText(num, radi2 * 0.2 * 3.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#999";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText("隐患", radi2 * 0.2 * 5.6, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#ffcc00";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText(num, radi2 * 0.2 * 7.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#999";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText("危险品", radi2 * 0.2 * 9, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#ff7800";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText(num, radi2 * 0.2 * 12.2, 0 - radi2 - r * 0.38);

					//画底格
					for(var i = 0, angle = Math.PI, tmp, len; i < 30; i++) {
						cxt.beginPath();
						cxt.lineWidth = arclineWidth;
						len = arclen;
						cxt.strokeStyle = bacColor;
						//          cxt.fillStyle　=　'#0099FF';
						tmp = radi2;
						cxt.moveTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
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
					cxt.fillStyle = bacColor;
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
					cxt.strokeStyle = "#999";
					cxt.moveTo(radi2 * 0.2, 0 - radi2);
					cxt.lineTo(radi2 * 0.2, 0 - radi2 - r * 0.17);
					cxt.lineTo(radi2 * 0.2 * 1.8, 0 - radi2 - r * 0.28);
					cxt.lineTo(radi2 * 0.2 * 20, 0 - radi2 - r * 0.28);
					cxt.stroke();
					cxt.closePath();

					//画最外圈装饰
					for(var i = 0, angle = Math.PI, tmp, len; i < 160; i++) {
						cxt.beginPath();
						cxt.lineWidth = 1;
						len = arclen3;
						cxt.strokeStyle = bacColor;
						tmp = radi3;
						cxt.moveTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
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
						cxt.moveTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
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
				//  var a = (99 * Math.random()).toFixed(2);
				//  go(a);
				// }, 1000)
				go(23);

				// 横向柱子
				var option11 = {
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
					series: [{
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
									if(params.value > 0 && params.value < 300) {
										return "#666";
									} else if(params.value >= 100 && params.value <= 600) {
										return "#999";
									} else if(params.value >= 200 && params.value <= 900) {
										return "#ccc";
									}
									return "#bad616";
								}
							}
						},
						data: [220, 532, 901]
					}]
				};
				let myChart11 = this.$echarts.init(document.getElementById("myChart1"));
				myChart11.setOption(option11);
			},
			// 获取统计数据
			getRiskData() {
				this.$fetch("/api/inspection/planInspectionCount").then(response => {
					let data = response.data;
					if(response.data) {
						//console.log("获取风险表格列表数据:");
						//console.log(response.data);

					}
				});
			},
			// 获取表格
			getRiskTable() {
				this.$fetch(
						"/api/inspection/queryPlanUserList",
						this.queryRiskList_parameter
					).then(response => {
						if(response) {
							this.tableData = response.data.pager;
							//console.log("获取风险表格列表数据:");
							//console.log(this.tableData);
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			handleCurrentChange(val) {
				//console.log(`当前页:` + val);
				this.queryRiskList_parameter.currentPage = val;
				this.getTable();
			},
			//获取详情
			toiteminfo(data) {
				this.itemtrue = true;
				this.$store.commit("toriskitem", this.itemtrue);
			}
		},
		mounted() {
			this.$store.commit("route_path", this.$route.path);
			this.chart_left(); // 左侧图表
			this.getRiskData(); //风险统计 
			this.getRiskTable(); //风险表格

			console.log(panzoom);
			
		}
	};
</script>