<template>
	<div class="row" id="personnel">
		<!-- #头部 -->
		<!-- <header-vue></header-vue> -->
		<!-- #头部 End-->
		<!-- #左边 -->
		<section id="left" class="position-fixed-left z-index-20">
			<div class="overlay"></div>
			<per_left-vue></per_left-vue>
		</section>
		<!-- #左边 End-->
		<!-- #右边 -->
		<section id="right" class="position-fixed-right z-index-20">
			<div class="overlay"></div>
			<per_right-vue></per_right-vue>
		</section>
		<!-- #右边 End-->
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import Per_leftVue from './personnel_left.vue';
	import Per_rightVue from './personnel_right.vue';
	export default {
		components: {
			'per_left-vue': Per_leftVue,
			'per_right-vue': Per_rightVue
		},
		methods: {},
		mounted() {
			// 左侧
			this.$store.commit('route_path', this.$route.path);
		},
		computed: mapState([]),
		watch: {},
	}
</script>

<style scoped>
	.row {
		position: relative;
		z-index: 22;
	}
</style>