(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8qaN":function(e,t,n){"use strict";n.r(t),n.d(t,"ViewerModule",function(){return E});var o=n("ofXK"),s=n("tyNb"),a=n("7zfz"),i=n("J7/z"),r=n("3Pt+"),c=n("DJUq"),l=n("fXoL"),d=n("7kUa");let b=(()=>{class e{constructor(e,t,n,o){this.el=e,this.ngModel=t,this.control=n,this.cd=o,this.onResize=new l.n}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(e){this.autoResize&&this.resize(e)}onBlur(e){this.autoResize&&this.resize(e)}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(l.l),l.Mb(r.j,8),l.Mb(r.g,8),l.Mb(l.h))},e.\u0275dir=l.Hb({type:e,selectors:[["","pInputTextarea",""]],hostVars:10,hostBindings:function(e,t){1&e&&l.Zb("input",function(e){return t.onInput(e)})("focus",function(e){return t.onFocus(e)})("blur",function(e){return t.onBlur(e)}),2&e&&l.Eb("p-inputtextarea",!0)("p-inputtext",!0)("p-component",!0)("p-filled",t.filled)("p-inputtextarea-resizable",t.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[o.b]]}),e})();var u=n("jIHw");function h(e,t){1&e&&(l.Sb(0,"span"),l.Cc(1," El correo electr\xf3nico es requerido "),l.Rb())}function m(e,t){1&e&&(l.Sb(0,"span"),l.Cc(1," El correo electr\xf3nico es invalido "),l.Rb())}function g(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.Ac(2,h,2,0,"span",23),l.Ac(3,m,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.email.errors.required),l.Bb(1),l.gc("ngIf",e.accessRequestForm.controls.email.errors.email)}}function f(e,t){1&e&&(l.Sb(0,"span"),l.Cc(1," El nombre es requerido "),l.Rb())}function C(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.Ac(2,f,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.name.errors.required)}}function R(e,t){1&e&&(l.Sb(0,"span"),l.Cc(1," El nombre de la compa\xf1\xeda o entidad es requerido "),l.Rb())}function y(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.Ac(2,R,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.company.errors.required)}}function S(e,t){1&e&&(l.Sb(0,"span"),l.Cc(1," El objeto de la descarga es requerido. "),l.Rb())}function v(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.Ac(2,S,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.description.errors.required)}}let M=(()=>{class e{constructor(e,t,n){this.formBuilder=e,this.config=t,this.ref=n,this.accessRequest=new c.a,this.accessRequest.idLayer=this.config.data.layer.id,this.accessRequest.nameLayer=this.config.data.layer.name,this.accessRequest.accessGrantedLayer=this.config.data.layer.accessGranted,this.validateForm()}ngOnInit(){this.validateForm()}validateForm(){this.accessRequestForm=this.formBuilder.group({email:[this.accessRequest.email,[r.m.required,r.m.email]],name:[this.accessRequest.name,[r.m.required]],company:[this.accessRequest.company,[r.m.required]],description:[this.accessRequest.description,[r.m.required]]})}saveAccessRequest(){console.log(this.accessRequest),this.ref.close(this.accessRequest)}cancel(){this.ref.close(null)}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(r.b),l.Mb(i.b),l.Mb(i.d))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-register-access-request"]],decls:48,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"p-grid","p-fluid"],[1,"p-field","p-col-12","p-md-12"],[1,"p-inputgroup"],[1,"p-float-label"],["type","email","id","email","autofocus","","formControlName","email","pInputText","",3,"ngModel","ngModelChange"],["for","email"],[1,"p-inputgroup-addon"],[1,"pi","pi-envelope"],["class","error",4,"ngIf"],["type","text","id","name","autofocus","","formControlName","name","pInputText","",3,"ngModel","ngModelChange"],["for","name"],[1,"pi","pi-user"],["type","text","id","company","autofocus","","formControlName","company","pInputText","",3,"ngModel","ngModelChange"],["for","company"],[1,"pi","pi-id-card"],["id","description","rows","5","cols","30","formControlName","description","pInputTextarea","",3,"ngModel","ngModelChange"],["for","description"],[1,"button-container"],["pButton","","icon","pi pi-check","label","Descargar",1,"p-button-rounded","p-button-success",3,"disabled"],["pButton","","icon","pi pi-times","label","Cancelar","type","button",1,"p-button-rounded",3,"click"],[1,"error"],[1,"pi","pi-times","error"],[4,"ngIf"]],template:function(e,t){1&e&&(l.Sb(0,"form",0),l.Zb("ngSubmit",function(){return t.accessRequestForm.valid&&t.saveAccessRequest()}),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Nb(3,"br"),l.Sb(4,"div",3),l.Sb(5,"span",4),l.Sb(6,"input",5),l.Zb("ngModelChange",function(e){return t.accessRequest.email=e}),l.Rb(),l.Sb(7,"label",6),l.Cc(8,"Correo electr\xf3nico"),l.Rb(),l.Sb(9,"span",7),l.Nb(10,"i",8),l.Rb(),l.Rb(),l.Rb(),l.Ac(11,g,4,2,"div",9),l.Rb(),l.Nb(12,"br"),l.Sb(13,"div",2),l.Nb(14,"br"),l.Sb(15,"div",3),l.Sb(16,"span",4),l.Sb(17,"input",10),l.Zb("ngModelChange",function(e){return t.accessRequest.name=e}),l.Rb(),l.Sb(18,"label",11),l.Cc(19,"Nombre"),l.Rb(),l.Sb(20,"span",7),l.Nb(21,"i",12),l.Rb(),l.Rb(),l.Rb(),l.Ac(22,C,3,1,"div",9),l.Rb(),l.Nb(23,"br"),l.Sb(24,"div",2),l.Nb(25,"br"),l.Sb(26,"div",3),l.Sb(27,"span",4),l.Sb(28,"input",13),l.Zb("ngModelChange",function(e){return t.accessRequest.company=e}),l.Rb(),l.Sb(29,"label",14),l.Cc(30,"Nombre de la compa\xf1\xeda o entidad"),l.Rb(),l.Sb(31,"span",7),l.Nb(32,"i",15),l.Rb(),l.Rb(),l.Rb(),l.Ac(33,y,3,1,"div",9),l.Rb(),l.Nb(34,"br"),l.Sb(35,"div",2),l.Nb(36,"br"),l.Sb(37,"div",3),l.Sb(38,"span",4),l.Sb(39,"textarea",16),l.Zb("ngModelChange",function(e){return t.accessRequest.description=e}),l.Rb(),l.Sb(40,"label",17),l.Cc(41,"Objeto de la descarga"),l.Rb(),l.Rb(),l.Rb(),l.Ac(42,v,3,1,"div",9),l.Rb(),l.Nb(43,"br"),l.Sb(44,"div",18),l.Nb(45,"button",19),l.Rb(),l.Sb(46,"div",18),l.Sb(47,"button",20),l.Zb("click",function(){return t.cancel()}),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.gc("formGroup",t.accessRequestForm),l.Bb(6),l.gc("ngModel",t.accessRequest.email),l.Bb(5),l.gc("ngIf",t.accessRequestForm.controls.email.touched&&t.accessRequestForm.controls.email.dirty&&t.accessRequestForm.controls.email.invalid),l.Bb(6),l.gc("ngModel",t.accessRequest.name),l.Bb(5),l.gc("ngIf",t.accessRequestForm.controls.name.touched&&t.accessRequestForm.controls.name.dirty&&t.accessRequestForm.controls.name.invalid),l.Bb(6),l.gc("ngModel",t.accessRequest.company),l.Bb(5),l.gc("ngIf",t.accessRequestForm.controls.company.touched&&t.accessRequestForm.controls.company.dirty&&t.accessRequestForm.controls.company.invalid),l.Bb(6),l.gc("ngModel",t.accessRequest.description),l.Bb(3),l.gc("ngIf",t.accessRequestForm.controls.description.touched&&t.accessRequestForm.controls.description.dirty&&t.accessRequestForm.controls.description.invalid),l.Bb(3),l.gc("disabled",!t.accessRequestForm.valid))},directives:[r.n,r.i,r.d,r.a,r.h,r.c,d.a,o.j,b,u.b],styles:[".button-container[_ngcontent-%COMP%]{width:48%;margin-left:2%;float:left}.error[_ngcontent-%COMP%]{color:#d32f2f;font-size:small;font-weight:700}"]}),e})(),x=(()=>{class e{constructor(e){this.ref=e}ngOnInit(){}close(e){this.ref.close(e)}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(i.d))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-terms"]],decls:57,vars:0,consts:[[1,"terms"],[1,"body"],[1,"data-table","esri-widget__table"],["colspan","2"],[1,"buttons"],["pButton","","type","button","icon","pi pi-times","label","No Acepto",1,"p-button-warning","p-button-sm",3,"click"],["pButton","","type","button","icon","pi pi-check","label","Acepto",1,"p-button-success","p-button-sm",3,"click"]],template:function(e,t){1&e&&(l.Sb(0,"div",0),l.Sb(1,"div"),l.Sb(2,"h2"),l.Cc(3,"Plataforma Virtual SIG-SIR"),l.Rb(),l.Sb(4,"h4"),l.Cc(5,"T\xe9rminos y Condiciones"),l.Rb(),l.Rb(),l.Sb(6,"div",1),l.Sb(7,"table",2),l.Sb(8,"thead"),l.Sb(9,"tr"),l.Sb(10,"th",3),l.Sb(11,"b"),l.Cc(12,"Datos Generales de la informaci\xf3n entregada"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(13,"tbody"),l.Sb(14,"tr"),l.Sb(15,"td"),l.Cc(16,"Formato"),l.Rb(),l.Sb(17,"td"),l.Cc(18,"Shape"),l.Rb(),l.Rb(),l.Sb(19,"tr"),l.Sb(20,"td"),l.Cc(21,"Origen de Coordenadas"),l.Rb(),l.Sb(22,"td"),l.Cc(23," Proyecci\xf3n: Transverse_Mercator "),l.Nb(24,"br"),l.Cc(25," False_Easting: 1000000,00000000 "),l.Nb(26,"br"),l.Cc(27," False_Northing: 1000000,00000000 "),l.Nb(28,"br"),l.Cc(29," Central_Meridian: -74,08091667 "),l.Nb(30,"br"),l.Cc(31," Scale_Factor: 1,00000000 "),l.Nb(32,"br"),l.Cc(33," Latitude_Of_Origin: 4,59904722 "),l.Nb(34,"br"),l.Cc(35," Unidad Lineal: Meter "),l.Nb(36,"br"),l.Rb(),l.Rb(),l.Sb(37,"tr"),l.Sb(38,"td"),l.Cc(39,"Proyecci\xf3n"),l.Rb(),l.Sb(40,"td"),l.Cc(41,"Colombia_Bogota_Zone"),l.Rb(),l.Rb(),l.Sb(42,"tr"),l.Sb(43,"td"),l.Cc(44,"Sistema de Coordenadas"),l.Rb(),l.Sb(45,"td"),l.Cc(46,"Planas"),l.Rb(),l.Rb(),l.Sb(47,"tr"),l.Sb(48,"td"),l.Cc(49,"EPSG"),l.Rb(),l.Sb(50,"td"),l.Cc(51,"21897"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(52,"p"),l.Cc(53," El usuario solicitante reconoce que la informaci\xf3n a que tenga acceso es de propiedad exclusiva de la Corporaci\xf3n Aut\xf3noma Regional de Caldas \u2013 CORPOCALDAS de conformidad con la ley 23 de 1982, la Decisi\xf3n Andina 351 de 1993 r\xe9gimen com\xfan sobre derechos de autor y derechos conexos, la ley 44 de 1993 y dem\xe1s normas relacionadas con los derechos de autor. Por lo anterior al usuario no le asiste ning\xfan derecho de propiedad intelectual, pudi\xe9ndolos utilizar \xfanicamente para el desarrollo de la presente solicitud, sin que se entiendan cedidos o licenciados a ning\xfan t\xedtulo. De igual forma el usuario deber\xe1 respetar los derechos de autor, para lo cual deber\xe1 realizar las citas correspondientes. "),l.Rb(),l.Rb(),l.Sb(54,"div",4),l.Sb(55,"button",5),l.Zb("click",function(){return t.close(!1)}),l.Rb(),l.Sb(56,"button",6),l.Zb("click",function(){return t.close(!0)}),l.Rb(),l.Rb(),l.Rb())},directives:[u.b],styles:[".body[_ngcontent-%COMP%]{clear:both;margin:10px;overflow-y:auto;padding:10px}.body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}.data-table[_ngcontent-%COMP%]{margin-bottom:20px}.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}.esri-widget__table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .esri-widget__table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1em!important;border:1px solid #ddd}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.terms[_ngcontent-%COMP%]{min-width:250px!important;max-width:800px}thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}@media screen and (max-height:823px) and (max-width:411px){.terms[_ngcontent-%COMP%]{width:350px}#body[_ngcontent-%COMP%]{height:510px}}@media screen and (max-height:812px) and (max-width:375px){.terms[_ngcontent-%COMP%]{width:309px}#body[_ngcontent-%COMP%]{height:499px}}@media screen and (max-height:731px) and (max-width:411px){.terms[_ngcontent-%COMP%]{width:350px}#body[_ngcontent-%COMP%]{height:418px}}@media screen and (max-height:736px) and (max-width:414px){.terms[_ngcontent-%COMP%]{width:350px}#body[_ngcontent-%COMP%]{height:423px}}@media screen and (max-height:667px) and (max-width:375px){.terms[_ngcontent-%COMP%]{width:300px}#body[_ngcontent-%COMP%]{height:354px}}@media screen and (max-height:640px) and (max-width:360px){.terms[_ngcontent-%COMP%]{width:300px}#body[_ngcontent-%COMP%]{height:327px}}@media screen and (max-height:568px) and (max-width:320px){.terms[_ngcontent-%COMP%]{width:300px}#body[_ngcontent-%COMP%]{height:255px}}@media screen and (max-height:653px) and (max-width:280px){.terms[_ngcontent-%COMP%]{width:250px}}"]}),e})();var w=n("AytR"),q=n("WaYN"),_=n("Nf9I"),O=n("Gxio");const P=[{path:"",component:(()=>{class e{constructor(e,t,n,o,s){this.route=e,this.service=t,this.router=n,this.messageService=o,this.dialogService=s,this.geoServer=w.a.geoServer,this.route.queryParams.subscribe(e=>{this.id=e.id,this.getLayerInfo()})}ngOnInit(){this.initializeMap(),this.addControls()}addControls(){this.addScaleControl(),this.addSearchControl(),this.addZoomControl(),this.addBackControl(),this.addDownloadControl()}addBackControl(){const e=L.control({position:"topleft"});e.onAdd=()=>{const e=L.DomUtil.create("button","btn-control");e.classList.add("leaflet-control","leaflet-control-layers"),e.title="Volver",e.addEventListener("click",()=>{this.router.navigate(["./home"])});const t=document.createElement("i");return t.classList.add("pi","pi-arrow-circle-left"),e.appendChild(t),e},e.addTo(this.map)}addLogoControl(){const e=L.control({position:"topleft"});e.onAdd=()=>{const e=L.DomUtil.create("div","info");return e.innerHTML='<img src="assets/images/logo-corpocaldas.png" width="139px" height="100px"></img>',e.style.cursos="pointer",e.addEventListener("click",()=>{this.router.navigate(["./home"])}),e},e.addTo(this.map)}addDownloadControl(){const e=L.control({position:"topleft"});e.onAdd=()=>{const e=L.DomUtil.create("button","btn-control");e.classList.add("leaflet-control","leaflet-control-layers"),e.title="Descargar",e.addEventListener("click",()=>{this.downloadLayer()});const t=document.createElement("i");return t.classList.add("pi","pi-download"),e.appendChild(t),e},e.addTo(this.map)}addScaleControl(){const e=L.control.scale({position:"bottomleft"});this.map.addControl(e)}addSearchControl(){const e=L.esri.Geocoding.geosearch({position:"topright",placeholder:"Buscar lugares o direcciones"}).addTo(this.map),t=L.layerGroup().addTo(this.map);e.on("results",e=>{t.clearLayers(),console.log(e);for(let n=e.results.length-1;n>=0;n--)t.addLayer(L.marker(e.results[0].latlng))})}addZoomControl(){const e=L.control.zoom({position:"topright"});this.map.addControl(e)}downloadLayer(){1===this.layer.accessGranted?this.modalTerms():2===this.layer.accessGranted&&this.sendRequestAccessLayer()}modalTerms(){this.dialogService.open(x,{width:"auto",closable:!1,closeOnEscape:!1}).onClose.subscribe(e=>{e?this.sendRequestAccessLayer():this.messageService.add({severity:"warn",summary:"Descarga",detail:"Debido a que no acept\xf3 los t\xe9rminos de acceso a la informaci\xf3n no podr\xe1 descargarla."})})}downloadShapefile(){this.messageService.add({severity:"success",summary:"Descarga",detail:"En un momento ser\xe1 redirigido a la descarga."});const e=document.createElement("a");e.target="_blank",e.download=this.name,e.href=this.geoServer+this.layer.nameWorkspace.replace(" ","_")+"/ows?service=WFS&version=1.0.0&request=GetFeature&typeName="+this.layer.nameWorkspace.replace(" ","_")+"%3A"+this.name+"&outputFormat=SHAPE-ZIP",document.body.appendChild(e),e.click(),document.body.removeChild(e),e.remove()}getLayerInfo(){this.service.getLayer(this.id).subscribe(e=>{this.layer=e,this.name=this.layer.referenceName;const t=L.tileLayer.wms(this.geoServer+e.nameWorkspace.replace(" ","_")+"/wms?",{layers:this.name,format:"image/png",transparent:!0}).addTo(this.map);this.layersControl.addOverlay(t,this.layer.name)},e=>{console.error(e)})}highlightFeature(e){e.target.setStyle({weight:5,opacity:1,color:"#DFA612",fillOpacity:1,fillColor:"#FAE042"})}infoFeature(e){let t="";for(const n in e)t+=`<b>${n}:</b> ${e[n]} <br>`;return t}initializeMap(){const e=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),t={"Open Street Map":e,"Esri Map":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})};this.map=L.map("map",{center:L.latLng(5.309346,-75.307057),zoomControl:!1,zoom:10,layers:[e]}),this.addLogoControl(),this.layersControl=L.control.layers(t,null,{position:"topleft",collapsed:!1}),this.layersControl.addTo(this.map)}resetFeature(e){e.target.setStyle({weight:3,opacity:.5,color:"black",fillOpacity:.8,fillColor:"transparent"})}haveCredentials(){this.sendRequestAccessLayer()}sendRequestAccessLayer(){this.dialogService.open(M,{width:"50%",data:{layer:this.layer},header:`Acceso a ${this.layer.name}`}).onClose.subscribe(e=>{null!=e&&this.service.saveAccessRequest(e).subscribe(()=>{this.downloadShapefile()},e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(s.a),l.Mb(q.a),l.Mb(s.b),l.Mb(a.h),l.Mb(i.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-viewer"]],features:[l.Ab([a.h,i.a,a.b])],decls:5,vars:0,consts:[["header","Confirmaci\xf3n","icon","pi pi-exclamation-triangle"],[1,"map-container"],[1,"map-frame"],["id","map"]],template:function(e,t){1&e&&(l.Nb(0,"p-confirmDialog",0),l.Nb(1,"p-toast"),l.Sb(2,"div",1),l.Sb(3,"div",2),l.Nb(4,"div",3),l.Rb(),l.Rb())},directives:[_.a,O.a],styles:[".map-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}#map[_ngcontent-%COMP%], .map-frame[_ngcontent-%COMP%]{height:100%}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[s.e.forChild(P)],s.e]}),e})();var N=n("arFO"),A=n("dts7");let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[o.b,F,N.b,r.e,r.k,i.c,_.b,O.b,A.b,d.b,p,u.c]]}),e})()}}]);