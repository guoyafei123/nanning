<template>
        <div class="toolright z-index-20">
          <!-- 详情 -->
          <section class="per-iteminfo plan">
            <!-- <a class="btn-back" @click="back_first" class="btn-back"><i class="el-icon-arrow-left"></i>返回</a> -->
            <section class="margin-top20">
              <div class="personinfo">
                <p>
                  <span class="size-20 font-blue">{{ this.form.nickName }}</span>
                  <span class="float-right">
                      <span class="bgbox-max bg-gray-333 font-gray-ccc size-10">{{ this.form.roleName }}</span>
                  </span>
                </p>
                <p class="col-sm-4 text-left padding0 margin-top10">
                  <span><i class="fas fa-industry"></i> {{ this.form.unitName }}</span>
                </p>
                <p class="col-sm-8 text-right padding0 margin-top10">
                  注册时间:<strong class="font-gray-999">{{ this.form.reviewTime }}</strong>            
                </p>
              </div>
            </section>
            <!-- 个人信息 -->
            <section>
              <div class="row toolcount margin-top20">
                        <div class="col-sm-4 font-gray-666 padding0">
                          <ul class="toolcount-left padding-left0" id="toolcount">
                            <li class="col-xs-offset-1 col-xs-10 margin-bottom10 padding-left5 text-center">
                              <!-- <h1 class="toolcount-p1">8.7</h1> -->
                              <!-- <img src="../../assets/images/head.jpg" class="img-responsive img-circle"> -->
                              <img :src="'/img'+this.form.headImgUrl" id="up_img" class="img-responsive img-circle center-block" style="width:100px;height:100px;"/>
                            </li>
                            <li class="col-xs-offset-1 col-xs-10 padding-left5 text-center">
                              <h4 class="size-16 font-blue show">{{ this.form.nickName }}</h4>
                              <span class="size-12 font-gray-999"><!-- 男 25岁 河北邯郸<br> -->{{ this.form.cellPhone }}</span>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-8 font-gray-999 padding0">
                          <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                            <li>
                              <p class="size-18 font-white">个人信息</p>
                            <li>
                              <p class="size-10 set-scaleright">Personnel Info</p>
                            </li>
                            <li class="margin-top20">
                                <p>在线时长 <strong class="font-white">3229分钟</strong></p>
                            </li>
                            <!-- <li class="row text-left">
                              <div class="col-sm-6">
                                <p>报警响应 <strong class="font-red">23次</strong></p>
                              </div>
                              <div class="col-sm-6">
                                <p>平均响应时长 <strong class="font-blue">1227s</strong></p>
                              </div>
                            </li> -->
                            <li class="row text-center padding-right16 margin-top10">
                              <div class="col-sm-4 personnel-borderright">
                                <p class="size-16 show font-white">269</p>
                                <p>巡检完成数</p>
                              </div>
                              <div class="col-sm-4 personnel-borderright">
                                <p class="size-16 show font-white">87</p>
                                <p>隐患发现数</p>
                              </div>
                              <div class="col-sm-4">
                                <p class="size-16 show font-white">63</p>
                                <p>隐患解决数</p>
                              </div>
                            </li>
                          </ul>
                        </div>
              </div>
            </section>
            <!-- 详细信息 -->
            <section>
              <div class="textandimg margin-top30">
                    <h4 class="p-title">详细信息</h4>
                    <div class="row textandimg-main margin-top20 size-12">
                        <div class="col-sm-6">
                            <span>姓名 </span>
                            <strong v-html="this.form.nickName"></strong>
                        </div>
                        <div class="col-sm-6">
                            <span>联系电话 </span>
                            <strong v-html="this.form.cellPhone"></strong>
                        </div>
                        <div class="col-sm-6">
                            <span>角色 </span>
                            <strong v-html="this.form.roleName"></strong>
                        </div>
                        <!-- <div class="col-sm-6">
                            <span>职位 </span>
                            <strong v-html="this.form.position"></strong>
                        </div> -->
                        <div class="col-sm-12">
                            <span>所属单位</span>
                            <strong v-html="this.form.unitName"></strong>
                        </div>                
                      </div>
                </div>
            </section>
            <!-- 审核信息 -->
            <section>
              <div class="textandimg margin-top30">
                    <h4 class="p-title"></h4>
                    <div class="row textandimg-main margin-top20 size-12">
                        <div class="col-sm-12">
                            <span>审核结果</span>
                            <strong class="font-blue" v-html="this.form.review"></strong>
                        </div>                        
                        <div class="col-sm-12">
                            <span>审核人</span>
                            <strong class="font-white" v-html="this.form.reviewName"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>审核时间</span>
                            <strong v-html="this.form.reviewTime"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>审核说明</span>
                            <strong v-html="this.form.reviewContent"></strong>
                        </div>              
                      </div>
                </div>
            </section>
          </section>
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
          reviewTime:'',
          headImgUrl:''
        },
        tableData:[],
        currentPage:1
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
            this.form.headImgUrl = item.headImgUrl ;
          }
        })
      },
      tableList(){
        this.$fetch(
          "/api/user/queryPagerUserList",{
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
      this.right_list();
    },
    watch:{
      unitNumber(){
        this.right_list();
        this.tableList();
      }
    },
    computed:mapState([
      'unitNumber',
      'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>
</style>
