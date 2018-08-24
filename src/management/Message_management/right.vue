<template>
  <div class="toolright">
    <!-- 消息信息 -->
    <section class="textandimg margin-top20 querySystemMessage">
      <h4 class="p-title">系统公告详情</h4>
      <div class="row textandimg-main margin-top20 size-12">                  
          <div class="col-sm-12">
              <span>标题</span>
              <strong class="font-blue" v-html="this.title"></strong>
          </div>  
          <div class="col-sm-12">
              <span>发布人 </span>
              <strong v-html="this.senderName"></strong>
          </div>
          <div class="col-sm-12">
              <span>所属单位</span>
              <strong v-html="this.senderUnitName"></strong>
          </div>
          <div class="col-sm-12">
              <span>发布时间 </span>
              <strong>{{ sendTime }}</strong>
          </div>                
          <div class="col-sm-12">
              <span>内容 </span>
              <div class="font-white margin-top10">{{ content }}</div>
          </div>          
      </div>
    </section> 
    <section class="textandimg margin-top20 queryEventMessage" style="display:none;">
      <h4 class="p-title">活动通知详情</h4>
      <div class="row textandimg-main margin-top20 size-12">                  
          <div class="col-sm-12">
              <span>标题</span>
              <strong class="font-blue" v-html="this.name"></strong>
          </div>  
          <div class="col-sm-12">
              <span>发布人 </span>
              <strong v-html="this.sendUserName"></strong>
          </div>
          <div class="col-sm-12">
              <span>发布时间 </span>
              <strong>{{ createTime }}</strong>
          </div>   
          <div class="col-sm-12">
              <span>所属单位</span>
              <strong v-html="this.unitName"></strong>
          </div>
          <div class="col-sm-12">
              <span>活动重要性</span>
              <strong v-html="this.levels"></strong>
          </div>
          <div class="col-sm-12">
              <span>参加人数</span>
              <strong v-html="this.activeUserNumber"></strong>
          </div> 
          <div class="col-sm-12">
              <span>举办时间</span>
              <strong v-html="this.startTime"></strong>
          </div>      
          <div class="col-sm-12">
              <span>引入危险源</span>
              <strong v-html="this.dangerSource"></strong>
          </div> 
          <div class="col-sm-12">
              <span>活动是否禁烟</span>
              <strong v-html="this.smoking"></strong>
          </div>
          <div class="col-sm-12">
              <span>活动内容 </span>
              <div class="font-white margin-top10">{{ content }}</div>
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
        title:'',
        senderName:'',
        senderUnitName:'',
        sendTime:'',
        content:'',
        tableData:[],
        name:'',
        sendUserName:'',
        createTime:'',
        unitName:'',
        levels:'',
        activeUserNumber:'',
        startTime:'',
        dangerSource:'',
        smoking:'',
        content:''
      }
    },
    
    methods: {
      right_list(){
        this.tableData.forEach((item,index)=>{
          if(item.id == this.noticeId){
            this.title = item.title ;
            this.senderName = item.senderName ;
            this.senderUnitName = item.senderUnitName ;
            this.location = item.location ;
            this.sendTime = item.sendTime ;
            this.content = item.content ;
          }
        })

      },
      Event_list(){
        this.tableData.forEach((item,index)=>{
          if(item.id == this.noticeId){
            this.name = item.name ;
            this.sendUserName = item.sendUserName ;
            this.createTime = item.createTime ;
            this.unitName = item.unitName ;
            this.levels = item.levels == 1 ? '国事重要活动' : item.levels == 2 ? '民事重要活动' :  '民事一般活动' ;
            
            this.activeUserNumber = item.activeUserNumber ;
            this.startTime = item.startTime ;
            this.dangerSource = item.dangerSource == 1 ? '多' : item.dangerSource == 2 ? '中' : '少' ;
            this.smoking = item.smoking == 1 ? '是' : '否' ;
            this.content = item.content ;
          }
        })

      },
      tableList(){
        this.$fetch(
          "/api/event/querySystemMessage",{
            currentPage:this.currentPage,
            pageSize:10,
            unitId:this.unitNotice
          }
        )
        .then(response => {
          //console.log(response);
          if (response.data.pager) {
            this.tableData = response.data.pager.result;
<<<<<<< HEAD
<<<<<<< HEAD
            // //console.log(this.tableData);
            
=======
            // console.log(this.tableData);
>>>>>>> b24e63e6ae6b807f083929d4c4fa0796bc623783
            this.right_list();
=======
            // console.log(this.tableData);
            this.right_list();
          }
        })
        .then(err => {
          // console.log(err);
        });
      },
      EventMessage(){
        this.$fetch(
          "/api/event/queryEventMessage",{
            currentPage:this.currentPage,
            pageSize:10,
            unitId:this.unitNotice
          }
        )
        .then(response => {
          console.log(response);
          if (response.data.pager) {
            this.tableData = response.data.pager.result;
            // console.log(this.tableData);
            
            this.Event_list();
>>>>>>> b24e63e6ae6b807f083929d4c4fa0796bc623783
          }
        })
        .then(err => {
          // console.log(err);
        });
      },
      EventMessage(){
        this.$fetch(
          "/api/event/queryEventMessage",{
            currentPage:this.currentPage,
            pageSize:10,
            unitId:this.unitNotice
          }
        )
        .then(response => {
          console.log(response);
          if (response.data.pager) {
            this.tableData = response.data.pager.result;
            // console.log(this.tableData);
            
            this.Event_list();
          }
        })
        .then(err => {
          // //console.log(err);
        });
      }
    },
    mounted() {
      if(this.$route.path == '/Message_management/notice'){
        $('.querySystemMessage').show();
        $('.queryEventMessage').hide();
        this.tableList();
      }
      if(this.$route.path == '/Message_management/activity'){
        $('.queryEventMessage').show();
        $('.querySystemMessage').hide();
        this.EventMessage();
      }
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
          if(this.$route.path == '/Message_management/notice'){
            $('.querySystemMessage').show();
            $('.queryEventMessage').hide();
          }
          if(this.$route.path == '/Message_management/activity'){
            $('.queryEventMessage').show();
            $('.querySystemMessage').hide();
          }
        },
        // 深度观察监听
        deep: true
      },
<<<<<<< HEAD
<<<<<<< HEAD
      peopleTableData(){
        this.id = '' ;
        this.name = '' ;
        this.property = '' ;
        this.staffNum = '' ;
        this.location = '' ;
        this.telephone = '' ;
        this.firemenName = '' ;
        this.firemenTel = '' ;
        this.corporation = '' ;
        var item = this.peopleTableData ;
        //console.log(this.peopleTableData);
        this.id = item.id ;
        this.name = item.name ;
        this.property = item.property ;
        this.staffNum = item.staffNum ;
        this.location = item.location ;
        this.telephone = item.telephone ;
        this.firemenName = item.firemenName ;
        this.firemenTel = item.firemenTel ;
        this.corporation = item.corporation ;
=======
=======
>>>>>>> b24e63e6ae6b807f083929d4c4fa0796bc623783
      noticeId(){
        if(this.$route.path == '/Message_management/notice'){
          this.tableList();
        }
        if(this.$route.path == '/Message_management/activity'){
          this.EventMessage();
        }
<<<<<<< HEAD
>>>>>>> b24e63e6ae6b807f083929d4c4fa0796bc623783
=======
>>>>>>> b24e63e6ae6b807f083929d4c4fa0796bc623783
      }
    },
    computed:mapState([
      'noticeId',
      'currentPage',
      'unitNotice'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
