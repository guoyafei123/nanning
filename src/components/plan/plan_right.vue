<template>
	<div class="toolright">
		<!-- 统计 -->
		<section class="bulid-lineinfo">
			<!-- 区域/单位统计 -->
			<div class="row unit-info toolcount font-gray-999 size-12 margin-top0 clearfix">
				<!-- 已选择单位 -->
				<div class="col-sm-7">
					<div class="personinfo">
						<p>
							<span class="size-20 font-blue">中心小学</span>
							<span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
						</p>
						<p>
							<span><i class="el-icon-location"></i> 怀化市</span>
						</p>
					</div>
				</div>
				<!-- 已选择单位预案总数 -->
				<div class="col-sm-5 font-white text-right">
					<i class="icon iconfont icon-navicon-yqgl size-12 font-blue"></i> 预案总数<br>
					<span class="size-22 font-blue">174</span>
				</div>
				<!-- 柱形图 -->
				<div class="col-sm-12 margin-top20">
					<div id="myChart" style="width: 100%;height:100px;margin: 0 auto;"></div>
				</div>

				
			</div>
		</section>
		<!-- 预案列表 -->
		<section class="early-warning margin-top20">
			<span class="toolroute-rect bg-blue"></span>
			<!-- 标题 -->
			<div class="early-title">
				<small>Plan-List</small>
				<h3>预案列表
                              <a class="pull-right size-12" @click="openEarlyList()"><span class="unit-btn-open">展开 <i class="fas fa-chevron-up font-blue"></i></span><span class="unit-btn-close" style="display: none;">折叠 <i class="fas fa-chevron-down font-blue"></i></span></a>
                          </h3>
			</div>
			<!-- 选项卡 -->
			<div class="early-tab plan-tab">
				<ul class="col-lg-12 col-md-12 col-sm-12 early-menu list-inline margin-bottom0 nav nav-tabs">
					<li class="col-lg-4 col-md-4 col-sm-4 active">
						<a href="#fireplan-list" data-toggle="tab">
							<h4><span>2</span></h4>
							<small>火灾预案</small>
						</a>
					</li>
					<li class="col-lg-4 col-md-4 col-sm-4">
						<a href="#manageplan-list" data-toggle="tab">
							<h4><span>4</span></h4>
							<small>管理规定</small>
						</a>
					</li>
					<li class="col-lg-4 col-md-4 col-sm-4">
						<a href="#sparseplan-list" data-toggle="tab">
							<h4><span>4</span></h4>
							<small>疏散示意图</small>
						</a>
					</li>
				</ul>
				<div id="myTabContent" class="tab-content col-sm-12">
					<!-- 火灾预案 -->
					<div class="tab-pane fade in active" id="fireplan-list">
						<ul class="list-inline">
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan1.png" class="img-responsive" alt="火情确认须知"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="火情确认须知">火情确认须知</h4>
										<h5>中心小学</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan2.png" class="img-responsive" alt="单位灭火力量分布"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
										<h5>瑞和家园</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan2.png" class="img-responsive" alt="单位灭火力量分布"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
										<h5>瑞和家园</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan1.png" class="img-responsive" alt="火情确认须知"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="火情确认须知">火情确认须知</h4>
										<h5>中心小学</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan1.png" class="img-responsive" alt="火情确认须知"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
										<h5>瑞和家园</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan2.png" class="img-responsive" alt="单位灭火力量分布"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
										<h5>瑞和家园</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-sm-12">
								<span class="font-white pull-right">分页</span>
							</li>
						</ul>
					</div>
					<!-- 管理规定 -->
					<div class="tab-pane fade" id="manageplan-list">
						<ul class="list-inline">
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan2.png" class="img-responsive" alt="消防值班守则"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="消防值班守则">消防值班守则</h4>
										<h5>中心小学</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-sm-12">
								<span class="font-white pull-right">分页</span>
							</li>
						</ul>
					</div>
					<!-- 疏散示意图 -->
					<div class="tab-pane fade" id="sparseplan-list">
						<ul class="list-inline">
							<li class="col-lg-4 col-md-4 col-sm-4">
								<figure>
									<div class="plan-listimg"><img src="../../assets/images/plan/plan3.png" class="img-responsive" alt="应急路线示意图"></div>
									<div class="caption">
										<h4 data-toggle="tooltip" title="应急路线示意图">应急路线示意图</h4>
										<h5>瑞和家园</h5>
										<p>
											<small>2018-09-23</small>
											<a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
											<a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
										</p>
									</div>
								</figure>
							</li>
							<li class="col-sm-12">
								<span class="font-white pull-right">分页</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import{mapState} from "vuex";
	export default {
		data() {
			return {
				// 单选按钮
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
				]
			};
		},
		computed:mapState([
			'countUnitPlan',
		]),
		watch:{
			countUnitPlan(){
				
			}
		},
		methods: {
			openEarlyList() {
				$(".unit-info").slideToggle(function() {
					$(".unit-btn-close").toggle();
					$(".unit-btn-open").toggle();
					$(".early-warning").toggleClass("scrollheight");
				});
			},
			getchar(){
				var option = {
					tooltip: {
						trigger: "axis",
						axisPointer: {
							// 坐标轴指示器，坐标轴触发有效
							type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: "70",
						right: "10",
						bottom: "0",
						top: "0"
					},
					xAxis: {
						type: "value",
						show: false
					},
					yAxis: {
						type: "category",
						data: ['疏散示意图','疏散预案','管理规定','火灾预案'],
						show: true,
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: "#999"
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						z:10
					},
					series: [{
						type: "bar",
						label: {
							normal: {
								show: true,
								position: "right",
								color: "#ffffff"
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
						data: [220, 532, 1901,200]
					}]
				};
				let myChart = this.$echarts.init(document.getElementById("myChart"));
				myChart.setOption(option);
			}
		},
		mounted() {
			console.log(this.countUnitPlan);
			this.getchar();
		}
	};
</script>