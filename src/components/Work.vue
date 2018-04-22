<template>
	<div id="work">
		<h2>工作经历</h2>
		<div calss="experiences" v-for="(work,index) in workes.experiences">
			<el-form label-width="80px" :model="work">
			  <el-form-item label="公司">
			    <el-input v-model="work.company"></el-input>
			  </el-form-item>
			  <el-form-item label="工作内容">
			    <el-input v-model="work.content"></el-input>
			  </el-form-item>
			  <el-form-item label="项目">
			    <el-input v-model="work.project"></el-input>
			  </el-form-item>
			</el-form>
			<i class="el-icon-delete" v-on:click="removeWorks(index)"></i>
			<hr>
		</div>
		<el-button type="primary" v-on:click="addWorks">主要按钮</el-button>
	</div>
</template>

<script>
  export default {
  	props: ['workes'],
  	methods: {
  		addWorks: function(){
  			this.workes.experiences.push({
            company:'',
            content:'',
            project:''
          })
  		},
  		removeWorks: function(index){
  			this.workes.experiences.splice(index,1)
  		}
  	}
  }
</script>

<style>
	
</style>