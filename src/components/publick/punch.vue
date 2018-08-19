<template>
	<div id="punch" class="row">
		<el-button type="text" @click="open7">点击打开 Message Box</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			open7() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		}
	}
</script>