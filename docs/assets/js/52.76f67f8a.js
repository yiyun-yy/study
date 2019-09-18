(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{223:function(t,e,r){"use strict";r.r(e);var n=r(0),a=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"react路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react路由","aria-hidden":"true"}},[t._v("#")]),t._v(" React路由")]),t._v(" "),r("h5",{attrs:{id:"路由模式-2种"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由模式-2种","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由模式(2种)")]),t._v(" "),r("ol",[r("li",[t._v("hash")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("改变地址 -> push     ->  window.location.hash=\n         -> replace  -> window.location.replace(url)\nhashchange\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("browser/history")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("改变地址 -> pushstate  -> window.history.pushState({}, `这是标题`, this.getAttribute('href'));\n        ->  replacestate  -> window.history.replaceState({}, `这是标题`, this.getAttribute('href'));\npopState\n")])])]),r("h4",{attrs:{id:"_1、react-router-dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、react-router-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、react-router-dom")]),t._v(" "),r("ul",[r("li",[t._v("web前段用的")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('Switch\n// 只显示匹配的第一个子路由，然后就不往下匹配了\n\n\n// 当route不给path属性是会匹配路由\n<Route component={()=><h1>未匹配路由</h1>}/>\n\n// redirect不给from属性是也会匹配任意匹配\n<Redirect exact to=\'/index\'></Redirect>\n\n引入\nimport {\n    HashRouter as Router,   // 使用哈希版本\n    Link,   // 相当于vue的router-link\n    Redirect,  // 改变重定向\n    Route   // 相当于vue的router-view\n} from \'react-router-dom\';\n\nrender(){\n        return <Router>\n                    <Fragment>\n                        <Switch>\n                             // 占位标签，如果path与当前路径匹配，渲染component\n                             // exact表示精准匹配，当path与当前路径一模一样才匹配\n                            <Route exact path="/index" component={()=><h1>我是首页</h1>}/>\n                            <Route path="/taobao" component={()=><h1>我是淘宝</h1>}/>\n                        </Switch>\n                        <footer>\n                            // 导航标签 to属性声明要跳转的路径\n                            <Link to="/index">首页</Link>\n                            <Link to="/taobao">淘宝</Link>\n                            <Redirect exact from="/" to="/index"></Redirect>\n                        </footer>\n                    </Fragment>\n            </Router>\n    }\n')])])]),r("h4",{attrs:{id:"_2、react-router-native"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、react-router-native","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、react-router-native")]),t._v(" "),r("ul",[r("li",[t._v("native用的")])]),t._v(" "),r("h4",{attrs:{id:"_3、hashrouter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、hashrouter","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、HashRouter")]),t._v(" "),r("blockquote",[r("p",[t._v("哈希模式(#)  只存在浏览器端，服务器会忽略")])]),t._v(" "),r("blockquote",[r("p",[t._v("瞄点：不会刷新浏览器，跳转页面")])]),t._v(" "),r("h4",{attrs:{id:"_4、browserrouter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、browserrouter","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、BrowserRouter")]),t._v(" "),r("blockquote",[r("p",[t._v("浏览器模式(localhost:3000/tab)  // 假的url，伪地址")])]),t._v(" "),r("h4",{attrs:{id:"_5、后退"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、后退","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、后退")]),t._v(" "),r("ul",[r("li",[t._v("window.history.go(-1)")]),t._v(" "),r("li",[t._v("window.history.back()")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("<button onClick={()=>{\n    window.history.back()\n}}>\n    后退\n</button>\n")])])]),r("h4",{attrs:{id:"_6、路由的封装-一级路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、路由的封装-一级路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、路由的封装(一级路由)")]),t._v(" "),r("p",[t._v("index.js")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {HashRouter as Router} from 'react-router-dom';\n\n// 封装的类似于router-view的文件\nimport RouterView from './react/reactView';\n// 路由配置\nimport config from './react/react.config';\n\nReactDOM.render(<Router>\n    <RouterView routes={config.routes}></RouterView>\n</Router>,document.getElementById('root'));\n")])])]),r("p",[t._v("react/reactView.jsx")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("import React from 'react';\nimport {Switch,Route,Redirect} from 'react-router-dom';\n\nexport default (props)=>{\n    return <Switch>{\n        props.routes.map((item,index)=>{\n            return <Route key={index} path={item.path} render={(props)=>{\n                if(item.children){\n                    // 渲染组件\n                    // ...props 展开路由信息传递下去\n                    // item.children 把子路由配置传递下去\n                    return <item.component {...props} routes={item.children}/>\n                }else{\n                    return <item.component {...props}/>\n                }\n            }}></Route>\n        })\n    }\n    <Redirect exact from='/' to='/tab'></Redirect>\n    </Switch>\n}\n")])])]),r("p",[t._v("react/react.config.js")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 一级路由\nimport Tab from '../components/Tab.jsx';\nimport Detail from '../components/Detail.jsx';\n\n// 二级路由\nimport Hot from '../components/include/Hot.jsx';\nimport Movie from '../components/include/Movie.jsx';\nimport My from '../components/include/My.jsx';\n\nexport default{\n    routes:[\n        {\n            path:'/tab',\n            component:Tab,\n            children:[\n                {\n                    path:'/tab/hot',\n                    component:Hot\n                }, {\n                    path:'/tab/movie',\n                    component:Movie\n                }, {\n                    path:'/tab/my',\n                    component:My\n                }\n            ]\n        },{\n            path:'/detail',\n            component:Detail\n        }\n    ]\n}\n\n\n")])])]),r("p",[t._v("components/Tab.js")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('import React,{Component} from \'react\';\nimport {NavLink} from \'react-router-dom\';\n\nclass Detail extends Component{\n    constructor(props){\n        super(props)\n    }\n\n    render(){\n        return <div>\n            <footer>\n                <NavLink to="/tab/hot">热映</NavLink>\n                <NavLink to="/tab/movie">电影</NavLink>\n                <NavLink to="/tab/my">我的</NavLink>\n            </footer>\n        </div>\n    }\n}\n\nexport default Detail;\n')])])])])}],!1,null,null,null);e.default=a.exports}}]);