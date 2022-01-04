import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'
import VueQuillEditor from './../../../dist/quill-vuejs'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

App.use(VueQuillEditor, /* { default global options } */);

createApp(App).mount('#app')
