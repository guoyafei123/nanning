<template>
  <div class="toolright">
    <!-- 单位信息 -->
    <section class="textandimg margin-top20">
              <h4 class="p-title">单位详情</h4>
              <div class="row textandimg-main margin-top20 size-12">
                  <div class="col-sm-12 margin-bottom20 imgSrc">
                      <img :src="'http://img.nanninglq.51play.com/xf/api/unit_img/'+ this.id +'.jpg?'+'time='+(new Date()).getTime()" :id="'up_img'+ this.id" class="img-responsive center-block" style="max-height: 140px;" />
                  </div>
                  <div class="col-sm-6">
                      <span>单位名称 </span>
                      <strong v-html="this.name"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>部门电话 </span>
                      <strong v-html="this.telephone"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>单位性质 </span>
                      <strong v-html="this.property"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>法人代表 </span>
                      <strong v-html="this.corporation"></strong>
                  </div>                  
                  <div class="col-sm-6">
                      <span>单位人数 </span>
                      <strong v-html="this.staffNum"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>单位地址 </span>
                      <strong v-html="this.location"></strong>
                  </div>          
              </div>
    </section>
    <!-- 安防信息 -->
      <section>
        <div class="textandimg margin-top30">
              <h4 class="p-title">安防信息</h4>
              <div class="row textandimg-main margin-top20 size-12">
                  <div class="col-sm-6">
                      <span>消防负责人 </span>
                      <strong v-html="this.firemenName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>负责人电话 </span>
                      <strong v-html="this.firemenTel"></strong>
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
      }
    },
    computed:mapState([
      'unitNum'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
