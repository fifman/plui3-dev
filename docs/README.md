# plui3-dev

> 基础平台plui3前端框架，基于vue框架和elementUI前端组件库，flex样式搭建。

## 构建命令

``` bash
# 安装依赖
npm install

# 在localhost:8080地址开启服务，并提供热加载（修改自动编译并展现在页面）
npm run dev

# 编译成生产环境可用的文件
npm run build

# 进行单元测试
npm run unit

# 进行e2e测试
npm run e2e

# 运行所有测试
npm test
```

详细说明参考文档：[guide](http://vuejs-templates.github.io/webpack/) 及 [docs for vue-loader](https://vue-loader.vuejs.org/zh-cn/).

## 项目结构说明

``` bash
.
├── build/                      # webpack配置
│   └── ...
├── config/
│   ├── index.js                # 项目主配置
│   └── ...
├── src/
│   ├── main.js                 # 应用入口js
│   ├── App.vue                 # 主应用的vue文件
│   ├── components/             # ui组件
│   │   └── ...
│   └── assets/                 # 模块资源（如图片，css文件等）
│       └── ...
├── static/                     # 静态资源（直接复制）
│   └── docs                    # 文档文件夹
│       └── components          # 组件文档文件夹
├── test/
│   └── unit/                   # 单元测试
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e测试
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel配置
├── .postcssrc.js               # postcss配置
├── .eslintrc.js                # eslint配置
├── .editorconfig
├── index.html                  # index.html模板
└── package.json                # 项目依赖列表
```

开发的组件都应放到components文件夹下。每个组件要有一个单独的文件夹。无需共享，只是某个组件单独使用的资源都放在组件文件夹下。如`src/components/hello/logo.png`，这个图片只被`Hello`组件使用，因此放在`hello`文件夹下。组件的共享资源放到`src/assets`下。

`static`文件夹用于放置静态资源。和`src/assets`文件夹的不同在于它在编译时不会被webpack做编译处理，而是直接拷贝到相应位置。基本上只有index.html这样的主页面用到的资源（而且是不需要loader处理的）才会被放到这里面。例如sass等css扩展文件或包含es5、es6语法的js文件因为需要loader处理，不能放到这里面，而是应该放到`src/assets`里。

除了`index.html`和`src`、`test`文件夹内的文件外，其它文件基本上不需要修改。

## 编程规范

### 命名规则和语法样式

1. 使用4个空格的缩进（已在.editorconfig和.eslintrc.js中配置）
2. eslintrc.js中规定了js的语法样式
3. 组件名使用大写驼峰规则（如`PageControl`），组件文件夹名除大小写外和组件名想用，使用小写驼峰规则（如`pageControl`）
4. 在`build/webpack.base.conf.js`中，为方便引用，定义了以下别名：

```javascript
    alias: {
        '@s': resolve('src'),
        '@r': resolve('.'),
        '@c': resolve('src/components')
    }
```

定义了`@r`表示项目根文件夹，`@s`表示`src`文件夹，`@c`表示`src/components`文件夹。因此，在import组件或者资源时，可以使用如下语法：

```javascript
import Hello from @r/components/hello/Hello
import Hello from @c/demo/Demo
```

### 组件规范

1. 每个组件有一个对应的`View`实例。`View`实例提供组件需要的`props`参数和事件响应。首页展示的组件演示都应该在`View`实例中实现。
2. 首页的左侧菜单通过路由功能，点击则右边的路由视图直接跳转到对应的组件`View`实例。详情可见[路由]
3. 本项目没有使用`App.vue`，而是直接在`index.html`上实现。两种方式都是合理的。
4. 组件的子组件请放到组件目录下。
5. 每个组件，它的所有状态（除了css样式）应该都是可通过操作绑定的数据直接改变。以往`plui2`的组件，需要通过方法来改变状态（比如`datagrid`里面的`loadData`，一些高亮方法、隐藏显示方法等）。vue组件因为具备响应特性，应提供通过操作数据直接改变状态的功能。

### css规范

1. 请使用flex布局，对于自适应功能非常强大。
2. 每个组件的样式请放到组件`.vue`文件内，并添加`scoped`关键字。

### 文档规范

1. 统一使用`markdown`编写文档，并放到`static/docs`下。
2. 组件文档统一放到`static/docs/components`下。文档命名要和组件名一致（除了头文字小写）。
3. `markdownViewer`组件可以直接读取文档。只需要在菜单配置数据`items`内的菜单项里添加`route`属性：

```javascript
    {
        mid: 'md-test',
        title: 'markdown-viewer组件',
        route: {
            path: 'markdown-viewer',
            query: {
                file: 'static/docs/components/markdownViewer.md'
            }
        }
    }
```

`route`属性是个对象，包含下列两个参数：

- `path`: 路由路径，映射到视图组件（`markdown-viewer-view`）
- `query`: 查询参数，视图组件中获取此参数的`file`属性来查询markdown文件。`file`属性的值就是文件在项目下的路径，但注意必须在`static`文件夹下才起效。

## 路由

本项目使用了路由，用于方便展示组件。但路由不是组件的必要依赖。需要展示某个组件（例如`Demo`）时，只需要修改`router/index.js`中的组件和路径配置，并在`SideMenu`组件的参数中配置菜单`index`属性为对应的路径，就可以在展示页面通过点击左侧菜单切换组件。

### 添加路由配置

```javascript

import Demo from '@c/demo/View' //导入组件实例
// ... 中间省略
{
    path: '/demo',  // 路径
    name: 'demo',   // 指定命名
    component: Demo // 组件
}
```

### 使用路由

```javascript
... ...
    subs: [{
        mid: 'side-menu',
        title: 'sideMenu组件'
    }, {
... ...
```

SideMenu组件开启了路由功能。点击菜单，就会跳转到`mid`指定的路径。

## 状态管理（`Vuex`）

复杂组件中各组成子组件或者父子之间的内部通讯，更适合使用[Vuex](https://vue-loader.vuejs.org/zh-cn/)做全局状态管理。例如一个存在父、子、孙组件的三层组件，如果使用`props`传值，需要父传子、子传孙，编写十分繁琐。而全局状态可以直接和任意层级的组件直接沟通。

注意`Vuex`的状态对象`store`只能在`Vue`根实例注入，通过根实例注入到各个子组件中。用例可参考`demo`组件。
