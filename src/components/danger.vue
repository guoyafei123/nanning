<template>
  <div class="row" id="dangers">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <template>
        <div class="row toolleft margin-right0 size-12">
          <!-- 全部隐患 -->
            <section class="common-left-statistics common-top-statistics" id="toolcount">
                <ul class="list-unstyled">
                    <li class="col-sm-7 text-left">
                      <!-- 全部隐患发生数量 -->
                      <div class="size-50 font-yellow">
                        <i class="icon iconfont icon-yinhuan-mian- size-50"></i><span>18</span> 
                      </div>
                      <!-- 全部隐患title -->
                      <div class="margin-top20">
                        <small>Dangers Number</small>
                        <h3><span class="badge badge-statistics bg-blue font-black">全部</span>隐患</h3>
                      </div>
                    </li>
                    <li class="col-sm-5 mian-pie-chart">
                      <!-- 全部隐患占比（饼图） -->
                      <div>全部隐患占比（饼图）</div>
                    </li>
                    <li class="col-sm-12 margin-top10">
                      <!-- 历史未解决，已确认，复位/关闭 -->
                      火情数量 <span class="margin-right20">3</span>
                      报警数量 <span class="margin-right20 font-blue">185</span>
                      故障数量 <span class="margin-right20">73</span>
                    </li>
                </ul>        
            </section>
          <!-- 分类隐患数量 -->
            <section class="col-sm-12 card-list margin-top60">
              <ul class="list-inline">
                <li>
                  <h3>危险品</h3>
                  <h2><i class="icon iconfont icon-weixianpin-xian-"></i><br><strong>7</strong></h2>
                </li>                
                <li>
                  <h3>未解决</h3>
                  <h2><i class="icon iconfont icon-icon-test"></i><br><strong>11</strong></h2>
                </li>
                <li>
                  <h3>已解决</h3>
                  <h2><i class="icon iconfont icon-guanbi2"></i><br><strong>9</strong></h2>
                </li>
              </ul>              
            </section>
            <!-- 隐患数量变化趋势 -->
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
                  <div class="q-date margin-top5">
                  <el-radio-group v-model="radioDate" size="mini">
                    <el-radio-button label="日"></el-radio-button>
                    <el-radio-button label="月"></el-radio-button>
                    <el-radio-button label="年"></el-radio-button>
                  </el-radio-group>              
                    <!-- <a href="" class="active">日</a><a href="">月</a><a href="">年</a> -->
                  </div>
                </div>
                <div class="toolcount">
                    <div class="clearfix text-center">
                      <abbr class="point-yellow">隐患</abbr>
                      <abbr class="point-red">危险品</abbr>
                    </div>
                    <div id="dan_charline" style="width: 100%;height:160px;margin: 0 auto;"></div>
                </div>
              </div>
            </section>
        </div>
      </template>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right z-index-20">
      <div class="overlay"></div>
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
                          <span class="size-20 font-blue">瑞和家园</span>
                          <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                        </p>
                        <p>
                        <span><i class="el-icon-location"></i> 广西省南宁市良庆区银海大道710-2号</span>
                        </p>
                      </div>
                    </div>
                    <!-- 已选择单位警报总数 -->                  
                    <div class="col-sm-5 font-white text-right">                      
                      <i class="icon iconfont icon-yinhuan-mian- size-14 font-yellow"></i> 隐患总数<br>
                      <span class="size-22 font-blue">5</span>
                    </div>
                    <!-- 柱形图 -->
                    <section>                                         
                    <div class="col-sm-12 text-center margin-top20">
                        <div class="col-sm-2 col-sm-offset-1 position-relative" style="height: 160px;">
                          <div style="position: absolute;bottom:10px;left: 25px;">
                            <span class="bg-gray-999 font-black" style="width:24px; height: 60px; line-height: 24px;display: block;margin: 4px auto;"></span>
                            <div>危险品</div>
                            <div><span class="font-blue">13.8%</span></div>
                          </div>
                        </div>
                        <div class="col-sm-2 position-relative" style="height: 160px;">
                          <div style="position: absolute;bottom:10px;left: 25px;">
                            <span class="bg-gray-999 font-black" style="width:24px; height: 20px; line-height: 24px;display: block;margin: 4px auto;"></span>
                            <div>非人为</div>
                            <div><span class="font-blue">6.9%</span></div>
                          </div>
                        </div>
                        <div class="col-sm-2 position-relative" style="height: 160px;">
                          <div style="position: absolute;bottom:10px;left: 25px;">
                            <div><span class="font-blue">21</span></div>
                            <span class="bg-blue font-black" style="width:24px; height: 110px; line-height: 24px;display: block;margin: 4px auto;"></span>
                            <div>人为</div>
                            <div><span class="font-blue">43.2%</span></div>
                          </div>
                        </div>
                        <div class="col-sm-2 position-relative" style="height: 160px;">
                          <div style="position: absolute;bottom:10px;left: 25px;">
                            <span class="bg-gray-999 font-black" style="width:24px; height: 30px; line-height: 24px;display: block;margin: 4px auto;"></span>
                            <div>缺失</div>
                            <div><span class="font-blue">11.3%</span></div>
                          </div>
                        </div>
                        <div class="col-sm-2 position-relative" style="height: 160px;">
                          <div style="position: absolute;bottom:10px;left: 25px;">
                            <span class="bg-gray-999 font-black" style="width:24px; height: 80px; line-height: 24px;display: block;margin: 4px auto;"></span>
                            <div>损坏</div>
                            <div><span class="font-blue">24.7%</span></div>
                          </div>
                        </div>
                    </div>
                  </section>
                  </div>
                  <!-- 隐患列表 -->
                  <section class="early-warning margin-top20">
                    <span class="toolroute-rect bg-blue"></span>
                    <!-- 标题 -->
                    <div class="early-title">
                      <small>Dangers-Records</small>
                            <h3>隐患记录
                              <a class="pull-right size-12" @click="openEarlyList()"><span class="unit-btn-open">展开 <i class="fas fa-chevron-up font-blue"></i></span><span class="unit-btn-close" style="display: none;">折叠 <i class="fas fa-chevron-down font-blue"></i></span></a>
                          </h3>
                    </div>      
                    <!-- 报警时循环li标签class样式调用
                      火灾 fire-list    聚合li>article>h4>span.badge 
                      报警 warning-list
                      故障 fault-list
                      隐患 dangers-list
                      危险品 dangerous-list
                      复位/解决/关闭  ok-list
                      锁定 a标签加active
                     -->
                     <!-- 列表 -->
                    <div class="early-tab">
                      <ul class="col-lg-12 col-md-12 col-sm-12 early-menu list-inline margin-bottom0 nav nav-tabs">
                        <li class="col-lg-4 col-md-4 col-sm-4 active">
                          <a href="#dangers-list" data-toggle="tab">
                            <h4>4</h4>
                            <small>隐患</small>
                          </a>
                        </li>
                        <li class="col-lg-4 col-md-4 col-sm-4">
                          <a href="#dangerous-list" data-toggle="tab" aria-expanded="true">
                            <h4>1</h4>
                            <small>危险品</small>            
                          </a>
                        </li>
                        <li class="col-lg-4 col-md-4 col-sm-4">
                          <a href="#ok-list" data-toggle="tab" aria-expanded="true">
                            <h4>1</h4>
                            <small>已解决</small>            
                          </a>
                        </li>
                      </ul>
                      <div id="myTabContent" class="tab-content">
                        <!-- 隐患记录 -->
                        <div class="tab-pane fade in active" id="dangers-list">
                          <ul class="early-list list-unstyled">
                            <!-- 单条隐患循环li -->
                            <li class="early-single dangers-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生隐患</span></h5>
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
                                  <i class="icon iconfont icon-queshi-xian-"><span>缺失</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">98s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条隐患循环li -->
                            <li class="early-single dangers-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发现隐患</span></h5>
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
                                  <i class="icon iconfont icon-sunhuai-xian-"><span>损坏</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">98s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条隐患循环li -->
                            <li class="early-single dangers-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发现隐患</span></h5>
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
                                  <i class="icon iconfont icon-weiyinsuyinhuan-xian-"><span>非人为因素</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">98s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <!-- 单条隐患循环li -->
                            <li class="early-single dangers-list">
                              <article>
                                <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发现隐患</span></h5>
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
                                  <i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
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
                        <!-- 危险品记录 -->
                        <div class="tab-pane fade" id="dangerous-list">
                          <ul class="early-list list-unstyled">
                            <!-- 单条危险品循环li -->
                            <li class="early-single dangerous-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发现危险品</span></h5>
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
                                  <i class="icon iconfont icon-weixianpin-xian-"><span>危险品</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">36s</span><span class="badge">12:36:47</span>
                                </p>
                              </var>
                            </li>
                            <li>
                              <span class="font-white">导出</span> <span class="font-white">打印</span> <span class="pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                        <!-- 已解决 -->
                        <div class="tab-pane fade" id="ok-list">
                          <ul class="early-list list-unstyled">
                            <!-- 已解决单条隐患循环li -->
                            <li class="early-single dangers-list ok-list">
                              <article>
                                <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>隐患已解决</span></h5>
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
                                  <i class="icon iconfont icon-sunhuai-xian-"><span>损坏</span></i>
                                </p>
                                <p class="col-sm-4">              
                                  <span class="badge">36s</span><span class="badge">12:36:47</span>
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
          </div>
      </template>
    </section>
    <!-- #右边 End-->
    <!-- 弹窗 -->
    <el-dialog title="":visible.sync="dialogVisible" top="120px" style="background-color: rgba(0,0,0,1);">
      <a class="go-back" @click="dialogVisible = false" data-toggle="tooltip" title="关闭"><i class="el-icon-circle-close-outline size-24"></i></a>
      <earlyinfo-vue></earlyinfo-vue>
    </el-dialog>
  </div>
