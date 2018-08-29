<template>
	<footer id="footer" class="col-sm-12 position-fixed-bottom z-index-9999">
		<div class="footer">
			<ul class="list-inline margin-bottom20" @click="management">
				<li class="footer-nav-active">
					<router-link to="/index">
						<el-badge :value="200" :max="99" class="item">
							<el-button size="small">综合</el-button>
						</el-badge>
					</router-link>
				</li>
				<li>
					<router-link to="/risk">风险</router-link>
				</li>
				<li>
					<router-link to="/inspection">巡检</router-link>
				</li>
				<li>
					<router-link to="/callpolice">警报</router-link>
				</li>
				<li>
					<router-link to="/danger">隐患</router-link>
				</li>
				<li>
					<router-link to="/buliding">建筑</router-link>
				</li>
				<li>
					<router-link to="/information">设备</router-link>
				</li>
				<li>
					<router-link to="/personnel">人员</router-link>
				</li>
				<li>
					<router-link to="/plan">预案</router-link>
				</li>
				<li>
					<router-link to="/camera">监控</router-link>
				</li>
				<!-- <li>
					<router-link to="/fire_analysis">火情</router-link>
				</li> -->
			</ul>
			<!-- <abbr class="size-12 font-gray-333">数雨如歌智慧消防大数据监控平台 政府版
        <span>BETA3.0</span>
      </abbr> -->
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

			chart_one() {
				let that = this;
				$('.list-inline').on('click', 'li', function() {
					$(this).addClass("footer-nav-active").siblings().removeClass('footer-nav-active');
					// that.$store.commit('route_path',that.$route.path);
				})
			},
			management(){
				this.$store.commit('mapShow',true);
			}
		},

		mounted() {
			this.chart_one();
		}
	}
</script>

<style scoped>

</style>