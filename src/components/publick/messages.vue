<template>
  <section id="messages" class="col-sm-2 bg-gray-111 margin-top20 clearfix">
    <div class="row bg-gray-222 padding-top20">
      <!-- 框架标题 -->
      <div class="messages-title">
        <h2>消息中心
          <small>messages</small>
        </h2>
        <router-link to="../management/Message_management/list"><i class="icon iconfont icon-fasong-xian- size-20"
                                                                   data-toggle="tooltip" title="发消息"></i></router-link>
      </div>
      <!-- 标签 -->
      <ul id="myTab" class="nav nav-tabs">
        <li class="active">
          <a href="#system" @click="this.queryMessageSys">系统<span class="point"
                                                                  v-if="getStarts.SysStart"><!-- 新消息提示 --></span> </a>
        </li>
        <li>
          <a href="#warning" @click="this.queryMessageAlarm">警报<span class="point" v-if="getStarts.alarmStart"><!-- 新消息提示 --></span></a>
        </li>
        <li>
          <a href="#dangers" @click="this.queryMessageTrouble">隐患<span class="point" v-if="getStarts.troubleStart"><!-- 新消息提示 --></span></a>
        </li>
      </ul>
    </div>
    <!-- 消息列表 li 标签加class 更换消息类型及状态
        活动 activity
        系统 system
        报警 warning
        隐患 dangers
        未读 unread
        故障 fault
        火情 fire
        解决/复位  ok
      -->
    <div id="myTabContent" class="tab-content messages-list">
      <!-- 系统消息 -->
      <div class="tab-pane fade in active" id="system">
        <ul>
          <li v-for="item in getMessageDateSys" :key="item.id" :class="[item.type===6?'activity':'system',
          item.status===1?'unread':'' ]">
            <h3 @click="reedMsg(item)" v-if="item.type===5">
              "{{item.title}}"
              <span v-if="item.type===6">{{item.senderName}}</span>
            </h3>
            <h3 @click="showTabcont(item)" v-if="item.type===6">

              "{{item.title}}"
            </h3>
            <small v-if="item.type==5">系统公告<span>{{item.sendTime}}</span></small>
            <small v-if="item.type==6">活动通知<span>{{item.sendTime}}</span></small>
          </li>
        </ul>
      </div>
      <!-- 警报消息 -->
      <div class="tab-pane fade" id="warning">
        <ul>
          <li class="warning " :class="item.status===1?'unread':''" v-for="item in getMessageDateAlarm">
            <h3 @click="reedMsg(item)">{{item.title}}</h3>
            <small><!--
              <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
              <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>-->
              <span>{{item.sendTime}}</span>
            </small>
          </li>
        </ul>
      </div>

      <!-- 隐患消息 -->
      <div class="tab-pane fade" id="dangers">
        <ul>
          <li class="dangers" :class="item.status===1?'unread':''" v-for="item in getMessageDateTrouble">
            <h3 @click="reedMsg(item)">{{item.title}}</h3>
            <small>
              <!--  <i class="icon iconfont icon-shebei-mian-"><span>A365F57A89D</span></i>
                <i class="icon iconfont icon-miehuoqi-mian-"><span>烟雾感应器</span></i>-->
              <span>{{item.sendTime}}</span>
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
            <h3>{{getEventByIdDate.name}}</h3>
            <article class="row">
              <small class="col-xs-6">
                发 布 者：<b>{{getEventByIdDate.sendUserName}}</b>
              </small>
              <small class="col-xs-6">
                <b>{{getEventByIdDate.startTime}}</b>
              </small>
              <small class="col-xs-6">
                重 要 性：
                <b v-if="this.getEventByIdDate.levels===1">囯事重要活动</b>
                <b v-else-if="this.getEventByIdDate.levels===2">民事重要活动</b>
                <b v-else-if="this.getEventByIdDate.levels===3">民事一般活动</b>
              </small>
              <small class="col-xs-6">
                预计人数：<b>{{getEventByIdDate.activeUserNumber}}</b>
              </small>
              <small class="col-xs-6">
                危 险 源：
                <b v-if="getEventByIdDate.dangerSource===1">多</b>
                <b v-else-if="getEventByIdDate.dangerSource===2">中</b>
                <b v-else-if="getEventByIdDate.dangerSource===3">少</b>
              </small>
              <small class="col-xs-6">
                明 火：<b>{{getEventByIdDate.fire===1?'是':'否'}}</b>
              </small>
              <small class="col-xs-6">
                禁 烟：<b>{{getEventByIdDate.smoking===1?'是':'否'}}</b>
              </small>
            </article>
            <p>
              活动内容：
              <span>{{getEventByIdDate.content}}</span>
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
        //查看消息详情
        getEventByIdDate: Object,
        getEventById_param: {
          eventId: null
        },
        //查询消息列表
        getMessageDateSys: Object,
        getMessageDateAlarm: Object,
        getMessageDateTrouble: Object,
        getMessageDate_param: {
          currentPage: 1,
          pageSize: 999,
        },
        //显示未读状态
        getStarts: {
          SysStart: false,
          alarmStart: false,
          troubleStart: false,
        },
        //读取消息
        rendMessage_param: {
          messageId: null
        }
      }
    },
    // 调用方法
    methods: {
      // tab切换
      showTab() {
        let that = this
        $('#myTab a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
          that.showTablist()
        })
      },
      // 显示内容
      showTabcont(data) {
        //console.log(data);
        //console.log(data.id);
        $('#TabCont').addClass('show')
        $('#myTabContent').addClass('hide')
        this.getEventById_param.eventId = data.referenceId;
        this.getEventById()
        this.reedMsg(data)
      },

      reedMsg(data) {
        if (data.status === 1) {
          this.rendMessage_param.messageId = data.id
          this.rendMessage()
        }
      },
      // 返回列表
      showTablist() {
        $('#myTabContent').removeClass('hide')
        $('#TabCont').removeClass('show')
      },
      //查看活动详情
      getEventById() {
        this.$fetch('/api/event/getEventById', this.getEventById_param)
          .then(response => {
            if (response) {
              //console.log(response)
              this.getEventByIdDate = response.data.event
            }
          })
          .then(err => {
            //console.log(err)
          })
      },
      //系统消息
      queryMessageSys() {
        let types = [5,6]
        this.$fetch('/api/user/queryMessage?types=' + types, this.getMessageDate_param)
          .then(response => {
            if (response) {
              //console.log(response)
              this.getMessageDateSys = response.data.pager.result
              let sysUnReadCount = response.data.sysUnReadCount;
              if (sysUnReadCount > 0) {
                this.getStarts.SysStart = true;
              }
            }
          })
          .then(err => {
            //console.log(err)
          })
      },
      //报警消息
      queryMessageAlarm() {
        let types = [1, 2, 3]
        this.$fetch('/api/user/queryMessage?types=' + types, this.getMessageDate_param)
          .then(response => {
            if (response) {
              //console.log(response)
              let alarmUnReadCount = response.data.alarmUnReadCount;
              if (alarmUnReadCount > 0) {
                this.getStarts.alarmStart = true;
              }
              this.getMessageDateAlarm = response.data.pager.result
            }
          })
          .then(err => {
            //console.log(err)
          })
      },

      //隐患消息
      queryMessageTrouble() {
        let types = 4
        this.$fetch('/api/user/queryMessage?types=' + types, this.getMessageDate_param)
          .then(response => {
            if (response) {
              //console.log(response)
              let troubleUnReadCount = response.data.troubleUnReadCount;
              if (troubleUnReadCount > 0) {
                this.getStarts.troubleStart = true;
              }
              this.getMessageDateTrouble = response.data.pager.result
            }
          })
          .then(err => {
            //console.log(err)
          })
      },
      //读取消息
      rendMessage() {
        this.$fetch('/api/user/rendMessage', this.rendMessage_param)
          .then(response => {
            if (response) {
              //console.log(response)
              this.queryMessageSys()
              this.queryMessageAlarm()
              this.queryMessageTrouble()
            }
          })
          .then(err => {
            //console.log(err)
          })
      },
    },
    // 默认加载方法
    mounted() {
      $('[data-toggle=\'tooltip\']').tooltip()
      this.showTab()
      this.queryMessageSys()
      this.queryMessageAlarm()
      this.queryMessageTrouble()
    }
  }
</script>
