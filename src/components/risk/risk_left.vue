<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="tool-charmax">
				<div>
					<!--需要按照  1.16/1 的宽高比例进行创建 可自适应布局-->
					<canvas id="canvas-big" width="260" height="200"></canvas>
				</div>
				<div class="tool-charmaxvalue">
					<p class="line-height86 font-blue">0.52</p>
					<!-- {{unitAssessScore?unitAssessScore:"0"}} -->
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
						<!-- <div style="width:500px; height:500px; overflow: hidden;">
							<img id="zoombox" src="../../assets/images/jpg01.jpg">
						</div> -->
						<p class="font-blue size-16">风险评估
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" @click="fullList = true">
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
								<tbody id="">
									<tr v-for="item in tableData.result" v-on:click="toitmeinfo(item)">
										<td>
											<el-tooltip placement="top">
												<div slot="content">{{item.buildingName}}</div>
												<span>{{item.buildingName}}</span>
											</el-tooltip>
										</td>
										<td>
											<el-tooltip placement="top">
												<div slot="content">{{item.unitName}}</div>
												<span>{{item.unitName}}</span>
											</el-tooltip>
										</td>
										<td class="safe">
												<span v-if="Number((10-item.totalScore)/100).toFixed(1)< 2" class="bgbox-max bg-red font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
												<span v-if="Number((10-item.totalScore)/100).toFixed(1)>=2 && Number((10-item.totalScore)/100).toFixed(1) < 4" class="bgbox-max bg-red font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
												<span v-if="Number((10-item.totalScore)/100).toFixed(1)>=4 && Number((10-item.totalScore)/100).toFixed(1) < 6" class="bgbox-max bg-red font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
												<span v-if="Number((10-item.totalScore)/100).toFixed(1)>=6" class="bgbox-max bg-blue font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
										</td>
										<td class="risk">
											{{item.totalScore}}%
										</td>
										<td>
											<a v-on:click="toitmeinfo(item)">
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
					<li class="upd-pagin">
						<div>
							<el-pagination class="pull-left" small layout="total" :total="tableData.totalRow">
							</el-pagination>
							<span>{{Math.ceil(tableData.totalRow/this.queryRiskList_parameter.pageSize)}}页</span>
							<el-pagination class="pull-right" small layout="prev, pager, next" :page-size="this.queryRiskList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.queryPersonList_parameter.currentPage" @current-change="handleCurrentChange">
							</el-pagination>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<!-- 大列表弹窗 -->
    <el-dialog show-close :visible.sync="fullList" center lock-scroll fullscreen="ture" show-close="false" append-to-body="ture" class="dialog-cont">      
      <div class="dialog-content clearfix">
      	<button type="button" class="btn-close position-absolute-right" @click="fullList = false">
         <i class="el-icon el-icon-close"></i>关闭
      	</button>
          <section class="Risk_management">
		    <!-- 标题 -->
		    <div class="main_header clearFix">
		      <div class="main_title float-left clearFix">
		        <i class="icon iconfont icon-fengxianfenxi-xian-"></i>
		        <h2>风险评估</h2>
		      </div>
		    </div>
		    <div class="table-responsive big-list-table">
				<table class="table toolroute-table">
					<thead>
						<tr>
							<th>所属单位</th>
							<th>建筑名称</th>
							<th>报警火情</th>
							<th>隐患危险</th>
							<th>设备故障</th>
							<th>预案编制</th>
							<th>气象因素</th>
							<th>室内活动</th>
							<th class="safe">安全评分</th>
							<th class="risk">风险系数</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody id="">
						<tr v-for="item in tableData.result" v-on:click="toitmeinfo(item)">
							<td>
								<el-tooltip content="单位名称" placement="top">
									<span>{{item.unitName}}</span>
								</el-tooltip>
							</td>
							<td>{{item.buildingName}}</td>
							<td>{{item.alarmScore}}</td>
							<td>{{item.troubleScore}}</td>
							<td>{{item.deviceScore}}</td>
							<td>{{item.prearrangeScore}}</td>
							<td>{{item.weatherScore}}</td>
							<td>{{item.innerScore}}</td>
							<td class="safe">
								<el-tooltip placement="top">
									<div slot="content">安全评分 8.0</div>
									<span v-if="Number((10-item.totalScore)/100).toFixed(1)< 2" class="bgbox-max bg-red font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
									<span v-if="Number((10-item.totalScore)/100).toFixed(1)>=2 && Number((10-item.totalScore)/100).toFixed(1) < 4" class="bgbox-max bg-red font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
									<span v-if="Number((10-item.totalScore)/100).toFixed(1)>=4 && Number((10-item.totalScore)/100).toFixed(1) < 6" class="bgbox-max bg-red font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
									<span v-if="Number((10-item.totalScore)/100).toFixed(1)>=6" class="bgbox-max bg-blue font-black">{{Number((10-item.totalScore)/100).toFixed(1)}}</span>
								</el-tooltip>
							</td>
							<td class="risk">
								<el-tooltip placement="top">
									<div slot="content">风险系数 20.56%</div>
									<span>{{item.totalScore}}</span>
								</el-tooltip>
							</td>
							<td>
								<a v-on:click="toitmeinfo(item)">
									<el-tooltip content="查看详情" placement="top">
										<i class="fas fa-chevron-circle-right"></i>
									</el-tooltip>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="upd-pagin margin-top10">
				<div>
					<el-pagination class="pull-left" small layout="total" :total="tableData.totalRow">
					</el-pagination>
					<span>{{Math.ceil(tableData.totalRow/this.queryRiskList_parameter.pageSize)}}页</span>
					<el-pagination class="pull-right" small layout="prev, pager, next" :page-size="this.queryRiskList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.queryPersonList_parameter.currentPage" @current-change="handleCurrentChange">
					</el-pagination>
				</div>
			</div>
		  </section>
      </div>
    </el-dialog>   
	</div>
