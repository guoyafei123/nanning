<template>
    <div class="row" id="alarm">
      <!-- #头部 -->
      <header-vue></header-vue>
      <!-- #头部 End-->
      <!-- #左边 -->
      <template>
      <section id="left" class="position-fixed-left z-index-20">
        <div class="overlay"></div>
          <div class="row toolleft margin-right0 size-12">
            <!-- 全部警报 -->
            <section class="common-left-statistics common-top-statistics" id="toolcount">
                <ul class="list-unstyled">
                    <li class="col-sm-7 text-left">
                      <!-- 全部警报发生数量 -->
                      <div class="size-50 font-red">
                        <i class="icon iconfont icon-jingshi-mian- size-50"></i><span>174</span> 
                      </div>
                      <!-- 全部警报title -->
                      <div class="margin-top20">
                        <small>Alarm Number</small>
                        <h3><span class="badge badge-statistics bg-blue font-black">全部</span>警报</h3>
                      </div>
                    </li>
                    <li class="col-sm-5 mian-pie-chart">
                      <!-- 全部警报占比（饼图） -->
                      <div>全部警报占比（饼图）</div>
                    </li>
                    <li class="col-sm-12 margin-top10">
                      <!-- 历史未解决，已确认，复位/关闭 -->
                      火情数量 <span class="margin-right20">3</span>
                      报警数量 <span class="margin-right20 font-blue">69</span>
                      故障数量 <span class="margin-right20">73</span>
                    </li>
                </ul>        
            </section>
            <!-- 分类警报数量 -->
            <section class="col-sm-12 card-list margin-top60">
              <ul class="list-inline">
                <li>
                  <h3>未解决</h3>
                  <h2><i class="icon iconfont icon-icon-test"></i><br><strong>63</strong></h2>
                </li>                
                <li>
                  <h3>已确认</h3>
                  <h2><i class="icon iconfont icon-huiyuanquerendaodian"></i><br><strong>57</strong></h2>
                </li>
                <li>
                  <h3>复位/关闭</h3>
                  <h2><i class="icon iconfont icon-guanbi2"></i><br><strong>49</strong></h2>
                </li>
              </ul>              
            </section>
            <!-- 警报数量变化趋势 -->
            <section class="col-sm-12 font-gray-999 common-left-statistics margin-top60">
              <div class="row">
                <div class="col-sm-6">
                  <small>Historical Trend</small>
                  <h3><span class="badge badge-statistics bg-blue font-black">历史</span>趋势</h3>
                </div>
                <div class="col-sm-6 text-right">
                  <h4 class="toolroute-padding8 popup-routebtn font-gray-666 display-block">
                    <i class="icon iconfont icon-weibiaoti10 size-12" data-toggle="tooltip" title="全屏"></i>
                  </h4>
                  <span class="indexdateabox alarmdate margin-top5">
                    <b class="indexdateactive">日</b>
                    <b>月</b>
                    <b>年</b>
                  </span>
                </div>
                <div class="toolcount">
                    <div class="clearfix text-center">
                      <abbr class="point-blush">火情</abbr>
                      <abbr class="point-red">报警</abbr>
                      <abbr class="point-orange">故障</abbr>
                    </div>
                    <div id="call_charline" style="width: 100%;height:160px;margin: 0 auto;"></div>
                </div>
              </div>
            </section>
          </div>
      </section>
    </template>
      <!-- #左边 End-->
      <!-- #右边 -->
      <section id="right" class="position-fixed-right z-index-20">
        <div class="overlay"></div>
        <!-- <call_right-vue></call_right-vue> -->
        <template>          
            <div class="toolright">
                <!-- 筛选 -->
                <section class="my-filter padding5 bg-gray-222 clearfix">
                  <!-- 单位筛选 -->
                  <div class="col-sm-3 padding0">
                    <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <!-- 日期筛选 -->
                  <div class="col-sm-9 padding0">
                    <div class="upd-elmdate">
                      <el-date-picker
                        v-model="value7"
                        size="mini"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2">
                      </el-date-picker>
                    </div>
                  </div>
                </section>                
                <section class="dan-lineinfo">
                  <!-- 区域/单位统计 -->
                  <div class="row unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择单位 -->                  
                    <div class="col-sm-7">
                      <div class="personinfo">
                        <p>
                          <span class="size-20 font-blue">中心小学</span>
                          <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                        </p>
                        <p>
                          <span><i class="el-icon-location"></i> 广西省南宁市良庆区银海大道710-2号</span>
                        </p>
                      </div>
                    </div>
                    <!-- 已选择单位警报总数 -->                  
                    <div class="col-sm-5 font-white text-right">                      
                      <i class="icon iconfont icon-jingshi-mian- size-14 font-red"></i> 警报总数<br>
                      <span class="size-22 font-blue">174</span>
                    </div>
                    <!-- 柱形图 -->
                    <div class="col-sm-12 margin-top20">
                        <div class="margin-bottom10">
                          <span class="bg-gray-999 font-black" style="width:100px; line-height: 24px;margin-right:6px;padding-left: 6px;display: inline-block;">报警</span>
                        </div>
                        <div class="margin-bottom10">
                          <span class="bg-blue font-black" style="width:200px; line-height: 24px;margin-right:6px;padding-left: 6px;display: inline-block;">故障</span>
                          <span>总数 <span class="font-blue">85</span>  占比 <span class="font-blue">63.7%</span></span>
                        </div>
                        <div class="margin-bottom10">
                          <span class="bg-gray-333 font-black" style="width:60px; line-height: 24px;margin-right:6px;padding-left: 6px;display: inline-block;">火情</span>
                        </div>
                    </div>
                  </div>
                  <!-- 警报列表 -->
                  <section class="early-warning margin-top20">
                    <span class="toolroute-rect bg-blue"></span>
                    <!-- 标题 -->
                    <div class="early-title">
                      <small>Alarm-Records</small>
                            <h3>警报记录
                              <a class="pull-right size-12 openmenulist"><span class="unit-btn-open">展开 <i class="fas fa-chevron-up font-blue"></i></span><span class="unit-btn-close" style="display: none;">折叠 <i class="fas fa-chevron-down font-blue"></i></span></a>
                          </h3>
                    </div>      
                    <!-- 报警时循环li标签class样式调用
                      火灾 fire-list    聚合li>article>h4>span.badge 
                      报警 warning-list
                      故障 fault-list
                      隐患 dangers-list
                      复位/解决/关闭  ok-list
                      锁定 a标签加active
                     -->
                     <!-- 列表 -->
                    <div class="early-tab">
                      <ul class="col-lg-12 col-md-12 col-sm-12 early-menu list-inline margin-bottom0 nav nav-tabs">
                        <li class="col-lg-3 col-md-3 col-sm-3 active">
                          <a href="#fire-list" data-toggle="tab">
                            <h4><span>2</span></h4>
                            <small>火情记录</small>            
                          </a>
                        </li>
                        <li class="col-lg-3 col-md-3 col-sm-3">
                          <a href="#warning-list" data-toggle="tab">
                            <h4><span>4</span></h4>
                            <small>报警记录</small>            
                          </a>
                        </li>
                        <li class="col-lg-3 col-md-3 col-sm-3">
                          <a href="#fault-list" data-toggle="tab">
                            <h4><span>4</span></h4>
                            <small>故障记录</small>            
                          </a>
                        </li>                        
                        <li class="col-lg-3 col-md-3 col-sm-3">
                          <a href="#ok-list" data-toggle="tab">
                            <h4><span>3</span></h4>
                            <small>复位/关闭</small>
                          </a>
                        </li>
                      </ul>
                      <div id="myTabContent" class="tab-content">
                        <!-- 火情记录 -->
                        <div class="tab-pane fade" id="fire-list">
                          <ul class="early-list list-unstyled">
                            <!-- 单条火灾循环li -->
                            <li class="early-single fire-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>火情解决</span></h5>
                                <h4>              
                                  <a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                                  <i class="icon iconfont icon-rengongbaojing-xian-"><span>人工报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">98s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条火灾循环li -->
                            <li class="early-single fire-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>火情解决</span></h5>
                                <h4>              
                                  <a><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-huoyan"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-shebeibaojing-mian-"><span>设备报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">98s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <li>
                              <span class="font-white">导出</span> <span class="font-white">打印</span> <span class="pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                        <!-- 报警记录 -->
                        <div class="tab-pane fade in active" id="warning-list">
                          <ul class="early-list list-unstyled">                            
                            <!-- 单条报警循环li -->
                            <li class="early-single warning-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生报警</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-miehuoqi-mian-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-shebeibaojing-mian-"><span>设备报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条报警循环li -->
                            <li class="early-single warning-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生报警</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                                  <i class="icon iconfont icon-rengongbaojing-xian-"><span>人工报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li> 
                            <!-- 单条报警循环li -->
                            <li class="early-single warning-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生报警</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-hongwaiyanhuoganying-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-shebeibaojing-mian-"><span>设备报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li> 
                            <!-- 单条报警循环li -->
                            <li class="early-single warning-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生报警</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-xunjianyuan-mian-"><span>段亚伟</span></i>
                                  <i class="icon iconfont icon-rengongbaojing-xian-"><span>人工报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <li>
                              <span class="font-white">导出</span> <span class="font-white">打印</span> <span class="pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                        <!-- 故障记录 -->
                        <div class="tab-pane fade" id="fault-list">
                          <ul class="early-list list-unstyled">
                            <!-- 单条故障循环li -->
                            <li class="early-single fault-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生故障</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-gaoweiqiti-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-guzhang-gai-xian-"><span>故障</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条故障循环li -->
                            <li class="early-single fault-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生故障</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-hongwaiyanhuoganying-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-guzhang-gai-xian-"><span>故障</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <li>
                              <span class="font-white">导出</span> <span class="font-white">打印</span> <span class="pull-right">分页</span>
                            </li>
                          </ul>
                        </div>                        
                        <!-- 复位/关闭 -->
                        <div class="tab-pane fade" id="ok-list">
                          <ul class="early-list list-unstyled">
                            <!-- 单条火灾已解决循环li -->
                            <li class="early-single fire-list ok-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>火情已解决</span></h5>
                                <h4>              
                                  <a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-gaoweiqiti-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">98s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条报警已复位循环li -->
                            <li class="early-single warning-list ok-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>报警复位</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条故障已复位循环li -->
                            <li class="early-single fault-list ok-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>故障复位</span></h5>
                                <h4>              
                                  <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                                  <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                                  <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                                  <a href=""><span class="badge">1</span></a>
                                </h4>
                              </article>
                              <var>
                                <p class="col-sm-8">
                                  <i class="icon iconfont icon-hongwaiyanhuoganying-"><span>A365F57A89D</span></i>
                                  <i class="icon iconfont icon-guzhang-gai-xian-"><span>故障</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">332s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <li>
                              <span class="font-white">导出</span> <span class="font-white">打印</span> <span class="pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
                <!-- 警报详情 -->
                <section class="dan-iteminfo display-none overflow-scr">
                  <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
                    <section>
                      <div class="textandimg row imgs-nthof-block">
                        <h4 class="p-title">报警信息</h4>
                        <div class="row textandimg-main padding-left15">
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">报警源 </span>
                            <!-- <td v-if="ins_getAlarmDetail.isUser==0">{{ins_getAlarmDetail.deviceTypeName}}</td>
                            <td v-if="ins_getAlarmDetail.isUser==1">{{ins_getAlarmDetail.nickName}}</td> -->
                            <span class="size-12 font-gray-999" v-if="ins_getAlarmDetail.userId==0">{{ins_getAlarmDetail.deviceTypeName}}</span>
                            <span class="size-12 font-gray-999" v-if="ins_getAlarmDetail.userId==1">{{ins_getAlarmDetail.nickName}}</span>
                          </div>
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">报警地点 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.unitName}}&nbsp;{{ins_getAlarmDetail.buildingName}}&nbsp;{{ins_getAlarmDetail.floorNumber}}&nbsp;{{ins_getAlarmDetail.roomNumber}}</span>
                          </div>
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">报警时间 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.startTime}}</span>
                          </div>
                          <div class="col-sm-12">
                            <!-- <span class="size-12 font-gray-666">描述 </span> -->
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.remark}}</span>
                          </div>
                          <!-- <div class="textandimg-img imgs-nthof">
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                                <video :src="item" width="100%"  controls="controls"></video>
                              </div>
                            </template>
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                                <img :src="item">
                              </div>
                            </template>
                          </div> -->
                        </div>
                        <h4 class="p-title">报警确认</h4>
                        <div class="row textandimg-main padding-left15">
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">确认人 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.confirmNickName}}</span>
                          </div>
                          <div class="col-sm-12">
                            <span class="size-12 font-gray-666">确认时间 </span>
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.confirmTime}}</span>
                          </div>
                          <div class="col-sm-12">
                            <!-- <span class="size-12 font-gray-666">描述 </span> -->
                            <span class="size-12 font-gray-999">{{ins_getAlarmDetail.confirmReason}}</span>
                          </div>
                          <div class="textandimg-img imgs-nthof">
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                                <video :src="item" width="100%"  controls="controls"></video>
                              </div>
                            </template>
                            <template v-for="item in ins_getAlarmDetail.imgUrl">
                              <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                                <img :src="item">
                              </div>
                            </template>
                          </div>
                        </div>
                        <template v-if="infoShow"> 
                          <h4 class="p-title">报警关闭</h4>
                          <div class="row textandimg-main padding-left15">
                            <div class="col-sm-12">
                              <span class="size-12 font-gray-666">关闭 </span>
                              <span class="size-12 font-gray-999">{{ins_getAlarmDetail.cancelNickName}}</span>
                            </div>
                            <div class="col-sm-12">
                              <span class="size-12 font-gray-666">关闭时间 </span>
                              <span class="size-12 font-gray-999">{{ins_getAlarmDetail.cancelTime}}</span>
                            </div>
                            <!-- <div class="textandimg-img imgs-nthof">
                              <template v-for="item in ins_getAlarmDetail.imgUrl">
                                <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                                  <video :src="item" width="100%"  controls="controls"></video>
                                </div>
                              </template>
                              <template v-for="item in ins_getAlarmDetail.imgUrl">
                                <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                                  <img :src="item">
                                </div>
                              </template>
                            </div> -->
                          </div>
                        </template>
                      </div>
                    </section>
                </section>
            </div>
        </template>
      </section>
      <!-- #右边 End-->
    <!-- 弹窗 -->
    <el-dialog title="" :visible.sync="dialogVisible" top="120px" style="background-color: rgba(0,0,0,1);">
      <a class="go-back" @click="dialogVisible = false" data-toggle="tooltip" title="关闭"><i class="el-icon-circle-close-outline size-24"></i></a>
      <earlyinfo-vue></earlyinfo-vue>
    </el-dialog>
    </div>
