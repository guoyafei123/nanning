<template>
  <div class="row" id="plan">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
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
                    <p class="size-26 font-blue">预案统计</p></li>
                  <li>
                  <li class="margin-bottom10">
                    <p class="size-10">Plan-number</p></li>
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
                  <div class="toolcount">
                    <h4>
                      <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666" data-toggle="tooltip" title="全屏">
                        <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                      </span>
                    </h4>
                    <div id="myChart" style="width: 100%;height:160px;margin: 0 auto;"></div>
                  </div>
                </section>
          <!-- <section>
            <div class="toolcompanyrate margin-top50">
              <ul class="row padding0 margin0 size-12 font-gray-999">
                <li class="col-sm-6">
                  <div class="row margin0 padding0">
                    <div class="col-sm-9 toolcompanyrate-char padding-top10 padding-left5 padding-right5">
                      <small class="white-space font-yellow">
                        消防值班守则
                      </small>
                      <p class="size-14">管理规定</p>
                    </div>
                    <div class="col-sm-3 padding-left0 padding-right10 text-left ">
                      <i class="icon iconfont icon-suyaniconchanpinleibufenzuodaohangbufen87 size-40 font-gray-333"></i>
                    </div>
                  </div>
                </li>
                <li class="col-sm-6">
                  <div class="row margin0 padding0">
                    <div class="toolcompanyrate-char col-sm-9 padding-top10 padding-left5 padding-right5">
                      <small class="white-space font-red">
                      </small>
                      <p class="size-14">火灾预案</p>
                    </div>
                    <div class="col-sm-3 padding-left0 padding-right10 text-left">
                      <i class="icon iconfont icon-fire-prevention size-40 font-gray-333"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section> -->
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
                  <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="value7" placeholder="全部单位"  @change="tolineitem">
                    <el-option v-for="item in option" :key="item.name" :label="item.name" :value="item.name">
                      </el-option>
                  </el-select>
                  <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="value7" placeholder="全部建筑"  @change="tolineitem">
                    <el-option v-for="item in option" :key="item.name" :label="item.name" :value="item.name">
                      </el-option>
                  </el-select>
                  <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5 pull-right" size="mini" v-model="value7" placeholder="全部类型"  @change="tolineitem">
                    <el-option v-for="item in option" :key="item.name" :label="item.name" :value="item.name">
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
                        <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="value7" placeholder="全部单位">
                          <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
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
            <!-- 详情 -->
            <section class="bulid-iteminfo display-none">
              <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>                
                <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择 -->
                    <div class="personinfo">
                            <p>
                            <span class="size-20 font-blue">瑞和家园3号楼</span>
                            <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                            <span class="float-right font-white">
                              <a href=""><i class="fas fa-arrow-circle-right font-blue"></i> 疏散示意图</a>
                            </span>
                            </p>
                            <p class="text-left padding0">
                                <span>
                                    <i class="el-icon-location"></i> </i> 广西省南宁市良庆区银海大道710-2号
                                </span>
                            </p>                       
                    </div>
                </div>
                <section>
                  <div class="row unit-info toolcount margin-top10">
                      <div class="col-sm-4 font-gray-999 padding-right0">
                        <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                          <li class="margin-bottom15">
                            <h1 class="toolcount-p1">14</h1>
                          </li>
                          <li>
                            <p class="size-10">Plan Total</p>
                          </li>
                          <li>
                            <p class="size-16 font-blue">预案总数</p>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                        <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                          <li>
                            <p class="size-18 font-white">信息统计</p>
                          </li>
                          <li class="margin-bottom10">
                            <p class="size-10 set-scaleright">Repair Statistics</p>
                          </li>
                          <li>
                            <p>最新预案 <span class="font-white">单位灭火力量分布</span></p>
                          </li>
                          <li class="row text-center padding-right16 margin-top5">
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">12</p>
                              <p>火灾预案</p>
                            </div>
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">6</p>
                              <p>管理规定</p>
                            </div>
                            <div class="col-sm-4">
                              <p class="size-16 show font-white">286</p>
                              <p>疏散示意图</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>
                </section>
            </section>
            <!-- 统计 -->
            <section class="bulid-lineinfo">
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
                        <span><i class="el-icon-location"></i> 南宁市良庆区</span>
                        </p>
                      </div>
                    </div>
                    <!-- 已选择单位预案总数 -->                  
                    <div class="col-sm-5 font-white text-right">                      
                      <i class="icon iconfont icon-navicon-yqgl size-12 font-blue"></i> 预案总数<br>
                      <span class="size-22 font-blue">174</span>
                    </div>
                    <!-- 柱形图 -->
                    <div class="col-sm-12 margin-top20">
                        <div class="margin-bottom10">
                          <span class="bg-gray-999 font-black" style="width:100px; line-height: 24px;margin-right:6px;padding-left: 6px;display: inline-block;">火灾预案</span>
                        </div>
                        <div class="margin-bottom10">
                          <span class="bg-blue font-black" style="width:200px; line-height: 24px;margin-right:6px;padding-left: 6px;display: inline-block;">管理规定</span>
                          <span>总数 <span class="font-blue">85</span>  占比 <span class="font-blue">63.7%</span></span>
                        </div>
                        <div class="margin-bottom10">
                          <span class="bg-gray-333 font-black" style="min-width:80px; line-height: 24px;margin-right:6px;padding-left: 6px;display: inline-block;">疏散示意图</span>
                        </div>
                    </div>
              </div>                  
          </section>
          <!-- 预案列表 -->
          <section class="early-warning margin-top20">
                    <span class="toolroute-rect bg-blue"></span>
                    <!-- 标题 -->
                    <div class="early-title">
                      <small>Plan-List</small>
                            <h3>预案列表
                              <a class="pull-right size-12" @click="openEarlyList()"><span class="unit-btn-open">展开 <i class="fas fa-chevron-up font-blue"></i></span><span class="unit-btn-close" style="display: none;">折叠 <i class="fas fa-chevron-down font-blue"></i></span></a>
                          </h3>
                    </div>
                    <!-- 选项卡 -->
                    <div class="early-tab plan-tab">
                      <ul class="col-lg-12 col-md-12 col-sm-12 early-menu list-inline margin-bottom0 nav nav-tabs">
                        <li class="col-lg-4 col-md-4 col-sm-4 active">
                          <a href="#fireplan-list" data-toggle="tab">
                            <h4><span>2</span></h4>
                            <small>火灾预案</small>            
                          </a>
                        </li>
                        <li class="col-lg-4 col-md-4 col-sm-4">
                          <a href="#manageplan-list" data-toggle="tab">
                            <h4><span>4</span></h4>
                            <small>管理规定</small>            
                          </a>
                        </li>
                        <li class="col-lg-4 col-md-4 col-sm-4">
                          <a href="#sparseplan-list" data-toggle="tab">
                            <h4><span>4</span></h4>
                            <small>疏散示意图</small>            
                          </a>
                        </li>
                      </ul>
                      <div id="myTabContent" class="tab-content col-sm-12">
                        <!-- 火灾预案 -->
                        <div class="tab-pane fade in active" id="fireplan-list">
                          <ul class="list-inline">
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan1.png" class="img-responsive" alt="火情确认须知">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="火情确认须知">火情确认须知</h4>
                                  <h5>中心小学</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan2.png" class="img-responsive" alt="单位灭火力量分布">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
                                  <h5>瑞和家园</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan3.png" class="img-responsive" alt="单位灭火力量分布">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
                                  <h5>瑞和家园</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan1.png" class="img-responsive" alt="火情确认须知">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="火情确认须知">火情确认须知</h4>
                                  <h5>中心小学</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan2.png" class="img-responsive" alt="单位灭火力量分布">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
                                  <h5>瑞和家园</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan3.png" class="img-responsive" alt="单位灭火力量分布">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="单位灭火力量分布">单位灭火力量分布</h4>
                                  <h5>瑞和家园</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-sm-12">
                              <span class="font-white pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                        <!-- 管理规定 -->
                        <div class="tab-pane fade" id="manageplan-list">
                          <ul class="list-inline">
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan2.png" class="img-responsive" alt="消防值班守则">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="消防值班守则">消防值班守则</h4>
                                  <h5>中心小学</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-sm-12">
                              <span class="font-white pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                        <!-- 疏散示意图 -->
                        <div class="tab-pane fade" id="sparseplan-list">
                          <ul class="list-inline">
                            <li class="col-lg-4 col-md-4 col-sm-4">
                              <figure>
                                <img src="../assets/images/plan/plan3.png" class="img-responsive" alt="应急路线示意图">
                                <div class="caption">
                                  <h4 data-toggle="tooltip" title="应急路线示意图">应急路线示意图</h4>
                                  <h5>瑞和家园</h5>
                                  <p>
                                    <small>2018-09-23</small>
                                    <a href="#"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i></a>
                                    <a href="#"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i></a>
                                  </p>
                                </div>
                              </figure>
                            </li>
                            <li class="col-sm-12">
                              <span class="font-white pull-right">分页</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
          </section>
        </div>
      </template>
    </section>
    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  export default {
    components:{
      'header-vue':HeaderVue
    },
    mounted() {
      this.$store.commit('route_path',this.$route.path);
      // console.log(this.$route.path);
      // this.$router.path
      
    }
  }
