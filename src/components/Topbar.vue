<template>
	<div id="topbar">
		<div class="logo">
			VueResumer
		</div>
		<div class="action">
			<button>注册</button>
			<button>登陆</button>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
		</div>
	</div>
</template>

<script></script>

<style lang="scss">
	#topbar{
		border: 1px solid #ccc;	
		display: flex;
		min-height: 100px;
		align-items: center;
		justify-content: space-between;
	}
</style>