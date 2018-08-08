<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">单位管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Unit_management/list"><button class="btn_add" @click="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <!-- <el-form label-width="80px" class="float-left">
          <el-select v-model="unitNumber" placeholder="选择单位" class="select build" style="width:150px;">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form> -->
      </div>
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :default-sort = "{prop: 'Serial_number', order: 'descending'}"
          style="width: 100%;height:570px;">
          <el-table-column
            prop="Serial_number"
            type="index"
            sortable  
            width="80"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            width="130"
            label="单位名称">
          </el-table-column>
          <el-table-column
            prop="staffNum"
            width="130"
            label="单位人数">
          </el-table-column>
          <el-table-column
            prop="property"
            width="130"
            label="单位性质">
          </el-table-column>
          <el-table-column
            prop="location"
            width="130"
            label="单位地址">
          </el-table-column>
          <el-table-column
            prop="telephone"
            width="100"
            label="部门电话">
          </el-table-column>
          <el-table-column
            prop="firemenName"
            width="100"
            label="消防负责人">
          </el-table-column>
          <el-table-column
            prop="firemenTel"
            width="120"
            label="消防负责人电话">
          </el-table-column>
          <el-table-column
            prop="corporation"
            width="140"
            label="法人代表">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">修改</button>
              <i @click="show3(scope.row)" class="fa fa-th-large font-gray-666"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left">
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">打印</a>
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">导出</a>
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出二维码</a>
          </div>
          <el-pagination style="float: right;background: transparent"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{page}}页</span>
          <el-pagination style="float: right;"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal modal_form fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改单位</h4>
          </div>
          <div class="modal-body">
            <el-form ref="form" :label-position="labelPosition" :inline="true" :model="form">
              <el-form-item label="单位名称">
                <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="单位性质">
                <el-select name="" v-model="form.property" placeholder="请选择结构">
                  <el-option label="事业单位" value="事业单位"></el-option>
                  <el-option label="国家行政机关" value="国家行政机关"></el-option>
                  <el-option label="政府" value="政府"></el-option>
                  <el-option label="国有企业" value="国有企业"></el-option>
                  <el-option label="国有控股企业" value="国有控股企业"></el-option>
                  <el-option label="外资企业" value="外资企业"></el-option>
                  <el-option label="合资企业" value="合资企业"></el-option>
                  <el-option label="私营企业" value="私营企业"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="单位人数">
                <el-input v-model="form.staffNum"></el-input>
              </el-form-item>
              <el-form-item label="单位地址">
                <el-input v-model="form.location"></el-input>
              </el-form-item>
              <el-form-item label="单位图片">
                <div style="position:relative; width: 80px;height: 80px;overflow:hidden;float:left;">
                  <input id="file" name="file" type="file" @change="file()" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>
                  <div style="width:80px;height:80px;background:#222;border:1px solid #222;">
                    <span style="display:block;width:50px;height:6px;background:#999;position:absolute;top:50%;left:50%;margin-left:-25px;margin-top:-3px;"></span>
                    <span style="display:block;width:6px;height:50px;background:#999;position:absolute;top:50%;left:50%;margin-left:-3px;margin-top:-25px;"></span>
                  </div>
                </div>
                <img src="" class="up_img" style="width:80px;height:80px;"/>
                <!-- <span style="width: 200px;height: 80px;text-align:center;line-height:80px;color:#fff;display:block;float:left;">{{ files }}</span> -->
              </el-form-item>
              <el-form-item label="部门电话">
                <el-input v-model="form.telephone"></el-input>
              </el-form-item>
              <el-form-item label="消防负责人">
                <el-input v-model="form.firemenName"></el-input>
              </el-form-item>
              <el-form-item label="消防负责人电话">
                <el-input v-model="form.firemenTel"></el-input>
              </el-form-item>
              <el-form-item label="法人代表">
                <el-input v-model="form.corporation"></el-input>
              </el-form-item>
              <div style="clear: both;"></div>
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-search" class="primary" data-dismiss="modal">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">提示</h4>
            <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body" style="height:217px;">
            <h2 style="text-align:center;font-size: 16px;color:#f13131;margin-top:30px;font-weight:bold;">是否删除</h2>
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">{{ deviceName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-search" class="danger" data-dismiss="modal">删除</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          name:'',
          property:'',
          staffNum:'',
          location:'',
          telephone:'',
          firemenName:'',
          firemenTel:'',          
          corporation:'',
          point:{
            pointX:'',
            pointY:''
          }
        },
        tableData: [],//单位列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        deviceIndexs:''
      }
    },
    methods: {
      file(){
        console.log(this.deviceIndexs)
        console.log($("#file")[0].files[0].name)
        $(".up_img").attr("src", this.getObjectURL($("#file")[0]));
      },
      getObjectURL(node) {
          var imgURL = "";
          try {
              var file = null;
              if (node.files && node.files[0]) {
                  file = node.files[0];
              } else if (node.files && node.files.item(0)) {
                  file = node.files.item(0);
              }
              //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径
              try {
                  //Firefox7.0
                  imgURL = file.getAsDataURL();
                  //alert("//Firefox7.0"+imgRUL);
              } catch (e) {
                  //Firefox8.0以上
                  imgURL = window.URL.createObjectURL(file);
                  //alert("//Firefox8.0以上"+imgRUL);
              }
          } catch (e) {      //这里不知道怎么处理了，如果是遨游的话会报这个异常
              //支持html5的浏览器,比如高版本的firefox、chrome、ie10
              if (node.files && node.files[0]) {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      imgURL = e.target.result;
                  };
                  reader.readAsDataURL(node.files[0]);
              }
          }
          return imgURL;
      },
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row,indexs){//修改单位
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        this.deviceIndexs = indexs;
        // console.log(this.deviceIndexs);
        
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            // console.log(item);
            this.form.name = item.name ;
            this.form.property = item.property ;
            this.form.staffNum = item.staffNum ;
            this.form.location = item.location ;
            this.form.telephone = item.telephone ;
            this.form.firemenName = item.firemenName ;
            this.form.firemenTel = item.firemenTel ;
            this.form.corporation = item.corporation ;
            this.form.point.pointX = item.pointX ;
            this.form.point.pointY = item.pointY ;
            var url = "http://img.nanninglq.51play.com/xf/api/unit_img/"+ item.id+".jpg";
            $(".up_img").attr("src",url);
          }
          
        })
      },
      startRow(){
        var file = "file";
        var that = this;
        $.ajaxFileUpload({
            url: '/api/unit/updateUnit', //用于文件上传的服务器端请求地址
            /* secureuri : false, */ //一般设置为false
            fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
            data : {
              'id':this.deviceIndex,
              'name':this.form.name,
              'property':this.form.property,
              'staffNum':this.form.staffNum,
              'location':this.form.location,
              'telephone':this.form.telephone,
              'firemenName':this.form.firemenName,
              'firemenTel':this.form.firemenTel,
              'corporation':this.form.corporation,
              'pointX':this.form.point.pointX,
              'pointY':this.form.point.pointY
            },
            type: 'POST',
            dataType: "plain",
            success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
            
        
            },
            error: function (e) { //服务器响应失败处理函数
              $.messager.alert('警告', "系统错误", "warning");
            },
            complete: function (e) {//只要完成即执行，最后执行
              // console.log(e) 
              that.tableList()
            }
        });
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('unitNum',row.id);
      },
      tableList(){
        this.$fetch(
          "/api/unit/queryPagerUnitList",{
            currentPager:this.currentPage4,
            pagerSize:10
          }
        )
          .then(response => {
            console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNum',item.id);
                  console.log(item.id)
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
            // console.log(err);
          });
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      $('#right').show();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      deviceIndexs(val,oldVal){
        this.deviceIndexs = val;
      }
    }
  };
