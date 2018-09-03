<template>
	<div class="row" id="camera">
		<section>
			<div class="page" @click="open5">
				<div class="list"><div class="video"><img src="../../assets/images/cam/1.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/2.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/3.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/4.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/8.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/6.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/7.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/8.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/1.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/3.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/7.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/2.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/3.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/4.gif"></div></div>
			    <div class="list"><div class="video"><img src="../../assets/images/cam/6.gif"></div></div>
				
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
	      open5() {
	        this.$alert('<strong>无法与监控系统对接，请联系相关部门！</strong>', '提示', {
	          dangerouslyUseHTMLString: true,
	          center: true
	        });
	      }
	    },
		mounted() {
		}
	}
</script>
<style scoped>
.page {
    width: 100%;
    overflow-y: hidden;
    position: absolute;
    left: 15px; top: 80px; right: 15px; bottom: 74px;
    background-color: #000;
}
.list {
    float: left;
    height: 33.33333333333%;
    width: 20%;
    position: relative;
}
.list:before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    border-radius: 0;
}
.list:after {
    content:attr(data-index);
    position: absolute;
    height: 30px;
    left: 0; right: 0; top: 0; bottom: 0;
    margin: auto;
    text-align: center;
    font: 24px/30px bold;
}
.video {
    background-color: #333;
    width: 99%; height:98%;
    margin:1%;
    overflow:hidden;
    background-color: #222;
}
.video img{
	display: block;
    max-width: 100%;
    height: auto; 
    margin:0 auto;
}
</style>