(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{NzoR:function(t,e,c){"use strict";c.d(e,"a",function(){return n}),c.d(e,"c",function(){return o}),c.d(e,"b",function(){return a});var n=function(t){return t.HEADER="header",t.CARD="card",t.MARKDOWN="markdown",t.TEASER="teaser",t}({}),o=function(t){return t.RELATIVE="RELATIVE",t.ASSETS="ASSETS",t.EXTERNAL="EXTERNAL",t}({}),a=function(t){return t.FULL="full",t.LEFT="left",t.RIGHT="right",t}({})},wNnh:function(t,e,c){"use strict";c.d(e,"a",function(){return a}),c.d(e,"b",function(){return b}),c.d(e,"c",function(){return r}),c.d(e,"d",function(){return O});var n=c("R0Ic");const o="cubic-bezier(0.35, 0, 0.25, 1)",a=(Object(n.n)("openClose",[Object(n.k)("open",Object(n.l)({height:"200px",color:"black",backgroundColor:"yellow"})),Object(n.k)("closed",Object(n.l)({height:"100px",color:"lightgray",backgroundColor:"green"})),Object(n.m)("open <=> closed",[Object(n.e)("0.25s")])]),Object(n.n)("flyInOut",[Object(n.k)("in",Object(n.l)({transform:"translateX(0)",opacity:0})),Object(n.m)("void => *",[Object(n.l)({transform:"translateY(200%)",opacity:0}),Object(n.e)("0.25s ease-in")]),Object(n.m)("* => void",[Object(n.e)("0.25s ease-in",Object(n.l)({transform:"translateY(-100%)",opacity:0}))])]),Object(n.n)("flyInOut",[Object(n.m)(":enter",[Object(n.l)({opacity:0}),Object(n.e)("100ms",Object(n.l)({opacity:1}))]),Object(n.m)(":leave",[Object(n.e)("100ms",Object(n.l)({opacity:0}))])]),Object(n.n)("openClose",[Object(n.k)("true",Object(n.l)({height:"*"})),Object(n.k)("false",Object(n.l)({height:"0px"})),Object(n.m)("false <=> true",Object(n.e)(500))]),Object(n.n)("multiColorChange",[Object(n.k)("active",Object(n.l)({backgroundColor:"orange"})),Object(n.k)("inactive",Object(n.l)({backgroundColor:"blue"})),Object(n.m)("inactive => active",[Object(n.e)("2s",Object(n.g)([Object(n.l)({backgroundColor:"blue",offset:0}),Object(n.l)({backgroundColor:"red",offset:.8}),Object(n.l)({backgroundColor:"orange",offset:1})]))]),Object(n.m)("active => inactive",[Object(n.e)("2s",Object(n.g)([Object(n.l)({backgroundColor:"orange",offset:0}),Object(n.l)({backgroundColor:"red",offset:.2}),Object(n.l)({backgroundColor:"blue",offset:1})]))])]),Object(n.n)("pulse",[Object(n.k)("open",Object(n.l)({height:"200px",opacity:1,backgroundColor:"yellow"})),Object(n.k)("close",Object(n.l)({height:"100px",opacity:.5,backgroundColor:"green"})),Object(n.m)("* => *",[Object(n.e)("1s",Object(n.g)([Object(n.l)({opacity:.1,offset:.1}),Object(n.l)({opacity:.6,offset:.2}),Object(n.l)({opacity:1,offset:.5}),Object(n.l)({opacity:.2,offset:.7})]))])]),Object(n.n)("shrinkOut",[Object(n.k)("in",Object(n.l)({height:"*"})),Object(n.m)("* => void",[Object(n.l)({height:"*"}),Object(n.e)(1e3,Object(n.l)({height:0}))])]),{startY:-100,endY:0,startOpacity:0,endOpacity:1,staggerTime:-100,animationTime:750}),b=(t=a)=>Object(n.n)("pageAnimations",[Object(n.m)("* <=> *",[Object(n.h)(":enter",[Object(n.l)({opacity:t.startOpacity,transform:`translateY(${t.startY}px)`}),Object(n.j)(t.staggerTime,[Object(n.e)(`${t.animationTime}ms ${o}`,Object(n.l)({opacity:t.endOpacity,transform:`translateY(${t.endY}px)`}))])],{optional:!0})])]),r=({elements:t}={elements:".hero, form"})=>Object(n.n)("pageAnimations",[Object(n.m)(":enter",[Object(n.h)(t,[Object(n.l)({opacity:0,transform:"translateY(-100px)"}),Object(n.j)(-100,[Object(n.e)(`600ms ${o}`,Object(n.l)({opacity:1,transform:"translateY(0)"}))])],{optional:!0})])]),O=(Object(n.n)("pageAnimations",[Object(n.m)(":enter",[Object(n.h)(".hero, form",[Object(n.l)({opacity:0,transform:"translateY(-5000px)"}),Object(n.j)(-30,[Object(n.e)(`750ms ${o}`,Object(n.l)({opacity:.25,transform:"translateY(10px)"})),Object(n.e)(`100ms ${o}`,Object(n.l)({opacity:1,transform:"translateY(0)"}))])])])]),Object(n.n)("filterAnimation",[Object(n.m)(":enter, * => 0, * => -1",[]),Object(n.m)(":increment",[Object(n.h)(":enter",[Object(n.l)({opacity:0,width:"0px"}),Object(n.j)(50,[Object(n.e)("300ms ease-out",Object(n.l)({opacity:1,width:"*"}))])],{optional:!0})]),Object(n.m)(":decrement",[Object(n.h)(":leave",[Object(n.j)(50,[Object(n.e)("300ms ease-out",Object(n.l)({opacity:0,width:"0px"}))])])])]));Object(n.n)("filterAnimation",[Object(n.m)(":enter, * => 0, * => -1",[]),Object(n.m)(":increment",[Object(n.h)(":enter",[Object(n.l)({opacity:0,transform:"translateX(-1000px)"}),Object(n.j)(50,[Object(n.e)("300ms ease-out",Object(n.l)({opacity:1,transform:"translateX(0)"}))])],{optional:!0})]),Object(n.m)(":decrement",[Object(n.h)(":leave",[Object(n.j)(50,[Object(n.e)("300ms ease-out",Object(n.l)({opacity:0,transform:"translateX(1000px)"}))])])])]),Object(n.n)("flyInOut",[Object(n.k)("in",Object(n.l)({width:120,transform:"translateX(0)",opacity:1})),Object(n.m)("void => *",[Object(n.l)({width:10,transform:"translateX(50px)",opacity:0}),Object(n.f)([Object(n.e)("0.3s 0.1s ease",Object(n.l)({transform:"translateX(0)",width:120})),Object(n.e)("0.3s ease",Object(n.l)({opacity:1}))])]),Object(n.m)("* => void",[Object(n.f)([Object(n.e)("0.3s ease",Object(n.l)({transform:"translateX(50px)",width:10})),Object(n.e)("0.3s 0.2s ease",Object(n.l)({opacity:0}))])])])}}]);