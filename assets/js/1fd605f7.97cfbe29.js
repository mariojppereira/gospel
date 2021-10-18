"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[803],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7033:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"FAQ"},s="Frequently asked questions",u={type:"mdx",permalink:"/gospel/faq",source:"@site/src/pages/faq.md"},c=[{value:"Can I use my OCaml functions in specifications?",id:"can-i-use-my-ocaml-functions-in-specifications",children:[],level:2},{value:"Are formulae the same as OCaml Boolean expressions?",id:"are-formulae-the-same-as-ocaml-boolean-expressions",children:[],level:2},{value:"Are formulae typechecked by the OCaml compiler?",id:"are-formulae-typechecked-by-the-ocaml-compiler",children:[],level:2},{value:"Are formulae tested at runtime?",id:"are-formulae-tested-at-runtime",children:[],level:2},{value:"Are formulae verified by Gospel?",id:"are-formulae-verified-by-gospel",children:[],level:2},{value:"What if I write <code>1 / 0</code> in a formula?",id:"what-if-i-write-1--0-in-a-formula",children:[],level:2},{value:"What are ghost arguments?",id:"what-are-ghost-arguments",children:[],level:2},{value:"What are ghost types for?",id:"what-are-ghost-types-for",children:[],level:2},{value:"Why would I need ghost values?",id:"why-would-i-need-ghost-values",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.kt)("p",null,"Your question is not answered here? Feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocaml-gospel/gospel/discussions/new"},"open a\ndiscussion")," so we can\nanswer it and add it here."),(0,r.kt)("h2",{id:"can-i-use-my-ocaml-functions-in-specifications"},"Can I use my OCaml functions in specifications?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sometimes.")," Logic and programs are two separated worlds, and using programs\nin our logic can introduce inconsistencies, so you cannot use OCaml values in\nyour specifications. If you need to write functions as shortcuts in your\nspecifications, you may want to add ",(0,r.kt)("a",{parentName:"p",href:"language/logical"},"logical functions or\npredicates")," instead."),(0,r.kt)("p",null,"However, some OCaml functions are also safe to use in the specifications. We\ncall them ",(0,r.kt)("em",{parentName:"p"},"pure"),". You can read the ",(0,r.kt)("a",{parentName:"p",href:"language/function-contracts#pure-functions"},"dedicated documentation\nsection")," about pure values to learn\nmore about them."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"are-formulae-the-same-as-ocaml-boolean-expressions"},"Are formulae the same as OCaml Boolean expressions?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No.")," We chose a syntax close to OCaml expressions because we believe it makes\nit easy for OCaml developers to use Gospel, but Gospel formulae are not OCaml\nexpressions, and some of them are not even executable or decidable."),(0,r.kt)("p",null,"The following specification is not executable, as you cannot test a property on\nevery possible array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"val total_weight : weight:('a array -> int) -> ('a array) list -> int\n(*@ y = total_weight ~weight l\n    requires forall a. weight a >= 0\n    ensures y = List.fold_left (fun acc a -> acc + weight a) l *)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"are-formulae-typechecked-by-the-ocaml-compiler"},"Are formulae typechecked by the OCaml compiler?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No.")," The OCaml compiler does not know about Gospel specifications at all, so\nit simply ignores them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But...")," we, however, provide a typechecker for Gospel annotations. It reads\nyour interface file and performs typechecking and some sanity checks to verify\nthat your specification is well-formed. You can invoke the Gospel typechecker by\ninvoking ",(0,r.kt)("inlineCode",{parentName:"p"},"gospel check")," on your interface file."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"are-formulae-tested-at-runtime"},"Are formulae tested at runtime?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No.")," Gospel does not provide runtime assertion checking for your code, it can\nonly check if your specifications are well-formed. If you are interested in\nruntime assertion checking for your code, you might want to use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocaml-gospel/ortac"},"Ortac")," on top of Gospel."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"are-formulae-verified-by-gospel"},"Are formulae verified by Gospel?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No.")," Gospel does not feature deductive verification, it can only check if\nyour specifications are well-formed. External tools will let you\nverify Gospel specifications though:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ocaml-gospel/why3gospel"},"Why3gospel")," if your\nimplementation is written using ",(0,r.kt)("a",{parentName:"li",href:"http://why3.lri.fr"},"Why3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ocaml-gospel/cameleer"},"Cameleer")," if your implementation\nis written using OCaml.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-if-i-write-1--0-in-a-formula"},"What if I write ",(0,r.kt)("inlineCode",{parentName:"h2"},"1 / 0")," in a formula?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can.")," Indeed, the logic of Gospel is ",(0,r.kt)("em",{parentName:"p"},"total"),", which means that\n",(0,r.kt)("inlineCode",{parentName:"p"},"1 / 0")," is a legal term of type ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),". Yet, we do not know its\nvalue, nor if its value is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"2 / 0"),". Similarly, we can\naccess an array out of its bounds but the result is unspecified."),(0,r.kt)("p",null,"Using such unspecified terms in specifications is considered bad\npractice, and is even likely to be errors in your specifications.\nNote that when using runtime assertion checking tools such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocaml-gospel/ortac"},"Ortac"),", the evaluation of\nterms such as ",(0,r.kt)("inlineCode",{parentName:"p"},"1 / 0")," will be signaled as a runtime error."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-are-ghost-arguments"},"What are ghost arguments?"),(0,r.kt)("p",null,"Ghost arguments are function arguments that do not exist in the OCaml interface,\nbut that you can add to simplify your specification. To understand how they can\nbe useful and how to use them, you may want to read the ",(0,r.kt)("a",{parentName:"p",href:"walkthroughs/fibonacci"},"Fibonacci\nwalk-through"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-are-ghost-types-for"},"What are ghost types for?"),(0,r.kt)("p",null,"Ghost types do not exist in the original OCaml interface, but you can add some\nto simplify your specification by referring to values that have no code\ncounterpart or are not exposed. You can read the ",(0,r.kt)("a",{parentName:"p",href:"walkthroughs/union-find"},"Union-find\nexample")," to find an example specification using this\nfeature."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"why-would-i-need-ghost-values"},"Why would I need ghost values?"),(0,r.kt)("p",null,"Why would you need ghost values, since no code can call them, right? Ghost\nvalues will indeed never be used by programs, as they don't even exist in the\ncode."),(0,r.kt)("p",null,"However, consider an interface containing a ghost type, taken as (ghost)\nargument by some of your OCaml functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*@ type t *)\n\nval f : int -> int\n(*@ y = f [t : t] x\n    pure\n    ... *)\n")),(0,r.kt)("p",null,"Now, every specification that refers to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," needs to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," argument to\nthat function. You can propagate that requirement again, but you may also need\nto actually instantiate such a value and pass it directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml"},"val g : int -> int\n(*@ y = g x\n    requires let t = make () in\n             f t x = y *)\n")),(0,r.kt)("p",null,"Of course, that ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," function does not exist either, so you also need to\ndeclare it as a ghost value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*@ val make : unit -> t *)\n")))}m.isMDXComponent=!0}}]);