<template>
  <div class="row" id="inspection">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <!-- <ins_left-vue v-bind:ins_planInspectionCount='ins_planInspectionCount'></ins_left-vue> -->
      <template>
        <div class="toolleft margin-right0">
          <section>
            <div class="toolcount">
              <div class="set-width-50 font-gray-999 padding-right0 size-12">
                <ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
                  <li>
                    <p class="toolcount-p1">0</p>
                  <li> 
                    <p class="size-10">Complete Statistics</p>
                  </li>
                  <li>
                    <p class="size-18 font-blue">今日巡检完成</p>
                  </li>
                  <li class="margin-top20">
                    <p>巡检路线</p>
                    <p class="font-italic float-right size-14">{{ins_planInspectionCount.plancount}}</p>
                  </li>
                  <li>
                    <p>巡检中</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_planInspectionCount.planing}}</p>
                  </li>
                  <li>
                    <p>巡检人数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_planInspectionCount.plansum}}</p>
                  </li>
                </ul>
              </div>
              <div class="set-width-50 display-inline-block font-gray-999 toolcount-right size-12">
                <ul class="padding-left0 margin-bottom0">
                  <li class="toolcount-right-title">
                    <p class="size-26 font-blue">巡检统计</p>
                  </li>
                  <li class="toolcount-right-explain">
                    <p class="size-10">Inspection Statistics</p>
                  </li>
                  <li>
                    <p>今日完成率</p>
                    <p class="font-italic float-right size-14">{{ins_planInspectionCount.dayRate}}</p>
                  </li>
                  <li>
                    <p>近7日</p>
                    <p class="font-italic float-right size-14">{{ins_planInspectionCount.weekRate}}</p>
                  </li>
                  <li>
                    <p>近30日</p>
                    <p class="font-italic float-right size-14">{{ins_planInspectionCount.monthRate}}</p>
                  </li>
                  <li>
                    <p>历史统计</p>
                    <p class="font-italic float-right size-14">{{ins_planInspectionCount.historyRate}}</p>
                  </li>
                  <li>
                    <p class="margin-bottom0">隐患发现率</p>
                    <p class="font-orange font-italic margin-bottom0 float-right size-14">{{ins_planInspectionCount.troubleRate}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolroute font-gray-999 margin-left37">
              <span class="toolroute-rect bg-blue"></span>
              <ul class="padding-left10 padding-right5 clearfix">
                <li>
                  <p class="font-gray-666 size-12">中心小学</p>
                </li>
                <li>
                  <p class="font-blue size-16">巡检路线
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                        <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </p>
                </li>
                <li>
                    <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择"  @change="tolineitem">
                      <el-option v-for="item in ins_queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
                      </el-option>
                    </el-select>
                    <div class="float-right margin-top5">
                      <!-- <a class="upd-btn upd-btn-dis" id="lookroute"  @click="lookroute">查看路线</a> -->
                      <!-- <a class="upd-btn">展开表单</a> -->
                    </div>
                </li>
                <li>
                    <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
                      <thead>
                        <tr>
                          <!-- <th>序号</th> -->
                          <th>巡检单号</th>
                          <th>巡检员</th>
                          <th>状态</th>
                          <th>完成时间</th>
                          <th>查看</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
                          <!-- <td>{{(queryPlanUserList_parameter.currentPage-1)*queryPlanUserList_parameter.pageSize+index+1}}</td> -->
                          <td>{{item.idCode}}</td>
                          <td>{{item.userName}}</td>
                          <td>{{item.status}}</td>
                          <td>{{item.finishedTime}}</td>
                          <td>
                            <a v-on:click="toitmeinfo(item)">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </li>
                <li class="upd-pagin">
                  <div>
                    <el-pagination style="float: left;"
                      small
                      layout="total"
                      :total="tableData.totalRow">
                    </el-pagination>
                    <span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{tableData.totalPage}}页</span>
                    <el-pagination style="float: right;background: transparent"
                      small
                      layout="prev, pager, next"
                      :page-size="this.queryPlanUserList_parameter.pageSize"
                      :total="tableData.totalRow" 
                      current-page.sync="tableData.currentPage"
                      @current-change="handleCurrentChange">
                    </el-pagination>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </template>

    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right z-index-20">
      <div class="overlay"></div>
      <!-- <ins_right-vue v-bind:ins_planInspectionCount='ins_planInspectionCount'></ins_right-vue> -->
      <template>
        <div class="toolright">
          <!-- 筛选 -->
          <section class="my-filter padding5 bg-gray-222 clearfix">
                  <!-- 单位筛选 -->
                  <div class="col-sm-3 padding0">
                    <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="ins_queryInspectionNameListvalueTwo" placeholder="瑞和家园">
                      <el-option v-for="item in ins_queryInspectionNameList"  :key="item.name" :label="item.name" :value="item.name">
                      </el-option>
                    </el-select>
                  </div>
                  <!-- 日期筛选 -->
                  <div class="col-sm-9 padding0">
                    <section>
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
                  </section>
                  </div>
          </section>
            <!-- <section>
                <div class="personinfo">
                  <p>
                    <span class="size-20">控烟严格巡查</span>
                    <span class="bgbox-min bg-gray-666 font-black">举报检查</span>
                    <span class="bgbox-min bg-blue font-black">每天4次</span>
                    <span class="float-right">
                              <span class="font-blue">
                                  <i class="fas fa-industry"></i> 进行中</span>
                          </span>
                  </p>
                  <p>
                    <span><i class="fa fa-th-large"></i> 中心小学</span>
                    <span class="float-right set-positiontop2">最新更新 <span class="font-gray-999">2018.7.6 08:00:00</span></span>
                  </p>
                </div>
              </section>-->
            <section class="inspection-iteminfo display-none">
              <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
              <section class="margin-top20">
                <div class="personinfo">
                  <p>
                    <span class="size-20 font-blue">巡检单号</span>
                    <span class="bgbox-min bg-gray-666 font-black size-10">巡检类型</span>
                    <span class="float-right">
                      <span class="bgbox-max bg-blue font-black size-10">
                          <i class="fas fa-flag-checkered size-12"></i> 已领取</span>
                      <span class="bgbox-max bg-blue font-black size-10">
                          <i class="fas fa-check-circle size-12"></i> 已完成</span>
                  </span>
                  </p>
                  <p class="col-sm-7 text-left padding0">
                    <span><i class="fas fa-industry"></i> 中心小学</span>
                  </p>
                  <p class="col-sm-5 text-right padding0">
                    最新更新:<strong class="font-gray-999">2018-16:23 13:56:37</strong>            
                  </p>
                </div>
            </section>
              <section>
                <div class="row toolcount margin-top20">
                  <div class="col-sm-4 font-gray-999 padding0">
                    <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                        <h1 class="toolcount-p1 font-yellow">17</h1>
                      </li>
                      <li class="margin-top30">
                        <p class="size-10">Discovery</p>
                      </li>
                      <li>
                        <p class="size-16 font-blue">巡检隐患发现</p>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-8 font-gray-999 padding-left0 padding-right0 position-relative">
                    <div class="toolbuildrate-people text-center position-absolute-right margin-right20">
                        <img src="../assets/images/people.png">
                        <br/>                      
                        <template v-if="ins_queryPlanUserDetails.inspectionPlanUser!=null">
                              <span class="size-12 display-inline-block">{{ins_queryPlanUserDetails.inspectionPlanUser.userName}}</span>
                        </template>
                      </div>
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                      <li>
                        <p class="size-18 font-white">任务统计</p>
                      </li>
                      <li>
                        <p class="size-10 set-scaleright">Task Statistics</p>
                      </li>
                      <li class="margin-top10">
                        <p>开始时间 
                          <template v-if="ins_queryPlanUserDetails.inspectionPlanUser!=null">
                            <strong class="font-gray-ccc">{{ins_queryPlanUserDetails.inspectionPlanUser.startTime}}</strong>
                          </template>
                          </p>
                      </li>
                      <!-- <li>
                        <p class="size-12">运行时长 <span class="font-blue">645</span>天</p>
                      </li> -->
                      <li class="row text-center padding-right16 margin-top10">
                        <div class="col-sm-4 personnel-borderright">
                          <p class="size-16 show font-yellow">{{ins_queryPlanUserDetails.totalTrouble}}</p>
                          <p>隐患总数</p>
                        </div>
                        <div class="col-sm-4 personnel-borderright">
                          <p class="size-16 show font-blue">{{ins_queryPlanUserDetails.finishNode}}</p>
                          <p>完成节点</p>
                        </div>
                        <div class="col-sm-4">
                          <p class="size-16 show font-white">{{ins_queryPlanUserDetails.totalNode}}</p>
                          <p>节点总数</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <div class="toolbuildrate margin-top30">
                  <h4 class="p-title">任务详情
                    <a class="float-right toolroute-padding8 popup-routebtn">
                      <i class="icon iconfont icon-xunjian-mian- font-blue"></i> <span class="size-12 font-gray-ccc">第一季度控烟检查</span>
                    </a>
                  </h4>
                  <div class="container-padding20 clearfix">
                    <div class="panel-group tablist-item position-relative" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default bg-none border-none border-radiusnone ">
                        <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
                          <span class="itemtitle-rect"><i class="fas fa-angle-double-down font-black"></i></span>
                          <h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              -<span class="badge itemtitle-value display-inline-block margin-left10 bg-red font-black">1.6</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body padding0">
                            <ul class="size-12 font-gray-999 tablist-itemul">
                              <li v-for="item in ins_queryPlanUserDetails.listNode">
                                <span>{{item.buildingName}} 
                                  <span class="float-right">
                                    <i class="icon iconfont icon-yinhuan-xian- font-yellow size-14 text-left"></i>
                                    <span class="font-blue">{{item.inspectionPlanUserId}} </span>/<span class="font-yellow">{{item.buildingId}}</span>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <span class="toolbuildrate-forter">
                        <span class="itemtitle-rect"><i class="fas fa-flag-checkered font-black"></i></span>
                        <h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              -<span class="badge itemtitle-value display-inline-block margin-left10 bg-orange font-black">1.6</span>
                            </a>
                          </h4>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <div class="table-responsive">
                <h4 class="p-title">任务日志</h4>
                <table class="table size-12 table-condensed toolroute-table margin-top10">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>操作时间</th>
                    <th>巡检员</th>
                    <th>动作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>2018-09-23 08:26:36</td>
                    <td>段亚伟</td>
                    <td>
                      <span class="font-blue">任务完成</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2018-09-23 08:26:36</td>
                    <td>段亚伟</td>
                    <td>
                      <span>正常打卡</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2018-09-23 08:26:36</td>
                    <td>段亚伟</td>
                    <td>
                      <span>正常打卡</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>2018-09-23 08:26:36</td>
                    <td>段亚伟</td>
                    <td>
                      <span class="font-yellow" data-toggle="tooltip" title="二维码损坏">非正常打卡<i class="fas fa-exclamation-circle"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>2018-09-23 08:26:36</td>
                    <td>段亚伟</td>
                    <td>
                      <span class="font-yellow" data-toggle="tooltip" title="二维码丢失">非正常打卡<i class="fas fa-exclamation-circle"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>2018-09-23 08:26:36</td>
                    <td>段亚伟</td>
                    <td>
                      <span class="font-white">任务开始</span>
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td><span class="font-white">导出</span></td>
                      <td><span class="font-white">打印</span></td>
                      <td colspan="3" align="right">分页</td>
                    </tr>
                  </tfoot>
                </table>                
              </div>
            </section>

            <section class="inspection-lineinfo">
              <section class="row margin-top20 clearfix">
                <!-- 已选择单位 -->                  
                <div class="col-sm-7">
                  <div class="personinfo">
                    <p>
                      <span class="size-20 font-blue">中心小学</span>
                      <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                    </p>
                    <p class="text-left padding0">
                      <span><i class="fas fa-industry"></i> 中心小学</span>
                    </p>
                  </div>
              </div>
              <!-- 已选择单位巡检任务总数 -->                  
              <div class="col-sm-5 font-white text-right size-12">                      
                <i class="icon iconfont icon-xunjian-xian- size-14 font-blue"></i> 任务总数<br>
                <span class="size-22 font-blue">1746</span>
              </div>
            </section>
              <section>
                <div class="toolcount margin-top20">
                  <h4 class="p-title">巡检统计</h4>
                  <div class="col-sm-7 font-gray-999 padding-right0 size-12">
                    <div class="row text-center margin-top30">
                      <div class="col-sm-12 text-left margin-bottom20">
                        <p>巡检路线 <span class="font-white">{{ins_planInspectionCount.plancount}} </span>&nbsp; 巡检人员 <span class="font-white">{{ins_planInspectionCount.planing}} </span></p>
                      </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">{{ins_planInspectionCount.amount}}</p>
                        <p>次数统计</p>
                      </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-blue">{{ins_planInspectionCount.finish}}</p>
                        <p>已完成</p>
                      </div>
                      <div class="col-sm-4">
                        <p class="size-16 font-red">{{ins_planInspectionCount.nofinish}}</p>
                        <p>未完成</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
                    <div id="ins_charCount" style="width: 100%;height:150px;margin: 0 auto;"></div>
                  </div>
                </div>
              </section>
              <section>
                <div class="toolcount position-relative">
                  <h4 class="p-title">路线巡检任务完成</h4>
                  <el-select class="upd-elselect upd-elselect-border upd-widht150 margin-top20 margin-left10" size="mini" v-model="ins_queryInspectionNameListvalueTwo" placeholder="请选择">
                    <el-option v-for="item in ins_queryInspectionNameList"  :key="item.name" :label="item.name" :value="item.name">
                    </el-option>
                  </el-select>
                  
                  <div id="ins_charCompletion" style="width: 100%;height:200px;margin: 0 auto;"></div>
                  <div class="toolcount-value">
                    <template v-if="ins_queryTrendPieGraph">
                      <p class="font-gray-999 size-12">额定完成次数:<span class="font-gray-ccc">{{ins_queryTrendPieGraph.amount}}</span>次</p>
                    </template>
                  </div>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top10">
                  <h4 class="p-title">巡检完成率历史趋势
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </h4>
                  <div id="ins_charHistoricaltrend" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>
            </section>

            <section class="inspection-lineitem display-none">
              <section>
                <div class="row toolcount margin-top0">
                  <div class="col-sm-4  font-gray-999 padding-right0">
                    <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                        <p class="font-blue size-50">
                          <!-- <template v-if="ins_queryPlanDetails.planDetails!=null">
                            {{ins_queryPlanDetails.planDetails.amount}}/{{ins_queryPlanDetails.planDetails.finishAmount}}
                          </template> -->
                          3/30
                        </p>
                      </li>
                      <li>
                        <p class="size-10">Running State</p>
                      </li>
                      <li>
                        <p class="size-16 font-blue">任务完成次数</p>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                      <div class="col-sm-7 font-gray-999 padding-left0 padding-right0">
                        <div id="ins_charlookline2" style="width: 100%;height:150px;margin: 0 auto;"></div>
                      </div>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <div class="toolcount">
                  <div class="col-sm-12  font-gray-999 padding-right0">
                    <div class="row text-center">
                      <!-- <template v-if="ins_queryPlanDetails.planDetails"> -->
                        <div class="col-sm-4 personnel-borderright">
                          <p class="size-16 font-white">12</p>
                          <p>隐患发现数</p>
                        </div>
                        <div class="col-sm-4 personnel-borderright">
                          <p class="size-16 font-white">56</p>
                          <p>巡检人数</p>
                        </div>
                        <div class="col-sm-4">
                          <p class="size-16 font-white">8</p>
                          <p>节点数量</p>
                        </div>
                      <!-- </template> -->
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div class="textandimg row">
                  <h4 class="p-title">路线信息</h4>
                  <div class="row textandimg-main padding-left15 size-12">
                    <!-- <template v-if="ins_queryPlanDetails.inspectionPlan">
                        <div class="col-sm-12">
                        <span>路线最新激活时间 </span>
                        <strong>{{ins_queryPlanDetails.inspectionPlan.activeTime}}</strong>
                      </div>
                      <div class="col-sm-12">
                        <span>路线激活人 </span>
                        <strong>{{ins_queryPlanDetails.inspectionPlan.activeName}}</strong>
                      </div>
                      <div class="col-sm-12">
                        <span>路线删除时间 </span>
                        <strong>{{ins_queryPlanDetails.inspectionPlan.delTime}}</strong>
                      </div>
                      <div class="col-sm-12">
                        <span>路线删除人 </span>
                        <strong>{{ins_queryPlanDetails.inspectionPlan.delName}}</strong>
                      </div>
                    </template> -->
                    <!-- <template v-if="ins_queryPlanDetails.inspectionPlan"> -->
                      <div class="col-sm-12">
                        <span>路线最新激活时间 </span>
                        <strong>2018-08-09 08:00:00</strong>
                      </div>
                      <div class="col-sm-12">
                        <span>路线激活人 </span>
                        <strong>段亚伟</strong>
                      </div>
                      <div class="col-sm-12">
                        <span>路线删除时间 </span>
                        <strong>2018-08-09 09:00:00</strong>
                      </div>
                      <div class="col-sm-12">
                        <span>路线删除人 </span>
                        <strong>段亚伟</strong>
                      </div>
                    <!-- </template> -->
                  </div>
                </div>
              </section>
              <section>
                  <div class="toolbuildrate padding-left10">
                  <h4 class="p-title"></h4>
                    <template v-if="ins_queryPlanDetails.nodeList">
                      <div class="panel-group tablist-item" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default bg-none border-none border-radiusnone">
                          <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
                            <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
                            <h4 class="panel-title">
                              <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{ins_queryPlanDetails.nodeList[0].buildingName}}<span class="itemtitle-value display-inline-block margin-left10 bg-red font-black">{{ins_queryPlanDetails.nodeList[0].type}}</span>
                              </a>
                            </h4>
                          </div>
                        </div>
                        <span class="toolbuildrate-forter">
                          <h4 class="panel-title">
                              <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{ins_queryPlanDetails.nodeList[0].buildingName}}<span class="itemtitle-value display-inline-block margin-left10 bg-red font-black">{{ins_queryPlanDetails.nodeList[0].type}}</span>
                              </a>
                            </h4>
                        </span>
                      </div>
                    </template>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top10">
                  <h4 class="p-title">巡检完成率历史趋势</h4>
                  <div id="ins_charlookline" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>
            </section>
        </div>
      </template>
    </section>
    <!-- #右边 End-->
  </div>
