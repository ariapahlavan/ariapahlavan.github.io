"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([["src_app_testing_testing_module_ts"],{4859:(N,u,o)=>{o.r(u),o.d(u,{TestingModule:()=>P});var l=o(6362),h=o(4786),d=o(3960),f=o(4139),T=o(328),C=o(14),g=o(7928);class M{constructor(n,t){this.delay=n,this.scheduler=t}call(n,t){return t.subscribe(new a(n,this.delay,this.scheduler))}}class a extends C.L{constructor(n,t,i){super(n),this.delay=t,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(n){const t=n.source,i=t.queue,r=n.scheduler,p=n.destination;for(;i.length>0&&i[0].time-r.now()<=0;)i.shift().notification.observe(p);if(i.length>0){const c=Math.max(0,i[0].time-r.now());this.schedule(n,c)}else this.unsubscribe(),t.active=!1}_schedule(n){this.active=!0,this.destination.add(n.schedule(a.dispatch,this.delay,{source:this,destination:this.destination,scheduler:n}))}scheduleNotification(n){if(!0===this.errored)return;const t=this.scheduler,i=new Z(t.now()+this.delay,n);this.queue.push(i),!1===this.active&&this._schedule(t)}_next(n){this.scheduleNotification(g.P.createNext(n))}_error(n){this.errored=!0,this.queue=[],this.destination.error(n),this.unsubscribe()}_complete(){this.scheduleNotification(g.P.createComplete()),this.unsubscribe()}}class Z{constructor(n,t){this.time=n,this.notification=t}}var e=o(3184);function b(s,n){if(1&s&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&s){const t=n.$implicit;e.xp6(1),e.Oqu(t)}}const m=["Superman","Batman","Spiderman","Wonderwoman","Batwoman"],A=[(0,d.JI)(),d.ux],O=[{path:"",component:(()=>{class s{constructor(){this.animatePage=!0,this._heroes=[]}get heroes(){return this._heroes}ngOnInit(){(0,f.of)(m).pipe(function y(s,n=T.P){const i=function v(s){return s instanceof Date&&!isNaN(+s)}(s)?+s-n.now():Math.abs(s);return r=>r.lift(new M(i,n))}(2e3)).subscribe(t=>this._heroes=t)}updateCriteria(t){t=t?t.trim():"",this._heroes=m.filter(i=>i.toLowerCase().includes(t.toLowerCase()))}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-testing"]],hostVars:1,hostBindings:function(t,i){2&t&&e.d8E("@pageAnimations",i.animatePage)},decls:10,vars:2,consts:[[1,"grid"],[1,"middle"],["type","text","placeholder","Search heroes",3,"input"],["inputRef",""],["class","hero",4,"ngFor","ngForOf"],[1,"hero"]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"br"),e.qZA(),e.TgZ(3,"form",1),e.TgZ(4,"input",2,3),e.NdJ("input",function(){e.CHM(r);const c=e.MAs(5);return i.updateCriteria(c.value)}),e.qZA(),e.qZA(),e.TgZ(6,"div",1),e._UZ(7,"br"),e.qZA(),e.TgZ(8,"div",1),e.YNc(9,b,2,1,"div",4),e.qZA(),e.qZA()}2&t&&(e.xp6(8),e.Q6J("@filterAnimation",i.heroes.length),e.xp6(1),e.Q6J("ngForOf",i.heroes))},directives:[l.sg],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)}.left-half[_ngcontent-%COMP%]{grid-column:1/2}.right-half[_ngcontent-%COMP%]{grid-column:3/4}.middle[_ngcontent-%COMP%]{grid-column:2/3}.hero[_ngcontent-%COMP%]{display:block;width:100px;overflow:hidden}"],data:{animation:[...A]}}),s})()}];let w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[h.Bz.forChild(O)],h.Bz]}),s})(),P=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[l.ez,w]]}),s})()}}]);
//# sourceMappingURL=src_app_testing_testing_module_ts.e5e9244682d207c0.js.map