(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1XP4":function(t,n,c){"use strict";c.r(n),c.d(n,"PostsModule",function(){return P});var e=c("ofXK"),r=c("tyNb"),a=c("AytR"),o=c("fXoL"),s=c("tk/3"),i=c("Wp6s"),l=c("bTqV");function p(t,n){if(1&t&&o.Mb(0,"img",4),2&t){const t=o.ac(2);o.fc("src",t.urlOf(t.content.thumbnails[0]),o.kc)("alt",t.textOf(t.content.thumbnails[0]))}}function b(t,n){if(1&t&&(o.Rb(0,"mat-card-subtitle"),o.rc(1),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.tc(" ",t.content.subTitle," ")}}function f(t,n){if(1&t&&(o.Rb(0,"mat-card-header"),o.pc(1,p,1,2,"img",3),o.Rb(2,"mat-card-title"),o.rc(3),o.Qb(),o.pc(4,b,2,1,"mat-card-subtitle",1),o.Qb()),2&t){const t=o.ac();o.Bb(1),o.fc("ngIf",t.hasLink(t.content.thumbnails)),o.Bb(2),o.sc(t.content.title),o.Bb(1),o.fc("ngIf",t.content.subTitle)}}function d(t,n){if(1&t&&o.Mb(0,"img",5),2&t){const t=o.ac();o.fc("src",t.urlOf(t.content.images[0]),o.kc)("alt",t.textOf(t.content.images[0]))}}function u(t,n){if(1&t&&(o.Rb(0,"mat-card-content"),o.Rb(1,"p"),o.rc(2),o.Qb(),o.Qb()),2&t){const t=o.ac();o.Bb(2),o.tc(" ",t.content.description," ")}}function m(t,n){if(1&t){const t=o.Sb();o.Rb(0,"button",7),o.Yb("click",function(){o.jc(t);const c=n.$implicit,e=o.ac(2);return e.clickHandler(e.urlOf(c))}),o.rc(1),o.Qb()}if(2&t){const t=n.$implicit,c=o.ac(2);o.Bb(1),o.tc(" ",c.textOf(t)," ")}}function g(t,n){if(1&t&&(o.Rb(0,"mat-card-actions"),o.pc(1,m,2,1,"button",6),o.Qb()),2&t){const t=o.ac();o.Bb(1),o.fc("ngForOf",t.content.actions)}}let h=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}hasLink(t){return t&&t.length>0}urlOf(t){return t.url}textOf(t){return t.text}clickHandler(t){return this.router.navigateByUrl(t)}}return t.\u0275fac=function(n){return new(n||t)(o.Lb(r.c))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-card"]],inputs:{content:"content"},decls:5,vars:4,consts:[[1,"mat-typography","example-card"],[4,"ngIf"],["mat-card-image","",3,"src","alt",4,"ngIf"],["mat-card-avatar","",3,"src","alt",4,"ngIf"],["mat-card-avatar","",3,"src","alt"],["mat-card-image","",3,"src","alt"],["mat-button","","color","primary",3,"click",4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(o.Rb(0,"mat-card",0),o.pc(1,f,5,3,"mat-card-header",1),o.pc(2,d,1,2,"img",2),o.pc(3,u,3,1,"mat-card-content",1),o.pc(4,g,2,1,"mat-card-actions",1),o.Qb()),2&t&&(o.Bb(1),o.fc("ngIf",n.content.title),o.Bb(1),o.fc("ngIf",n.hasLink(n.content.images)),o.Bb(1),o.fc("ngIf",n.content.description),o.Bb(1),o.fc("ngIf",n.hasLink(n.content.actions)))},directives:[i.a,e.j,i.e,i.i,i.c,i.h,i.f,i.d,i.b,e.i,l.a],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin:10px}"]}),t})();function O(t,n){if(1&t&&(o.Pb(0),o.Rb(1,"div",3),o.Mb(2,"app-card",4),o.Qb(),o.Ob()),2&t){const t=n.$implicit;o.Bb(2),o.fc("content",t)}}let k=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["app-card-grid"]],inputs:{cardsContent:"cardsContent"},decls:3,vars:1,consts:[[1,"listing-wrapper"],[1,"cards-grid"],[4,"ngFor","ngForOf"],[1,"self-center"],[3,"content"]],template:function(t,n){1&t&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.pc(2,O,3,1,"ng-container",2),o.Qb(),o.Qb()),2&t&&(o.Bb(2),o.fc("ngForOf",n.cardsContent))},directives:[e.i,h],styles:[".cards-grid[_ngcontent-%COMP%]{display:grid}.card[_ngcontent-%COMP%]{grid-column:span 1}"]}),t})(),y=(()=>{class t{constructor(t,n){this.http=t,this.router=n,this.cms$=this.http.get(this.contentUrl),this.experienceCms$=this.http.get(`${a.a.assetsPath}${n.snapshot.data.path}`)}get contentUrl(){return`${a.a.assetsPath}${a.a.contentPath}`}ngOnInit(){}trackPosts(t,n){return n.id}onload(t){}onerror(t){console.log("on error:",t)}hasLink(t){return t&&t.length>0}urlOf(t){return t.url}textOf(t){return t.text}clickHandler(t){console.log("clicked:",t)}}return t.\u0275fac=function(n){return new(n||t)(o.Lb(s.a),o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-posts"]],decls:2,vars:3,consts:[[3,"cardsContent"]],template:function(t,n){1&t&&(o.Mb(0,"app-card-grid",0),o.bc(1,"async")),2&t&&o.fc("cardsContent",o.cc(1,1,n.experienceCms$))},directives:[k],pipes:[e.b],styles:[""]}),t})();const v=[{path:"",redirectTo:"jobs"},{path:"jobs",component:y,data:{path:a.a.experiencePath}},{path:"projects",component:y,data:{path:a.a.projectsPath}},{path:"articles",component:y,data:{path:a.a.articlesPath}}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[r.e.forChild(v)],r.e]}),t})();var B=c("lR5k"),I=c("PCNd");let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({providers:[],imports:[[e.c,s.b,x,B.b.forChild(),I.a]]}),t})()}}]);