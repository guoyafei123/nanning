<template>
	<div class="toolright">
		<!-- 统计 -->
		<section class="bulid-lineinfo">
			<!-- 区域/单位统计 -->
			<div class="row unit-info toolcount font-gray-999 size-12 margin-top0 clearfix margin-bottom50">
				<!-- 已选择单位 -->
				<div class="col-sm-7">
					<div class="personinfo">
						<p>
							<span class="size-20 font-blue">{{queryById.name !='Object' ?queryById.name:'全部单位'}}</span>
							<!-- <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span> -->
						</p>
						<p>
							<span><i class="el-icon-location"></i> {{queryById.location?queryById.location:'-'}}</span>
						</p>
					</div>
				</div>
				<!-- 已选择单位预案总数 -->
				<div class="col-sm-5 font-white text-right">
					<i class="icon iconfont icon-navicon-yqgl size-12 font-blue"></i> 预案总数<br>
					<span class="size-22 font-blue">{{planbunlist.e}}</span>
				</div>
				<!-- 柱形图 -->
				<div class="col-sm-12 margin-top20">
					<div id="myChart" style="width: 100%;height:100px;margin: 0 auto;"></div>
				</div>

				
			</div>
		</section>
		<!-- 预案列表 -->
		<section class="early-warning margin-top0">
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
					<li class="col-lg-4 col-md-4 col-sm-4 active" @click="plantype(1)">
						<a href="#fireplan-list" data-toggle="tab">
							<h4><span>{{planbunlist.a}}</span></h4>
							<small>火灾预案</small>
						</a>
					</li>
					<li class="col-lg-4 col-md-4 col-sm-4" @click="plantype(2)">
						<a href="#manageplan-list" data-toggle="tab">
							<h4><span>{{planbunlist.b}}</span></h4>
							<small>管理规定</small>
						</a>
					</li>
					<li class="col-lg-4 col-md-4 col-sm-4" @click="plantype(4)">
						<a href="#sparseplan-list" data-toggle="tab">
							<h4><span>{{planbunlist.c}}</span></h4>
							<small>应急疏散图</small>
						</a>
					</li>
				</ul>
				<div id="myTabContent" class="tab-content col-sm-12">
					<!-- 火灾预案 -->
					<div class="tab-pane fade in active" id="fireplan-list">
						<ul class="list-inline">
							<template v-for="item in this.queryPlans">
								<li class="col-lg-4 col-md-4 col-sm-4" @click="topdf(item)">
									<figure>
										<div class="plan-listimg">
											
											<img v-if="item.pattern!='pdf'" :src=item.url class="img-responsive" :alt=item.name>
											<img v-if="item.pattern=='pdf'" :src="item.url.replace('.pdf','_0.png')" class="img-responsive" :alt=item.name>
										</div>
										<div class="caption">
											<h4 data-toggle="tooltip">{{item.name}}</h4>
											<h5>{{item.unitName}}</h5>
											<p>
												<small>{{item.createTime.substring(5)}}</small>
												<a :href="item.url+'?filename='+item.name+'.'+item.pattern"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
											</p>
										</div>
									</figure>
								</li>
							</template>
						</ul>
					</div>
					<!-- 管理规定 -->
					<div class="tab-pane fade" id="manageplan-list">
						<ul class="list-inline">
							<template v-for="item in this.queryPlans">
								<li class="col-lg-4 col-md-4 col-sm-4" @click="topdf(item)">
									<figure>
										<div class="plan-listimg">
											
											<img v-if="item.pattern!='pdf'" :src=item.url class="img-responsive" :alt=item.name>
											<img v-if="item.pattern=='pdf'" :src="item.url.replace('.pdf','_0.png')" class="img-responsive" :alt=item.name>
										</div>
										<div class="caption">
											<h4 data-toggle="tooltip">{{item.name}}</h4>
											<h5>{{item.unitName}}</h5>
											<p>
												<small>{{item.createTime.substring(5)}}</small>
												<a :href="item.url+'?filename='+item.name+'.'+item.pattern"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
											</p>
										</div>
									</figure>
								</li>
							</template>
						</ul>
					</div>
					<!-- 疏散示意图 -->
					<div class="tab-pane fade" id="sparseplan-list">
						<ul class="list-inline">
							<template v-for="item in this.queryPlans">
								<li class="col-lg-4 col-md-4 col-sm-4" @click="topdf(item)">
									<figure>
										<div class="plan-listimg">
											
											<img v-if="item.pattern!='pdf'" :src=item.url class="img-responsive" :alt=item.name>
											<img v-if="item.pattern=='pdf'" :src="item.url.replace('.pdf','_0.png')" class="img-responsive" :alt=item.name>
										</div>
										<div class="caption">
											<h4 data-toggle="tooltip">{{item.name}}</h4>
											<h5>{{item.unitName}}</h5>
											<p>
												<small>{{item.createTime.substring(5)}}</small>
												<a :href="item.url+'?filename='+item.name+'.'+item.pattern"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
											</p>
										</div>
									</figure>
								</li>
							</template>
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
				],
				queryPlan_parameter:{
					unitId:null,
					buildingId:null,
					type:1
				},
				queryPlans:Object,
				countUnitPlans:Object,
				planbunlist:{
					a:0,
					b:0,
					c:0,
					d:0,
					e:0
				},
				getunitid:null,
				queryById_parameter:{
					unitId:null
				},
				queryById:Object
			};
		},
		computed:mapState([
			'countUnitPlan',
			'unitid'
		]),
		watch:{
			countUnitPlan(){
				this.getchar("myChart",this.countUnitPlan.numberOfPlanType);
				this.planbunlists(this.countUnitPlan.numberOfPlanType);
			},
			unitid(){
				// //console.log(this.queryAlarmData_parmar.unitId)
				if(this.unitid!=0){
					this.getunitid=this.unitid;
				}else{
					this.getunitid=null;
				}
				this.queryPlan_parameter.unitId=this.getunitid;
				this.queryById_parameter.unitId=this.getunitid;
				this.queryPlan();
				this.queryByIds();
			}
		},
		methods: {
			planbunlists(data){
				data.forEach(element => {
					if(element.type==1){
						this.planbunlist.a=element.count;
					}
					if(element.type==2){
						this.planbunlist.b=element.count;
					}
					if(element.type==4){
						this.planbunlist.c=element.count;
					}
					if(element.type==3){
						this.planbunlist.d=element.count;
					}
				});
				this.planbunlist.e=this.planbunlist.a+this.planbunlist.b+this.planbunlist.c+this.planbunlist.d;
			},
			openEarlyList() {
				$(".unit-info").slideToggle(function() {
					$(".unit-btn-close").toggle();
					$(".unit-btn-open").toggle();
					$(".early-warning").toggleClass("scrollheight");
				});
			},
			getchar(id,data){
				var a=[],b=[];
				data.forEach(element => {
					a.push(element.typeName);
					b.push(element.count);
				});
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
						data: a,
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
									if(params.value > 0 && params.value < 10) {
										return "#666";
									} else if(params.value >= 10 && params.value <= 20) {
										return "#999";
									} else if(params.value >= 20 && params.value <= 30) {
										return "#ccc";
									}
									return "#bad616";
								}
							}
						},
						data: b
					}]
				};
				let myChart = this.$echarts.init(document.getElementById("myChart"));
				myChart.setOption(option);
			},
			queryPlan(){
				this.$fetch(
						"/api/plan/queryPlan",
						this.queryPlan_parameter
					).then(response => {
						if(response) {
							this.queryPlans = response.data.prearranges;
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			queryByIds(){
				this.$fetch(
						"/api/unit/queryById",
						this.queryById_parameter
					).then(response => {
						if(response.errorCode==0) {
							this.queryById = response.data.unit
						}else{
							this.queryById.name='全部单位'
							this.queryById.location='-'
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			
			topdf(item){
				this.$store.commit("topdf", item);
			},
			download(item){
				// window.open(url);
				let aTag = document.createElement('a');
				let blob = new Blob([item.url]);　　
				aTag.download = item.name;
				//console.log(URL.createObjectURL(blob));　　
				aTag.href = URL.createObjectURL(item.url);
				aTag.click();　　　　　　
				URL.revokeObjectURL(blob);
			},
			plantype(type){
				this.queryPlan_parameter.type=type;
				this.queryPlan();
			}
		},
		mounted() {
			if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
				this.queryPlan_parameter.unitId=sessionStorage.unitid;
				this.queryById_parameter.unitId=sessionStorage.unitid;
			}
			if(sessionStorage.unitid==0){
				this.queryPlan_parameter.unitId=null;
				this.queryById_parameter.unitId=null;
			}
			this.queryPlan();
			this.queryByIds();
		}
	};
</script>