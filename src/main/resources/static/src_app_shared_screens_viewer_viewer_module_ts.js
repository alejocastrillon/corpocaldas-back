"use strict";
(self["webpackChunkfront_corpocaldas"] = self["webpackChunkfront_corpocaldas"] || []).push([["src_app_shared_screens_viewer_viewer_module_ts"],{

/***/ 9321:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/screens/viewer/register-access-request/register-access-request.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterAccessRequestComponent: () => (/* binding */ RegisterAccessRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_model_AccessRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/AccessRequest */ 1235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6755);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);









function RegisterAccessRequestComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El correo electr\u00F3nico es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterAccessRequestComponent_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El correo electr\u00F3nico es invalido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterAccessRequestComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterAccessRequestComponent_div_11_span_2_Template, 2, 0, "span", 23)(3, RegisterAccessRequestComponent_div_11_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.accessRequestForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.accessRequestForm.controls.email.errors.email);
  }
}
function RegisterAccessRequestComponent_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterAccessRequestComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterAccessRequestComponent_div_22_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.accessRequestForm.controls.name.errors.required);
  }
}
function RegisterAccessRequestComponent_div_33_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre de la compa\u00F1\u00EDa o entidad es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterAccessRequestComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterAccessRequestComponent_div_33_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.accessRequestForm.controls.company.errors.required);
  }
}
function RegisterAccessRequestComponent_div_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El objeto de la descarga es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterAccessRequestComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterAccessRequestComponent_div_42_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.accessRequestForm.controls.description.errors.required);
  }
}
class RegisterAccessRequestComponent {
  constructor(formBuilder, config, ref) {
    this.formBuilder = formBuilder;
    this.config = config;
    this.ref = ref;
    this.accessRequest = new src_app_model_AccessRequest__WEBPACK_IMPORTED_MODULE_0__.AccessRequest();
    debugger;
    this.accessRequest.idLayer = this.config.data.layer.id;
    this.accessRequest.nameLayer = this.config.data.layer.name;
    this.accessRequest.accessGrantedLayer = this.config.data.layer.accessGranted;
    this.validateForm();
  }
  ngOnInit() {
    this.validateForm();
  }
  validateForm() {
    this.accessRequestForm = this.formBuilder.group({
      'email': [this.accessRequest.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      'name': [this.accessRequest.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      'company': [this.accessRequest.company, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      'description': [this.accessRequest.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  saveAccessRequest() {
    console.log(this.accessRequest);
    this.ref.close(this.accessRequest);
  }
  cancel() {
    this.ref.close(null);
  }
  static #_ = this.ɵfac = function RegisterAccessRequestComponent_Factory(t) {
    return new (t || RegisterAccessRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RegisterAccessRequestComponent,
    selectors: [["app-register-access-request"]],
    decls: 48,
    vars: 10,
    consts: [[3, "ngSubmit", "formGroup"], [1, "p-grid", "p-fluid"], [1, "p-field", "p-col-12", "p-md-12"], [1, "p-inputgroup"], [1, "p-float-label"], ["type", "email", "id", "email", "autofocus", "", "formControlName", "email", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "email"], [1, "p-inputgroup-addon"], [1, "pi", "pi-envelope"], ["class", "error", 4, "ngIf"], ["type", "text", "id", "name", "autofocus", "", "formControlName", "name", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "name"], [1, "pi", "pi-user"], ["type", "text", "id", "company", "autofocus", "", "formControlName", "company", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "company"], [1, "pi", "pi-id-card"], ["id", "description", "rows", "5", "cols", "30", "formControlName", "description", "pInputTextarea", "", 3, "ngModelChange", "ngModel"], ["for", "description"], [1, "button-container"], ["pButton", "", "icon", "pi pi-check", "label", "Descargar", 1, "p-button-rounded", "p-button-success", 3, "disabled"], ["pButton", "", "icon", "pi pi-times", "label", "Cancelar", "type", "button", 1, "p-button-rounded", 3, "click"], [1, "error"], [1, "pi", "pi-times", "error"], [4, "ngIf"]],
    template: function RegisterAccessRequestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterAccessRequestComponent_Template_form_ngSubmit_0_listener() {
          return ctx.accessRequestForm.valid && ctx.saveAccessRequest();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "span", 4)(6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterAccessRequestComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.accessRequest.email, $event) || (ctx.accessRequest.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterAccessRequestComponent_div_11_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3)(16, "span", 4)(17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterAccessRequestComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.accessRequest.name, $event) || (ctx.accessRequest.name = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RegisterAccessRequestComponent_div_22_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3)(27, "span", 4)(28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterAccessRequestComponent_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.accessRequest.company, $event) || (ctx.accessRequest.company = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Nombre de la compa\u00F1\u00EDa o entidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterAccessRequestComponent_div_33_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3)(38, "span", 4)(39, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterAccessRequestComponent_Template_textarea_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.accessRequest.description, $event) || (ctx.accessRequest.description = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Objeto de la descarga");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, RegisterAccessRequestComponent_div_42_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18)(47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterAccessRequestComponent_Template_button_click_47_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.accessRequestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.accessRequest.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accessRequestForm.controls.email.touched && ctx.accessRequestForm.controls.email.dirty && ctx.accessRequestForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.accessRequest.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accessRequestForm.controls.name.touched && ctx.accessRequestForm.controls.name.dirty && ctx.accessRequestForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.accessRequest.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accessRequestForm.controls.company.touched && ctx.accessRequestForm.controls.company.dirty && ctx.accessRequestForm.controls.company.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.accessRequest.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accessRequestForm.controls.description.touched && ctx.accessRequestForm.controls.description.dirty && ctx.accessRequestForm.controls.description.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.accessRequestForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__.InputTextarea],
    styles: [".button-container[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-left: 2%;\n  float: left;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: small;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NjcmVlbnMvdmlld2VyL3JlZ2lzdGVyLWFjY2Vzcy1yZXF1ZXN0L3JlZ2lzdGVyLWFjY2Vzcy1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiAjZDMyZjJmO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1725:
/*!****************************************************************!*\
  !*** ./src/app/shared/screens/viewer/terms/terms.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsComponent: () => (/* binding */ TermsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 6755);




function TermsComponent_p_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El usuario solicitante reconoce que la informaci\u00F3n a que tenga acceso es de propiedad exclusiva de la Corporaci\u00F3n Aut\u00F3noma Regional de Caldas \u2013 CORPOCALDAS de conformidad con la ley 23 de 1982, la Decisi\u00F3n Andina 351 de 1993 r\u00E9gimen com\u00FAn sobre derechos de autor y derechos conexos, la ley 44 de 1993 y dem\u00E1s normas relacionadas con los derechos de autor. Por lo anterior al usuario no le asiste ning\u00FAn derecho de propiedad intelectual, pudi\u00E9ndolos utilizar \u00FAnicamente para el desarrollo de la presente solicitud, sin que se entiendan cedidos o licenciados a ning\u00FAn t\u00EDtulo. De igual forma el usuario deber\u00E1 respetar los derechos de autor, para lo cual deber\u00E1 realizar las citas correspondientes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TermsComponent_p_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El usuario solicitante reconoce que la informaci\u00F3n a que tenga acceso es de propiedad exclusiva del generador del dato de conformidad con la ley 23 de 1982, la Decisi\u00F3n Andina 351 de 1993 r\u00E9gimen com\u00FAn sobre derechos de autor y derechos conexos, la ley 44 de 1993 y dem\u00E1s normas relacionadas con los derechos de autor. Por lo anterior al usuario no le asiste ning\u00FAn derecho de propiedad intelectual, pudi\u00E9ndolos utilizar \u00FAnicamente para el desarrollo de la presente solicitud, sin que se entiendan cedidos o licenciados a ning\u00FAn t\u00EDtulo. De igual forma el usuario deber\u00E1 respetar los derechos de autor, para lo cual deber\u00E1 realizar las citas correspondientes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class TermsComponent {
  constructor(ref, config) {
    this.ref = ref;
    this.config = config;
    this.layer = this.config.data.layer;
  }
  ngOnInit() {}
  close(agree) {
    this.ref.close(agree);
  }
  static #_ = this.ɵfac = function TermsComponent_Factory(t) {
    return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__.DynamicDialogConfig));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TermsComponent,
    selectors: [["app-terms"]],
    decls: 57,
    vars: 2,
    consts: [[1, "terms"], [1, "body"], [1, "data-table", "esri-widget__table"], ["colspan", "2"], [4, "ngIf"], [1, "buttons"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "No Acepto", 1, "p-button-warning", "p-button-sm", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Acepto", 1, "p-button-success", "p-button-sm", 3, "click"]],
    template: function TermsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plataforma Virtual SIG-SIR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "T\u00E9rminos y Condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "table", 2)(8, "thead")(9, "tr")(10, "th", 3)(11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datos Generales de la informaci\u00F3n entregada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody")(14, "tr")(15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr")(20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Origen de Coordenadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Proyecci\u00F3n: Transverse_Mercator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " False_Easting: 1000000,00000000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " False_Northing: 1000000,00000000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Central_Meridian: -74,08091667 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Scale_Factor: 1,00000000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Latitude_Of_Origin: 4,59904722 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Unidad Lineal: Meter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr")(38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Proyecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Colombia_Bogota_Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr")(43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sistema de Coordenadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Planas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr")(48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "EPSG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "21897");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TermsComponent_p_52_Template, 2, 0, "p", 4)(53, TermsComponent_p_53_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5)(55, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_55_listener() {
          return ctx.close(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_56_listener() {
          return ctx.close(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layer.accessGranted === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layer.accessGranted === 2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective],
    styles: [".body[_ngcontent-%COMP%] {\n  clear: both;\n  margin: 10px;\n  overflow-y: auto;\n  padding: 10px;\n}\n.body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.esri-widget__table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .esri-widget__table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.1em 0.1em !important;\n  border: 1px solid #ddd;\n}\n\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.terms[_ngcontent-%COMP%] {\n  min-width: 250px !important;\n  max-width: 800px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even), thead[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n\n\n@media screen and (max-height: 823px) and (max-width: 411px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 510px;\n  }\n}\n\n\n@media screen and (max-height: 812px) and (max-width: 375px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 309px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 499px;\n  }\n}\n\n\n@media screen and (max-height: 731px) and (max-width: 411px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 418px;\n  }\n}\n\n\n@media screen and (max-height: 736px) and (max-width: 414px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 423px;\n  }\n}\n\n\n@media screen and (max-height: 667px) and (max-width: 375px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 354px;\n  }\n}\n\n\n@media screen and (max-height: 640px) and (max-width: 360px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 327px;\n  }\n}\n\n\n@media screen and (max-height: 568px) and (max-width: 320px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  #body[_ngcontent-%COMP%] {\n    height: 255px;\n  }\n}\n\n\n@media screen and (max-height: 653px) and (max-width: 280px) {\n  .terms[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NjcmVlbnMvdmlld2VyL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQU1BOztFQUVFLCtCQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxTQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTs7RUFFRSx5QkFBQTtBQUhGOztBQU1BLGVBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBQTtFQUhGO0VBTUE7SUFDRSxhQUFBO0VBSkY7QUFDRjtBQU9BLGFBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBQTtFQUxGO0VBUUE7SUFDRSxhQUFBO0VBTkY7QUFDRjtBQVNBLFlBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBQTtFQVBGO0VBVUE7SUFDRSxhQUFBO0VBUkY7QUFDRjtBQVdBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLFlBQUE7RUFURjtFQVlBO0lBQ0UsYUFBQTtFQVZGO0FBQ0Y7QUFhQSxpQkFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFBO0VBWEY7RUFjQTtJQUNFLGFBQUE7RUFaRjtBQUNGO0FBZUEsY0FBQTtBQUNBO0VBQ0U7SUFDRSxZQUFBO0VBYkY7RUFnQkE7SUFDRSxhQUFBO0VBZEY7QUFDRjtBQWlCQSxnQkFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFBO0VBZkY7RUFrQkE7SUFDRSxhQUFBO0VBaEJGO0FBQ0Y7QUFtQkEsZ0JBQUE7QUFFQTtFQUNFO0lBQ0UsWUFBQTtFQWxCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgcCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICB0aGVhZCB0ciB0aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5lc3JpLXdpZGdldF9fdGFibGUgdHIgdGQsXG4uZXNyaS13aWRnZXRfX3RhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMC4xZW0gMC4xZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuaDIsXG5oNCB7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRlcm1zIHtcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbiksXG50aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi8qIFBpeGVsIDIgWEwgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MjNweCkgYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XG4gIC50ZXJtcyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG5cbiAgI2JvZHkge1xuICAgIGhlaWdodDogNTEwcHg7XG4gIH1cbn1cblxuLyogaVBob25lIFggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MTJweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC50ZXJtcyB7XG4gICAgd2lkdGg6IDMwOXB4O1xuICB9XG5cbiAgI2JvZHkge1xuICAgIGhlaWdodDogNDk5cHg7XG4gIH1cbn1cblxuLyogUGl4ZWwgMiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDczMXB4KSBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcbiAgLnRlcm1zIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cblxuICAjYm9keSB7XG4gICAgaGVpZ2h0OiA0MThweDtcbiAgfVxufVxuXG4vKiBpUGhvbmUgNi83LzggUGx1cyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDczNnB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLnRlcm1zIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cblxuICAjYm9keSB7XG4gICAgaGVpZ2h0OiA0MjNweDtcbiAgfVxufVxuXG4vKiBpUGhvbmUgNi83LzggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NjdweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC50ZXJtcyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgI2JvZHkge1xuICAgIGhlaWdodDogMzU0cHg7XG4gIH1cbn1cblxuLyogR2FsYXh5IFM1ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAudGVybXMge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gICNib2R5IHtcbiAgICBoZWlnaHQ6IDMyN3B4O1xuICB9XG59XG5cbi8qIGlQaG9uZSA1L1NFICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAudGVybXMge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gICNib2R5IHtcbiAgICBoZWlnaHQ6IDI1NXB4O1xuICB9XG59XG5cbi8qIEdhbGF4eSBGb2xkICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NTNweCkgYW5kIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gIC50ZXJtcyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2789:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/screens/viewer/verify-access-token/verify-access-token.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyAccessTokenComponent: () => (/* binding */ VerifyAccessTokenComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/home.service */ 9910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6755);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ 1564);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 8361);











function VerifyAccessTokenComponent_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El correo electr\u00F3nico es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VerifyAccessTokenComponent_div_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El correo electr\u00F3nico es invalido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VerifyAccessTokenComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerifyAccessTokenComponent_div_12_span_2_Template, 2, 0, "span", 18)(3, VerifyAccessTokenComponent_div_12_span_3_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.verifyForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.verifyForm.controls.email.errors.email);
  }
}
function VerifyAccessTokenComponent_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El token de acceso es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VerifyAccessTokenComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerifyAccessTokenComponent_div_22_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.verifyForm.controls.token.errors.required);
  }
}
class VerifyAccessTokenComponent {
  constructor(formBuilder, config, ref, service, messageService) {
    this.formBuilder = formBuilder;
    this.config = config;
    this.ref = ref;
    this.service = service;
    this.messageService = messageService;
    this.layerId = this.config.data.layerId;
  }
  ngOnInit() {
    this.validateForm();
  }
  validateForm() {
    this.verifyForm = this.formBuilder.group({
      'email': [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      'token': [this.token, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  verifyAccess() {
    this.service.verifyAccess(this.token, this.email, this.layerId).subscribe(res => {
      this.ref.close(res);
    }, err => {
      this.messageService.add({
        severity: 'error',
        summary: 'Verificación de token',
        detail: 'Token invalido'
      });
      console.error(err);
    });
  }
  cancel() {
    this.ref.close();
  }
  static #_ = this.ɵfac = function VerifyAccessTokenComponent_Factory(t) {
    return new (t || VerifyAccessTokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_home_service__WEBPACK_IMPORTED_MODULE_0__.HomeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VerifyAccessTokenComponent,
    selectors: [["app-verify-access-token"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService])],
    decls: 28,
    vars: 6,
    consts: [[3, "ngSubmit", "formGroup"], [1, "p-g", "p-fluid"], [1, "p-field", "p-col-12", "p-md-12"], [1, "p-inputgroup"], [1, "p-float-label"], ["type", "email", "id", "email", "autofocus", "", "formControlName", "email", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "email"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["class", "error", 4, "ngIf"], ["type", "text", "id", "token", "autofocus", "", "formControlName", "token", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "token"], [1, "pi", "pi-unlock"], [1, "button-container"], ["pButton", "", "icon", "pi pi-check", "label", "Verificar", 1, "p-button-rounded", "p-button-success", 3, "disabled"], ["pButton", "", "icon", "pi pi-times", "label", "Cancelar", "type", "button", 1, "p-button-rounded", 3, "click"], [1, "error"], [1, "pi", "pi-times", "error"], [4, "ngIf"]],
    template: function VerifyAccessTokenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function VerifyAccessTokenComponent_Template_form_ngSubmit_1_listener() {
          return ctx.verifyForm.valid && ctx.verifyAccess();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "span", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function VerifyAccessTokenComponent_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VerifyAccessTokenComponent_div_12_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "span", 4)(17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function VerifyAccessTokenComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.token, $event) || (ctx.token = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Token de acceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VerifyAccessTokenComponent_div_22_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyAccessTokenComponent_Template_button_click_27_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.verifyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifyForm.controls.email.touched && ctx.verifyForm.controls.email.dirty && ctx.verifyForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifyForm.controls.token.touched && ctx.verifyForm.controls.token.dirty && ctx.verifyForm.controls.token.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.verifyForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_messages__WEBPACK_IMPORTED_MODULE_7__.Messages, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText],
    styles: [".button-container[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-left: 2%;\n  float: left;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: small;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NjcmVlbnMvdmlld2VyL3ZlcmlmeS1hY2Nlc3MtdG9rZW4vdmVyaWZ5LWFjY2Vzcy10b2tlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogI2QzMmYyZjtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9866:
/*!****************************************************************!*\
  !*** ./src/app/shared/screens/viewer/viewer-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewerRoutingModule: () => (/* binding */ ViewerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer.component */ 6260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _viewer_component__WEBPACK_IMPORTED_MODULE_0__.ViewerComponent
}];
class ViewerRoutingModule {
  static #_ = this.ɵfac = function ViewerRoutingModule_Factory(t) {
    return new (t || ViewerRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ViewerRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6260:
/*!***********************************************************!*\
  !*** ./src/app/shared/screens/viewer/viewer.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewerComponent: () => (/* binding */ ViewerComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _register_access_request_register_access_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-access-request/register-access-request.component */ 9321);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms/terms.component */ 1725);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.service */ 9910);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ 8160);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 1225);












class ViewerComponent {
  constructor(route, service, router, messageService, dialogService) {
    this.route = route;
    this.service = service;
    this.router = router;
    this.messageService = messageService;
    this.dialogService = dialogService;
    this.geoServer = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.geoServer;
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.getLayerInfo();
    });
  }
  ngOnInit() {
    this.initializeMap();
    this.addControls();
  }
  addControls() {
    this.addScaleControl();
    this.addSearchControl();
    this.addZoomControl();
    this.addBackControl();
    this.addDownloadControl();
  }
  addBackControl() {
    const back = L.control({
      position: 'topleft'
    });
    back.onAdd = () => {
      const button = L.DomUtil.create('button', 'btn-control');
      button.classList.add('leaflet-control', 'leaflet-control-layers');
      button.title = 'Volver';
      button.addEventListener('click', () => {
        this.router.navigate(['./home']);
      });
      const icon = document.createElement('i');
      icon.classList.add('pi', 'pi-arrow-circle-left');
      button.appendChild(icon);
      return button;
    };
    back.addTo(this.map);
  }
  /**
   * Añade logo al mapa
   */
  addLogoControl() {
    const logo = L.control({
      position: 'topleft'
    });
    logo.onAdd = () => {
      const div = L.DomUtil.create('div', 'info');
      div.innerHTML = `<img src="assets/images/logo-corpocaldas.png" width="139px" height="100px"></img>`;
      div.style.cursos = 'pointer';
      div.addEventListener('click', () => {
        this.router.navigate(['./home']);
      });
      return div;
    };
    logo.addTo(this.map);
  }
  addDownloadControl() {
    const download = L.control({
      position: 'topleft'
    });
    download.onAdd = () => {
      const button = L.DomUtil.create('button', 'btn-control');
      button.classList.add('leaflet-control', 'leaflet-control-layers');
      button.title = 'Descargar';
      button.addEventListener('click', () => {
        this.downloadLayer();
      });
      const icon = document.createElement('i');
      icon.classList.add('pi', 'pi-download');
      button.appendChild(icon);
      return button;
    };
    download.addTo(this.map);
  }
  /**
   * Añade control de Escala al mapa.
   */
  addScaleControl() {
    const scaleControl = L.control.scale({
      position: 'bottomleft'
    });
    this.map.addControl(scaleControl);
  }
  /**
   * Añade control de Búsqueda al mapa
   */
  addSearchControl() {
    const searchControl = L.esri.Geocoding.geosearch({
      position: 'topright',
      placeholder: 'Buscar lugares o direcciones'
    }).addTo(this.map);
    const results = L.layerGroup().addTo(this.map);
    searchControl.on('results', data => {
      results.clearLayers();
      console.log(data);
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[0].latlng));
      }
    });
  }
  /**
   * Añade control de Zoom al mapa
   */
  addZoomControl() {
    const zoomControl = L.control.zoom({
      position: 'topright'
    });
    this.map.addControl(zoomControl);
  }
  downloadLayer() {
    this.modalTerms();
  }
  modalTerms() {
    this.dialogService.open(_terms_terms_component__WEBPACK_IMPORTED_MODULE_1__.TermsComponent, {
      width: 'auto',
      closable: false,
      closeOnEscape: false,
      data: {
        layer: this.layer
      }
    }).onClose.subscribe(result => {
      if (result) {
        this.sendRequestAccessLayer();
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Descarga',
          detail: 'Debido a que no aceptó los términos de acceso a la información no podrá descargarla.'
        });
      }
    });
  }
  downloadShapefile() {
    this.messageService.add({
      severity: 'success',
      summary: 'Descarga',
      detail: 'En un momento será redirigido a la descarga.'
    });
    const link = document.createElement('a');
    link.target = '_blank';
    link.download = this.name;
    link.href = this.geoServer + this.layer.nameWorkspace.replace(' ', '_') + '/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=' + this.layer.nameWorkspace.replace(' ', '_') + '%3A' + this.name + '&outputFormat=SHAPE-ZIP';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
  }
  getLayerInfo() {
    this.service.getLayer(this.id).subscribe(res => {
      this.layer = res;
      this.name = this.layer.referenceName;
      const layer = L.tileLayer.wms(this.geoServer + res.nameWorkspace.replace(' ', '_') + '/wms?', {
        layers: this.name,
        format: 'image/png',
        transparent: true
      }).addTo(this.map);
      this.layersControl.addOverlay(layer, this.layer.name);
    }, err => {
      console.error(err);
    });
  }
  /**
   * Resalta un feature de una capa determinada cuando el mouse esté sobre él.
   * @param e Información del feature
   */
  highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042'
    });
  }
  /**
   * Datos del feature para ser mostrados en los popups.
   * @param properties Propiedades del feature
   */
  infoFeature(properties) {
    let dataFeature = '';
    // tslint:disable-next-line:forin
    for (const key in properties) {
      dataFeature += `<b>${key}:</b> ${properties[key]} <br>`;
    }
    return dataFeature;
  }
  initializeMap() {
    const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    const esriMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    const baselayers = {
      'Open Street Map': openStreetMap,
      'Esri Map': esriMap
    };
    this.map = L.map('map', {
      center: L.latLng(5.309346, -75.307057),
      zoomControl: false,
      zoom: 10,
      layers: [openStreetMap]
    });
    this.addLogoControl();
    this.layersControl = L.control.layers(baselayers, null, {
      position: 'topleft',
      collapsed: false
    });
    this.layersControl.addTo(this.map);
  }
  /**
   * Limpia la animación cuando el feature haya sido dejado por el mouse.
   * @param e Información del feature
   */
  resetFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: 'black',
      fillOpacity: 0.8,
      fillColor: 'transparent'
    });
  }
  haveCredentials() {
    this.sendRequestAccessLayer();
  }
  sendRequestAccessLayer() {
    const dialog = this.dialogService.open(_register_access_request_register_access_request_component__WEBPACK_IMPORTED_MODULE_0__.RegisterAccessRequestComponent, {
      width: '50%',
      data: {
        layer: this.layer
      },
      header: `Acceso a ${this.layer.name}`
    });
    dialog.onClose.subscribe(res => {
      if (res !== null && res !== undefined) {
        this.service.saveAccessRequest(res).subscribe(() => {
          this.downloadShapefile();
        }, err => {
          console.log(err);
        });
      }
    });
  }
  static #_ = this.ɵfac = function ViewerComponent_Factory(t) {
    return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ViewerComponent,
    selectors: [["app-viewer"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService, primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService])],
    decls: 5,
    vars: 0,
    consts: [["header", "Confirmaci\u00F3n", "icon", "pi pi-exclamation-triangle"], [1, "map-container"], [1, "map-frame"], ["id", "map"]],
    template: function ViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-confirmDialog", 0)(1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialog, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast],
    styles: [".map-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.map-frame[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NjcmVlbnMvdmlld2VyL3ZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLm1hcC1mcmFtZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9987:
/*!********************************************************!*\
  !*** ./src/app/shared/screens/viewer/viewer.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewerModule: () => (/* binding */ ViewerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _viewer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer-routing.module */ 9866);