</template>

<script>
	import panzoom from 'panzoom';
	export default {
		data() {
			return {
				// 弹窗
				fullList: false,
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
				riskCount_parameter: {
					unitId:null
				},
				riskCountResult: {
					socre:0,
					troubleTotal:0,
					dangerousTotal:0,
					alarmTotal:0
				},
				//风险评估参数-返回
				unitAssessScore: null,
				// 表格-请求
				queryRiskList_parameter: {
					unitId: null,
					buidingId: null,
					startTime: null,
					endTime: null,
					currentPage: 2,
					pageSize: 10
				},
				// 表格返回
				tableData: Object
			};
		},
		methods: {
			// 获取统计数据
			getRiskData() {
				this.$fetch("/api/riskAssessFactor/leftTotalOfUnit",
				this.riskCount_parameter
				).then(response => {
					let data = response.data;
					if(response.data) {
						this.unitAssessScore = Number((10-data.result.socre)/100).toFixed(1);
						this.chart_left(data.result);
					}
				});
			},
			// 获取表格
			getRiskTable() {
				this.$fetch(
						"/api/riskAssessFactor/riskScoreList",
						this.queryRiskList_parameter
					).then(response => {
						if(response) {
							this.tableData = response.data.pager;
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			handleCurrentChange(val) {
				this.queryRiskList_parameter.currentPage = val;
				this.getRiskTable();
			},
			//获取详情
			toitmeinfo(data) {
				this.itemtrue = data;
				this.$store.commit("toriskitem", this.itemtrue);
			},
			chart_left(data) {
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
					cxt.fillText("风险系数:" + data.socre + "%", 0, 24);

					//右上角字体说明
					cxt.fillStyle = "#999";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fillText("报警 ", radi2 * 0.2 * 1.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#f13131";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText(data.alarmTotal, radi2 * 0.2 * 3.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#999";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText("隐患", radi2 * 0.2 * 5.6, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#ffcc00";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText(data.troubleTotal, radi2 * 0.2 * 7.5, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#999";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText("危险品", radi2 * 0.2 * 9, 0 - radi2 - r * 0.38);

					cxt.fillStyle = "#ff7800";
					cxt.textAlign = "left";
					cxt.font = "normal 12px 黑体";
					cxt.fontWeight = "900";
					cxt.fillText(data.dangerousTotal, radi2 * 0.2 * 12.2, 0 - radi2 - r * 0.38);

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
					var n = Math.round(100-data.socre / 100 * 360 * 0.0833333);
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
		},
		mounted() {
			this.$store.commit("route_path", this.$route.path);
			this.chart_left(this.riskCountResult);
			this.getRiskData(); //风险统计 
			this.getRiskTable(); //风险表格
		}
	};
</script>