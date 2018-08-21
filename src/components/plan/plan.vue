<template>
	<div class="row" id="plan">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<Plan_left-vue></Plan_left-vue>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<Plan_right-vue></Plan_right-vue>
		</section>
		<!-- #右边 End-->
		<Plan_pdf></Plan_pdf>
	</div>
</template>

<script>
	import Plan_leftVue from "./plan_left.vue";
	import Plan_rightVue from "./plan_right.vue";
	import Plan_pfg from "../publick/pdf.vue";
	export default {
		components: {
			"Plan_left-vue": Plan_leftVue,
			"Plan_right-vue": Plan_rightVue,
			"Plan_pdf": Plan_pfg
		},
		methods: {},
		mounted() {
			this.$store.commit('route_path', this.$route.path);
		}
	};
</script>