/* harmony import */ var _viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer.component */ 6260);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 8160);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var _register_access_request_register_access_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-access-request/register-access-request.component */ 9321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 6755);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var _verify_access_token_verify_access_token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-access-token/verify-access-token.component */ 2789);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms/terms.component */ 1725);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/messages */ 1564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
















class ViewerModule {
  static #_ = this.ɵfac = function ViewerModule_Factory(t) {
    return new (t || ViewerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ViewerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _viewer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewerRoutingModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DynamicDialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_12__.MessagesModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextareaModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ViewerModule, {
    declarations: [_viewer_component__WEBPACK_IMPORTED_MODULE_1__.ViewerComponent, _register_access_request_register_access_request_component__WEBPACK_IMPORTED_MODULE_2__.RegisterAccessRequestComponent, _verify_access_token_verify_access_token_component__WEBPACK_IMPORTED_MODULE_3__.VerifyAccessTokenComponent, _terms_terms_component__WEBPACK_IMPORTED_MODULE_4__.TermsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _viewer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewerRoutingModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DynamicDialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_12__.MessagesModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextareaModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule]
  });
})();

/***/ }),

/***/ 7058:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputtextarea.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTextarea: () => (/* binding */ InputTextarea),
/* harmony export */   InputTextareaModule: () => (/* binding */ InputTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);





/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
class InputTextarea {
  el;
  ngModel;
  control;
  cd;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  filled;
  cachedScrollHeight;
  ngModelSubscription;
  ngControlSubscription;
  constructor(el, ngModel, control, cd) {
    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
  }
  ngOnInit() {
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = 'auto';
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = 'scroll';
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = 'hidden';
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static ɵfac = function InputTextarea_Factory(t) {
    return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: InputTextarea,
    selectors: [["", "pInputTextarea", ""]],
    hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
    hostVars: 4,
    hostBindings: function InputTextarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
      }
    },
    inputs: {
      autoResize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoResize", "autoResize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      onResize: "onResize"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextarea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pInputTextarea]',
      host: {
        class: 'p-inputtextarea p-inputtext p-component p-element',
        '[class.p-filled]': 'filled',
        '[class.p-inputtextarea-resizable]': 'autoResize'
      }
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    autoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }]
  });
})();
class InputTextareaModule {
  static ɵfac = function InputTextareaModule_Factory(t) {
    return new (t || InputTextareaModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InputTextareaModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextareaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_shared_screens_viewer_viewer_module_ts.js.map