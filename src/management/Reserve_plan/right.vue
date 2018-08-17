<template>
  <div class="toolright">
    <!-- 单位信息 -->
    <section class="textandimg margin-top20">
              <h4 class="p-title">预案详情</h4>
              <div class="row textandimg-main margin-top20 size-12">
                <div class="col-sm-6">
                      <span>预案名称 </span>
                      <strong class="font-blue" v-html="this.name"></strong>
                  </div>                  
                  <div class="col-sm-6 text-right">
                      <a href="#" class="display-inline-block font-blue size-12"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i> 预览</a>
                      <a href="#" class="display-inline-block font-blue size-12"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i> 下载</a>
                  </div>
                  <div class="col-sm-12">
                      <span>预案类型 </span>
                      <strong>灭火管理</strong>
                  </div>
                  <div class="col-sm-6">
                      <span>所属单位 </span>
                      <strong v-html="this.name"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>所属建筑 </span>
                      <strong v-html="this.name"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>发布人 </span>
                      <strong v-html="this.firemenName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>发布时间 </span>
                      <strong>2018-09-13 23:36:32</strong>
                  </div>
                  <div class="col-sm-12 margin-top10">
                    <img src="../../assets/images/plan/plan1.png" class="img-responsive" alt="火情确认须知">
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
