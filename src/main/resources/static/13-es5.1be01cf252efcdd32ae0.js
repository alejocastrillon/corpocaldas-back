!function(){function e(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=n(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw i}}}}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{pbh5:function(n,a,r){"use strict";r.r(a),r.d(a,"HomeModule",function(){return z});var c=r("ofXK"),s=r("tyNb"),l=r("7zfz"),d=r("J7/z"),b=r("TMoa"),u=r("VOEb"),f=r("fXoL"),p=r("WaYN"),m=r("+DzE"),g=function(){return{height:"6px",width:"100%"}};function h(e,t){1&e&&f.Nb(0,"p-progressBar",2),2&e&&f.wc(f.hc(2,g))}function v(e,t){if(1&e&&(f.Sb(0,"div",3),f.Sb(1,"div",4),f.Sb(2,"b"),f.Cc(3,"Nombre: "),f.Rb(),f.Cc(4),f.Rb(),f.Sb(5,"div",4),f.Sb(6,"b"),f.Cc(7,"Definici\xf3n: "),f.Rb(),f.Cc(8),f.Rb(),f.Sb(9,"div",5),f.Sb(10,"b"),f.Cc(11,"Objeto Geografico: "),f.Rb(),f.Nb(12,"i"),f.Rb(),f.Sb(13,"div",5),f.Sb(14,"b"),f.Cc(15,"Escala: "),f.Rb(),f.Cc(16),f.Rb(),f.Sb(17,"div",5),f.Sb(18,"b"),f.Cc(19,"Tipo de archivo: "),f.Rb(),f.Cc(20),f.Rb(),f.Sb(21,"div",6),f.Sb(22,"b"),f.Cc(23,"Fuente de Informaci\xf3n: "),f.Rb(),f.Cc(24),f.Rb(),f.Sb(25,"div",4),f.Sb(26,"b"),f.Cc(27,"Informaci\xf3n de referencia: "),f.Rb(),f.Rb(),f.Sb(28,"div",4),f.Sb(29,"b"),f.Cc(30,"Proyecci\xf3n: "),f.Rb(),f.Cc(31),f.Nb(32,"br"),f.Sb(33,"b"),f.Cc(34,"Elipsoide: "),f.Rb(),f.Cc(35),f.Sb(36,"b"),f.Cc(37,"Datum: "),f.Rb(),f.Cc(38),f.Rb(),f.Rb()),2&e){var n=f.bc();f.Bb(4),f.Ec("",n.response.nombre," "),f.Bb(4),f.Ec("",n.response.definicion," "),f.Bb(4),f.Cb("class",n.response.objeto_geografico),f.Bb(4),f.Ec("",n.response.escala," "),f.Bb(4),f.Ec("",n.response.tipo_archivo," "),f.Bb(4),f.Ec("",n.response.fuente_informacion," "),f.Bb(7),f.Ec("",n.response.proyeccion," "),f.Bb(4),f.Ec("",n.response.elipsoide," "),f.Bb(3),f.Ec("",n.response.datum," ")}}var y,w=((y=function(){function e(t,n,a){o(this,e),this.config=t,this.ref=n,this.service=a,this.loading=!0,this.layer=this.config.data.layer,this.getData()}return i(e,[{key:"ngOnInit",value:function(){}},{key:"getData",value:function(){var e=this;this.service.getXmlData(this.layer.metadataUrl).subscribe(function(t){e.response=t,e.loading=!1},function(t){console.error(t),404===t.status&&e.ref.close(t.error.details[0])})}}]),e}()).\u0275fac=function(e){return new(e||y)(f.Mb(d.b),f.Mb(d.d),f.Mb(p.a))},y.\u0275cmp=f.Gb({type:y,selectors:[["app-metadata"]],decls:4,vars:2,consts:[["mode","indeterminate",3,"style",4,"ngIf"],["class","p-grid p-fluid",4,"ngIf"],["mode","indeterminate"],[1,"p-grid","p-fluid"],[1,"p-col-12","p-md-6"],[1,"p-col-12","p-md-4"],[1,"p-col-12","p-md-12"]],template:function(e,t){1&e&&(f.Nb(0,"br"),f.Ac(1,h,1,3,"p-progressBar",0),f.Nb(2,"br"),f.Ac(3,v,39,9,"div",1)),2&e&&(f.Bb(1),f.gc("ngIf",t.loading),f.Bb(2),f.gc("ngIf",!t.loading))},directives:[c.j,m.a],styles:["div[_ngcontent-%COMP%]{border:1px solid #000}"]}),y),S=r("Gxio"),C=r("dts7"),R=r("EVgl"),x=r("jIHw");function k(e,t){1&e&&(f.Sb(0,"tr"),f.Sb(1,"th"),f.Cc(2," Nombre "),f.Rb(),f.Sb(3,"th"),f.Cc(4," Propietario"),f.Rb(),f.Sb(5,"th",8),f.Cc(6,"Metadato"),f.Rb(),f.Rb())}function M(e,t){if(1&e){var n=f.Tb();f.Sb(0,"button",13),f.Zb("click",function(){f.sc(n);var e=f.bc().rowData;return f.bc().metadataInfo(e)}),f.Rb()}}function O(e,t){if(1&e){var n=f.Tb();f.Sb(0,"tr",9),f.Sb(1,"td"),f.Nb(2,"p-treeTableToggler",10),f.Nb(3,"i"),f.Sb(4,"span",11),f.Zb("click",function(){f.sc(n);var e=t.rowData;return f.bc().navigateToViewer(e)}),f.Cc(5),f.Rb(),f.Rb(),f.Sb(6,"td"),f.Cc(7),f.Rb(),f.Sb(8,"td"),f.Ac(9,M,1,0,"button",12),f.Rb(),f.Rb()}if(2&e){var a=t.$implicit,o=t.rowData;f.gc("ttRow",a)("ttRow",a)("ttSelectableRow",a),f.Bb(2),f.gc("rowNode",a),f.Bb(1),f.Cb("class",o.icon),f.Bb(2),f.Dc(o.name),f.Bb(2),f.Dc(o.owner),f.Bb(2),f.gc("ngIf","layer"===o.object)}}var P,N,A,E,I=[{path:"",component:(P=function(){function n(e,t,a,r){o(this,n),this.router=e,this.service=t,this.messageService=a,this.dialogService=r,this.optionsFilter=[{name:"Todas las capas",code:null},{name:"Informaci\xf3n Corpocaldas",code:1},{name:"Informaci\xf3n de otras entidades",code:2}],this.eventPage=null,this.loading=!1,this.layers=[]}return i(n,[{key:"ngOnInit",value:function(){this.msgs=[{severity:"info",summary:"",detail:"En cumplimiento de la  Ley 1712 de 2014 sobre Transparencia y Acceso a la Informaci\xf3n P\xfablica Nacional y la Pol\xedtica Nacional de Datos Abiertos, la Corporaci\xf3n Aut\xf3noma Regional de Caldas, pone a la disposici\xf3n de los usuarios los siguientes datos geogr\xe1ficos para su uso de forma libre, pero garantizando la propiedad intelectual  de conformidad con la Ley 23 de 1982, la Decisi\xf3n Andina 351 de 1993 r\xe9gimen com\xfan sobre derechos de autor y derechos conexos, La ley 44 de 1993 y dem\xe1s normas relacionadas con los derechos de autor."}]}},{key:"getWorkSpaces",value:function(e){var t=this;this.loading=!0,this.eventPage=e,this.service.getWorkspaces(null,null!==e?e.first/e.rows:null,null!==e?e.rows:null).subscribe(function(e){null!==e.data&&e.data.length>0&&(t.workspaces=t.service.buildTree(e.data)),t.totalRecords=e.numberRows,t.loading=!1},function(e){console.error(e),t.messageService.add({severity:"error",summary:"Capas",detail:"Error: "+e.status+" "+e.statusText})})}},{key:"onNodeExpand",value:function(n){var a=this;if(0===n.node.children.length){this.loading=!0;var o=n.node;this.service.getWorkspace(o.data.id).subscribe(function(n){var r,i=t(n.layers);try{for(i.s();!(r=i.n()).done;){var c=r.value;c.visible&&o.children.push({data:{id:c.id,name:c.name,metadataUrl:c.metadataUrl,icon:"pi pi-fw pi-map",object:"layer",owner:a.getNameOptionsFilter(c.accessGranted)}})}}catch(b){i.e(b)}finally{i.f()}var s,l=t(n.workspaceChildrens);try{var d=function(){var e=s.value;void 0===o.children.find(function(t){return t.data.id===e.id})&&o.children.push({data:{id:e.id,name:e.name,icon:"pi pi-fw pi-images",object:"workspace",owner:""},leaf:!e.hasChildren,children:[]})};for(l.s();!(s=l.n()).done;)d()}catch(b){l.e(b)}finally{l.f()}o.children.sort(function(e,t){return e.data.name.localeCompare(t.data.name)}),a.workspaces=e(a.workspaces),a.loading=!1})}}},{key:"getLayers",value:function(e,n){var a=this;this.eventPage=e,this.loading=!0,this.valueAccess=n,this.service.getLayers(null!==e&&null!=e.filters.name?e.filters.name.value:null,this.valueAccess,!0,null!==e?e.first/e.rows:null,null!==e?e.rows:null).subscribe(function(e){var n=[];if(null!==e.data&&e.data.length>0){var o,r=t(e.data);try{for(r.s();!(o=r.n()).done;){var i=o.value,c=(new b.a).fromJSON(i);n.push(c)}}catch(s){r.e(s)}finally{r.f()}}a.layers=n,a.numberOfRows=e.numberRows,a.loading=!1},function(e){console.error(e)})}},{key:"metadataInfo",value:function(e){var t=this;this.dialogService.open(w,{width:"60%",header:"Metadatos de ".concat(e.name),data:{layer:e}}).onClose.subscribe(function(e){null!=e&&t.messageService.add({severity:"error",detail:e,summary:"Archivos de metadata"})})}},{key:"navigateToViewer",value:function(e){"layer"===e.object&&this.router.navigate(["viewer"],{queryParams:{name:e.name}})}},{key:"guide",value:function(){this.dialogService.open(u.a,{header:"Ayuda de Plataforma Virtual SIG-SIR",width:"auto"})}},{key:"getNameOptionsFilter",value:function(e){return this.optionsFilter.find(function(t){return t.code===e}).name}}]),n}(),P.\u0275fac=function(e){return new(e||P)(f.Mb(s.b),f.Mb(p.a),f.Mb(l.h),f.Mb(d.a))},P.\u0275cmp=f.Gb({type:P,selectors:[["app-home"]],features:[f.Ab([d.a,l.b,l.h])],decls:13,vars:8,consts:[[1,"table"],[3,"value","enableService","valueChange"],[1,"title"],["dataKey","name","tableStyleClass","p-datatable-sm",3,"value","paginator","rows","lazy","totalRecords","loading","onLazyLoad","onNodeExpand"],["pTemplate","header"],["pTemplate","body"],[1,"float",3,"click"],[1,"esri-icon-question","my-float"],[2,"width","150px"],[3,"ttRow","ttSelectableRow"],[3,"rowNode"],[3,"click"],["title","Metadatos","class","p-button-rounded","pButton","","icon","pi pi-fw pi-book",3,"click",4,"ngIf"],["title","Metadatos","pButton","","icon","pi pi-fw pi-book",1,"p-button-rounded",3,"click"]],template:function(e,t){1&e&&(f.Nb(0,"p-toast"),f.Sb(1,"div",0),f.Sb(2,"p-messages",1),f.Zb("valueChange",function(e){return t.msgs=e}),f.Rb(),f.Sb(3,"div",2),f.Sb(4,"h2"),f.Cc(5,"Lista de coberturas"),f.Rb(),f.Rb(),f.Sb(6,"p-treeTable",3),f.Zb("onLazyLoad",function(e){return t.getWorkSpaces(e)})("onNodeExpand",function(e){return t.onNodeExpand(e)}),f.Ac(7,k,7,0,"ng-template",4),f.Ac(8,O,10,8,"ng-template",5),f.Rb(),f.Rb(),f.Sb(9,"a",6),f.Zb("click",function(){return t.guide()}),f.Nb(10,"i",7),f.Sb(11,"span"),f.Cc(12," Ayuda"),f.Rb(),f.Rb()),2&e&&(f.Bb(2),f.gc("value",t.msgs)("enableService",!1),f.Bb(4),f.gc("value",t.workspaces)("paginator",!0)("rows",10)("lazy",!0)("totalRecords",t.totalRecords)("loading",t.loading))},directives:[S.a,C.a,R.c,l.j,R.a,R.b,R.e,c.j,x.b],styles:[".actions[_ngcontent-%COMP%]{width:100px!important}.category[_ngcontent-%COMP%], .date[_ngcontent-%COMP%], .license[_ngcontent-%COMP%], .periodicity[_ngcontent-%COMP%]{width:150px}.entity[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{width:200px}.table[_ngcontent-%COMP%]{margin:20px}td[_ngcontent-%COMP%]{cursor:pointer}  .p-datatable .p-datatable-tbody>tr>td,   .p-datatable .p-datatable-thead>tr>th{border-width:1px;padding:5px!important}.title[_ngcontent-%COMP%]{padding-left:10px}.float[_ngcontent-%COMP%]{background-color:#567929;border-radius:50px;bottom:40px;box-shadow:2px 2px 3px #999;color:#fff;cursor:pointer;display:flex;flex-direction:row;align-items:center;justify-content:center;height:45px;position:fixed;right:40px;text-align:center;width:90px}.float[_ngcontent-%COMP%]   .my-float[_ngcontent-%COMP%]{font-size:16px;margin-right:5px}.esri-icon-question[_ngcontent-%COMP%]:before{font-size:x-large}"]}),P)}],B=((N=function e(){o(this,e)}).\u0275fac=function(e){return new(e||N)},N.\u0275mod=f.Kb({type:N}),N.\u0275inj=f.Jb({imports:[[s.e.forChild(I)],s.e]}),N),j=r("PCNd"),T=r("rEr+"),_=r("arFO"),D=((E=function e(){o(this,e)}).\u0275fac=function(e){return new(e||E)},E.\u0275mod=f.Kb({type:E}),E.\u0275inj=f.Jb({imports:[[c.b]]}),E),z=((A=function e(){o(this,e)}).\u0275fac=function(e){return new(e||A)},A.\u0275mod=f.Kb({type:A}),A.\u0275inj=f.Jb({imports:[[c.b,B,m.b,x.c,j.a,T.e,_.b,R.d,C.b,D,S.b]]}),A)}}])}();