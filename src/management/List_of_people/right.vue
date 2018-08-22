<template>
        <div class="toolright z-index-20">
          <!-- 详情 -->
          <section class="per-iteminfo plan">
            <!-- <a class="btn-back" @click="back_first" class="btn-back"><i class="el-icon-arrow-left"></i>返回</a>
            <section class="margin-top20">
              <div class="personinfo">
                <p>
                  <span class="size-20 font-blue">{{ this.form.nickName }}</span>
                  <span class="float-right">
                      <span class="bgbox-max bg-blue font-black size-10">{{ this.form.roleName }}</span>
                  </span>
                </p>
                <p class="col-sm-7 text-left padding0">
                  <span><i class="fas fa-industry"></i> {{ this.form.unitName }}</span>
                </p>
                <p class="col-sm-5 text-right padding0">
                  注册时间:<strong class="font-gray-999">{{ this.form.createTime }}</strong>            
                </p>
              </div>
            </section> -->
            <!-- 个人信息 -->
            <section>
              <div class="row toolcount margin-top20">
                        <div class="col-sm-4 font-gray-666 padding0">
                          <ul class="toolcount-left padding-left0" id="toolcount">
                            <li class="col-xs-offset-1 col-xs-10 margin-bottom10 padding-left5 text-center">
                              <!-- <h1 class="toolcount-p1">8.7</h1> -->
                              <!-- <img src="../../assets/images/head.jpg" class="img-responsive img-circle"> -->
                              <img :src="this.form.headImgUrl" id="up_img" class="img-responsive img-circle center-block" style="width:100px;height:100px;"/>
                            </li>
                            <li class="col-xs-offset-1 col-xs-10 padding-left5 text-center">
                              <h4 class="size-16 font-blue show">{{ this.form.nickName }}</h4>
                              <span class="size-12 font-gray-999"><!-- 男 25岁 河北邯郸<br> -->{{this.form.roleName}}</span>
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
                              <p>注册时间:<strong class="font-white">{{ createTime }}</strong></p>
                            </li>
                            <!-- <li class="row text-left">
                              <div class="col-sm-6">
                                <p>报警响应 <strong class="font-red">23次</strong></p>
                              </div>
                              <div class="col-sm-6">
                                <p>平均响应时长 <strong class="font-blue">1227s</strong></p>
                              </div>
                            </li> -->
                            <li class="row text-left padding-right16 margin-top10">
                              <div class="col-sm-5 personnel-borderright">                                
                                <p class="size-14 show font-white">{{ this.form.cellPhone }}</p>
                                <p>手机号码</p>
                              </div>
                              <div class="col-sm-7">
                                <p class="size-12 show font-orange">{{this.form.unitName}}</p>
                                <p>所属单位</p>
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
                        <div class="col-sm-12">
                            <span>姓名 </span>
                            <strong v-html="this.form.nickName"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>联系电话 </span>
                            <strong v-html="this.form.cellPhone"></strong>
                        </div>
                        <div class="col-sm-6">
                            <span>角色 </span>
                            <strong v-html="this.form.roleName"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>所属单位</span>
                            <strong v-html="this.form.unitName"></strong>
                        </div>
                        <!-- <div class="col-sm-6">
                            <span>职位 </span>
                            <strong v-html="this.form.position"></strong>
                        </div> -->                                        
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
          unitName:'',
          nickName:'',
          position:'',
          unitName:'',
          cellPhone:'',
          roleName:'',
          headImgUrl:'',
          review:'',
          createTime:''
        },
        tableData:[],
        currentPage:1
      }
    },
    
    methods: {
      right_list(){
        this.tableData.forEach((item,index)=>{
          if(item.id == this.unitNumber){
            item.review == 0 ? this.form.review = '非审核账号' : item.review == 1 ? this.form.review = '审核通过' : item.review == 2 ? this.form.review = '审核未通过' : this.form.review = '待审核' ;
            this.form.unitName = item.unitName ;
            this.form.nickName = item.nickName ;
            this.form.position = item.position ;
            this.form.unitName = item.unitName ;
            this.form.cellPhone = item.cellPhone ;
            this.form.roleName = item.roleName ;
            this.form.headImgUrl = item.headImgUrl ;
            this.form.createTime = item.createTime ;
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
    },
    watch:{
      unitNumber(){
        this.tableList();
      },
      peopleTableData(){
        this.form.nickName = '' ;
        this.form.position = '' ;
        this.form.unitName = '' ;
        this.form.cellPhone = '' ;
        this.form.roleName = '' ;
        this.form.headImgUrl = '' ;
        var item = this.peopleTableData ;
        console.log(this.peopleTableData)
        item.review == 0 ? this.form.review = '非审核账号' : item.review == 1 ? this.form.review = '审核通过' : item.review == 2 ? this.form.review = '审核未通过' : this.form.review = '待审核' ;
        this.form.nickName = item.nickName ;
        this.form.position = item.position ;
        this.form.unitName = item.unitName ;
        this.form.cellPhone = item.cellPhone ;
        this.form.roleName = item.roleName ;
        this.form.headImgUrl = item.headImgUrl ;
        this.form.createTime = item.createTime ;
      }
    },
    computed:mapState([
      'unitNumber',
      'peopleTableData',
      'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
