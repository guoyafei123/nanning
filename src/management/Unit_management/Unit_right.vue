<template>
  <div class="toolright padding-top90">
    <section class="unit-info bg-black">
      <ul class="list-unstyled">
        <li class="position-relative">
            <div class="position-absolute-bottom clearfix">
              <!-- 单位信息 -->
              <article class="unit-brief white-space col-sm-10">
                <h3 class="size-20">{{this.name}}</h3>
                <small><i class="el-icon-location"></i> {{this.location}}</small>
              </article>
            </div>
          <!-- 单位图片 -->
          <div class="imgSrc">
            <img :src="'http://img.nanninglq.51play.com/xf/api/unit_img/'+ this.id +'.jpg?'+new Date().getTime()" :id="'up_img'+ this.id" class="img-responsive center-block" />
          </div>
        </li>
        <!-- 统计1 -->
        <li>
          <div class="pull-left">
            <h4>{{this.firemenName}} <small>{{this.firemenTel}}</small></h4>
            <small>消防负责人</small>
          </div>
        </li>
      </ul>
    </section>
    <!-- 单位信息 -->
    <section class="textandimg margin-top30">
              <h4 class="p-title">单位详情</h4>
              <div class="row textandimg-main margin-top20 size-12">
                  <div class="col-sm-12">
                      <span>单位名称 </span>
                      <strong v-html="this.name"></strong>
                  </div>
                  <!-- <div class="col-sm-12">
                      <span>部门电话 </span>
                      <strong v-html="this.telephone"></strong>
                  </div> -->
                  <div class="col-sm-6">
                      <span>单位性质 </span>
                      <strong v-html="this.property"></strong>
                  </div>
                  <!-- <div class="col-sm-6">
                      <span>法人代表 </span>
                      <strong v-html="this.corporation"></strong>
                  </div>                   -->
                  <!-- <div class="col-sm-6">
                      <span>单位人数 </span>
                      <strong v-html="this.staffNum"></strong>
                  </div> -->
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
                  <div class="col-sm-12">
                      <span>消防负责人 </span>
                      <strong v-html="this.firemenName"></strong>
                  </div>
                  <div class="col-sm-12">
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
        // staffNum:'',
        location:'',
        // telephone:'',
        firemenName:'',
        firemenTel:'',          
        // corporation:'',
        tableData:[],
        currentPage:1
      }
    },
    methods: {
        right_list(){
            this.tableData.forEach((item,index)=>{
                if(item.id == this.unitNum){
                    this.id = item.id ;
                    this.name = item.name ;
                    this.propertperty = item.propertperty ;
                    this.staffNum  = item.staffNum ;
                    this.location = item.location ;
                    this.firemenName = item.firemenName ;
                    this.firemenTel = item.firemenTel ;
                }
            })
        },
        tableList(){
            this.$fetch(
                "/api/unit/queryPagerUnitList",{
                    currentPager:this.currentPage,
                    pagerSize:10
                }
            )
            .then(response => {
            //console.log(response);
            if (response.data.pager) {
                this.tableData = response.data.pager.result;
                //console.log(this.tableData);
                this.right_list();
                $('.plan').show();
            }
            })
            .then(err => {
            // //console.log(err);
            });
        }
    },
    mounted() {
      this.tableList();
    },
    watch:{
        unitNum() {
            this.tableList();
        },
        unitList(){
            this.id = '' ;
            this.name = '' ;
            this.property = '' ;
            // this.staffNum = '' ;
            this.location = '' ;
            // this.telephone = '' ;
            this.firemenName = '' ;
            this.firemenTel = '' ;
            // this.corporation = '' ;
            var item = this.unitList ;
            //console.log(this.unitList);
            this.id = item.id ;
            this.name = item.name ;
            this.property = item.property ;
            // this.staffNum = item.staffNum ;
            this.location = item.location ;
            // this.telephone = item.telephone ;
            this.firemenName = item.firemenName ;
            this.firemenTel = item.firemenTel ;
            // this.corporation = item.corporation ;
        }
    },
    computed:mapState([
        'unitNum',
        'unitList',
        'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>


