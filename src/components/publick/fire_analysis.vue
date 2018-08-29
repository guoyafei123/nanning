<template>
	<div id="fire_analysis" class="row early-info warning-list">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<div class="toolleft margin-right0">
				111111111
			</div>
		</section>
		<!-- #左边 End-->
		<!-- 中间 -->
		<section id="manage-center" class="position-fixed-left z-index-20">
	      22222
	    </section> 		
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<div class="toolright">
				66666666
			</div>
		</section>
		<!-- #右边 End-->
	</div>
</template>

<script>
	import{mapState} from "vuex";
	import HeaderVue from './header.vue';

	export default {
		components: {
			'header-vue': HeaderVue,
		},
		data(){
		},
		watch:{
		},
		methods: {
		},
	}
</script>