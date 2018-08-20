<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="toolcount">
				<div class="set-width-50  font-gray-999 padding-right0">
					<ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
						<li>
							<h1 class="toolcount-p1 font-blue">{{countUnitPlan.sumofPlan}}</h1>
						</li>
						<li>
							<p class="size-10">Plan-Total</p>
						</li>
						<li>
							<p class="size-18 font-blue">当前预案总数</p>
						</li>
					</ul>
				</div>
				<div class="set-width-50 display-inline-block font-gray-999 toolcount-right">
					<ul class="padding-left0 margin-bottom0">
						<li class="toolcount-right-title">
							<p class="size-26 font-blue">预案统计</p>
						</li>
						<li class="margin-bottom10">
							<p class="size-10">Plan-number</p>
						</li>
						<template v-for="item in countUnitPlan.numberOfPlanType">
							<li>
								<p>{{item.typeName}}</p>
								<p class="font-blue font-italic float-right size-14" >{{item.count}}</p>
							</li>
						</template>
						
					</ul>
				</div>
			</div>
		</section>
		<!-- 趋势 -->
		<section>
			<div class="toolroute font-gray-ccc margin-left37 margin-top20">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 padding-right5 clearfix">
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
						<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="value7" placeholder="全部建筑" @change="tolineitem">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
							<tbody id="">
								<tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
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
										<a >
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li class="upd-pagin">
						<div>
							<el-pagination style="float: left;" small layout="total" :total="tableData.totalRow">
							</el-pagination>
							<span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.deletePlan_parameter.pageSize)}}页</span>
							<el-pagination style="float: right;background: transparent" small layout="prev, pager, next" :page-size="this.deletePlan_parameter.pageSize" :total="tableData.totalRow" current-page.sync="this.getAlarmList_parameter.currentPage" @current-change="handleCurrentChange">
							</el-pagination>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
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
			};
		},
		methods: {
			tolineitem() {

			},
			toplantypevalue(){
				if(this.plantypevalue==0){
					this.deletePlan_parameter.type=null;
				}
				this.deletePlan_parameter.type=this.plantypevalue;
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
			handleCurrentChange(val) {
				this.deletePlan_parameter.currentPage = val;
				this.getTable();
			},

		},
		mounted() {
			this.getplancount();
			this.getTable();
		}
	};
</script>