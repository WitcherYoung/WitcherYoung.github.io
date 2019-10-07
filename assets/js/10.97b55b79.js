(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{142:function(t,n,a){"use strict";a.r(n);var s=a(0),r=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"执行环境-执行上下文-及作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行环境-执行上下文-及作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行环境( 执行上下文 )及作用域")]),t._v(" "),a("p",[t._v("执行环境( execution context )是JavaScript中最为重要的一个概念")]),t._v(" "),a("p",[t._v("每个 执行上下文 都有一个与之关联的变量对象( variable object ), 执行上下文 中定义的所有变量和函数都保存在这个对象中, 当 执行上下文 中所有代码执行完毕之后, 该环境就被销毁了( 其中的所有变量及函数定义也被销毁 )")]),t._v(" "),a("p",[t._v("我们编写的代码是无法访问这个对象的, 解析器在处理数据时会在后台使用它, 这对我们了解 JavaScript 是如何运行的, 是极其有帮助的")]),t._v(" "),a("p",[t._v("全局执行上下文是最外围的一个执行环境, 根据ECMAScript实现所在的宿主环境的不同, 全局执行上下文也是不一样的")]),t._v(" "),a("p",[t._v("在浏览器中, 全局执行上下文被认为是 window 对象, 也就是说, 所有全局变量和函数都是作为window对象的属性和方法创建的")]),t._v(" "),a("h2",{attrs:{id:"每个函数都有自己的执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个函数都有自己的执行上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 每个函数都有自己的执行上下文")]),t._v(" "),a("p",[t._v("当 执行流 进入一个函数时, 函数的执行上下文就会被推入到 执行上下文栈中, 在函数执行完毕后, 执行上下文栈 将 执行完毕的函数执行上下文弹出, 代码继续向下执行")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考","aria-hidden":"true"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),a("h3",{attrs:{id:"作用域链可以理解为执行上下文栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链可以理解为执行上下文栈","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("strong",[t._v("作用域链可以理解为执行上下文栈?")])]),t._v(" "),a("p",[t._v("首先我们要明白")]),t._v(" "),a("h4",{attrs:{id:"执行上下文栈-是显示-函数的变量对象的进栈顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈-是显示-函数的变量对象的进栈顺序","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行上下文栈 是显示 函数的变量对象的进栈顺序")]),t._v(" "),a("p",[t._v("也就是说 "),a("strong",[t._v("执行上下文栈 是表示 执行流 进入函数执行的顺序")])]),t._v(" "),a("h4",{attrs:{id:"作用域链是-在一个函数执行时-访问一个本作用域内不存在的变量-向上一级作用域寻找的依据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链是-在一个函数执行时-访问一个本作用域内不存在的变量-向上一级作用域寻找的依据","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域链是 在一个函数执行时 访问一个本作用域内不存在的变量 向上一级作用域寻找的依据")]),t._v(" "),a("p",[t._v("作用域链则是在函数定义时就已经决定了, 函数执行位置是不会影响函数作用域及作用域链的")]),t._v(" "),a("p",[t._v("结合下图具体说明")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out1Inner1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inner1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("out1Inner1: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count1"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问到out1函数的参数count1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out1Inner2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inner2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("out1Inner2: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count1"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("inner2"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n         * out1Inner2存在参数count1, 此处访问到out1Inner2函数的参数count1, \n         * 及out1Inner2内部inner2 \n         */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n         * 此处执行out2, out2函数体内依然是无法访问到count1, inner2变量的\n         * 此处会报错\n         */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out1Inner1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out1Inner2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out2Inner1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inner3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("out2Inner1: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count1"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("inner2"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n         * out2Inner1不存在参数count1, inner2, \n         * 其函数作用域链为 out2Inner1 -> out2 -> global 作用域链中都不存\n         * 此处会报错\n         */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out2Inner1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("out2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("以上例子可理解为对象层级, 如下图解")]),t._v(" "),a("p",[t._v("从中可以发现, 一个函数的作用域链只会沿着当前作用域往上寻找 即 out2Inner1 -> out2 -> global")]),t._v(" "),a("p",[t._v("就算是同级作用域 也不能相互访问")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("global\n|\n├─── ou1\n|     |\n|     ├─── out1Inner1\n|     |\n|     └─── out1Inner2\n|\n└─── out2\n      |\n      └─── out2Inner1\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"es5没有块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5没有块级作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" ES5没有块级作用域")])])}),[],!1,null,null,null);n.default=r.exports}}]);