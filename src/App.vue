<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor v-bind:resume="resume" calss="editor" />
      <Preview v-bind:resume="resume" calss="preview"/>
    </main>
  </div>
</template>

<script>

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import 'normalize.css'
import './assets/reset.scss'

export default {
  name: 'App',
  components: {
    Topbar, Editor, Preview
  },
  data(){
    return {
      resume: {
        profile: {
          name: '',
          age: '',
          city: ''
        },
        education: {
          school: '',
          degree: ''
        },
        workes: {
          experiences:[{
            company:'',
            content:'',
            project:''
          }]
        }
      }
    }
  },
  created: function(){
    console.log(this.resume.profile)
    // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
    window.onbeforeunload = ()=>{
      let dataString = JSON.stringify(this.resume) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
      window.localStorage.setItem('myData', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
    }

    let oldDataString = window.localStorage.getItem('myData')
    let oldData = JSON.parse(oldDataString)
    this.resume = oldData || []
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar {
  z-index: 1;
  padding: 16px;
  font-size: 20px;
  box-shadow: 0 0 3px hsla(0,0,0,.5);
}

main {
  flex: 1;
  display: flex;
  background: #ddd;

  #editor{
    width: 600px;
    margin: 16px 8px 16px 16px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0,0,0,.5)

  }
  #preview {
    flex: 1;
    background: #fff;
    box-shadow: 0 0 3px hsla(0,0,0,.5);
    margin: 16px 16px 16px 8px;
  }
}

</style>