</script>
<script>
  import HeaderVue from './header.vue';
  export default {
  components:{
      'header-vue':HeaderVue
  },
  data() {
    return {
      // 单选按钮
      bulidvalue:1,
      value7:'',
      option: [
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
      // 时间筛选
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
    };
  },
  methods: {
    // tab切换  
    // 实时警报列表展开/折叠
    
    tolineitem(){
      
    },
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
    // 详情
    moren() {
      $(".bulid-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    // 返回
    jianzhu() {
      $(".bulid-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    chart_one() {
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "123", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // 图例
        legend: {
          data: ["高", "低"]
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
            data: [100, 499, 50, 1111, 45, 345, 907],
            name: "低",
            type: "line",
            symbol: "none",
            smooth: true,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#333"
                }
              ]
            }
          },
          {
            data: [300, 950, 900, 800, 700, 600, 700],
            name: "高",
            type: "line",
            symbol: "none",
            smooth: true,
            areaStyle: { normal: {} },
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255,255,255,0.3)" // 0% 处的颜色
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

      // 根据值判断柱子颜色的柱状图
      var option1 = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            show: true,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "12"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        grid: {
          y: 40,
          x2: 0,
          y2: 20,
          x: 0,
          borderWidth: 1
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220, 192],
            itemStyle: {
              normal: {
                // 值显示在柱子顶部
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: function(params) {
                      if (params.value > 0 && params.value < 100) {
                        return "#333333";
                      } else if (params.value >= 100 && params.value <= 200) {
                        return "#666666";
                      } else if (params.value >= 200 && params.value <= 300) {
                        return "#999999";
                      }
                      return "#bad616";
                    }
                  },
                  formatter: function(params) {
                    if (params.value == 0) {
                      return "";
                    } else {
                      return params.value;
                    }
                  }
                },
                color: function(params) {
                  if (params.value > 0 && params.value < 100) {
                    return "#333333";
                  } else if (params.value >= 100 && params.value <= 200) {
                    return "#666666";
                  } else if (params.value >= 200 && params.value <= 300) {
                    return "#999999";
                  }
                  return "#bad616";
                }
              }
            }
          }
        ]
      };
        // 横向柱子
            var riskchar1f = {
                            tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top:'0'
                },
                xAxis:  {
                    type: 'value',
                    show:false
                },
                yAxis: {
                    type: 'category',
                    show:false
                },
                series: [
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                color:'#000'
                            }
                        },
                        itemStyle: {
                        normal: {
                            
                            color: function(params) {
                            if (params.value > 0 && params.value < 300) {
                                return "#333333";
                            } else if (params.value >= 100 && params.value <= 600) {
                                return "#666666";
                            } else if (params.value >= 200 && params.value <= 900) {
                                return "#999999";
                            }
                            return "#bad616";
                            }
                        }
                        },
                        data: [220, 532, 901]
                    }
                ]
            };
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      // let myChart2 = this.$echarts.init(document.getElementById("myChart1"));
      // myChart2.setOption(option);
      // let mypie1 = this.$echarts.init(document.getElementById("pieb1"));
      // mypie1.setOption(pie);
      // let myChart1 = this.$echarts.init(document.getElementById("axis1"));
      // myChart1.setOption(option1);
    }
  },
  mounted() {
    this.chart_one();
    this.$store.commit('route_path',this.$route.path);
      // console.log(this.$route.path);
      // this.$router.path
    
  }
};
</script>
