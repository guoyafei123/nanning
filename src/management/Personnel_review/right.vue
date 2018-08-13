<template>
  <div class="Inspection_plan z-index-20  ">
    <div class="font-white margin-left15 margin-right20 plan" style="margin-top:130px;display:none;">
      <section class="inspection-iteminfo" >
        <section>
          <div class="textandimg">
              <h2 class="size-18 font-gray-ccc margin-bottom30 margin-top10" style="letter-spacing:10px;">
                 {{ this.form.nickName }}的信息
              </h2>
              <div class="row textandimg-main">
                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">姓名</span>
                      <span class="size-14 font-gray-999 span_con" v-html="this.form.nickName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">职位</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.position"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">联系电话</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.cellPhone"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">所属单位</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.unitName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">审核意见</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.review"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">审核说明</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.reviewContent"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">审核人</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.reviewName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">审核时间</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.form.reviewTime"></span>
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
        form:{
          nickName:'',
          position:'',
          unitName:'',
          cellPhone:'',
          review:'',
          textarea:'',
          reviewName:'',
          reviewTime:''
        },
        tableData:[]
      }
    },
    
    methods: {
      right_list(){
        this.tableData.forEach((item,index)=>{
          if(item.id == this.unitNumber){
            item.review == 1 ?  this.form.review = '审核通过' : this.form.review = '审核未通过' ;
            item.reviewContent == 1 ?  this.form.reviewContent = '' : this.form.reviewContent = item.reviewContent ;
            this.form.nickName = item.nickName ;
            this.form.position = item.position ;
            this.form.unitName = item.unitName ;
            this.form.cellPhone = item.cellPhone ;
            this.form.reviewName = item.reviewName ;
            this.form.reviewTime = item.reviewTime ;
          }
        })
      },
      tableList(){
        this.$fetch(
          "/api/user/queryPagerUserList",{
            currentPager:this.currentPage4,
            pagerSize:10
          }
        )
        .then(response => {
          console.log(response);
          if (response.data.pager) {
            this.tableData = response.data.pager.result;
            console.log(this.tableData);
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
      unitNumber(){
        this.right_list();
        this.tableList();
      }
    },
    computed:mapState([
      'unitNumber'
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
    margin-left:80px;
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
