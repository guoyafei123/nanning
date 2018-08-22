<template>
	<div id="early" class="row early-info warning-list">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="common-cont" class="position-fixed-left z-index-20">
			<section class="position-relative">
				<!-- 地图/平面图切换 -->
				<div class="popup-map-min z-index-10">
					<!-- 地图 -->
					<div class="position-absolute-top">
						<img src="http://yhyimg.99xf.cn/xf/api/building_plan/25_1.jpg" alt="" class="img-responsive center-block">
					</div>
					<!-- icon -->
					<div class="position-absolute-top popup-map-min-point">
						<i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-early"></i></i>
					</div>
					<!-- 提示文字 -->
					<h5>2D</h5>
				</div>
				<!-- 楼层导航 -->
				<ul class="list-unstyled floor-item">
					<li>14</li>
					<li>13</li>
	              <li>10</li>
	              <li>11</li>
	              <li>10</li>
	              <li>9</li>
	              <li>8</li>
	              <li class="active">7</li>
	              <li>1</li>
	              <li>6</li>
	              <li>5</li>
	              <li>4</li>
	              <li>3</li>
	              <li>1</li>
	              <li>-1</li>
	              <li>-2</li>
	              <li>-3</li>
	              <li>-4</li>
	            </ul>
				<div>
					<mapindex-vue></mapindex-vue>
				</div>
			</section>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<earlyinfo_right-vue></earlyinfo_right-vue>
		</section>
		<!-- #右边 End-->
	</div>
</template>

<script>
	import{mapState} from "vuex";
	import HeaderVue from './header.vue';
	import earlyinfo_rightVue from './earlyinfo_right.vue';
	import MapVue from './mapindex.vue';

	export default {
		components: {
			'header-vue': HeaderVue,
			'earlyinfo_right-vue': earlyinfo_rightVue,
			'mapindex-vue': MapVue
		},
		data(){
			return{
				aleamAndtroubleInfos:Object
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
				// alert(this.aleamAndtroubleInfo[0].unitName);
			}
		},
		mounted(){
			this.fn();
		}
	}
</script>