</script>
<style lang="scss" scoped>
  h2{
    margin: 0;
    padding: 0;
  }
  main{
    height: 100%;
  }
  @media (min-width: 768px) and (max-width:1600px){
    main {
      padding-left:295px;
      padding-right:400px;
    }
  }
  @media (min-width: 1600px){
    main {
      margin-left:17.58%;
      margin-right: 24%;
    }
  }
  .main_header{
    width:100%;
    height:68px;
    background: #111111;
  }
  .main_title{
    display: flex;
    align-items: center;
  }
  .main_title i{
    margin-left:20px;
    margin-right:10px;
  }
  .main_title h2{
    line-height: 68px;
  }
  .main_header button,.main_nav_two button{
    width:64px;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid transparent;
    background: #111111;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_header a:nth-child(2) button{
    border-left:none;
  }
  .main_header button i{
    margin-right: 3px;
  }
  .main_header button.btn_add i{
    color: #000;
  }
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
    color: #000;
  }
  .main_nav_two{
    margin-top:6px;
    margin-right:20px;
  }
  .main_nav_two button{
    margin-top:0;
  }
  .main_nav_two i{
    margin-right: 3px;
  }
  .main_content_top{
    height:40px;
    background: #222222;
  }
  .main_content_table{
    width:100%;
    background: #111111;
  }
  .main_content_bottom{
    width:100%;
    height:60px;
    padding-top:10px;
    background: #111111;
    .bottom_con{
      margin:0 20px;
      padding-top:10px;
      border-top:1px solid #222222;
    }
  }
  .main_con_nav{
    button{
      background-color: #222222;
    }
    margin-left:30%;
    a:nth-last-child(1) button{
      border-left:none;
    }
    .link-active button{
      color: #191d03;
      background-color: #bad616;
    }
    .link-active i{
      color: #191d03;
      background-color: #bad616;
    }
  }
  .router-link-active button{
    color: #b8b8b8;
    background-color: #000000;
  }
  .router-link-active i{
    color: #b8b8b8;
    background-color: #333333;
  }
 
  .main_nav_show{
    width:64px;
    position: absolute;
    top:159px;
    z-index: 33;
    border:2px solid #bad616;
    ul{
      width:100%;
      li{
        float: none;
        width:100%;
        a{
          button{
            margin:0;
            border-top:2px;
            border-bottom:2px;
            margin-left:-42px;
            border-color:#bad616;
          }
        }
      }
    }
  }
  .btn_active button{
    background-color: #bad616;
    color: #0c0e01;
  }
  .btn_active i{
    color: #0c0e01;
    background-color: transparent;
  }

  .span_show{
    width:40px;
    height:32px;
    border:2px solid #bad616;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #bad616;
    background-color: #111111;
  }
  .span_hide{
    width:40px;
    height:32px;
    border:2px solid #333333;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #5e5e5e;
    background-color: #111111;
  }
  .danger{
    width:132px;
    background-color: #f13131;
    color: #000;
    font-size: 14px;
    height:32px;
    line-height: 32px;
    padding:0;
  }
  .el-tag--red{
    color: red !important;
    padding:0 !important;
    border:none;
  }
  .el-tag--green{
    color: #fff !important;
    padding:0 !important;
    border:none;
    i{
      margin-left:7px;
    }
  }


  .start{
    margin-top:4px;
    margin-left:10px;
  }
</style>
