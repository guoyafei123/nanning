<template>
	<div class="toolright">
		<!-- 筛选 -->
		<section class="my-filter padding5 bg-gray-222 clearfix">
			<!-- 单位筛选 -->
			<div class="col-sm-3 padding0">
				<el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="value7" placeholder="全部单位">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<!-- 日期筛选 -->
			<div class="col-sm-9 padding0">
				<div class="upd-elmdate">
					<el-date-picker v-model="value7" size="mini" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
					</el-date-picker>
				</div>
			</div>
		</section>
		<!-- 详情 -->
		<section class="bulid-iteminfo display-none">
			<a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
			<div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
				<!-- 已选择 -->
				<div class="personinfo">
					<p>
						<span class="size-20 font-blue">实验教学楼</span>
						<span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
						<span class="float-right">
                                    <span class="bgbox-max bg-gray-333 font-gray-999 size-10">灭火设备</span>
						</span>
					</p>
					<p class="col-sm-7 text-left padding0">
						<span>
                                    <i class="fas fa-industry"></i> 银海大道710-2号</span>
					</p>
					<P class="col-sm-5 text-right padding0">
						<span class="text-right">
                                <span class="font-gray-999">2018.07.09 08:00:00</span>
						</span>
					</P>
				</div>
			</div>
			<section>
				<div class="row toolcount margin-top20">
					<div class="col-sm-4 font-gray-999 padding-right0">
						<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
							<li>
								<h1 class="toolcount-p1">360</h1>
							</li>
							<li>
								<p class="size-10 ">Running State</p>
							</li>
							<li>
								<p class="size-16 font-blue">楼层数量</p>
							</li>
						</ul>
					</div>
					<div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
						<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
							<li>
								<p class="size-18 font-white">信息统计</p>
							</li>
							<li>
								<p class="size-10 set-scaleright">Repair Statistics</p>
							</li>
							<li class="row text-center padding-right16 margin-top40">
								<div class="col-sm-6 personnel-borderright">
									<p class="size-16 show font-white">4563</p>
									<p>房间数量</p>
								</div>
								<div class="col-sm-6 personnel-borderright">
									<p class="size-16 show font-white">538</p>
									<p>设备数量</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<h4 class="p-title margin-top30">统计</h4>
				<div class="row cardinfo-style margin-top10 font-gray-999">
					<p class="col-sm-4">当前隐患数<span>3.5</span></p>
					<p class="col-sm-4">当前报警数<span>3.5</span></p>
					<p class="col-sm-4">当前危险品数<span>3.5</span></p>
					<p class="col-sm-4">历史隐患数<span>3.5</span></p>
					<p class="col-sm-4">历史报警数<span>3.5</span></p>
					<p class="col-sm-4">历史危险品数<span>3.5</span></p>
					<p class="col-sm-4">相关巡检路线<span>3.5</span></p>
				</div>
			</section>
			<section>
				<div class="textandimg margin-top30">
					<h4 class="p-title">建筑信息</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-6">
							<span>建筑用途 </span>
							<strong>公共 </strong>
						</div>
						<div class="col-sm-6">
							<span>建筑类型 </span>
							<strong>超高层</strong>
						</div>

						<div class="col-sm-6">
							<span>建筑年份 </span>
							<strong>2014年 </strong>
						</div>
						<div class="col-sm-6">
							<span>结构类型 </span>
							<strong>钢混</strong>
						</div>

						<div class="col-sm-6">
							<span>楼层数量 </span>
							<strong>14层</strong>
						</div>
						<div class="col-sm-6">
							<span>房间数量 </span>
							<strong>112个</strong>
						</div>

						<div class="col-sm-6">
							<span>占地面积 </span>
							<strong>2354 m² </strong>
						</div>
						<div class="col-sm-6">
							<span>建筑高度 </span>
							<strong>545m</strong>
						</div>
						<div class="col-sm-6">
							<span>建筑经度 </span>
							<strong>12.54951 </strong>
						</div>
						<div class="col-sm-6">
							<span>建筑维度 </span>
							<strong>26.6659</strong>
						</div>
						<div class="col-sm-6">
							<span>管理单位 </span>
							<strong>中心小学 </strong>
						</div>
						<div class="col-sm-6">
							<span>负 责 人 </span>
							<strong>赵堆船</strong>
						</div>

						<div class="col-sm-6">
							<span>平 面 图 </span>
							<strong>按钮 </strong>
						</div>
						<div class="col-sm-6">
							<span>建筑标码 </span>
							<strong>按钮</strong>
						</div>
					</div>
				</div>
			</section>
		</section>
		<!-- 统计 -->
		<section class="bulid-lineinfo">
			<div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
				<div class="personinfo">
					<p>
						<span class="size-20 font-blue">中心小学</span>
						<span class="float-right">
                            <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
						</span>
					</p>
					<p class="col-sm-7 text-left padding0">
						<span>
                            <i class="fas fa-industry"></i> 中心小学</span>
					</p>
					<P class="col-sm-5 text-right padding0">
						<span class="text-right">
                        <span class="font-gray-999">2018.07.09 08:00:00</span>
						</span>
					</P>
				</div>
			</div>
			<section>
				<div class="toolcount margin-top10">
					<h4 class="p-title">
                    安全评分占比
                  </h4>
					<div id="pieb1" style="width: 100%;height:180px;margin: 0 auto;"></div>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top10">
					<h4 class="p-title">
                    建筑报警数量
                  </h4>
					<div id="axis1" style="width: 100%;height:180px;margin: 0 auto;"></div>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top10">
					<h4 class="p-title">
                    建筑隐患数量
                    <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
                  </h4>
					<div id="myChart1" style="width: 100%;height:180px;margin: 0 auto;"></div>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		data() {
			return {
				// 时间筛选
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
				//点击接收的参数对象
				builddata: Object,
				getBuildIngAssess_parameter: {
					unitId: 4,
					beginTime: '2017-07-02',
					endTime: '2017-08-20'
				},
				getBuildIngAssess: Object,
				//建筑安全评分级别
				buildAssessScore: Object,
				//建筑报警数折线图
				buildAlarmCountAssess: Object,
				//建筑隐患数折线图
				getBuildIngAssess: Object
			};
		},
		computed: mapState([
			'tobuilditem'
		]),
		watch: {
			// 所有巡检单位
			tobuilditem() {
				this.builddata = this.tobuilditem;
				console.log("【建筑】——获取详情数据.......");
			},
		},
		methods: {
			moren() {
				$(".bulid-iteminfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".bulid-lineinfo")
					.addClass("display-none")
					.removeClass("display-block");
			},
			jianzhu() {
				$(".bulid-lineinfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".bulid-iteminfo")
					.addClass("display-none")
					.removeClass("display-block");
			},
			getData() {
				// 请求统计数据
				this.$fetch("/api/building/getBuildIngAssess", this.getBuildIngAssess_parameter).then(response => {
					console.log("【建筑】——请求统计数据:")
					console.log(response.data);
					if(response.data) {
						this.planInspectionCount = response.data;

					}
				});
			},
			//划饼状图
			drawPieChart(id, data) {
				var pie = {
					title: {
						x: "center"
					},
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: "vertical",
						left: "left",
						data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
					},
					series: [{
						name: "访问来源",
						type: "pie",
						radius: "55%",
						center: ["50%", "60%"],
						data: [{
								value: 335,
								name: "直接访问"
							},
							{
								value: 310,
								name: "邮件营销"
							},
							{
								value: 234,
								name: "联盟广告"
							},
							{
								value: 135,
								name: "视频广告"
							},
							{
								value: 1548,
								name: "搜索引擎"
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: "rgba(0, 0, 0, 0.5)"
							}
						}
					}]
				};
				let mypie1 = this.$echarts.init(document.getElementById(id));
				mypie1.setOption(pie);
			},
			//划饼状图
			drawBarChart(id, data) {
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
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "12"],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: "value",
						show: false
					}],
					grid: {
						y: 15,
						x2: 0,
						y2: 20,
						x: 0,
						borderWidth: 1
					},
					series: [{
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
									if(params.value > 0 && params.value < 100) {
										return "#333333";
									} else if(params.value >= 100 && params.value <= 200) {
										return "#666666";
									} else if(params.value >= 200 && params.value <= 300) {
										return "#999999";
									}
									return "#bad616";
								}
							}
						}
					}]
				};
				let myChart2 = this.$echarts.init(document.getElementById(id));
				myChart2.setOption(option1);
			}
		},
		mounted() {
			this.getData();
			this.drawPieChart("pieb1", null);
			this.drawBarChart("axis1", null);
			this.drawBarChart("myChart1", null);
		}
	};
</script>