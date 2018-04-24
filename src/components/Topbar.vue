<template>
	<div id="topbar">
		<div class="logo">
			VueResumer
		</div>
		<div class="action">
			<el-button type="primary" v-on:click="Login()">注册</el-button>
			<el-button >登陆</el-button>
		</div>
		<Login v-bind:userinfor="userinfor"/>
	</div>
</template>

<script>
	import Login from './Login'
	export default {
	  	data(){
	  		return {
		  		userinfor: {
		  			isActive: false,
		  			username: '1',
		  			email: '2',
		  			passwaord: '3'
	  			}
	  		}
	  	},		
		components: {Login},
		methods:{
			Login:function(){
				this.userinfor.isActive=true
			}
		}
	}
</script>

<style lang="scss">
	#topbar{
		display: flex;
		min-height: 100px;
		align-items: center;
		justify-content: space-between;
		padding: 16px;
		font-size: 20px;
		box-shadow: 0 0 3px hsla(0,0,0,.5)
	}
</style>