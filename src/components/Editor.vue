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
			<li v-bind:class="{active: currentTab === 0}">
				<Profile v-bind:profile="resume.profile" />
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<Education v-bind:education="resume.education"/>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<Work v-bind:workes="resume.workes"/>
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<Contact v-bind:profile="resume.profile"/>
			</li>
		</ol>
	</div>
</template>

<script>
	import Profile from './Profile'
	import Education from './Education'
	import Work from './Work'
	import Contact from './Contact'

	export default {
		props: ['resume'],
		components: {
			Profile,Education,Work,Contact
		},
		data(){
			return {
				currentTab: 0,
				n: [0,1,2,3],
				icons: ['icon-credentials_icon','icon-book','icon-work0','icon-cc-phone-handset']
			}
		},
		methods: {
			addWorks:function(){
				this.resume.workes.push({
					company: '',
					content: '',
					project: ['']
				})
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