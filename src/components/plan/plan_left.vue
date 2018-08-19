<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="row toolcount">
				<div class="col-sm-6 font-gray-999 padding-right0">
					<ul class="toolcount-left margin-bottom0 padding-left37" id="toolcount">
						<li>
							<h1 class="toolcount-p1 font-blue">286</h1>
						</li>
						<li>
							<p class="size-10">Plan-Total</p>
						</li>
						<li>
							<p class="size-18 font-blue">当前预案总数</p>
						</li>
					</ul>
				</div>
				<div class="col-sm-6 font-gray-999 padding-left0 padding-right0 size-12">
					<ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
						<li class="toolcount-right-title">
							<p class="size-26 font-blue">预案统计</p>
						</li>
						<li>
							<li class="margin-bottom10">
								<p class="size-10">Plan-number</p>
							</li>
							<li>
								<p class="set-width-50">火灾预案</p>
								<p class="display-inline-block font-red size-14">12</p>
							</li>
							<li>
								<p class="set-width-50">管理规定</p>
								<p class="display-inline-block font-yellow size-14">6</p>
							</li>
							<li>
								<p class="set-width-50">疏散示意图</p>
								<p class="display-inline-block font-blue size-14">268</p>
							</li>
					</ul>
				</div>
			</div>
		</section>
		<!-- 趋势 -->
		<section>
			<div class="toolroute font-gray-ccc margin-left37 margin-top30">
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
						<el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5 " size="mini" v-model="value7" placeholder="全部类型" @change="tolineitem">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</li>
					<li>
						<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
							<thead>
								<tr>
									<th>预案名称</th>
									<th>类型</th>
									<th>所属建筑</th>
									<th>所属单位</th>
								</tr>
							</thead>
							<tbody id="">
								<tr>
									<td>火情确认须知</td>
									<td>火灾预案</td>
									<td>实验室教学楼</td>
									<td>中心小学</td>
								</tr>
								<tr>
									<td>单位灭火力量</td>
									<td>火灾预案</td>
									<td>-</td>
									<td>中心小学</td>
								</tr>
								<tr>
									<td>应急路线示意</td>
									<td>疏散示意图</td>
									<td>瑞和商业楼</td>
									<td>瑞和家园</td>
								</tr>
								<tr>
									<td>消防值班守则</td>
									<td>管理规定</td>
									<td>-</td>
									<td>瑞和家园</td>
								</tr>
								<tr>
									<td>火情确认须知</td>
									<td>火灾预案</td>
									<td>实验室教学楼</td>
									<td>中心小学</td>
								</tr>
								<tr>
									<td>单位灭火分布</td>
									<td>火灾预案</td>
									<td>-</td>
									<td>中心小学</td>
								</tr>
								<tr>
									<td>应急路线示意</td>
									<td>疏散示意图</td>
									<td>瑞和商业楼</td>
									<td>瑞和家园</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li>
						<span class="size-12">分页</span>
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

			};
		},
		methods: {
			tolineitem() {

			},
		},
		mounted() {
			this.$store.commit('route_path', this.$route.path);
		}
	};
</script>