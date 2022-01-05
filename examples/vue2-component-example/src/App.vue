<template>
  <div id="app">
   <div class="editor">
      <quillEditor />
   </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'quill-vuejs'
export default {
  name: 'App',
  components: {
    quillEditor
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
.quill-editor,
.content {
    background-color: white;
}

.editor {
    height: 500px;
}

</style>
