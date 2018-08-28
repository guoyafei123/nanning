<template>
	<div class="toolright">
		<!-- 筛选 -->
		<section class="my-filter padding5 bg-gray-222 clearfix">
			<!-- 日期筛选 -->
			<div class="col-sm-12 padding0">
				<div class="upd-elmdate">
					<el-date-picker v-model="dateValue" size="mini" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="chooseTimeRange">
					</el-date-picker>
				</div>
			</div>
		</section>
		<section class="risk-lineinfo">
			<section v-show="itemtrue==false">
				<div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
					<!-- 已选择 -->
					<div class="personinfo">
						<p>
							<span class="size-20 font-blue">{{unitInfo.name}}</span>
							<span class="float-right">
								<el-tooltip content="安全评分" placement="top">
			                          <span class="bgbox-max bg-blue font-black size-10">{{unitInfo.totalScore}}</span>
			                      </el-tooltip>
							</span>
						</p>
					</div>
				</div>
			</section>

			<section v-show="itemtrue==true">
				<div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
					<div class="personinfo">
						<p>
							<span class="size-20 font-blue">{{itemData.buildingName}}</span>
							<span class="float-right">
                          <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分{{Number((10-itemData.troubleScore)/100).toFixed(1)}}</span>
							</span>
						</p>
					</div>
				</div>
			</section>

			<section>
				<div class="toolcount">
					<h4 class="p-title">风险系数</h4>
					<div id="axis1" style="width: 100%;height:200px;margin: 0 auto;"></div>
				</div>
			</section>

			<section v-show="itemtrue==false">
				<h4 class="p-title margin-top30">风险系数</h4>
				<div class="row cardinfo-style margin-top10 font-gray-999">
					<p class="col-sm-4">建筑防火 <span>{{unitScoreDetailData.buildingfhScore}}</span></p>
					<p class="col-sm-4">火灾危险源 <span>{{unitScoreDetailData.fireSourceScore}}</span></p>
					<p class="col-sm-4">消防设施 <span>{{unitScoreDetailData.xfdeviceScore}}</span></p>
					<p class="col-sm-4">消防安全管理 <span>{{unitScoreDetailData.anquanScore}}</span></p>
					<p class="col-sm-4">灭火救援 <span>{{unitScoreDetailData.miehuoScore}}</span></p>
					<p class="col-sm-4">建筑评估 <span>{{unitScoreDetailData.buildingpgScore}}</span></p>
					<p class="col-sm-4">生活用火隐患 <span>{{unitScoreDetailData.shenghuoScore}}</span></p>
					<p class="col-sm-4">消防给水 <span>{{unitScoreDetailData.waterSupplyScore}}</span></p>
				</div>
			</section>

			<section v-show="itemtrue==true">
				<h4 class="p-title margin-top30">风险系数</h4>
				<div class="row cardinfo-style margin-top10 font-gray-999">
					<p class="col-sm-4">建筑参数 <span>{{buildingScoreDetailsDetails.buildingParamScore}}</span></p>
					<p class="col-sm-4">耐火等级 <span>{{buildingScoreDetailsDetails.refractoryScore}}</span></p>
					<p class="col-sm-4">建筑内防火间距 <span>{{buildingScoreDetailsDetails.spacingScore}}</span></p>
					<p class="col-sm-4">安全疏散条件 <span>{{buildingScoreDetailsDetails.evacuateScore}}</span></p>
					<p class="col-sm-4">避雷 <span>{{buildingScoreDetailsDetails.lightningScore}}</span></p>
					<p class="col-sm-4">电气设备隐患 <span>{{buildingScoreDetailsDetails.applianceScore}}</span></p>
					<p class="col-sm-4">火灾警报系统 <span>{{buildingScoreDetailsDetails.fireAlarmScore}}</span></p>
					<p class="col-sm-4">消防给水 <span>{{buildingScoreDetailsDetails.waterSupplyScore}}</span></p>
					<p class="col-sm-4">灭火设备 <span>{{buildingScoreDetailsDetails.outfireScore}}</span></p>
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

	</div>
