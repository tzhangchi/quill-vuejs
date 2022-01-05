<template>
  <div id="app">
    <div class="editor">
      <quill-editor
        ref="quillEditor"
        class="editor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "quill-vuejs";
export default {
  name: "App",
  components: {
    quillEditor,
  },
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // Some Quill options...
      },
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
  computed: {
    editor() {
      return this.$refs.quillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
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
