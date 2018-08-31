<template>
        <div class="toolright z-index-20">
          <!-- 详情 -->
            <!-- 详细信息 -->
            <section>
              <div class="textandimg margin-top30">
                    <h4 class="p-title">巡检打卡记录详情</h4>
                    <div class="row textandimg-main margin-top20 size-12">
                        <div class="col-sm-6">
                            <span>巡检人</span>
                            <strong v-html="this.userName"></strong>
                        </div>
                        <div class="col-sm-6">
                            <span>手机号</span>
                            <strong v-html="this.cellphone"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>巡检路线名称</span>
                            <strong v-html="this.inspectionName"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>巡检领取时间</span>
                            <strong v-html="this.receiveTime"></strong>
                        </div>
                        <div class="col-sm-12">
                            <span>路线完成时间</span>
                            <strong v-html="this.finishedTime"></strong>
                        </div>                
                      </div>
                </div>
            </section>
            <!-- 审核信息 -->
            <section>
              <div class="textandimg margin-top30">
                  <h4 class="p-title" >打卡节点</h4>
                  <div class="main_content_table margin-top30">
                    <el-table
                      :data="inspectionPlanUserList"
                      border
                      height="500"
                      :highlight-current-row="true"
                      :default-sort = "{prop: 'Serial_number', order: 'descending'}">
                      <el-table-column
                        prop="Serial_number"
                        type="index"
                        fixed="left"
                        sortable
                        label="序号">
                      </el-table-column>
                      <el-table-column
                        :show-overflow-tooltip="true"
                        label="打卡节点位置">
                        <template slot-scope="scope">
                          <strong v-if="scope.row.buildingId == 0">室外</strong>
                          <strong v-else><span v-if="scope.row.buildingId != 0">{{ scope.row.buildingName }}</span><span v-if="scope.row.floorNumber != '' && scope.row.floorNumber != null">{{ scope.row.floorNumber }}层</span><span v-if="scope.row.roomNumber != '' && scope.row.roomNumber != null">{{ scope.row.roomNumber }} 房间</span></strong>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="status"
                        :formatter="status"
                        label="打卡状态">
                      </el-table-column>
                      <el-table-column
                        width="140"
                        :show-overflow-tooltip="true"
                        prop="punchTime"
                        style="padding:auto;"
                        label="打卡时间">
                      </el-table-column>
                    </el-table>
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
        userName:'',
        cellphone:'',
        inspectionName:'',
        receiveTime:'',
        finishedTime:'',
        inspectionPlanUserList:[]
      }
    },
    
    methods: {
      status(row){
        return row.status == '1' ? '未打卡' : '打卡' ;
      },
      inspectionPlanUser(){
        this.$fetch("/api/inspection/inspectionPlanUserWithNode",{
          inspectionPlanUserId:this.inspectionPlanUserId
        }).then(res=>{
          console.log(res);
          this.inspectionPlanUserList = res.data.inspectionPlanUser.inspectionNodeUserList;
          var inspectionPlanUserData = res.data.inspectionPlanUser;
          this.userName = inspectionPlanUserData.userName ;
          this.cellphone = inspectionPlanUserData.cellphone ;
          this.inspectionName = inspectionPlanUserData.inspectionName ;
          this.receiveTime = inspectionPlanUserData.receiveTime ;
          this.finishedTime = inspectionPlanUserData.finishedTime ;
        })
      }
    },
    mounted() {
      this.inspectionPlanUser();
    },
    watch:{
     inspectionPlanUserId(){
       this.inspectionPlanUser();
     }
    },
    computed:mapState([
      'inspectionPlanUserId'
    ])
  }
</script>

<style lang="scss" scoped>
</style>
