yo_test
=====

- 创建者: dawncc
- 创建者Email: dawn.cc022@gmail.com
- 项目地址: https://github.com/dawncc/yo_clam


## 目标

- 使用grunt自动构建项目目录
- 合并、压缩js和css文件
- 合并http请求
- git提交

## 项目目录结构约定

src目录和build目录平行，src目录中直接承载代码单元

```
./
├── build/ - 构建完成后发布目录
├── doc/ - 生成的文档目录
├── Gruntfile.js
└── src/ - 项目源码目录
    ├── ~page1/ - 页面1
    │   ├── img/
    │   ├── index.css
    │   ├── index.html
    │   ├── demo.html
    │   └── index.js
    ├── mod1/ - 模块1
    │   ├── img/
    │   ├── index.css
    │   ├── index.html
    │   └── index.js
    ├── mod2/ - 模块2
    │   ├── img/
    │   ├── index.css
    │   ├── index.html
    │   └── index.js
    └── widget1/ - 一个Kissy组件
        ├── 1.0
        │   ├── build/
        │   ├── demo/
        │   │   └── index.html
        │   ├── guide/
        │   │   └── index.md
        │   ├── index.js
        │   ├── meta/
        │   │   ├── alias.js
        │   │   └── modules.js
        │   ├── plugin/
        │   └── spec/
        └── Gruntfile.js
```

### 工具安装

``` javascript
 $ npm install -g yo grunt-cli
 $ npm install -g yo generator-kissy-gallery
 $ npm install -g yo generator-clam
```

### 初始化项目

``` javascript
$yo clam
```

### 修改build路径
打开config.js文件，修改packages下得path属性值为服务器目录

```javascript
KISSY.config({
            packages: [
                {
                    name: 'kissy_demo',
                    // 修改 abc.json 中的 version 字段来生成版本号
                    path: 'http://localhost:80/demo/kissy_demo/@@version',
                    ignorePackageNameInUri: true
                }
            ]
        });
```

### 生成page、mod、widget

```javascript
$cd src/pages
$yo clam:page
$cd src/mods
$yo clam:mod
$cd src widgets
$yo clam:widget
```

### 构建项目
切换到根目录

```javascript
$grunt
```