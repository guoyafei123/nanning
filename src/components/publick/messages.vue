<template>
	<section id="messages" class="col-sm-2 bg-gray-111 margin-top20 clearfix">
		<div class="row bg-gray-222 padding-top20">
			<!-- 框架标题 -->
			<div class="messages-title">
				<h2>消息中心<small>messages</small></h2>
				<a><i class="icon iconfont icon-fasong-xian- size-20" data-toggle="tooltip" title="发消息"></i></a>
			</div>
			<!-- 标签 -->
			<ul id="myTab" class="nav nav-tabs">
				<li class="active">
					<a href="#system">系统<span class="point"><!-- 新消息提示 --></span></a>
				</li>
				<li>
					<a href="#warning">警报</a>
				</li>
				<li>
					<a href="#dangers">隐患</a>
				</li>
			</ul>
		</div>
		<!-- 消息列表 li 标签加class 更换消息类型及状态 
        活动 activity
        系统 system
        报警 warning
        隐患 dangers
        未读 unread
        解决/复位  ok
      -->
		<div id="myTabContent" class="tab-content messages-list">
			<!-- 系统消息 -->
			<div class="tab-pane fade in active" id="system">
				<ul>
					<li class="activity unread">
						<h3 @click="showTabcont()"><span>“欢度国庆”</span>商场全场打折</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
					<li class="activity unread">
						<h3 @click="showTabcont()"><span>“欢度国庆”</span>商场全场打折</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
					<li class="system unread">
						<h3 @click="showTabcont()">近日进行大扫除</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
					<li class="activity">
						<h3 @click="showTabcont()"><span>“欢度国庆”</span>商场全场打折</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
					<li class="system">
						<h3 @click="showTabcont()">近日进行大扫除</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
					<li class="activity">
						<h3 @click="showTabcont()"><span>“欢度国庆”</span>商场全场打折</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
					<li class="system">
						<h3 @click="showTabcont()">近日进行大扫除</h3>
						<small>活动通知<span>15:23:67</span></small>
					</li>
				</ul>
			</div>
			<!-- 警报消息 -->
			<div class="tab-pane fade" id="warning">
				<ul>
					<li class="fire unread">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>发生火情</span></h3>
						<small>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="fire unread ok">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>火情解除</span></h3>
						<small>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="warning unread">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>发生报警</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="warning unread ok">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>报警复位</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="fault">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>发生故障</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="fault ok">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>故障复位</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
				</ul>
			</div>
			<!-- 隐患消息 -->
			<div class="tab-pane fade" id="dangers">
				<ul>
					<li class="dangers unread">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>发生隐患</span></h3>
						<small>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="dangers unread ok">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>隐患解除</span></h3>
						<small>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="dangers unread">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>发生隐患</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="dangers unread ok">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>隐患复位</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="dangers">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>发生隐患</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
					<li class="dangers ok">
						<h3 @click="showTabcont()">东区教学楼3层1203室<span>隐患复位</span></h3>
						<small>
                <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                <span>15:23:67</span>
              </small>
					</li>
				</ul>
			</div>
			<a class="btn-back">查看更多</a>
		</div>
		<!-- 消息内容 -->
		<div id="TabCont" class="messages-list hide">
			<div class="messages-cont">
				<ul>
					<li class="activity ok">
						<h3>“欢度国庆”商场全场打折</h3>
						<article class="row">
							<small class="col-xs-6">
                发 布 者：<b>段亚伟</b>
                </small>
							<small class="col-xs-6">
                  <b>2018-09-23 15:23:56</b>
                </small>
							<small class="col-xs-12">
                活动时间：<b>2018-09-23 - 2018-10-23</b>
                </small>
							<small class="col-xs-6">
                  活动状态：<b>进行中</b>
                </small>
							<small class="col-xs-6">
                  重 要 性：<b>非常重要</b>
                </small>
							<small class="col-xs-6">
                  预计人数：<b>126</b>
                </small>
							<small class="col-xs-6">
                危 险 源：<b>有</b>
                </small>
							<small class="col-xs-6">
                  明   火：<b>是</b>
                </small>
							<small class="col-xs-6">
                  禁   烟：<b>是</b>
                </small>
							<small class="col-xs-6">
                  场地空旷：<b>是</b>
                </small>
						</article>
						<p>
							活动内容：
							<span>随便写一段话吧，因为我也不知道该写些什么出来给大家看，智能凑字数，如果字数不够，我会用其他文字来代替，比如123456或456789，如果这还不够的话，我只能打省略号了。。。。。。
              </span>
						</p>
					</li>
				</ul>
			</div>
			<button class="btn-back" @click="showTablist()"><i class="fas fa-chevron-left"></i> 返回</button>
		</div>
	</section>
</template>

<script>
	export default {
		// 数据接入
		data() {
			return {

			};
		},
		// 调用方法 
		methods: {
			// tab切换
			showTab() {
				let that = this;
				$('#myTab a').click(function(e) {
					e.preventDefault()
					$(this).tab('show');
					that.showTablist();
				})
			},
			// 显示内容
			showTabcont() {
				$("#TabCont").addClass("show");
				$("#myTabContent").addClass("hide")

			},
			// 返回列表
			showTablist() {
				$("#myTabContent").removeClass("hide");
				$("#TabCont").removeClass("show");
			},
		},
		// 默认加载方法
		mounted() {
			$("[data-toggle='tooltip']").tooltip();
			this.showTab();
		}
	};
</script>