<template>
    <section>
        <!-- 标题 -->
        <div class="main_header clearFix">
          <div class="main_title float-left clearFix">
            <i class="icon iconfont icon-quanxianfenpei-xian-"></i>
            <h2>权限分配</h2>
          </div>
        </div>
        <div class="main_all_content">
            <div class="main_content_table">
                <div class="table-scroll">
                    <div class="tree-box">
                        <div class="zTreeDemoBackground left">
                            <ul id="treeDemo" class="ztree"></ul>
                        </div>
                    </div>                    
                </div>
                <div class="main_content_bottom col-xs-12 bg-gray-111">
                    <button class="btn-ok"  @click="success()">保存</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    data(){
        return{
            roleId:'',
            checkedIds:'',
            setting:{
                view: {
                    selectedMulti:true, //设置是否能够同时选中多个节点
                    showIcon:true,  //设置是否显示节点图标
                    showLine:true,  //设置是否显示节点与节点之间的连线
                    showTitle:true,  //设置是否显示节点的title提示信息
                },
                data:{
                    simpleData:{
                        enable: true,
                        idKey: "id",
                        pIdKey: "pId"
                    }
                },
                check:{
                    enable:true   //设置是否显示checkbox复选框
                },
                callback: {
                    onCheck: this.zTreeOnCheck
                }
            },
            areaListData:[]
        }
    },
    methods:{
        getList(){
            
        this.roleId = this.$route.params.id;
        //console.log(this.roleId)
          this.$fetch("/api/roleSource/search",{roleId:this.roleId})
            .then(res=>{
                res.data.listTree.forEach(element => {
                    // //console.log(eval("("+element+")"));
                    this.areaListData.push(eval("("+element+")"));
                    // //console.log(this.areaListData);
                    $.fn.zTree.init($("#treeDemo"), this.setting, this.areaListData);
                });
                
            })
            .catch(err=>{
                // this.$toast('查询区域异常');
            });
        },
        zTreeOnCheck(event, treeId, treeNode) {
            //console.log(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);
            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
            checkCount = zTree.getCheckedNodes(true).length,//选中
            nocheckCount = zTree.getCheckedNodes(false).length,//未选中
            changeCount = zTree.getChangeCheckedNodes().length;//获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
            var checkedNames = [],checkedIds = [];
            for (var i = 0; i <= zTree.getCheckedNodes(true).length - 1; i++) {
                checkedIds.push(zTree.getCheckedNodes(true)[i].id);
                checkedNames.push(zTree.getCheckedNodes(true)[i].name);
            };
            //console.log(checkedIds);
            var checkedIds = checkedIds.toString();
            this.checkedIds = checkedIds ;
            //console.log(checkedNames);
        },
        success(){
            this.$fetch("/api/roleSource/updateRoleSource",{roleId:this.roleId,ids:this.checkedIds})
                .then(res=>{
                    //console.log(res);
                    this.$router.push({path:'/Authority_allocation/all'});
                })
                .catch(err=>{

                });
        }
    },
    mounted () {
        this.getList();
    }
}
</script>

