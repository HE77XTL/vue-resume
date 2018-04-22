<template>
	<div id="profile">
		<el-form label-width="80px" :model="profile">
		  <el-form-item label="姓名">
		    <el-input v-model="profile.name"></el-input>
		  </el-form-item>
		  <el-form-item label="年纪">
		    <el-input v-model="profile.age"></el-input>
		  </el-form-item>
		  <el-form-item label="学历">
		    <el-input v-model="profile.city"></el-input>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
  	props: ['profile']
  }
</script>

<style>
	
</style>