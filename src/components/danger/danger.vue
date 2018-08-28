<template>
	<div class="row" id="danger">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<template>
				<div class="toolleft margin-right0">
					<section>
						<div class="toolcount">
							<div class="set-width-50 font-gray-999 padding-right0 size-12">
								<ul class="toolcount-left margin-bottom0 padding-right10 padding-left0" id="toolcount">
									<li>
										<h1 class="toolcount-p1 font-yellow">{{queryTroubleStats.countTroubleSum ? queryTroubleStats.countTroubleSum:'0'}}</h1>
									</li>
									<li>
										<p class="size-10">Dangers Number</p>
									</li>
									<li class="margin-bottom10">
										<p class="size-18 font-blue">当前隐患数</p>
									</li>
									<li>
										<p>今日隐患发现数</p>
										<p class="font-yellow float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.countTrouble ? queryTroubleStats.countTrouble:'0'}}
										</p>
									</li>
									<li>
										<p>今日隐患解决数</p>
										<p class="font-blue float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.solveTrouble ? queryTroubleStats.solveTrouble:'0'}}
										</p>
									</li>
									<li>
										<p>室内隐患数</p>
										<p class="font-gray-ccc float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.outdoorTrouble ?queryTroubleStats.outdoorTrouble:'0'}}
										</p>
									</li>
									<li>
										<p>室外隐患数</p>
										<p class="font-gray-ccc float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.indoorTrouble ? queryTroubleStats.indoorTrouble:'0'}}
										</p>
									</li>
								</ul>
							</div>
							<div class="set-width-50 display-inline-block font-gray-999 toolcount-right size-12">
								<ul class="padding-left0 margin-bottom0">
									<li>
										<h1 class="toolcount-p1 font-red">{{queryTroubleStats.countDangerTroubleSum ? queryTroubleStats.countDangerTroubleSum:'0'}}</h1>
									</li>
									<li>
										<p class="size-10">Current Dangerous</p>
									</li>
									<li class="margin-bottom10">
										<p class="size-18 font-blue">当前危险品数</p>
									</li>
									<li>
										<p>今日危险品新增</p>
										<p class="font-yellow float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.countDangerousGoods ? queryTroubleStats.countDangerousGoods:'0'}}

										</p>
									</li>
									<li>
										<p>今日危险品处理</p>
										<p class="font-blue float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.solveDangerousGoods ? queryTroubleStats.solveDangerousGoods:'0'}}
										</p>
									</li>
									<li>
										<p>室内危险品数</p>
										<p class="font-gray-ccc float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.indoorDangerousGoods ? queryTroubleStats.indoorDangerousGoods:'0'}}
										</p>
									</li>
									<li>
										<p>室外危险品数</p>
										<p class="font-gray-ccc float-right size-14" v-if='queryTroubleStats'>
											{{queryTroubleStats.outdoorDangerousGoods ? queryTroubleStats.outdoorDangerousGoods:'0'}}
										</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section>
						<div class="toolroute font-gray-ccc margin-left37">
							<span class="toolroute-rect bg-blue"></span>
							<ul class="padding-left10">
								<li>
									<p class="font-gray-666 size-10">Dangers Info</p>
								</li>
								<li>
									<p class="font-blue size-16">隐患信息
										<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" slot="reference">
					                      <el-tooltip content="全屏" placement="top">
					                          <i class="icon iconfont icon-weibiaoti10 size-14"></i>
					                        </el-tooltip>
					                    </span>
									</p>
								</li>
								<li>
									<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="queryInspectionNameListvalue" placeholder="请选择" @change="tolineitem">
										<el-option v-for="item in queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
										</el-option>
									</el-select>
									<!-- <div class="float-right">
                      <a class="upd-btn">展开表单</a>
                    </div> -->
								</li>
								<li>
									<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
										<thead>
											<tr>
												<!-- <th >序号</th> -->
												<th>隐患源</th>
												<th>类型</th>
												<th>发现时间</th>
												<th>状态</th>
												<th>查看</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
												<!-- <td>{{(troubleList_parameter.currentPage-1)*troubleList_parameter.pageSize+index+1}}</td> -->
												<td>{{item.nickName}}</td>
												<td class="font-yellow">
													<el-tooltip content="损坏" placement="top">
													<i v-if="item.type==1" class="icon iconfont icon-sunhuai-xian-"></i>
													</el-tooltip>
													<el-tooltip content="人为风险" placement="top">
													<i v-if="item.type==2" class="icon iconfont icon-weiyinsuyinhuan-xian-"></i>
													</el-tooltip>
													<el-tooltip content="非人为风险" placement="top">
													<i v-if="item.type==3" class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"></i>
													</el-tooltip>
													<el-tooltip content="缺失" placement="top">
													<i v-if="item.type==4" class="icon iconfont icon-queshi-xian-"></i>
													</el-tooltip>
													<el-tooltip content="危险品" placement="top">
													<i v-if="item.type==5" class="icon iconfont icon-weixianpin-xian-"></i>
													</el-tooltip>
												</td>
												<td>
													<el-tooltip placement="top">
														<div slot="content">{{item.createTime}}</div>
														<span>{{(item.createTime).substring(10)}}</span>
													</el-tooltip>
												</td>
												<td>
													<el-tooltip content="已解决" placement="top">
														<i v-if="item.status==1" class="icon iconfont icon-yijiejue-xian- font-blue"></i>
													</el-tooltip>
													<el-tooltip content="未解决" placement="top">
														<i v-if="item.status==0" class="icon iconfont icon-yinhuan-xian- font-yellow"></i>
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
										<span>{{Math.ceil(tableData.totalRow/this.troubleList_parameter.pageSize)}}页</span>
										<el-pagination class="pull-right"  small layout="prev, pager, next" :page-size="this.troubleList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.troubleList_parameter.currentPage" @current-change="handleCurrentChange">
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
			<template>
					<div class="toolright">
						<!-- 筛选 -->
						<section class="my-filter padding5 bg-gray-222 clearfix">
							<div class="col-sm-12 padding0">
								<div class="upd-elmdate">
									<el-date-picker v-model="dateValue" size="mini" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="chooseTimeRange">
									</el-date-picker>
								</div>
							</div>
						</section>
						<!-- 统计 -->
						<section class="dan-lineinfo">
							<section class="row margin-top20 clearfix">
								<!-- 已选择单位 -->
								<div class="col-sm-7">
									<div class="personinfo">
										<p>
											<span class="size-20 font-blue">{{queryById.name !='Object' ?queryById.name:'全部单位'}}</span>
										</p>
										<p>
											<span><i class="el-icon-location"></i> {{queryById.location?queryById.location:'-'}}</span>
										</p>
									</div>
								</div>
								<!-- 已选择单位巡检任务总数 -->
								<div class="col-sm-5 font-white text-right size-12">
									<i class="icon iconfont icon-xunjian-xian- size-14 font-yellow"></i> 隐患总数<br>
									<span class="size-22 font-yellow">{{troubleCount ? troubleCount.troubleAll:'0'}}</span>
								</div>
						</section>
							<section>
								<div class="toolcount clearfix margin-top20">
									<h4 class="p-title">隐患统计</h4>
									<div class="col-sm-8 font-gray-999 padding-right0 text-center margin-top20 size-12">
										<div class="row">
											<div class="col-sm-12 margin-bottom20 text-left">
												<div class="row">
												<p class="col-xs-5 padding-left20">危险品 总数 <span class="font-yellow">{{dangerCount ? dangerCount.dangerAll:'0'}}</span></p>
												<p class="col-xs-3">新增 <span class="font-white">{{dangerCount ? dangerCount.dangerNew:'0'}}</span></p>
												<p class="col-xs-3">处理 <span class="font-blue">{{dangerCount ? dangerCount.dangerResolved:'0'}}</span></p>
												</div>
											</div>
											<div class="col-sm-4 personnel-borderright">
												<p class="size-16 font-yellow">
													<!-- {{troubleCount.troubleRatio.allCount}} -->
													{{troubleCount ? troubleCount.troubleAll:'0'}}
												</p>
												<p>隐患总数</p>
											</div>
											<div class="col-sm-4 personnel-borderright">
												<p class="size-16 font-white">
													<!-- {{troubleCount.troubleCount.findCount}} -->
													{{troubleCount ? troubleCount.findCount:'0'}}
												</p>
												<p>隐患发现</p>
											</div>
											<div class="col-sm-4">
												<p class="size-16 font-blue">
													<!-- {{troubleCount.troubleCount.decideCount}} -->
													{{troubleCount ? troubleCount.decideCount:'0'}}
												</p>
												<p>隐患解决</p>
											</div>
										</div>
									</div>
									<div class="col-sm-4 font-gray-999 text-right size-12">
										<div id="dan_charpiemin" style="width: 100%;height:110px;text-align: right;"></div>
									</div>
								</div>
							</section>
							<section>
								<div class="toolcount clearfix margin-top20">
									<h4 class="p-title">各类型隐患占比</h4>
									<div id="dan_charpiemax" style="width: 100%;height:200px;margin: 0 auto;text-align: center;"></div>
								</div>
							</section>
							<section>
								<div class="toolcount clearfix margin-top20">
									<h4 class="p-title">隐患历史趋势
			                            <span class="pull-right indexdateabox alarmdate">
											<b class="indexdateactive">日</b>
											<b>月</b>
											<b>年</b>
										</span>
			                        </h4>
									<div id="dan_charline" style="width: 100%;height:160px;margin: 0 auto;"></div>
								</div>
							</section>
						</section>
						<section class="dan-iteminfo display-none overflow-scr">
							<a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
							<section class="row margin-top20 clearfix">
								<!-- 隐患名称 -->
								<div class="col-sm-12">
									<div class="personinfo">
										<p>
											<span class="size-20 font-yellow" v-if="troubleDetail.status == 0">
												{{troubleDetail.nickName}}上报的隐患
											</span>
											<span class="size-20 font-blue" v-if="troubleDetail.status == 1">
												{{troubleDetail.nickName}}上报的隐患
											</span>
											<!-- 类型 -->
											<span class="pull-right bgbox-max bg-yellow font-black size-10">
												<strong v-if="troubleDetail.type==1" ><i class="icon iconfont icon-sunhuai-mian- size-14"></i> 损坏</strong>
												<strong v-if="troubleDetail.type==2" ><i class="icon iconfont icon-feirenweiyinsuyinhuan-mian- size-14"></i> 人为风险</strong>
												<strong v-if="troubleDetail.type==3" ><i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-1 size-14"></i> 非人为风险</strong>
												<strong v-if="troubleDetail.type==4" ><i class="icon iconfont icon-queshi-mian- size-14"></i> 缺失</strong>
												<strong v-if="troubleDetail.type==5"><i class="icon iconfont icon-weixianpin-mian- size-14"></i> 危险品</strong>
											</span>
										</p>
										<p class="text-left padding0">
											<span><i class="fas el-icon-location"></i> {{troubleDetail.unitName}}<strong v-if="troubleDetail.buildingName == '室外'"> 室外</strong>
                      						<strong v-else><span v-if="troubleDetail.buildingName != '' && troubleDetail.buildingName != null">{{ troubleDetail.buildingName }} 建筑</span><span v-if="troubleDetail.floorNumber != '' && troubleDetail.floorNumber != null">{{ troubleDetail.floorNumber }} 楼层</span><span v-if="troubleDetail.roomNumber != '' && troubleDetail.roomNumber != null">{{ troubleDetail.roomNumber }} 房间</span></strong></span>
										</p>
									</div>
								</div>
						</section>
							<!-- 隐患统计 -->
					      <section>
					          <div class="toolcount margin-top20 font-gray-999 clearfix">
					              <div class="col-md-5 padding0">
					                  <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
					                      <li>
					                          <h1 class="toolcount-p1 cn-status">
					                            <span class="font-yellow" v-if="troubleDetail.status == 0">未解决</span>
					                            <span class="font-blue" v-if="troubleDetail.status == 1">已解决</span>
					                          </h1>
					                      </li>
					                      <li class="margin-top40">
					                          <p class="size-10 ">Dangers Status</p>
					                      </li>
					                      <li>
					                          <p class="size-16 font-blue">隐患状态</p>
					                      </li>
					                  </ul>
					              </div>
					              <div class="col-md-7 padding0">
					                  <ul class="row toolcount-right margin-bottom0 size-12">
					                      <li>
					                          <p class="size-18 font-white">信息概览</p>
					                      </li>
					                      <li class="margin-bottom5">
					                          <p class="size-10 set-scaleright">Dangerous info</p>
					                      </li>
					                      <li class="margin-top10">
					                          <p><i class="el-icon-location"></i>
					                            <span>
					                              <strong v-if="troubleDetail.buildingName == '室外'">室外</strong>
					                              <strong v-else><span v-if="troubleDetail.buildingName != '' && troubleDetail.buildingName != null">{{ troubleDetail.buildingName }} 建筑</span><span v-if="troubleDetail.floorNumber != '' && troubleDetail.floorNumber != null">{{ troubleDetail.floorNumber }} 楼层</span><span v-if="troubleDetail.roomNumber != '' && troubleDetail.roomNumber != null">{{ troubleDetail.roomNumber }} 房间</span></strong>
					                            </span>
					                          </p>
					                      </li>
					                      <li class="text-left padding-right16 margin-top15">
					                          <div class="col-sm-4 personnel-borderright" v-if="troubleDetail.status == 0">
					                              <p class="size-16 show font-yellow">{{troubleDetail.nickName}}</p>
					                              <p>上报人</p>
					                          </div>
					                          <div class="col-sm-4 personnel-borderright" v-if="troubleDetail.status == 1">
					                              <p class="size-16 show font-blue">{{troubleDetail.reviewerName}}</p>
					                              <p>解决人</p>
					                          </div>
					                          <div class="col-sm-8" v-if="troubleDetail.status == 0">
					                              <p class="size-12 show font-white">{{troubleDetail.createTime}}</p>
					                              <p>上报时间</p>
					                          </div>
					                          <div class="col-sm-8" v-if="troubleDetail.status == 1">
					                              <p class="size-12 show font-white">{{ troubleDetail.reviewTime}}</p>
					                              <p>解决时间</p>
					                          </div>
					                      </li>
					                  </ul>
					              </div>
					          </div>
					      </section>
					      <!-- 隐患详情 -->
							<section class="alarm-info">
								<div class="textandimg margin-top30 imgs-nthof-block">
									<h4 class="p-title">隐患信息</h4>
									<div class="row textandimg-main margin-top10 size-12">
										<div class="col-sm-12">
						                      <span>隐患源</span>
						                      <strong v-html="troubleDetail.nickName"></strong>
						                  </div>
						                  <div class="col-sm-12">
						                      <span>所属单位</span>
						                      <strong>{{troubleDetail.unitName}}</strong>
						                  </div>
										<div class="col-sm-6">
											<span>隐患类型 </span>
											<strong v-if="troubleDetail.type==1" ><i class="icon iconfont icon-sunhuai-mian- size-14"></i> 损坏</strong>
											<strong v-if="troubleDetail.type==2" ><i class="icon iconfont icon-feirenweiyinsuyinhuan-mian- size-14"></i> 人为风险</strong>
											<strong v-if="troubleDetail.type==3" ><i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-1 size-14"></i> 非人为风险</strong>
											<strong v-if="troubleDetail.type==4" ><i class="icon iconfont icon-queshi-mian- size-14"></i> 缺失</strong>
											<strong v-if="troubleDetail.type==5"><i class="icon iconfont icon-weixianpin-mian- size-14"></i> 危险品</strong>
										</div>
										<div class="col-sm-6">
						                      <span>隐患状态</span>
						                      <strong class="font-yellow" v-if="troubleDetail.status == 0">未解决</strong>
						                      <strong class="font-blue" v-if="troubleDetail.status == 1">已解决</strong>
						                  </div>
										<div class="col-sm-12">
											<span>隐患地点 </span>
											<strong v-if="troubleDetail.buildingName == '室外'">室外</strong>
                      						<strong v-else><span v-if="troubleDetail.buildingName != '' && troubleDetail.buildingName != null">{{ troubleDetail.buildingName }} 建筑</span><span v-if="troubleDetail.floorNumber != '' && troubleDetail.floorNumber != null">{{ troubleDetail.floorNumber }} 楼层</span><span v-if="troubleDetail.roomNumber != '' && troubleDetail.roomNumber != null">{{ troubleDetail.roomNumber }} 房间</span></strong>
										</div>
										<!-- <div class="col-sm-12">
					                      <span>坐标 </span>
					                      <strong v-html="troubleDetail.pointX"></strong>
					                      <strong v-html="troubleDetail.pointY"></strong>
					                  </div> -->
										<div class="col-sm-12">
											<span>上报人 </span>
											<strong>{{troubleDetail.nickName}}</strong>
										</div>
										<div class="col-sm-12">
											<span>上报时间 </span>
											<strong>{{troubleDetail.createTime}}</strong>
										</div>
										<div class="col-sm-12">
											<span>隐患描述 </span>
											<strong>{{troubleDetail.cont}}</strong>
										</div>
										<div class="textandimg-img imgs-nthof">
											<template v-for="item in troubleDetail.imgUrl">
												<div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
													<video :src="item" width="100%" controls="controls"></video>
												</div>
											</template>
											<template v-for="item in troubleDetail.imgUrl">
												<div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
													<img :src="item">
												</div>
											</template>
										</div>
									</div>
								</div>
								<div class="textandimg margin-top10 imgs-nthof-block" v-if="troubleDetail.status == 1">
									<h4 class="p-title">隐患解决</h4>
									<div class="row textandimg-main margin-top10 size-12">
										<div class="col-sm-12">
											<span>解决人 </span>
											<strong>{{troubleDetail.reviewerName}}</strong>
										</div>
										<div class="col-sm-12">
											<span>解决时间 </span>
											<strong>{{troubleDetail.reviewTime}}</strong>
										</div>
										<div class="textandimg-img imgs-nthof">
											<template v-for="item in troubleDetail.confirmUrls">
												<div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
													<video :src="item" width="100%" controls="controls"></video>
												</div>
											</template>
											<template v-for="item in troubleDetail.confirmUrls">
												<div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
													<img :src="item">
												</div>
											</template>
										</div>
										<div class="col-sm-12">
					                      <span>解决原因 </span>
					                      <strong>{{troubleDetail.treatment}}</strong>
					                  </div>
									</div>
								</div>
							</section>
						</section>
					</div>
					<div class="ceshi-btn">
						<!-- <button @click="moren">详情</button> -->
						<!-- <button @click="jianzhu">统计</button> -->
					</div>
			</template>

		</section>

		<!-- #右边 End-->
	</div>
