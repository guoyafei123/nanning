<template>
	<div id="risk" class="row">
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<risk_left-vue></risk_left-vue>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<risk_right-vue></risk_right-vue>
		</section>

		<!-- #右边 End-->
	</div>
</template>

<script>
	import Risk_leftVue from "./risk_left.vue";
	import Risk_rightVue from "./risk_right.vue";
	export default {
		components: {
			"risk_left-vue": Risk_leftVue,
			"risk_right-vue": Risk_rightVue
		},
		methods: {

		},
		mounted() {
			this.$store.commit("route_path", this.$route.path);
		}
	};
</script>

<style scoped>

</style>