</template>

<script>
import HeaderVue from "./header.vue";
import earlyinfoVue from './earlyinfo.vue';
import { realconsole } from '../assets/js/management.js'
// import Call_leftVue from './call_left.vue';
// import Call_rightVue from './call_right.vue';
export default {
  components: {
    "header-vue": HeaderVue,
    'earlyinfo-vue':earlyinfoVue
    // 'call_left-vue':Call_leftVue,
    // 'call_right-vue':Call_rightVue
  },
  data() {
    return {
      // 单位筛选下拉框
      options: [
        {
          value: "选项1",
          label: "南宁市良庆区"
        },
        {
          value: "选项2",
          label: "南宁市兴宁区"
        },
        {
          value: "选项3",
          label: "南宁市横县"
        }
      ],
      ins_queryInspectionNameListvalue: "全部单位",
      // 弹报警详情
      dialogVisible: false,
      // 日,月,年
        radioDate: '日',
      // 时间配置
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: "",

      ins_queryInspectionNameList: Object,
      ins_queryInspectionNameListvalue: "全部单位",
      // 表格-请求
      getAlarmList_parameter: {
        unitId: "5",
        currentPage: 1,
        pageSize: 10
      },
      // 报警统计-请求
      tableData: Object,
      queryAlarmStats_parameter: {
        unitId: "4"
      },

      ins_queryAlarmStats: Object,
      // 报警数据统计
      getAlarmCount_parameter:{
        unitId:'4',
        beginTime: "2018-06-01",
        endTime: "2018-07-30"
      },
      radiovalue:'1',
      ins_getAlarmCount:Object,
      // 饼图数据
      getAlarmRate_parameter: {
        unitId: "4",
        beginTime: "2018-06-01",
        endTime: "2018-07-30",
        type:1
      },
      ins_getAlarmRate: Object,
      // 折线图数据
      getHistoryAlarmRate_parameter: {
        unitId: "4",
        beginTime: "2018-06-21",
        endTime: "2018-07-30",
        type: 1
      },
      ins_getHistoryAlarmRate: Object,
      // 报警详情
      getAlarmDetail_parameter: {
        alarmId: 555
      },
      ins_getAlarmDetail: Object,
      infoShow:true
    };
  },
  methods: {
    // 返回
    jianzhu() {
      $(".dan-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    toitmeinfo(item) {
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      // 请求报警详情
      let eventLevel=item.eventLevel;
      console.log(item)
      if(eventLevel==0 ||eventLevel==2){
        this.infoShow=true;
      }else{
        this.infoShow=false;
      }
      this.getAlarmDetail_parameter.alarmId = item.id;
      this.$fetch("/api/alarm/getAlarmDetail", this.getAlarmDetail_parameter)
        .then(response => {
          if (response) {
            console.log(response);
            this.ins_getAlarmDetail = response.data.alarm;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页:` + val);
      this.getAlarmList_parameter.currentPage = val;
      this.getTable();
    },
    tolineitem() {
      console.log(this.ins_queryInspectionNameListvalue);
      $("#lookroute").removeClass("upd-btn-dis");
    },
    callradio(){
      console.log(this.radiovalue);
      this.getAlarmRate_parameter.type=this.radiovalue;
      this.get_Pie();
    },
    getTable() {
      // 请求报警列表
      this.$fetch("/api/alarm/getAlarmList", this.getAlarmList_parameter)
        .then(response => {
          if (response) {
            console.log(response);
            this.tableData = response.data.pager;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    getData() {
      // 请求报警统计
      this.$fetch(
        "/api/alarm/queryAlarmStats",
        this.queryAlarmStats_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_queryAlarmStats = response.data.result;
        }
      })
      .then(err => {
        console.log(err);
      });

      // 请求报警数据统计
      this.$fetch(
        "/api/alarm/getAlarmCount",
        this.getAlarmCount_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_getAlarmCount = response.data.alarmCount;
          // this.draw_piemin(
          //     "call_charpiemin",
          //     response.data.alarmCount
          //   );
        }
      })
      .then(err => {
        console.log(err);
      });

      

      // 请求折线图数据
      this.$fetch("/api/alarm/getHistoryAlarmRate", this.getHistoryAlarmRate_parameter)
        .then(response => {
          if (response) {
            this.ins_getHistoryAlarmRate = response.data;
            console.log(this.ins_getHistoryAlarmRate);
            this.draw_line("call_charline", response.data.historyAlarmRate);
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    get_Pie(){
      // 请求报警饼图数据
      this.$fetch("/api/alarm/getAlarmRate", this.getAlarmRate_parameter)
      .then(response => {
        if (response) {
          this.ins_getAlarmRate = response.data.alarmRate[0] 
          // this.draw_piemax(
          //   "call_charpiemax",
          //   this.ins_getAlarmRate,
          //   this.getAlarmRate_parameter.type
          // );
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    draw_piemin(id, data) {
      let a = data.peopleAlarm / data.alarmSum * 100;
      let b = data.deviceAlarm / data.alarmSum * 100;
      let d;
      if (data.alarmSum == 0) {
        d = [
          {
            value: 0,
            name: "暂无统计",
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          }
        ];
      } else {
        d = [
          {
            value: data.peopleAlarm,
            name: "人工报警" + a.toFixed(2) + "%",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          },
          {
            value: data.deviceAlarm,
            name: "设备报警" + b.toFixed(2) + "%",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          }
        ];
      }
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 3) == "人工报") {
              name = "人工报警";
            } else if (data.name.substring(0, 3) == "设备报") {
              name = "设备报警";
            }
            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#333"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      chars.setOption(char);
    },
    draw_piemax(id, data,type) {
      let name;
      if(type==1){
        name="单位报警率" + data.alarmRate+"%"
      }else{
        name="火情发生率" + data.alarmRate+"%"
      }
      let d = [
          {
            value: data.unitAlarm,
            // value: 2,
            name: name,
          },
          {
            value: data.sumAlarm-data.unitAlarm,
            // value: 4,
            name: "未完成",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: false
              }
            }
          },
        ];
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 2) == "单位") {
              name = "单位报警数";
            } else if (data.name.substring(0, 2) == "火情") {
              name = "火情发生数";
            }else{
              name=data.name
            }

            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#c69e00", "#ff7800", "#f13131", "#ccc"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      // chars.setOption({});
      chars.setOption(char);
    },
    draw_line(id, data) {
      // 巡检完成率历史趋势曲线图
      // let data = response.data.result.dateMap;
      let a = [],
        b = [];
      for (var value in data) {
        a.push(value);
        b.push(data[value]);
      }
      // console.log(a);
      // console.log(b);
      var char = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: a,
          show: true,
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },

        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ["#333"]
            }
          }
        },

        // 调整实际显示的 margin
        grid: {
          y: 30,
          x2: 10,
          y2: 30,
          x: 40,
          borderWidth: 1
        },
        // 数据
        series: [
          {
            data: b,
            type: "line",
            symbol: "none",
            smooth: true,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#999"
                }
              ]
            }
          }
        ],
        tooltip: {
          enterable: true,
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        }
      };
      let charf = this.$echarts.init(document.getElementById(id));
      charf.setOption(char);
    },
  },
  mounted() {
    realconsole();
    this.$store.commit('route_path',this.$route.path);
    this.getTable();
    this.getData();
    this.get_Pie();
  }
};
</script>

<style scoped>
.row {
  position: relative;
  z-index: 22;
}
.line-height50{
  line-height: 50px;
}
</style>
