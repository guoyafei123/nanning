<template>
	<div id="early" class="row early-info warning-list">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="common-cont" class="position-fixed-left z-index-20">

			<section class="position-relative">
				<!-- 地图/平面图切换 -->
				<div class="popup-map-min z-index-10" @click="mapOrPlan()">
					<!-- 地图 -->
					<div class="position-absolute-top">
						<img v-if="floorplans==true" src="http://yhyimg.99xf.cn/xf/api/building_plan/25_1.jpg" alt="" class="img-responsive center-block">
						<img v-if="floorplans==false" src="../../assets/images/111.jpg" alt="" class="img-responsive center-block">
					</div>
					<!-- icon -->
					<div class="position-absolute-top popup-map-min-point">
						<i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-early"></i></i>
					</div>
					<!-- 提示文字 -->
					<h5>{{floorplans?'2D':'地图'}}</h5>
				</div>
				<ul class="list-unstyled floor-item">
					<li>5</li>
					<li>4</li>
					<li class="active">3</li>
					<li>2</li>
					<li>1</li>
				</ul>
				<div>
					<mapindex-vue></mapindex-vue>
				</div>
			</section>
			<div class="floorplans" :class="floorplans?'hide':''" style="overflow: hidden;">
				<div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
					<img  id="imgPic" src="../../assets/images/111.jpg" class="img-responsive" style="position:relative;">
				</div>
			</div>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<earlyinfo_right-vue></earlyinfo_right-vue>
		</section>
		<!-- #右边 End-->
	</div>
</template>

<script>
	import panzoom from 'panzoom';
	import{mapState} from "vuex";
	import HeaderVue from './header.vue';
	import earlyinfo_rightVue from './earlyinfo_right.vue';
	import MapVue from './mapindex.vue';

	import { vControl,setPoint } from '../../assets/js/pointDevice';

	export default {
		components: {
			'header-vue': HeaderVue,
			'earlyinfo_right-vue': earlyinfo_rightVue,
			'mapindex-vue': MapVue
		},
		data(){
			return{
				aleamAndtroubleInfos:Object,
				svgUrl:'../../assets/images/111.jpg',
				floorplans:true
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
				this.aleamAndtroubleInfos=this.aleamAndtroubleInfo
				this.$store.commit("aleamAndtroubleInfos", [this.aleamAndtroubleInfo,this.tounpdateIndex++]);
				// alert(this.aleamAndtroubleInfos.id+'-'+this.aleamAndtroubleInfo.pointY);
			},
			mapOrPlan(){
				this.floorplans=!this.floorplans;
			}
		},
		mounted(){
			this.fn();
			var area = document.getElementById('floorImg');
			panzoom((area),{
                maxZoom:1,
                minZoom:1
              });
		}
	}
</script>