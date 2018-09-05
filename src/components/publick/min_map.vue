<template>
	<section class="min-map">
		<!-- 关闭小窗 -->
		<a  class="min-map-cloase">关闭</a>
		<!-- 上翻 -->
		<a class="arrow-prev" data-toggle="tooltip" title="上翻">
			<i class="el-icon-arrow-up"></i>
		</a>
		<!-- 主体 -->
		<div class="min-cont">
			<ul class="min-map-list list-unstyled">

				<li v-if="type==2" v-for="(item,index) in aleamAndtroubleitem" :class="[
					item.eventLevel==0 ? 'fault-list' :'',
					item.eventLevel==1 ? 'warning-list' :'',
					item.eventLevel==2 ? 'fire-list' :'',
					]">
					<!-- 点击跳转详情 -->
					<figure >
						<h5 @click="dialogVisibles(item,1)">
			    			<i class="icon iconfont icon-jianzhu-xian-"></i> <span >
								{{item.unitName==null ? '' :item.unitName}}
							</span>
			    		</h5>
					</figure>
					<!-- 关闭按钮 -->
					<!-- <a><i class="el-icon-error" data-toggle="tooltip" title="关闭"></i></a> -->
					<!-- 报警源 -->
					<!-- <strong><span>A34F5E65R2</span></strong> -->
					<!-- 警报点位 -->
					<div class="popup-map-min-point">
						<div class="my-tooltip"><span>
								{{item.buildingName==null ? '' :item.buildingName}}
								{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
								{{item.roomNumber==null ? '' :item.roomNumber}}
							</span></div>
						<i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-early"></i></i>
					</div>
					<!-- 位置截图 -->
					<div class="min-map-img"><img src="../../assets/images/111.jpg"></div>
				</li>

				<li v-if="type==1" v-for="(item,index) in aleamAndtroubleitem" class="dangers-list">
					<!-- 点击跳转详情 -->
					<figure>
						<h5 @click="dialogVisibles(item,2)">
			    			<i class="icon iconfont icon-jianzhu-xian-"></i> <span>{{item.unitName==null ? '' :item.unitName}}</span>
			    		</h5>
					</figure>
					<!-- 关闭按钮 -->
					<!-- <a><i class="el-icon-error" data-toggle="tooltip" title="关闭"></i></a> -->
					<!-- 报警源 -->
					<!-- <strong><span>A34F5E65R2</span></strong> -->
					<!-- 警报点位 -->
					<div class="popup-map-min-point">
						<div class="my-tooltip"><span>
							{{item.buildingName==null ? '' :item.buildingName}}
								{{item.floorNumber==null ? '' :item.floorNumber+'层'}}
								{{item.roomNumber==null ? '' :item.roomNumber}}
								</span></div>
						<i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-early"></i></i>
					</div>
					<!-- 位置截图 -->
					<div class="min-map-img"><img src="../../assets/images/111.jpg"></div>
				</li>
			</ul>
		</div>
		<!-- 下翻 -->
		<a class="arrow-next" data-toggle="tooltip" title="下翻">
			<i class="el-icon-arrow-down"></i>
		</a>
	</section>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		data(){
			return{
				aleamAndtroubleitem:Object,
				type:1
			}
		},
		methods: {
			dialogVisibles(item,type){
				if(type==1){
					if(item.alarmsum!=null){
						this.dialogVisible=false;
					}else{
						this.dialogVisible=true;
					}
				}else if(type==2){
					if(item.allCount!=null){
						this.dialogVisible=false;
					}else{
						this.dialogVisible=true;
					}
				}
				
				this.$store.commit("dialogVisiblehide", [item,type,new Date().getTime()]);
				// this.$store.commit("aleamAndtroubleInfo", [item,type,new Date().getTime()]);
			},
		},
		mounted() {

		},
		computed: mapState(["aleamAndtroubleInfo"]),
		watch: {
			aleamAndtroubleInfo() {
				if(this.aleamAndtroubleInfo[1]==1){
					this.type=2;
				}else if(this.aleamAndtroubleInfo[1]==2){
					this.type=1;
				}
				// this.aleamAndtroubleitem
				this.$fetch("/api/building/getBuildIngTroubleList", {buildIngId:this.aleamAndtroubleInfo[0].buildingId,type:this.type}).then(
					response => {
					if (response.data) {
						console.log(response.data);
						if(this.type==1){
							this.aleamAndtroubleitem=response.data.troubles;
						}else{
							this.aleamAndtroubleitem=response.data.alarms;
						}
					}
					}
				);
			}
		},
	};
</script>