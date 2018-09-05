<template>
	<div class="row" id="device">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<!-- <infor_left-vue></infor_left-vue> -->
			<template>
				<div class="toolleft margin-right0">
					<section>
						<div class="toolcount">
							<div class="set-width-50 font-gray-999 padding-right0">
								<ul class="toolcount-left margin-bottom0 padding-right10 padding-left0" id="toolcount">
									<li>
										<h1 class="toolcount-p1 font-white" >{{deviceCountByUnit.deviceTotal}}</h1>
									</li>
									<li>
										<p class="size-10">Device Number</p>
									</li>
									<li>
										<p class="size-18 font-blue">当前设备总数</p>
									</li>
								</ul>
							</div>
							<div class="set-width-50 display-inline-block size-12 font-gray-999 toolcount-right">
								<ul class="padding-left0 margin-bottom0">
									<li>
										<p>室内设备</p>
										<p class="font-gray-ccc float-right size-14" >{{deviceCountByUnit.innerCount}}</p>
									</li>
									<li>
										<p>室外设备</p>
										<p class="font-gray-ccc float-right size-14" >{{deviceCountByUnit.outsideCount}}</p>
									</li>
									<li>
										<p>灭火设备</p>
										<p class="font-blue float-right size-14" >{{deviceCountByUnit.outfireCount}}</p>
									</li>
									<li>
										<p>预警设备</p>
										<p class="font-blue float-right size-14" >{{deviceCountByUnit.inductionCount}}</p>
									</li>
									<li>
										<p>安防设备</p>
										<p class="font-blue float-right size-14" >{{deviceCountByUnit.safetyCount}}</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section>
						<div class="toolroute font-gray-ccc margin-top100">
							<span class="toolroute-rect bg-blue"></span>
							<ul class="padding-left10 clearfix">
								<li>
									<p class="font-gray-666 size-10">Equipment Info</p>
								</li>
								<li>
									<p class="font-blue size-16">设备信息
										<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" @click="fullList = true">
					                      <el-tooltip content="全屏" placement="top">
						                        <i class="icon iconfont icon-weibiaoti10 size-14"></i>
						                    </el-tooltip>
					                    </span>
									</p>
								</li>
								<li>
									<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" style="width:120px!important" size="mini" v-model="selectNodevalue_model" placeholder="全部建筑" @change="toselectNode">
										<el-option v-for="item in selectNode" :key="item.id" :label="item.name" :value="item.id">
										</el-option>
									</el-select>
								</li>
								<li>
									<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
										<thead>
											<tr>
												<!-- <th >序号</th> -->
												<th>设备名称</th>
												<th>归属建筑</th>
												<th>设备类型</th>
												<th>状态</th>
												<th>查看</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(item,index) in tableData.result" >
												<td :title=item.name>
													<el-tooltip placement="top">
													  	<div slot="content">{{item.name == null ? '-' : item.name}}</div>
														<span>{{item.name == null ? '-' : item.name}}</span>
													</el-tooltip>
												</td>
												<td>
													<el-tooltip placement="top">
														<div slot="content">{{item.buildingName == null ? '-' : item.buildingName}}</div>
														<span>{{item.buildingName == null ? '-' : item.buildingName}}</span>
													</el-tooltip>
												</td>
												<td>
													<el-tooltip placement="top">
														<div slot="content">{{item.deviceTypeName == null ? '-' : item.deviceTypeName}}</div>
														<i class="icon iconfont set-ciontop3 font-white" :class="iconByType[item.deviceTypeId]" :title="item.deviceTypeName"></i>
													</el-tooltip>
												</td>
												<td v-if="item.status==1" class="font-blue">正常</td>
												<td v-if="item.status==2" class="font-orange">故障</td>
												<td v-if="item.status==3" class="font-red">警报</td>
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
										<span>{{Math.ceil(tableData.totalRow/this.deviceList_parameter.pageSize)}}页</span>
										<el-pagination class="pull-right" small layout="prev, pager, next" :page-size="this.deviceList_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.deviceList_parameter.currentPage" @current-change="handleCurrentChange">
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
			<!-- <infor_right-vue></infor_right-vue> -->
			<template>
				<div class="toolright">
					<!-- 筛选 -->
					<section class="my-filter padding5 bg-gray-222 clearfix">
						<!-- 单位筛选 -->
						<!-- 日期筛选 -->
						<div class="col-sm-12 padding0">
							<div class="upd-elmdate">
								<el-date-picker v-model="dateValue" size="mini" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2"  @change="chooseTimeRange">
								</el-date-picker>
							</div>
						</div>
					</section>
					<!-- 统计 -->
					<section class="dan-lineinfo ">
						<div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
							<!-- 已选择 -->
							<div class="personinfo">
								<p>
									<span class="size-20 font-blue">{{unitInfo.name}}</span>
									<el-tooltip content="安全评分" placement="top">
										<span v-if="unitInfo.totalScore == 0" class="bgbox-min bg-blue font-black">无评分</span>
										<span v-if="unitInfo.totalScore < 2" class="bgbox-min bg-red font-black">评分:{{unitInfo.totalScore}}</span>
										<span v-if="unitInfo.totalScore >=2 && unitInfo.totalScore < 4" class="bgbox-min bg-orange font-black">评分:{{unitInfo.totalScore}}</span>
										<span v-if="unitInfo.totalScore >=4 && unitInfo.totalScore < 6" class="bgbox-min bg-yellow font-black">评分:{{unitInfo.totalScore}}</span>
										<span v-if="unitInfo.totalScore>=6" class="bgbox-min bg-blue font-black">评分:{{unitInfo.totalScore}}</span>
									</el-tooltip>
								</p>
								<p class="text-left padding0">
									<span><i class="el-icon-location"></i> {{unitInfo.location}}</span>
								</p>
								<!-- <P class="col-sm-5 text-right padding0">
									<span class="text-right">
                            录入时间：<span class="font-gray-999">2018.07.09 08:00:00</span>
									</span>
								</P> -->
							</div>
						</div>
						<section>
							<div class="toolcount margin-top20">
								<h4 class="p-title">设备统计</h4>
								<template>
									<div class="padding-left15 margin-top20">
										<el-radio-group @change="callradiopie" v-model="radiovaluepie">
											<el-radio label="1">故障设备 {{alarmAndMalfunctionDeviceCount.malfunctionCount}}</el-radio>
											<el-radio label="2">报警设备 {{alarmAndMalfunctionDeviceCount.alaramCount}}</el-radio>
										</el-radio-group>
									</div>
								</template>
								<div id="call_charpiemax" style="width: 100%;height:130px;margin: 0 auto;"></div>
							</div>
						</section>
						<section>
							<div class="toolcount margin-top10">
								<h4 class="p-title">各类型设备概况</h4>
								<template>
									<div class="padding-left15 margin-top20">
										<el-radio-group @change="callradio" v-model="radiovalue">
											<el-radio label="1">故障率</el-radio>
											<el-radio label="2">报警率</el-radio>
										</el-radio-group>
									</div>

								</template>
								<div id="call_charaxis" style="width: 100%;height:170px;margin: 0 auto;"></div>
							</div>
						</section>
						<section>
							<div class="toolcount margin-top10">
								<h4 class="p-title">历史趋势</h4>
								<div class="padding-left15 margin-top20">
									<el-radio-group @change="callradiohis" v-model="radiovaluehis">
										<el-radio label="1">故障率</el-radio>
										<el-radio label="2">报警率</el-radio>
									</el-radio-group>
								</div>
								<div id="call_charline" style="width: 100%;height:140px;margin: 0 auto;"></div>
							</div>
						</section>
					</section>
					<!-- 详情 -->
					<section class="dan-iteminfo overflow-scr display-none">
						<a class="btn-back" @click="moren"><i class="el-icon-arrow-left"></i>返回</a>
						<div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
							<!-- 已选择 -->
							<div class="personinfo">
								<p>
									<span class="size-20 font-blue">
                          <i class="icon iconfont icon-jiankong-mian- size-20" data-toggle="tooltip" title="监控摄像头"></i> <span>{{deviceiteminfo.name}}</span>
									</span>
									<span class="float-right">
                                <span class="bgbox-max bg-gray-333 font-gray-999 size-10">{{deviceiteminfo.deviceTypeName}}</span>
									</span>
								</p>
								<p class="col-sm-7 text-left padding0">
									<span>
                                <i class="fas fa-industry"></i> {{deviceiteminfo.location}}</span>
								</p>
							</div>
						</div>
						<!-- 设备信息统计 -->
						<section>
							<div class="toolcount margin-top20 clearfix">
								<div class="col-sm-4 font-gray-999 padding0">
									<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
										<li>
											<h1 class="toolcount-p1" style="line-height: 55px;">
												<span v-if="deviceiteminfo.status==1" class="font-blue size-48">正常</span>
												<span v-if="deviceiteminfo.status==2" class="font-orange size-48">故障</span>
												<span v-if="deviceiteminfo.status==3" class="font-red size-48">警报</span>
											</h1>
										</li>
										<li class="margin-top30">
											<p class="size-10 ">Device Status</p>
										</li>
										<li>
											<p class="size-16 font-blue">设备运行状态</p>
										</li>
									</ul>
								</div>
								<div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
									<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
										<li>
											<p class="size-18 font-white">信息统计</p>
										</li>
										<li class="margin-bottom5">
											<p class="size-10 set-scaleright">Repair Statistics</p>
										</li>
										<li class="margin-top10">
											<p class="set-width-50">运行时长 <span class="font-blue">
												{{deviceiteminfodiff}}
												</span>天</p>
										</li>
										<li class="row text-center padding-right16 margin-top10">
											<div class="col-sm-4 personnel-borderright">
												<p class="size-16 show font-red">{{deviceiteminfo.alarmCount?deviceiteminfo.alarmCount:'-'}}</p>
												<p>报警次数</p>
											</div>
											<div class="col-sm-4 personnel-borderright">
												<p class="size-16 show font-orange">{{deviceiteminfo.malfunctionCount?deviceiteminfo.malfunctionCount:'-'}}</p>
												<p>故障次数</p>
											</div>
											<div class="col-sm-4">
												<p class="size-16 show font-blue">
												{{deviceiteminfo.lifeMonth?deviceiteminfo.lifeMonth:'-'}}</p>
												<p>更换周期</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</section>
						<!-- 设备基本信息 -->
						<section>
							<div class="textandimg margin-top30">
								<h4 class="p-title">设备信息</h4>
								<div class="row textandimg-main margin-top20 size-12">
									<div class="col-sm-12">
										<span>设备名称 </span>
										<strong>{{deviceiteminfo.name?deviceiteminfo.name:'-'}} </strong>
									</div>
									<div class="col-sm-6">
										<span>设备类型 </span>
										<strong>{{deviceiteminfo.deviceTypeName?deviceiteminfo.deviceTypeName:'-'}}</strong>
									</div>

									<div class="col-sm-6">
										<span>投入时间 </span>
										<strong>{{startDates.substring(0,10)}} </strong>
									</div>									
									<div class="col-sm-12">
										<span>设备位置 </span>
										<strong>{{deviceiteminfo.location?deviceiteminfo.location:'-'}} </strong>
									</div>
									<div class="col-sm-12">
										<span>设备坐标 </span>
										<strong>{{xRates.substring(0,6)}},{{yRates.substring(0,6)}}</strong>
									</div>

									<div class="col-sm-6">
										<span>离地高度 </span>
										<strong>{{deviceiteminfo.fheight?deviceiteminfo.fheight:'-'}} </strong>
									</div>
									<div class="col-sm-6">
										<span>距离顶部 </span>
										<strong>{{deviceiteminfo.height?deviceiteminfo.height:'-'}} </strong>
									</div>
									<div class="col-sm-6">
										<span>生产厂商 </span>
										<strong>{{deviceiteminfo.firm?deviceiteminfo.firm:'-'}} </strong>
									</div>
									<div class="col-sm-6">
										<span>生产日期</span>
										<strong>{{deviceiteminfo.productDate?deviceiteminfo.productDate:'-'}} </strong>
									</div>
									<div class="col-sm-12">
										<span>物理地址 </span>
										<strong>{{deviceiteminfo.mac?deviceiteminfo.mac:'-'}} </strong>
									</div>
								</div>
							</div>
						</section>
						<!-- 维保信息 -->
						<section>
							<div class="textandimg margin-top30">
								<h4 class="p-title">维保信息</h4>
								<div class="row textandimg-main margin-top20 size-12">
									<div class="col-sm-6">
										<span>维保单位 </span>
										<strong>{{deviceiteminfo.maintenanceUnit?deviceiteminfo.maintenanceUnit:'-'}}  </strong>
									</div>
									<div class="col-sm-6">
										<span>维保人员 </span>
										<strong>{{deviceiteminfo.maintenanceUser?deviceiteminfo.maintenanceUser:'-'}}  </strong>
									</div>
									<div class="col-sm-6">
										<span>维保电话 </span>
										<strong>{{deviceiteminfo.maintenancePhone?deviceiteminfo.maintenancePhone:'-'}}  </strong>
									</div>
									<div class="col-sm-6">
										<span>更换周期 </span>
										<strong><span class="font-blue">{{deviceiteminfo.lifeMonth?deviceiteminfo.lifeMonth:'-'}}</span></strong>
									</div>
								</div>
							</div>
						</section>
					</section>
				</div>
			</template>
		</section>
		<!-- #右边 End-->
