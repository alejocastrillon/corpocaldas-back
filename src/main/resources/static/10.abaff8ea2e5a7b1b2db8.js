(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8qaN":function(e,t,o){"use strict";o.r(t),o.d(t,"ViewerModule",function(){return O});var n=o("ofXK"),s=o("tyNb"),i=o("7zfz"),r=o("J7/z"),a=o("3Pt+"),c=o("DJUq"),l=o("fXoL"),d=o("7kUa");let b=(()=>{class e{constructor(e,t,o,n){this.el=e,this.ngModel=t,this.control=o,this.cd=n,this.onResize=new l.n}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(e){this.autoResize&&this.resize(e)}onBlur(e){this.autoResize&&this.resize(e)}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(l.l),l.Mb(a.j,8),l.Mb(a.g,8),l.Mb(l.h))},e.\u0275dir=l.Hb({type:e,selectors:[["","pInputTextarea",""]],hostVars:10,hostBindings:function(e,t){1&e&&l.Zb("input",function(e){return t.onInput(e)})("focus",function(e){return t.onFocus(e)})("blur",function(e){return t.onBlur(e)}),2&e&&l.Eb("p-inputtextarea",!0)("p-inputtext",!0)("p-component",!0)("p-filled",t.filled)("p-inputtextarea-resizable",t.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[n.b]]}),e})();var p=o("jIHw");function m(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El correo electr\xf3nico es requerido "),l.Rb())}function h(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El correo electr\xf3nico es invalido "),l.Rb())}function f(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.zc(2,m,2,0,"span",23),l.zc(3,h,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.email.errors.required),l.Bb(1),l.gc("ngIf",e.accessRequestForm.controls.email.errors.email)}}function g(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El nombre es requerido "),l.Rb())}function y(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.zc(2,g,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.name.errors.required)}}function v(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El nombre de la compa\xf1\xeda o entidad es requerido "),l.Rb())}function R(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.zc(2,v,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.company.errors.required)}}function S(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," La observaci\xf3n es requerida "),l.Rb())}function q(e,t){if(1&e&&(l.Sb(0,"div",21),l.Nb(1,"span",22),l.zc(2,S,2,0,"span",23),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.accessRequestForm.controls.description.errors.required)}}let C=(()=>{class e{constructor(e,t,o){this.formBuilder=e,this.config=t,this.ref=o,this.accessRequest=new c.a,this.accessRequest.idLayer=this.config.data.layer.id,this.accessRequest.nameLayer=this.config.data.layer.name,this.validateForm()}ngOnInit(){this.validateForm()}validateForm(){this.accessRequestForm=this.formBuilder.group({email:[this.accessRequest.email,[a.m.required,a.m.email]],name:[this.accessRequest.name,[a.m.required]],company:[this.accessRequest.company,[a.m.required]],description:[this.accessRequest.description,[a.m.required]]})}saveAccessRequest(){console.log(this.accessRequest),this.ref.close(this.accessRequest)}cancel(){this.ref.close(null)}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(a.b),l.Mb(r.b),l.Mb(r.d))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-register-access-request"]],decls:47,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"p-g","p-fluid"],[1,"p-field","p-col-12","p-md-12"],[1,"p-inputgroup"],[1,"p-float-label"],["type","email","id","email","autofocus","","formControlName","email","pInputText","",3,"ngModel","ngModelChange"],["for","email"],[1,"p-inputgroup-addon"],[1,"pi","pi-envelope"],["class","error",4,"ngIf"],["type","text","id","name","autofocus","","formControlName","name","pInputText","",3,"ngModel","ngModelChange"],["for","name"],[1,"pi","pi-user"],["type","text","id","company","autofocus","","formControlName","company","pInputText","",3,"ngModel","ngModelChange"],["for","company"],[1,"pi","pi-id-card"],["id","description","rows","5","cols","30","formControlName","description","pInputTextarea","",3,"ngModel","ngModelChange"],["for","description"],[1,"button-container"],["pButton","","icon","pi pi-check","label","Registrar",1,"p-button-rounded","p-button-success",3,"disabled"],["pButton","","icon","pi pi-times","label","Cancelar","type","button",1,"p-button-rounded",3,"click"],[1,"error"],[1,"pi","pi-times","error"],[4,"ngIf"]],template:function(e,t){1&e&&(l.Sb(0,"form",0),l.Zb("ngSubmit",function(){return t.accessRequestForm.valid&&t.saveAccessRequest()}),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Nb(3,"br"),l.Sb(4,"div",3),l.Sb(5,"span",4),l.Sb(6,"input",5),l.Zb("ngModelChange",function(e){return t.accessRequest.email=e}),l.Rb(),l.Sb(7,"label",6),l.Bc(8,"Correo electr\xf3nico"),l.Rb(),l.Sb(9,"span",7),l.Nb(10,"i",8),l.Rb(),l.Rb(),l.Rb(),l.zc(11,f,4,2,"div",9),l.Rb(),l.Nb(12,"br"),l.Sb(13,"div",2),l.Nb(14,"br"),l.Sb(15,"div",3),l.Sb(16,"span",4),l.Sb(17,"input",10),l.Zb("ngModelChange",function(e){return t.accessRequest.name=e}),l.Rb(),l.Sb(18,"label",11),l.Bc(19,"Nombre"),l.Rb(),l.Sb(20,"span",7),l.Nb(21,"i",12),l.Rb(),l.Rb(),l.Rb(),l.zc(22,y,3,1,"div",9),l.Rb(),l.Nb(23,"br"),l.Sb(24,"div",2),l.Nb(25,"br"),l.Sb(26,"div",3),l.Sb(27,"span",4),l.Sb(28,"input",13),l.Zb("ngModelChange",function(e){return t.accessRequest.company=e}),l.Rb(),l.Sb(29,"label",14),l.Bc(30,"Nombre de la compa\xf1\xeda o entidad"),l.Rb(),l.Sb(31,"span",7),l.Nb(32,"i",15),l.Rb(),l.Rb(),l.Rb(),l.zc(33,R,3,1,"div",9),l.Rb(),l.Nb(34,"br"),l.Sb(35,"div",2),l.Sb(36,"div",3),l.Sb(37,"span",4),l.Sb(38,"textarea",16),l.Zb("ngModelChange",function(e){return t.accessRequest.description=e}),l.Rb(),l.Sb(39,"label",17),l.Bc(40,"Observaci\xf3n"),l.Rb(),l.Rb(),l.Rb(),l.zc(41,q,3,1,"div",9),l.Rb(),l.Nb(42,"br"),l.Sb(43,"div",18),l.Nb(44,"button",19),l.Rb(),l.Sb(45,"div",18),l.Sb(46,"button",20),l.Zb("click",function(){return t.cancel()}),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.gc("formGroup",t.accessRequestForm),l.Bb(6),l.gc("ngModel",t.accessRequest.email),l.Bb(5),l.gc("ngIf",t.accessRequestForm.controls.email.touched&&t.accessRequestForm.controls.email.dirty&&t.accessRequestForm.controls.email.invalid),l.Bb(6),l.gc("ngModel",t.accessRequest.name),l.Bb(5),l.gc("ngIf",t.accessRequestForm.controls.name.touched&&t.accessRequestForm.controls.name.dirty&&t.accessRequestForm.controls.name.invalid),l.Bb(6),l.gc("ngModel",t.accessRequest.company),l.Bb(5),l.gc("ngIf",t.accessRequestForm.controls.company.touched&&t.accessRequestForm.controls.company.dirty&&t.accessRequestForm.controls.company.invalid),l.Bb(5),l.gc("ngModel",t.accessRequest.description),l.Bb(3),l.gc("ngIf",t.accessRequestForm.controls.description.touched&&t.accessRequestForm.controls.description.dirty&&t.accessRequestForm.controls.description.invalid),l.Bb(3),l.gc("disabled",!t.accessRequestForm.valid))},directives:[a.n,a.i,a.d,a.a,a.h,a.c,d.a,n.j,b,p.a],styles:[".button-container[_ngcontent-%COMP%]{width:48%;margin-left:2%;float:left}.error[_ngcontent-%COMP%]{color:#d32f2f;font-size:small;font-weight:700}"]}),e})();function M(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El correo electr\xf3nico es requerido "),l.Rb())}function F(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El correo electr\xf3nico es invalido "),l.Rb())}function B(e,t){if(1&e&&(l.Sb(0,"div",16),l.Nb(1,"span",17),l.zc(2,M,2,0,"span",18),l.zc(3,F,2,0,"span",18),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.verifyForm.controls.email.errors.required),l.Bb(1),l.gc("ngIf",e.verifyForm.controls.email.errors.email)}}function w(e,t){1&e&&(l.Sb(0,"span"),l.Bc(1," El token de acceso es requerido "),l.Rb())}function I(e,t){if(1&e&&(l.Sb(0,"div",16),l.Nb(1,"span",17),l.zc(2,w,2,0,"span",18),l.Rb()),2&e){const e=l.bc();l.Bb(2),l.gc("ngIf",e.verifyForm.controls.token.errors.required)}}let N=(()=>{class e{constructor(e,t,o){this.formBuilder=e,this.config=t,this.ref=o,this.layerId=this.config.data.layerId}ngOnInit(){this.validateForm()}validateForm(){this.verifyForm=this.formBuilder.group({email:[this.email,[a.m.required,a.m.email]],token:[this.token,[a.m.required]]})}cancel(){this.ref.close()}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(a.b),l.Mb(r.b),l.Mb(r.d))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-verify-access-token"]],decls:27,vars:6,consts:[[3,"formGroup"],[1,"p-g","p-fluid"],[1,"p-field","p-col-12","p-md-12"],[1,"p-inputgroup"],[1,"p-float-label"],["type","email","id","email","autofocus","","formControlName","email","pInputText","",3,"ngModel","ngModelChange"],["for","email"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["class","error",4,"ngIf"],["type","text","id","token","autofocus","","formControlName","token","pInputText","",3,"ngModel","ngModelChange"],["for","token"],[1,"pi","pi-unlock"],[1,"button-container"],["pButton","","icon","pi pi-check","label","Registrar",1,"p-button-rounded","p-button-success",3,"disabled"],["pButton","","icon","pi pi-times","label","Cancelar","type","button",1,"p-button-rounded",3,"click"],[1,"error"],[1,"pi","pi-times","error"],[4,"ngIf"]],template:function(e,t){1&e&&(l.Sb(0,"form",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Nb(3,"br"),l.Sb(4,"div",3),l.Sb(5,"span",4),l.Sb(6,"input",5),l.Zb("ngModelChange",function(e){return t.email=e}),l.Rb(),l.Sb(7,"label",6),l.Bc(8,"Correo electr\xf3nico"),l.Rb(),l.Sb(9,"span",7),l.Nb(10,"i",8),l.Rb(),l.Rb(),l.Rb(),l.zc(11,B,4,2,"div",9),l.Rb(),l.Nb(12,"br"),l.Sb(13,"div",2),l.Sb(14,"div",3),l.Sb(15,"span",4),l.Sb(16,"input",10),l.Zb("ngModelChange",function(e){return t.token=e}),l.Rb(),l.Sb(17,"label",11),l.Bc(18,"Token de acceso"),l.Rb(),l.Sb(19,"span",7),l.Nb(20,"i",12),l.Rb(),l.Rb(),l.Rb(),l.zc(21,I,3,1,"div",9),l.Rb(),l.Nb(22,"br"),l.Sb(23,"div",13),l.Nb(24,"button",14),l.Rb(),l.Sb(25,"div",13),l.Sb(26,"button",15),l.Zb("click",function(){return t.cancel()}),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.gc("formGroup",t.verifyForm),l.Bb(6),l.gc("ngModel",t.email),l.Bb(5),l.gc("ngIf",t.verifyForm.controls.email.touched&&t.verifyForm.controls.email.dirty&&t.verifyForm.controls.email.invalid),l.Bb(5),l.gc("ngModel",t.token),l.Bb(5),l.gc("ngIf",t.verifyForm.controls.token.touched&&t.verifyForm.controls.token.dirty&&t.verifyForm.controls.token.invalid),l.Bb(3),l.gc("disabled",!t.verifyForm.valid))},directives:[a.n,a.i,a.d,a.a,a.h,a.c,d.a,n.j,p.a],styles:[".button-container[_ngcontent-%COMP%]{width:48%;margin-left:2%;float:left}.error[_ngcontent-%COMP%]{color:#d32f2f;font-size:small;font-weight:700}"]}),e})();var z=o("WaYN"),k=o("Nf9I"),E=o("Gxio");const x=[{path:"",component:(()=>{class e{constructor(e,t,o,n,s){this.route=e,this.service=t,this.confirmService=o,this.messageService=n,this.dialogService=s,this.route.queryParams.subscribe(e=>{this.name=e.name,this.getLayerInfo()})}ngOnInit(){this.initializeMap(),this.addControls()}addControls(){this.addScaleControl(),this.addSearchControl(),this.addZoomControl(),this.addDownloadControl()}addLogoControl(){const e=L.control({position:"topleft"});e.onAdd=()=>{const e=L.DomUtil.create("div","info");return e.innerHTML='<img src="assets/images/logo-corpocaldas.png" width="139px" height="100px"></img>',e},e.addTo(this.map)}addDownloadControl(){const e=document.getElementsByClassName("leaflet-top leaflet-left")[0],t=document.createElement("button");t.classList.add("leaflet-control"),t.classList.add("leaflet-control-layers"),t.setAttribute("style","padding: 5px 7px !important; cursor: pointer;"),t.addEventListener("click",()=>{this.downloadLayer()});const o=document.createElement("i");o.classList.add("pi"),o.classList.add("pi-download"),t.appendChild(o),e.appendChild(t)}addScaleControl(){const e=L.control.scale({position:"bottomleft"});this.map.addControl(e)}addSearchControl(){const e=L.esri.Geocoding.geosearch({position:"topright",placeholder:"Buscar lugares o direcciones"}).addTo(this.map),t=L.layerGroup().addTo(this.map);e.on("results",e=>{t.clearLayers(),console.log(e);for(let o=e.results.length-1;o>=0;o--)t.addLayer(L.marker(e.results[0].latlng))})}addZoomControl(){const e=L.control.zoom({position:"topright"});this.map.addControl(e)}downloadLayer(){1===this.layer.accessGranted?this.sendRequestAccessLayer():2===this.layer.accessGranted&&this.haveCredentials()}downloadShapefile(){const e=document.createElement("a");e.target="_blank",e.download=this.name,e.href="http://54.91.220.9:8080/geoserver/"+this.layer.workspace+"/ows?service=WFS&version=1.0.0&request=GetFeature&typeName="+this.layer.workspace+"%3A"+this.name+"&maxFeatures=50&outputFormat=SHAPE-ZIP",document.body.appendChild(e),e.click(),document.body.removeChild(e),e.remove()}getLayerInfo(){this.service.getLayerByName(this.name).subscribe(e=>{this.layer=e,this.name=this.layer.referenceName;const t=L.tileLayer.wms("http://54.91.220.9:8080/geoserver/"+this.layer.workspace+"/wms?",{layers:this.name,format:"image/png",transparent:!0}).addTo(this.map);this.layersControl.addOverlay(t,this.layer.name)},e=>{console.error(e)})}highlightFeature(e){e.target.setStyle({weight:5,opacity:1,color:"#DFA612",fillOpacity:1,fillColor:"#FAE042"})}infoFeature(e){let t="";for(const o in e)t+=`<b>${o}:</b> ${e[o]} <br>`;return t}initializeMap(){const e=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),t={"Open Street Map":e,"Esri Map":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})};this.map=L.map("map",{center:L.latLng(5.309346,-75.307057),zoomControl:!1,zoom:10,layers:[e]}),this.addLogoControl(),this.layersControl=L.control.layers(t,null,{position:"topleft",collapsed:!1}),this.layersControl.addTo(this.map)}resetFeature(e){e.target.setStyle({weight:3,opacity:.5,color:"black",fillOpacity:.8,fillColor:"transparent"})}haveCredentials(){this.confirmService.confirm({message:`\xbfTienes las credenciales para acceder a ${this.layer.name}?`,acceptLabel:"Si",rejectLabel:"No",accept:()=>{this.verifyTokenAccess()},reject:e=>{e===i.a.REJECT&&this.sendRequestAccessLayer()}})}verifyTokenAccess(){this.dialogService.open(N,{width:"50%",data:{layerId:this.layer.id},header:"Verificaci\xf3n de token"})}sendRequestAccessLayer(){this.dialogService.open(C,{width:"50%",data:{layer:this.layer},header:`Petici\xf3n de acceso a ${this.layer.name}`}).onClose.subscribe(e=>{null!=e&&this.service.saveAccessRequest(e).subscribe(()=>{1===this.layer.accessGranted?this.downloadShapefile():this.messageService.add({severity:"success",summary:"Petici\xf3n de acceso",detail:"La petici\xf3n de acceso fue radicada exitosamente, en el transcurso de las 24 horas se le dar\xe1 acceso"})},e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(s.a),l.Mb(z.a),l.Mb(i.b),l.Mb(i.h),l.Mb(r.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-viewer"]],features:[l.Ab([i.h,r.a,i.b])],decls:5,vars:0,consts:[["header","Confirmaci\xf3n","icon","pi pi-exclamation-triangle"],[1,"map-container"],[1,"map-frame"],["id","map"]],template:function(e,t){1&e&&(l.Nb(0,"p-confirmDialog",0),l.Nb(1,"p-toast"),l.Sb(2,"div",1),l.Sb(3,"div",2),l.Nb(4,"div",3),l.Rb(),l.Rb())},directives:[k.a,E.a],styles:[".map-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}#map[_ngcontent-%COMP%], .map-frame[_ngcontent-%COMP%]{height:100%}"]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[s.e.forChild(x)],s.e]}),e})();var A=o("arFO");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[n.b,G,a.e,a.k,r.c,k.b,E.b,d.b,u,p.b,A.b]]}),e})()}}]);