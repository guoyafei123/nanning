<template>
  <div class="toolright font-gray-999">
    <!-- 单位信息（地图联动） -->
    <section class="unit-info border-solid-333 margin-bottom30 clearfix bg-black">      
      <ul class="list-unstyled">
        <!-- 介绍 -->
        <li class="position-relative">
          <div class="position-absolute-bottom clearfix">
            <!-- 单位信息 -->
            <article class="unit-brief white-space col-sm-10">
              <h3>南宁市良庆区</h3>
              <small><i class="el-icon-location"></i> 广西省南宁市良庆区银海大道710-2号</small>
            </article>
            <!-- 安全评分 -->
            <article class="unit-score">
              <span class="badge bg-blue position-absolute-right">安全评分</span>
              <!-- 分数 -->
              <h1 class="font-red">2.<sub>6</sub></h1>
              <!-- 上升下降标识 -->
              <small class="font-white"><i class="fas fa-arrow-down" data-toggle="tooltip" title="下降"></i></small>
            </article>
          </div>
          <!-- 单位图片 -->
          <img src="../assets/images/jpg01.jpg" class="img-responsive center-block" alt="单位图片">
        </li>
        <!-- 统计1 -->
        <li>
          <div class="pull-left">
            <h4>段亚伟 <small>15600237854</small></h4>
            <small>消防负责人</small>            
          </div>
          <div class="pull-right">
            <article>
              <h4>{{getUnitsSynthesis.ALLALARM}}</h4>
              <small>今日警报</small>
            </article>
            <article>
              <h4>{{getUnitsSynthesis.ALLTROUBLE}}</h4>
              <small>今日隐患</small>
            </article>
            <article>
              <h4>{{getUnitsSynthesis.ALLINSPECTION}}</h4>
              <small>巡检完成</small>
            </article>
          </div>
        </li>
        <!-- 统计2 -->
        <li>
          <article>
            单位总数<span>{{getUnitsSynthesis.UNITCOUNT}}</span>
          </article>
          <article>
            建筑总数<span>{{getUnitsSynthesis.BUILDINGCOUNT}}</span>
          </article>
          <article>
            设备总数<span>{{getUnitsSynthesis.DEVICECOUNT}}</span>
          </article>
          <article>
            预案总数<span>{{getUnitsSynthesis.PREARRANGECOUNT}}</span>
          </article>
          <article>
            人员总数<span>{{getUnitsSynthesis.STAFFNUM}}</span>
          </article>
          <article>
            巡检路线<span>{{getUnitsSynthesis.INSPECTIONPLANCOUNT}}</span>
          </article>
        </li>
      </ul>
    </section>
    <!-- 实时报警 -->
    <section class="early-warning clearfix">
          <span class="toolroute-rect bg-blue"></span>
      <div class="early-title">
        <small>Early-Warning</small>
              <h3 @click="openpanl()">实时报警
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
      <div class="early-tab hide">
        <ul class="col-lg-12 col-md-12 col-sm-12 early-menu list-inline margin-bottom0 nav nav-tabs">
          <li class="col-lg-4 col-md-4 col-sm-4 active">
            <a href="#warning-list" data-toggle="tab">
              <h4>3</h4>
              <small>今日警报</small>            
            </a>
          </li>
          <li class="col-lg-4 col-md-4 col-sm-4">
            <a href="#danger-list" data-toggle="tab" aria-expanded="true">
              <h4>2</h4>
              <small>今日隐患</small>            
            </a>
          </li>
          <li class="col-lg-4 col-md-4 col-sm-4">
            <a href="#ok-list" data-toggle="tab">
              <h4>6</h4>
              <small>复位/关闭</small>            
            </a>
          </li>
        </ul>
        <div id="myTabContent" class="tab-content">
          <!-- 警报列表 -->
          <div class="tab-pane fade in active" id="warning-list">
            <ul class="early-list list-unstyled">
              <!-- 单条火灾循环li -->
              <li class="early-single fault-list">
                <article>
                  <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生火情</span></h5>
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
              <!-- 聚合报警循环li -->
              <li class="early-more warning-list">
                <article>
                  <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>多处发生报警</span></h5>
                  <h4>              
                    <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                    <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                    <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                    <a href=""><span class="badge">14</span></a>
                  </h4>
                </article>
                <var>
                  <p class="col-sm-8">
                    <i class="icon iconfont icon-xiaofangshuan-xian-" data-toggle="tooltip" title="消防栓5个"><span>5</span></i>
                    <i class="icon iconfont icon-jiankong-mian-" data-toggle="tooltip" title="监控摄像头4个"><span>4</span></i>
                    <i class="icon iconfont icon-miehuoqi-mian-" data-toggle="tooltip" title="灭火器2个"><span>2</span></i>
                    <i class="icon iconfont icon-xiaofangshuan-xian-" data-toggle="tooltip" title="消防栓5个"><span>5</span></i>
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
            </ul>
          </div>
          <!-- 隐患列表 -->
          <div class="tab-pane fade" id="danger-list">
            <ul class="early-list list-unstyled">
              <!-- 聚合隐患循环li -->
              <li class="early-more dangers-list">
                <article>
                  <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>多处发生隐患</span></h5>
                  <h4>              
                    <a href=""><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
                    <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
                    <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
                    <a href=""><span class="badge">14</span></a>
                  </h4>
                </article>
                <var>
                  <p class="col-sm-8">
                    <i class="icon iconfont icon-xiaofangshuan-xian-" data-toggle="tooltip" title="消防栓5个"><span>5</span></i>
                    <i class="icon iconfont icon-jiankong-mian-" data-toggle="tooltip" title="监控摄像头4个"><span>4</span></i>
                    <i class="icon iconfont icon-miehuoqi-mian-" data-toggle="tooltip" title="灭火器2个"><span>2</span></i>
                    <i class="icon iconfont icon-xiaofangshuan-xian-" data-toggle="tooltip" title="消防栓5个"><span>5</span></i>
                  </p>
                  <p class="col-sm-4">              
                    <span class="badge">2769s</span><span class="badge">12:36:47</span>
                  </p>
                </var>
              </li>
              <!-- 单条隐患循环li -->
              <li class="early-single dangers-list">
                <article>
                  <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生隐患</span></h5>
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
                    <span class="badge">36s</span><span class="badge">12:36:47</span>
                  </p>
                </var>
              </li>
            </ul>
          </div>
          <!-- 复位关闭 -->
          <div class="tab-pane fade" id="ok-list">
            <ul class="early-list list-unstyled">
              <!-- 已解决单条隐患循环li -->
              <li class="early-single dangers-list ok-list">
                <article>
                  <h5><i class="icon iconfont icon-early"></i>实验教学1号楼3层1203室<span>发生隐患</span></h5>
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
                    <span class="badge">36s</span><span class="badge">12:36:47</span>
                  </p>
                </var>
              </li>   
            </ul>
          </div>
        </div>
      </div>
      <ul id="early-all" class="early-list list-unstyled">
        <!-- 单条火灾循环li -->

        <li v-for="(item,index) in queryAlarmIng.alarms" 
        :class="[item.alarmsum!=null ? 'early-more' :'early-single',
        item.eventLevel==0 ? 'fault-list' :'',
        item.eventLevel==1 ? 'warning-list' :'',
        item.eventLevel==2 ? 'fire-list' :'',
        ]" >
          <article>
            <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>
            <!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
            {{item.unitName==null ? '' :item.unitName}}
            {{item.buildingName==null ? '' :item.buildingName}}
            {{item.floorNumber==null ? '' :item.floorNumber+'层'}}
            {{item.roomNumber==null ? '' :item.roomNumber}}
            <span>
              {{item.alarmsum!=null ? '多处' :''}}
              {{item.eventLevel==0 ? '发生故障' :''}}
              {{item.eventLevel==1 ? '发生报警' :''}}
              {{item.eventLevel==2 ? '发生火情' :''}}
            </span></h5>
            <h4>
              <a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
              <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
              <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
              <a href=""><span class="badge">
                {{item.alarmsum!=null ? item.alarmsum :''}}
              </span></a>
            </h4>
          </article>
          <var>
            <p class="col-sm-8">
              <template v-if="item.userId!=0 || item.userId!=null">
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.confirmNickName}}</span></i>
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>人工报警</span></i>
              </template>
              <template v-if="item.userId==0 || item.userId==null">
                <i class="icon iconfont icon-shebei-mian-"><span>{{item.deviceMac}}</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>{{item.deviceTypeName}}</span></i>
              </template>
            </p>
            <p class="col-sm-4">
              <!-- <span class="badge">98s</span> -->
              <span class="badge">{{(item.startTime).split(' ')[1]}}</span>
            </p>
          </var>
        </li>

        <li v-for="(item,index) in queryAlarmIng.troubles" 
        :class="item.allCount!=null ? 'early-more' :'early-single'" class="dangers-list">
          <article>
            <h5 @click="dialogVisible  = true"><i class="icon iconfont icon-early"></i>
            <!-- {{item.unitName+' '+item.buildingName+' '+item.floorNumber==null?'':''+item.roomNumber}} -->
            {{item.unitName==null ? '' :item.unitName}}
            {{item.buildingName==null ? '' :item.buildingName}}
            {{item.floorNumber==null ? '' :item.floorNumber+'层'}}
            {{item.roomNumber==null ? '' :item.roomNumber}}
            <span>
              {{item.allCount!=null ? '多处' :''}} 发生隐患
            </span></h5>
            <h4>
              <a class="active"><i class="icon iconfont icon-suo-guan-mian-" data-toggle="tooltip" title="锁定"></i></a>
              <a @click="dialogVisible  = true"><i class="fas fa-bullseye" data-toggle="tooltip" title="详情"></i></a>
              <a href=""><i class="icon iconfont icon-guanbi-mian-" data-toggle="tooltip" title="关闭"></i></a>
              <a href=""><span class="badge">
                {{item.allCount!=null ? item.allCount :''}}
              </span></a>
            </h4>
          </article>
          <var>
            <p class="col-sm-8">
                <i class="icon iconfont icon-xunjianyuan-mian-"><span>{{item.nickName}}</span></i>
                <template v-if="item.type==1">
                  <i class="icon iconfont icon-sunhuai-mian-"><span>损坏</span></i>
                </template>
                <template v-if="item.type==2">
                  <i class="icon iconfont icon-feirenweiyinsuyinhuan-mian-"><span>人为风险</span></i>
                </template>
                <template v-if="item.type==3">
                  <i class="icon iconfont icon-feirenweiyinsuyinhuan-xian-1"><span>非人为风险</span></i>
                </template>
                <template v-if="item.type==4">
                  <i class="icon iconfont icon-queshi-mian-"><span>缺失</span></i>
                </template>
                <template v-if="item.type==5">
                  <i class="icon iconfont icon-weixianpin-mian-"><span>危险品</span></i>
                </template>
            </p>
            <p class="col-sm-4">
              <!-- <span class="badge">98s</span> -->
              <span class="badge">{{(item.createTime).split(' ')[1]}}</span>
            </p>
          </var>
        </li>
        
      </ul>
    </section>
    <template>

    </template>
    <!-- 弹窗 -->
    <el-dialog title="":visible.sync="dialogVisible" top="120px" style="background-color: rgba(0,0,0,1);">
      <a class="go-back" @click="dialogVisible = false" data-toggle="tooltip" title="关闭"><i class="el-icon-circle-close-outline size-24"></i></a>
      <earlyinfo-vue></earlyinfo-vue>
    </el-dialog>
  </div>