</template>

<script>
import HeaderVue from "./header.vue";
import earlyinfoVue from './earlyinfo.vue';
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
      radioDate:'日',
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
      ins_queryInspectionNameListvalue: "选项3",
      // 弹报警详情
      dialogVisible: false,
      // 表格-请求
      // troubleList_parameter: {
      //   id: null,
      //   unitId: 4,
      //   type: null,
      //   inspectionName: null,
      //   status: null,
      //   currentPage: "1",
      //   pageSize: 10
      // },
      // // 表格返回
      // tableData: Object,
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
      ins_queryInspectionNameListvalue: "全部类型",
      // 表格-请求
      troubleList_parameter: {
        unitId: "4",
        currentPage: 1,
        pageSize: 10
      },
      // 表格-请求
      tableData: Object,
      queryTroubleStats_parameter: {
        unitId: "4"
      },

      ins_queryTroubleStats: Object,
      // 饼图数据
      troubleCount_parameter:{
        unitId:'4',
        beginTime:'2018-07-01',
        endTime:'2018-07-12'
      },
      ins_troubleCount:Object,
      // 折线图数据
      troubleRate_parameter:{
        unitId:'4',
        beginTime:'2018-06-21',
        endTime:'2018-08-09',
        type:2
      },
      ins_troubleRate:Object,
      // 隐患详情
      troubleDetail_parameter:{
        troubleId:156
      },
      ins_troubleDetail:Object,
    };
  },
  methods: {
    // tab切换  
    // 实时警报列表展开/折叠
    openEarlyList(){
      $(".unit-info").slideToggle(
        function(){
        $(".unit-btn-close").toggle();
        $(".unit-btn-open").toggle();
        $(".early-warning").toggleClass("scrollheight");
      });
      
    },
    // 锁定/关闭
     earlyTool(){
            $(".icon-suo-guan-mian-,.icon-guanbi-mian-").toggleClass("active");
     },
     // 返回
    jianzhu() {
      $(".dan-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    toitmeinfo(item){
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      // 请求隐患详情
      this.troubleDetail_parameter.troubleId=item.id;
      this.$fetch(
        "/api/trouble/troubleDetail",
        this.troubleDetail_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_troubleDetail = response.data.trouble;
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页:` + val);
      this.troubleList_parameter.currentPage = val;
      this.getTable();
    },
    tolineitem() {
      console.log(this.ins_queryInspectionNameListvalue);
      $("#lookroute").removeClass("upd-btn-dis");
    },
    getTable() {
      // 请求隐患列表
      this.$fetch("/api/trouble/troubleList", this.troubleList_parameter)
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
      // 请求隐患统计
      this.$fetch(
        "/api/trouble/queryTroubleStats",
        this.queryTroubleStats_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_queryTroubleStats = response.data.result;
        }
      })
      .then(err => {
        console.log(err);
      });

      // 请求隐患饼图数据
      this.$fetch(
        "/api/trouble/troubleCount",
        this.troubleCount_parameter
      )
      .then(response => {
        if (response) {
          this.ins_troubleCount = response.data;
          // this.draw_piemin('dan_charpiemin',this.ins_troubleCount.troubleCount);
          // this.draw_piemax('dan_charpiemax',this.ins_troubleCount.troubleRatio);
        }
      })
      .then(err => {
        console.log(err);
      });

      // 请求折线图数据
      this.$fetch(
        "/api/trouble/troubleRate",
        this.troubleRate_parameter
      )
      .then(response => {
        if (response) {
          this.ins_troubleRate = response.data;
          console.log(this.ins_troubleRate);
          this.draw_line('dan_charline',response.data.troubleRate);
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    draw_piemin(id, data) {
      var fin_per = data.decideCount / data.troubleAll * 100;
      let d;
      if(data.troubleAll==0){
        d=[
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
      }else{
        d = [
        {
          value: data.decideCount,
          name: "解决率 " + fin_per.toFixed(2) + "%",
          label: {
            normal: {
              position: "inner",
              show: true
            }
          }
        },
        {
          value: data.troubleAll - data.decideCount,
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
      }
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 3) == "解决率") {
              name = "已完成";
            } else {
              name = data.name;
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
    draw_piemax(id, data) {
      let count=data.damageCount+data.lackCount+data.peopleCount+data.unPeopleCount+data.dangerCount;
      let d = [
        {
          value: data.damageCount,
          // value: 2,
          name: "损坏" + (data.damageCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.lackCount,
          // value: 4,
          name: "缺失" + (data.lackCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.peopleCount,
          // value: 8,
          name: "人为因素" + (data.peopleCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.unPeopleCount,
          // value: 10,
          name: "非人为因素" + (data.unPeopleCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.dangerCount,
          // value: 6,
          name: "危险品" + (data.dangerCount/count*100).toFixed(2) + "%",
        },
      ];
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 2) == "损坏") {
              name = "损坏";
            } else if (data.name.substring(0, 2) == "缺失"){
              name = "缺失";
            } else if (data.name.substring(0, 2) == "人为"){
              name = "人为因素";
            } else if (data.name.substring(0, 2) == "非人"){
              name = "非人为因素";
            } else if (data.name.substring(0, 2) == "危险"){
              name = "危险品";
            }
            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#c69e00","#ff7800", "#f13131","#ccc"],
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
      console.log(a);
      console.log(b);
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
    this.$store.commit('route_path',this.$route.path);
    this.getTable();
    this.getData();
  }
};
</script>

<style scoped>
  .line-height40{
    line-height: 57px;
  }
</style>
