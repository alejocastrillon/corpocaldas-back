(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{pbh5:function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return y});var a=n("ofXK"),o=n("tyNb"),r=n("7zfz"),i=n("J7/z"),s=n("TMoa"),c=n("fXoL"),l=n("WaYN"),b=n("rEr+"),p=n("arFO");function d(e,t){if(1&e){const e=c.Tb();c.Sb(0,"p-dropdown",7),c.Zb("onChange",function(t){c.sc(e);const n=c.bc(2);return n.getLayers(n.eventPage,t.value)}),c.Rb()}if(2&e){const e=t.$implicit,n=c.bc(2);c.gc("ngModel",e)("options",n.optionsFilter)("showClear",!0)}}function u(e,t){1&e&&(c.Sb(0,"tr"),c.Sb(1,"th"),c.Cc(2," Nombre "),c.Rb(),c.Sb(3,"th"),c.Cc(4," Tipo de Recurso "),c.Rb(),c.Rb(),c.Sb(5,"tr"),c.Sb(6,"th"),c.Nb(7,"p-columnFilter",4),c.Rb(),c.Sb(8,"th"),c.Sb(9,"p-columnFilter",5),c.Ac(10,d,1,3,"ng-template",6),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Bb(7),c.gc("showMenu",!1),c.Bb(2),c.gc("showMenu",!1))}function g(e,t){if(1&e){const e=c.Tb();c.Sb(0,"tr",8),c.Zb("click",function(){c.sc(e);const n=t.$implicit;return c.bc().navigateToViewer(n)}),c.Sb(1,"td"),c.Cc(2),c.Rb(),c.Sb(3,"td"),c.Cc(4),c.Rb(),c.Rb()}if(2&e){const e=t.$implicit;c.Bb(2),c.Ec(" ",e.name," "),c.Bb(2),c.Ec(" ",e.accessType," ")}}const h=function(){return[10,25,50]},m=function(){return["name","accessGranted"]},f=[{path:"",component:(()=>{class e{constructor(e,t,n,a,o){this.router=e,this.service=t,this.dialogService=n,this.confirmService=a,this.messageService=o,this.optionsFilter=[{name:"Todas las capas",code:null},{name:"Publico",code:1},{name:"Privado",code:2}],this.eventPage=null,this.loading=!1,this.layers=[]}ngOnInit(){}getLayers(e,t){this.eventPage=e,this.loading=!0,this.valueAccess=t,this.service.getLayers(null!==e&&null!=e.filters.name?e.filters.name.value:null,this.valueAccess,!0,null!==e?e.first/e.rows:null,null!==e?e.rows:null).subscribe(e=>{let t=[];if(null!==e.data&&e.data.length>0)for(const n of e.data){let e=(new s.a).fromJSON(n);t.push(e)}this.layers=t,this.numberOfRows=e.numberRows,this.loading=!1},e=>{console.error(e)})}navigateToViewer(e){this.router.navigate(["viewer"],{queryParams:{name:e.name}})}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(o.b),c.Mb(l.a),c.Mb(i.a),c.Mb(r.b),c.Mb(r.h))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-home"]],features:[c.Ab([i.a,r.b,r.h])],decls:4,vars:11,consts:[[1,"table"],["currentPageReportTemplate","{first} - {last} de {totalRecords} Capas","styleClass","p-datatable-striped",1,"esri-widget__table",3,"lazy","rowsPerPageOptions","showCurrentPageReport","paginator","rows","totalRecords","loading","globalFilterFields","value","onLazyLoad"],["pTemplate","header"],["pTemplate","body"],["type","text","field","name",3,"showMenu"],["field","accessGranted",3,"showMenu"],["pTemplate","filter"],["optionLabel","name","optionValue","code",3,"ngModel","options","showClear","onChange"],[3,"click"]],template:function(e,t){1&e&&(c.Sb(0,"div",0),c.Sb(1,"p-table",1),c.Zb("onLazyLoad",function(e){return t.getLayers(e,t.valueAccess)}),c.Ac(2,u,11,2,"ng-template",2),c.Ac(3,g,5,2,"ng-template",3),c.Rb(),c.Rb()),2&e&&(c.Bb(1),c.gc("lazy",!0)("rowsPerPageOptions",c.hc(9,h))("showCurrentPageReport",!0)("paginator",!0)("rows",10)("totalRecords",t.numberOfRows)("loading",t.loading)("globalFilterFields",c.hc(10,m))("value",t.layers))},directives:[b.d,r.j,b.a,p.a],styles:[".actions[_ngcontent-%COMP%]{width:100px!important}.category[_ngcontent-%COMP%], .date[_ngcontent-%COMP%], .license[_ngcontent-%COMP%], .periodicity[_ngcontent-%COMP%]{width:150px}.entity[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{width:200px}.table[_ngcontent-%COMP%]{margin:20px}td[_ngcontent-%COMP%]{cursor:pointer}  .p-datatable .p-datatable-tbody>tr>td,   .p-datatable .p-datatable-thead>tr>th{border-width:1px;padding:5px!important}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[o.e.forChild(f)],o.e]}),e})();var v=n("PCNd");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[a.b,w,v.a,b.e,p.b]]}),e})()}}]);