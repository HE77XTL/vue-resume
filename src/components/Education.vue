<template>
	<div id="education">
		<h2>教育经历</h2>
		<el-form label-width="80px" :model="education">
		  <el-form-item label="学校">
		    <el-input v-model="education.school"></el-input>
		  </el-form-item>
		  <el-form-item label="学历">
		    <el-input v-model="education.degree"></el-input>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
  	props: ['education']
  }
</script>

<style>
	
</style>