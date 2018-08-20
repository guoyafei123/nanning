<template>
	<div class="toolright">
		<!-- 筛选 -->
		<section class="my-filter padding5 bg-gray-222 clearfix">
			<!-- 单位筛选 -->
			<div class="col-sm-3 padding0">
				<el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="value7" placeholder="瑞和家园">
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
		<section class="per-iteminfo display-none">
			<a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
			<section class="margin-top20">
				<div class="personinfo">
					<p>
						<span class="size-20 font-blue">{{userInfo.nickName?userInfo.nickName:"暂为空"}}</span>
						<span class="bgbox-min bg-gray-666 font-black size-10">巡检人员</span>
						<span v-if="userInfo.online==true" class="bgbox-min bg-blue font-black size-10">在线</span>
						<span v-if="userInfo.online==false" class="bgbox-min bg-blue font-black size-10">离线</span>
						<span class="float-right">
                            <span class="bgbox-max bg-blue font-black size-10">
                                <i class="icon iconfont icon-dianhua-mian- size-12"></i> 打电话</span>
						<span class="bgbox-max bg-gray-333 font-gray-999 size-10">
                                <i class="icon iconfont icon-xiaoxi-mian-- size-12"></i> 发消息</span>
						</span>
					</p>
					<p class="col-sm-7 text-left padding0">
						<span><i class="fas fa-industry"></i> {{userInfo.unitName?userInfo.unitName:"暂无单位"}}</span>
					</p>
					<p class="col-sm-5 text-right padding0">
						注册时间:<strong class="font-gray-999"> {{userRegistDate.substring(0,10)}}</strong>
					</p>
				</div>
			</section>
			<section>
				<div class="row toolcount margin-top20">
					<div class="col-sm-4 font-gray-666 padding0">
						<ul class="toolcount-left padding-left0" id="toolcount">
							<li class="col-xs-offset-1 col-xs-10 margin-bottom10 padding-left5">
								<!-- <h1 class="toolcount-p1">8.7</h1> -->
								<img :src="userInfo.headImgUrl" class="img-responsive img-circle" alt="段亚伟">
								<!-- <img src=""+{{userInfo.headImgUrl?userInfo.headImgUrl:"../../assets/images/head.jpg"}}+"" class="img-responsive img-circle" alt="段亚伟"> -->
							</li>
							<li class="col-xs-offset-1 col-xs-10 padding-left5 text-center">
								<h4 class="size-16 font-blue show">{{userInfo.nickName?userInfo.nickName:"暂为空"}}</h4>
								<span class="size-12 font-gray-999"><br> {{userInfo.cellPhone}}</span>
							</li>
						</ul>
					</div>
					<div class="col-sm-8 font-gray-999 padding0">
						<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
							<li>
								<p class="size-18 font-white">个人数据</p>
							<li>
								<p class="size-10 set-scaleright">Personnel Statistics</p>
							</li>
							<li class="margin-top10">
								<p>巡检任务领取总数 <strong class="font-white">{{queryUserData.inspectionCount}}</strong></p>
							</li>
							<li class="margin-top0">
								<p>巡检任务完成总数 <strong class="font-white">{{queryUserData.inspectionFinishCount}}</strong></p>
							</li>
							<li class="row text-left">
								<div class="col-sm-5 padding-right0">
									<p >报警次数 <strong class="font-red">{{queryUserData.alarmFindCount}}次</strong></p>
								</div>
								<div class="col-sm-7">
									<p>报警确认次数 <strong class="font-blue">{{queryUserData.alarmConfirmCount}}</strong></p>
								</div>
							</li>
							<li class="row text-left">
								<div class="col-sm-5 padding-right0">
									<p>隐患发现数 <strong class="font-red">{{queryUserData.unitTroubleFindCount}}次</strong></p>
								</div>
								<div class="col-sm-7">
									<p>隐患解决数 <strong class="font-blue">{{queryUserData.troubleConfirmCount}}</strong></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div class="toolcount">
					<div class="row">
						<div class="col-sm-4">
							<div class="newpiechar"> 
								<p>{{userTroubleRate}}%</p>
							</div>
							<p class="text-center font-gray-999 margin-top10">隐患发现占比</p>
						</div>
						<div class="col-sm-4">
							<div class="newpiechar"> 
								<p>{{userInspectionRate}}%</p>
							</div>
							<p class="text-center font-gray-999 margin-top10">巡检完成占比</p>
						</div>
						<div class="col-sm-4">
							<div class="newpiechar"> 
								<p>{{userTroubleDealRate}}%</p>
							</div>
							<p class="text-center font-gray-999 margin-top10">隐患解决占比</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="toolregionrate margin-top30">
					<h4 class="p-title">巡检记录
                  <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span></h4>
					<div class="table-responsive">
						<table class="table size-12 table-condensed toolroute-table margin-top10">
							<thead>
								<tr>
									<th>序号</th>
									<th>巡检日期</th>
									<th>路线名称</th>
									<th>巡检统计</th>
									<th>状态</th>
								</tr>
							</thead>
							<tbody id="">
								<tr v-for="(item,index) in tableData.result">
									<td>{{index}}</td>
									<td>{{item.receiveTime}}</td>
									<td>{{item.inspectionName}}</td>
									<td>
										<span class="font-blue">{{item.finishedAmount}}</span>/{{item.amount}}</td>
									<td>
										<a>
											<i v-if="item.status==1" class="fas fa-flag-checkered font-blue" data-toggle="tooltip" title="已领取"></i>
											<i v-if="item.status==2" class="fas fa-flag-checkered font-blue" data-toggle="tooltip" title="巡检中"></i>
											<i v-if="item.status==3" class="icon iconfont icon-queren1 font-gray-666" data-toggle="tooltip" title="已完成"></i>
											<i v-if="item.status==4" class="fas fa-flag-checkered font-blue" data-toggle="tooltip" title="未完成"></i>
										</a>
									</td>
								</tr>
							</tbody>
							<li class="upd-pagin">
								<div>
									<el-pagination style="float: left;" small layout="total" :total="tableData.totalRow">
									</el-pagination>
									<span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.queryUserInspectionList_parameter.pageSize)}}页</span>
									<el-pagination style="float: right;background: transparent" small layout="prev, pager, next" :page-size="this.queryUserInspectionList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.queryUserInspectionList_parameter.currentPage" @current-change="handleCurrentChange">
									</el-pagination>
								</div>
							</li>
						</table>

					</div>
				</div>
			</section>
		</section>
		<!-- 统计 -->
		<section class="per-lineinfo">
			<section>
				<div class="toolcount margin-top20">
					<h4 class="p-title">人员统计</h4>
					<div class="col-sm-7 font-gray-999 padding-right0 size-12">
						<div class="row text-center margin-top80">
							<div class="col-sm-6 personnel-borderright">
								<p class="size-16 font-yellow">{{queryUserCountData.inspectionPlanPeople?queryUserCountData.inspectionPlanPeople:"0"}}</p>
								<p>巡检人员</p>
							</div>
							<div class="col-sm-6">
								<p class="size-16 font-white">{{queryUserCountData.Management?queryUserCountData.Management:"0"}}</p>
								<p>管理人员</p>
							</div>
						</div>
					</div>
					<div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
						<div id="pieb1" style="width: 100%;height:150px;margin: 0 auto;"></div>
					</div>
				</div>
			</section>
			<section>
				<div class="toolcount">
					<h4 class="p-title">人员执勤</h4>
					<div class="row">
						<div class="col-sm-6">
							<div class="newpiechar"> 
								<p>{{inspectorActive==="NaN"?0:inspectorActive}}%</p>
							</div>
							<p class="text-center font-gray-999 margin-top10">巡检人员活跃度</p>
						</div>
						<div class="col-sm-6">
							<div class="newpiechar"> 
								<p>{{inspectorExecuteRate==="NaN"?0:inspectorExecuteRate}}%</p>
							</div>
							<p class="text-center font-gray-999 margin-top10">巡检人员执行率</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top30">
					<h4 class="p-title">人员在线数量变化趋势
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
	import { mapState } from "vuex";
	// import Per_leftVue from './per_left.vue';
	// import Per_rightVue from './per_right.vue';
	export default {
		components: {
			// 'per_left-vue':Per_leftVue,
			// 'per_right-vue':Per_rightVue
		},
		data() {
			return {
				// 右侧
				value7: '',
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
				queryUserCount_parameter:{
					unitId: null,
					beginTime: '2017-07-02',
					endTime: '2018-08-20'
				},
				queryUserCountData:Object,
				loginLineChartData:Object,
				inspectorActive:null,
				inspectorExecuteRate:null,
				toPersonDetailInfo:Object,
				queryUserData_parameter:{
					userId:null
				},
				queryUserData:Object,
				userInfo:Object,
				userRegistDate:"",
				userTroubleRate:null,
				userInspectionRate:null,
				userTroubleDealRate:null,
				queryUserInspectionList_parameter:{
					userId:null,
					currentPage: 1,
					pageSize: 10
				},
				tableData: Object,
			}

		},
		computed: mapState([
			'topersonitem',
			'unitid'
		]),
		watch: {
			// 人员详情
			topersonitem(){
				console.log("用户id：");
				console.log(this.toPersonDetailInfo.id);
				this.toPersonDetailInfo =this.topersonitem;
				this.queryUserData_parameter.userId = this.toPersonDetailInfo.id;
				this.queryUserInspectionList_parameter.userId = this.toPersonDetailInfo.id;
				this.getPersonDetailInfo();
				this.getPersionInpectionLog();
			},
			unitid(){
				// console.log(this.queryAlarmData_parmar.unitId)
				if(this.unitid!=0){
					this.getunitid=this.unitid;
				}else{
					this.getunitid=null;
				}
				this.queryUserCount_parameter=this.getunitid;
				this.getData();
			}
		},
		methods: {
			//获取人员右侧统计数据
			getData(){
				this.$fetch("/api/user/queryUserCount",this.queryUserCount_parameter).then(response => {
					if (response.data) {
						let data = response.data;
						this.queryUserCountData = data.info;
						this.loginLineChartData = data.info.loginLogLineChart;
						//组装圆形图数据格式
						this.drawLineChart("myChart",this.loginLineChartData);
						this.drawPieChart("pieb1",this.queryUserCountData);
						//计算人员确切率：
						let inspectionPlanPeople = this.queryUserCountData.inspectionPlanPeople ? this.queryUserCountData.inspectionPlanPeople:0;
						let loginPeople = this.queryUserCountData.loginPeople?this.queryUserCountData.loginPeople:1;
						this.inspectorActive = Number((Number(inspectionPlanPeople) / Number(loginPeople)) * 100).toFixed(0);
						let amount =  this.queryUserCountData.amount?this.queryUserCountData.amount:1;
						let finish =  this.queryUserCountData.finish?this.queryUserCountData.finish:0;
						this.inspectorExecuteRate = Number((Number(finish) / Number(amount)) * 100).toFixed(0);
					}
				});
			}, 
			jianzhu() {
				$(".per-lineinfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".per-iteminfo")
					.addClass("display-none")
					.removeClass("display-block");
			},
			drawLineChart(id,data) {
				let a = data.lineChartsDate;
				let b = data.lineChartsCount;
				var option = {
					xAxis: {
						type: "category",
						boundaryGap: false,
						data:  a,
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
					series: [{
							data: b,
							name: "每日登录次数",
							type: "line",
							symbol: "none",
							smooth: true,
							color: {
								colorStops: [{
									offset: 0,
									color: "#333"
								}]
							}
						}
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
				let myChart = this.$echarts.init(document.getElementById(id));
				myChart.setOption(option);
			},
			drawPieChart(id,data) {
				let management = data.Management ;
				let inspector = data.inspector ;
				var pie = {
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
						name: "人员分类",
						type: "pie",
						selectedMode: "single",
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
						data: [{
								value: inspector,
								name: "巡检人员",
								selected: true
							},
							{
								value: management,
								name: "管理人员"
							}
						]
					}]
				};
				let mypie1 = this.$echarts.init(document.getElementById(id));
				mypie1.setOption(pie);
			},
			//获取人员详情数据
			getPersonDetailInfo(){
				this.$fetch("/api/alarmstats/queryUserData",this.queryUserData_parameter).then(response => {
					if (response.data) {
						let data = response.data;
						this.queryUserData = data.info;
						this.userInfo = data.info.user;
						this.userRegistDate = this.userInfo.createTime;
						//计算各类型占比
						let unitTroubleFindCount = Number(Number(this.queryUserData.troubleFindCount?this.queryUserData.troubleFindCount:0) / Number(this.queryUserData.unitTroubleFindCount?this.queryUserData.unitTroubleFindCount:0)).toFixed(2);
						let unitInspectionCount = Number(Number(this.queryUserData.inspectionFinishCount?this.queryUserData.inspectionFinishCount:0) / Number(this.queryUserData.unitInspectionCount?this.queryUserData.unitInspectionCount:0)).toFixed(2);
						let unitTroubleConfirmCount = Number(Number(this.queryUserData.troubleConfirmCount?this.queryUserData.troubleConfirmCount:0)/Number(this.queryUserData.unitTroubleConfirmCount?this.queryUserData.unitTroubleConfirmCount:0)).toFixed(2);
						if(unitTroubleFindCount  === "NaN"){
							this.userTroubleRate =  0;
						}else{
							this.userTroubleRate =  Number(unitTroubleFindCount * 100).toFixed(0);
						}
						if(unitInspectionCount === "NaN"){
							this.userInspectionRate = 0;
						}else{
							this.userInspectionRate = Number(unitInspectionCount * 100).toFixed(0);
						}
						if(unitTroubleConfirmCount  === "NaN"){
						    this.userTroubleDealRate = 0;
						}else{
							this.userTroubleDealRate = Number(unitTroubleConfirmCount * 100).toFixed(0);
						}	
					}
				});
			},
			//获取个人巡检记录
			getPersionInpectionLog(){
				this.$fetch("/api/inspection/queryUserInspectionData",this.queryUserInspectionList_parameter).then(response => {
					if (response.data) {
						let data = response.data;
						this.tableData = data.inspectionPlanUserPager;
					}
				});
			},
			handleCurrentChange(val) {
				this.queryUserInspectionList_parameter.currentPage = val;
				this.getPersionInpectionLog();
			},
		},
		mounted() {
			// 左侧
			if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
				this.queryUserCount_parameter=sessionStorage.unitid;
			}
			if(sessionStorage.unitid==0){
				this.queryUserCount_parameter=null;
			}
			this.$store.commit('route_path', this.$route.path);
			this.getData();
		},
	}
</script>