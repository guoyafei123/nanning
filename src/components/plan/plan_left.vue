<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="toolcount">
				<div class="set-width-50  font-gray-999 padding-right0">
					<ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
						<li>
							<h1 class="toolcount-p1 font-blue">{{countUnitPlan.sumofPlan?countUnitPlan.sumofPlan:0}}</h1>
						</li>
						<li>
							<p class="size-10">Plan-Total</p>
						</li>
						<li>
							<p class="size-18 font-blue">当前预案总数</p>
						</li>
					</ul>
				</div>
				<div class="set-width-50 display-inline-block font-gray-999 toolcount-right size-12">
					<ul class="padding-left0 margin-bottom0">
						<li class="toolcount-right-title">
							<p class="size-26 font-blue">预案统计</p>
						</li>
						<li class="margin-bottom10">
							<p class="size-10">Plan-number</p>
						</li>
						<!-- <template v-for="item in countUnitPlan.numberOfPlanType">
							<li>
								<p>{{item.typeName}}</p>
								<p class="font-blue font-italic float-right size-14" >{{item.count}}</p>
							</li>
						</template> -->
						<li>
							<p>火灾预案</p>
							<p class="font-blue font-italic float-right size-14" >{{planbunlist.a?planbunlist.a:0}}</p>
						</li>
						<li>
							<p>管理规定</p>
							<p class="font-blue font-italic float-right size-14" >{{planbunlist.b?planbunlist.b:0}}</p>
						</li>
						<li>
							<p>疏散预案</p>
							<p class="font-blue font-italic float-right size-14" >{{planbunlist.d?planbunlist.d:0}}</p>
						</li>
						<li>
							<p>应急疏散图</p>
							<p class="font-blue font-italic float-right size-14" >{{planbunlist.c?planbunlist.c:0}}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<!-- 趋势 -->
		<section>
			<div class="toolroute font-gray-ccc margin-left37 margin-top100">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 clearfix">
					<li>
						<p class="font-gray-666 size-12">中心小学</p>
					</li>
					<li>
						<p class="font-blue size-16">预案信息
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
						</p>
					</li>
					<li>
						<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" style="width:120px!important" size="mini" v-model="selectNodevalue_model" placeholder="全部建筑" @change="toselectNode">
							<el-option v-for="item in selectNode" :key="item.id" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
						<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5 " style="width:120px!important" size="mini" v-model="plantypevalue" placeholder="全部类型" @change="toplantypevalue">
							<el-option v-for="item in plantype" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</li>
					<li>
						<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
							<thead>
								<tr>
									<th>预案名称</th>
									<th>类型</th>
									<th>下载</th>
									<th>查看</th>
								</tr>
							</thead>
							<tbody v-if="tableData.result.length>0">
								<tr v-for="(item,index) in tableData.result" >
									<td>{{item.name ? item.name:"暂无名称"}}</td>
									<td v-if="item.type==1">火灾预案</td>
									<td v-if="item.type==2">管理规定</td>
									<td v-if="item.type==3">疏散预案</td>
									<td v-if="item.type==4">应急疏散示意图</td>
									<td>
										<a >
											<i class="icon iconfont icon-shenbaozhong-mian- set-ciontop3" data-toggle="tooltip" title="查看详情"></i>
										</a>
									</td>
									<td>
										<a v-on:click="toitmeinfo(item)">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
										</a>
									</td>
								</tr>
							</tbody>
							<tr  class="text-center">
								<td></td>
							</tr>
						</table>
					</li>
					<li class="upd-pagin" v-if="tableData.result.length>0">
						<div>
							<el-pagination style="float: left;" small layout="total" :total="tableData.totalRow">
							</el-pagination>
							<span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.deletePlan_parameter.pageSize)}}页</span>
							<el-pagination style="float: right;background: transparent" small layout="prev, pager, next" :page-size="this.deletePlan_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.getAlarmList_parameter.currentPage" @current-change="handleCurrentChange">
							</el-pagination>
						</div>
					</li>
					<li v-if="tableData.result.length==0">
						<p class="text-center font-red">暂无数据</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	import{mapState} from "vuex";
	export default {
		data() {
			return {
				// 单选按钮
				value7: '',
				options: [{
						value: "选项1",
						label: "怀化市"
					},
					{
						value: "选项2",
						label: "怀化市兴宁区"
					},
					{
						value: "选项3",
						label: "怀化市横县"
					}
				],
				plantype: [{
						value: "0",
						label: "全部类型"
					},
					{
						value: "1",
						label: "火灾预案 "
					},
					{
						value: "2",
						label: "管理规定 "
					},
					{
						value: "3",
						label: "疏散预案 "
					},
					{
						value: "4",
						label: "应急疏散示意图 "
					}
				],
				plantypevalue:'',
				selectNodevalue_model:'',
				countUnitPlan_parameter:{
					unitId:null,
					buildingId:null
				},
				countUnitPlan:Object,
				deletePlan_parameter: {
					unitId: null,
					property: null,
					structure: null,
					currentPage: 1,
					pageSize: 10,
					type:null,
					buildingId:null
				},
				// 表格返回
				tableData: Object,
				selectNode_parameter:{
					unitId:null,
				},
				selectNode:Object,
				planbunlist:{
					a:0,
					b:0,
					c:0,
					d:0
				},
				getunitid:''
			};
		},
		computed:mapState([
			'unitid'
		]),
		watch:{
			unitid(){
				// console.log(this.queryAlarmData_parmar.unitId)
				if(this.unitid!=0){
					this.getunitid=this.unitid;
				}else{
					this.getunitid='';
				}
				this.countUnitPlan_parameter.unitId=this.getunitid;
				this.selectNode_parameter.unitId=this.getunitid;
				this.deletePlan_parameter.unitId=this.getunitid;
				this.selectNodevalue_model='';
				this.deletePlan_parameter.buildingId='';
				this.getplancount();
				this.getTable();
				this.getBuild();
			}
		},
		methods: {
			planbunlists(data){
				data.forEach(element => {
					if(element.type==1){
						this.planbunlist.a=element.count;
					}
					if(element.type==2){
						this.planbunlist.b=element.count;
					}
					if(element.type==4){
						this.planbunlist.c=element.count;
					}
					if(element.type==3){
						this.planbunlist.d=element.count;
					}
				});
			},
			toplantypevalue(){
				if(this.plantypevalue==0){
					this.deletePlan_parameter.type=null;
				}
				this.deletePlan_parameter.type=this.plantypevalue;
				this.getTable();
			},
			toselectNode(){
				this.deletePlan_parameter.buildingId=this.selectNodevalue_model;
				if(this.deletePlan_parameter.buildingId==0){
					this.deletePlan_parameter.buildingId=null;
				}
				this.getTable();
			},
			getplancount(){
				this.$fetch(
				"/api/plan/countUnitPlan", 
				this.countUnitPlan_parameter
				).then(response => {
					if (response.data) {
						this.countUnitPlan = response.data;
						this.$store.commit("countUnitPlan", this.countUnitPlan);
						this.planbunlists(this.countUnitPlan.numberOfPlanType);
					}
				});
			},
			getTable(){
				this.$fetch(
						"/api/plan/planList",
						this.deletePlan_parameter
					).then(response => {
						if(response) {
							this.tableData = response.data.pager;
						}
					})
					.then(err => {
						console.log(err);
					});
			},
			getBuild(){
				this.selectNode=Object;
				this.$fetch(
						"/api/building/selectNode",
						this.selectNode_parameter
					).then(response => {
						if(response) {
							this.selectNode = response.data.list;
							this.selectNode.unshift({
								id: 0,
								name: '全部建筑'
							})
						}
					})
					.then(err => {
						console.log(err);
					});
			},
			handleCurrentChange(val) {
				this.deletePlan_parameter.currentPage = val;
				this.getTable();
			},
			
			toitmeinfo(item){
				this.$store.commit("topdf", item);
			}

		},
		mounted() {

			if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
				this.countUnitPlan_parameter.unitId=sessionStorage.unitid
				this.selectNode_parameter.unitId=sessionStorage.unitid
				this.deletePlan_parameter.unitId=sessionStorage.unitid
			}
			if(sessionStorage.unitid==0){
				this.countUnitPlan_parameter.unitId=null;
				this.selectNode_parameter.unitId=null;
				this.deletePlan_parameter.unitId=null;
			}
			this.getplancount();
			this.getTable();
			this.getBuild();
		}
	};
</script>