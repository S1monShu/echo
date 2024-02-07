import { createApp } from 'vue/dist/vue.esm-bundler.js';
import ExampleComponent from './ExampleComponent.vue'


const app = createApp({});

app.component('example-component', ExampleComponent);

app.mount("#app");
