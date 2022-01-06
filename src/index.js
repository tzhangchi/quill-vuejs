/*
 * quill-vuejs index.js
 * Author: zhangchi3@outlook.com
 * Github: https://github.com/cg0101/quill-vuejs
 */

import _Quill from "quill";
import quillEditor from "./editor.vue";

const Quill = window.Quill || _Quill;
const install = (Vue, globalOptions) => {
	if (globalOptions) {
		quillEditor.props.globalOptions.default = () => globalOptions;
	}
	Vue.component(quillEditor.name, quillEditor);
};

const VueQuillEditor = { Quill, quillEditor, install };

export default VueQuillEditor;
export { Quill, quillEditor, install };
