(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QIUk:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return y});var n=a("ofXK"),c=a("7zfz"),r=a("fXoL");function s(e,t){1&e&&r.Ob(0)}function l(e,t){if(1&e&&(r.Sb(0,"div",8),r.ec(1,1),r.Ac(2,s,1,0,"ng-container",6),r.Rb()),2&e){const e=r.bc();r.Bb(2),r.gc("ngTemplateOutlet",e.headerTemplate)}}function i(e,t){1&e&&r.Ob(0)}function o(e,t){if(1&e&&(r.Sb(0,"div",9),r.Cc(1),r.Ac(2,i,1,0,"ng-container",6),r.Rb()),2&e){const e=r.bc();r.Bb(1),r.Ec(" ",e.header," "),r.Bb(1),r.gc("ngTemplateOutlet",e.titleTemplate)}}function p(e,t){1&e&&r.Ob(0)}function u(e,t){if(1&e&&(r.Sb(0,"div",10),r.Cc(1),r.Ac(2,p,1,0,"ng-container",6),r.Rb()),2&e){const e=r.bc();r.Bb(1),r.Ec(" ",e.subheader," "),r.Bb(1),r.gc("ngTemplateOutlet",e.subtitleTemplate)}}function d(e,t){1&e&&r.Ob(0)}function b(e,t){1&e&&r.Ob(0)}function f(e,t){if(1&e&&(r.Sb(0,"div",11),r.ec(1,2),r.Ac(2,b,1,0,"ng-container",6),r.Rb()),2&e){const e=r.bc();r.Bb(2),r.gc("ngTemplateOutlet",e.footerTemplate)}}const h=["*",[["p-header"]],[["p-footer"]]],g=["*","p-header","p-footer"];let m=(()=>{class e{constructor(e){this.el=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"title":this.titleTemplate=e.template;break;case"subtitle":this.subtitleTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;default:this.contentTemplate=e.template}})}getBlockableElement(){return this.el.nativeElement.children[0]}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(r.l))},e.\u0275cmp=r.Gb({type:e,selectors:[["p-card"]],contentQueries:function(e,t,a){if(1&e&&(r.Fb(a,c.g,1),r.Fb(a,c.f,1),r.Fb(a,c.j,0)),2&e){let e;r.qc(e=r.ac())&&(t.headerFacet=e.first),r.qc(e=r.ac())&&(t.footerFacet=e.first),r.qc(e=r.ac())&&(t.templates=e)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:g,decls:9,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(e,t){1&e&&(r.fc(h),r.Sb(0,"div",0),r.Ac(1,l,3,1,"div",1),r.Sb(2,"div",2),r.Ac(3,o,3,2,"div",3),r.Ac(4,u,3,2,"div",4),r.Sb(5,"div",5),r.ec(6),r.Ac(7,d,1,0,"ng-container",6),r.Rb(),r.Ac(8,f,3,1,"div",7),r.Rb(),r.Rb()),2&e&&(r.Db(t.styleClass),r.gc("ngClass","p-card p-component")("ngStyle",t.style),r.Bb(1),r.gc("ngIf",t.headerFacet||t.headerTemplate),r.Bb(2),r.gc("ngIf",t.header||t.titleTemplate),r.Bb(1),r.gc("ngIf",t.subheader||t.subtitleTemplate),r.Bb(3),r.gc("ngTemplateOutlet",t.contentTemplate),r.Bb(1),r.gc("ngIf",t.footerFacet||t.footerTemplate))},directives:[n.h,n.k,n.j,n.n],styles:[".p-card-header img{width:100%}"],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[n.b],c.k]}),e})()},WaYN:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("fXoL"),c=a("tk/3");let r=(()=>{class e{constructor(e){this.http=e}getLayers(e,t,a,n,c){let r=this.buildParams(e,t,a,n,c);return this.http.get(`/api/layers?${r}`)}buildParams(e,t,a,n,c){let r="";return null!=e&&(r+=`name=${e}&`),null!=t&&(r+=`access_granted=${t}&`),null!=n&&(r+=`page=${n}&`),null!=c&&(r+=`size=${c}&`),null!=a&&(r+=`visible=${a}&`),r}getLayer(e){return this.http.get(`/api/layers/${e}`)}getLayerByName(e){return this.http.get(`/api/layers/name/${e}`)}saveAccessRequest(e){return this.http.post("/api/access-request",e)}getWorkspace(e){return this.http.get(`/api/workspaces/${e}`)}buildTree(e){return Object.keys(e).reduce((t,a)=>{let n=e[a],c={};return c.label=n.name,c.data=n,c.data.object="workspace",c.leaf=!n.hasChildren,c.data.icon="pi pi-fw pi-images",null!=n&&(c.children="object"==typeof n.childrens&&n.childrens.length>0?this.buildTree(n.childrens):[]),t.concat(c)},[])}getWorkspaces(e,t,a){let n=this.buildWorkspaceParamsFilter(e,t,a);return this.http.get(`/api/workspaces?${n}`)}buildWorkspaceParamsFilter(e,t,a){let n="";return null!=e&&(n+=`name=${e}&`),null!=t&&(n+=`page=${t}&`),null!=a&&(n+=`size=${a}&`),n}verifyAccess(e,t,a){const n=new FormData;return n.append("accessToken",e),n.append("email",t),n.append("layerId",a.toString()),this.http.post("/api/access-request/validate-access",n)}}return e.\u0275fac=function(t){return new(t||e)(n.Wb(c.b))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);