</template>

<script>
import HeaderVue from "./header.vue";
// import Ins_leftVue from "./ins_left.vue";
// import Ins_rightVue from "./ins_right.vue";
export default {
  data() {
    return {
      pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
      },
      value7: '',
      //巡检统计参数
      planInspectionCount_parameter:{},
      //巡检统计参数-返回
      ins_planInspectionCount: {
        finish: "",
        nofinish: "",
        amount: "",
        plancount: "",
        planing: "",
        weekRate: "",
        monthRate: "",
        dayRate: "",
        historyRate: "",
        plansum: "",
        troubleRate: ""
      },
      // 表格-请求
      queryPlanUserList_parameter: {
        id: null,
        unitId: 4,
        type: null,
        inspectionName: null,
        status: null,
        currentPage: "1",
        pageSize: 10
      },
      // 表格返回
      tableData: Object,
      // 路线名称下拉框请求参数
      queryInspectionNameList_parameter:{
        unitId:''
      },
      ins_queryInspectionNameList:Object,
      // 下拉框
      options: [
        {
          value: "选项1",
          label: "路线名称1"
        },
        {
          value: "选项2",
          label: "路线名称2"
        },
        {
          value: "选项3",
          label: "路线名称3"
        },
        {
          value: "选项4",
          label: "路线名称4"
        },
        {
          value: "选项5",
          label: "路线名称5"
        }
      ],
      ins_queryInspectionNameListvalue: "全部路线",
      ins_queryInspectionNameListvalueTwo:'全部路线',
      lookroutebool:false,
      // 饼状图参数-请求
      queryTrendPieGraph_parameter: {
        unitId: 4,
        planId: 486
      },
      // 饼状图参数-返回
      ins_queryTrendPieGraph: {
        amount: "",
        finishedAmount: ""
      },
      // 曲线图请求数据
      queryTrendMapGraph_parameter: {  
        unitId: 4,
        startTime: "2018-06-01",
        endTime: "2018-08-09"
      },
      ins_queryTrendMapGraph: {},
      // 巡检路线详情参数
      queryPlanUserDetails_parameter:{
        id:'92'
      },
      ins_queryPlanUserDetails:Object,
      queryPlanDetails_parameter:{
        inspectionPlanId:486,
        beginTime:'2018-06-01',
        endTime:'2018-08-09'
      },
      ins_queryPlanDetails:Object,
      queryUnitBuildList_parameter:{
        unitId:4
      },
      queryUnitBuildList:Object,
      queryInspectionLineList_parameter:{
        unitId:4
      },
      queryInspectionLineList:Object,
    };
  },
  components: {
    "header-vue": HeaderVue,
    // "ins_left-vue": Ins_leftVue,
    // "ins_right-vue": Ins_rightVue
  },
  methods: {
    getData() {
      // 请求巡检统计
      this.$fetch("/api/inspection/planInspectionCount").then(response => {
        console.log(response.data);
        let data = response.data;
        if (response.data) {
          this.ins_planInspectionCount.finish = data.planInstanceCount.finish;
          this.ins_planInspectionCount.nofinish =
            data.planInstanceCount.nofinish;
          this.ins_planInspectionCount.amount = data.planInstanceCount.amount;
          this.ins_planInspectionCount.plancount =
            data.planInstanceCount.plancount;
          this.ins_planInspectionCount.planing = data.instanceIngCount.planing;
          this.ins_planInspectionCount.weekRate = data.instanceByDay.weekRate;
          this.ins_planInspectionCount.monthRate = data.instanceByDay.monthRate;
          this.ins_planInspectionCount.dayRate = data.instanceByDay.dayRate;
          this.ins_planInspectionCount.historyRate =
            data.instanceByDay.historyRate;
          this.ins_planInspectionCount.plansum = data.instanceIngCount.plansum;
          this.ins_planInspectionCount.troubleRate =
            data.instanceByDay.troubleRate;
          this.draw_piemin("ins_charCount", this.ins_planInspectionCount);
        }
      });
      // 请求路线路程列表下拉框
      this.$fetch(
        "/api/inspection/queryInspectionNameList",
        this.queryInspectionNameList_parameter
      )
        .then(response => {
          if (response) {
            let data = response.data;
            console.log(data);
            this.ins_queryInspectionNameList=data.listInspectionName;
          }
        })
        .then(err => {
          console.log(err);
        });
      // 请求饼状图
      this.$fetch(
        "/api/inspection/queryTrendPieGraph",
        this.queryTrendPieGraph_parameter
      )
        .then(response => {
          if (response) {
            let data = response.data;
            if(data.result[0]){
              this.ins_queryTrendPieGraph.amount = data.result[0].amount;
              this.ins_queryTrendPieGraph.finishedAmount =data.result[0].finishedAmount;
            }
            if (this.ins_queryTrendPieGraph) {
              this.draw_piemax(
                "ins_charCompletion",
                this.ins_queryTrendPieGraph
              );
            }
          }
        })
        .then(err => {
          console.log(err);
        });
      

      // 请求历史曲线图
      this.$fetch(
        "/api/inspection/queryTrendMapGraph",
        this.queryTrendMapGraph_parameter
      )
        .then(response => {
          if (response) {
            let data = response.data.result.dateMap;
            let a=[],b=[];
            for (var value in data) {			
              a.push(value);
              b.push(data[value]);
            }
            this.draw_line(
              "ins_charHistoricaltrend",response.data.result.dateMap
            );
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页:` + val);
      this.queryPlanUserList_parameter.currentPage = val;
      this.getTable();
    },
    getTable() {
      // 请求路线列表
      this.$fetch(
        "/api/inspection/queryPlanUserList",
        this.queryPlanUserList_parameter
      )
        .then(response => {
          if (response) {
            this.tableData = response.data.pager;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    toitmeinfo(data) {
      $(".inspection-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".inspection-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      $(".inspection-lineitem")
        .addClass("display-none")
        .removeClass("display-block"); 
      
      // 请求详情
      this.queryPlanUserDetails_parameter.id=data.id;
      this.$fetch(
        "api/inspection/queryPlanUserDetails",
        this.queryPlanUserDetails_parameter
      )
        .then(response => {
          if (response) {
            this.ins_queryPlanUserDetails= response.data;
            console.log(this.ins_queryPlanUserDetails);
          }
        })
        .then(err => {
          console.log(err);
        });

      
    },
    lookroute(data){
      console.log(this.lookroutebool);
      if(this.lookroutebool){
        $(".inspection-iteminfo")
          .addClass("display-none")
          .removeClass("display-block");
        $(".inspection-lineinfo")
          .addClass("display-none")
          .removeClass("display-block");
        $(".inspection-lineitem")
          .addClass("display-block")
          .removeClass("display-none");
        // 查看路线详情
        // this.$fetch(
        //   "api/inspection/queryPlanDetails",
        //   this.queryPlanDetails_parameter
        // )
        //   .then(response => {
        //     if (response) {
        //       this.ins_queryPlanDetails= response.data;
        //       console.log(this.ins_queryPlanDetails);bfvmhjb
        //       // draw_piemin()

        //       // let data = response.data.result.dateMap;
        //       // let a=[],b=[];
        //       // for (var value in data) {			
        //       //   a.push(value);
        //       //   b.push(data[value]);
        //       // }
        //       // this.draw_line(
        //       //   "ins_charlookline",response.data.planDetails.planMap
        //       // );
        //     }
        //   })
        //   .then(err => {
        //     console.log(err);
        //   });
          this.getceshi();
      }
      
    },
    jianzhu() {
      $(".inspection-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".inspection-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
      $(".inspection-lineitem")
        .addClass("display-none")
        .removeClass("display-block");
    },
    tolineitem(){
      console.log(this.ins_queryInspectionNameListvalue);
      this.lookroutebool=true;
      $('#lookroute').removeClass('upd-btn-dis');
      this.queryPlanUserList_parameter.inspectionName=this.ins_queryInspectionNameListvalue;
      // console.log(data.name)
      this.getTable();
    },
    draw_piemin(id, data) {
      let value;
      let name;
      if (data.amount == 0) {
        value=100;
        name='暂无统计'
      }else{
        value=data.finish / data.amount * 100;
        name="区域巡检完成率 " + value.toFixed(2) + "%";
      }
      
      console.log();
      let d = [
        {
          value: value,
          name: name
        }
      ];
      var char = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            // selectedMode: "single",
            radius: [0, "70%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            color: ["#bad616", "#333"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      chars.setOption(char);
    },
    draw_piemax(id, data) {
      // console.log(this.ins_queryTrendPieGraph);
      var fin_per = data.finishedAmount / data.amount * 100;
      console.log();
      let d = [
        {
          value: data.finishedAmount,
          name: "完成率 " + fin_per.toFixed(2) + "%"
        },
        {
          value: data.amount - data.finishedAmount,
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
        }
      ];
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 3) == "完成率") {
              name = "已完成";
            } else {
              name = data.name;
            }
            return name + ":" + data.value + "次";
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
    draw_line(id, data) {
      // 巡检完成率历史趋势曲线图
      // let data = response.data.result.dateMap;
        let a=[],b=[];
        for (var value in data) {			
        a.push(value);
        b.push(data[value]);
      }
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
    getmap_queryUnitBuildList(){
      // 请求路线列表
      this.$fetch(
        "/api/building/queryUnitBuildList",
        this.queryUnitBuildList_parameter
      )
      .then(response => {
        if (response) {
          this.queryUnitBuildList = response.data;
          this.$store.commit('queryUnitBuildList',this.queryUnitBuildList);
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    getmap_queryInspectionLineList(){
      // 请求路线列表
      this.$fetch(
        "/api/inspection/queryInspectionLineList",
        this.queryInspectionLineList_parameter
      )
      .then(response => {
        if (response) {
          this.queryInspectionLineList = response.data;
          this.$store.commit('queryInspectionLineList',this.queryInspectionLineList);
        }
      })
      .then(err => {
        console.log(err);
      });
    },

    // 锁定/关闭
     goBack(){
            $(".icon-suo-guan-mian-,.icon-guanbi-mian-").toggleClass("active");
     },
     getceshi(){
       var pie = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "70%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            color: ["#bad616", "#333"],
            data: [
              { value: 335, name: "50%", selected: true },
              { value: 679, name: "" }
            ]
          }
        ]
      };
       let mypie1 = this.$echarts.init(document.getElementById("ins_charlookline"));
      mypie1.setOption(pie);
      let mypie2 = this.$echarts.init(document.getElementById("ins_charlookline2"));
      mypie2.setOption(pie)
     }
     
  },
  mounted() {
    this.$store.commit('route_path',this.$route.path);
    this.getData();
    this.getTable();
    this.getmap_queryUnitBuildList();
    this.getmap_queryInspectionLineList();
  }
};
</script>

<style scoped>
.row {
  position: relative;
  z-index: 22;
}
.padding-right16 {
  padding-right: 16px;
}
</style>
