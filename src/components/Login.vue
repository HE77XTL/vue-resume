<template>
	<div  id="login" class="modal-wrap" v-bind:class="{active: userinfor.isActive}">
		<div class="modal-main">
			<form action="">
				<label for="">
					<p>用户名:</p> <input type="text" v-model="userinfor.username">
				</label>
				<label for="">
					<p>邮箱:</p> <input type="text" v-model="userinfor.email">
				</label>
				<label for="">
					<p>密码:</p> <input type="text" v-model="userinfor.passwaord">
				</label>
				<button>注册</button>
				<button>重置</button>
				<i class="el-icon-close" v-on:click="Close()"></i>
			</form>
		</div>
	</div>
</template>

<script>
  export default {
  	props: ['userinfor'],
  	methods: {
  		Close: function(){
  			this.userinfor.isActive=false
  		}
  	}
  }
</script>

<style lang="scss">

	.modal-wrap {
		display: none;
	}
	.modal-wrap.active{
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0,0,0,0.5);
		z-index: 1;

		.modal-main {
			width: 300px;
			height: 300px;
			background: #fff;
			padding: 5px;
			z-index: 2;
		}
	}
</style>