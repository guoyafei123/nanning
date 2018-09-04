<template>
	<div class="toolright font-gray-999">
		<!-- 单位信息（地图联动） -->
		<section class="unit-info border-solid-333 margin-bottom30 clearfix bg-black">
			<ul class="list-unstyled">
				<!-- 介绍 -->
				<li class="position-relative">
					<template>
						<div class="position-absolute-bottom clearfix">
							<!-- 单位信息 -->
							<article class="unit-brief white-space col-sm-10" v-if="queryUnitInfo_parmar.unitId!=0">
								<h3 class="size-20" >{{queryUnitInfoinfoa}}</h3>
								<small><i class="el-icon-location" ></i> {{queryUnitInfoinfob}}</small>
							</article>
							<!-- 安全评分 -->
							<article class="unit-score" v-if="queryUnitInfo_parmar.unitId!=0">
								<span class="badge bg-blue position-absolute-right">安全评分</span>
								<!-- 分数 -->
								<h1 class="font-red">{{queryUnitInfo.totalScore}}</h1>
								<!-- 上升下降标识 -->
								<!-- <small class="font-white"><i class="fas fa-arrow-down" data-toggle="tooltip" title="下降"></i></small> -->
							</article>
						</div>
					</template>
					<!-- 单位图片 -->
					<img :src="queryUnitInfoimg" :onerror="defaultImg" class="img-responsive center-block">
				</li>
				<!-- 统计1 -->
				<li>
					<div class="pull-left">
						<h4 v-if="queryUnitInfo_parmar.unitId!=0">{{queryUnitInfoinfoc}}</h4>
						<h4 v-if="queryUnitInfo_parmar.unitId==0">-</h4>
						<small>消防负责人</small>
					</div>
					<div class="pull-right">
						<article>
							<h4 v-if="getUnitsSynthesis">{{getUnitsSynthesis.ALLALARM}}</h4>
							<small>今日警报</small>
						</article>
						<article>
							<h4 v-if="getUnitsSynthesis">{{getUnitsSynthesis.ALLTROUBLE}}</h4>
							<small>今日隐患</small>
						</article>
						<article>
							<h4 v-if="getUnitsSynthesis">{{getUnitsSynthesis.ALLINSPECTION}}</h4>
							<small>巡检完成</small>
						</article>
						
					</div>
				</li>
				<!-- 统计2 -->
				<li>
					<article>
						单位总数<span v-if="getUnitsSynthesis">{{getUnitsSynthesis.UNITCOUNT}}</span>
					</article>
					<article>
						建筑总数<span v-if="getUnitsSynthesis">{{getUnitsSynthesis.BUILDINGCOUNT}}</span>
					</article>					
					<article>
						预案总数<span v-if="getUnitsSynthesis">{{getUnitsSynthesis.PREARRANGECOUNT}}</span>
					</article>
					<article>
						设备总数<span v-if="getUnitsSynthesis">{{getUnitsSynthesis.DEVICECOUNT}}</span>
					</article>
					<article>
						人员总数<span v-if="getUnitsSynthesis">{{getUnitsSynthesis.STAFFNUM}}</span>
					</article>
					<article>
						巡检路线<span v-if="getUnitsSynthesis">{{getUnitsSynthesis.INSPECTIONPLANCOUNT}}</span>
					</article>
				</li>
			</ul>
		</section>
		<!-- 实时报警 -->
		<section class="early-warning clearfix">
			<span class="toolroute-rect bg-blue"></span>
			<div class="early-title">
				<small>Early-Warning</small>
				<h3>实时报警
                <a class="pull-right size-12" @click="openEarlyList()"><span class="unit-btn-open">展开 <i class="fas fa-chevron-up font-blue"></i></span><span class="unit-btn-close" style="display: none;">折叠 <i class="fas fa-chevron-down font-blue"></i></span></a>
            </h3>
			</div>
			<!-- 报警时循环li标签class样式调用
        火灾 fire-list    聚合li>article>h4>span.badge
        报警 warning-list
        故障 fault-list
        隐患 dangers-list
        复位/解决/关闭  ok-list
        锁定 a标签加active
       -->
			<div class="early-tab hide">
				<ul class="col-lg-12 col-md-12 col-sm-12 early-menu list-inline margin-bottom0 nav nav-tabs">
					<li class="col-lg-4 col-md-4 col-sm-4 active">
						<a href="#warning-list" data-toggle="tab">
							<h4>{{queryAlarmlength}}</h4>
							<small>今日警报</small>
						</a>
					</li>
					<li class="col-lg-4 col-md-4 col-sm-4">
						<a href="#danger-list" data-toggle="tab" aria-expanded="true">
							<h4>{{queryTroublelength}}</h4>
							<small>今日隐患</small>
						</a>
					</li>
					<li class="col-lg-4 col-md-4 col-sm-4">
						<a href="#ok-list" data-toggle="tab">
							<h4>{{queryCloselength}}</h4>
							<small>复位/关闭</small>
						</a>
					</li>
				</ul>
				<div id="myTabContent" class="tab-content">
					<!-- 警报列表 -->
					<div class="tab-pane fade in active" id="warning-list">
						<ul class="early-list list-unstyled" style="height:62vh">
							<!-- 单条火灾循环li -->
							<li v-for="(item,index) in queryAlarmIng.alarms" :class="[item.alarmsum!=null ? 'early-more' :'early-single',
								item.eventLevel==0 ? 'fault-list' :'',
								item.eventLevel==1 ? 'warning-list' :'',
								item.eventLevel==2 ? 'fire-list' :'',
								]">
									<article>
										<h5 @click="dialogVisibles(item,1)"><i class="icon iconfont icon-early"></i>
										<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
										{{item.unitName==null ? '' :item.unitName}}
										{{item.buildingName==null ? '' :item.buildingName}}
										{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
										{{item.roomNumber==null ? '' :item.roomNumber}}
										<span>
											{{item.alarmsum!=null ? '多处' :''}}
											{{item.eventLevel==0 ? '发生故障' :''}}
											{{item.eventLevel==1 ? '发生报警' :''}}
											{{item.eventLevel==2 ? '发生火情' :''}}
										</span></h5>
										<h4>
											<a @click="toactive(item,1)" class="active"><i class="icon iconfont icon-suo-guan-mian- font-gray-ccc" data-toggle="tooltip" title="锁定"></i></a>
											<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
											<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
											<a><span class="badge">
												{{item.alarmsum!=null ? item.alarmsum :''}}
											</span></a>
										</h4>
									</article>
									<var>
										<p class="col-sm-8">
											<template v-if="item.userId!=0 || item.userId!=null">
												<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
												<i class="icon iconfont icon-rengongbaojing-mian-"><span>人工报警</span></i>
											</template>
											<template v-if="item.userId==0 || item.userId==null">
												<i class="icon iconfont icon-shebei-mian-"><span>{{item.deviceMac}}</span></i>
												<i class="icon iconfont icon-miehuoqi-mian-"><span>{{item.deviceTypeName}}</span></i>
											</template>
										</p>
										<p class="col-sm-4">
											<!-- <span class="badge">98s</span> -->
											<span class="badge">{{(""+item.startTime).substring(10)}}</span>
										</p>
									</var>
								</li>
						</ul>
					</div>
					<!-- 隐患列表 -->
					<div class="tab-pane fade" id="danger-list">
						<ul class="early-list list-unstyled" style="height:62vh">
							<!-- 聚合隐患循环li -->
							<li v-for="(item,index) in queryAlarmIng.troubles" :class="item.allCount!=null ? 'early-more' :'early-single'" class="dangers-list">
								<article>
									<h5 @click="dialogVisibles(item,2)"><i class="icon iconfont icon-early"></i>
									<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
									{{item.unitName==null ? '' :item.unitName}}
									{{item.buildingName==null ? '' :item.buildingName}}
									{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
									{{item.roomNumber==null ? '' :item.roomNumber}}
									<span>
										{{item.allCount!=null ? '多处' :''}} 发生隐患
									</span></h5>
									<h4>
										<a @click="toactive(item,2)" class="active"><i class="icon iconfont icon-suo-guan-mian- font-gray-ccc" data-toggle="tooltip" title="锁定"></i></a>
										<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
										<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
										<a><span class="badge">
											{{item.allCount!=null ? item.allCount :''}}
										</span></a>
									</h4>
								</article>
								<var>
									<p class="col-sm-8">
											<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
											<template v-if="item.type==1">
												<i class="icon iconfont icon-sunhuai-mian-"><span>损坏</span></i>
											</template>
											<template v-if="item.type==2">
												<i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-"><span>人为风险</span></i>
											</template>
											<template v-if="item.type==3">
												<i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"><span>非人为风险</span></i>
											</template>
											<template v-if="item.type==4">
												<i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
											</template>
											<template v-if="item.type==5">
												<i class="icon iconfont icon-weixianpin-mian-"><span>危险品</span></i>
											</template>
									</p>
									<p class="col-sm-4">
										<!-- <span class="badge">98s</span> -->
										<span class="badge">{{(""+item.createTime).substring(10)}}</span>
									</p>
								</var>
							</li>
						</ul>
					</div>
					<!-- 复位关闭 -->
					<div class="tab-pane fade" id="ok-list">
						<ul class="early-list list-unstyled" style="height:62vh">
							<!-- 已解决单条隐患循环li -->
							<li v-for="(item,index) in queryAlarmIng.colseAlarm" class="ok-list" :class="[item.alarmsum!=null ? 'early-more' :'early-single',
								item.eventLevel==0 ? 'fault-list' :'',
								item.eventLevel==1 ? 'warning-list' :'',
								item.eventLevel==2 ? 'fire-list' :'',
								]">
									<article>
										<h5 @click="dialogVisibles(item,1)"><i class="icon iconfont icon-early"></i>
										<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
										{{item.unitName==null ? '' :item.unitName}}
										{{item.buildingName==null ? '' :item.buildingName}}
										{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
										{{item.roomNumber==null ? '' :item.roomNumber}}
										<span>
											{{item.alarmsum!=null ? '多处' :''}}
											{{item.eventLevel==0 ? '故障关闭' :''}}
											{{item.eventLevel==1 ? '报警关闭' :''}}
											{{item.eventLevel==2 ? '火情关闭' :''}}
										</span></h5>
										<h4>
											<a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
											<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
											<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
											<a><span class="badge">
												{{item.alarmsum!=null ? item.alarmsum :''}}
											</span></a>
										</h4>
									</article>
									<var>
										<p class="col-sm-8">
											<template v-if="item.userId!=0 || item.userId!=null">
												<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.cancelNickName?item.cancelNickName:'-'}}</span></i>
												<i class="icon iconfont icon-rengongbaojing-mian-"><span>人工报警</span></i>
											</template>
											<template v-if="item.userId==0 || item.userId==null">
												<i class="icon iconfont icon-shebei-mian-"><span>{{item.deviceMac}}</span></i>
												<i class="icon iconfont icon-miehuoqi-mian-"><span>{{item.deviceTypeName}}</span></i>
											</template>
										</p>
										<p class="col-sm-4">
											<!-- <span class="badge">98s</span> -->
											<span class="badge" v-if="item.startTime">{{(""+item.startTime).substring(10)}}</span>
										</p>
									</var>
								</li>
								<li v-for="(item,index) in queryAlarmIng.closeTrouble" class="ok-list dangers-list" :class="item.allCount!=null ? 'early-more' :'early-single'" >
											<article>
												<h5 @click="dialogVisibles(item,2)"><i class="icon iconfont icon-early"></i>
									<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
									{{item.unitName==null ? '' :item.unitName}}
									{{item.buildingName==null ? '' :item.buildingName}}
									{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
									{{item.roomNumber==null ? '' :item.roomNumber}}
									<span>
									{{item.allCount!=null ? '多处' :''}} 隐患关闭
									</span></h5>
												<h4>
									<a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
									<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
									<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
									<a><span class="badge">
										{{item.allCount!=null ? item.allCount :''}}
									</span></a>
									</h4>
											</article>
											<var>
									<p class="col-sm-8">
										<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
										<template v-if="item.type==1">
										<i class="icon iconfont icon-sunhuai-mian-"><span>损坏</span></i>
										</template>
										<template v-if="item.type==2">
										<i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-"><span>人为风险</span></i>
										</template>
										<template v-if="item.type==3">
										<i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"><span>非人为风险</span></i>
										</template>
										<template v-if="item.type==4">
										<i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
										</template>
										<template v-if="item.type==5">
										<i class="icon iconfont icon-weixianpin-mian-"><span>危险品</span></i>
										</template>
									</p>
									<p class="col-sm-4">
									<!-- <span class="badge">98s</span> -->              
									<span class="badge">{{(""+item.createTime).substring(10)}}</span>
									</p>
								</var>
								</li>
						</ul>
					</div>
				</div>
			</div>
			<ul id="early-all" class="early-list list-unstyled">
				<!-- 单条火灾循环li -->

				<li v-for="(item,index) in queryAlarmIng.alarms" :class="[item.alarmsum!=null ? 'early-more' :'early-single',
					item.eventLevel==0 ? 'fault-list' :'',
					item.eventLevel==1 ? 'warning-list' :'',
					item.eventLevel==2 ? 'fire-list' :'',
					]">
								<article>
									<h5 @click="dialogVisibles(item,1)"><i class="icon iconfont icon-early"></i>
						<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
						{{item.unitName==null ? '' :item.unitName}}
						{{item.buildingName==null ? '' :item.buildingName}}
						{{item.floorNumber==null && item.alarmsum==null ||  item.alarmsum>0? '' :item.floorNumber+'层'}}
						{{item.roomNumber==null && item.alarmsum==null ||  item.alarmsum>0? '' :item.roomNumber}}
						<span>
						{{item.alarmsum!=null ? '多处' :''}}
						{{item.eventLevel==0 ? '发生故障' :''}}
						{{item.eventLevel==1 ? '发生报警' :''}}
						{{item.eventLevel==2 ? '发生火情' :''}}
						</span></h5>
									<h4>
						<a @click="toactive(item,1)" class="active"><i class="icon iconfont icon-suo-guan-mian- font-gray-ccc" data-toggle="tooltip" title="锁定"></i></a>
						<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
						<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
						<a><span class="badge">
							{{item.alarmsum!=null ? item.alarmsum :''}}
						</span></a>
						</h4>
								</article>
								<var>
						<p class="col-sm-8">
						<template v-if="item.userId!=0 || item.userId!=null">
							<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
							<i class="icon iconfont icon-rengongbaojing-mian-"><span>人工报警</span></i>
						</template>
						<template v-if="item.userId==0 || item.userId==null">
							<i class="icon iconfont icon-shebei-mian-"><span>{{item.deviceMac}}</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-"><span>{{item.deviceTypeName}}</span></i>
						</template>
						</p>
						<p class="col-sm-4">
						<!-- <span class="badge">98s</span> -->
						<span class="badge">{{(""+item.startTime).substring(10)}}</span>
						</p>
					</var>
				</li>
				<li v-for="(item,index) in queryAlarmIng.troubles" :class="item.allCount!=null ? 'early-more' :'early-single'" class="dangers-list">
							<article>
								<h5 @click="dialogVisibles(item,2)"><i class="icon iconfont icon-early"></i>
					<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
					{{item.unitName==null ? '' :item.unitName}}
					{{item.buildingName==null ? '' :item.buildingName}}
					{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
					{{item.roomNumber==null ? '' :item.roomNumber}}
					<span>
					{{item.allCount!=null ? '多处' :''}} 发生隐患
					</span></h5>
								<h4>
					<a @click="toactive(item,2)" class="active "><i class="icon iconfont icon-suo-guan-mian- font-gray-ccc" data-toggle="tooltip" title="锁定"></i></a>
					<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
					<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
					<a><span class="badge">
						{{item.allCount!=null ? item.allCount :''}}
					</span></a>
					</h4>
							</article>
							<var>
					<p class="col-sm-8">
						<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
						<template v-if="item.type==1">
						<i class="icon iconfont icon-sunhuai-mian-"><span>损坏</span></i>
						</template>
						<template v-if="item.type==2">
						<i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-"><span>人为风险</span></i>
						</template>
						<template v-if="item.type==3">
						<i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"><span>非人为风险</span></i>
						</template>
						<template v-if="item.type==4">
						<i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
						</template>
						<template v-if="item.type==5">
						<i class="icon iconfont icon-weixianpin-mian-"><span>危险品</span></i>
						</template>
					</p>
					<p class="col-sm-4">
					<!-- <span class="badge">98s</span> -->              
					<span class="badge">{{(""+item.createTime).substring(10)}}</span>
					</p>
				</var>
				</li>
				
				<li v-for="(item,index) in queryAlarmIng.colseAlarm" class="ok-list" :class="[item.alarmsum!=null ? 'early-more' :'early-single',
					item.eventLevel==0 ? 'fault-list' :'',
					item.eventLevel==1 ? 'warning-list' :'',
					item.eventLevel==2 ? 'fire-list' :'',
					]">
								<article>
									<h5 @click="dialogVisibles(item,1)"><i class="icon iconfont icon-early"></i>
						<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
						{{item.unitName==null ? '' :item.unitName}}
						{{item.buildingName==null ? '' :item.buildingName}}

						{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
						{{item.roomNumber==null ? '' :item.roomNumber}}
						<span>
						{{item.alarmsum!=null ? '多处' :''}}
						{{item.eventLevel==0 ? '故障关闭' :''}}
						{{item.eventLevel==1 ? '报警关闭' :''}}
						{{item.eventLevel==2 ? '火情关闭' :''}}
						</span></h5>
									<h4>
						<a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
						<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
						<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
						<a><span class="badge">
							{{item.alarmsum!=null ? item.alarmsum :''}}
						</span></a>
						</h4>
								</article>
								<var>
						<p class="col-sm-8">
						<template v-if="item.userId!=0 || item.userId!=null">
							<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.cancelNickName?item.cancelNickName:'-'}}</span></i>
							<i class="icon iconfont icon-rengongbaojing-mian-"><span>人工报警</span></i>
						</template>
						<template v-if="item.userId==0 || item.userId==null">
							<i class="icon iconfont icon-shebei-mian-"><span>{{item.deviceMac}}</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-"><span>{{item.deviceTypeName}}</span></i>
						</template>
						</p>
						<p class="col-sm-4">
						<!-- <span class="badge">98s</span> -->
						<span class="badge">{{(""+item.startTime).substring(10)}}</span>
						</p>
					</var>
				</li>

				<li v-for="(item,index) in queryAlarmIng.closeTrouble" class="ok-list dangers-list" :class="item.allCount!=null ? 'early-more' :'early-single'" >
							<article>
								<h5 @click="dialogVisibles(item,2)"><i class="icon iconfont icon-early"></i>
					<!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
					{{item.unitName==null ? '' :item.unitName}}
					{{item.buildingName==null ? '' :item.buildingName}}
					{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
					{{item.roomNumber==null ? '' :item.roomNumber}}
					<span>
					{{item.allCount!=null ? '多处' :''}} 隐患关闭
					</span></h5>
								<h4>
					<a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
					<a @click="toMapPoint(item)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
					<a><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
					<a><span class="badge">
						{{item.allCount!=null ? item.allCount :''}}
					</span></a>
					</h4>
							</article>
							<var>
					<p class="col-sm-8">
						<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
						<template v-if="item.type==1">
						<i class="icon iconfont icon-sunhuai-mian-"><span>损坏</span></i>
						</template>
						<template v-if="item.type==2">
						<i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-"><span>人为风险</span></i>
						</template>
						<template v-if="item.type==3">
						<i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"><span>非人为风险</span></i>
						</template>
						<template v-if="item.type==4">
						<i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
						</template>
						<template v-if="item.type==5">
						<i class="icon iconfont icon-weixianpin-mian-"><span>危险品</span></i>
						</template>
					</p>
					<p class="col-sm-4">
					<!-- <span class="badge">98s</span> -->              
					<span class="badge">{{(""+item.createTime).substring(10)}}</span>
					</p>
				</var>
				</li>

			</ul>
		</section>
		<template class="audiostyle">
			<!-- <audio src="/i/song.ogg" controls="controls">
      </audio> -->
			<div id="audioBox"></div>
		</template>
		<!-- 弹窗 -->
		<el-dialog title="" :visible.sync="dialogVisible" top="120px">
			<el-tooltip class="item" content="关闭" placement="top">
				<a class="go-back" @click="dialogVisible = false"><i class="el-icon-circle-close-outline size-24"></i></a>
				</el-tooltip>
			<earlyinfo-vue></earlyinfo-vue>
		</el-dialog>
	</div>

</template>

<script>
	import earlyinfoVue from "../publick/earlyinfo";
	import { mapState } from "vuex";
	import sockjs from "sockjs-client";
	import moment from "moment";
	
	import { realconsole } from "../../assets/js/management.js";
	var Stomp = require("@stomp/stompjs");
	export default {
		components: {
			"earlyinfo-vue": earlyinfoVue
		},
		// 数据接入

		data() {
			return {
				getunitid: null,
				// 弹报警详情
				dialogVisible: false,
				torightdatas: Object,
				getUnitsSynthesis_parmar: {
					unitId: null
				},
				getUnitsSynthesis: Object,
				queryAlarmIng_parmar: {
					unitid: null,
					type: 1
				},
				queryAlarmIng: Object,
				queryAlarmlength:0,
				queryTroublelength:0,
				queryCloselength:0,
				// socketid:''
				websock: null,
				tounpdateIndex: 1,
				myAudio: Object,
				mp3arr: [
					require("../../assets/mp3/login.mp3"),
					require("../../assets/mp3/login.mp3")
				],
				socketcodes: {},
				socketIs: 1,
				queryUnitInfo_parmar:{
					unitId:0
				},
				queryUnitInfo:Object,
				queryUnitInfoinfo:Object,
				queryUnitInfoinfoa:'',
				queryUnitInfoinfob:'',
				queryUnitInfoinfoc:'',
				queryUnitInfoimg:require('../../assets/images/jpg01.jpg'),
				defaultImg:'this.src="' +require('../../assets/images/jpg01.jpg') + '"',
				activeAlarmArr:{},
				activeTroubleArr:{}
			};
		},
		computed: mapState(["torightdata", "unitid", "userinfo","dialogVisiblehide"]),
		watch: {
			torightdata() {
				this.torightdatas = this.torightdata;
			},
			unitid() {
				if(this.unitid != 0) {
					this.getunitid = this.unitid;
				} else {
					this.getunitid = null;
				}
				this.getUnitsSynthesis_parmar.unitId = this.getunitid;
				this.queryAlarmIng_parmar.unitId = this.getunitid;
				this.queryUnitInfo_parmar.unitId=this.getunitid;
				if(this.getunitid==null){
					this.queryUnitInfo_parmar.unitId=0;
				}
				this.getgetUnitsSynthesis();
				this.getqueryAlarmIng(1);
				this.getqueryUnitInfo();
			},
			dialogVisiblehide(){
				this.dialogVisible=true;
				this.$store.commit("aleamAndtroubleInfo", [this.dialogVisiblehide[0],this.dialogVisiblehide[1],this.tounpdateIndex++]);
			}
		},
		// 调用方法
		methods: {
			// 单个锁定位置
			toMapPoint(item){
				this.$store.commit("toMapPoint",item);
			},
			//锁定方法
			// type
			// 		=1,传入报警
			// 		=2,传入隐患
			toactive(item,type){
				if(type==1){
					this.activeAlarmArr[item.id]=true;
				}else if(type==2){
					this.activeTroubleArr[item.id]=true;
				}
				console.log(this.activeAlarmArr);
				console.log(this.activeTroubleArr);
			},
			// 向单挑详情传值
			dialogVisibles(item,type){
				if(type==1){
					if(item.alarmsum!=null){
						this.dialogVisible=false;
					}else{
						this.dialogVisible=true;
					}
				}else if(type==2){
					if(item.allCount!=null){
						this.dialogVisible=false;
					}else{
						this.dialogVisible=true;
					}
				}
				this.$store.commit("aleamAndtroubleInfo", [item,type,this.tounpdateIndex++]);
			},
			openEarlyList() {
				$(".unit-info").slideToggle(function() {
					$(".unit-btn-close").toggle();
					$(".unit-btn-open").toggle();
					$(".early-warning").toggleClass("scrollheight");
					$(".early-tab").toggleClass("hide");
					$("#early-all").toggleClass("hide");
				});
			},
			connect() {
				// alert(typeof this.socket);
				var that = this;
				//console.log("去链接。。。");
				var socket = new sockjs("http://api.nanninglq.51play.com/socket");
				// alert(typeof this.socket);
				var stompClient = Stomp.over(socket);
				stompClient.connect({},
					function(frame) {
						//console.log("Connected: " + frame);
						//广播消息
						stompClient.subscribe("/topic/broadcast", function(data) {
							// console.info("receive a broadcast message");
							// that.runCallback(data);
							// //console.log(data);
						});
						//点对点
						stompClient.subscribe("/user/topic/p2p", function(data) {
							// console.info("receive a p2p message");
							var message = JSON.parse(data.body);
							var opt = message.data.opt;
							//console.log(opt.code);
							if(!that.socketcodes[opt.code]) {
								that.runCallback(data, that);
								that.$store.commit(
									"toIndexLeftAlarmChar",
									"更新" + that.tounpdateIndex++
								);
								that.getgetUnitsSynthesis();
								that.socketcodes[opt.code] = true;
								//console.log(1);
							}
						});
						sessionStorage.socketcode=1;
						console.log("socket->  链接成功");
					},
					function(e) {
						console.error("connection closed, retry in 5 seconds");
						setTimeout("connect()", 5000);
						//console.log("创建链接失败。。。");
					}
				);
			},
			runCallback(data, that) {
				var message = JSON.parse(data.body);
				var opt = message.data.opt;

				// 人工报警和设备报警
				if(opt.type == 1 || opt.type == 2) {
					that.getqueryAlarmIng(2, opt.type);
					this.openpanl(opt.type, opt);
				}
				// 确认火情
				if(opt.type == 5) {
					that.getqueryAlarmIng(3, opt.type);
					this.openpanl(opt.type, opt);
				}
				if(opt.type == 20) {
					that.getqueryAlarmIng(20, opt.type);
					this.openpanl(opt.type, opt);
				}
				// 关闭火情
				if(opt.type == 6 || opt.type == 3) {
					that.getqueryAlarmIng(4, opt.type);
					this.openpanl(opt.type, opt);
				}
				// 发现隐患
				if(opt.type == 9) {
					that.getqueryAlarmIng(9, opt.type);
					this.openpanl(opt.type, opt);
				}
				// 解决隐患
				if(opt.type == 10) {
					that.getqueryAlarmIng(10, opt.type);
					this.openpanl(opt.type, opt);
				}
				if(opt.title != null || opt.title != "") {
					this.getmp3new(
						"http://api.nanninglq.51play.com/alarm/getAlarmAudio?content=" +
						opt.title
					);
				}
			},

			getgetUnitsSynthesis() {
				this.$fetch(
					"/api/unit/getUnitsSynthesis",
					this.getUnitsSynthesis_parmar
				).then(response => {
					if(response.data) {
						this.getUnitsSynthesis = response.data.result;
					}
				});
			},

			getqueryUnitInfo() {
				this.$fetch(
					"/api/unit/queryUnitInfo",
					this.queryUnitInfo_parmar
				).then(response => {
					if(response.data) {
						this.queryUnitInfo = response.data;
						this.queryUnitInfoinfo=response.data.unitInfo
						if(this.queryUnitInfoinfo!=null){
							this.queryUnitInfoinfoa=response.data.unitInfo.name;
							this.queryUnitInfoinfob=response.data.unitInfo.location;
							this.queryUnitInfoinfoc=response.data.unitInfo.firemenName;
						}
						if(this.queryUnitInfo_parmar.unitId==null || this.queryUnitInfo_parmar.unitId==0){
							this.queryUnitInfoimg = require('../../assets/images/jpg01.jpg');
						}else{
							this.queryUnitInfoimg = 'http://img.nanninglq.51play.com/xf/api/unit_img/'+this.queryUnitInfo_parmar.unitId+'.jpg';
						}
					}
				});
			},

			// type:
			// =1 正常请求画图
			// =2 只请求报警和火情
			// =3 确认报警
			// =4 关闭火情

			getqueryAlarmIng(type, opttype) {
				// alert(type);
				this.queryAlarmIng = Object;
				this.$fetch("/api/alarm/queryAlarmIng", this.queryAlarmIng_parmar).then(
					response => {
						if(response.data) {
							this.queryAlarmIng = response.data;
							this.queryAlarmlength=response.data.alarms.length;
							this.queryTroublelength=response.data.troubles.length;
							this.queryCloselength=response.data.colseAlarm.length+response.data.closeTrouble.length;
							//console.log(this.queryAlarmIng);
							this.$store.commit("indexToAlarmTroubel", [
								this.queryAlarmIng,
								type
							]);
						}
					}
				);
			},
			// 勿改,MP3麻烦的很
			getmp3new(mp3) {
				this.mp3arr.push(mp3);
				this.mp3arr.push(require("../../assets/mp3/login.mp3"));
				if(this.mp3arr.length > 0) {
					this.myAudio.addEventListener("ended", this.playEndedHandler, false);
					this.myAudio.play();
				}
				let that = this;
			},
			// 勿改,MP3麻烦的很
			getmp3() {
				let myAudio = this.myAudio;
				this.myAudio = new Audio();
				this.myAudio.preload = true;
				this.myAudio.controls = false;
				this.myAudio.src = this.mp3arr.shift();
				this.myAudio.addEventListener("ended", this.playEndedHandler, false);
				this.myAudio.play();
				document.getElementById("audioBox").appendChild(this.myAudio);
				this.myAudio.loop = false;
				let that = this;
			},
			// 勿改,MP3麻烦的很
			playEndedHandler() {
				this.myAudio.src = this.mp3arr.shift();
				this.myAudio.play();
				if(this.mp3arr.length > 0) {
					//console.log("--");
				} else {
					//console.log("-");
					this.myAudio.removeEventListener("ended", this.playEndedHandler, false);
				}
			},
			openpanl(type, item) {
				// 报警
				var icon = "icon-baojing-xian-";
				var title = "报警";
				var position = "经典大厦";
				var people = "段亚伟";
				var time = "";
				var style = "panlset-red";
				if(type == 1 || type == 2) {
					icon = "icon-baojing-xian-";
					title = "报警";
					style = "panlset-red";
				}
				// 确认火情
				if(type == 5) {
					icon = "icon-baojing-xian-";
					title = "火情";
					style = "panlset-red";
				}
				// 关闭火情
				if(type == 6 || type == 3 || type == 20) {
					icon = "icon-baojing-xian-";
					title = "关闭";
					style = "panlset-blue";
				}
				if(type == 9) {
					icon = "icon-feirenweiyinsuyinhuan-xian-1";
					title = "隐患";
					style = "panlset-yellow";
				}
				if(type == 10) {
					icon = "icon-feirenweiyinsuyinhuan-xian-1";
					title = "关闭";
					style = "panlset-blue";
				}

				var html =
					`
        <div class='row font-black' style='width:600px;'>
          <div class='col-sm-3 notify-left size-26'>
            <i class='icon iconfont ` +
					icon +
					` size-48'></i>
            <span class='size-20'>` +
					title +
					`</span>
          </div>
          <div class='col-sm-9 notify-right'>
            <P>` +
					item.title +
					`</p>
            <P class='size-12'>
            <i class="icon iconfont icon-xunjianyuan-mian-"><span>` +
					item.time +
					`</span></i>
            </p>
          </div>
        </div>
      `;
				this.$notify({
					// title: '提示',
					dangerouslyUseHTMLString: true,
					customClass: style,
					message: html,
					duration: 0
				});
			},
			getuserinfo() {
				this.getuserinfos = this.userinfo;
			}
		},
		// 默认加载方法
		mounted() {
			// console.log(panzoom);
			if(sessionStorage.unitid != undefined || sessionStorage.unitid != "") {
				this.getUnitsSynthesis_parmar.unitId = sessionStorage.unitid;
				this.queryAlarmIng_parmar.unitId = sessionStorage.unitid;
				this.queryUnitInfo_parmar.unitId=sessionStorage.unitid;
				if(sessionStorage.unitid==undefined){
					this.queryUnitInfo_parmar.unitId=0;
				}
				
			}
			if(sessionStorage.unitid == 0) {
				this.getUnitsSynthesis_parmar.unitId = null;
				this.queryAlarmIng_parmar.unitId = null;
				this.queryUnitInfo_parmar.unitId=0;
			}

			this.socketIs++;
			// realconsole();

			this.getgetUnitsSynthesis();
			// alert(this.queryAlarmIng_parmar.unitid);
			this.getqueryAlarmIng(1);
			this.getqueryUnitInfo();
			// alert(sessionStorage.socketcode);
			if(sessionStorage.socketcode!=1){
				this.connect();
			}
			
			// onload(()=>{
			// 	alert(123);
			// })
			this.getmp3();

		},
		
		
	};
</script>
