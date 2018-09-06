<template>
	<div id="early" class="row early-info warning-list">
		<section id="common-cont" class="position-fixed-left z-index-20">

			<section class="position-relative">
				<ul class="list-unstyled floor-item" v-for="(item,index) in floorList">
					<li @click="goFloorInfo(item)" v-if="index==0" class="active">{{item.floorName == null ? '-' : item.floorName}}</li>
					<li @click="goFloorInfo(item)">{{item.floorName == null ? '-' : item.floorName}}</li>
				</ul>
			</section>
			<div class="floorplans" style="overflow: hidden;">
				<div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
					<img v-if="svgUrl!=imageP"  id="imgPic" :src="svgUrl" class="img-responsive" style="position:relative;">
					<p v-if="svgUrl==imageP">暂无图片</p>
				</div>
			</div>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<template>
				<div class="toolright font-white floorinfostyle margin-top0 padding-top0">
					<section class="bulid-iteminfo">
						<div class="unit-info toolcount font-gray-999 size-12 clearfix">
							<!-- 已选择 -->
							<div class="personinfo">
									<p>
									<span class="size-20 font-blue">{{buildInfo.name}} {{floorInfo.floorName}}层</span>
								</el-tooltip>
									<span class="float-right">
											<span class="bgbox-max bg-gray-333 font-gray-999 size-10">介绍</span>
										</span>
									</p>
									<p class="col-sm-12 text-left padding0">
										<span>
											<i class="fas fa-industry"></i>位置:{{buildInfo.location?buildInfo.location:"暂无图片"}}</span>
									</p>
							</div>
						</div>
						<section>
							<div class="row toolcount margin-top20">
								<div class="col-sm-4 font-gray-999 padding-right0">
									<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
									<li>
										<h1 class="toolcount-p1">{{floorRoomNum}}</h1>
									</li>
									<li>
										<p class="size-10 ">Room Total</p>
									</li>
									<li>
										<p class="size-16 font-blue">总房间数量</p>
									</li>
									</ul>
								</div>
								<div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
									<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
									<li>
										<p class="size-18 font-white">信息统计</p>
									</li>
									<li>
										<p class="size-10 set-scaleright">Repair Statistics</p>
									</li>
									<li class="row text-center padding-right16 margin-top40">
										<div class="col-sm-4 personnel-borderright">
										<p class="size-16 show font-white">{{floorRoomNum}}</p>
										<p>楼层数量</p>
										</div>
										<div class="col-sm-4 personnel-borderright">
										<p class="size-16 show font-white">{{floorDeviceNum}}</p>
										<p>设备数量</p>
										</div>
									</li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<div class="toolcount">
								<div class="row text-center font-gray-999 size-12">
									<div class="col-sm-4">
										<div class="newpiechar">
											<p>{{floorTroubleData.NOWTROUBLE}}</p>
										</div>
										<p class="margin-top10">当前隐患数</p>
									</div>
									<div class="col-sm-4">
										<div class="newpiechar">
											<p>{{floorAlarmData.NOWALARM}}</p>
										</div>
										<p class="margin-top10">当前报警数</p>
									</div>
									<div class="col-sm-4">
										<div class="newpiechar">
											<p>{{floorTroubleData.nowDanger}}</p>
										</div>
										<p class="margin-top10">当前危险品数</p>
									</div>
								</div>
							</div>
						</section>
						<section>
							<h4 class="p-title margin-top30">统计</h4>
							<div class="row cardinfo-style margin-top10 font-gray-999">
								<p class="col-sm-4">历史隐患数<span class="font-yellow">{{floorTroubleData.ALLTROUBLE}}</span></p>
								<p class="col-sm-4">历史报警数<span class="font-red">{{floorAlarmData.ALLALARM}}</span></p>
								<p class="col-sm-4">历史危险品数<span class="font-yellow">{{floorTroubleData.allDanger}}</span></p>
								<p class="col-sm-4">相关巡检路线<span class="font-white">{{floorStats.floorPlanCount}}</span></p>
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
	import moment from "moment";
	import panzoom from 'panzoom';
	import{mapState} from "vuex";
	import { vControl,setPoint } from '../../assets/js/pointDevice';
	export default {
		components: {

		},
		data(){
			return{
				svgUrl:'',
				buildFloorDetails_parameter: {
					buildingId: null
				},
				floorDetails_parameter: {
					floorId: null
				},
				buildInfo:Object,
				floorInfo:Object,
				floorStats:Object,
				floorList:Object,
				floorAlarmData:Object,
				floorTroubleData:Object,
				floorPlanData:Object,
				floorDeviceNum:0,
				floorRoomNum:0,
				imageP:''
			}
		},
		computed:mapState([
			"toFloorInfo"
		]),
		watch:{

		},
		methods: {
			//默认加载数据
			queryBuildDefaultFloor() {
				this.$fetch("/api/building/queryBuildDefaultFloor",this.buildFloorDetails_parameter).then(response => {
					let data = response.data
					if (data) {
						this.floorInfo = data.result.floor;
						if(this.floorInfo.svgUrl != "" && this.floorInfo.svgUrl != null){
							this.svgUrl = this.config.baseImg +this.floorInfo.svgUrl;
						}
						this.floorList = data.result.floorList;
						this.floorDeviceNum = data.result.countDevice;
						this.floorRoomNum =  data.result.countRoom;

						this.floorStats = data.floorStats;
						this.floorAlarmData = this.floorStats.floorAlarmMap;
						this.floorTroubleData = this.floorStats.floorTrouble;
						this.floorPlanData = this.floorStats.floorPlanCount;
					}
				});
			},
			//点击图片
			goFloorInfo(data){
				this.floorInfo = data;
				this.floorDetails_parameter.floorId = this.floorInfo.id ;
				this.queryFloorInfo();
			},
			//查看楼层详情
			queryFloorInfo() {
				this.$fetch("/api/building/queryFloorInfo",this.floorDetails_parameter).then(response => {
					let data = response.data
					if (data) {
						this.floorInfo = data.result.floor;
						if(this.floorInfo.svgUrl != "" && this.floorInfo.svgUrl != null){
							this.svgUrl = this.config.baseImg +this.floorInfo.svgUrl;
						}
						this.floorDeviceNum = data.result.countDevice;
						this.floorRoomNum =  data.result.countRoom;

						this.floorStats = data.floorStats;
						this.floorAlarmData = this.floorStats.floorAlarmMap;
						this.floorTroubleData = this.floorStats.floorTrouble;
						this.floorPlanData = this.floorStats.floorPlanCount;
					}
				});
    		},
		},
		mounted(){
			this.imageP=this.config.baseImg;
			var area = document.getElementById('floorImg');
			panzoom((area),{
                maxZoom:1,
                minZoom:1
			});
			this.buildInfo = this.toFloorInfo;
			this.buildFloorDetails_parameter.buildingId = this.buildInfo.id;
			this.queryBuildDefaultFloor();
		}
	}
</script>
<style>
.personinfo{
	padding-left: 5px;
}
.floor-item{
	top: 0px !important;
}
</style>
