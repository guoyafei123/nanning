<template>
	<div class="toolright font-white margin-top0 padding-top0">
		<!-- 单位信息 -->
		<section class="unit-info border-solid-333 clearfix bg-black">
			<ul class="list-unstyled">
				<!-- 介绍 -->
				<li class="position-relative">
					<template>
						<div class="position-absolute-bottom clearfix">
							<!-- 单位信息 -->
							<article class="unit-brief white-space col-sm-10" v-if="queryUnitInfo_parmar.unitId!=0">
								<h3 class="size-20">{{queryUnitInfoinfo.name}}</h3>
								<small><i class="el-icon-location"></i> {{queryUnitInfoinfo.location}}</small>
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
					<img :src="queryUnitInfoimg" :onerror="defaultImg" class="img-responsive center-block" alt="单位图片">
				</li>
				<!-- 统计1 -->
				<li>
					<div class="pull-left">
						<h4>{{queryUnitInfoinfo.firemenName}} </h4>
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
				<li v-if="(typeof this.aleamAndtroubleInfos['countOfAlarm']) != 'undefined'">
					<ul id="early-all" class="early-list list-unstyled">
						<li :class="[aleamAndtroubleInfos.alarmsum!=null ? 'early-more' :'early-single',
								aleamAndtroubleInfos.eventLevel==0 ? 'fault-list' :'',
								aleamAndtroubleInfos.eventLevel==1 ? 'warning-list' :'',
								aleamAndtroubleInfos.eventLevel==2 ? 'fire-list' :'',
								]">
											<article>
												<h5 @click="dialogVisibles(aleamAndtroubleInfos)"><i class="icon iconfont icon-early"></i>
							<!-- {{aleamAndtroubleInfos.unitName+' '+aleamAndtroubleInfos.buildingName+' '+aleamAndtroubleInfos.floorNumber==null?'':''+aleamAndtroubleInfos.roomNumber}} -->
							{{aleamAndtroubleInfos.unitName==null ? '' :aleamAndtroubleInfos.unitName}}
							{{aleamAndtroubleInfos.buildingName==null ? '' :aleamAndtroubleInfos.buildingName}}
							{{aleamAndtroubleInfos.floorNumber==null ? '' :aleamAndtroubleInfos.floorNumber+'层'}}
							{{aleamAndtroubleInfos.roomNumber==null ? '' :aleamAndtroubleInfos.roomNumber}}
							<span class="font-red">
							{{aleamAndtroubleInfos.alarmsum!=null ? '多处' :''}}
							{{aleamAndtroubleInfos.eventLevel==0 ? '发生故障' :''}}
							{{aleamAndtroubleInfos.eventLevel==1 ? '发生报警' :''}}
							{{aleamAndtroubleInfos.eventLevel==2 ? '发生火情' :''}}
							</span></h5>
												<h4>
							<!-- <a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
							<a @click="dialogVisibles(aleamAndtroubleInfos)"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a> -->
							<a href=""><span class="badge">
								{{aleamAndtroubleInfos.alarmsum!=null ? aleamAndtroubleInfos.alarmsum :''}}
							</span></a>
							</h4>
											</article>
											<var>
							<p class="col-sm-8">
							<template v-if="aleamAndtroubleInfos.userId!=0 || aleamAndtroubleInfos.userId!=null">
								<i class="icon iconfont icon-xunjianyuan-mian-"><span>{{aleamAndtroubleInfos.nickName}}</span></i>
								<i class="icon iconfont icon-rengongbaojing-mian-"><span>人工报警</span></i>
							</template>
							<template v-if="aleamAndtroubleInfos.userId==0 || aleamAndtroubleInfos.userId==null">
								<i class="icon iconfont icon-shebei-mian-"><span>{{aleamAndtroubleInfos.deviceMac}}</span></i>
								<i class="icon iconfont icon-miehuoqi-mian-"><span>{{aleamAndtroubleInfos.deviceTypeName}}</span></i>
							</template>
							</p>
							<p class="col-sm-4">
							<!-- <span class="badge">98s</span> -->
							<span class="badge">{{(aleamAndtroubleInfos.startTime).split(' ')[1]}}</span>
							</p>
						</var>
						</li>
					</ul>
				</li>
				<li v-if="(typeof this.aleamAndtroubleInfos['countOfAlarm']) == 'undefined'">
					<ul id="early-all" class="early-list list-unstyled">
						<li :class="aleamAndtroubleInfos.allCount!=null ? 'early-more' :'early-single'" class="dangers-list">
					<article>
						<h5 @click="dialogVisibles(aleamAndtroubleInfos)"><i class="icon iconfont icon-early"></i>
            <!-- {{aleamAndtroubleInfos.unitName+' '+aleamAndtroubleInfos.buildingName+' '+aleamAndtroubleInfos.floorNumber==null?'':''+aleamAndtroubleInfos.roomNumber}} -->
            {{aleamAndtroubleInfos.unitName==null ? '' :aleamAndtroubleInfos.unitName}}
            {{aleamAndtroubleInfos.buildingName==null ? '' :aleamAndtroubleInfos.buildingName}}
            {{aleamAndtroubleInfos.floorNumber==null ? '' :aleamAndtroubleInfos.floorNumber+'层'}}
            {{aleamAndtroubleInfos.roomNumber==null ? '' :aleamAndtroubleInfos.roomNumber}}
            <span class="font-yellow">
              {{aleamAndtroubleInfos.allCount!=null ? '多处' :''}} 发生隐患
            </span></h5>
						<h4>
              <a href=""><span class="badge">
                {{aleamAndtroubleInfos.allCount!=null ? aleamAndtroubleInfos.allCount :''}}
              </span></a>
            </h4>
					</article>
					<var>
            <p class="col-sm-8">
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>{{aleamAndtroubleInfos.nickName}}</span></i>
                <template v-if="aleamAndtroubleInfos.type==1">
                  <i class="icon iconfont icon-sunhuai-mian-"><span>损坏</span></i>
                </template>
                <template v-if="aleamAndtroubleInfos.type==2">
                  <i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-"><span>人为风险</span></i>
                </template>
                <template v-if="aleamAndtroubleInfos.type==3">
                  <i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"><span>非人为风险</span></i>
                </template>
                <template v-if="aleamAndtroubleInfos.type==4">
                  <i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
                </template>
                <template v-if="aleamAndtroubleInfos.type==5">
                  <i class="icon iconfont icon-weixianpin-mian-"><span>危险品</span></i>
                </template>
            </p>
            <p class="col-sm-4">
              <!-- <span class="badge">98s</span> -->
              <span class="badge">{{(aleamAndtroubleInfos.createTime).split(' ')[1]}}</span>
            </p>
          </var>
				</li>
					</ul>
				</li>
			</ul>
		</section>
		<section v-if="(typeof this.aleamAndtroubleInfos['countOfAlarm']) != 'undefined'" class="call-iteminfo margin-top10 size-12">
			<section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">报警发起
						<span class="float-right">
							<!-- <span class="bgbox-min bg-blue font-black size-10">
							<i class="icon iconfont icon-jiankong-mian-"></i> 监控</span> -->
						</span>
					</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-7">
							<span>警 报 源 </span>
							<strong>
								<template v-if="aleamAndtroubleInfos.userId!=0 || aleamAndtroubleInfos.userId!=null">
									<span>{{aleamAndtroubleInfos.nickName}}</span>
								</template>
								<template v-if="aleamAndtroubleInfos.userId==0 || aleamAndtroubleInfos.userId==null">
									<span>{{aleamAndtroubleInfos.deviceTypeName}}</span>
								</template>
							</strong>
						</div>
						<div class="col-sm-5">
							<span>报警类型 </span>
							<strong>
								<template v-if="aleamAndtroubleInfos.userId!=0 || aleamAndtroubleInfos.userId!=null">
									<span>人工</span>
								</template>
								<template v-if="aleamAndtroubleInfos.userId==0 || aleamAndtroubleInfos.userId==null">
									<span>设备</span>
								</template>
							</strong>
						</div>
						<div class="col-sm-12">
							<span>发生地点 </span>
							<strong>
								{{aleamAndtroubleInfos.unitName==null ? '' :aleamAndtroubleInfos.unitName}}
								{{aleamAndtroubleInfos.buildingName==null ? '' :aleamAndtroubleInfos.buildingName}}
								{{aleamAndtroubleInfos.floorNumber==null ? '' :aleamAndtroubleInfos.floorNumber+'层'}}
								{{aleamAndtroubleInfos.roomNumber==null ? '' :aleamAndtroubleInfos.roomNumber}}
							</strong>
						</div>
						<!-- <div class="col-sm-7">
							<span>确 认 人 </span>
							<strong>{{aleamAndtroubleInfos.confirmNickName?aleamAndtroubleInfos.confirmNickName:'-'}}</strong>
						</div> -->
						<div class="col-sm-5">
							<span>响应时间 </span>
							<strong class="font-blue">
								{{aleamAndtroubleInfoTime}}
							</strong>
						</div>
						<div class="col-sm-12">
							<span>报警描述 </span>
							<strong>
                          <!-- <span class="bgbox-voice bg-blue font-black">
                              <i class="icon iconfont icon-tongzhi-xian-"></i> 32S
							  </span> -->
                          <span>{{aleamAndtroubleInfos.remark?aleamAndtroubleInfos.remark:'-'}}</span>
                      </strong>
						</div>
						<div class="textandimg-img imgs-nthof">
							<template v-for="item in getAlarmDetails.addAlarmImgList">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
									<video :src="item" width="100%" controls="controls"></video>
								</div>
							</template>
							<template v-for="item in getAlarmDetails.addAlarmImgList">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
									<img :src="item">
								</div>
							</template>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="textandimg margin-top20" v-if="aleamAndtroubleInfos.eventLevel==2">
					<h4 class="p-title">报警确认</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-7">
							<span>确认人 </span>
							<strong>{{aleamAndtroubleInfos.confirmNickName}}</strong>
						</div>
						<!-- <div class="col-sm-5">
							<span>指派给 </span>
							<strong>{{aleamAndtroubleInfos.confirmNickName}}</strong>
						</div> -->
						<div class="col-sm-12">
							<span>解除时长 </span>
							<strong class="font-blue">{{aleamAndtroubleInfoTimeconfirm}}</strong>
						</div>
						<div class="col-sm-12">
							<span>反馈信息 </span>
							<strong>
                          <!-- <span class="bgbox-voice bg-blue font-black">
                              <i class="icon iconfont icon-tongzhi-xian-"></i> 32S</span> -->
                          <span>{{aleamAndtroubleInfos.confirmReason}}</span>
                      </strong>
						</div>
						<div class="textandimg-img imgs-nthof">
							<template v-for="item in getAlarmDetails.confirmAlarmImgList">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
									<video :src="item" width="100%" controls="controls"></video>
								</div>
							</template>
							<template v-for="item in getAlarmDetails.confirmAlarmImgList">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
									<img :src="item">
								</div>
							</template>
						</div>
					</div>
				</div>
			</section>
			<!-- <section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">报警关闭</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-12">
							<span>确 认 人 </span>
							<strong>段亚伟(管理员)</strong>
						</div>
						<div class="col-sm-12">
							<span>关闭说明 </span>
							<strong>设备质量不行,乱报警</strong>
						</div>
					</div>
				</div>
			</section> -->
		</section>

		<section v-if="(typeof this.aleamAndtroubleInfos['countOfAlarm']) == 'undefined'" class="call-iteminfo margin-top10 size-12">
			<section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">隐患发起
						<span class="float-right">
							<span class="bgbox-min bg-blue font-black size-10">
							<i class="icon iconfont icon-jiankong-mian-"></i> 监控</span>
						</span>
					</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-7">
							<span>隐 患 源 </span>
							<strong class="size-12">
								{{aleamAndtroubleInfos.idCode}}
							</strong>
						</div>
						<div class="col-sm-5">
							<span>隐患类型 </span>
							<strong>
								<template v-if="aleamAndtroubleInfos.type==1">
								<i class="icon iconfont icon-sunhuai-mian- size-12"><span>损坏</span></i>
								</template>
								<template v-if="aleamAndtroubleInfos.type==2">
								<i class="icon iconfont icon-feirenweiyinsuyinhuan-mian- size-12"><span>人为风险</span></i>
								</template>
								<template v-if="aleamAndtroubleInfos.type==3">
								<i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1 size-12"><span>非人为风险</span></i>
								</template>
								<template v-if="aleamAndtroubleInfos.type==4">
								<i class="icon iconfont icon-queshi-mian- size-12"><span>缺失</span></i>
								</template>
								<template v-if="aleamAndtroubleInfos.type==5">
								<i class="icon iconfont icon-weixianpin-mian- size-12"><span>危险品</span></i>
								</template>
							</strong>
						</div>
						<div class="col-sm-12">
							<span>发生地点 </span>
							<strong>
								{{aleamAndtroubleInfos.unitName==null ? '' :aleamAndtroubleInfos.unitName}}
								{{aleamAndtroubleInfos.buildingName==null ? '' :aleamAndtroubleInfos.buildingName}}
								{{aleamAndtroubleInfos.floorNumber==null ? '' :aleamAndtroubleInfos.floorNumber+'层'}}
								{{aleamAndtroubleInfos.roomNumber==null ? '' :aleamAndtroubleInfos.roomNumber}}
							</strong>
						</div>
						<div class="col-sm-7">
							<span>确 认 人 </span>
							<strong>{{aleamAndtroubleInfos.nickName}}</strong>
						</div>
						<div class="col-sm-5">
							<span>响应时间 </span>
							<strong class="font-blue">刘健</strong>
						</div>
						<div class="col-sm-12">
							<span>隐患描述 </span>
							<strong>
                          <!-- <span class="bgbox-voice bg-blue font-black">
                              <i class="icon iconfont icon-tongzhi-xian-"></i> 32S</span> -->
                          <span>{{aleamAndtroubleInfos.cont}}</span>
                      </strong>
						</div>
						<div class="textandimg-img imgs-nthof" v-if="troubleDetails.imgUrl">
							<template v-for="item in troubleDetails.imgUrl">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
									<video :src="item" width="100%" controls="controls"></video>
								</div>
							</template>
							<template v-for="item in troubleDetails.imgUrl">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
									<img :src="item">
								</div>
							</template>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">隐患确认</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-7">
							<span>解除人 </span>
							<strong>{{aleamAndtroubleInfos.reviewerName?aleamAndtroubleInfos.reviewerName:'-'}}</strong>
						</div>
						<!-- <div class="col-sm-5">
							<span>指派给 </span>
							<strong>赵堆船(无响应)</strong>
						</div> -->
						<div class="col-sm-12">
							<span>解除时长 </span>
							<strong class="font-blue">{{relieveTroubleTime}}</strong>
						</div>
						<div class="col-sm-12">
							<span>反馈信息 </span>
							<strong>
                          <!-- <span class="bgbox-voice bg-blue font-black">
                              <i class="icon iconfont icon-tongzhi-xian-"></i> 32S</span> -->
                          <span>{{aleamAndtroubleInfos.treatment?aleamAndtroubleInfos.treatment:'-'}}</span>
                      </strong>
						</div>
						<div class="textandimg-img imgs-nthof" v-if="troubleDetails.confirmUrls">
							<template v-for="item in troubleDetails.confirmUrls">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
									<video :src="item" width="100%" controls="controls"></video>
								</div>
							</template>
							<template v-for="item in troubleDetails.confirmUrls">
								<div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
									<img :src="item">
								</div>
							</template>
						</div>
					</div>
				</div>
			</section>
			<!-- <section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">隐患关闭</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-12">
							<span>确 认 人 </span>
							<strong>段亚伟(管理员)</strong>
						</div>
						<div class="col-sm-12">
							<span>关闭说明 </span>
							<strong>设备质量不行,乱报警</strong>
						</div>
					</div>
				</div>
			</section> -->
		</section>
	</div>
