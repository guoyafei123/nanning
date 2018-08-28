<template>
	<div class="row" id="inspection">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<!-- <left-vue v-bind:planInspectionCount='planInspectionCount'></left-vue> -->
			<template>
				<div class="toolleft margin-right0">
					<section>
						<div class="toolcount">
							<div class="set-width-50 font-gray-999 padding-right0 size-12">
								<ul class="toolcount-left margin-bottom0 padding-right10 padding-left0" id="toolcount">
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
											<p class="font-white float-right size-14">{{planInspectionCount.plancount}}</p>
										</li>
										<li>
											<p>巡检中</p>
											<p class="font-blue float-right size-14">{{planInspectionCount.planing}}</p>
										</li>
										<li>
											<p>巡检人数</p>
											<p class="font-gray-ccc float-right size-14">{{planInspectionCount.plansum}}</p>
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
										<p class="float-right size-14 font-gray-ccc">{{planInspectionCount.dayRate}}</p>
									</li>
									<li>
										<p>近7日</p>
										<p class="float-right size-14 font-gray-ccc">{{planInspectionCount.weekRate}}</p>
									</li>
									<li>
										<p>近30日</p>
										<p class="float-right size-14 font-gray-ccc">{{planInspectionCount.monthRate}}</p>
									</li>
									<li>
										<p>历史统计</p>
										<p class="float-right size-14 font-gray-ccc">{{planInspectionCount.historyRate}}</p>
									</li>
									<li>
										<p class="margin-bottom0">隐患发现率</p>
										<p class="font-orange margin-bottom0 float-right size-14">{{planInspectionCount.troubleRate}}</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section>
						<div class="toolroute font-gray-999 margin-left37">
							<span class="toolroute-rect bg-blue"></span>
							<ul class="padding-left10 clearfix">
								<li>
									<p class="font-gray-666 size-10">Inspection Mission</p>
								</li>
								<li>
									<p class="font-blue size-16">巡检任务
										<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" slot="reference">
					                      <el-tooltip content="全屏" placement="top">
					                          <i class="icon iconfont icon-weibiaoti10 size-14"></i>
					                        </el-tooltip>
					                    </span>
									</p>
								</li>
								<li>
									<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="lineOption" placeholder="请选择" @change="tolineitem">
										<el-option v-for="item in queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
										</el-option>
									</el-select>
									<div class="float-right margin-top5">
										<a class="upd-btn upd-btn-dis" id="lookroute"  @click="lookroute">查看路线</a>
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
												
												<!-- <td>{{item.status}}</td> -->
												<td class="font-red " style="max-width:20px !important;">
													<el-tooltip content="已领取" placement="top">
														<i v-if="item.status==1" class="icon iconfont icon-yilingqu-mian- font-yellow"></i>
													</el-tooltip>
													<el-tooltip content="巡检中" placement="top">
														<i v-if="item.status==2" class="icon iconfont icon-xunjianzhong-mian-1 font-blue"></i>
													</el-tooltip>
													<el-tooltip content="已完成" placement="top">
														<i v-if="item.status==3" class="icon iconfont icon-yiwancheng-mian- font-gray-999"></i>
													</el-tooltip>
													<el-tooltip content="未完成" placement="top">
														<i v-if="item.status==4" class="icon iconfont icon-test font-red"></i>
													</el-tooltip>
												</td>
												<td>
													<el-tooltip placement="top">
														<div slot="content">{{item.finishedTime}}</div>
														<span v-if="item.finishedTime!='' && item.finishedTime != null">{{(""+item.finishedTime).substring(10)}}</span>
														<span v-if="item.finishedTime=='' || item.finishedTime == null">-</span>
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
								</li>
								<li class="upd-pagin">
									<div>
										<el-pagination class="pull-left" small layout="total" :total="tableData.totalRow">
										</el-pagination>
										<span>{{tableData.totalPage}}页</span>
										<el-pagination class="pull-right" small layout="prev, pager, next" :page-size="this.queryPlanUserList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="tableData.currentPage" @current-change="handleCurrentChange">
										</el-pagination>
									</div>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</template>

		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<!-- <right-vue v-bind:planInspectionCount='planInspectionCount'></right-vue> -->
			<template>
				<div class="toolright">
					<!-- 筛选 -->
					<section class="my-filter padding5 bg-gray-222 clearfix">
						
						<!-- 日期筛选 -->
						<div class="col-sm-12 padding0">
							<section>
								<div class="upd-elmdate">
									<el-date-picker v-model="dateValue" size="mini" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="chooseTimeRange">
									</el-date-picker>
								</div>
							</section>
						</div>
					</section>
					<section class="inspection-iteminfo display-none">
						<a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
						<section class="margin-top20">
							<div class="personinfo">
								<p>
									<span class="size-20 font-blue">{{inspectionPlanUser.idCode}}</span>
									<span class="bgbox-min bg-gray-666 font-black size-10">
										{{inspectionPlanUser.type==1?'举报检查':''}}
										{{inspectionPlanUser.type==2?'群众活动':''}}
										{{inspectionPlanUser.type==3?'例行检查':''}}
										{{inspectionPlanUser.type==4?'智能建议的检查':''}}
										{{inspectionPlanUser.type==5?'施工现场检查':''}}
										{{inspectionPlanUser.type==6?'解除临时查封检查':''}}
										{{inspectionPlanUser.type==7?'申请恢复施工使用 生产经营检查':''}}
										{{inspectionPlanUser.type==8?'其他检查':''}}
										</span>
									<span class="float-right">
                      <span class="bgbox-max bg-blue font-black size-10">
                          <i class="fas fa-flag-checkered size-12"></i> {{inspectionPlanUser.status}}</span>
									<!-- <span class="bgbox-max bg-blue font-black size-10">
                          <i class="fas fa-check-circle size-12"></i> 已完成</span> -->
									</span>
								</p>
								<p class="col-sm-7 text-left padding0">
									<span><i class="fas fa-industry"></i> {{inspectionPlanUser.unitName}}</span>
								</p>
								<p class="col-sm-5 text-right padding0">
									领取时间:<strong class="font-gray-999"> {{(""+inspectionPlanUser.receiveTime).substring(10)}}</strong>
								</p>
							</div>
						</section>
						<section>
							<div class="row toolcount margin-top20">
								<div class="col-sm-4 font-gray-999 padding0">
									<ul class="toolcount-left margin-bottom0 padding-left15" id="toolcount">
										<li>
											<h1 class="toolcount-p1 font-yellow">17</h1>
										</li>
										<li class="margin-top30">
											<p class="size-10">Discovery</p>
										</li>
										<li>
											<p class="size-16 font-blue">巡检隐患发现</p>
										</li>
									</ul>
								</div>
								<div class="col-sm-8 font-gray-999 padding-left0 padding-right0 position-relative">
									<div class="toolbuildrate-people text-center position-absolute-right margin-right20">
										<img src="../../assets/images/people.png">
										<br/>
										<template v-if="queryPlanUserDetails.inspectionPlanUser!=null">
											<span class="size-12 display-inline-block">{{queryPlanUserDetails.inspectionPlanUser.userName}}</span>
										</template>
									</div>
									<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
										<li>
											<p class="size-18 font-white">任务统计</p>
										</li>
										<li>
											<p class="size-10 set-scaleright">Task Statistics</p>
										</li>
										<li class="margin-top10">
											<p>开始时间
												<template v-if="queryPlanUserDetails.inspectionPlanUser!=null">
													<strong class="font-gray-ccc">{{queryPlanUserDetails.inspectionPlanUser.startTime}}</strong>
												</template>
											</p>
										</li>
										<!-- <li>
                        <p class="size-12">运行时长 <span class="font-blue">645</span>天</p>
                      </li> -->
										<li class="row text-center padding-right16 margin-top10">
											<div class="col-sm-4 personnel-borderright">
												<p class="size-16 show font-yellow">{{queryPlanUserDetails.totalTrouble}}</p>
												<p>隐患总数</p>
											</div>
											<div class="col-sm-4 personnel-borderright">
												<p class="size-16 show font-blue">{{queryPlanUserDetails.finishNode}}</p>
												<p>完成节点</p>
											</div>
											<div class="col-sm-4">
												<p class="size-16 show font-white">{{queryPlanUserDetails.totalNode}}</p>
												<p>节点总数</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<div class="toolbuildrate margin-top30">
								<h4 class="p-title">任务详情
								</h4>
								<div class="container-padding20 clearfix">
									<div class="panel-group tablist-item position-relative" id="accordion" role="tablist" aria-multiselectable="true">
										<div class="panel panel-default bg-none border-none border-radiusnone ">
											<div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
												<span class="itemtitle-rect"><i class="fas fa-angle-double-down font-black"></i></span>
												<h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {{queryPlanUserDetailsListNode.buildingName}}<span class="badge itemtitle-value display-inline-block margin-left10 bg-red font-gray-333">开始</span> 
                            </a>
                          </h4>
											</div>
											<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
												<div class="panel-body padding0">
													<ul class="size-12 font-gray-999 tablist-itemul">
														<li v-for="item in queryPlanUserDetails.listNode">
															<span>{{item.buildingName}}
															</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<span class="toolbuildrate-forter">
                        <span class="itemtitle-rect"><i class="fas fa-flag-checkered font-black"></i></span>
										<h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              {{queryPlanUserDetailsListNodeend.buildingName}}<span class="badge itemtitle-value display-inline-block margin-left10 bg-orange font-gray-333">结束</span>
                            </a>
							<!-- {{(queryPlanUserDetails.listNode)[(queryPlanUserDetails.listNode).length-1].buildingName}} -->
                          </h4>
										</span>
									</div>
								</div>
							</div>
						</section>
					</section>

					<section class="inspection-lineinfo">
						<section class="row margin-top20 clearfix">
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
							<!-- 已选择单位巡检任务总数 -->
							<div class="col-sm-5 font-white text-right size-12">
								<i class="icon iconfont icon-xunjian-xian- size-14 font-blue"></i> 任务总数<br>
								<span class="size-22 font-blue">{{tableData.totalRow}}</span>
							</div>
						</section>
						<section>
							<div class="toolcount margin-top20">
								<h4 class="p-title">巡检统计</h4>
								<div class="col-sm-7 font-gray-999 padding-right0 size-12">
									<div class="row text-center margin-top30">
										<div class="col-sm-12 text-left margin-bottom20">
											<p>巡检路线 <span class="font-white">{{planInspectionCount.plancount}} </span>&nbsp; 巡检人员 <span class="font-white">{{planInspectionCount.planing}} </span></p>
										</div>
										<div class="col-sm-4 personnel-borderright">
											<p class="size-16 font-white">{{planInspectionCount.amount}}</p>
											<p>次数统计</p>
										</div>
										<div class="col-sm-4 personnel-borderright">
											<p class="size-16 font-blue">{{planInspectionCount.finish}}</p>
											<p>已完成</p>
										</div>
										<div class="col-sm-4">
											<p class="size-16 font-red">{{planInspectionCount.nofinish}}</p>
											<p>未完成</p>
										</div>
									</div>
								</div>
								<div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
									<div id="charCount" style="width: 100%;height:150px;margin: 0 auto;"></div>
								</div>
							</div>
						</section>
						<section>
							<div class="toolcount position-relative">
								<h4 class="p-title">路线巡检任务完成</h4>
								<el-select class="upd-elselect upd-elselect-border upd-widht150 margin-top20 margin-left10" size="mini" v-model="queryInspectionNameListvalueTwo" placeholder="请选择">
									<el-option v-for="item in queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
									</el-option>
								</el-select>

								<div id="charCompletion" style="width: 100%;height:180px;margin: 0 auto;"></div>
								<div class="toolcount-value">
									<template v-if="queryTrendPieGraph">
										<p class="font-gray-999 size-12">额定完成次数:<span class="font-gray-ccc">{{queryTrendPieGraph.amount}}</span>次</p>
									</template>
								</div>
							</div>
						</section>
						<section>
							<div class="toolcount margin-top10">
								<h4 class="p-title">巡检完成率历史趋势
									<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
									<i class="icon iconfont icon-weibiaoti10 size-12"></i>
									</span>
								</h4>
								<div id="charHistoricaltrend" style="width: 100%;height:160px;margin: 0 auto;"></div>
							</div>
						</section>
					</section>

					<section class="inspection-lineitem display-none">

						<section>
							<div class="toolcount margin-top10 margin-top30">
								<h4 class="p-title">路线统计</h4>
								<div class="col-sm-5  font-gray-999 padding-right0 margin-top30">
									<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
										<li>
											<p class="font-blue size-50 ">
												3/30
											</p>
										</li>
										<li>
											<p class="size-10">Running State</p>
										</li>
										<li>
											<p class="size-16 font-blue">任务完成次数</p>
										</li>
									</ul>
								</div>
								<div class="col-sm-7 font-gray-999 padding-left0 padding-right0">
									<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
										<div class="col-sm-7 font-gray-999 padding-left0 padding-right0">
											<div id="charlookline2" style="width: 100%;height:130px;margin: 0 auto;"></div>
										</div>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<div class="toolcount">
								<div class="col-sm-12  font-gray-999 padding-right0">
									<div class="row text-center margin-bottom30">
										<div class="col-sm-4 personnel-borderright">
											<p class="size-16 font-white">12</p>
											<p>隐患发现数</p>
										</div>
										<div class="col-sm-4 personnel-borderright">
											<p class="size-16 font-white">56</p>
											<p>巡检人数</p>
										</div>
										<div class="col-sm-4">
											<p class="size-16 font-white">8</p>
											<p>节点数量</p>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="toolcount">
								<h4 class="p-title">路线信息</h4>
								<div class="row textandimg-main padding-left15 size-12 margin-top20">
									<div class="col-sm-12">
										<span>路线最新激活时间 </span>
										<strong>2018-08-09 08:00:00</strong>
									</div>
									<div class="col-sm-12">
										<span>路线激活人 </span>
										<strong>段亚伟</strong>
									</div>
									<div class="col-sm-12">
										<span>路线删除时间 </span>
										<strong>2018-08-09 09:00:00</strong>
									</div>
									<div class="col-sm-12">
										<span>路线删除人 </span>
										<strong>段亚伟</strong>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="toolcount margin-top20">
								<h4 class="p-title">巡检完成率历史趋势</h4>
								<div id="charlookline" style="width: 100%;height:180px;margin: 0 auto;"></div>
							</div>
						</section>
					</section>
				</div>
			</template>
		</section>
		<!-- #右边 End-->
	</div>