<!-- 大列表弹窗 -->
    <el-dialog show-close :visible.sync="fullList" center lock-scroll fullscreen="ture" show-close="false" append-to-body="ture" class="dialog-cont">      
      <div class="dialog-content clearfix">
        <button type="button" class="btn-close position-absolute-right" @click="fullList = false">
         <i class="el-icon el-icon-close"></i>关闭
        </button>
        <fullList-vue></fullList-vue>
      </div>      
    </el-dialog>
	</div>
</template>

<script>
	// import HeaderVue from "../publick/header.vue";
	// import Infor_leftVue from './infor_left.vue';
	// import Infor_rightVue from './infor_right.vue';
	import moment from "moment";
	import{mapState} from "vuex";
	import fullListVue from '../../management/Equipment_management/all.vue';
	export default {
		components: {
			'fullList-vue':fullListVue,
			// "header-vue": HeaderVue
			// 'call_left-vue':Call_leftVue,
			// 'call_right-vue':Call_rightVue
		},
		data() {
			return {
				fullList: false,
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
				queryInspectionNameListvalue: "全部建筑",
				// 表格-请求
				deviceList_parameter: {
					unitId: null,
					currentPage: 1,
					pageSize: 10,
					buildingId:''
				},
				// 报警统计-请求
				tableData: Object,
				deviceCountByUnit_parameter: {
					unitId: null
				},

				deviceCountByUnit: Object,
				// 报警数据统计
				alarmAndMalfunctionDeviceCount_parameter: {
					unitId: null,
					startTime: null,
					endTime: null,
					type: 1
				},
				radiovalue: "1",
				radiovaluehis: '1',
				radiovaluepie: '1',
				alarmAndMalfunctionDeviceCount: Object,
				// 饼图数据
				queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter: {
					unitId: null,
					startTime: null,
					endTime: null,
					type: 1
				},
				queryDeviceMacfunctionOrAlarmOfTypeByTime: Object,
				// 折线图数据
				trendLine_parameter: {
					unitId: null,
					startTime: null,
					endTime: null,
					type: 1
				},
				trendLine: Object,
				getAlarmDetail: Object,
				infoShow: true,
				iconByType:{
					1:'icon-ranqiganying-mian-',
					2:'icon-ganyanqi-',
					3:'icon-wengan-',
					4:'icon-hongwaiyanhuoganying-',
					5:'icon-shuiyaganying-',
					6:'icon-shineixiaohuoshuan-',
					7:'icon-tuxiangxianshijiance-',
					8:'icon-xiaofangshuanbaojinganniu-',
					9:'icon-shengguangbaojingqi-',
					10:'icon-xiaofangshuanbaojinganniu-',
					11:'icon-xiaofangbeng-',
					12:'icon-xiaofangyingjiguangbo-',
					13:'icon-miehuoqi-mian-',
					14:'icon-linpentou-',
					15:'icon-qitimiehuoxitong-',
					16:'icon-anquanchukou-',
					17:'icon-xiaofangche-',
					18:'icon-anquanchukou-',
					19:'icon-shexiangtou-',
					20:'icon-shuidai-',
					21:'icon-dixiaxiaofangshuan-',
					22:'icon-xiaofangbeng-',
					23:'icon-xiaofangbeng-',
					24:'icon-xiaofangbeng-',
					25:'icon-xiaofangbeng-',
					26:'icon-dixiaxiaofangshuan-',
					27:'icon-xiaofangbeng-',
					28:'icon-xiaofangbeng-',
					29:'icon-yeweiji-',
					30:'icon-xiaofangbeng-',
					31:'icon-xiaofangbeng-',
					32:'icon-miehuoqi-mian-',
					33:'icon-miehuoqi-mian-',
					34:'icon-shoudongbaojinganniu-',
				},
				
				selectNode_parameter:{
					unitId:null,
					currentPage:1,
					pageSize:10000
				},
				selectNode:Object,
				selectNodevalue_model:'',
				deviceiteminfo:Object,
				deviceiteminfodiff:'',
				xRates:'',
				yRates:'',
				startDates:'',
				//获取单位信息
				unitInfo_parameter:{
					unitId:null,
				},
				unitInfo:{
					name:"",
					location:"",
					totalScore:0
				},
			}
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
					this.getunitid='';
				}

				this.deviceList_parameter.unitId=this.getunitid;
				this.deviceCountByUnit_parameter.unitId=this.getunitid;
				this.alarmAndMalfunctionDeviceCount_parameter.unitId=this.getunitid;
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.unitId=this.getunitid;
				this.trendLine_parameter.unitId=this.getunitid;
				this.selectNode_parameter.unitId=this.getunitid;
				this.selectNodevalue_model='';
				this.deviceList_parameter.buildingId='';
				this.unitInfo_parameter.unitId = this.getunitid;
				this.getTable();
				this.getData();
				this.get_axis();
				this.get_line();
				this.get_pie();
				this.getBuild();

			}
		},
		methods: {
			chooseTimeRange(t) {
				this.dateValue = t;
				var st = moment(this.dateValue[0]).format('YYYY-MM-DD');
				var et = moment(this.dateValue[1]).format('YYYY-MM-DD');
				this.alarmAndMalfunctionDeviceCount_parameter.startTime = st;
				this.alarmAndMalfunctionDeviceCount_parameter.endTime = et;
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.startTime = st;
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.endTime = et;
				this.trendLine_parameter.startTime = st;
				this.trendLine_parameter.endTime = et;
				
				this.getData();
				this.get_axis();
				this.get_line();
				this.get_pie();
				this.getBuild();
			},
			defaultTimeVaule() {
				var startDate = this.getNowFormatDate();
				this.alarmAndMalfunctionDeviceCount_parameter.startTime = startDate;
				this.alarmAndMalfunctionDeviceCount_parameter.endTime = startDate;
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.startTime = startDate;
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.endTime = startDate;
				this.trendLine_parameter.startTime = startDate;
				this.trendLine_parameter.endTime = startDate;
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
			moren() {
				$(".dan-iteminfo")
					.addClass("display-none")
					.removeClass("display-block");
				$(".dan-lineinfo")
					.addClass("display-block")
					.removeClass("display-none");

			},
			toitmeinfo(item) {
				$(".dan-iteminfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".dan-lineinfo")
					.addClass("display-none")
					.removeClass("display-block");
				// 请求报警详情
				this.deviceiteminfo=item;
				this.deviceiteminfodiff=moment(item.startDate).diff(moment(), 'days') - moment(item.startDate).diff(moment(), 'days')*2;
				this.xRates=item.xRate+"";
				this.yRates=item.yRate+"";
				this.startDates=item.startDate+"";
			},
			handleCurrentChange(val) {
				//console.log(`当前页:` + val);
				this.deviceList_parameter.currentPage = val;
				this.getTable();
			},
			tolineitem() {
				//console.log(this.queryInspectionNameListvalue);
				$("#lookroute").removeClass("upd-btn-dis");
			},
			callradio() {
				//console.log(this.radiovalue);
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.type = this.radiovalue;
				this.get_axis();
			},
			callradiohis() {
				//console.log(this.radiovaluehis);
				this.trendLine_parameter.type = this.radiovaluehis;
				this.get_line();
			},
			callradiopie() {
				//console.log(this.radiovaluepie);
				this.alarmAndMalfunctionDeviceCount_parameter.type = this.radiovaluepie;
				this.get_pie();
			},
			getTable() {
				// 请求报警列表
				this.$fetch("/api/device/deviceList", this.deviceList_parameter)
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
				// 获取单位信息
				if(this.unitInfo_parameter.unitId==0 || this.unitInfo_parameter.unitId==null){
					this.unitInfo.name = "管理单位";
					this.unitInfo.location = "无位置";
					this.unitInfo.totalScore = 0;
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
				// 请求报警统计
				this.$fetch(
						"/api/device/deviceCountByUnit",
						this.deviceCountByUnit_parameter
					)
					.then(response => {
						if(response) {
							//console.log(response);
							this.deviceCountByUnit = response.data;

						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			get_pie() {
				// 请求报警数据统计
				this.$fetch(
						"/api/device/alarmAndMalfunctionDeviceCount",
						this.alarmAndMalfunctionDeviceCount_parameter
					)
					.then(response => {
						if(response) {
							//console.log(response);
							this.alarmAndMalfunctionDeviceCount = response.data;
							// this.draw_piemin("call_charpiemin", response.data);
							this.draw_piemax("call_charpiemax", response.data, this.alarmAndMalfunctionDeviceCount_parameter.type)
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			get_line() {
				// 请求折线图数据
				this.$fetch(
						"/api/device/trendLine",
						this.trendLine_parameter
					)
					.then(response => {
						if(response) {
							this.trendLine = response.data;
							//console.log(this.trendLine);
							this.draw_line("call_charline", response.data, this.trendLine_parameter.type);
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			get_axis() {
				// 请求报警饼图数据
				this.$fetch(
						"/api/device/queryDeviceMacfunctionOrAlarmOfTypeByTime",
						this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter
					)
					.then(response => {
						if(response) {
							this.queryDeviceMacfunctionOrAlarmOfTypeByTime = response.data.rate
							this.draw_axis(
								"call_charaxis",
								this.queryDeviceMacfunctionOrAlarmOfTypeByTime,
								this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.type
							);
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			getBuild(){
				this.selectNode=Object;
				this.$fetch(
						"/api/building/selectNode",
						this.selectNode_parameter
					).then(response => {
						if(response) {
							this.selectNode = response.data.list;
							this.selectNode.unshift({
								id: 0,
								name: '全部建筑'
							})
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
			toselectNode(){
				this.deviceList_parameter.buildingId=this.selectNodevalue_model;
				if(this.deviceList_parameter.buildingId==0){
					this.deviceList_parameter.buildingId=null;
				}
				this.getTable();
			},
			draw_piemin(id, data) {
				let a = data.peopleAlarm / data.alarmSum * 100;
				let b = data.deviceAlarm / data.alarmSum * 100;
				let d;
				if(data.alarmSum == 0) {
					d = [{
						value: 0,
						name: "暂无统计",
						label: {
							normal: {
								position: "inner",
								show: true
							}
						}
					}];
				} else {
					d = [{
							value: data.peopleAlarm,
							name: "人工报警" + a.toFixed(2) + "%",
							labelLine: {
								normal: {
									show: false
								}
							},
							label: {
								normal: {
									position: "inner",
									show: true
								}
							}
						},
						{
							value: data.deviceAlarm,
							name: "设备报警" + b.toFixed(2) + "%",
							labelLine: {
								normal: {
									show: false
								}
							},
							label: {
								normal: {
									position: "inner",
									show: true
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
							if(data.name.substring(0, 3) == "人工报") {
								name = "人工报警";
							} else if(data.name.substring(0, 3) == "设备报") {
								name = "设备报警";
							}
							return name + ":" + data.value + "个";
						}
					},
					series: [{
						name: "说明:",
						type: "pie",
						radius: [0, "70%"],
						color: ["#333", "#bad616"],
						data: d
					}]
				};
				let chars = this.$echarts.init(document.getElementById(id));
				chars.setOption(char);
			},
			draw_piemax(id, data, type) {
				let name, value1, value2;
				if(type == 1) {
					name = "设备故障率" + data.malfunctionRate * 100 + "%";
					value1 = data.malfunctionCount
					value2 = data.deviceTotal - data.malfunctionCount
				} else {
					name = "设备报警率" + data.alarmRate * 100 + "%";
					value1 = data.alaramCount
					value2 = data.deviceTotal - data.alaramCount
				}
				let d = [{
						value: value1,
						// value: 2,
						name: name
					},
					{
						value: value2,
						// value: 4,
						name: "其他",
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
							if(data.name.substring(0, 4) == "设备故障") {
								name = "设备故障数";
							} else if(data.name.substring(0, 4) == "设备报警") {
								name = "设备报警数";
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
				// chars.setOption({});
				chars.setOption(char);
			},
			draw_line(id, data, type) {
				// 巡检完成率历史趋势曲线图
				let a = [],
					b = [],
					d;
				//console.log(data.alarmRate[0].lineDate);
				if(type == 1) {
					d = data.malfunctionRate;
				} else {
					d = data.alarmRate;
				}
				//console.log(d);
				for(var i = 0; i < d.length; i++) {
					if(type == 1) {
						b.push(d[i].malfunctionCount);
					} else {
						b.push(d[i].alarmCount);
					}
					a.push(d[i].lineDate);
				}
				//console.log(a);
				//console.log(b);
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
						y: 10,
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
			draw_axis(id, data, type) {
				let a = [],
					b = [];

				for(var i = 0; i < data.length; i++) {
					a.push(data[i].deviceTypeName);
					if(type == 1) {
						b.push(data[i].malfunctionCount);
					} else {
						b.push(data[i].alarmCount);
					}
				}

				var axis = {
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
						bottom: "10%",
						containLabel: true
					},
					xAxis: [{
						type: "category",
						show: true,
						data: a,
						axisTick: {
							alignWithLabel: true
						},
						axisLabel: {
							interval: 0,
							rotate: 40
						},
						axisLine: {
							lineStyle: {
								color: "#999"
							}
						}

					}],
					yAxis: [{
						type: "value",
						show: false
					}],
					grid: {
						y: 20,
						x2: 0,
						y2: 100,
						x: 30,
						borderWidth: 1
					},
					series: [{
						name: "数量",
						type: "bar",
						barWidth: "60%",
						data: b,
						itemStyle: {
							normal: {
								// 值显示在柱子顶部
								label: {
									show: true,
									position: "top",
									textStyle: {
										color: function(params) {
											if(params.value > 0 && params.value < 3) {
												return "#666";
											} else if(params.value >= 3 && params.value <= 6) {
												return "#999";
											} else if(params.value >= 6 && params.value <= 9) {
												return "#ccc";
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
									if(params.value > 0 && params.value < 3) {
										return "#666";
									} else if(params.value >= 3 && params.value <= 6) {
										return "#999";
									} else if(params.value >= 6 && params.value <= 9) {
										return "#ccc";
									}
									return "#bad616";
								}
							}
						}
					}]
				};
				let axisf = this.$echarts.init(document.getElementById(id));
				axisf.setOption(axis);
			}
		},
		mounted() {
			if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
				this.deviceList_parameter.unitId=sessionStorage.unitid;
				this.deviceCountByUnit_parameter.unitId=sessionStorage.unitid;
				this.alarmAndMalfunctionDeviceCount_parameter.unitId=sessionStorage.unitid;
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.unitId=sessionStorage.unitid;
				this.trendLine_parameter.unitId=sessionStorage.unitid;
				this.selectNode_parameter.unitId=sessionStorage.unitid;
				this.unitInfo_parameter.unitId = sessionStorage.unitid;
			}
			if(sessionStorage.unitid==0){
				this.deviceList_parameter.unitId='';
				this.deviceCountByUnit_parameter.unitId='';
				this.alarmAndMalfunctionDeviceCount_parameter.unitId='';
				this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.unitId='';
				this.trendLine_parameter.unitId='';
				this.selectNode_parameter.unitId='';
				this.unitInfo_parameter.unitId = null ;
				this.unitInfo.name = "管理单位";
				this.unitInfo.location = "无位置";
				this.unitInfo.totalScore = 0;
			}

			this.$store.commit('route_path', this.$route.path);
			this.defaultTimeVaule();
			this.getTable();
			this.getData();
			this.get_axis();
			this.get_line();
			this.get_pie();
			this.getBuild();
		}
	};
</script>

<style scoped>
	.row {
		position: relative;
		z-index: 22;
	}
</style>