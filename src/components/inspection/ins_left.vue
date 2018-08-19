<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="toolcount">
				<div class="set-width-50 font-gray-999 padding-right0 size-12">
					<ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
						<li>
							<p class="toolcount-p1">0</p>
							<li>
								<p class="size-10">Complete Statistics</p>
							</li>
							<li>
								<p class="size-18 font-blue">今日巡检完成</p>
							</li>
							<li class="margin-top20">
								<p>巡检路线</p>
								<p class="font-italic float-right size-14">{{ins_planInspectionCount.plancount}}</p>
							</li>
							<li>
								<p>巡检中</p>
								<p class="font-blue font-italic float-right size-14">{{ins_planInspectionCount.planing}}</p>
							</li>
							<li>
								<p>巡检人数</p>
								<p class="font-blue font-italic float-right size-14">{{ins_planInspectionCount.plansum}}</p>
							</li>
					</ul>
				</div>
				<div class="set-width-50 display-inline-block font-gray-999 toolcount-right size-12">
					<ul class="padding-left0 margin-bottom0">
						<li class="toolcount-right-title">
							<p class="size-26 font-blue">巡检统计</p>
						</li>
						<li class="toolcount-right-explain">
							<p class="size-10">Inspection Statistics</p>
						</li>
						<li>
							<p>今日完成率</p>
							<p class="font-italic float-right size-14">{{ins_planInspectionCount.dayRate}}</p>
						</li>
						<li>
							<p>近7日</p>
							<p class="font-italic float-right size-14">{{ins_planInspectionCount.weekRate}}</p>
						</li>
						<li>
							<p>近30日</p>
							<p class="font-italic float-right size-14">{{ins_planInspectionCount.monthRate}}</p>
						</li>
						<li>
							<p>历史统计</p>
							<p class="font-italic float-right size-14">{{ins_planInspectionCount.historyRate}}</p>
						</li>
						<li>
							<p class="margin-bottom0">隐患发现率</p>
							<p class="font-orange font-italic margin-bottom0 float-right size-14">{{ins_planInspectionCount.troubleRate}}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section>
			<div class="toolroute font-gray-999 margin-left37">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 padding-right5 clearfix">
					<li>
						<p class="font-gray-666 size-12">中心小学</p>
					</li>
					<li v-if="show">
						<p class="font-blue size-16">巡检路线
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                        <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
						</p>
					</li>
					<li>
						<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择" @change="tolineitem">
							<el-option v-for="item in ins_queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
							</el-option>
						</el-select>
						<div class="float-right margin-top5">
							<a class="upd-btn upd-btn-dis" id="lookroute" @click="lookroute">查看路线</a>
							<!-- <a class="upd-btn">展开表单</a> -->
						</div>
					</li>
					<li>
						<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
							<thead>
								<tr>
									<!-- <th>序号</th> -->
									<th>巡检单号</th>
									<th>巡检员</th>
									<th>状态</th>
									<th>完成时间</th>
									<th>查看</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
									<!-- <td>{{(queryPlanUserList_parameter.currentPage-1)*queryPlanUserList_parameter.pageSize+index+1}}</td> -->
									<td>{{item.idCode}}</td>
									<td>{{item.userName}}</td>
									<td>{{item.status}}</td>
									<td>{{item.finishedTime}}</td>
									<td>
										<a v-on:click="toitmeinfo(item)">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li class="upd-pagin">
						<div>
							<el-pagination style="float: left;" small layout="total" :total="tableData.totalRow">
							</el-pagination>
							<span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{tableData.totalPage}}页</span>
							<el-pagination style="float: right;background: transparent" small layout="prev, pager, next" :page-size="this.queryPlanUserList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="tableData.currentPage" @current-change="handleCurrentChange">
							</el-pagination>
						</div>
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
				//巡检统计参数
				planInspectionCount_parameter: {},
				//巡检统计参数-返回
				ins_planInspectionCount: {
					finish: "",
					nofinish: "",
					amount: "",
					plancount: "",
					planing: "",
					weekRate: "",
					monthRate: "",
					dayRate: "",
					historyRate: "",
					plansum: "",
					troubleRate: ""
				},
				// 表格-请求
				queryPlanUserList_parameter: {
					id: null,
					unitId: 4,
					type: null,
					inspectionName: null,
					status: null,
					currentPage: "1",
					pageSize: 10
				},
				// 表格返回
				tableData: Object,
				// 路线名称下拉框请求参数
				queryInspectionNameList_parameter: {
					unitId: ""
				},
				ins_queryInspectionNameList: Object,
				ins_queryInspectionNameListvalue: "全部路线",
				ins_queryInspectionNameListvalueTwo: "全部路线",
				lookroutebool: false,
				show: true,
			};
		},
		methods: {
			getData() {
				// 请求巡检统计
				this.$fetch("/api/inspection/planInspectionCount").then(response => {
					console.log(response.data);
					let data = response.data;
					if(response.data) {
						this.ins_planInspectionCount.finish = data.planInstanceCount.finish;
						this.ins_planInspectionCount.nofinish =
							data.planInstanceCount.nofinish;
						this.ins_planInspectionCount.amount = data.planInstanceCount.amount;
						this.ins_planInspectionCount.plancount =
							data.planInstanceCount.plancount;
						this.ins_planInspectionCount.planing = data.instanceIngCount.planing;
						this.ins_planInspectionCount.weekRate = data.instanceByDay.weekRate;
						this.ins_planInspectionCount.monthRate = data.instanceByDay.monthRate;
						this.ins_planInspectionCount.dayRate = data.instanceByDay.dayRate;
						this.ins_planInspectionCount.historyRate =
							data.instanceByDay.historyRate;
						this.ins_planInspectionCount.plansum = data.instanceIngCount.plansum;
						this.ins_planInspectionCount.troubleRate =
							data.instanceByDay.troubleRate;
						// this.draw_piemin("ins_charCount", this.ins_planInspectionCount);
					}
				});
				// 请求路线路程列表下拉框
				this.$fetch(
						"/api/inspection/queryInspectionNameList",
						this.queryInspectionNameList_parameter
					)
					.then(response => {
						if(response) {
							let data = response.data;
							console.log(data);
							this.ins_queryInspectionNameList = data.listInspectionName;
						}
					})
					.then(err => {
						console.log(err);
					});
			},
			handleCurrentChange(val) {
				console.log(`当前页:` + val);
				this.queryPlanUserList_parameter.currentPage = val;
				this.getTable();
			},
			getTable() {
				// 请求路线列表
				this.$fetch(
						"/api/inspection/queryPlanUserList",
						this.queryPlanUserList_parameter
					)
					.then(response => {
						if(response) {
							this.tableData = response.data.pager;
						}
					})
					.then(err => {
						console.log(err);
					});
			},
			toitmeinfo(data) {
				this.show = false;
				$(".inspection-iteminfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".inspection-lineinfo")
					.addClass("display-none")
					.removeClass("display-block");
				$(".inspection-lineitem")
					.addClass("display-none")
					.removeClass("display-block");

				// 请求详情
				this.queryPlanUserDetails_parameter.id = data.id;
				this.$fetch(
						"api/inspection/queryPlanUserDetails",
						this.queryPlanUserDetails_parameter
					)
					.then(response => {
						if(response) {
							this.ins_queryPlanUserDetails = response.data;
							console.log(this.ins_queryPlanUserDetails);
						}
					})
					.then(err => {
						console.log(err);
					});
			},
			lookroute(data) {
				console.log(this.lookroutebool);
				if(this.lookroutebool) {
					$(".inspection-iteminfo")
						.addClass("display-none")
						.removeClass("display-block");
					$(".inspection-lineinfo")
						.addClass("display-none")
						.removeClass("display-block");
					$(".inspection-lineitem")
						.addClass("display-block")
						.removeClass("display-none");
				}
			},
			tolineitem() {
				console.log(this.ins_queryInspectionNameListvalue);
				this.lookroutebool = true;
				$("#lookroute").removeClass("upd-btn-dis");
				this.queryPlanUserList_parameter.inspectionName = this.ins_queryInspectionNameListvalue;
				// console.log(data.name)
				this.getTable();
			},

			// 锁定/关闭
			goBack() {
				$(".icon-suo-guan-mian-,.icon-guanbi-mian-").toggleClass("active");
			}
		},
		mounted() {
			this.$store.commit("route_path", this.$route.path);
			this.getData();
			this.getTable();
		}
	};
</script>