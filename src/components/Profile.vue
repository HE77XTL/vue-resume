<template>
	<div id="profile">
		<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
		  <el-form-item label="姓名">
		    <el-input v-model="formLabelAlign.name"></el-input>
		  </el-form-item>
		  <el-form-item label="年纪">
		    <el-input v-model="formLabelAlign.name"></el-input>
		  </el-form-item>
		  <el-form-item label="学历">
		    <el-input v-model="formLabelAlign.type"></el-input>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>

<style>
	
</style>