<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "quill-vuejs";
export default {
	// data() {

	// },
	setup() {
		return {
			data: {
				content: "", //<h2>I am Example</h2>
				editorOption: {
					// Some Quill options...
				},
			},
		};
	},
	// components: {
	// 	quillEditor,
	// },
	// methods: {
	// 	onEditorBlur(quill) {
	// 		console.log("editor blur!", quill);
	// 	},
	// 	onEditorFocus(quill) {
	// 		console.log("editor focus!", quill);
	// 	},
	// 	onEditorReady(quill) {
	// 		console.log("editor ready!", quill);
	// 	},
	// 	onEditorChange({ quill, html, text }) {
	// 		console.log("editor change!", quill, html, text);
	// 		this.content = html;
	// 	},
	// },
};
</script>

<template>
	<div>
		<quill-editor
			:content="content"
			:options="editorOption"
			@blur="onEditorBlur($event)"
			@focus="onEditorFocus($event)"
			@ready="onEditorReady($event)"
		></quill-editor>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
