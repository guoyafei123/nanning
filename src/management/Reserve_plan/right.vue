<template>
  <div class="toolright">
    <!-- 单位信息 -->
    <section class="textandimg margin-top20">
      <h4 class="p-title">预案详情</h4>
      <div class="row textandimg-main margin-top20 size-12">
        <div class="col-sm-12">
              <span>预案名称 </span>
              <strong class="font-blue" v-html="this.name"></strong>
          </div>       
          <!-- <div class="col-sm-12">
              <span>预案类型 </span>
              <strong>灭火管理</strong>
          </div> -->
          <div class="col-sm-12">
              <span>所属单位 </span>
              <strong v-html="this.unitName"></strong>
          </div>
          <div class="col-sm-12">
              <span>所属建筑 </span>
              <strong v-html="this.buildingName"></strong>
          </div>
          <div class="col-sm-12">
              <span>发布人 </span>
              <strong v-html="this.nickName"></strong>
          </div>
          <div class="col-sm-12">
              <span>发布时间 </span>
              <strong v-html="this.createTime"></strong>
          </div>
          <div class="col-sm-12 text-right">
              <a href="javascript:;" @click="open()" class="display-inline-block font-blue size-12"><i class="el-icon-view" data-toggle="tooltip" title="预览"></i> 预览</a>
              <a href="javascript:;" class="display-inline-block font-blue size-12"><i class="el-icon-download" data-toggle="tooltip" title="下载"></i> 下载</a>
          </div>
          <div class="col-sm-12 margin-top10">
            <img :src="url" class="img-responsive" alt="火情确认须知">
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
        name:'',
        unitName:'',
        buildingName:'',
        createTime:'',
        nickName:'',
        url:''
      }
    },
    methods:{
      open(){
        this.$store.commit('topdf',this.unitPlan);
      }
    },
    watch:{
      unitPlan(){
        this.name = '' ;
        this.unitName = '' ;
        this.buildingName = '' ;
        this.createTime = '' ;
        this.nickName = '' ;
        this.url = '' ;
        var item = this.unitPlan ;
        //console.log(this.unitPlan);
        this.id = item.id ;
        this.name = item.name ;
        this.unitName = item.unitName ;
        this.buildingName = item.buildingName ;
        this.createTime = item.createTime ;
        this.nickName = item.nickName ;
        this.url = item.url ;
      }
    },
    computed:mapState([
      'unitPlan'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