</template>

<script>
	import moment from "moment";
	import { mapState } from "vuex";
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
				dateValue: "",
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
				//获取单位信息
				unitInfo_parameter:{
					unitId:null,
				},
				unitInfo:{
					name:"",
					location:"",
					totalScore:0
				},
				itemData:Object,
				//风险统计参数
				unitScoreDetail_parameter: {
					unitId:null,
					startTime:null,
					endTime:null
				},
				unitScoreDetailData: Object,
				unitScoreCharts:Object,
				//风险详情
				buildingScoreDetails_parameter: {
					buildingId: null,
					startTime: null,
					endTime: null
				},
				buildingScoreDetailsDetails: Object,
				buildingScoreCharts:Object,
				itemtrue: false,
			};
		},
		computed: mapState([
			'toriskitem',
			'unitid'
		]),
		watch: {
			// 所有巡检单位
			toriskitem() {
				this.itemtrue = true;
				this.itemData = this.toriskitem;
				this.buildingScoreDetails_parameter.buildingId = this.toriskitem.buildingId;
				this.getBuildDetail();
			},
			unitid(){
				if(this.unitid!=0){
					this.getunitid=this.unitid;
				}else{
					this.getunitid=null;
				}
				this.unitScoreDetail_parameter.unitId=this.getunitid;
				this.unitInfo_parameter.unitId=this.getunitid;
				this.getData();
			}
		},

		methods: {
			chooseTimeRange(t) {
				this.dateValue = t;
				var st = moment(this.dateValue[0]).format('YYYY-MM-DD');
				var et = moment(this.dateValue[1]).format('YYYY-MM-DD');
				this.unitScoreDetail_parameter.startTime = st;
				this.unitScoreDetail_parameter.endTime = et;
				this.buildingScoreDetails_parameter.startTime = st;
				this.buildingScoreDetails_parameter.endTime = et;
				this.getData();
				this.getBuildDetail();
			},
			defaultTimeVaule() {
				var startDate = this.getNowFormatDate(-7);
				var endDate = this.getNowFormatDate(0);
				this.unitScoreDetail_parameter.startTime = startDate;
				this.unitScoreDetail_parameter.endTime = endDate;
				this.buildingScoreDetails_parameter.startTime = startDate;
				this.buildingScoreDetails_parameter.endTime = endDate;
				this.dateValue = [startDate,endDate];
			},
			//获取当前时间：
			getNowFormatDate(days){
				var date = new Date();
				var date_s = date.getTime();//转化为时间戳毫秒数
				date.setTime(date_s + days * 1000 * 60 * 60 * 24);//设置新时间比旧时间多一天
				var seperator1 = "-";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate;
			},
			getData() {
				// 获取单位信息
				if(this.unitInfo_parameter.unitId==0 || this.unitInfo_parameter.unitId==null){
					this.unitInfo.name = "管理单位";
					this.unitInfo.location = "无位置";
				}else{
					this.$fetch("/api/unit/queryUnitInfo",
							this.unitInfo_parameter).then(response => {
						let data = response.data;
						if(response.data) {
							this.unitInfo.name = data.unitInfo.name;
							this.unitInfo.location = data.unitInfo.location;
							this.unitInfo.totalScore = data.totalScore;
						}
					});
				}
				// 请求右侧统计数据
				this.$fetch("/api/riskAssessFactor/queryUnitScoreDetail",
							this.unitScoreDetail_parameter).then(response => {
					let data = response.data;
					if(response.data) {
						this.unitScoreDetailData = data.dataScore;
						this.drawPieChart("axis1", data.pieScore);

					}
				});
				// 请求历史折线图数据
				this.$fetch(
						"/api/riskAssessFactor/queryUnitScoreLine",
						this.unitScoreDetail_parameter
					).then(response => {
						let data = response.data;
						if(response.data ){
							this.unitScoreCharts = data.unitScoreLine;
							this.drawLineChart("myChart", this.unitScoreCharts);
						}
					}).then(err => {
						//console.log(err);
				});
			},
			getBuildDetail() {
				// 请求右侧统计数据
				this.$fetch("/api/riskAssessFactor/queryBuildingScoreDetail",
							this.buildingScoreDetails_parameter).then(response => {
					let data = response.data;
					if(response.data) {
						this.buildingScoreDetailsDetails = data.scoreData;
						this.drawPieChart("axis1", data.pieScore);
					}
				});
				// 请求历史折线图数据
				this.$fetch(
						"/api/riskAssessFactor/queryBuildingScoreLine",
						this.buildingScoreDetails_parameter
					).then(response => {
						let  data = response.data;
						if(response.data){
							this.buildingScoreCharts = data.buildingScoreLine;
							this.drawLineChart("myChart", this.buildingScoreCharts);
						}
					}).then(err => {	

					});
			},
			//right-折线图
			drawLineChart(id, data) {
				var option = {
					xAxis: {
						type: "category",
						boundaryGap: false,
						data: data.lineChartsDate,
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
						data: ["安全评分"]
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
						data: data.lineChartsCount,
						name: "安全评分",
						type: "line",
						symbol: "none",
						smooth: true,
						color: {
							colorStops: [{
								offset: 0,
								color: "#333"
							}]
						}
					}],
					tooltip: {
						enterable: true,
						trigger: "axis",
						axisPointer: {
							// 坐标轴指示器，坐标轴触发有效
							type: "line" // 默认为直线，可选为：'line' | 'shadow'
						}
					}
				};
				let lineChart = this.$echarts.init(document.getElementById(id));
				lineChart.clear();
				lineChart.setOption(option, true);
			},
			//left-柱状图
			drawPieChart(id, data) {
				var axisDate = data.name;
				var axisData = data.score;
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
					xAxis: [{
						type: "category",
						show: true,
						data: axisDate,
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: "value",
						show: false
					}],
					grid: {
						y: 40,
						x2: 0,
						y2: 20,
						x: 0,
						borderWidth: 1
					},
					series: [{
						name: "风险系数",
						type: "bar",
						barWidth: "60%",
						data: axisData,
						itemStyle: {
							normal: {
								// 值显示在柱子顶部
								label: {
									show: true,
									position: "top",
									textStyle: {
										color: function(params) {
											if(params.value > 0 && params.value < 100) {
												return "#333333";
											} else if(params.value >= 100 && params.value <= 200) {
												return "#666666";
											} else if(params.value >= 200 && params.value <= 300) {
												return "#999999";
											}
											return "#bad616";
										}
									},
									formatter: function(params) {
										if(params.value == 0) {
											return "";
										} else {
											return params.value;
										}
									}
								},
								color: function(params) {
									if(params.value > 0 && params.value < 10) {
										return "#333333";
									} else if(params.value >= 10 && params.value <= 30) {
										return "#666666";
									} else if(params.value >= 30 && params.value <= 50) {
										return "#999999";
									}
									return "#bad616";
								}
							}
						}
					}]
				};
				let axisChart = this.$echarts.init(document.getElementById(id));
				axisChart.clear();
				axisChart.setOption(option1, true);
			}
		},
		mounted() {
			if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
				this.unitScoreDetail_parameter.unitId=sessionStorage.unitid;
				this.unitInfo_parameter.unitId == sessionStorage.unitid;
			}
			if(sessionStorage.unitid==0){
				this.unitScoreDetail_parameter.unitId==null;
				this.unitInfo_parameter.unitId == null;
				this.unitInfo.name = "管理单位";
				this.unitInfo.location = "无位置";
			}
			this.$store.commit("route_path", this.$route.path);
			this.defaultTimeVaule();
			this.getData();
		}
	};
</script>
