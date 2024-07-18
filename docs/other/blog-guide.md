## vitepress
```
corepack enable
corepack use pnpm@*
```



## zooming images

https://github.com/francoischalifour/medium-zoom

**Installation**

```shell
npm install medium-zoom
```

**Usage**

.vitepress/theme/index.js

```js
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import './custom.css';

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); 
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
```

点击图片后，还是能看到导航栏，加一个遮挡样式

在 .vitepress/theme/style/var.css 中加入如下代码，并保存

实测没啥用，待更新
```css
/* .vitepress/theme/custom.css */

.medium-zoom-overlay {
    z-index: 30;
}
  
.medium-zoom-image--opened {
    z-index: 31;
}
```