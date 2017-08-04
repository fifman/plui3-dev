
# markdown-viewer说明

在页面上加载markdown，作为html显示。同时提供高亮功能。

## 依赖

1. html-loader
2. markdown-loader
3. highlightjs

以上依赖都可以通过npm安装。

## 用法

配置webpack配置文件，添加如下配置：

```javascript
    module: {
        rules: [
            {
                test: /\.(md|markdown)$/,
                use: [{
                    loader: 'html-loader'
                }, {
                    loader: 'markdown-loader',
                    options: {
                        // pedantic: true,
                        highlight (code) {
                            return require('highlightjs').highlightAuto(code).value
                        }
                    }
                }]
            }
        ]
```

然后就可以使用组件了：

```html
<markdown-viewer :file="file"></markdown-viewer>
```

此处`file`属性需要父对象提供，为指定的markdown文件地址，后缀名必须为`.md`或者`.markdown`。
