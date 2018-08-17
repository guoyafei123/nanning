<template>
  <div class="toolright">
    <!-- 消息信息 -->
    <section class="textandimg margin-top20">
              <h4 class="p-title">消息详情</h4>
              <div class="row textandimg-main margin-top20 size-12">                  
                  <div class="col-sm-12">
                      <span>主题 </span>
                      <strong class="font-blue" v-html="this.name"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>类型 </span>
                      <strong>系统公告</strong>
                  </div>
                  <div class="col-sm-6">
                      <span>所属单位 </span>
                      <strong v-html="this.name"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>发布人 </span>
                      <strong v-html="this.firemenName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>发布时间 </span>
                      <strong>2018-09-13 23:36:32</strong>
                  </div>
                  <div class="col-sm-6">
                      <span>过期时间 </span>
                      <strong>2018-09-13 23:36:32</strong>
                  </div>                  
                  <div class="col-sm-12">
                      <span>内容 </span>
                      <div class="font-white margin-top10">随便写一段话吧，因为我也不知道该写些什么出来给大家看，智能凑字数，如果字数不够，我会用其他文字来代替，比如123456或456789，如果这还不够的话，我只能打省略号了。。。。。。
                      </div>
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
        id:'',
        name:'',
        property:'',
        staffNum:'',
        location:'',
        telephone:'',
        firemenName:'',
        firemenTel:'',          
        corporation:'',
        tableData:[]
      }
    },
    
    methods: {
      right_list(){
        
        this.tableData.forEach((item,index)=>{
          if(item.id == this.unitNum){
            this.id = item.id ;
            this.name = item.name ;
            this.property = item.property ;
            this.staffNum = item.staffNum ;
            this.location = item.location ;
            this.telephone = item.telephone ;
            this.firemenName = item.firemenName ;
            this.firemenTel = item.firemenTel ;
            this.corporation = item.corporation ;
          }
        })

      },
      tableList(){
        this.$fetch(
          "/api/unit/queryPagerUnitList",{
            currentPager:this.currentPage4,
            pagerSize:10
          }
        )
        .then(response => {
          console.log(response);
          if (response.data.pager) {
            this.tableData = response.data.pager.result;
            // console.log(this.tableData);
            
            this.right_list();
            $('.plan').show();
          }
        })
        .then(err => {
          // console.log(err);
        });
      }
    },
    mounted() {
      this.tableList();
      
      this.right_list();
    },
    watch:{
      unitNum(){
        this.tableList();
        this.right_list();
      },
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
        console.log(this.peopleTableData);
        this.id = item.id ;
        this.name = item.name ;
        this.property = item.property ;
        this.staffNum = item.staffNum ;
        this.location = item.location ;
        this.telephone = item.telephone ;
        this.firemenName = item.firemenName ;
        this.firemenTel = item.firemenTel ;
        this.corporation = item.corporation ;
      }
    },
    computed:mapState([
      'unitNum',
      'peopleTableData'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
