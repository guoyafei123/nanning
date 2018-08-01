<template>
	<div class="toolright font-gray-999">
		<!-- 单位信息（地图联动） -->
		<section class="unit-info border-solid-333 clearfix bg-black">			
			<ul class="list-unstyled">
				<!-- 介绍 -->
				<li class="position-relative">
					<div class="position-absolute-bottom clearfix">
						<!-- 单位信息 -->
						<article class="unit-brief white-space col-sm-10">
							<h3>南宁市良庆区</h3>
							<small><i class="fa fa-map-marker-alt"></i> 广西省南宁市良庆区银海大道710-2号</small>
						</article>
						<!-- 安全评分 -->
						<article class="unit-score">
							<span class="badge bg-blue position-absolute-right">安全评分</span>
							<!-- 分数 -->
							<h1 class="font-red">2.<sub>6</sub></h1>
							<!-- 上升下降标识 -->
							<small class="font-white"><i class="fas fa-arrow-down"></i></small>
						</article>
					</div>
					<!-- 单位图片 -->
					<img src="../assets/images/jpg01.jpg" class="img-responsive" alt="单位图片">
				</li>
				<!-- 统计1 -->
				<li>
					<div class="pull-left">
						<h4>段亚伟 <small>15600237854</small></h4>
						<small>消防负责人</small>						
					</div>
					<div class="pull-right">
						<article>
							<h4>367</h4>
							<small>今日警报</small>
						</article>
						<article>
							<h4>214</h4>
							<small>今日隐患</small>
						</article>
						<article>
							<h4>12</h4>
							<small>巡检完成</small>
						</article>
					</div>
				</li>
				<!-- 统计2 -->
				<li>
					<article>
						单位总数<span>4</span>
					</article>
					<article>
						建筑总数<span>36</span>
					</article>
					<article>
						主机总数<span>24</span>
					</article>
					<article>
						设备总数<span>3647</span>
					</article>
					<article>
						预案总数<span>60</span>
					</article>
					<article>
						人员总数<span>306</span>
					</article>
					<article>
						巡检路线<span>24</span>
					</article>
				</li>
			</ul>
		</section>
		<!-- 实时报警 -->
		<section class="early-warning margin-top30 clearfix">
        	<span class="toolroute-rect bg-blue"></span>
			<div class="early-title">
				<small>Early-Warning</small>
            	<h3>实时报警
            		<a href="" class="pull-right size-12">展开 <i class="fas fa-chevron-up font-blue"></i></a>
        		</h3>            
			</div>
			<!-- 报警时循环li标签class样式调用
				火灾 fire-list		聚合li>article>h4>span.badge 
				报警 warning-list
				故障 fault-list
				隐患 dangers-list
				复位/解决/关闭  ok-list
			 -->
			<ul class="early-list list-unstyled">
				<!-- 单条火灾循环li -->
				<li class="early-single fire-list">
					<article>
						<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生火情</span></h5>
						<h4>							
							<a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
							<a href=""><i class="fas fa-bullseye" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
							<a href=""><span class="badge">1</span></a>
						</h4>
					</article>
					<var>
						<p class="col-sm-8">
							<i class="fas fa-user-alt"><span>段亚伟</span></i>
							<i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
						</p>
						<p class="col-sm-4">							
							<span class="badge">98s</span><span class="badge">12:36:47</span>
						</p>
					</var>
				</li>
				<!-- 单条报警循环li -->
				<li class="early-single warning-list">
					<article>
						<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生警报</span></h5>
						<h4>							
							<a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
							<a href=""><i class="fas fa-bullseye" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
							<a href=""><span class="badge">1</span></a>
						</h4>
					</article>
					<var>
						<p class="col-sm-8">
							<i class="fas fa-user-alt"><span>A365F57A89D</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
						</p>
						<p class="col-sm-4">							
							<span class="badge">332s</span><span class="badge">12:36:47</span>
						</p>
					</var>
				</li>
				<!-- 聚合报警循环li -->
				<li class="early-more warning-list">
					<article>
						<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>多处发生报警</span></h5>
						<h4>							
							<a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
							<a href=""><i class="fas fa-bullseye" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
							<a href=""><span class="badge">14</span></a>
						</h4>
					</article>
					<var>
						<p class="col-sm-8">
							<i class="icon iconfont icon-xiaofangshuan-xian-" title="消防栓5个"><span>5</span></i>
							<i class="icon iconfont icon-jiankong-mian-" title="监控摄像头4个"><span>4</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-" title="灭火器2个"><span>2</span></i>
							<i class="icon iconfont icon-xiaofangshuan-xian-" title="消防栓5个"><span>5</span></i>
						</p>
						<p class="col-sm-4">							
							<span class="badge">2769s</span><span class="badge">12:36:47</span>
						</p>
					</var>
				</li>
				<!-- 聚合隐患循环li -->
				<li class="early-more dangers-list">
					<article>
						<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>多处发生隐患</span></h5>
						<h4>							
							<a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
							<a href=""><i class="fas fa-bullseye" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
							<a href=""><span class="badge">14</span></a>
						</h4>
					</article>
					<var>
						<p class="col-sm-8">
							<i class="icon iconfont icon-xiaofangshuan-xian-" title="消防栓5个"><span>5</span></i>
							<i class="icon iconfont icon-jiankong-mian-" title="监控摄像头4个"><span>4</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-" title="灭火器2个"><span>2</span></i>
							<i class="icon iconfont icon-xiaofangshuan-xian-" title="消防栓5个"><span>5</span></i>
						</p>
						<p class="col-sm-4">							
							<span class="badge">2769s</span><span class="badge">12:36:47</span>
						</p>
					</var>
				</li>
				<!-- 单条故障循环li -->
				<li class="early-single fault-list">
					<article>
						<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生故障</span></h5>
						<h4>							
							<a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
							<a href=""><i class="fas fa-bullseye" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
							<a href=""><span class="badge">1</span></a>
						</h4>
					</article>
					<var>
						<p class="col-sm-8">
							<i class="fas fa-user-alt"><span>A365F57A89D</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
						</p>
						<p class="col-sm-4">							
							<span class="badge">332s</span><span class="badge">12:36:47</span>
						</p>
					</var>
				</li>
				<!-- 单条隐患循环li -->
				<li class="early-single dangers-list">
					<article>
						<h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生隐患</span></h5>
						<h4>							
							<a href=""><i class="icon iconfont icon-suo-guan-mian-" title="锁定"></i></a>
							<a href=""><i class="fas fa-bullseye" title="详情"></i></a>
							<a href=""><i class="icon iconfont icon-guanbi-mian-" title="关闭"></i></a>
							<a href=""><span class="badge">1</span></a>
						</h4>
					</article>
					<var>
						<p class="col-sm-8">
							<i class="fas fa-user-alt"><span>A365F57A89D</span></i>
							<i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
						</p>
						<p class="col-sm-4">							
							<span class="badge">36s</span><span class="badge">12:36:47</span>
						</p>
					</var>
				</li>
			</ul>
		</section>
	</div>
</template>