</template>

<script>
	import moment from "moment";
	import HeaderVue from "../publick/header.vue";
	import { mapState } from "vuex";
	export default {
		components: {
			"header-vue": HeaderVue
		},
		data() {
			return {
				// 表格-请求
				// troubleList_parameter: {
				//   id: null,
				//   unitId: 4,
				//   type: null,
				//   inspectionName: null,
				//   status: null,
				//   currentPage: "1",
				//   pageSize: 10
				// },
				// // 表格返回
				// tableData: Object,
				// 时间配置
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

				queryInspectionNameList: Object,
				queryInspectionNameListvalue: "全部类型",
				// 表格-请求
				troubleList_parameter: {
					unitId: null,
					currentPage: 1,
					pageSize: 8
				},
				// 表格-请求
				tableData: Object,
				queryTroubleStats_parameter: {
					unitId: null
				},

				queryTroubleStats: Object,
				// 饼图数据
				troubleCount_parameter: {
					unitId: null,
					startTime: "2018-07-01",
					endTime: "2019-07-12"
				},
				// troubleCount:Object,
				troubleRatio: Object,
				dangerCount: Object,
				troubleCount: Object,
				// 折线图数据
				troubleRate_parameter: {
					unitId: null,
					dateType: 1
				},
				troubleRate: Object,
				dangerRate:Object,
				// 隐患详情
				troubleDetail_parameter: {
					troubleId: 156
				},
				troubleDetail: Object,
				queryById_parameter:{
					unitId:null
				},
				queryById:Object
			};
		},
		computed: mapState(["unitid"]),
		watch: {
			unitid() {
				if(this.unitid != 0) {
					this.getunitid = this.unitid;
				} else {
					this.getunitid = null;
				}
				this.queryById_parameter.unitId=this.getunitid;
				this.troubleList_parameter.unitId = this.getunitid;
				this.troubleCount_parameter.unitId = this.getunitid;
				this.troubleRate_parameter.unitId = this.getunitid;
				this.getTable();
				this.getData();
				this.queryByIds();
			}
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
				this.troubleCount_parameter.startTime = st;
				this.troubleCount_parameter.endTime = et;
				this.getData();
			},
			defaultTimeVaule() {
				var startDate = this.getNowFormatDate();
				this.troubleCount_parameter.startTime = startDate;
				this.troubleCount_parameter.endTime = startDate;
				this.dateValue = [startDate,startDate];
			},
			//获取当前时间：
			getNowFormatDate(){
				var date = new Date();
				// var date_s = date.getTime();//转化为时间戳毫秒数
				// date.setTime(date_s + days * 1000 * 60 * 60 * 24);//设置新时间比旧时间多一天
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
			jianzhu() {
				$(".dan-lineinfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".dan-iteminfo")
					.addClass("display-none")
					.removeClass("display-block");
			},
			toitmeinfo(item) {
				$(".dan-iteminfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".dan-lineinfo")
					.addClass("display-none")
					.removeClass("display-block");
				// 请求隐患详情
				this.troubleDetail_parameter.troubleId = item.id;
				this.$fetch("/api/trouble/troubleDetail", this.troubleDetail_parameter)
					.then(response => {
						if(response) {
							//console.log(response);
							this.troubleDetail = response.data.trouble;
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			handleCurrentChange(val) {
				//console.log(`当前页:` + val);
				this.troubleList_parameter.currentPage = val;
				this.getTable();
			},
			tolineitem() {
				//console.log(this.queryInspectionNameListvalue);
				$("#lookroute").removeClass("upd-btn-dis");
			},
			getTable() {
				// 请求隐患列表
				this.$fetch("/api/trouble/troubleList", this.troubleList_parameter)
					.then(response => {
						if(response) {
							//console.log(response);
							this.tableData = response.data.pager;
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			getData() {
				// 请求隐患统计
				this.$fetch(
						"/api/trouble/queryTroubleStats",
						this.queryTroubleStats_parameter
					)
					.then(response => {
						if(response) {
							//console.log(response);
							this.queryTroubleStats = response.data.result;
						}
					})
					.then(err => {
						//console.log(err);
					});

				// 请求隐患饼图数据
				this.$fetch("/api/trouble/troubleCount", this.troubleCount_parameter)
					.then(response => {
						if(response.data) {
							this.troubleCount = response.data;
							this.troubleRatio = response.data.troubleRatio;
							this.dangerCount = response.data.dangerCount;
							this.troubleCount = response.data.troubleCount;
							this.draw_piemin("dan_charpiemin", this.troubleCount);
							this.draw_piemax("dan_charpiemax", this.troubleRatio);
						}
					}).then(err => {
						//console.log(err);
					});
				this.getTroubleRate();
			},
			getTroubleRate(){
				this.$fetch("/api/trouble/queryTroubleLineChart", this.troubleRate_parameter)
					.then(response => {
						if(response.data) {
							let data = response.data;
							this.draw_line("dan_charline", data);
						}
					}).then(err => {
						//console.log(err);
					});
			},
			draw_piemin(id, data) {
				var fin_per = data.decideCount / data.troubleAll * 100;
				let d;
				if(data.troubleAll == 0) {
					d = [{
						value: 0,
						name: "暂无统计",
						label: {
							normal: {
								position: "inner",
								show: true,
								color:"#000"
							}
						}
					}];
				} else {
					d = [{
							value: data.decideCount,
							name: "解决率 " + fin_per.toFixed(2) + "%",
							label: {
								normal: {
									position: "inner",
									color:"#fff",
									show: true
								}
							}
						},
						{
							value: data.troubleAll - data.decideCount,
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
				}
				var char = {
					tooltip: {
						trigger: "item",
						// formatter: "{a} <br/>{b} {c}次"
						formatter: function(data) {
							var name = "";
							if(data.name.substring(0, 3) == "解决率") {
								name = "已完成";
							} else {
								name = data.name;
							}
							return name + ":" + data.value + "个";
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
			draw_piemax(id, data) {
				let count =
					data.damageCount +
					data.lackCount +
					data.peopleCount +
					data.unPeopleCount +
					data.dangerCount;
				let d = [{
						value: data.damageCount,
						// value: 2,
						name: "损坏" + (data.damageCount / count * 100).toFixed(2) + "%"
					},
					{
						value: data.lackCount,
						// value: 4,
						name: "缺失" + (data.lackCount / count * 100).toFixed(2) + "%"
					},
					{
						value: data.peopleCount,
						// value: 8,
						name: "人为因素" + (data.peopleCount / count * 100).toFixed(2) + "%"
					},
					{
						value: data.unPeopleCount,
						// value: 10,
						name: "非人为因素" + (data.unPeopleCount / count * 100).toFixed(2) + "%"
					},
					{
						value: data.dangerCount,
						// value: 6,
						name: "危险品" + (data.dangerCount / count * 100).toFixed(2) + "%"
					}
				];
				var char = {
					tooltip: {
						trigger: "item",
						// formatter: "{a} <br/>{b} {c}次"
						formatter: function(data) {
							var name = "";
							if(data.name.substring(0, 2) == "损坏") {
								name = "损坏";
							} else if(data.name.substring(0, 2) == "缺失") {
								name = "缺失";
							} else if(data.name.substring(0, 2) == "人为") {
								name = "人为因素";
							} else if(data.name.substring(0, 2) == "非人") {
								name = "非人为因素";
							} else if(data.name.substring(0, 2) == "危险") {
								name = "危险品";
							}
							return name + ":" + data.value + "个";
						}
					},
					series: [{
						name: "说明:",
						type: "pie",
						radius: [0, "70%"],
						color: ["#555","#777", "#ffb709", "#999", "#f13131"],
						data: d
					}]
				};
				let chars = this.$echarts.init(document.getElementById(id));
				chars.setOption(char);
			},
			draw_line(id, data) {
				let lineDate = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
				let lineCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				var troubleRateTemp = data.result.troubleLineChart;
				var dangerRateTemp = data.result.dangerLineCharts;
				var toubleDate = troubleRateTemp.lineDate;
				var toubleCount = troubleRateTemp.lineCount;
				var dangerDate = dangerRateTemp.lineDate;
				var dangerCount = dangerRateTemp.lineCount;
				if(dangerDate == null){
					dangerDate = lineDate ;
					dangerCount = lineCount ;
				}
				if(toubleDate == null){
					toubleDate = lineDate ;
					toubleCount = lineCount ;
				}
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data:['危险品','隐患'],
						textStyle:{
							color: "#999"
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						top:'20%',
						containLabel: true
					},
					xAxis: {
						type: "category",
						boundaryGap: false,
						data: toubleDate,
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

					// data:
					series: [
						{
							name:'危险品',
							type: "line",
							symbol: "none",
							color:"#f13131",
							smooth: true,
							data:dangerCount
						},
						{
							name:'隐患',
							type: "line",
							color:"#ffb709",
							symbol: "none",
							smooth: true,
							data:toubleCount
						}
					]
				};

				let charf = this.$echarts.init(document.getElementById(id));
				charf.setOption(option);
			}
		},
		mounted() {
			if(sessionStorage.unitid != undefined || sessionStorage.unitid != '') {
				this.troubleList_parameter.unitId = sessionStorage.unitid;
				this.troubleCount_parameter.unitId = sessionStorage.unitid;
				this.troubleRate_parameter.unitId = sessionStorage.unitid;
				this.queryById_parameter.unitId=sessionStorage.unitid;
			}
			if(sessionStorage.unitid == 0) {
				this.troubleList_parameter.unitId = null;
				this.troubleCount_parameter.unitId = null;
				this.troubleRate_parameter.unitId = null;
				this.queryById_parameter.unitId=null;
			}
			this.$store.commit("route_path", this.$route.path);
			this.defaultTimeVaule();
			this.getTable();
			this.getData();
			this.queryByIds();
			let that = this;
			$('.alarmdate b').click(function() {
				$(this).addClass('indexdateactive').siblings().removeClass('indexdateactive');
				var value = $(this).html();
				if(value == '日') {
					that.troubleRate_parameter.dateType = 1;
				} else if(value == '月') {
					that.troubleRate_parameter.dateType = 2;
				} else if(value == '年') {
					that.troubleRate_parameter.dateType = 3;
				}
				that.getTroubleRate();
			})
		}
	};
</script>

<style scoped>
	.line-height40 {
		line-height: 57px;
	}
</style>
