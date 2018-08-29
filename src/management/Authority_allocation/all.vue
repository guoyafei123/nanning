<template>
  <section class="allocation">
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-kongzhitai_"></i>
        <h2>权限分配</h2>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :highlight-current-row="true"
          :default-sort = "{prop: 'Serial_number', order: 'descending'}"> 
          <el-table-column
            prop="Serial_number"
            type="index"
            sortable
            label="序号">
          </el-table-column>
          <el-table-column
            prop="rname"
            label="组名称">
          </el-table-column>
          <el-table-column
            label="查看权限">
            <template slot-scope="scope">
              <button @click="btn(scope.row.id)" class="btn-on">查看</button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>
<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        tableData: []//人员信息列表
      }
    },
    methods: {
      btn(id){
        this.$router.push({path:`/Authority_allocation/allocation/${id}`})
      },
      tableList(){
        this.$fetch("/api/user/queryRoleListByUser")
          .then(response => {
            //console.log(response);
            if (response.data.roleList) { 
              this.tableData = response.data.roleList;
            }
          })
          .then(err => {
            // //console.log(err);
          });
      }
    },
    mounted(){
      realconsole();
      this.tableList();
    }
  }
</script>
<style lang="scss" scoped>
</style>
