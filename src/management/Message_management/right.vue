<template>
  <div class="toolright" >
    <!-- 消息信息 -->
    <section class="notice textandimg margin-top20" style="display:none;">
      <h4 class="p-title">系统公告详情</h4>
      <div class="row textandimg-main margin-top20 size-12">                  
          <div class="col-sm-12">
              <span>标题</span>
              <strong class="font-blue" v-html="this.noticeTitle"></strong>
          </div>
          <div class="col-sm-6">
              <span>发布人</span>
              <strong v-html="this.noticeSenderName"></strong>
          </div>
          <div class="col-sm-6">
              <span>所属单位</span>
              <strong v-html="this.noticeSenderUnitName"></strong>
          </div>
          <div class="col-sm-6">
              <span>发布时间</span>
              <strong v-html="this.noticeSendTime"></strong>
          </div>
          <div class="col-sm-12">
              <span>内容</span>
              <div class="font-white margin-top10">{{ noticeContent }}</div>
          </div>          
      </div>
    </section> 
    <section class="activity textandimg margin-top20" style="display:none;">
      <h4 class="p-title">活动通知详情</h4>
      <div class="row textandimg-main margin-top20 size-12">                  
          <div class="col-sm-12">
              <span>标题</span>
              <strong class="font-blue" v-html="name"></strong>
          </div>
          <div class="col-sm-12">
              <span>所属单位</span>
              <strong v-html="unitName"></strong>
          </div>
          <div class="col-sm-6">
              <span>活动重要性</span>
              <strong v-html="levels"></strong>
          </div>
          <div class="col-sm-6">
              <span>参加人数</span>
              <strong v-html="activeUserNumber"></strong>
          </div>
          <div class="col-sm-6">
              <span>举办时间</span>
              <strong v-html="startTime"></strong>
          </div>
          <div class="col-sm-6">
              <span>引入危险源</span>
              <strong v-html="dangerSource"></strong>
          </div>
          <div class="col-sm-6">
              <span>活动是否禁烟</span>
              <strong v-html="smoking"></strong>
          </div>
          <div class="col-sm-12">
              <span>发布人 </span>
              <strong v-html="sendUserName"></strong>
          </div>
          <div class="col-sm-12">
              <span>发布时间 </span>
              <strong v-html="createTime"></strong>
          </div>                
          <div class="col-sm-12">
              <span>内容 </span>
              <div class="font-white margin-top10" v-html="content"></div>
          </div>          
      </div>
    </section> 
  </div>
</template>

<script>
  import{ mapState } from "vuex"
  export default {
    data() {
      return {
        noticeTitle:'',
        noticeSenderName:'',
        noticeSenderUnitName:'',
        noticeSendTime:'',
        noticeContent:'',
        name:'',
        unitName:'',
        levels:'',
        activeUserNumber:'',
        startTime:'',
        dangerSource:'',
        smoking:'',
        sendUserName:'',
        createTime:'',
        content:''
      }
    },
    watch:{
      noticeTableData(){
        this.noticeTitle = '' ;
        this.noticeSenderName = '' ;
        this.noticeSenderUnitName = '' ;
        this.noticeSendTime = '' ;
        this.noticeContent = '' ;
        var item = this.noticeTableData ;
        this.noticeTitle = item.title ;
        this.noticeSenderName = item.senderName ;
        this.noticeSenderUnitName = item.senderUnitName ;
        this.noticeSendTime = item.sendTime ;
        this.noticeContent = item.content ;
      },
      activityTableData(){
        this.name = '' ;
        this.unitName = '' ;
        this.levels = '' ;
        this.activeUserNumber = '' ;
        this.startTime = '' ;
        this.dangerSource = '' ;
        this.smoking = '' ;
        this.sendUserName = '' ;
        this.createTime = '' ;
        this.content = '' ;
        var item = this.activityTableData ;
        this.name = item.name ;
        this.unitName = item.unitName ;
        this.levels = item.levels == '1' ? '囯事重要活动' : item.levels == '2' ? '民事重要活动' : '民事一般活动';
        this.activeUserNumber = item.activeUserNumber ;
        this.startTime = item.startTime ;
        this.dangerSource = item.dangerSource == '1' ? '多' : item.dangerSource == '2' ? '中' : '少';
        this.smoking = item.smoking == '1' ? '是' : '否';
        this.sendUserName = item.sendUserName ;
        this.createTime = item.createTime ;
        this.content = item.content ;
      }
    },
    computed:mapState([
      'noticeTableData',
      'activityTableData'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