</template>

<script>
	import{mapState} from "vuex";
	import moment from "moment";
	import HeaderVue from "../publick/header.vue";
	// import leftVue from "./left.vue";
	// import rightVue from "./right.vue";
	export default {
		data() {
			return {
				pickerOptions2: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				dateValue: '',
				//巡检统计参数
				planInspectionCount_parameter: {
					unitId:null,
					beginTime:null,
					endTime:null
				},
				//巡检统计参数-返回
				planInspectionCount: {
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
					unitId: null,
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
					unitId: ''
				},
				queryInspectionNameList: Object,
				// 下拉框
				options: [{
						value: "选项1",
						label: "路线名称1"
					},
					{
						value: "选项2",
						label: "路线名称2"
					},
					{
						value: "选项3",
						label: "路线名称3"
					},
					{
						value: "选项4",
						label: "路线名称4"
					},
					{
						value: "选项5",
						label: "路线名称5"
					}
				],
				lineOption: "全部路线",
				queryInspectionNameListvalueTwo: '全部路线',
				lookroutebool: false,
				// 饼状图参数-请求
				queryTrendPieGraph_parameter: {
					unitId: 4,
					planId: 486
				},
				// 饼状图参数-返回
				queryTrendPieGraph: {
					amount: "",
					finishedAmount: ""
				},
				// 曲线图请求数据
				queryTrendMapGraph_parameter: {
					unitId: 4,
					startTime: "2018-06-01",
					endTime: "2018-08-09"
				},
				queryTrendMapGraph: {},
				// 巡检路线详情参数
				queryPlanUserDetails_parameter: {
					id: '92'
				},
				queryPlanUserDetails: Object,
				inspectionPlanUser:Object,
				queryPlanUserDetailsListNode:Object,
				queryPlanUserDetailsListNodeend:Object,
				queryPlanDetails_parameter: {
					inspectionPlanId: 377,
					startTime: null,
					endTime: null
				},
				queryPlanDetails: Object,
				queryUnitBuildList_parameter: {
					unitId: 4
				},
				queryUnitBuildList: Object,
				queryInspectionLineList_parameter: {
					unitId: 4
				},
				queryInspectionLineList: Object,
				queryById_parameter:{
					unitId:null
				},
				queryById:Object
			};
		},
		computed:mapState([
			'unitid'
		]),
		watch:{
			unitid(){
				// //console.log(this.queryAlarmData_parmar.unitId)
				if(this.unitid!=0){
					this.getunitid=this.unitid;
				}else{
					this.getunitid=null;
				}
				this.queryById_parameter.unitId=this.getunitid;
				this.queryByIds();
			}
		},
		components: {
			"header-vue": HeaderVue,
			// "left-vue": leftVue,
			// "right-vue": rightVue
		},
		methods: {
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
			chooseTimeRange(t) {
				this.dateValue = t;
				var st = moment(this.dateValue[0]).format('YYYY-MM-DD');
				var et = moment(this.dateValue[1]).format('YYYY-MM-DD');
				this.queryTrendMapGraph_parameter.startTime = st;
				this.queryTrendMapGraph_parameter.endTime = et;
				// this.queryPlanDetails_parameter.startTime = st;
				// this.queryPlanDetails_parameter.endTime = et;
				this.getData();
			},
			defaultTimeVaule() {
				var startDate = this.getNowFormatDate();
				this.queryTrendMapGraph_parameter.startTime = startDate;
				this.queryTrendMapGraph_parameter.endTime = startDate;
				// this.queryPlanDetails_parameter.startTime = startDate;
				// this.queryPlanDetails_parameter.endTime = startDate;
				this.dateValue = [startDate,startDate];
			},
			//获取当前时间：
			getNowFormatDate(){
				var date = new Date();
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
				// 请求巡检统计
				this.$fetch("/api/inspection/planInspectionCount",this.planInspectionCount_parameter).then(response => {
					if(response.data) {
						let data = response.data;
						this.planInspectionCount.finish = data.planInstanceCount.finish;
						this.planInspectionCount.nofinish =
							data.planInstanceCount.nofinish;
						this.planInspectionCount.amount = data.planInstanceCount.amount;
						this.planInspectionCount.plancount =
							data.planInstanceCount.plancount;
						this.planInspectionCount.planing = data.instanceIngCount.planing;
						this.planInspectionCount.weekRate = data.instanceByDay.weekRate;
						this.planInspectionCount.monthRate = data.instanceByDay.monthRate;
						this.planInspectionCount.dayRate = data.instanceByDay.dayRate;
						this.planInspectionCount.historyRate =
							data.instanceByDay.historyRate;
						this.planInspectionCount.plansum = data.instanceIngCount.plansum;
						this.planInspectionCount.troubleRate =
							data.instanceByDay.troubleRate;
						this.draw_piemin("charCount", this.planInspectionCount);
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
							//console.log(data);
							this.queryInspectionNameList = data.listInspectionName;
							this.queryInspectionNameList.unshift({
								id: 0,
								name: '全部路线'
							})
						}
					})
					.then(err => {
						//console.log(err);
					});
				// 请求饼状图
				this.$fetch(
						"/api/inspection/queryTrendPieGraph",
						this.queryTrendPieGraph_parameter
					)
					.then(response => {
						if(response) {
							let data = response.data;
							if(data.result[0]) {
								this.queryTrendPieGraph.amount = data.result[0].amount;
								this.queryTrendPieGraph.finishedAmount = data.result[0].finishedAmount;
							}
							if(this.queryTrendPieGraph) {
								this.draw_piemax(
									"charCompletion",
									this.queryTrendPieGraph
								);
							}
						}
					})
					.then(err => {
						//console.log(err);
					});

				// 请求历史曲线图
				this.$fetch(
						"/api/inspection/queryTrendMapGraph",
						this.queryTrendMapGraph_parameter
					)
					.then(response => {
						if(response) {
							let data = response.data.result.dateMap;
							let a = [],
								b = [];
							for(var value in data) {
								a.push(value);
								b.push(data[value]);
							}
							this.draw_line(
								"charHistoricaltrend", response.data.result.dateMap
							);
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			handleCurrentChange(val) {
				//console.log(`当前页:` + val);
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
						//console.log(err);
					});
			},
			toitmeinfo(data) {
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
							this.queryPlanUserDetails = response.data;
							this.inspectionPlanUser=this.queryPlanUserDetails.inspectionPlanUser;
							//console.log(this.queryPlanUserDetails);
							this.queryPlanUserDetailsListNode=response.data.listNode[0];
							this.queryPlanUserDetailsListNodeend=response.data.listNode[(response.data.listNode).length-1];
						}
					})
					.then(err => {
						//console.log(err);
					});

			},
			lookroute(data) {
				//console.log(this.lookroutebool);
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
					查看路线详情
					this.$fetch(
					  "api/inspection/queryPlanDetails",
					  this.queryPlanDetails_parameter
					)
					  .then(response => {
					    if (response) {
					      this.queryPlanDetails= response.data;
					      //console.log(this.queryPlanDetails);
					      // draw_piemin()

					      // let data = response.data.result.dateMap;
					      // let a=[],b=[];
					      // for (var value in data) {
					      //   a.push(value);
					      //   b.push(data[value]);
					      // }
					      // this.draw_line(
					      //   "charlookline",response.data.planDetails.planMap
					      // );
					    }
					  })
					  .then(err => {
					    //console.log(err);
					  });
					this.getceshi();
				}

			},
			jianzhu() {
				$(".inspection-lineinfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".inspection-iteminfo")
					.addClass("display-none")
					.removeClass("display-block");
				$(".inspection-lineitem")
					.addClass("display-none")
					.removeClass("display-block");
			},
			tolineitem() {
				this.lookroutebool = true;
				$('#lookroute').removeClass('upd-btn-dis');
				this.queryPlanUserList_parameter.inspectionName = this.lineOption;
				// //console.log(data.name)
				this.getTable();
			},
			draw_piemin(id, data) {
				let value;
				let name;
				if(data.amount == 0) {
					value = 100;
					name = '暂无统计'
				} else {
					value = data.finish / data.amount * 100;
					name = "区域巡检完成率 " + value.toFixed(2) + "%";
				}

				//console.log();
				let d = [{
					value: value,
					name: name
				}];
				var char = {
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
						name: "说明:",
						type: "pie",
						// selectedMode: "single",
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
						data: d
					}]
				};
				let chars = this.$echarts.init(document.getElementById(id));
				chars.setOption(char);
			},
			draw_piemax(id, data) {
				// //console.log(this.queryTrendPieGraph);
				var fin_per = data.finishedAmount / data.amount * 100;
				//console.log();
				let d = [{
						value: data.finishedAmount,
						name: "完成率 " + fin_per.toFixed(2) + "%"
					},
					{
						value: data.amount - data.finishedAmount,
						name: "未完成",
						labelLine: {
							normal: {
								show: false
							}
						},
						label: {
							normal: {
								position: "inner",
								show: false
							}
						}
					}
				];
				var char = {
					tooltip: {
						trigger: "item",
						// formatter: "{a} <br/>{b} {c}次"
						formatter: function(data) {
							var name = "";
							if(data.name.substring(0, 3) == "完成率") {
								name = "已完成";
							} else {
								name = data.name;
							}
							return name + ":" + data.value + "次";
						}
					},
					series: [{
						name: "说明:",
						type: "pie",
						radius: [0, "70%"],
						color: ["#bad616", "#333"],
						data: d
					}]
				};
				let chars = this.$echarts.init(document.getElementById(id));
				chars.setOption(char);
			},
			draw_line(id, data) {
				// 巡检完成率历史趋势曲线图
				// let data = response.data.result.dateMap;
				let a = [],
					b = [];
				for(var value in data) {
					a.push(value);
					b.push(data[value]);
				}
				var char = {
					xAxis: {
						type: "category",
						boundaryGap: false,
						data: a,
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
						type: "line",
						symbol: "none",
						smooth: true,
						color: {
							colorStops: [{
								offset: 0,
								color: "#999"
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
				let charf = this.$echarts.init(document.getElementById(id));
				charf.setOption(char);
			},
			getmap_queryUnitBuildList() {
				// 请求路线列表
				this.$fetch(
						"/api/building/queryUnitBuildList",
						this.queryUnitBuildList_parameter
					)
					.then(response => {
						if(response) {
							this.queryUnitBuildList = response.data;
							this.$store.commit('queryUnitBuildList', this.queryUnitBuildList);
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			getmap_queryInspectionLineList() {
				// 请求路线列表
				this.$fetch(
						"/api/inspection/queryInspectionLineList",
						this.queryInspectionLineList_parameter
					)
					.then(response => {
						if(response) {
							this.queryInspectionLineList = response.data;
							this.$store.commit('queryInspectionLineList', this.queryInspectionLineList);
						}
					})
					.then(err => {
						//console.log(err);
					});
			},

			// 锁定/关闭
			goBack() {
				$(".icon-suo-guan-mian-,.icon-guanbi-mian-").toggleClass("active");
			},
			getceshi() {
				var pie = {
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					series: [{
						name: "访问来源",
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
								value: 335,
								name: "50%",
								selected: true
							},
							{
								value: 679,
								name: ""
							}
						]
					}]
				};
				let mypie1 = this.$echarts.init(document.getElementById("charlookline"));
				mypie1.setOption(pie);
				let mypie2 = this.$echarts.init(document.getElementById("charlookline2"));
				mypie2.setOption(pie)
			}

		},
		mounted() {
			if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
				this.queryById_parameter.unitId=sessionStorage.unitid;
			}
			if(sessionStorage.unitid==0){
				this.queryById_parameter.unitId=null;
			}
			this.queryByIds();
			this.$store.commit('route_path', this.$route.path);
			this.defaultTimeVaule();
			this.getData();
			this.getTable();
			this.getmap_queryUnitBuildList();
			this.getmap_queryInspectionLineList();
		}
	};
</script>

<style scoped>
	.row {
		position: relative;
		z-index: 22;
	}

	.padding-right16 {
		padding-right: 16px;
	}
</style>
