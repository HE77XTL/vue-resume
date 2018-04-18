<template>
	<div id="editor">
		<nav>
			<ol>
				<li v-for="i in n" v-bind:class="{active: currentTab === i}" 
					v-on:click="currentTab = i" >
					<svg class="icon" >
						<use v-bind:xlink:href="`#${icons[i]}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="content">
			<li v-for="i in n" v-bind:class="{active: currentTab === i}">
				Tab{{i+1}}
			</li>
		</ol>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				currentTab: 0,
				n: [0,1,2,3,4,5],
				icons: ['icon-icon','icon-credentials_icon','icon-qunfengxingquaihao','icon-book','icon-cc-phone-handset','icon-work0']
			}
		}
	}
</script>

<style lang="scss">
	#editor{

		display: flex;

		nav{
			border: 1px solid;
			background: #000;
		}
		nav li.active {
			background: #fff;
			.icon {
				fill: #000;		
			}
		}
	    .icon {
	       width: 20px; 
	       height:20px;
	       margin: 10px;
	       vertical-align: center;
	       overflow: hidden;
	       fill: #fff;
	    }

	    .content {
			border: 1px solid red;
			flex: 1;
			li {
				display: none;
				&.active {
					display:block;
				}
			}
	    }
	}
</style>