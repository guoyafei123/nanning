<template>
  <div class="Inspection_plan z-index-20  ">
    <div class="font-white margin-left15 margin-right20 plan" style="margin-top:130px;display:none;">
      <section class="inspection-iteminfo" >
        <section>
          <div class="textandimg">
              <h2 class="size-18 font-gray-ccc margin-bottom30 margin-top10" style="margin-left:45px;">
                 单位详情
              </h2>
              <div class="row textandimg-main">
                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">单位名称 </span>
                      <span class="size-14 font-gray-999 span_con" v-html="this.name"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">单位性质 </span>
                      <span class="size-14 font-gray-999 span_con" v-html="this.property"></span>
                  </div>

                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">单位人数 </span>
                      <span class="size-14 font-gray-999 span_con" v-html="this.staffNum"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">单位地址 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.location"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">单位图片</span>
                      <img :src="'http://img.nanninglq.51play.com/xf/api/unit_img/'+ this.id +'.jpg'" :id="'up_img'+ this.id" style="width:80px;height:80px;"/>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">部门电话 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.telephone"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">消防负责人 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.firemenName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">消防负责人电话 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.firemenTel"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">法人代表 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.corporation"></span>
                  </div>
              </div>
          </div>
        </section>
      </section>
    </div>
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
            console.log(this.tableData);
            $('.plan').show();
            this.right_list();
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
        this.right_list();
        this.tableList();
      }
    },
    computed:mapState([
      'unitNum'
    ])
  }
</script>

<style lang="scss" scoped>
  .clearFix:after{
    clear:both;
    content:'';
    display: block;
  }
  .textandimg{
    margin-left:90px;
  }
  .span_name{
    font-size: 16px !important;
    width:160px;
    display:inline-block;
    margin-left:-20px;
    line-height: 40px;
  }
  .span_con{
    font-size: 14px !important;
    display:inline-block;
    line-height: 40px;
  }
  
</style>
