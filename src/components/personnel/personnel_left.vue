<template>
	<div class="toolleft margin-right0">
		<section>
			<div class="toolcount">
				<div class="set-width-50  font-gray-999 padding-right0">
					<ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
						<li>
							<h1 class="toolcount-p1 font-red" style="line-height:10px">12</h1>
						</li>
						<li>
							<p class="size-10">Alarm Number</p>
						</li>
						<li>
							<p class="size-18 font-blue">人员在线数量</p>
						</li>
					</ul>
				</div>
				<div class="set-width-50 display-inline-block font-gray-999 toolcount-right">
					<ul class="padding-left0 margin-bottom0">
						<li>
							<p>人员总数</p>
							<p class="font-blue font-italic float-right size-14">12</p>
						</li>
						<li>
							<p>巡检员</p>
							<p class="font-blue font-italic float-right size-14">12</p>
						</li>
						<li>
							<p>管理员</p>
							<p class="font-blue font-italic float-right size-14">12</p>
						</li>
						<li>
							<p>待审核</p>
							<p class="font-blue font-italic float-right size-14">12</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section>
			<div class="toolcompanyrate margin-top40">
				<ul class="row padding0 margin0 size-12 font-gray-999">
					<li class="col-sm-6">
						<div class="row margin0 padding0">
							<div class="toolcompanyrate-char col-sm-7 padding0">
								<small class="font-blue">
                        执行任务最多
                      </small>
								<p class="size-16">段亚伟</p>
							</div>
							<div class="col-sm-5 padding0 text-left text-center">
								<span class="size-24 font-white">24</span>
							</div>
						</div>
					</li>
					<li class="col-sm-6">
						<div class="row margin0 padding0">
							<div class="toolcompanyrate-char col-sm-7 padding0">
								<small class="font-blue">
                        发现隐患最多
                      </small>
								<p class="size-16">段亚伟</p>
							</div>
							<div class="col-sm-5 padding0 text-left text-center">
								<span class="size-24 font-white">24</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section>
			<div class="toolroute font-gray-ccc margin-left37 margin-top40">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 padding-right5 clearfix">
					<li>
						<p class="font-gray-666 size-12">中心小学</p>
					</li>
					<li>
						<p class="font-blue size-16">人员信息
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                        <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                      </span>
						</p>
					</li>
					<li>
						<table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
							<thead>
								<tr>
									<th>序号</th>
									<th>姓名</th>
									<th>手机号</th>
									<th>单位名称</th>
									<th>状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>段亚伟</td>
									<td>18601246987</td>
									<td>瑞和家园</td>
									<td>
										<i class="fas fa-link font-blue" data-toggle="tooltip" title="在线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>王金</td>
									<td>18601246987</td>
									<td>中心小学</td>
									<td>
										<i class="fas fa-link font-blue" data-toggle="tooltip" title="在线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>陈磊</td>
									<td>18601246987</td>
									<td>中心小学</td>
									<td>
										<i class="fas fa-link font-blue" data-toggle="tooltip" title="在线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td>王晓波</td>
									<td>18601246987</td>
									<td>瑞和家园</td>
									<td>
										<i class="fas fa-link font-blue" data-toggle="tooltip" title="在线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td>刘健</td>
									<td>18601246987</td>
									<td>中心小学</td>
									<td>
										<i class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>6</td>
									<td>魏世星</td>
									<td>18601246987</td>
									<td>瑞和家园</td>
									<td>
										<i class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>7</td>
									<td>崔幸福</td>
									<td>18601246987</td>
									<td>实验小学</td>
									<td>
										<i class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>8</td>
									<td>徐金玲</td>
									<td>18601246987</td>
									<td>实验小学</td>
									<td>
										<i class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>9</td>
									<td>刘杰</td>
									<td>18601246987</td>
									<td>瑞和家园</td>
									<td>
										<i class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>10</td>
									<td>赵堆船</td>
									<td>18601246987</td>
									<td>瑞和家园</td>
									<td>
										<i class="fas fa-link font-gray-333" data-toggle="tooltip" title="离线"></i>
									</td>
									<td>
										<a @click="moren">
											<i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
										</a>
									</td>
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
	import { mapState } from "vuex";
	export default {
		data() {
			return {
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

				value7: "",
			}

		},
		methods: {
			// 右侧
			moren() {
				$(".per-iteminfo")
					.addClass("display-block")
					.removeClass("display-none");
				$(".per-lineinfo")
					.addClass("display-none")
					.removeClass("display-block");
			},
			tolineitem() {},
		},
		mounted() {

		},
		computed: mapState([]),
		watch: {},
	}
</script>