<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <ins_left-vue v-bind:ins_planInspectionCount='ins_planInspectionCount'></ins_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <ins_right-vue v-bind:ins_planInspectionCount='ins_planInspectionCount'></ins_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Ins_leftVue from './ins_left.vue';
  import Ins_rightVue from './ins_right.vue';
  export default {
    data() {
      return {
        //巡检统计参数-返回
        ins_planInspectionCount:{
          finish:'',
          nofinish:'',
          amount:'',
          plancount:'',
          planing:'',
          weekRate:'',
          monthRate:'',
          dayRate:'',
          historyRate:'',
          plansum:'',
          troubleRate:'',
        },
        

      };
    },
    components:{
      'header-vue':HeaderVue,
      'ins_left-vue':Ins_leftVue,
      'ins_right-vue':Ins_rightVue
    },
    methods: {
      getData() {
        this.$fetch('/api/inspection/planInspectionCount')
          .then((response) => {
            console.log(response.data)
            let data=response.data;
            if(response.data){
              this.ins_planInspectionCount.finish=data.planInstanceCount.finish;
              this.ins_planInspectionCount.nofinish=data.planInstanceCount.nofinish;
              this.ins_planInspectionCount.amount=data.planInstanceCount.amount;
              this.ins_planInspectionCount.plancount=data.planInstanceCount.plancount;
              this.ins_planInspectionCount.planing=data.instanceIngCount.planing;
              this.ins_planInspectionCount.weekRate=data.instanceByDay.weekRate;
              this.ins_planInspectionCount.monthRate=data.instanceByDay.monthRate;
              this.ins_planInspectionCount.dayRate=data.instanceByDay.dayRate;
              this.ins_planInspectionCount.historyRate=data.instanceByDay.historyRate;
              this.ins_planInspectionCount.plansum=data.instanceIngCount.plansum;
              this.ins_planInspectionCount.troubleRate=data.instanceByDay.troubleRate;
            }
          });
        
        // this.$fetch('/api/inspection/queryTrendPieGraph',this.queryTrendPieGraph_parameter).then((response)=>{
        //   console.log(response.data);
        //   let data=response.data;
        //   if(response.data){
        //     this.ins_queryTrendPieGraph.amount=data.result[0].amount;
        //     this.ins_queryTrendPieGraph.finishedAmount=data.result[0].finishedAmount;
        //   }
        // }).then((err)=>{
        //   console.log(err);
        // })
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped>
  .row{
    position: relative;
    z-index: 22;
  }
</style>
