!function(){function e(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=n(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(l)throw i}}}}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{pbh5:function(n,a,i){"use strict";i.r(a),i.d(a,"HomeModule",function(){return M});var c=i("ofXK"),l=i("tyNb"),s=i("7zfz"),u=i("J7/z"),d=i("TMoa"),f=i("fXoL"),b=i("WaYN"),p=i("EVgl");function h(e,t){1&e&&(f.Sb(0,"tr"),f.Sb(1,"th"),f.Cc(2," Nombre "),f.Rb(),f.Rb())}function m(e,t){if(1&e){var n=f.Tb();f.Sb(0,"tr",4),f.Sb(1,"td"),f.Nb(2,"p-treeTableToggler",5),f.Nb(3,"i"),f.Sb(4,"span",6),f.Zb("click",function(){f.sc(n);var e=t.rowData;return f.bc().navigateToViewer(e)}),f.Cc(5),f.Rb(),f.Rb(),f.Rb()}if(2&e){var a=t.$implicit,r=t.rowData;f.gc("ttRow",a)("ttRow",a)("ttSelectableRow",a),f.Bb(2),f.gc("rowNode",a),f.Bb(1),f.Cb("class",r.icon),f.Bb(2),f.Dc(r.name)}}var v,y,g,w=[{path:"",component:(v=function(){function n(e,t,a,o,i){r(this,n),this.router=e,this.service=t,this.dialogService=a,this.confirmService=o,this.messageService=i,this.optionsFilter=[{name:"Todas las capas",code:null},{name:"Informaci\xf3n Corpocaldas",code:1},{name:"Informaci\xf3n de otras entidades",code:2}],this.eventPage=null,this.loading=!1,this.layers=[]}var a,i,c;return a=n,(i=[{key:"ngOnInit",value:function(){}},{key:"getWorkSpaces",value:function(e){var t=this;this.loading=!0,this.eventPage=e,this.service.getWorkspaces(null,null!==e?e.first/e.rows:null,null!==e?e.rows:null).subscribe(function(e){null!==e.data&&e.data.length>0&&(t.workspaces=t.service.buildTree(e.data)),t.totalRecords=e.numberRows,t.loading=!1},function(e){console.error(e),t.messageService.add({severity:"error",summary:"Capas",detail:"Error: "+e.status+" "+e.statusText})})}},{key:"onNodeExpand",value:function(n){var a=this;if(0===n.node.children.length){this.loading=!0;var r=n.node;this.service.getWorkspace(r.data.id).subscribe(function(n){var o,i=t(n.layers);try{for(i.s();!(o=i.n()).done;){var c=o.value;c.visible&&r.children.push({data:{id:c.id,name:c.name,icon:"pi pi-fw pi-map",object:"layer"}})}}catch(d){i.e(d)}finally{i.f()}var l,s=t(n.workspaceChildrens);try{for(s.s();!(l=s.n()).done;){var u=l.value;r.children.push({data:{id:u.id,name:u.name,icon:"pi pi-fw pi-images",object:"workspace"},leaf:!u.hasChildren,children:[]})}}catch(d){s.e(d)}finally{s.f()}r.children.sort(function(e,t){return e.data.name.localeCompare(t.data.name)}),a.workspaces=e(a.workspaces),a.loading=!1})}}},{key:"getLayers",value:function(e,n){var a=this;this.eventPage=e,this.loading=!0,this.valueAccess=n,this.service.getLayers(null!==e&&null!=e.filters.name?e.filters.name.value:null,this.valueAccess,!0,null!==e?e.first/e.rows:null,null!==e?e.rows:null).subscribe(function(e){var n=[];if(null!==e.data&&e.data.length>0){var r,o=t(e.data);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=(new d.a).fromJSON(i);n.push(c)}}catch(l){o.e(l)}finally{o.f()}}a.layers=n,a.numberOfRows=e.numberRows,a.loading=!1},function(e){console.error(e)})}},{key:"navigateToViewer",value:function(e){"layer"===e.object&&this.router.navigate(["viewer"],{queryParams:{name:e.name}})}}])&&o(a.prototype,i),c&&o(a,c),n}(),v.\u0275fac=function(e){return new(e||v)(f.Mb(l.b),f.Mb(b.a),f.Mb(u.a),f.Mb(s.b),f.Mb(s.h))},v.\u0275cmp=f.Gb({type:v,selectors:[["app-home"]],features:[f.Ab([u.a,s.b,s.h])],decls:4,vars:6,consts:[[1,"table"],["dataKey","name",3,"value","paginator","rows","lazy","totalRecords","loading","onLazyLoad","onNodeExpand"],["pTemplate","header"],["pTemplate","body"],[3,"ttRow","ttSelectableRow"],[3,"rowNode"],[3,"click"]],template:function(e,t){1&e&&(f.Sb(0,"div",0),f.Sb(1,"p-treeTable",1),f.Zb("onLazyLoad",function(e){return t.getWorkSpaces(e)})("onNodeExpand",function(e){return t.onNodeExpand(e)}),f.Ac(2,h,3,0,"ng-template",2),f.Ac(3,m,6,6,"ng-template",3),f.Rb(),f.Rb()),2&e&&(f.Bb(1),f.gc("value",t.workspaces)("paginator",!0)("rows",10)("lazy",!0)("totalRecords",t.totalRecords)("loading",t.loading))},directives:[p.c,s.j,p.a,p.b,p.e],styles:[".actions[_ngcontent-%COMP%]{width:100px!important}.category[_ngcontent-%COMP%], .date[_ngcontent-%COMP%], .license[_ngcontent-%COMP%], .periodicity[_ngcontent-%COMP%]{width:150px}.entity[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{width:200px}.table[_ngcontent-%COMP%]{margin:20px}td[_ngcontent-%COMP%]{cursor:pointer}  .p-datatable .p-datatable-tbody>tr>td,   .p-datatable .p-datatable-thead>tr>th{border-width:1px;padding:5px!important}"]}),v)}],S=((y=function e(){r(this,e)}).\u0275fac=function(e){return new(e||y)},y.\u0275mod=f.Kb({type:y}),y.\u0275inj=f.Jb({imports:[[l.e.forChild(w)],l.e]}),y),C=i("PCNd"),k=i("rEr+"),R=i("arFO"),M=((g=function e(){r(this,e)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=f.Kb({type:g}),g.\u0275inj=f.Jb({imports:[[c.b,S,C.a,k.e,R.b,p.d]]}),g)}}])}();