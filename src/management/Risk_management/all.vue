<template>
  <section class="em-tab">
    <el-tabs>
      <!-- 修改评分 -->
          <el-tab-pane class="risk-score">
            <span slot="label"><i class="icon iconfont icon-fengxianfenxi-xian-"></i>风险评估</span>
            <!-- 主体 -->
            <div class="main_all_content">
              <!-- 筛选 -->
              <div class="main_content_top">
                <!-- 筛选 -->
                <el-form ref="form" status-icon :model="form" class="float-left">
                  <el-select v-model="unit" placeholder="选择单位" class="select">
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                  <el-select
                    v-model="building"
                    placeholder="选择建筑"  class="start">
                      <el-option
                        v-for="item in buildList"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                </el-form>
              </div>
              <!-- 表格 -->
              <div class="main_content_table position-relative big-list-table">
                <div class="table-scroll">
                  <table class="table toolroute-table" cellpadding="0" cellspacing="0">
                    <thead>
                      <tr>
                        <th>B级要素</th>
                        <th>B级权重</th>
                        <th>C级要素</th>
                        <th>C级权重</th>
                        <th>D级要素</th>
                        <th>D级权重</th>
                        <th>评分</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                      <td rowspan="7">多屏监控</td>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     <tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     <tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- 单位模板 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-danweiguanli-xian-2"></i>单位权重</span>
              222
          </el-tab-pane>
          <!-- 建筑模板 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-jianzhu-xian-"></i>建筑权重</span>
              333
        </el-tab-pane>
        </el-tabs> 
  </section>
</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
</style>