</template>

<script>  
// import earlyinfoVue from './earlyinfo.vue';
import{mapState} from "vuex";
import sockjs from 'sockjs-client';
import moment from 'moment';
import earlyinfoVue from './earlyinfo.vue';
import { realconsole } from '../assets/js/management.js'
var Stomp = require('@stomp/stompjs');
export default {
  
  components:{
      'earlyinfo-vue':earlyinfoVue
  },
  // 数据接入
  
  data() {
    return {
      // 弹报警详情
      dialogVisible: false,
      torightdatas:Object,
      getUnitsSynthesis_parmar:{
        unitId:null
      },
      getUnitsSynthesis:Object,
      queryAlarmIng_parmar:{
        unitid:null,
        type:1
      },
      queryAlarmIng:Object,
      // socketid:''
      websock: null,
      tounpdateIndex:1
    }
  },
  // sockets:{
  //   connect: function(){  //这里是监听connect事件
  //     this.socketid=this.$socket.id
  //   },
  //   customEmit: function(val){
  //     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //   }
  // },
  computed:mapState([
    'torightdata',
  ]),
  watch:{
      torightdata(){
        this.torightdatas=this.torightdata;
      },
    },
  // 调用方法 
  methods: {

    connect() {
      var that=this;
      console.log("去链接。。。");
      var socket = new sockjs('http://api.nanninglqys.51play.com/socket');
      var stompClient = Stomp.over(socket);
      stompClient.connect({}, function (frame) {
          console.log('Connected: ' + frame);
          //广播消息
          stompClient.subscribe('/topic/broadcast', function (data) {
              // console.info("receive a broadcast message");
              // that.runCallback(data);
              // console.log(data);
          });
          //点对点
          stompClient.subscribe('/user/topic/p2p', function (data) {
              // console.info("receive a p2p message");
              that.runCallback(data,that);
              that.$store.commit('toIndexLeftAlarmChar', '更新'+that.tounpdateIndex++);
              that.getgetUnitsSynthesis();
              // console.log(data);
          });
          console.log("创建链接完成。。。");
      },function (e) {
          console.error("connection closed, retry in 5 seconds");
          setTimeout('connect()', 5000);
          console.log("创建链接失败。。。");
      });
    },
    runCallback(data,that) {
      var message = JSON.parse(data.body);
      var opt = message.data.opt;
      // 人工报警和设备报警
      if(opt.type==1 || opt.type==2){
        that.getqueryAlarmIng(2,opt.type);
        this.openpanl(opt.type,opt)
      }
      // 确认火情
      if(opt.type==5){
        that.getqueryAlarmIng(3,opt.type);
        this.openpanl(opt.type,opt)
      }
      if(opt.type==20){
        that.getqueryAlarmIng(20,opt.type);
        this.openpanl(opt.type,opt)
      }
      // 关闭火情
      if(opt.type==6 || opt.type==3){
        that.getqueryAlarmIng(4,opt.type);
        this.openpanl(opt.type,opt)
      }
      
    },
    
    getgetUnitsSynthesis(){
      this.$fetch(
        "/api/unit/getUnitsSynthesis",
        this.getUnitsSynthesis_parmar
      ).then(response => {
        if (response.data) {
          this.getUnitsSynthesis=response.data.result;
        }
      });
    },

    // type:  
    // =1 正常请求画图
    // =2 只请求报警和火情
    // =3 确认报警
    // =4 关闭火情

    getqueryAlarmIng(type,opttype){
      this.queryAlarmIng=Object;
      this.$fetch(
        "/api/alarm/queryAlarmIng",
        this.queryAlarmIng_parmar
      ).then(response => {
        if (response.data) {
          this.queryAlarmIng=response.data;
          console.log(this.queryAlarmIng);
          this.$store.commit('indexToAlarmTroubel',[this.queryAlarmIng,type]);
          // if(type!=1){
            
          // }
        }
      });
    },
    openpanl(type,item){
      // 报警
      var icon='icon-baojing-xian-';
      var title='报警';
      var position='经典大厦';
      var people='段亚伟';
      var time='';
      var style='panlset-red';
      if(type==1 || type==2){
        icon='icon-baojing-xian-';
        title='报警';
        style='panlset-red';
      }
      // 确认火情
      if(type==5){
        icon='icon-baojing-xian-';
        title='火情';
        style='panlset-red';
      }
      // 关闭火情
      if(type==6 || type==3 || type==20){
        icon='icon-baojing-xian-';
        title='关闭';
        style='panlset-blue';
      }
      
      var html=`
        <div class='row font-black' style='width:600px;'>
          <div class='col-sm-3 notify-left size-26'>
            <i class='icon iconfont `+icon+` size-48'></i>
            <span class='size-20'>`+title+`</span>
          </div>
          <div class='col-sm-9 notify-right'>
            <P>`+item.title+`</p>
            <P class='size-12'>
            <i class="icon iconfont icon-xunjianyuan-mian-"><span>`+item.time+`</span></i>
            </p>
          </div>
        </div>
      `
      this.$notify({
      // title: '提示',
      dangerouslyUseHTMLString: true,
      customClass:style,
      message: html,
      duration: 0
    });
    }

  },
  // 默认加载方法
  mounted() {
    realconsole();
    this.getgetUnitsSynthesis();
    this.getqueryAlarmIng(1);
    // this.initWebpack();
    this.connect();
    
    // this.$socket.emit('connect', '123'); //在这里触发connect事件
  }
};

</script>