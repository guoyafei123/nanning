<template>
	<div class="row" id="building">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<buliding_left></buliding_left>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<buliding_right></buliding_right>
		</section>

		<el-dialog title="" :visible.sync="dialogVisible" top="120px">
			<el-tooltip class="item" content="关闭" placement="top">
				<a class="go-back" @click="dialogVisible = false"><i class="el-icon-circle-close-outline size-24"></i></a>
				</el-tooltip>
			<floorinfo></floorinfo>
		</el-dialog>

		<!-- #右边 End-->
	</div>
</template>

<script>
	import Floorinfo from "./floorinfo.vue";
	import HeaderVue from '../publick/header.vue';
	import Buliding_left from './buliding_left.vue';
	import Buliding_right from './buliding_right.vue';
	export default {
		data(){
			return{
				dialogVisible:true
			}
		},
		components: {
			'header-vue': HeaderVue,
			'buliding_left': Buliding_left,
			'buliding_right': Buliding_right,
			'floorinfo':Floorinfo
		},
		methods: {

		},
		mounted() {
			this.$store.commit('route_path', this.$route.path);
		}
	};
</script>