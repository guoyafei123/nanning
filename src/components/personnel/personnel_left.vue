<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="toolcount">
				<div class="set-width-50  font-gray-999 padding-right0">
					<ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
						<li>
							<h1 class="toolcount-p1 font-red" style="line-height:10px">{{personAnalyseData.userCount?personAnalyseData.userCount:"0"}}</h1>
						</li>
						<li>
							<p class="size-10">Alarm Number</p>
						</li>
						<li>
							<p class="size-18 font-blue">人员在线数量</p>
						</li>
					</ul>
				</div>
				<div class="set-width-50 display-inline-block font-gray-999 toolcount-right">
					<ul class="padding-left0 margin-bottom0">
						<li>
							<p>人员总数</p>
							<p class="font-blue font-italic float-right size-14">{{personAnalyseData.userOnlineCount?personAnalyseData.userOnlineCount:"0"}}</p>
						</li>
						<li>
							<p>巡检员</p>
							<p class="font-blue font-italic float-right size-14">{{personAnalyseData.inspectorCount?personAnalyseData.inspectorCount:"0"}}/{{personAnalyseData.inspectorOnlineCount?personAnalyseData.inspectorOnlineCount:"0"}}</p>
						</li>
						<li>
							<p>管理员</p>
							<p class="font-blue font-italic float-right size-14">{{personAnalyseData.administratorOnlineCount?personAnalyseData.administratorOnlineCount:"0"}}/{{personAnalyseData.administratorCount?personAnalyseData.administratorCount:"0"}}</p>
						</li>
						<li>
							<p>待审核</p>
							<p class="font-blue font-italic float-right size-14">{{personAnalyseData.auditingUserCount?personAnalyseData.auditingUserCount:"0"}}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section>
			<div class="toolcompanyrate margin-top40">
				<ul class="row padding0 margin0 size-12 font-gray-999">
					<li class="col-sm-6">
						<div class="row margin0 padding0">
							<div class="toolcompanyrate-char col-sm-7 padding0">
								<small class="font-blue">
                        执行任务最多
                      </small>
								<p class="size-16">{{personAnalyseMaxUser.inspectionUsername?personAnalyseMaxUser.inspectionUsername:"暂无名称"}}</p>
							</div>
							<div class="col-sm-5 padding0 text-left text-center">
								<span class="size-24 font-white">{{personAnalyseMaxUser.inspectionFinishAmount?personAnalyseMaxUser.inspectionFinishAmount:"0"}}</span>
							</div>
						</div>
					</li>
					<li class="col-sm-6">
						<div class="row margin0 padding0">
							<div class="toolcompanyrate-char col-sm-7 padding0">
								<small class="font-blue">
                        发现隐患最多
                      </small>
								<p class="size-16">{{personAnalyseMaxUser.troubleNickName?personAnalyseMaxUser.troubleNickName:"暂无名称"}}</p>
							</div>
							<div class="col-sm-5 padding0 text-left text-center">
								<span class="size-24 font-white">{{personAnalyseMaxUser.troubleCount?personAnalyseMaxUser.troubleCount:"0"}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section>
			<div class="toolroute font-gray-ccc margin-left37 margin-top40">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 padding-right5 clearfix">
					<li>
						<p class="font-blue size-16">人员信息
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                        <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                      </span>
						</p>
					</li>
					<li>
						<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
							<thead>
								<tr>
									<th>姓名</th>
									<th>手机号</th>
									<th>单位名称</th>
									<th>状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody id="">
								<tr v-for="item in tableData.result" v-on:click="toitmeinfo(item)">
									<td>{{item.nickName}}</td>
									<td>{{item.cellPhone}}</td>
									<td>{{item.unitName}}</td>
									<td>
										<i v-if="item.online==true" class="fas fa-link font-blue" data-toggle="tooltip" title="在线"></i>
										<i v-if="item.online==false" class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
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
							<span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.queryPersonList_parameter.pageSize)}}页</span>
							<el-pagination style="float: right;background: transparent" small layout="prev, pager, next" :page-size="this.queryPersonList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.queryPersonList_parameter.currentPage" @current-change="handleCurrentChange">
							</el-pagination>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import HeaderVue from '../publick/header.vue';
	export default {
		data() {
			return {
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

				value7: "",
				//建筑统计参数
				personAnalyse_parameter:{
					unitId: null
				},
				//建筑统计返回对象
				personAnalyseData: Object,
				personAnalyseMaxUser: Object,
				// 表格-请求
				queryPersonList_parameter: {
					unitId: null,
					structure: null,
					currentPage: 1,
					pageSize: 10
				},
				// 表格返回
				tableData: Object,
				getunitid:Object
			}

		},
		computed: mapState([
			'unitid'
		]),
		watch: {
			unitid(){
				// console.log(this.queryAlarmData_parmar.unitId)
				if(this.unitid!=0){
					this.getunitid=this.unitid;
				}else{
					this.getunitid=null;
				}
				this.personAnalyse_parameter.unitId=this.getunitid;
				this.queryPersonList_parameter.unitId=this.getunitid;
				this.getPersonData();  
				this.getPersonTable(); 
			}
		},
		methods: {
			// 获取人员分析
			getPersonData() {
				this.$fetch(
					"/api/user/userAnalyse", 
					this.personAnalyse_parameter
					).then(response => {
						if (response.data) {
							this.personAnalyseData = response.data.userAnalyse;
							console.log("人员统计数据1-----0--0--0");
							console.log(response.data.userAnalyse);
						}
				});
				this.$fetch(
					"/api/alarmstats/queryMaxUser",
					this.personAnalyse_parameter
					).then(response => {
						if (response.data) {
							console.log("人员统计数据2-----0--0--0");
							console.log(response.data);
							this.personAnalyseMaxUser = response.data.param;
						}
				});
			},
			// 获取表格
			getPersonTable() {
				this.$fetch(
					"/api/user/query_unit_user",
					this.queryPersonList_parameter
				).then(response => {
					if (response) {
						this.tableData = response.data.pager;
						console.log("人员表格列表-----0--0--0");
						console.log(this.tableData);
					}
				}).then(err => {
					console.log(err);
				});
			},
			handleCurrentChange(val) {
				this.queryPersonList_parameter.currentPage = val;
				this.getPersonTable();
			},
		    // 右侧
			moren() {
				$(".per-iteminfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".per-lineinfo")
					.addClass("display-none")
					.removeClass("display-block");
			},
			//获取详情
			toitmeinfo(data) {
				this.itemdata = data;
				this.$store.commit("topersonitem", this.itemdata);
			},
		},
		mounted() {
			this.getPersonData();
			this.getPersonTable();
		},
	}
</script>