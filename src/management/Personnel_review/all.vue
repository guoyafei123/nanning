<template>
  <section>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-renyuanliebiao-mian-"></i>
        <h2>人员审核</h2>
      </div>
    </div>
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form class="float-left">
          <el-select v-model="unitId" placeholder="选择单位">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="reviewId" placeholder="选择审核状态">
            <el-option label="全部状态" value=""></el-option>
            <el-option v-for="item in reviewList" :label="item.review" :value="item.id"></el-option>
          </el-select>
        </el-form>
      </div>
      <!-- 表格 -->
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
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
            prop="nickName"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="username"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="unitName"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="position"
            label="职位">
          </el-table-column>
          <el-table-column
            prop="cellPhone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="roleName"
            label="角色">
          </el-table-column>
          <el-table-column
            prop="review"
            label="状态">
            <template slot-scope="scope" >
              <el-tag
                :type="scope.row.review === 1 ? 'green' : 'red'"
                disable-transitions v-if='scope.row.review==1'>审核通过 <i class="el-icon-warning font-blue" data-toggle="tooltip" title="段亚伟 2018-08-20 16:30:23"></i></el-tag>
              <el-tag
                :type="scope.row.review === 2 ? 'red' : 'green'"
                disable-transitions v-if='scope.row.review==2'>审核未通过</el-tag>
              <el-tag
                :type="scope.row.review === 3 ? 'yellow' : 'green'"
                disable-transitions v-if='scope.row.review==3'>待审核</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="reviewName"
            label="审核人">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <button v-if="scope.row.review == 3" @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal" class="btn-check">审核</button>
              <!-- <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button> -->
              <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left btn-system">
            <a href="javascript:;">打印</a>
            <a href="javascript:;">导出</a>
          </div>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span>{{page}}页</span>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 编辑Modal -->
    <div class="modal modal_form fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">人员审核</h4>
          </div>
          <div class="modal-body">
            <el-form ref="form" status-icon :rules="rules" :label-position="labelPosition" :inline="true" :model="form">
              <el-form-item label="姓名" prop="nickName">
                <el-input v-model="form.nickName" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="职位" prop="position">
                <el-input v-model="form.position" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="cellPhone">
                <el-input v-model="form.cellPhone" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="审核意见" prop="review">
                <el-radio v-model="review" label="1">通过</el-radio>
                <el-radio v-model="review" label="2">未通过</el-radio>
              </el-form-item>
              <el-form-item v-if="this.review == 1" label="角色" prop="roleId">
                <el-select v-model="form.roleId" placeholder="请选择" class="select">
                  <el-option label="全部角色" value=""></el-option>
                  <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="this.review == 1" label="所属单位" prop="unitId">
                <el-select v-model="form.unitId" placeholder="请选择" class="select">
                  <!-- <el-option label="全部单位" value=""></el-option> -->
                  <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="this.review == 2" label="审核说明" prop="reviewContent">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="reviewContent">
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow('form')" icon="el-icon-circle-check-outline" class="primary" data-dismiss="modal">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { realconsole } from '../../assets/js/management.js';
  import { isvalidPhone,isName,isvalidName } from '../../assets/js/validate';
  export default {
    data() {
      var validPhone=(rule, value,callback)=>{
          if (!value){
            callback(new Error('请输入手机号码'))
          }else  if (!isvalidPhone(value)){
            callback(new Error('请输入正确的11位手机号码'))
          }else {
            callback()
          }
      }
      var Name=(rule, value,callback)=>{
          if (!value){
            callback(new Error('请输入您的姓名'))
          }else  if (!isName(value)){
            callback(new Error('请输入正确的姓名'))
          }else {
            callback()
          }
      }
      return {
        labelPosition: 'left',
        unitId:'',
        reviewId:'',
        form: {
          id:'',
          nickName:'',
          username:'',
          position:'',
          unitId:'',
          cellPhone:'',
          reviewId:'',
          roleId:''
        },
        optionList:[],//单位列表
        reviewList:[
          {id:1,review:'审核通过'},
          {id:2,review:'审核未通过'},
          {id:3,review:'待审核'}
        ],//角色列表
        tableData: [],//人员信息列表
        roleList:[],//角色列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        reviewContent:'',
        review:'',
        rules: {
          nickName:[
            { required: true, trigger: 'blur', validator: Name }
          ],
          position:[
            { required: true, message: '请填写所在公司的职位', trigger: 'blur' }
          ],
          cellPhone:[
            { required: true, trigger: 'blur', validator: validPhone }
          ],
          review: [
            { required: true, message: '请选择处理意见', trigger: 'change' }//这里需要用到全局变量
          ],
          roleId:[
            { required: true, message: '请选择角色', trigger: 'change' }
          ],
          unitId:[
            { required: true, message: '请选择单位', trigger: 'change' }
          ],
          reviewContent:[
            { required: true, message: '请填写审核意见、说明', trigger: ['change','blur'] }
          ]
        }
      }
    },
    methods: {
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改人员信息
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            this.form.nickName = item.nickName ;
            this.form.username = item.username ;
            this.form.position = item.position ;
            this.form.unitId = item.unitId ;
            this.form.cellPhone = item.cellPhone ;
            this.form.reviewId = item.reviewId ;
            this.form.id = item.id ;
          }
        })
      },
      startRow(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$fetch("/api/user/addOrUpdateUser",{
              'reviewContent':this.reviewContent,
              'review':this.review,
              'roleId':this.form.roleId,
              'unitId':this.form.unitId,
              'id':this.deviceIndex
            }).then(response=>{
              //console.log(response)
            })
          } else {
            //console.log('error submit!!');
            return false;
          }
        });
      },
      show3(row){//跳转
        //console.log(row.id);
        this.$store.commit('currentPage',this.currentPage4);
        this.$store.commit('unitNumber',row.id);
      },
      roleSearch(){
        this.$fetch(
          "/api/user/queryRoleListByUser"
        )
        .then(response => {
          if (response) {
            //console.log(response);
            this.roleList = response.data.roleList;
            //console.log(this.roleList);
            $(' .el-select-dropdown__item').mouseover(function(){
              $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
            });
          }
        })
        .then(err => {
          // //console.log(err);
        });
      },
      unitSearch(){
        this.$fetch(
          "/api/unit/queryUnit"
        )
        .then(response => {
          if (response) {
            //console.log(response);
            this.optionList = response.data.unitList;
            //console.log(this.optionList);
            $(' .el-select-dropdown__item').mouseover(function(){
              $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
            });
          }
        })
        .then(err => {
          // //console.log(err);
        });
      },
      tableList(){
        this.$fetch(
          "/api/user/queryPagerUserList",{
            currentPager:this.currentPage4,
            pagerSize:14,
            unitId:this.unitId,
            review:this.reviewId,
            flag:1
          }
        )
          .then(response => {
            //console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNumber',item.id);
                  //console.log(item.id)
                }
              })
              if(this.totalList % 10 == 0){
                this.page = parseInt( this.totalList / 10 )
              }else{
                this.page = parseInt( this.totalList / 10 ) + 1
              }
            }
          })
          .then(err => {
            // //console.log(err);
          });
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.roleSearch();
      this.tableList();
      $('#right').show();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        //console.log(this.currentPage4);
        this.tableList();
      },
      unitId(val,oldVal){
        this.unitId = val ;
        //console.log(this.unitId);
        this.tableList();
      },
      reviewId(val,oldVal){
        this.reviewId = val ;
        //console.log( this.reviewId );
        this.tableList();
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
