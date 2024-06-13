"use strict";
(self["webpackChunkfront_corpocaldas"] = self["webpackChunkfront_corpocaldas"] || []).push([["common"],{

/***/ 9910:
/*!*****************************************************!*\
  !*** ./src/app/shared/screens/home/home.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeService: () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class HomeService {
  constructor(http) {
    this.http = http;
  }
  getLayers(name, accessGranted, visible, page, size) {
    let params = this.buildParams(name, accessGranted, visible, page, size);
    return this.http.get(`/api/layers?${params}`);
  }
  buildParams(name, accessGranted, visible, page, size) {
    let params = '';
    if (name !== null && name !== undefined) {
      params += `name=${name}&`;
    }
    if (accessGranted !== null && accessGranted !== undefined) {
      params += `access_granted=${accessGranted}&`;
    }
    if (page !== null && page !== undefined) {
      params += `page=${page}&`;
    }
    if (size !== null && size !== undefined) {
      params += `size=${size}&`;
    }
    if (visible !== null && visible !== undefined) {
      params += `visible=${visible}&`;
    }
    return params;
  }
  getLayer(id) {
    return this.http.get(`/api/layers/${id}`);
  }
  getLayerByName(name) {
    return this.http.get(`/api/layers/name/${name}`);
  }
  saveAccessRequest(accessRequest) {
    return this.http.post('/api/access-request', accessRequest);
  }
  getWorkspace(workspaceId) {
    return this.http.get(`/api/workspaces/${workspaceId}`);
  }
  buildTree(workspaces) {
    return Object.keys(workspaces).reduce((accumulator, key) => {
      let value = workspaces[key];
      let node = {};
      node.label = value.name;
      node.data = value;
      node.data.object = "workspace";
      node.leaf = !value.hasChildren;
      node.data.icon = 'pi pi-fw pi-images';
      if (value != null) {
        if (typeof value["childrens"] === "object" && value["childrens"].length > 0) {
          node.children = this.buildTree(value["childrens"]);
        } else {
          node.children = [];
        }
      }
      return accumulator.concat(node);
    }, []);
  }
  getWorkspaces(name, page, size) {
    let params = this.buildWorkspaceParamsFilter(name, page, size);
    return this.http.get(`/api/workspaces?${params}`);
  }
  buildWorkspaceParamsFilter(name, page, size) {
    let params = '';
    if (name !== null && name !== undefined) {
      params += `name=${name}&`;
    }
    if (page !== null && page !== undefined) {
      params += `page=${page}&`;
    }
    if (size !== null && size !== undefined) {
      params += `size=${size}&`;
    }
    return params;
  }
  verifyAccess(token, email, layerId) {
    const form = new FormData();
    form.append('accessToken', token);
    form.append('email', email);
    form.append('layerId', layerId.toString());
    return this.http.post('/api/access-request/validate-access', form);
  }
  getXmlData(fileName) {
    return this.http.get(`/api/files/${fileName}`);
  }
  static #_ = this.ɵfac = function HomeService_Factory(t) {
    return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HomeService,
    factory: HomeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map