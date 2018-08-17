<template>
  <div class="list_content">
    <div id="manage-center" class="list_main position-fixed-left z-index-20">
      <img src="../../assets/images/floor.png">
    </div>
    <div id="add-new" class="float-right add-new">
      <aside>
        <div class="main_header clearFix">
          <div class="main_title float-left clearFix">
            <i class="fa fa-plus"></i>
            <h2>新增建筑</h2>
          </div>
          <div class="main_nav float-right">
            <router-link to="/Building_management/all"><span class="btn-back" @click="btn_back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          </div>
        </div>
        <section class="border-top-solid-333 margin-left15 margin-right15"></section>
        <div class="main_content">
          <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
          <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
            <el-form-item label="建筑名称" class="not-null">
              <span class="hint-error">建筑名称有误或重复</span>
              <el-input v-model="form.BuildName" class="col-sm-6"></el-input>
            </el-form-item>
            <el-form-item label="所属单位" class="not-null">
              <el-select v-model="form.unitId" placeholder="选择单位" class="select col-sm-6">
                <!-- <el-option label="全部单位" value=""></el-option> -->
                <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建筑结构" class="not-null col-sm-6">
              <el-select name="" v-model="form.structure" placeholder="请选择结构">
                <el-option label="砖混" value="砖混"></el-option>
                <el-option label="钢结构" value="钢结构"></el-option>
                <el-option label="玻璃" value="玻璃"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建筑性质" class="not-null col-sm-6">
              <el-select v-model="form.property" placeholder="建筑性质">
                <el-option label="居住" value="居住"></el-option>
                <el-option label="公共" value="公共"></el-option>
                <el-option label="工业" value="工业"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建成年份" class="not-null col-sm-6">
              <div class="block">
                <el-date-picker
                  v-model="form.timeYear"
                  type="date"
                  placeholder="选择年份"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="占地面积 (㎡)" class="not-null col-sm-6">
              <el-input v-model="form.area"></el-input>
            </el-form-item>
            <el-form-item label="高度 (cm)" class="not-null col-sm-6">
              <el-input v-model="form.height"></el-input>
            </el-form-item>
            <el-form-item label="总楼层" class="not-null col-sm-6">
              <el-input v-model="form.floor"></el-input>
            </el-form-item>
            <el-form-item label="建筑地址" class="not-null">
              <el-input v-model="form.address" class="col-sm-12"></el-input>
            </el-form-item>
            <el-form-item label="经纬度" class="not-null">
              <el-input v-model="form.point.pointX" class="col-sm-6"></el-input>
              <el-input v-model="form.point.pointY" class="col-sm-6"></el-input>
            </el-form-item>          
            <el-form-item label="消防负责人" class="not-null col-sm-6">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="消防负责人电话" class="not-null col-sm-6">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>          
          </el-form>        
        </div>
        <div class="main_footer">
          <a class="btn-ok" @click="btn"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
          <a class="btn-back" @click="back">返回</a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          value5:'2018',
          labelPosition: 'top',
          form: {
            unitId:'',
            UnitName:'',
            BuildName:'',
            height:'',
            floor:'',
            structure:'',
            property:'',          
            timeYear:'',
            name:'',
            phone:'',
            point:{
              pointX:'',
              pointY:''
            }
          },
          unit:null,//选择单位
          optionList:[],//全部单位列表
        }
      },
      methods:{
        btn_back(){
          $('#right').show();
          $('.manage-center').show();
          $('#list').hide();
        },
        btn(){
          this.optionList.forEach((item,index)=>{
            if(item.id == this.form.unitId){
              console.log(item.name);
              this.form.UnitName = item.name;
            }
          })
          this.$fetch("/api/building/addBuilding",{
            'name':this.form.BuildName,
            'unitId':this.form.unitId,
            'unitName':this.form.UnitName,
            'location':this.form.address,
            'area':this.form.area,
            'heightOfBuilding':this.form.height,
            'floors':this.form.floor,
            'structure':this.form.structure,
            'buildYear':this.form.timeYear,
            'property':this.form.property,
            'linkname':this.form.name,
            'phone':this.form.phone,
            'pointX':this.form.point.pointX,
            'pointY':this.form.point.pointY,
            headers: {'Content-Type': 'application/json'}
          },
        
          ).then(response=>{
            if(response){
              console.log('新增建筑成功...'+ JSON.stringify(response));
            }
          })
          this.$router.push({path:'/Building_management/all'});
          this.btn_back();
        },
        back(){
          this.$router.push({path:'/Building_management/all'});
          this.btn_back();
        },
        unitSearch(){
          this.$fetch(
            "/api/unit/queryUnit"
          )
            .then(response => {
              if (response) {
                console.log(response);
                this.optionList = response.data.unitList;
                console.log(this.optionList);
                $(' .el-select-dropdown__item').mouseover(function(){
                  $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
                });
              }
            })
            .then(err => {
              // console.log(err);
            });
        }
      },
      mounted(){
        $('.el-scrollbar').css({
            'background':'#000'
        });
        $('.el-select-dropdown').css('border-color','#333');
        $('.el-select-dropdown__item').css('color','#999');
        $(' .el-select-dropdown__item').mouseover(function(){
          $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
        });

        this.unitSearch();
      }
    }
</script>

<style lang="scss" scoped>
</style>
