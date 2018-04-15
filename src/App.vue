<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor calss="editor" />
      <Preview calss="preview"/>
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

main {
  flex: 1;
  display: flex;
  #editor {
    width: 300px;
  }
  #preview {
    flex: 1;
  }
}

</style>
