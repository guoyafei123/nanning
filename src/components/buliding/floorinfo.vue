<template>
	<div id="early" class="row early-info warning-list">
		<section id="common-cont" class="position-fixed-left z-index-20">

			<section class="position-relative">
				<ul class="list-unstyled floor-item">
					<li>5</li>
					<li>4</li>
					<li class="active">3</li>
					<li>2</li>
					<li>1</li>
				</ul>
			</section>
			<div class="floorplans" style="overflow: hidden;">
				<div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
					<img  id="imgPic" src="../../assets/images/111.jpg" class="img-responsive" style="position:relative;">
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
									<span class="size-20 font-blue">建筑</span>
									<el-tooltip content="安全评分" placement="top">
									<span class="bgbox-min bg-blue font-black size-10">评分</span>
								</el-tooltip>
									<span class="float-right">
											<span class="bgbox-max bg-gray-333 font-gray-999 size-10">介绍</span>
										</span>
									</p>
									<p class="col-sm-12 text-left padding0">
										<span>
											<i class="fas fa-industry"></i>134</span>
									</p>
							</div>
						</div>
						<section>
							<div class="row toolcount margin-top20">
								<div class="col-sm-4 font-gray-999 padding-right0">
									<ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
									<li>
										<h1 class="toolcount-p1">13</h1>
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
										<p class="size-16 show font-white">123</p>
										<p>楼层数量</p>
										</div>
										<div class="col-sm-4 personnel-borderright">
										<p class="size-16 show font-white">123</p>
										<p>设备数量</p>
										</div>
										<div class="col-sm-4">
										<p class="size-16 show font-white">123</p>
										<p>面积 m²</p>
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
											<p>12</p>
										</div>
										<p class="margin-top10">当前隐患数</p>
									</div>
									<div class="col-sm-4">
										<div class="newpiechar">
											<p>12</p>
										</div>
										<p class="margin-top10">当前报警数</p>
									</div>
									<div class="col-sm-4">
										<div class="newpiechar">
											<p>12</p>
										</div>
										<p class="margin-top10">当前危险品数</p>
									</div>
								</div>
							</div>
						</section>
						<section>
							<h4 class="p-title margin-top30">统计</h4>
							<div class="row cardinfo-style margin-top10 font-gray-999">
								<p class="col-sm-4">历史隐患数<span class="font-yellow">12</span></p>
								<p class="col-sm-4">历史报警数<span class="font-red">123</span></p>
								<p class="col-sm-4">历史危险品数<span class="font-yellow">123</span></p>
								<p class="col-sm-4">相关巡检路线<span class="font-white">123</span></p>
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
	import panzoom from 'panzoom';
	import{mapState} from "vuex";

	import { vControl,setPoint } from '../../assets/js/pointDevice';

	export default {
		components: {
		},
		data(){
			return{
				svgUrl:'../../assets/images/111.jpg',
			}
		},
		computed:mapState([
		]),
		watch:{
		},
		methods: {
		},
		mounted(){
			var area = document.getElementById('floorImg');
			panzoom((area),{
                maxZoom:1,
                minZoom:1
              });
		}
	}
</script>
<style>
.personinfo{
	padding-left: 5px;
}
.floor-item{
	top: 0px;
}
</style>
