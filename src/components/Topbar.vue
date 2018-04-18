<template>
	<div id="topbar">
		<div class="logo">
			VueResumer
		</div>
		<div class="action">
			<el-button type="primary">注册</el-button>
			<el-button >登陆</el-button>
		</div>
	</div>
</template>

<script></script>

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