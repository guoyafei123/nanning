<template>
	<div class="toolright">
		<!-- 筛选 -->
		<section class="my-filter padding5 bg-gray-222 clearfix">
			<!-- 单位筛选 -->
			<div class="col-sm-3 padding0">
				<el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="ins_queryInspectionNameListvalueTwo" placeholder="瑞和家园">
					<el-option v-for="item in ins_queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
					</el-option>
				</el-select>
			</div>
			<!-- 日期筛选 -->
			<div class="col-sm-9 padding0">
				<section>
					<div class="upd-elmdate">
						<el-date-picker v-model="value7" size="mini" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
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
						<span class="size-20 font-blue">巡检单号</span>
						<span class="bgbox-min bg-gray-666 font-black size-10">巡检类型</span>
						<span class="float-right">
                      <span class="bgbox-max bg-blue font-black size-10">
                          <i class="fas fa-flag-checkered size-12"></i> 已领取</span>
						<span class="bgbox-max bg-blue font-black size-10">
                          <i class="fas fa-check-circle size-12"></i> 已完成</span>
						</span>
					</p>
					<p class="col-sm-7 text-left padding0">
						<span><i class="fas fa-industry"></i> 中心小学</span>
					</p>
					<p class="col-sm-5 text-right padding0">
						最新更新:<strong class="font-gray-999">2018-16:23 13:56:37</strong>
					</p>
				</div>
			</section>
			<section>
				<div class="row toolcount margin-top20">
					<div class="col-sm-4 font-gray-999 padding0">
						<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
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
							<img src="../assets/images/people.png">
							<br/>
							<template v-if="ins_queryPlanUserDetails.inspectionPlanUser!=null">
								<span class="size-12 display-inline-block">{{ins_queryPlanUserDetails.inspectionPlanUser.userName}}</span>
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
									<template v-if="ins_queryPlanUserDetails.inspectionPlanUser!=null">
										<strong class="font-gray-ccc">{{ins_queryPlanUserDetails.inspectionPlanUser.startTime}}</strong>
									</template>
								</p>
							</li>
							<li class="row text-center padding-right16 margin-top10">
								<div class="col-sm-4 personnel-borderright">
									<p class="size-16 show font-yellow">{{ins_queryPlanUserDetails.totalTrouble}}</p>
									<p>隐患总数</p>
								</div>
								<div class="col-sm-4 personnel-borderright">
									<p class="size-16 show font-blue">{{ins_queryPlanUserDetails.finishNode}}</p>
									<p>完成节点</p>
								</div>
								<div class="col-sm-4">
									<p class="size-16 show font-white">{{ins_queryPlanUserDetails.totalNode}}</p>
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
                    <a class="float-right toolroute-padding8 popup-routebtn">
                      <i class="icon iconfont icon-xunjian-mian- font-blue"></i> <span class="size-12 font-gray-ccc">第一季度控烟检查</span>
                    </a>
                  </h4>
					<div class="container-padding20 clearfix">
						<div class="panel-group tablist-item position-relative" id="accordion" role="tablist" aria-multiselectable="true">
							<div class="panel panel-default bg-none border-none border-radiusnone ">
								<div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
									<span class="itemtitle-rect"><i class="fas fa-angle-double-down font-black"></i></span>
									<h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              -<span class="badge itemtitle-value display-inline-block margin-left10 bg-red font-black">1.6</span>
                            </a>
                          </h4>
								</div>
								<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									<div class="panel-body padding0">
										<ul class="size-12 font-gray-999 tablist-itemul">
											<li v-for="item in ins_queryPlanUserDetails.listNode">
												<span>{{item.buildingName}} 
                                  <span class="float-right">
                                    <i class="icon iconfont icon-yinhuan-xian- font-yellow size-14 text-left"></i>
                                    <span class="font-blue">{{item.inspectionPlanUserId}} </span>/<span class="font-yellow">{{item.buildingId}}</span>
												</span>
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
                              -<span class="badge itemtitle-value display-inline-block margin-left10 bg-orange font-black">1.6</span>
                            </a>
                          </h4>
							</span>
						</div>
					</div>
				</div>
			</section>
			<div class="table-responsive">
				<h4 class="p-title">任务日志</h4>
				<table class="table size-12 table-condensed toolroute-table margin-top10">
					<thead>
						<tr>
							<th>序号</th>
							<th>操作时间</th>
							<th>巡检员</th>
							<th>动作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>2018-09-23 08:26:36</td>
							<td>段亚伟</td>
							<td>
								<span class="font-blue">任务完成</span>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>2018-09-23 08:26:36</td>
							<td>段亚伟</td>
							<td>
								<span>正常打卡</span>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>2018-09-23 08:26:36</td>
							<td>段亚伟</td>
							<td>
								<span>正常打卡</span>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>2018-09-23 08:26:36</td>
							<td>段亚伟</td>
							<td>
								<span class="font-yellow" data-toggle="tooltip" title="二维码损坏">非正常打卡<i class="fas fa-exclamation-circle"></i></span>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td>2018-09-23 08:26:36</td>
							<td>段亚伟</td>
							<td>
								<span class="font-yellow" data-toggle="tooltip" title="二维码丢失">非正常打卡<i class="fas fa-exclamation-circle"></i></span>
							</td>
						</tr>
						<tr>
							<td>6</td>
							<td>2018-09-23 08:26:36</td>
							<td>段亚伟</td>
							<td>
								<span class="font-white">任务开始</span>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td><span class="font-white">导出</span></td>
							<td><span class="font-white">打印</span></td>
							<td colspan="3" align="right">分页</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>

		<section class="inspection-lineinfo">
			<section class="row margin-top20 clearfix">
				<!-- 已选择单位 -->
				<div class="col-sm-7">
					<div class="personinfo">
						<p>
							<span class="size-20 font-blue">中心小学</span>
							<span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
						</p>
						<p class="text-left padding0">
							<span><i class="fas fa-industry"></i> 中心小学</span>
						</p>
					</div>
				</div>
				<!-- 已选择单位巡检任务总数 -->
				<div class="col-sm-5 font-white text-right size-12">
					<i class="icon iconfont icon-xunjian-xian- size-14 font-blue"></i> 任务总数<br>
					<span class="size-22 font-blue">1746</span>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top20 clearfix">
					<h4 class="p-title">巡检统计</h4>
					<div class="col-sm-7 font-gray-999 padding-right0 size-12">
						<div class="row text-center margin-top30">
							<div class="col-sm-12 text-left margin-bottom20">
								<p>巡检路线 <span class="font-white">{{ins_planInspectionCount.plancount}} </span>&nbsp; 巡检人员 <span class="font-white">{{ins_planInspectionCount.planing}} </span></p>
							</div>
							<div class="col-sm-4 personnel-borderright">
								<p class="size-16 font-white">{{ins_planInspectionCount.amount}}</p>
								<p>次数统计</p>
							</div>
							<div class="col-sm-4 personnel-borderright">
								<p class="size-16 font-blue">{{ins_planInspectionCount.finish}}</p>
								<p>已完成</p>
							</div>
							<div class="col-sm-4">
								<p class="size-16 font-red">{{ins_planInspectionCount.nofinish}}</p>
								<p>未完成</p>
							</div>
						</div>
					</div>
					<div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
						<div id="ins_charCount" style="width: 100%;height:100px;margin: 0 auto;"></div>
					</div>
				</div>
			</section>
			<section>
				<div class="toolcount clearfix">
					<h4 class="p-title">路线巡检任务完成</h4>
					<el-select class="upd-elselect upd-elselect-border upd-widht150 margin-top20 margin-left10" size="mini" v-model="ins_queryInspectionNameListvalueTwo" placeholder="请选择">
						<el-option v-for="item in ins_queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
						</el-option>
					</el-select>

					<div id="ins_charCompletion" style="width: 100%;height:200px;margin: 0 auto;"></div>
					<div class="toolcount-value">
						<template v-if="ins_queryTrendPieGraph">
							<p class="font-gray-999 size-12">额定完成次数:<span class="font-gray-ccc">{{ins_queryTrendPieGraph.amount}}</span>次</p>
						</template>
					</div>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top10 clearfix">
					<h4 class="p-title">巡检完成率历史趋势
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </h4>
					<div id="ins_charHistoricaltrend" style="width: 100%;height:180px;margin: 0 auto;"></div>
				</div>
			</section>
		</section>

		<section class="inspection-lineitem display-none">
			<section>
				<div class="row toolcount margin-top0">
					<div class="col-sm-4  font-gray-999 padding-right0">
						<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
							<li>
								<p class="font-blue size-50">
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
					<div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
						<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
							<div class="col-sm-7 font-gray-999 padding-left0 padding-right0">
								<div id="ins_charlookline2" style="width: 100%;height:150px;margin: 0 auto;"></div>
							</div>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div class="toolcount">
					<div class="col-sm-12  font-gray-999 padding-right0">
						<div class="row text-center">
							<!-- <template v-if="ins_queryPlanDetails.planDetails"> -->
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
							<!-- </template> -->
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="textandimg row">
					<h4 class="p-title">路线信息</h4>
					<div class="row textandimg-main padding-left15 size-12">
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
						<!-- </template> -->
					</div>
				</div>
			</section>
			<section>
				<div class="toolbuildrate padding-left10">
					<h4 class="p-title"></h4>
					<template v-if="ins_queryPlanDetails.nodeList">
						<div class="panel-group tablist-item" id="accordion" role="tablist" aria-multiselectable="true">
							<div class="panel panel-default bg-none border-none border-radiusnone">
								<div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
									<span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
									<h4 class="panel-title">
                              <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{ins_queryPlanDetails.nodeList[0].buildingName}}<span class="itemtitle-value display-inline-block margin-left10 bg-red font-black">{{ins_queryPlanDetails.nodeList[0].type}}</span>
                              </a>
                            </h4>
								</div>
							</div>
							<span class="toolbuildrate-forter">
                          <h4 class="panel-title">
                              <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{ins_queryPlanDetails.nodeList[0].buildingName}}<span class="itemtitle-value display-inline-block margin-left10 bg-red font-black">{{ins_queryPlanDetails.nodeList[0].type}}</span>
							</a>
							</h4>
							</span>
						</div>
					</template>
				</div>
			</section>
			<section>
				<div class="toolcount margin-top10">
					<h4 class="p-title">巡检完成率历史趋势</h4>
					<div id="ins_charlookline" style="width: 100%;height:180px;margin: 0 auto;"></div>
				</div>
			</section>
		</section>
	</div>
</template>