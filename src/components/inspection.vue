<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <!-- <ins_left-vue v-bind:ins_planInspectionCount='ins_planInspectionCount'></ins_left-vue> -->
      <template>
        <div class="toolleft margin-right0">
          <section>
            <div class="toolcount">
              <div class="set-width-50  font-gray-999 padding-right0">
                <ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
                  <li>
                    <p class="font-white size-66 toolcount-p1">0</p>
                  </li>
                  <li> 
                    <p class="size-10 toolcount-p2">On-site Inspection</p>
                  </li>
                  <li>
                    <p class="size-18 font-blue">今日巡检完成</p>
                  </li>
                  <li>
                    <p class=" size-12">巡检路线</p>
                    <p class=" font-italic float-right">{{ins_planInspectionCount.amount}}</p>
                  </li>
                  <li>
                    <p class=" size-12">巡检中</p>
                    <p class=" font-blue font-italic float-right">{{ins_planInspectionCount.planing}}</p>
                  </li>
                  <li>
                    <p class=" size-12">巡检人数</p>
                    <p class=" font-blue font-italic float-right">{{ins_planInspectionCount.plansum}}</p>
                  </li>
                </ul>
              </div>
              <div class="set-width-50 display-inline-block font-gray-999 toolcount-right">
                <ul class="padding-left0 margin-bottom0">
                  <li class="toolcount-right-title">
                    <p class="size-26 font-blue">巡检统计</p>
                  </li>
                  <li class="toolcount-right-explain">
                    <p class="size-10">Inspection Statistics</p>
                  </li>
                  <li>
                    <p class="size-12">今日完成率</p>
                    <p class=" font-italic float-right">{{ins_planInspectionCount.dayRate}}</p>
                  </li>
                  <li>
                    <p class="size-12">近7日</p>
                    <p class=" font-italic float-right">{{ins_planInspectionCount.weekRate}}</p>
                  </li>
                  <li>
                    <p class="size-12">近30日</p>
                    <p class=" font-italic float-right">{{ins_planInspectionCount.monthRate}}</p>
                  </li>
                  <li>
                    <p class="size-12">历史统计</p>
                    <p class=" font-italic float-right">{{ins_planInspectionCount.historyRate}}</p>
                  </li>
                  <li>
                    <p class="size-12 margin-bottom0">隐患发现率</p>
                    <p class=" font-orange font-italic margin-bottom0 float-right">{{ins_planInspectionCount.troubleRate}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolroute font-gray-ccc margin-left37">
              <span class="toolroute-rect bg-blue"></span>
              <ul class="padding-left5 padding-right5">
                <li>
                  <p class="font-gray-666 size-12">中心小学</p>
                </li>
                <li>
                  <p class="font-blue size-16">巡检路线
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666">
                                  <i class="fa fa-th-large"></i>
                              </span>
                  </p>
                </li>
                <li>
                    <el-select class="upd-elselect upd-elselect-bordernone upd-widht100" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择"  @change="tolineitem">
                      <el-option v-for="item in ins_queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                    <div class="float-right">
                      <a class="upd-btn upd-btn-dis" id="lookroute"  @click="lookroute">查看路线</a>
                      <!-- <a class="upd-btn">展开表单</a> -->
                    </div>
                </li>
                <li>
                  <div class="table-responsive">
                    <table class="table size-12 table-condensed toolroute-table margin-top10 mini-table">
                      <thead>
                        <tr>
                          <!-- <th>序号</th> -->
                          <th>巡检单号</th>
                          <th>巡检人</th>
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
                              <i class="fa fa-th-large font-blue"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <!-- <ins_right-vue v-bind:ins_planInspectionCount='ins_planInspectionCount'></ins_right-vue> -->
      <template>
        <div class="">
          <div class="toolright font-white  margin-top20">
            <section>
                <div class="personinfo">
                  <p>
                    <span class="size-20 font-blue">南宁市良庆区</span>
                  </p>
                  <p>
                    <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> 良庆区中心小学</span>
                  </p>
                </div>
            </section>
            <section>
                <div  class="upd-elmdate">
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
            <!-- <section>
                <div class="personinfo">
                  <p>
                    <span class="size-20">控烟严格巡查</span>
                    <span class="bgbox-min bg-gray-666 font-black">举报检查</span>
                    <span class="bgbox-min bg-blue font-black">每天4次</span>
                    <span class="float-right">
                              <span class="font-blue">
                                  <i class="fa fa-th-large"></i> 进行中</span>
                          </span>
                  </p>
                  <p>
                    <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> 良庆区中心小学</span>
                    <span class="size-12 font-gray-666 float-right set-positiontop2">最新更新 <span class="font-gray-999">2018.7.6 08:00:00</span></span>
                  </p>
                </div>
              </section>-->
            <section class="inspection-iteminfo display-none" >
              <section>
                <div class="row toolcount margin-top40">
                  <div class="col-sm-4  font-gray-999 padding-right0">
                    <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                        <p class="toolcount-p1 line-height60 size-50 ">360</p>
                      </li>
                      <li>
                        <p class="size-10">Running State</p>
                      </li>
                      <li>
                        <p class="size-16 font-blue">路线总完成数</p>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                      <li>
                        <p class="size-18 font-gray-ccc">路线统计</p>
                      </li>
                      <li>
                        <p class="size-10 set-scaleright">Repair Statistics</p>
                      </li>
                      <li>
                        <p class="size-12">开始时间 
                          <template v-if="ins_queryPlanUserDetails.inspectionPlanUser!=null">
                            <span class="font-gray-ccc">{{ins_queryPlanUserDetails.inspectionPlanUser.startTime}}</span>
                          </template>
                          </p>
                      </li>
                      <!-- <li>
                        <p class="size-12">运行时长 <span class="font-blue">645</span>天</p>
                      </li> -->
                      <li class="row text-center padding-right16">
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                          <p class="size-16 font-white">{{ins_queryPlanUserDetails.totalTrouble}}</p>
                          <p class="size-12 margin-bottom0">隐患总数</p>
                        </div>
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                          <p class="size-16 font-white">{{ins_queryPlanUserDetails.totalNode}}</p>
                          <p class="size-12 margin-bottom0">节点总数</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                          <p class="size-16 font-white">{{ins_queryPlanUserDetails.finishNode}}</p>
                          <p class="size-12 margin-bottom0">完成节点</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                  <div class="toolbuildrate margin-top30 row">
                  <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0 ">
                    <span class="tool-rect bg-blue"></span>巡检人员
                  </h2>
                  <ul class="row padding-left0 size-12 font-gray-999 text-center padding-left10">
                    <li class="col-sm-3">
                      <div class="toolbuildrate-people">
                        <img src="../assets/images/people.png">
                        <br/>
                      </div>
                      <template v-if="ins_queryPlanUserDetails.inspectionPlanUser!=null">
                            <span class="margin-top10 display-inline-block">{{ins_queryPlanUserDetails.inspectionPlanUser.userName}}</span>
                      </template>
                      
                      <br/>
                      <!-- <span>93%</span> -->
                    </li>
                  </ul>
                </div>
              </section>
              <section>
                <div class="toolbuildrate margin-top30 row">
                  <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0 ">
                    <span class="tool-rect bg-blue"></span>路线详情
                  </h2>
                  <div class="row margin-top10" style="padding-left:39px;padding-right:30px;">
                    <div class="panel-group tablist-item" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default bg-none border-none border-radiusnone ">
                        <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
                          <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
                          <h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              国西中天大厦<span class="itemtitle-value display-inline-block margin-left10 bg-red font-black">1.6</span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body padding3">
                            <ul class="size-12 font-gray-999 tablist-itemul">
                              <li v-for="item in ins_queryPlanUserDetails.listNode">
                                <span>{{item.buildingName}} 
                                  <span class="float-right">
                                    <i class="fa fa-th-large font-yellow"></i>
                                    <span class="font-blue">{{item.inspectionPlanUserId}} </span>/<span class="font-yellow">{{item.buildingId}}</span>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <span class="toolbuildrate-forter">
                        <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
                        <h4 class="panel-title">
                            <a role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              国西中天大厦<span class="itemtitle-value display-inline-block margin-left10 bg-orange font-black">1.6</span>
                            </a>
                          </h4>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section class="inspection-lineinfo ">
              
              <section>
                <div class="row toolcount">
                  <h2 class="size-16 font-gray-ccc margin-top0 margin-bottom0">
                    <span class="tool-rect bg-blue"></span>巡检统计
                  </h2>

                  <div class="col-sm-7  font-gray-999 padding-right0">
                    <div class="row text-center margin-top50">
                      <div class="col-sm-12 text-left">
                        <p class="size-12">巡检路线 <span class="font-white">{{ins_planInspectionCount.plancount}} </span>&nbsp; 巡检人员 <span class="font-white">{{ins_planInspectionCount.planing}} </span></p>
                      </div>
                      <div class="col-sm-4 container-padding0 personnel-borderright">
                        <p class="size-16 font-white">{{ins_planInspectionCount.amount}}</p>
                        <p class="size-12 margin-bottom0">次数统计</p>
                      </div>
                      <div class="col-sm-4 container-padding0 personnel-borderright">
                        <p class="size-16 font-white">{{ins_planInspectionCount.finish}}</p>
                        <p class="size-12 margin-bottom0">已完成</p>
                      </div>
                      <div class="col-sm-4 container-padding0">
                        <p class="size-16 font-white">{{ins_planInspectionCount.nofinish}}</p>
                        <p class="size-12 margin-bottom0">未完成</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
                    <div id="ins_charCount" style="width: 100%;height:150px;margin: 0 auto;"></div>
                  </div>
                </div>
              </section>
              <section>
                <div class="row toolcount position-relative">
                  <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
                    <span class="tool-rect bg-blue "></span>路线巡检任务完成
                  </h2>
                  <el-select class="upd-elselect upd-elselect-border upd-widht150 margin-top10 margin-left15" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  
                  <div id="ins_charCompletion" style="width: 100%;height:200px;margin: 0 auto;"></div>
                  <div class="toolcount-value">
                    <p class="font-gray-999">额定完成次数:<span class="font-gray-ccc">{{ins_queryTrendPieGraph.amount}}</span>次</p>
                  </div>
                </div>
              </section>
              <section>
                <div class="row toolcount margin-top10">
                  <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
                    <span class="tool-rect bg-blue"></span>巡检完成率历史趋势
                  </h2>
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
                          <template v-if="ins_queryPlanDetails.planDetails!=null">
                            {{ins_queryPlanDetails.planDetails.amount}}/{{ins_queryPlanDetails.planDetails.finishAmount}}
                          </template>
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
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                      <div class="col-sm-7 font-gray-999 padding-left0 padding-right0">
                        <div id="ins_charlooklinepie" style="width: 100%;height:150px;margin: 0 auto;"></div>
                      </div>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <div class="row toolcount">
                  <div class="col-sm-12  font-gray-999 padding-right0">
                    <div class="row text-center">
                      <template v-if="ins_queryPlanDetails.planDetails">
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                          <p class="size-16 font-white">{{ins_queryPlanDetails.planDetails.troubleCount}}</p>
                          <p class="size-12 margin-bottom0">隐患发现数</p>
                        </div>
                        <div class="col-sm-4 container-padding0 personnel-borderright">
                          <p class="size-16 font-white">{{ins_queryPlanDetails.planDetails.userCount}}</p>
                          <p class="size-12 margin-bottom0">巡检人数</p>
                        </div>
                        <div class="col-sm-4 container-padding0">
                          <p class="size-16 font-white">{{ins_queryPlanDetails.nodeCount}}</p>
                          <p class="size-12 margin-bottom0">节点数量</p>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div class="textandimg row">
                  <h2 class="size-16 font-gray-ccc">
                    <span class="tool-rect bg-blue"></span>设备信息
                  </h2>
                  <div class="row textandimg-main padding-left15">
                    <template v-if="ins_queryPlanDetails.inspectionPlan">
                        <div class="col-sm-12">
                        <span class="size-12 font-gray-666">路线最新激活时间 </span>
                        <span class="size-12 font-gray-999">{{ins_queryPlanDetails.inspectionPlan.activeTime}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">路线激活人 </span>
                        <span class="size-12 font-gray-999">{{ins_queryPlanDetails.inspectionPlan.activeName}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">路线删除时间 </span>
                        <span class="size-12 font-gray-999">{{ins_queryPlanDetails.inspectionPlan.delTime}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">路线删除人 </span>
                        <span class="size-12 font-gray-999">{{ins_queryPlanDetails.inspectionPlan.delName}}</span>
                      </div>
                    </template>
                  </div>
                </div>
              </section>
              <section>
                  <div class="toolbuildrate padding-left10">
                  <h2 class="size-14 font-gray-ccc"></h2>
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
                          <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
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
                <div class="row toolcount margin-top10">
                  <h2 class="size-16 font-gray-ccc margin-bottom0 margin-top0">
                    <span class="tool-rect bg-blue"></span>巡检完成率历史趋势
                  </h2>
                  <div id="ins_charlookline" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>
            </section>
          </div>
          <div class="ceshi-btn">
            <!-- <button @click="moren">详情</button> -->
            <button @click="jianzhu">统计</button>
          </div>
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
        unitId:'4'
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
        endTime: "2018-06-30"
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
        endTime:'2018-07-05'
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
            this.ins_queryTrendPieGraph.amount = data.result[0].amount;
            this.ins_queryTrendPieGraph.finishedAmount =
              data.result[0].finishedAmount;
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
        this.$fetch(
          "api/inspection/queryPlanDetails",
          this.queryPlanDetails_parameter
        )
          .then(response => {
            if (response) {
              this.ins_queryPlanDetails= response.data;
              console.log(this.ins_queryPlanDetails);bfvmhjb
              // draw_piemin()

              // let data = response.data.result.dateMap;
              // let a=[],b=[];
              // for (var value in data) {			
              //   a.push(value);
              //   b.push(data[value]);
              // }
              this.draw_line(
                "ins_charlookline",response.data.planDetails.planMap
              );
            }
          })
          .then(err => {
            console.log(err);
          });
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
      $('#lookroute')
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
  },
  mounted() {
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
.line-height60 {
  line-height: 60px !important;
}
.padding-right16 {
  padding-right: 16px;
}
</style>
