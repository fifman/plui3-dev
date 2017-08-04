
# markdown-viewer说明

在页面上加载markdown，作为html显示。同时提供高亮功能。

## 依赖

1. `marked`
2. `highlightjs`

以上依赖都可以通过npm安装。

## 用法

```html
<markdown-viewer :file="file"></markdown-viewer>
```

此处`file`属性需要父对象提供，为指定的markdown文件地址（相对于项目根目录）。文件必须处于'static'文件夹下。