</template>

<script>
	import moment from "moment";
	import { mapState } from "vuex";
	export default {
		data() {
			return {
				aleamAndtroubleInfos: Object,
				queryUnitInfoimg: require('../../assets/images/jpg01.jpg'),
				defaultImg: 'this.src="' + require('../../assets/images/jpg01.jpg') + '"',
				queryUnitInfo_parmar: {
					unitId: 0
				},
				queryUnitInfo: Object,
				queryUnitInfoinfo: Object,
				getUnitsSynthesis_parmar: {
					unitId: null
				},
				getUnitsSynthesis: Object,
				aleamAndtroubleInfoTime:'',
				aleamAndtroubleInfoTimeconfirm:'',
				getAlarmDetail_parmar:{
					alarmId:null
				},
				getAlarmDetails:Object,
				troubleDetail_parmar:{
					troubleId:null
				},
				troubleDetails:Object,
        relieveTroubleTime : ''

			}
		},
		computed: mapState([
			'aleamAndtroubleInfo'
		]),
		watch: {
			aleamAndtroubleInfo() {
				this.fn();
			}
		},
		methods: {
			fn() {
				this.aleamAndtroubleInfos = this.aleamAndtroubleInfo[0];
				this.queryUnitInfo_parmar.unitId = this.aleamAndtroubleInfos.unitId;
				this.getUnitsSynthesis_parmar.unitId = this.aleamAndtroubleInfos.unitId;
				this.getAlarmDetail_parmar.alarmId=this.aleamAndtroubleInfos.id;
				this.troubleDetail_parmar.troubleId=this.aleamAndtroubleInfos.id;
				// alert(this.aleamAndtroubleInfos.id)
				this.getqueryUnitInfo();
				this.getgetUnitsSynthesis();
				if((typeof this.aleamAndtroubleInfos['countOfAlarm']) != 'undefined'){
					// 报警详情
					this.getAlarmDetail();
          let a = new Date(this.aleamAndtroubleInfos.startTime).getTime();
          let confrimTime = this.aleamAndtroubleInfos.confirmTime;
          let b = new Date().getTime();
          if(confrimTime != null){
            b = new Date(confrimTime).getTime();
          }
          let responseMillisecond = moment.duration(b - a, 'ms')
          let responseTime = responseMillisecond.get('hours') +':' + responseMillisecond.get('minutes') + ':' + responseMillisecond.get('seconds');
          this.aleamAndtroubleInfoTime = responseTime; //设置响应时长
          let cancelTime = this.aleamAndtroubleInfos.cancelTime;//
          let relieveTime = '';
          if(cancelTime != null){
            b = new Date(cancelTime).getTime();
            let cancelMillisecond = moment.duration(b - a, 'ms');
            relieveTime = cancelMillisecond.get('hours') +':' + cancelMillisecond.get('minutes') + ':' + cancelMillisecond.get('seconds');
          }
          this.aleamAndtroubleInfoTimeconfirm = relieveTime; //设置解除时长
				}else{
					// 隐患详情
					this.troubleDetail();
          let a = new Date(this.aleamAndtroubleInfos.createTime).getTime();
          let reviewTime = this.aleamAndtroubleInfos.reviewTime;
          let b = new Date().getTime();
          let responseTime = '-';
          if(reviewTime != null){
            b = new Date(reviewTime).getTime();
            let responseMillisecond = moment.duration(b - a, 'ms')
            responseTime = responseMillisecond.get('hours') +':' + responseMillisecond.get('minutes') + ':' + responseMillisecond.get('seconds');
          }

          this.relieveTroubleTime = responseTime;
				}
				
				
			},
			getqueryUnitInfo() {
				this.$fetch(
					"/api/unit/queryUnitInfo",
					this.queryUnitInfo_parmar
				).then(response => {
					if(response.data) {
						this.queryUnitInfo = response.data;
						this.queryUnitInfoinfo = response.data.unitInfo
						if(this.queryUnitInfo_parmar.unitId == null || this.queryUnitInfo_parmar.unitId == 0) {
							this.queryUnitInfoimg = require('../../assets/images/jpg01.jpg');
						} else {
							this.queryUnitInfoimg = 'http://img.nanninglq.51play.com/xf/api/unit_img/' + this.queryUnitInfo_parmar.unitId + '.jpg';
						}
					}
				});
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
			getAlarmDetail() {
				this.$fetch(
					"/api/alarm/getAlarmDetail",
					this.getAlarmDetail_parmar
				).then(response => {
					if(response.data) {
						this.getAlarmDetails = response.data.alarm;
					}
				});
			},
			troubleDetail() {
				this.$fetch(
					"/api/trouble/troubleDetail",
					this.troubleDetail_parmar
				).then(response => {
					if(response.data) {
						this.troubleDetails = response.data.trouble;
					}
				});
			},

		},
		mounted() {
			this.fn();
		}
	}
</script>
