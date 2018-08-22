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
								<h1 class="font-red">12</h1>
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
							<h4>367</h4>
							<small>今日警报</small>
						</article>
						<article>
							<h4>214</h4>
							<small>今日隐患</small>
						</article>
						<article>
							<h4>12</h4>
							<small>巡检完成</small>
						</article>
					</div>
				</li>
				<li>
					<!-- 报警信息 -->
					<ul class="early-list list-unstyled">
						<li class="early-single warning-list">
							<article>
								<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生警报</span></h5>
								<h4>              
                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
                  <a href=""><i class="fas fa-bullseye" title="详情"></i></a>
                  <a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
                  <a href=""><span class="badge">1</span></a>
                </h4>
							</article>
							<var>
                <p class="col-sm-8">
                  <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                  <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                </p>
                <p class="col-sm-4">              
                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                </p>
              </var>
						</li>
					</ul>
				</li>
			</ul>
		</section>
		<!-- <section class="margin-top20">
        <div class="personinfo">
          <p>
            <span class="bgbox-police bg-red font-black size-20">火情</span>&nbsp;
            <span class="size-20 font-blue">F57D 的报警详情</span>
            <span class="float-right">
                      <span class="bgbox-max bg-red font-black">
                          <i class="icon iconfont icon-tongzhi-xian-"></i> 报警中</span>
                  </span>
          </p>
        </div>
      </section>  -->
		<section class="call-iteminfo margin-top10 size-12">
			<section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">报警发起
            <span class="float-right">
                <span class="bgbox-min bg-blue font-black size-10">
                <i class="icon iconfont icon-jiankong-mian-"></i> 监控</span>
            </span>
          </h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-7">
							<span>警 报 源 </span>
							<strong>A365F57D (烟雾感应器)</strong>
						</div>
						<div class="col-sm-5">
							<span>报警类型 </span>
							<strong>设备</strong>
						</div>
						<div class="col-sm-12">
							<span>发生地点 </span>
							<strong>良庆区中心小学01号楼301室</strong>
						</div>
						<div class="col-sm-7">
							<span>确 认 人 </span>
							<strong>段亚伟</strong>
						</div>
						<div class="col-sm-5">
							<span>响应时间 </span>
							<strong class="font-blue">10小时32分</strong>
						</div>
						<div class="col-sm-12">
							<span>报警描述 </span>
							<strong>
                          <span class="bgbox-voice bg-blue font-black">
                              <i class="icon iconfont icon-tongzhi-xian-"></i> 32S</span>
                          <span>有事没事报个警震惊一些愚蠢的人类</span>
                      </strong>
						</div>
						<div class="textandimg-img">
							<div class="col-sm-3">
								<img src="../../assets/images/123.jpg">
							</div>
							<div class="col-sm-3">
								<img src="../../assets/images/456.jpg">
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="textandimg margin-top20">
					<h4 class="p-title">报警确认</h4>
					<div class="row textandimg-main margin-top20 size-12">
						<div class="col-sm-7">
							<span>确认人 </span>
							<strong>段亚伟(巡检员)</strong>
						</div>
						<div class="col-sm-5">
							<span>指派给 </span>
							<strong>赵堆船(无响应)</strong>
						</div>
						<div class="col-sm-12">
							<span>解除时长 </span>
							<strong class="font-blue">1小时32分</strong>
						</div>
						<div class="col-sm-12">
							<span>反馈信息 </span>
							<strong>
                          <span class="bgbox-voice bg-blue font-black">
                              <i class="icon iconfont icon-tongzhi-xian-"></i> 32S</span>
                          <span>设备质量不行,乱报警</span>
                      </strong>
						</div>
						<div class="textandimg-img">
							<div class="col-sm-3">
								<img src="../../assets/images/478.jpg">
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
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
			</section>
		</section>
	</div>
</template>

<script>
	import{mapState} from "vuex";
	export default {
		data(){
			return{
				aleamAndtroubleInfos:Object,
				queryUnitInfoimg:require('../../assets/images/jpg01.jpg'),
				defaultImg:'this.src="' +require('../../assets/images/jpg01.jpg') + '"',
				queryUnitInfo_parmar:{
					unitId:0
				},
				queryUnitInfo:Object,
				queryUnitInfoinfo:Object,
				getUnitsSynthesis_parmar:{
					unitId:null
				},
				getUnitsSynthesis
			}
		},
		computed:mapState([
			'aleamAndtroubleInfo'
		]),
		watch:{
			aleamAndtroubleInfo(){
				this.fn();
			}
		},
		methods: {
			fn(){
				this.aleamAndtroubleInfos=this.aleamAndtroubleInfo[0];
				// alert(this.aleamAndtroubleInfos[0].unitName)
				this.queryUnitInfo_parmar.unitId=this.aleamAndtroubleInfos.unitId;
				this.getqueryUnitInfo();
				this.getgetUnitsSynthesis();
			},
			getqueryUnitInfo() {
				this.$fetch(
					"/api/unit/queryUnitInfo",
					this.queryUnitInfo_parmar
				).then(response => {
					if(response.data) {
						this.queryUnitInfo = response.data;
						this.queryUnitInfoinfo=response.data.unitInfo
						
						if(this.queryUnitInfo_parmar.unitId==null || this.queryUnitInfo_parmar.unitId==0){
							this.queryUnitInfoimg = require('../../assets/images/jpg01.jpg');
						}else{
							this.queryUnitInfoimg = 'http://img.nanninglq.51play.com/xf/api/unit_img/'+this.queryUnitInfo_parmar.unitId+'.jpg';
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
		},
		mounted(){
			this.fn();
		}
	}
</script>