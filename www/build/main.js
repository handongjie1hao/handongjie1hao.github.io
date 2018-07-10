webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCfgProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_config__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCfgProperties = /** @class */ (function () {
    function AppCfgProperties(injector) {
        this.injector = injector;
        this.appConfig = injector.get(__WEBPACK_IMPORTED_MODULE_1__models_app_config__["a" /* APP_CONFIG */]);
    }
    AppCfgProperties.prototype.getInstance = function () {
        return this.appConfig;
    };
    AppCfgProperties = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AppCfgProperties);
    return AppCfgProperties;
}());

//# sourceMappingURL=appConfig.properties.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_pwd_forget_pwd__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appConfig_properties__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, appConfig, loginService, userService) {
        this.navCtrl = navCtrl;
        this.appConfig = appConfig;
        this.loginService = loginService;
        this.userService = userService;
        this.isSmsLogin = false;
    }
    LoginPage.prototype.sendLoginSms = function () {
        var _this = this;
        this.loginService.sendSms(this.userName).subscribe(function (data) {
            _this.smsCountDown();
        }, __WEBPACK_IMPORTED_MODULE_7__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    LoginPage.prototype.userNameValid = function () {
        return this.userName && (this.userName.length == 11 || this.userName.length == 18);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var DATA = {
            isSmsLogin: this.isSmsLogin,
            loginPassword: this.password,
            userName: this.userName + "",
            smsCode: this.smsCode + ""
        };
        this.loginService.doLogin(DATA).subscribe(function (val) {
            _this.userService.loginUesr(val);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, __WEBPACK_IMPORTED_MODULE_7__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //获取验证码
    LoginPage.prototype.smsCountDown = function () {
        var _this = this;
        this.countdownNum = this.appConfig.getInstance().smsInterval;
        var inter = setInterval(function () {
            if (_this.countdownNum) {
                --_this.countdownNum;
            }
            else {
                clearInterval(inter);
            }
        }, 1000);
    };
    LoginPage.prototype.toForgetPwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forget_pwd_forget_pwd__["a" /* ForgetPwdPage */], { userName: this.userName });
    };
    LoginPage.prototype.toRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */], { userName: this.userName });
    };
    LoginPage.prototype.smsLogin = function () {
        this.isSmsLogin = true;
    };
    LoginPage.count = 5;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\login\login.html"*/'<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\');">\n\n\n\n    <div class="logtitel">\n\n        <img src=\'./assets/imgs/logo01.png\' />\n\n    </div>\n\n\n\n\n\n    <ion-item class="item-nobg">\n\n        <ion-input clearInput type="number" [min]="11" [max]="18" placeholder="请输入帐号"\n\n                   [(ngModel)]="userName" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item *ngIf="!isSmsLogin"  class="item-nobg">\n\n        <ion-input clearInput type="password" placeholder="请输入密码" [(ngModel)]="password" class="lo_ico02"></ion-input>\n\n        <button ion-button item-end *ngIf="!countdownNum" (click)="smsLogin()" class="prove" style="margin-top:20px;">短信验证码登录\n\n        </button>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="isSmsLogin"  class="item-nobg">\n\n        <ion-input clearInput type="text" placeholder="请输入验证码" [(ngModel)]="smsCode" class="lo_ico02"></ion-input>\n\n        <button ion-button item-end *ngIf="!countdownNum" (click)="sendLoginSms()"\n\n                [disabled]="!userNameValid()" class="prove" style="margin-top:20px;">发送验证码\n\n        </button>\n\n        <button ion-button item-end *ngIf="countdownNum >= 1" [disabled]="true">{{countdownNum}}秒后可重发</button>\n\n    </ion-item>\n\n\n\n    <!--<ion-item *ngIf="!isSmsLogin">-->\n\n        <!--<ion-icon item-start name="ios-lock-outline"></ion-icon>-->\n\n        <!--<ion-input clearInput type="text" placeholder="请输入密码" [(ngModel)]="password"></ion-input>-->\n\n    <!--</ion-item>-->\n\n\n\n    <div class="btn">\n\n        <button ion-button type="submit" block clear="true"\n\n                [disabled]="!userNameValid() || ((isSmsLogin && (!smsCode || smsCode.length != 4)) || (!isSmsLogin && !password))"\n\n                (click)="doLogin()"><span class="anniu_l">登 录</span>\n\n\n\n        </button>\n\n\n\n    </div>\n\n    <div style="float: left;">\n\n        <button clear="true" ion-button item-end (click)="toForgetPwd()" class="anniu01"><span>忘记密码</span></button>\n\n    </div>\n\n    <div style="float:right;">\n\n        <button clear="true" ion-button item-end (click)="toRegister()" class="anniu02">立即注册</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_appConfig_properties__["a" /* AppCfgProperties */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_charge_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chargenext_chargenext__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChargePage = /** @class */ (function () {
    function ChargePage(navCtrl, chargeService) {
        this.navCtrl = navCtrl;
        this.chargeService = chargeService;
        this.RMB = 0;
        this.PERCENT = '0%';
    }
    ChargePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.chargeService.getChargeInfo().subscribe(function (data) {
            _this.RMB = data[0].RMB == undefined ? 0 : data[0].RMB;
            _this.LEVEL_NAME = data[0].LEVEL_NAME == undefined ? "" : data[0].LEVEL_NAME;
            _this.LEVEL_RIGHTS = data[0].LEVEL_RIGHTS == undefined ? "" : data[0].LEVEL_RIGHTS;
            _this.USER_LEV = data[0].USER_LEV == undefined ? "01" : data[0].USER_LEV;
            var LEVEL_RMB = data[0].LEVEL_RMB == undefined ? 0 : data[0].LEVEL_RMB;
            var LEVEL_RMB_END = data[0].LEVEL_RMB_END == undefined ? 0 : data[0].LEVEL_RMB_END;
            _this.PERCENT = (parseInt(_this.USER_LEV.substr(1, 1)) - 1) * 33 + (_this.RMB - LEVEL_RMB) / (LEVEL_RMB_END - LEVEL_RMB) * 33 + '%';
        });
    };
    ChargePage.prototype.chargeNext = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chargenext_chargenext__["a" /* ChargeNextPage */]);
    };
    ChargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-charge',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\charge\charge.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>充值中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	<div class="img01">{{LEVEL_RIGHTS}}</div>\n\n  <div class="img02"><span>{{LEVEL_NAME}}</span></div>\n\n    <ion-item>\n\n    	<div class="pro_zu">\n\n    	<div class="prog"><span [ngStyle]="{\'width\':PERCENT}"></span></div>\n\n    	<div class="da01"><img src="./assets/imgs/da01.png"/></div>\n\n    	<div class="da02"><img src="./assets/imgs/da02.png"/></div>\n\n    	<div class="da03"><img src="./assets/imgs/da03.png"/></div>\n\n    	<div class="da04"><img src="./assets/imgs/da04.png"/></div>\n\n    	<div class="mon">{{RMB}}RMB</div>\n\n    </div>\n\n    \n\n    </ion-item>\n\n  <div class="btn">\n\n        <button clear="true" ion-button item-end (click)="chargeNext()" class="anniu_l">立即充值</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\charge\charge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_charge_service__["a" /* ChargeService */]])
    ], ChargePage);
    return ChargePage;
}());

//# sourceMappingURL=charge.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmOrderPage = /** @class */ (function () {
    function ConfirmOrderPage(navCtrl, params, actionSheetCtrl, taskService, alertCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.actionSheetCtrl = actionSheetCtrl;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.avatar = "";
        this.task = params.get("task"); //获取传进来的任务信息
    }
    ConfirmOrderPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: '拍照',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                //  {
                //     text: '从相册选择',
                //     role: 'chooseFromAlbum',
                //     handler: () => {
                //         this.chooseFromAlbum();
                //     }
                // },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    ConfirmOrderPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.path = base64Image;
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    ConfirmOrderPage.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.path = base64Image;
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    ConfirmOrderPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "上传失败", message: "只能选择一张图片", buttons: ["确定"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    //完成任务  返回主页
    ConfirmOrderPage.prototype.saveImg = function () {
        var _this = this;
        //this.imgId = "123";
        this.task.imgId = this.imgId; //图片id保存
        this.taskService.saveImg(this.task).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]); //跳转到主页
        }, __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    ConfirmOrderPage.prototype.upload = function () {
        var _this = this;
        this.taskService.uploadFile(this.path).subscribe(function (data) {
            _this.fileInfo = data;
            _this.imgId = data.fileId;
        }, __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    ConfirmOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\confirm\confirm_order.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>任务标题</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n <div class="img01">恭喜你，任务完成</div>\n\n<div class="img02"><div class="tit01">任务用时</div><div class="tit02">00:02\'12</div><div (click)="presentActionSheet()" class="tit03">+</div></div>\n\n    <ion-item style="height: 33%" (click)="presentActionSheet()">\n\n        <div class="header-image" tappable [ngStyle]="{\'background-image\': \'url(\'+avatar+\')\'}"\n\n              style="color: #cccccc;">\n\n            <img class="login-img" [asyncSrc]="imgId">\n\n            点击添加照片\n\n        </div>\n\n    </ion-item>\n\n\n\n\n\n    <div class="btn">\n\n        <button clear="true" ion-button item-end (click)="saveImg()" class="anniu_l">确认提交</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\confirm\confirm_order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], ConfirmOrderPage);
    return ConfirmOrderPage;
}());

//# sourceMappingURL=confirm_order.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__taskList_taskList__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcceptPage = /** @class */ (function () {
    function AcceptPage(navCtrl, taskService) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
    }
    //查询可接任务，状态 【STATE = '01'】
    AcceptPage.prototype.getTaskList = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__taskList_taskList__["a" /* TaskListPage */], { type: type });
    };
    AcceptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accept',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\accept\accept.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/type01.gif\'); background-size:100% 100%;">\n\n    <div class="anniu_zu">\n\n        <span class="cur">悬赏</span>\n\n        <span>挑战</span>\n\n        <span>好友</span>\n\n    </div>\n\n\n\n    <ion-item style="height: 30%" (click)="getTaskList(\'01\')">\n\n\n\n    </ion-item>\n\n    <ion-item style="height: 25%" (click)="getTaskList(\'02\')">\n\n    </ion-item>\n\n    <ion-item style="height: 25%" (click)="getTaskList(\'03\')">\n\n    </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\accept\accept.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], AcceptPage);
    return AcceptPage;
}());

//# sourceMappingURL=accept.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_DbDict__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskListPage = /** @class */ (function () {
    function TaskListPage(navCtrl, param, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.taskService = taskService;
        this.type_2 = ""; //下级类型
        this.level = ""; //任务等级
        this.order = ""; //排序方式
        this.type = param.get("type");
    }
    TaskListPage.prototype.ionViewWillEnter = function () {
        this.getTaskList();
    };
    TaskListPage.prototype.getTaskList = function () {
        var _this = this;
        var param = {
            state: '01',
            type: this.type
        };
        this.taskService.getTaskList(param).subscribe(function (data) {
            _this.taskList = data;
            for (var i = 0; i < _this.taskList.length; i++) {
                //任务分类大类型
                _this.taskList[i].BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_5__util_DbDict__["a" /* DbDict */].code2type(_this.taskList[i].BIG_TYPE, "TASK_BIG_TYPE");
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    TaskListPage.prototype.showDetail = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], { task: task });
    };
    //查询
    TaskListPage.prototype.queryTask = function () {
        var _this = this;
        var filter = {};
        filter.type = this.type + "";
        filter.level = this.level;
        filter.type_2 = this.type_2;
        filter.order = this.order + "";
        filter.state = '01'; //查询可接任务，状态 【STATE = '01'】
        this.taskService.getTaskForFilter(filter).subscribe(function (data) {
            _this.taskList = data; //展示数据
            for (var i = 0; i < data.length; i++) {
                //任务分类大类型
                _this.taskList[i].BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_5__util_DbDict__["a" /* DbDict */].code2type(_this.taskList[i].BIG_TYPE, "TASK_BIG_TYPE");
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    TaskListPage.prototype.switchType_1 = function () { this.queryTask(); };
    TaskListPage.prototype.switchType_2 = function () { this.queryTask(); };
    TaskListPage.prototype.switchType_3 = function () {
        this.queryTask();
    };
    TaskListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-taskList',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\taskList\taskList.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n\n\n        </button>\n\n\n\n        <ion-title>悬赏任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n      <ion-select [(ngModel)]="level" (ngModelChange)="switchType_1()"  interface="popover"\n\n                  style="height:45px;width:30%;float: left;color: #cccccc;" placeholder="选择星级">\n\n          <ion-option value="">全部星级</ion-option>\n\n          <ion-option value="1">1星</ion-option>\n\n          <ion-option value="2">2星</ion-option>\n\n          <ion-option value="3">3星</ion-option>\n\n          <ion-option value="4">4星</ion-option>\n\n          <ion-option value="5">5星</ion-option>\n\n      </ion-select>\n\n\n\n      <ion-select [(ngModel)]="type_2" (ngModelChange)="switchType_2()"  interface="popover"\n\n                  style="height:45px;width:30%;float: left;color: #cccccc;" placeholder="选择类型">\n\n          <ion-option value="">全部类型</ion-option>\n\n          <ion-option *ngIf="type == \'01\'" value="11">镖局</ion-option>\n\n          <ion-option *ngIf="type == \'01\'" value="12">代购</ion-option>\n\n          <ion-option *ngIf="type == \'02\'" value="21">一起玩</ion-option>\n\n          <ion-option *ngIf="type == \'02\'" value="22">一起吃</ion-option>\n\n          <ion-option *ngIf="type == \'02\'" value="22">一起旅游</ion-option>\n\n          <ion-option *ngIf="type == \'02\'" value="24">江湖救急</ion-option>\n\n          <ion-option *ngIf="type == \'03\'" value="31">生活常识</ion-option>\n\n          <ion-option *ngIf="type == \'03\'" value="32">医学</ion-option>\n\n          <ion-option *ngIf="type == \'03\'" value="33">科学</ion-option>\n\n          <ion-option *ngIf="type == \'03\'" value="34">汽车</ion-option>\n\n      </ion-select>\n\n\n\n      <ion-select [(ngModel)]="order" (ngModelChange)="switchType_3()"  interface="popover"\n\n                  style="height:45px;width:30%;float: left;color: #cccccc;" placeholder="综合排序">\n\n                  <ion-option value="0" >综合排序</ion-option>\n\n                  <ion-option value="1" >悬赏从低到高</ion-option>\n\n                  <ion-option value="2" >悬赏从高到低</ion-option>\n\n                  <ion-option value="3" >任务难度从低到高</ion-option>\n\n                  <ion-option value="4" >任务难度从高到低</ion-option>\n\n                  <ion-option value="5" >限制时间从低到高</ion-option>\n\n                  <ion-option value="6" >限制时间从高到低</ion-option>\n\n      </ion-select>\n\n      <img style="padding-top: 10px;padding-left: 10px" src=\'\' />\n\n    <ion-list *ngFor="let item of taskList" >\n\n        <div class="tiao" (click)="showDetail(item)">\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span>\n\n            <span class="font02">\n\n                <img *ngIf="item.LEVEL >=1 " src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL >=2 " src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL >=3 " src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL >=4 " src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL >=5 " src=\'./assets/imgs/star.png\' />\n\n            </span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\taskList\taskList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], TaskListPage);
    return TaskListPage;
}());

//# sourceMappingURL=taskList.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUtil; });
// 通用工具类
var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
    /**
     * 获取 url 中的参数(获取微信code)
     * @returns {Object}
     */
    CommonUtil.getParams = function (url) {
        url = url || location.href;
        url += ' ';
        var params = {};
        var keys = url.match(/\w+(?=[=])/g);
        var values = url.match(/\w+(?=[&\s#])/g);
        if (keys) {
            for (var i = 0; i < keys.length; i++) {
                params[keys[i]] = values[i];
            }
        }
        console.log('获取url参数为：');
        console.log(params);
        return params;
    };
    /**
     * 判断是否有token
     * @param {string} name 对象名称
     * @returns {any}
     */
    CommonUtil.isTokenExist = function () {
        try {
            var tokenId = this.getStoredItem('tokenId').tokenId;
            return null != tokenId;
        }
        catch (error) {
            return false;
        }
    };
    /**
     * 从 localStorage 中获取对象
     * @param {string} name 对象名称
     * @returns {any}
     */
    CommonUtil.getStoredItem = function (name) {
        return JSON.parse(localStorage.getItem(name));
    };
    /**
     * 从 localStorage 中删除对象
     * @param {string} name 对象名称
     * @returns {any}
     */
    CommonUtil.removeStoredItem = function (name) {
        localStorage.removeItem(name);
    };
    /**
     * 将对象存储在 localStorage 中
     * @param {string} name 存储名称
     * @param {Object} obj 对象
     */
    CommonUtil.setStoredItem = function (name, obj) {
        localStorage.setItem(name, JSON.stringify(obj));
    };
    CommonUtil.formatNumber = function (n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
    };
    CommonUtil.formatTime = function (date, addDayCount) {
        if (addDayCount === void 0) { addDayCount = 0; }
        date.setDate(date.getDate() + addDayCount);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return [year, month, day].map(CommonUtil.formatNumber).join('-') + ' ' + [hour, minute, second].map(CommonUtil.formatNumber).join(':');
    };
    /**
     * 正确地返回到相应页面
     * @param {NavController} navCtrl 页面的NavController
     * @param {string} page 回退页面名称
     */
    CommonUtil.popTo = function (navCtrl, page) {
        var VIEW_STACK = navCtrl.getViews();
        console.log(VIEW_STACK);
        var BACK_VIEW_CTRL = VIEW_STACK.find(function (view) { return view.index == Number(page); });
        if (BACK_VIEW_CTRL) {
            navCtrl.popTo(BACK_VIEW_CTRL);
        }
        else {
            throw new Error('该页面不存在！');
        }
    };
    CommonUtil.isPhone = function (phone) {
        return phone && phone.toString().length == 11;
    };
    CommonUtil.min2ZhHourMin = function (diffs) {
        var times = Math.abs(diffs);
        var hours = Math.floor(times / 60);
        var mins = times - hours * 60;
        var timeStr = (hours ? (hours + "小时") : "") + ((mins || !hours) ? (mins + "分钟") : "");
        return diffs >= 0 ? timeStr : ("-" + timeStr);
    };
    CommonUtil.min2ZhHourMinUnit = function (diffs) {
        var times = Math.abs(diffs);
        var hours = Math.floor(times / 60);
        var mins = times - hours * 60;
        var timeStr = (hours == 0 && mins != 30) && (mins + "分钟")
            || (hours == 0 && mins == 30) && "半小时"
            || (hours == 1 && mins == 0) && "小时"
            || (hours > 0 && mins == 0) && (hours + "小时")
            || (hours + "小时" + mins + "分钟");
        return diffs >= 0 ? timeStr : ("-" + timeStr);
    };
    CommonUtil.time2DoubleDigit = function (obj) {
        var str = obj.toString();
        return str.length <= 1 ? ("0" + str) : str;
    };
    CommonUtil.time2ZhDay = function (date) {
        var days = CommonUtil.diff(date, new Date(), CommonUtil.DAYS);
        return days == 0 && "今天"
            || (days == 1 && "昨天")
            || (days == 2 && "前天")
            || days == -1 && "明天"
            || (days == -2 && "后天")
            || (this.time2DoubleDigit(date.getMonth() + 1) + "-" + this.time2DoubleDigit(date.getDate()));
    };
    CommonUtil.time2ZhMonth = function (date) {
        var months = CommonUtil.diff(date, new Date(), CommonUtil.MONTHS);
        return months == 0 && "本月"
            || (date.getMonth() + 1) + "月";
    };
    CommonUtil.diffTime = function (d1, d2, amount) {
        var diff = (d1.getTime() - d2.getTime()) / amount;
        return diff >= 0 ? Math.floor(diff) : Math.ceil(diff);
    };
    CommonUtil.diffDay = function (d1, d2) {
        return CommonUtil.diffMonth(d1, d2) * 30 + d1.getDate() - d2.getDate();
    };
    CommonUtil.diffMonth = function (d1, d2) {
        return CommonUtil.diffYear(d1, d2) * 12 + d1.getMonth() - d2.getMonth();
    };
    CommonUtil.diffYear = function (d1, d2) {
        return d1.getFullYear() - d2.getFullYear();
    };
    CommonUtil.diff = function (d1, d2, filed) {
        var amount;
        if (CommonUtil.SECONDS == filed) {
            amount = CommonUtil.SECONDS_NUM;
        }
        else if (CommonUtil.MINUTES == filed) {
            amount = CommonUtil.MINUTES_NUM;
        }
        else if (CommonUtil.HOURS == filed) {
            amount = CommonUtil.HOURS_NUM;
        }
        else {
            amount = -1;
        }
        if (amount > 0) {
            return CommonUtil.diffTime(d1, d2, amount);
        }
        else if (CommonUtil.DAYS == filed) {
            return CommonUtil.diffDay(d1, d2);
        }
        else if (CommonUtil.MONTHS == filed) {
            return CommonUtil.diffMonth(d1, d2);
        }
    };
    // 空回调
    CommonUtil.emptyCallback = function () {
    };
    CommonUtil.SECONDS = 1;
    CommonUtil.MINUTES = 2;
    CommonUtil.HOURS = 3;
    CommonUtil.DAYS = 4;
    CommonUtil.MONTHS = 5;
    CommonUtil.YEARS = 6;
    CommonUtil.SECONDS_NUM = 1000;
    CommonUtil.MINUTES_NUM = 60000;
    CommonUtil.HOURS_NUM = 3600000;
    return CommonUtil;
}());

//# sourceMappingURL=common.util.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPublisherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmPublisherPage = /** @class */ (function () {
    function ConfirmPublisherPage(navCtrl, taskService, param) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
        this.param = param;
        this.task = {}; //缓存任务信息
        this.comment = ""; //评价
        this.eval_level = 5; //评价星级
        this.content = ""; //评价内容
        this.content_type = "有礼貌"; //
        this.task = param.get("task");
    }
    //将样式初始化
    ConfirmPublisherPage.prototype.initStyle = function () {
        document.getElementById("1").style.color = "#3a4f87";
        document.getElementById("2").style.color = "#3a4f87";
        document.getElementById('img_1').setAttribute('src', '');
        document.getElementById('img_2').setAttribute('src', '');
    };
    //发布者确认任务
    ConfirmPublisherPage.prototype.addEval = function () {
        var _this = this;
        this.task.content = this.content_type + "&" + this.content; //评价信息
        this.task.eval_level = this.eval_level + ""; //评价等级
        this.taskService.addEval(this.task).subscribe(function (data) {
            //发布完成任务自动跳转到历史发布界面
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    ConfirmPublisherPage.prototype.catchData = function (str, code) {
        this.initType(); //清除样式
        //给点击的加上样式
        this.content_type = str;
        document.getElementById("content_" + code).classList.add("cur");
    };
    //初始化类型，全部不选中
    ConfirmPublisherPage.prototype.initType = function () {
        document.getElementById("content_1").classList.remove("cur");
        document.getElementById("content_2").classList.remove("cur");
        document.getElementById("content_3").classList.remove("cur");
    };
    ConfirmPublisherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-publisher',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\confirm\confirm_publisher.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>任务评价</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="img01"><img [asyncSrc]="task.PIC_ID" src="./assets/imgs/head.png" style="height: 70px;width: 70px;margin: 30px 35px;position:absolute; z-index:-1"/></div>\n\n    <div class="adm01">{{task.SHORT_NAME}}</div>\n\n    <div class="adm02">100/100%</div>\n\n    <ion-item>\n\n        <div class="star">\n\n            <img *ngFor="let i of [1,2,3,4,5]; let idx = index;" (click)="eval_level = idx"\n\n                 [ngClass]="{true: \'star-avtive\', false: \'star-non-avtive\'}[idx <= eval_level]"/>\n\n\n\n        </div>\n\n    </ion-item>\n\n    <ion-item class="city" >\n\n        <ion-list>\n\n            <span id="content_1" (click)="catchData(\'有礼貌\',1)" class="cur">有礼貌</span>\n\n            <span id="content_2" (click)="catchData(\'速度快\',2)">速度快</span>\n\n            <span id="content_3" (click)="catchData(\'准时\',3)">准时</span>\n\n        </ion-list>\n\n    </ion-item>\n\n    <div class="img02">\n\n        <ion-textarea clearInput minlength="5" maxlength="200"  placeholder="请输入评价"\n\n                      style="border: 0px solid; padding: 20px;margin-top: 15px;margin-left: 10px;"\n\n                      color="#cccccc" rows=6\n\n                   [(ngModel)]="content" class="textarea" >{{content}}</ion-textarea>\n\n\n\n    </div>\n\n\n\n    <div class="btn">\n\n        <button clear="true" ion-button item-end (click)="addEval()" class="anniu_l">确认提交</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\confirm\confirm_publisher.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ConfirmPublisherPage);
    return ConfirmPublisherPage;
}());

//# sourceMappingURL=confirm_publisher.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExchangeService = /** @class */ (function () {
    function ExchangeService(http) {
        this.http = http;
    }
    /**
     * 通过服务端请求获得任务列表
     * @param fileId
     */
    ExchangeService.prototype.getConfig = function (configKey) {
        var URL = '/exchange/getConfig';
        return this.http.post(URL, configKey, { showLoading: false, showError: true });
    };
    ExchangeService.prototype.getCoinInfo = function () {
        var URL = '/exchange/getCoinInfo';
        return this.http.post(URL, null, { showLoading: false, showError: true });
    };
    ExchangeService.prototype.exchangeTelefare = function (obj) {
        var URL = '/exchange/exchangeTelefare';
        return this.http.post(URL, obj, { showLoading: false, showError: true });
    };
    ;
    ExchangeService.prototype.exchangeProp = function (obj) {
        var URL = '/exchange/exchangeProp';
        return this.http.post(URL, obj, { showLoading: false, showError: true });
    };
    ;
    ExchangeService.prototype.exchangeMoney = function (obj) {
        var URL = '/exchange/exchangeMoney';
        return this.http.post(URL, obj, { showLoading: false, showError: true });
    };
    ;
    ExchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], ExchangeService);
    return ExchangeService;
}());

//# sourceMappingURL=exchange.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_map_get_addr__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, myservice, viewCtrl, modalController, componentsUtil) {
        this.navCtrl = navCtrl;
        this.myservice = myservice;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.componentsUtil = componentsUtil;
        this.getAddrContList();
    }
    ModalPage.prototype.getAddrContList = function () {
        var _this = this;
        this.myservice.getAddrCont().subscribe(function (data) {
            _this.addrContList = data;
        });
    };
    ModalPage.prototype.dismiss = function (i) {
        var data = this.addrContList[i];
        this.viewCtrl.dismiss(data);
    };
    ModalPage.prototype.newAddrCont = function (i) {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_0__task_map_get_addr__["a" /* getAddrPage */], this.addrContList[i]);
        modal.onDidDismiss(function (result) {
            _this.getAddrContList();
        });
        modal.present();
    };
    ModalPage.prototype.getBack = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\modal\modal.html"*/'<ion-header no-border >\n    <ion-navbar transparent >\n        <button ion-button  clear (click)="getBack()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>  \n        <ion-title>地址维护</ion-title>\n        <button (click)="newAddrCont()" clear ion-button style="float:right;">\n            <ion-icon name="" item-end  class="anniu01">新增地址</ion-icon>\n        </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n    <ion-list >\n        <ion-item *ngFor="let info of addrContList   index  as  i"  style="background: transparent;">\n                <p  class="font01"> <span (click)="dismiss(i)">{{info.CONTACT}} {{info.TELEPHONE}}<br/>{{info.ADDRESS}}</span> </p>\n                 <button class="editbtn" item-end ion-button clear (click)="newAddrCont(i)"></button>\n                \n        </ion-item>\n         \n    </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\modal\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_my_service__["a" /* MyService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1__util_components_util__["a" /* ComponentsUtil */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getStation = function () {
        return this.http.post("/api/no-auth/station/getAllStation", null);
    };
    /**
     * 通过服务端请求获得文件的真实路径
     * @param fileId
     */
    TaskService.prototype.getFileRealPath = function (fileId) {
        var URL = '/api/no-auth/path';
        console.log(fileId);
        return this.http.post(URL, fileId, { showLoading: false, showError: false });
    };
    ;
    /**
     * 通过服务端请求获得任务列表
     * @param fileId
     */
    TaskService.prototype.getTaskList = function (param) {
        var URL = '/task/getTaskList';
        console.log(param);
        return this.http.post(URL, param, { showLoading: false, showError: true });
    };
    ;
    /**
     * 通过服务端请求获得任务列表【根据条件查询】
     * @param fileId
     */
    TaskService.prototype.getTaskForFilter = function (param) {
        var URL = '/task/getTaskForFilter';
        console.log(param);
        return this.http.post(URL, param, { showLoading: false, showError: true });
    };
    ;
    /**
     * 接取任务
     * @param fileId
     */
    TaskService.prototype.acceptTask = function (id) {
        var URL = '/task/acceptTask';
        console.log(id);
        return this.http.post(URL, id, { showLoading: false, showError: true });
    };
    ;
    /**
     * 接取任务(日常)
     * @param fileId
     */
    TaskService.prototype.chAcceptTask = function (id) {
        var URL = '/chtask/acceptTask';
        console.log(id);
        return this.http.post(URL, { taskId: id }, { showLoading: false, showError: true });
    };
    ;
    /**
     * 发布任务
     * @param fileId
     */
    TaskService.prototype.releaseTask = function (data) {
        var URL = '/task/releaseTask';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 查询已接任务
     * @param fileId
     */
    TaskService.prototype.getAlreadyAccept = function (data) {
        var URL = '/task/getAlreadyRelease';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 查询自己已经发布的任务
     * @param fileId
     */
    TaskService.prototype.getHistoryReleaseTask = function (data) {
        var URL = '/task/getHistoryReleaseTask';
        console.log(data);
        return this.http.post(URL, data, { showError: true });
    };
    ;
    /**
     * 根据城市获取区县信息
     * @param fileId
     */
    TaskService.prototype.getArea = function (data) {
        var URL = '/task/getArea';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 获取当前登录人的已完成的任务
     * @param fileId
     */
    TaskService.prototype.getAlreadyFinish = function (data) {
        var URL = '/task/getAlreadyFinish';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 上传文件
     * @param fileId
     */
    TaskService.prototype.uploadFile = function (data) {
        var URL = '/file/upload';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 完成任务
     * @param fileId
     */
    TaskService.prototype.finishTask = function (data) {
        var URL = '/task/finishTask';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 统计查询任务数量
     * @param fileId
     */
    TaskService.prototype.getTaskCount = function () {
        var URL = '/task/getTaskCount';
        return this.http.post(URL, "", { showLoading: false, showError: true });
    };
    ;
    /**
     * 发布者确认任务，并写入任务评价，之后重发或者删除任务
     * @param fileId
     */
    TaskService.prototype.confirmForPublished = function (data) {
        var URL = '/task/confirmForPublished';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 保存当前操作人身份证图片id到数据库
     * @param fileId
     */
    TaskService.prototype.updateCardImg = function (data) {
        var URL = '/task/updateCardImg';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 保存当前操作人位置信息
     * @param fileId
     */
    TaskService.prototype.updatePosition = function (data) {
        var URL = '/task/updatePosition';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 任务状态变更
     * @param fileId
     */
    TaskService.prototype.updateState = function (data) {
        var URL = '/task/updateState';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 保存图片
     * @param fileId
     */
    TaskService.prototype.saveImg = function (data) {
        var URL = '/task/saveImg';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 添加评价
     * @param fileId
     */
    TaskService.prototype.addEval = function (data) {
        var URL = '/task/addEval';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 查询任务进程信息
     * @param fileId
     */
    TaskService.prototype.queryTaskProgressState = function (data) {
        var URL = '/task/queryTaskProgressState';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 发布者取消任务
     * @param fileId
     */
    TaskService.prototype.cancelTask = function (data) {
        var URL = '/task/cancelTask';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 发布者开始任务（日常）
     * @param fileId
     */
    TaskService.prototype.startTask = function (data) {
        var URL = '/chtask/startTask';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    /**
     * 任务超时处理
     * @param fileId
     */
    TaskService.prototype.timeoutHandler = function (data) {
        var URL = '/task/timeoutHandler';
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    TaskService.prototype.addTask = function (data) {
        var URL = '/chtask/addTask';
        return this.http.post(URL, data, { showLoading: false }).map(function (response) {
            if (response.success) {
                return response.data;
            }
            else {
                throw response;
            }
        });
    };
    /**
     * 退出任务
     * @param {string} taskId
     * @returns {Observable<any>}
     */
    TaskService.prototype.exitTask = function (taskId) {
        var URL = '/chtask/exitTask';
        return this.http.post(URL, taskId);
    };
    /**
     * 回答问题
     * @param {string} taskId
     * @returns {Observable<any>}
     */
    TaskService.prototype.answerTask = function (data) {
        var URL = '/chtask/answerTask';
        return this.http.post(URL, data);
    };
    /**
     * 结束任务，获取数据库时间值
     * @param {string} taskId
     * @returns {Observable<any>}
     */
    TaskService.prototype.endTask = function (data) {
        var URL = '/chtask/endTask';
        return this.http.post(URL, data);
    };
    /**
     * 确认完成
     * @param {string} taskId
     * @returns {Observable<any>}
     */
    TaskService.prototype.confirmFinishTask = function (data) {
        var URL = '/chtask/confirmFinishTask';
        return this.http.post(URL, data);
    };
    /**
     * 确认未完成
     * @param {string} taskId
     * @returns {Observable<any>}
     */
    TaskService.prototype.confirmUnFinishTask = function (data) {
        var URL = '/chtask/confirmUnFinishTask';
        return this.http.post(URL, data);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], TaskService);
    return TaskService;
}());

//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsUtil = /** @class */ (function () {
    function ComponentsUtil(alertCtrl, actionSheetCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    /**
     * 显示确认提示框
     * @param {string} message 需要显示的消息
     */
    ComponentsUtil.prototype.showAlert = function (message, cssClass) {
        if (this.alert) {
            this.alert.dismiss().catch(function () { });
            this.alert = null;
        }
        this.alert = this.alertCtrl.create({
            title: '提示',
            subTitle: message,
            buttons: ['确认'],
            cssClass: cssClass || undefined
        });
        this.alert.present();
    };
    /**
     * 显示 loading
     * @param content 要显示的文字，默认加载中
     * @param {number} duration 时长，持续显示则为0
     * @param spinner 图标类型
     * @param cssClass 样式
     */
    ComponentsUtil.prototype.showLoading = function (content, duration, spinner, cssClass) {
        if (this.spinner) {
            this.hideLoading();
        }
        this.spinner = this.loadingCtrl.create({
            spinner: spinner || '',
            duration: duration,
            content: content || '加载中...',
            cssClass: cssClass || undefined
        });
        this.spinner.present();
    };
    /**
     * 隐藏 loading
     */
    ComponentsUtil.prototype.hideLoading = function () {
        if (this.spinner) {
            this.spinner.dismiss().catch(function () {
            });
            this.spinner = null;
        }
    };
    /**
     * 显示输入提示框
     * @param {PromptOptions} options 提示框的参数
     * @returns {Promise<string>}
     */
    ComponentsUtil.prototype.showPrompt = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var alertOptions = options;
            var cancelBtn = {
                text: '取消'
            };
            var confirmBtn = {
                text: '确认',
                handler: function (data) {
                    if (!data || !data[0]
                        || (options.confirmTrigger && !options.confirmTrigger(data[0]))) {
                        return false;
                    }
                    resolve(data[0]);
                }
            };
            alertOptions.title = options.title || '提示';
            alertOptions.buttons = [cancelBtn, confirmBtn];
            alertOptions.inputs = options.inputs
                || [{ type: options.inputType, value: options.defaultValue }];
            var prompt = _this.alertCtrl.create(alertOptions);
            prompt.present();
        });
    };
    /**
     * 弹出确认提示框
     * @param {AlertOptions} options
     * @returns {Promise<void>}
     */
    ComponentsUtil.prototype.showConfirm = function (options) {
        var alert = this.alertCtrl.create({
            title: options.title || '请确认',
            message: options.message || '提示内容',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: (options.buttons[1] && options.buttons[1].handler) || function () {
                        console.log('选择取消按钮');
                    }
                }, {
                    text: options.buttons[0].text || '确认',
                    handler: options.buttons[0].handler || function () {
                        console.log('选择确认按钮');
                    }
                }
            ]
        });
        if (options.buttons.length > 1) {
            Array.prototype.push.apply(options.buttons.slice(1));
        }
        alert.present();
    };
    /**
     * 显示选择列表
     * @param {ActionSheetOptions} options 选择列表参数
     */
    ComponentsUtil.prototype.showPopupList = function (options) {
        var cancelBtn = {
            text: '取消',
            role: 'cancel'
        };
        options.buttons = options.buttons || [];
        options.buttons.push(cancelBtn);
        var popupList = this.actionSheetCtrl.create(options);
        popupList.present();
    };
    /**
     * 显示 toast
     * @param {ToastOptions} options toast 参数
     */
    ComponentsUtil.prototype.showToast = function (options) {
        options.duration = options.duration || 1000;
        var toast = this.toastCtrl.create(options);
        toast.present();
    };
    ComponentsUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        // 控件工具类
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], ComponentsUtil);
    return ComponentsUtil;
}());

//# sourceMappingURL=components.util.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("config app paras");
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariable; });
var GlobalVariable = /** @class */ (function () {
    function GlobalVariable() {
    }
    //获取全局变量的值
    GlobalVariable.getFirstFlag = function () {
        return this.isFirstFlag;
    };
    //设置全局变量的值
    GlobalVariable.setFirstFlag = function (bool) {
        return this.isFirstFlag = bool;
    };
    GlobalVariable.getCity = function () {
        return this.city;
    };
    //设置全局变量的值
    GlobalVariable.setCity = function (city) {
        return this.city = city;
    };
    GlobalVariable.isFirstFlag = true;
    GlobalVariable.city = "";
    return GlobalVariable;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_order__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExecutingPage = /** @class */ (function () {
    function ExecutingPage(navCtrl, param, geolocation, platform, homeService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.geolocation = geolocation;
        this.platform = platform;
        this.homeService = homeService;
        // 地图开启标志
        this.mapOn = true;
        // 搜索关键字
        this.searchKey = '';
        this.task = param.get("task");
        // this.address = '郑州火车站';
    }
    ExecutingPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('1`23');
        this.homeService.loadScript()
            .subscribe(function () {
            // 定位
            _this.locating();
        });
    };
    // 页面控件初始化完成，加载数据
    ExecutingPage.prototype.ionViewWillEnter = function () {
        this.alive = true;
    };
    ExecutingPage.prototype.ionViewDidLeave = function () {
        this.alive = false;
    };
    // 页面销毁
    ExecutingPage.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ExecutingPage.prototype.locating = function () {
        var that = this;
        console.log('调用百度地图定位插件定位...');
        baidumap_location.getCurrentPosition(function (result) {
            that.city = result.city; //当前所在城市
            var pointStr = result.addr; //当前详细地址
            var point = new BMap.Point(result.longitude, result.latitude); //由经纬度获取一个点
            that.map.centerAndZoom(point, 11);
            var walking = new BMap.WalkingRoute(that.map, { renderOptions: { map: that.map, autoViewport: true } });
            var areaStr = that.task.ADDRESS.replace(/,/g, '');
            walking.search(pointStr, areaStr); //规划线路【起点，终点】
            var starIcon = new BMap.Icon('./assets/imgs/dh01.png', new BMap.Size(50, 50), {
                anchor: new BMap.Size(20, 35)
            }); //创建图标
            walking.setMarkersSetCallback(function (res) {
                res[0].marker.setIcon(starIcon);
            });
        });
    };
    ExecutingPage.prototype.addStartIcon = function (map, point) {
        var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(100, 100));
        var marker2 = new BMap.Marker(point, { icon: myIcon }); // 创建标注
        map.addOverlay(marker2); // 将标注添加到地图中
    };
    //接受任务者确定完成任务，添加照片页面
    ExecutingPage.prototype.toConfirmOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__confirm_confirm_order__["a" /* ConfirmOrderPage */], { task: this.task });
        this.alive = false;
    };
    ExecutingPage.prototype.toHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    ExecutingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-executing',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\executing\executing.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>{{task.NAME}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="openModal()">\n\n                <span class="posit" >{{city}}</span>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- 地图板块 -->\n\n<ion-content class="map-p" overflow-scroll="true" style="overflow: hidden" [hidden]="!mapOn || searching" padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <!-- 地图 -->\n\n    <div class="" id="bmap" style="width:100%;height:88%;">\n\n    </div>\n\n    <div class="btn">\n\n        <button ion-button item-end (click)="toConfirmOrder()" class="anniu_l">任务完成</button>\n\n        <button ion-button item-end (click)="toHome()" class="anniu_l" clear="true" >返回主页</button>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\executing\executing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__providers_home_service__["a" /* HomeService */]])
    ], ExecutingPage);
    return ExecutingPage;
}());

//# sourceMappingURL=executing.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyAcceptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_already_detail__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_order_map__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_DbDict__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlreadyAcceptPage = /** @class */ (function () {
    function AlreadyAcceptPage(navCtrl, taskService) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
    }
    AlreadyAcceptPage.prototype.ionViewWillEnter = function () {
        this.getAlreadyAccept();
    };
    AlreadyAcceptPage.prototype.getAlreadyAccept = function () {
        var _this = this;
        //查询已接取的任务
        var param = {};
        param.state = '02'; //状态是已接取
        this.taskService.getAlreadyAccept(param).subscribe(function (data) {
            _this.taskList = data;
            for (var i = 0; i < data.length; i++) {
                //任务分类大类型标准代码转中文描述
                _this.taskList[i].BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(_this.taskList[i].BIG_TYPE, "TASK_BIG_TYPE");
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    AlreadyAcceptPage.prototype.showDetail = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_already_detail__["a" /* AlreadyDetailPage */], { task: task });
    };
    //展示地图
    AlreadyAcceptPage.prototype.showMap = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_order_map__["a" /* OrderMapPage */], { task: task });
    };
    AlreadyAcceptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-al-accept',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\accept\already_accept.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>已接取</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <ion-list class="tasklist" *ngFor="let item of taskList"><!-- 悬赏样式 -->\n\n       <div class="tiao bg01" *ngIf="item.TYPE == \'01\'">\n\n            <a class="font03" (click)="showDetail(item)"></a>\n\n            <a class="font04" (click)="showMap(item)"></a>\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span><span style="display: none" class="font02">{{item.CONSUME_TIME}}</span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n       </div>\n\n\n\n        <div class="tiao bg02" *ngIf="item.TYPE != \'01\'">\n\n            <a class="font03" (click)="showDetail(item)"></a>\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span><span class="font02">{{item.CONSUME_TIME}}</span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n        <ion-item class="" style="display: none"><!-- 挑战样式 -->\n\n            <span></span>\n\n            <span>河南郑州郑密路5号</span>\n\n            <span>河南郑州郑密路5号</span>\n\n            <span>张某某 188****8888</span>\n\n            <span>任务内容内容内容一堆内容</span>\n\n            <div style="display: none"></div>\n\n        </ion-item>\n\n    </ion-list>\n\n    <span style="display: none">跑腿</span>\n\n    <span style="display: none">50金币</span>\n\n    <span style="display: none">30分钟</span>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\accept\already_accept.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], AlreadyAcceptPage);
    return AlreadyAcceptPage;
}());

//# sourceMappingURL=already_accept.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_finish_detail__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_DbDict__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinishHistoryPage = /** @class */ (function () {
    function FinishHistoryPage(navCtrl, param, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.taskService = taskService;
        this.taskList = param.get("taskArr");
        this.getAlreadyFinish("");
    }
    FinishHistoryPage.prototype.showDetail = function (id) {
        for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
            var task = _a[_i];
            if (id == task.ID) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_finish_detail__["a" /* FinishDetailPage */], { task: task });
            }
        }
    };
    //获取已完成列表
    FinishHistoryPage.prototype.getAlreadyFinish = function (classType) {
        var _this = this;
        if (classType == undefined || classType == null || classType == "") {
            classType = "10";
        }
        this.taskService.getAlreadyFinish(classType).subscribe(function (data) {
            _this.taskList = data;
            for (var i = 0; i < _this.taskList.length; i++) {
                //任务分类大类型
                _this.taskList[i].BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_5__util_DbDict__["a" /* DbDict */].code2type(_this.taskList[i].BIG_TYPE, "TASK_BIG_TYPE");
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    FinishHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finish_history',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\taskList\finish_history.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n\n\n        <ion-title>已完成</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <ion-list *ngFor="let item of taskList" >\n\n        <div class="tiao" (click)="showDetail(item.ID,index)">\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span>\n\n            <span class="font02">\n\n                <img *ngIf="item.LEVEL>=1" src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL>=2" src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL>=3" src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL>=4" src=\'./assets/imgs/star.png\' />\n\n                <img *ngIf="item.LEVEL>=5" src=\'./assets/imgs/star.png\' />\n\n            </span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\taskList\finish_history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], FinishHistoryPage);
    return FinishHistoryPage;
}());

//# sourceMappingURL=finish_history.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChargeService = /** @class */ (function () {
    function ChargeService(http) {
        this.http = http;
    }
    /**
     * 通过服务端请求获得任务列表
     * @param fileId
     */
    ChargeService.prototype.getChargeInfo = function () {
        var URL = '/charge/getChargeInfo';
        return this.http.post(URL, null, { showLoading: false, showError: true });
    };
    ChargeService.prototype.newOrder = function (orderInfo) {
        var _this = this;
        var URL = '/wallet/rech';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (subscribe) {
            _this.http.post(URL, orderInfo)
                .subscribe(function (value) {
                subscribe.next(value);
            });
        });
    };
    ChargeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], ChargeService);
    return ChargeService;
}());

//# sourceMappingURL=charge.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasePage_4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charge_charge__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_pictures_pictures__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReleasePage_4 = /** @class */ (function () {
    function ReleasePage_4(navCtrl, param, modalController, alertCtrl, actionSheetCtrl, imagePicker, camera, taskService, cmpUtil) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.taskService = taskService;
        this.cmpUtil = cmpUtil;
        this.taskInfo = {}; //任务
        this.range = {}; //金币范围
        this.PUBLISH_IMG_ID = ""; //发布图片id
        this.imgIdsStrList = [];
        this.taskInfo = param.get("taskInfo");
        //this.areaData  = param.get("areaData");
        //this.taskInfo.area = this.areaData;
        //设置默认值
        this.level = "5";
        this.coin = "50000";
        this.range.min = "50000";
        this.range.max = "99999";
        this.date = this.getDate(); //获取当前时间
        this.path1 = "./assets/imgs/star2.png";
        this.path2 = "./assets/imgs/star2.png";
        this.path3 = "./assets/imgs/star2.png";
        this.path4 = "./assets/imgs/star2.png";
        this.path5 = "./assets/imgs/star2.png";
        this.checkPickTime = "0";
        this.pick_time = new Date(+new Date() + 8 * 3600 * 1000).toISOString();
        // let year = this.pick_time.getFullYear();
        //       let  month = this.pick_time.getMonth()+1;
        //       let date = this.pick_time.getDate();
        //       if(month<10){
        //         month="0"+month;
        //       }
        //       if(date<10){
        //         date="0"+month;
        //       }
        //       let hour = this.pick_time.getHours();
        //       let minute  = this.pick_time.getMinutes();
        //       let second = this.pick_time.getSeconds();
        this.limit_time = new Date(+new Date() + 8 * 3600 * 1000).toISOString();
        console.log(this.pick_time);
        console.log(this.limit_time);
    }
    ReleasePage_4.prototype.releaseTask = function () {
        var _this = this;
        var consumeTimeStr; //消耗时间
        var pickTimeStr = this.pick_time.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
        if (this.taskInfo.type_2_code == "11") {
            if (document.querySelectorAll("div[class='datetime-text']") && document.querySelectorAll("div[class='datetime-text']").length > 0) {
                consumeTimeStr = document.querySelectorAll("div[class='datetime-text']")[0].innerHTML;
            }
        }
        var x = consumeTimeStr.indexOf("分");
        if (x == -1) {
            this.consume_time = consumeTimeStr;
        }
        else {
            consumeTimeStr = consumeTimeStr.substring(0, x); //22 分钟内
            this.consume_time = consumeTimeStr;
        }
        /*--------------------------【镖局任务信息校验 start】-----------------------------*/
        if (this.consume_time == "" || this.consume_time == null) {
            this.showAlert('请填写任务耗时');
            return;
        }
        if ((this.pick_time == "" || this.pick_time == null) && this.checkPickTime == 1) {
            this.showAlert('请填写取件时间');
            return;
        }
        console.log("pick_time:" + pickTimeStr);
        console.log("consume_time:" + this.consume_time);
        if (this.weight == "" || this.weight == null) {
            this.showAlert('请填物品重量');
            return;
        }
        if (this.value == "" || this.value == null) {
            this.showAlert('请填物品价值');
            return;
        }
        // if(this.PUBLISH_IMG_ID == "" || this.PUBLISH_IMG_ID == null){
        //     this.showAlert('为了保障您的利益，请对物品进行拍照');
        //     return;
        // }
        /*--------------------------【镖局任务信息校验 end】-----------------------------*/
        this.taskInfo.consume_time = this.consume_time;
        this.taskInfo.pick_time = this.checkPickTime == '0' ? null : pickTimeStr;
        this.taskInfo.weight = this.weight;
        this.taskInfo.value = this.value;
        this.taskInfo.coin = this.coin;
        this.taskInfo.level = this.level;
        this.taskInfo.PUBLISH_IMG_ID = this.PUBLISH_IMG_ID;
        this.cmpUtil.showLoading("发布中...");
        this.taskService.releaseTask(this.taskInfo).subscribe(function (data) {
            var that = _this;
            //发布完成任务自动跳转到历史发布界面
            if (data) {
                _this.cmpUtil.showAlert("恭喜您，任务发布成功");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__taskList_release_history__["a" /* ReleaseHistoryPage */]);
                _this.cmpUtil.hideLoading();
            }
            else {
                _this.alertCtrl.create({
                    title: "提示",
                    message: "任务扣除后不足500金币,是否到充值页面?",
                    buttons: [
                        {
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                console.log('选择取消按钮');
                                that.cmpUtil.hideLoading();
                            }
                        }, {
                            text: '确认',
                            handler: function () {
                                that.cmpUtil.hideLoading();
                                that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__charge_charge__["a" /* ChargePage */]);
                            }
                        }
                    ]
                }).present();
            }
        }, __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //获取当前时间
    ReleasePage_4.prototype.getDate = function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    };
    //设置任务等级
    ReleasePage_4.prototype.setLevel = function (num) {
        this.initStar(); //初始化星星
        for (var i = parseInt(num); i > 0; i--) {
            document.getElementById("star_" + i).src = "./assets/imgs/star2.png";
        }
        this.level = num + ""; //保存等级
        this.taskInfo.level = this.level;
        this.setRange(num);
    };
    //设置根据任务等级金币限制
    ReleasePage_4.prototype.setRange = function (num) {
        if (num == '1') {
            this.range.min = "0";
            this.range.max = "2000";
            this.coin = "2000";
        }
        if (num == '2') {
            this.range.min = "2000";
            this.range.max = "4999";
            this.coin = "4999";
        }
        if (num == '3') {
            this.range.min = "5000";
            this.range.max = "9999";
            this.coin = "9999";
        }
        if (num == '4') {
            this.range.min = "10000";
            this.range.max = "49999";
            this.coin = "49999";
        }
        if (num == '5') {
            this.range.min = "50000";
            this.range.max = "99999";
            this.coin = "99999";
        }
    };
    //初始化星星，全部设置为空心
    ReleasePage_4.prototype.initStar = function () {
        document.getElementById("star_1").src = "./assets/imgs/star1.png";
        document.getElementById("star_2").src = "./assets/imgs/star1.png";
        document.getElementById("star_3").src = "./assets/imgs/star1.png";
        document.getElementById("star_4").src = "./assets/imgs/star1.png";
        document.getElementById("star_5").src = "./assets/imgs/star1.png";
    };
    ReleasePage_4.prototype.onInputTime = function () {
        if (parseInt(this.coin) >= 50000) {
            this.path5 = "./assets/imgs/star2.png";
            this.path4 = "./assets/imgs/star2.png";
            this.path3 = "./assets/imgs/star2.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) >= 10000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star2.png";
            this.path3 = "./assets/imgs/star2.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) >= 5000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star1.png";
            this.path3 = "./assets/imgs/star2.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) >= 2000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star1.png";
            this.path3 = "./assets/imgs/star1.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) < 2000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star1.png";
            this.path3 = "./assets/imgs/star1.png";
            this.path2 = "./assets/imgs/star1.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
    };
    //显示提示信息
    ReleasePage_4.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    ReleasePage_4.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: '拍照',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                // {
                //     text: '从相册选择',
                //     role: 'chooseFromAlbum',
                //     handler: () => {
                //         this.chooseFromAlbum();
                //     }
                // },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    ReleasePage_4.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = { 'fileType': 'jpg', 'fileBase64': imageData };
            _this.path = base64Image;
            _this.upload();
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    ReleasePage_4.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        console.log("进入相册");
        this.camera.getPicture(options).then(function (imageData) {
            console.log("选择图片");
            var base64Image = { 'fileType': 'jpg', 'fileBase64': imageData };
            _this.path = base64Image;
            _this.upload();
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    ReleasePage_4.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "上传失败", message: "只能选择一张图片", buttons: ["确定"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    ReleasePage_4.prototype.upload = function () {
        var _this = this;
        console.log("上传图片");
        if (this.imgIdsStrList.length == 4) {
            this.alertCtrl.create({ title: "", message: "最多上传四张图片", buttons: ["确定"] }).present();
            return;
        }
        this.taskService.uploadFile(this.path).subscribe(function (data) {
            console.log("上传返回" + data);
            console.log("上传返回ID" + data.fileId);
            _this.fileInfo = data;
            //this.PUBLISH_IMG_ID = data.fileId;
            _this.imgIdsStrList.push(data.fileId);
            _this.imgIdsStr = "";
            for (var i = 0; i < _this.imgIdsStrList.length; i++) {
                if (i == 0) {
                    _this.imgIdsStr = _this.imgIdsStrList[i];
                }
                else {
                    _this.imgIdsStr += "," + _this.imgIdsStrList[i];
                }
            }
            _this.PUBLISH_IMG_ID = _this.imgIdsStr;
            console.log("上传返回ID" + _this.PUBLISH_IMG_ID);
            console.log(_this.PUBLISH_IMG_ID.split(',')[0]);
        }, __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    ReleasePage_4.prototype.goPicturesPage = function () {
        var _this = this;
        if (this.imgIdsStr == "" || this.imgIdsStr) {
            console.log("图片没有,不跳转");
            return;
        }
        var picturespage = this.modalController.create(__WEBPACK_IMPORTED_MODULE_9__modal_pictures_pictures__["a" /* PicturesPage */], { "imgIdsStr": this.imgIdsStr });
        picturespage.onDidDismiss(function (result) {
            _this.imgIdsStr = result.imgIdsStr;
        });
        picturespage.present();
    };
    ReleasePage_4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-release4',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\release\release_4.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>发布任务 3/3</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div id="01" >\n\n    	<div class="tim" style="border-bottom:1px solid #2f456e;">\n\n    	<div class="tim_s" style="border-right:1px solid #2f456e;">\n\n        <div>限制时间</div>\n\n        <ion-datetime displayFormat="mm分钟" [(ngModel)]="consume_time" class="font04"\n\n                      placeholder="请输入时间"\n\n                      pickerFormat="mm"\n\n                      cancelText="取消" doneText="确定">\n\n        </ion-datetime>\n\n        </div>\n\n    	<div class="tim_s">\n\n            <ion-select class="tim_s sup" [(ngModel)]="checkPickTime" interface="popover">\n\n                    <ion-option value="0">\n\n                        立即取件\n\n                    </ion-option>\n\n                    <ion-option value="1">\n\n                        定时取件\n\n                    </ion-option>\n\n            </ion-select>\n\n            \n\n            <ion-datetime displayFormat="YYYY/MM/DD HH:mm" [(ngModel)]="pick_time" class="font04 fo2"\n\n                        placeholder="请输入时间"\n\n                        pickerFormat="YYYY-MM-DD HH:mm" min={{limit_time}} max="2030-10-31"\n\n                            cancelText="取消" doneText="确定"  *ngIf="checkPickTime==\'1\'">\n\n            </ion-datetime>\n\n       </div>\n\n        </div>\n\n        <div class="tim">\n\n            <div class="tim_s" style="border-right:1px solid #2f456e;">\n\n                <div>物品重量</div>\n\n                <ion-select [(ngModel)]="weight" placeholder="选择物品重量" style="max-width:100%" okText="确定" cancelText="取消" interface="popover" >\n\n                <ion-option value="小于5KG">小于5KG</ion-option>\n\n                <ion-option value="6KG">6KG</ion-option>\n\n                <ion-option value="7KG">7KG</ion-option>\n\n                <ion-option value="8KG">8KG</ion-option>\n\n                <ion-option value="9KG">9KG</ion-option>\n\n                <ion-option value="10KG">10KG</ion-option>\n\n                <ion-option value="大于10KG">大于10KG</ion-option>\n\n                </ion-select>\n\n            </div>\n\n            <div class="tim_s">\n\n                <div>物品价值</div>\n\n                <ion-input clearInput type="text" placeholder="10金币=1RMB" class="font04"\n\n                           [(ngModel)]="value"  style="text-align:center" >\n\n                </ion-input>\n\n                <span>金币</span>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="pho01"><img (click)="goPicturesPage()" [asyncSrc]="PUBLISH_IMG_ID.split(\',\')[0]" src="./assets/imgs/img21.png" /></div>\n\n        <div class="pho02" (click)="presentActionSheet()" ><img src="./assets/imgs/img22.png" /></div>\n\n        <ion-item>\n\n            <div class="star">\n\n                <img id="star_1" (click)="setLevel(\'1\')" src={{path1}} />\n\n                <img id="star_2" (click)="setLevel(\'2\')" src={{path2}}/>\n\n                <img id="star_3" (click)="setLevel(\'3\')" src={{path3}}/>\n\n                <img id="star_4" (click)="setLevel(\'4\')" src={{path4}}/>\n\n                <img id="star_5" (click)="setLevel(\'5\')" src={{path5}}/>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item style="text-align: center">\n\n            <ion-input clearInput type="number" placeholder="请输入金币数 0~99,999" [min]="1" [max]="5" class="coin"\n\n                       (ionChange)="onInputTime()"\n\n                       [(ngModel)]="coin">{{coin}} </ion-input>\n\n        </ion-item>\n\n        <div class="serve"><img src="./assets/imgs/dui.png" />《镖局服务协议》 《帮送服务协议》</div>\n\n    </div>\n\n\n\n    <div class="btn">\n\n        <div (click)="releaseTask()" class="anniu_l" style="padding-top: 20px">立即发布</div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\release\release_4.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_0__util_components_util__["a" /* ComponentsUtil */]])
    ], ReleasePage_4);
    return ReleasePage_4;
}());

//# sourceMappingURL=release_4.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPublisherCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_DbDict__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_publisher__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__release_release_2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirm_publisher_check_un_finish__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfirmPublisherCheckPage = /** @class */ (function () {
    function ConfirmPublisherCheckPage(navCtrl, param, alertCtrl, componentsUtil, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.alertCtrl = alertCtrl;
        this.componentsUtil = componentsUtil;
        this.taskService = taskService;
        this.task = {};
        this.state = '04';
        this.task = param.get("task");
        //标准代码转中文描述
        this.task.TYPE_STR = __WEBPACK_IMPORTED_MODULE_4__util_DbDict__["a" /* DbDict */].code2type(this.task.TYPE, "TASK_TYPE");
        this.task.BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_4__util_DbDict__["a" /* DbDict */].code2type(this.task.BIG_TYPE, "TASK_BIG_TYPE");
        this.task.FEE_TYPE_STR = __WEBPACK_IMPORTED_MODULE_4__util_DbDict__["a" /* DbDict */].code2type(this.task.FEE_TYPE, "TASK_FEE_TYPE");
        this.task.PARTNER_GENDER_STR = __WEBPACK_IMPORTED_MODULE_4__util_DbDict__["a" /* DbDict */].code2type(this.task.PARTNER_GENDER, "TASK_PARTNER_GENDER");
        this.timeParse();
    }
    //重发任务
    ConfirmPublisherCheckPage.prototype.againTask = function (id) {
        this.task.again = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__release_release_2__["a" /* ReleasePage_2 */], { taskInfo: this.task });
    };
    //跳转到评价页面
    ConfirmPublisherCheckPage.prototype.toEval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__confirm_publisher__["a" /* ConfirmPublisherPage */], { task: this.task });
    };
    ConfirmPublisherCheckPage.prototype.confirmTask = function () {
        var _this = this;
        var data = {
            taskId: this.task.ID,
            state: this.state
        };
        if (this.state == '04') {
            this.taskService.confirmFinishTask({ taskId: this.task.ID }).subscribe(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__confirm_publisher__["a" /* ConfirmPublisherPage */], { task: _this.task });
            }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        else {
            this.taskService.confirmUnFinishTask({ taskId: this.task.ID }).subscribe(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__confirm_publisher_check_un_finish__["a" /* ConfirmPublisherCheckUnFinishPage */], { task: _this.task });
            }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        // this.taskService.confirmTask(data).subscribe(data => {
        //     this.navCtrl.push(HomePage);
        // }, CommonUtil.emptyCallback);
    };
    ConfirmPublisherCheckPage.prototype.timeParse = function () {
        var startTime = new Date(this.task.ORDER_TIME);
        var endTime = new Date(this.task.FINISH_TIME);
        var mins = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].diff(endTime, startTime, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].MINUTES);
        console.log(mins);
        this.task.EXPIRE_TIME_STR = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].min2ZhHourMin(mins);
        this.task.TOTAL_TIME_STR = this.totalTimeParse(new Date(this.task.FINISH_TIME), new Date(this.task.ORDER_TIME));
    };
    ConfirmPublisherCheckPage.prototype.totalTimeParse = function (finishTime, startTime) {
        var diffs = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].diff(finishTime, startTime, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].SECONDS);
        var hours = Math.floor(diffs / 3600);
        var mins = Math.floor((diffs - hours * 3600) / 60);
        var seconds = diffs - hours * 3600 - mins * 60;
        return __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2DoubleDigit(hours) + ":" + __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2DoubleDigit(mins) + "' " + seconds;
    };
    ConfirmPublisherCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-publisher-check',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\confirm\confirm_publisher_check.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>任务评价</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;" class="detail">\n\n\n\n    <div class="tiao2 detail-title">\n\n        <span class="font01">{{task.BIG_TYPE_STR}}</span>\n\n        <div class="detail-star star-top">\n\n            <img *ngFor="let i of [1,2,3,4,5]" [hidden]="task.LEVEL < i" src=\'./assets/imgs/star.png\' />\n\n        </div>\n\n        <span style="display: block;">{{task.DESCRIPTION}}</span>\n\n    </div>\n\n\n\n    <div class="font03">\n\n        <span class="left">任务用时</span>\n\n        <span class="time">{{task.TOTAL_TIME_STR}}</span>\n\n    </div>\n\n\n\n    <div *ngIf="task.TYPE == \'03\'">\n\n        <div class="bg01-2">\n\n            <div class="title02">{{task.ANSWER}}</div>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <div class="con03">\n\n        <span [ngClass]="{true: \'active\', false: \'\'}[state == \'04\']" (click)="state = \'04\'">完成</span>\n\n        <span [ngClass]="{true: \'active\', false: \'\'}[state == \'05\']" (click)="state = \'05\'">未完成</span>\n\n    </div>\n\n    <div class="font03" (click)="confirmTask()">确认提交</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\confirm\confirm_publisher_check.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], ConfirmPublisherCheckPage);
    return ConfirmPublisherCheckPage;
}());

//# sourceMappingURL=confirm_publisher_check.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unfriendinfo_unfriendinfo__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friendinfo_friendinfo__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendPage = /** @class */ (function () {
    function FriendPage(navCtrl, userService, friendService, param) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.friendService = friendService;
        this.param = param;
        this.friends = [];
        this.unFriends = [];
        this.input = "";
        this.tabs = "01";
    }
    FriendPage.prototype.ionViewDidEnter = function () {
        this.getFriendList();
        //this.getUnFriendList();
    };
    FriendPage.prototype.getFriendList = function () {
        var _this = this;
        this.friendService.getFriendList(this.input).subscribe(function (data) {
            _this.friends = data;
        });
    };
    FriendPage.prototype.getUnFriendList = function () {
        var _this = this;
        this.friendService.getUnFriendList(this.input).subscribe(function (data) {
            _this.unFriends = data;
        });
    };
    FriendPage.prototype.getFriendInfo = function (friend) {
        var _this = this;
        var id;
        if (friend.FRIEND_ID) {
            id = friend.FRIEND_ID;
        }
        if (friend.USER_ID) {
            id = friend.USER_ID;
        }
        this.friendService.getFriendInfo(id).subscribe(function (data) {
            if (data) {
                if (_this.tabs == "01") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__friendinfo_friendinfo__["a" /* FriendInfoPage */], { friendInfo: data });
                }
                else if (_this.tabs == "02") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__unfriendinfo_unfriendinfo__["a" /* UnFriendInfoPage */], { friendInfo: data });
                }
            }
        });
    };
    FriendPage.prototype.removeFriend = function (friend, index) {
        var _this = this;
        this.friendService.removeFriend(friend.USER_ID).subscribe(function (data) {
            if (data) {
                _this.friends.splice(index, 1);
            }
        });
    };
    FriendPage.prototype.getInput = function (e) {
        var _this = this;
        this.input = e.target.value;
        if (e.keyCode == 13) {
            if (this.tabs == "01") {
                this.friendService.getFriendList(this.input).subscribe(function (data) {
                    _this.friends = data;
                });
            }
            else if (this.tabs = '02') {
                this.friendService.getUnFriendList(this.input).subscribe(function (data) {
                    _this.unFriends = data;
                });
            }
        }
    };
    FriendPage.prototype.segmentChanged = function (e) {
        if (e._value == '01') {
            this.getFriendList();
        }
        else if (e._value == '02') {
            this.getUnFriendList();
        }
    };
    FriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-friend',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\friend\friend.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>好友列表</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="tabs" (ionChange)="segmentChanged($event)">\n\n      <ion-segment-button value="01">\n\n        已添加\n\n      </ion-segment-button>\n\n      <ion-segment-button value="02">\n\n        未添加\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <div class="img_l"><img src=\'./assets/imgs/img14.png\' /><ion-input (keyup)="getInput($event)" clearInput  class="lo_ico01"></ion-input></div>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n  <div [ngSwitch]="tabs">\n\n    <ion-list *ngSwitchCase="\'01\'">\n\n      <ion-item-sliding  *ngFor="let friend of friends  index as i ">\n\n        <ion-item (click)="getFriendInfo(friend)"  class="img03">\n\n           <img class="login-img" item-left [asyncSrc]="friend.PIC_ID" src="./assets/imgs/head.png">\n\n          {{friend.USER_NAME}}\n\n          <img  src="./assets/imgs/da{{friend.USER_LEV}}.png"  />\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button danger (click)="removeFriend(friend,i)" class="dete"> </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'02\'">\n\n      <ion-item-sliding  *ngFor="let unFriend of unFriends  index as i ">\n\n        <ion-item (click)="getFriendInfo(unFriend)"  class="img03">\n\n          <img class="login-img" item-left [asyncSrc]="unFriend.PIC_ID">\n\n          {{unFriend.SHORT_NAME}}\n\n          <img  src="./assets/imgs/da{{unFriend.USER_LEV}}.png"  />\n\n        </ion-item>\n\n      </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\friend\friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__providers_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mypic_mypic__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myinfo_myinfo__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyPage = /** @class */ (function () {
    function MyPage(navCtrl, myservice, componentsUtil) {
        this.navCtrl = navCtrl;
        this.myservice = myservice;
        this.componentsUtil = componentsUtil;
        this.areaList = [];
        this.myInfo = {};
        this.taskDist = 0;
        this.taskLev = 1;
        this.star1 = "0";
        this.star2 = "0";
        this.star3 = "0";
        this.star4 = "0";
        this.star5 = "0";
    }
    MyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.myservice.getAreaList().subscribe(function (data) {
            _this.areaList = data;
            for (var i = 0; i < _this.areaList.length; i++) {
                if (_this.areaList[i].AREA_ID == _this.areaList[i].AREA) {
                    _this.areaList[i].checked = true;
                }
                else {
                    _this.areaList[i].checked = false;
                }
            }
            _this.areaId = _this.areaList[0].AREA;
        });
        this.myservice.getMyInfo().subscribe(function (data) {
            _this.myInfo = data;
            _this.taskDist = _this.myInfo.TASK_DIST;
            _this.taskLev = _this.myInfo.TASK_LEV;
            _this.areaId = _this.myInfo.AERA_ID;
            console.log(_this.taskLev);
            if (_this.taskLev == 1) {
                _this.star1 = "";
                _this.star2 = "0";
                _this.star3 = "0";
                _this.star4 = "0";
                _this.star5 = "0";
            }
            if (_this.taskLev == 2) {
                _this.star1 = "";
                _this.star2 = "";
                _this.star3 = "0";
                _this.star4 = "0";
                _this.star5 = "0";
            }
            if (_this.taskLev == 3) {
                _this.star1 = "";
                _this.star2 = "";
                _this.star3 = "";
                _this.star4 = "0";
                _this.star5 = "0";
            }
            if (_this.taskLev == 4) {
                _this.star1 = "";
                _this.star2 = "";
                _this.star3 = "";
                _this.star4 = "";
                _this.star5 = "0";
            }
            if (_this.taskLev == 5) {
                _this.star1 = "";
                _this.star2 = "";
                _this.star3 = "";
                _this.star4 = "";
                _this.star5 = "";
            }
        });
    };
    MyPage.prototype.ionViewDidLeave = function () {
        this.updateTaskInfo();
    };
    MyPage.prototype.updateMyInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myinfo_myinfo__["a" /* MyInfoPage */], { "userName": this.myInfo.USER_NAME, "telephone": this.myInfo.TELEPHONE });
    };
    MyPage.prototype.updateTaskInfo = function () {
        console.log(this.areaId);
        if (this.areaId && this.taskDist && this.taskLev) {
            this.myservice.updateTaskInfo({ taskDist: this.taskDist, taskLev: this.taskLev, areaId: this.areaId }).subscribe(function (data) {
                if (data) {
                    // this.toastOptions.message="已保存";
                    // this.componentsUtil.showToast(this.toastOptions);
                }
            });
        }
    };
    MyPage.prototype.checkArea = function (i) {
        for (var j = 0; j < this.areaList.length; j++) {
            this.areaList[j].checked = false;
        }
        this.areaList[i].checked = true;
        this.areaId = this.areaList[i].AREA_ID;
        console.log(this.areaList);
        this.updateTaskInfo();
    };
    MyPage.prototype.clickstar = function (flag) {
        this.taskLev = flag;
        if (flag == 1) {
            this.star1 = "";
            this.star2 = "0";
            this.star3 = "0";
            this.star4 = "0";
            this.star5 = "0";
        }
        else if (flag == 2) {
            this.star1 = "";
            this.star2 = "";
            this.star3 = "0";
            this.star4 = "0";
            this.star5 = "0";
        }
        else if (flag == 3) {
            this.star1 = "";
            this.star2 = "";
            this.star3 = "";
            this.star4 = "0";
            this.star5 = "0";
        }
        else if (flag == 4) {
            this.star1 = "";
            this.star2 = "";
            this.star3 = "";
            this.star4 = "";
            this.star5 = "0";
        }
        else if (flag == 5) {
            this.star1 = "";
            this.star2 = "";
            this.star3 = "";
            this.star4 = "";
            this.star5 = "";
        }
        this.updateTaskInfo();
    };
    MyPage.prototype.changeTaskDist = function () {
        this.updateTaskInfo();
    };
    MyPage.prototype.updateMyPic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__mypic_mypic__["a" /* MyPicPage */], { "PIC_ID": this.myInfo.PIC_ID });
    };
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-my',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\my\my.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n    <ion-title>个人信息</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n<div class="img02"> <img (click)="updateMyPic()" src="./assets/imgs/head.png" [asyncSrc]="myInfo.PIC_ID">\n\n    <div [ngClass]="{\'tit011\':myInfo.USER_LEV==\'01\',\'tit012\':myInfo.USER_LEV==\'02\',\'tit013\':myInfo.USER_LEV==\'03\',\'tit014\':myInfo.USER_LEV==\'04\'}" >{{myInfo.SHORT_NAME}}</div>\n\n    <div (click)="updateMyInfo()"  class="tit02">{{myInfo.USER_NAME}}</div>\n\n    <div (click)="updateMyInfo()"  class="tit03">{{myInfo.TELEPHONE}}</div>\n\n</div>\n\n<ion-item>\n\n        <span class="font02">任务范围</span>\n\n    </ion-item>\n\n    <ion-item class="city" >\n\n        <span  *ngFor="let area of areaList   index as i " (click)="checkArea(i)" [ngClass]="{\'cur\':area.checked}">{{area.AREA_NAME}}</span>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-range   min="0" max="5000" pin="true" [(ngModel)]="taskDist" step="100" ></ion-range>\n\n    <ion-badge item-end>{{taskDist}}米</ion-badge>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="font02">任务难度</span>\n\n    </ion-item>\n\n    <ion-item>\n\n        <!-- <ion-range  min="1" max="10" pin="true" [(ngModel)]="taskLev" step="1" ></ion-range> -->\n\n      <div class=\'stars\' >  \n\n        <img (click)="clickstar(1)" src="./assets/imgs/star{{star1}}.png">\n\n        <img (click)="clickstar(2)" src="./assets/imgs/star{{star2}}.png">\n\n        <img (click)="clickstar(3)" src="./assets/imgs/star{{star3}}.png">\n\n        <img (click)="clickstar(4)" src="./assets/imgs/star{{star4}}.png">\n\n        <img (click)="clickstar(5)" src="./assets/imgs/star{{star5}}.png">\n\n      </div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\my\my.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_my_service__["a" /* MyService */], __WEBPACK_IMPORTED_MODULE_1__util_components_util__["a" /* ComponentsUtil */]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__friendrank_friendrank__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_accept_accept__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__task_accept_already_accept__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_taskList_finish_history__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_echarts__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__task_release_release_2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__task_upload_upload__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_app_global__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

///<reference path="../task/accept/accept.ts"/>
///<reference path="../task/release/release.ts"/>
///<reference path="../task/finish/finish.ts"/>


















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation, platform, alertCtrl, homeService, taskService, userService) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.homeService = homeService;
        this.taskService = taskService;
        this.userService = userService;
        this.taskCount = {};
        this.showFlag = false;
        this.personal = {}; //个人信息
        this.taskCount.num_1 = 0;
        this.taskCount.num_2 = 0;
        this.taskCount.num_3 = 0;
        // 统计查询当前任务数量
        this.getTaskCount();
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            // 定位
            _this.locating();
            _this.initPieChart(); //初始化近度条
            _this.updatePosition(); //更新位置信息
            _this.getCity();
        });
    };
    // 页面控件初始化完成，加载数据
    HomePage.prototype.ionViewWillEnter = function () {
        this.alive = true;
        this.getTaskCount();
        this.updatePosition(); //更新位置信息
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.alive = false;
    };
    // 页面销毁
    HomePage.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        if (this.userService.isLogin()) {
            this.picId = "77055896-b68b-40d4-b495-83cf2602b483";
            this.homeService.getStation().subscribe(function (data) {
                _this.stations = data.stations;
            }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.updatePosition = function () {
        var that = this;
        try {
            baidumap_location.getCurrentPosition(function (result) {
                var addrInfo = {};
                addrInfo.addr = result.addr;
                that.taskService.updatePosition(result.addr).subscribe(function (data) {
                }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    HomePage.prototype.toReleaseTask = function () {
        var that = this;
        if (this.personal.AUDIT_STATUS == "02"
            || this.personal.AUDIT_STATUS == ""
            || this.personal.AUDIT_STATUS == null) {
            this.showAlert('审核未通过，请通过审核后再操作！');
            setTimeout(function () {
                that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__task_upload_upload__["a" /* UploadPage */]);
            }, 3000);
            return;
        }
        if (this.personal.AUDIT_STATUS == "03") {
            this.showAlert('正在审核中，请审核完毕再操作!');
            return;
        }
        var taskInfo = {};
        taskInfo.coin_personal = this.personal.COIN;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__task_release_release_2__["a" /* ReleasePage_2 */], { taskInfo: taskInfo });
    };
    HomePage.prototype.toAcceptTask = function () {
        if (this.personal.AUDIT_STATUS == "02"
            || this.personal.AUDIT_STATUS == ""
            || this.personal.AUDIT_STATUS == null) {
            this.showAlert('审核未通过，请通过审核后再操作！');
            return;
        }
        if (this.personal.AUDIT_STATUS == "03") {
            this.showAlert('正在审核中，请审核完毕再操作!');
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__task_accept_accept__["a" /* AcceptPage */]);
    };
    //显示提示信息
    HomePage.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    HomePage.prototype.toAlreadyAccept = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__task_accept_already_accept__["a" /* AlreadyAcceptPage */]);
    };
    //跳转到已发布的
    HomePage.prototype.toReleaseHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__task_taskList_release_history__["a" /* ReleaseHistoryPage */]);
    };
    //跳转到已完成的
    HomePage.prototype.toFinish = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__task_taskList_finish_history__["a" /* FinishHistoryPage */]);
    };
    HomePage.prototype.showInfo = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
        this.homeService.updateShowFlag(this.showFlag).subscribe(function (data) {
            console.log(data + "修改隐私状态");
        });
    };
    // 定位
    HomePage.prototype.locating = function () {
        var that = this;
        try {
            baidumap_location.getCurrentPosition(function (result) {
                var point = new BMap.Point(result.lontitude, result.latitude);
                // 更新定位地点
                var _str = result.lontitude + "," + result.latitude;
                that.taskService.updatePosition({ addr: _str }); //更新地址
                that.city = result.city;
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    HomePage.prototype.getCity = function () {
        // 百度地图API功能
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == 0) {
                this.city = r.address.city;
                __WEBPACK_IMPORTED_MODULE_18__app_app_global__["a" /* GlobalVariable */].setCity(r.address.city); //设置全局变量值
            }
            else {
                console.log('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true });
    };
    // 统计查询当前任务数量
    HomePage.prototype.getTaskCount = function () {
        var _this = this;
        this.taskService.getTaskCount().subscribe(function (data) {
            if (data.length > 0) {
                _this.taskCount = data[0];
                _this.initPieChart(); //重新展示进度条
            }
            if (data.length > 1) {
                _this.personal = data[1];
                _this.showFlag = _this.personal.SHOW_FLAG == 1 ? true : false;
            }
        }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    HomePage.prototype.goFriendRankPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__friendrank_friendrank__["a" /* FriendRankPage */]);
    };
    //进度条图形
    HomePage.prototype.initPieChart = function () {
        var zNum = this.taskCount.num_4; //总数
        var yNum = this.taskCount.num_3; //已完成
        var rate;
        if (zNum == null)
            zNum = "0";
        if (yNum == null)
            yNum = "0";
        var wNum = parseInt(zNum) - parseInt(yNum); //未完成数
        if (zNum == "0") {
            rate = "0%";
            wNum = 1;
        }
        else {
            rate = (parseInt(yNum) / parseInt(zNum)) * 100;
            rate = rate.toFixed(0);
            rate = rate + "%";
        }
        this.rate = rate;
        var ec = __WEBPACK_IMPORTED_MODULE_15_echarts__;
        var pie = document.getElementById("pie");
        var pieChart = ec.init(pie);
        var pieChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['',]
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    clockWise: true,
                    startAngle: -90,
                    minAngle: 0,
                    radius: ['60%', '72%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{ name: rate, value: yNum, itemStyle: { color: '#31e0ef',
                                label: { show: false, position: 'center', fontSize: 22 } } },
                        { name: '未完成数', value: wNum, label: { show: false }, itemStyle: { opacity: 0 } }
                    ]
                }
            ]
        };
        pieChart.setOption(pieChartOption);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\home\home.html"*/'<ion-header no-border>\n\n    <script src="js/echarts.js"></script>\n\n  <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n    <ion-title></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n             <span class="posit">{{city}}</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div>\n\n        <div style="position:relative;background:url(\'./assets/imgs/bg_adm.png\') no-repeat;width:244px;height:242px;margin:0 auto;">\n\n            <div id="pie" style="width:178px;height:178px;float:left;margin:33px 0 0 32px;"></div>\n\n            <div style="position:absolute;z-index:999999999;left:64px;top:64px"><img class="headpic" [asyncSrc]="personal.PIC_ID"   src="./assets/imgs/head.png" /></div>\n\n    	<div class="img01" (click)="goFriendRankPage()"><img src=\'./assets/imgs/img01.png\' /></div>\n\n    	<div class="img02">{{this.rate}}</div>\n\n        </div>\n\n\n\n        \n\n    	<ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6 col-auto offset-2 style="margin-left:11%">\n\n            <span [ngClass]="{\'adm011\':personal.USER_LEV==\'01\',\'adm012\':personal.USER_LEV==\'02\',\'adm013\':personal.USER_LEV==\'03\',\'adm014\':personal.USER_LEV==\'04\'}">{{personal.SHORT_NAME}}</span>\n\n          </ion-col><ion-col><span *ngIf="showFlag" class="adm02" #coinstatus >{{personal.COIN}}</span><span *ngIf="!showFlag" class="adm02" #coinstatus >***</span><span class="eye" (click)="showInfo()"></span></ion-col></ion-row>\n\n          \n\n      </ion-grid>\n\n    </div>\n\n    \n\n    <div class="img03">\n\n    	<div  style="float:left;margin:20px 0 0 0;"><span (click)="toReleaseHistory()" class="font03">{{taskCount.num_1}}</span><br/><span class="font04">发布</span></div>\n\n    	<div style="float:left;margin:0 0 0 65px;"><span (click)="toAlreadyAccept()" class="font01">{{taskCount.num_2}}</span><br/><span class="font02">待完成</span></div>\n\n    	<div style="float:right;margin:20px 0 0 0;"><span (click)="toFinish()" class="font03">{{taskCount.num_3}}</span><br/><span class="font04">完成</span></div>\n\n    </div>\n\n    <!--<ion-slides auto-play="true" slide-interval=2000 style="height:15%;">\n\n        <ion-slide>\n\n          <ion-grid (click)="toReleaseHistory()" >\n\n              <ion-row><ion-col><span class="font01">{{taskCount.num_1}}</span></ion-col></ion-row>\n\n              <ion-row><ion-col><span class="font02">发布</span></ion-col></ion-row>\n\n            </ion-grid>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <ion-grid (click)="toAlreadyAccept()">\n\n                <ion-row><ion-col><span class="font01">{{taskCount.num_2}}</span></ion-col></ion-row>\n\n                <ion-row><ion-col><span class="font02">待完成</span></ion-col></ion-row>\n\n              </ion-grid>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <ion-grid (click)="toFinish()">\n\n                <ion-row><ion-col><span class="font01">{{taskCount.num_3}}</span></ion-col></ion-row>\n\n                <ion-row><ion-col><span class="font02">已完成</span></ion-col></ion-row>\n\n              </ion-grid>\n\n        </ion-slide>\n\n    </ion-slides>-->\n\n  <ion-slides auto-play="true" effect="cube" does-continue="true" slide-interval=2000 style="height:27%;">\n\n    <ion-slide>\n\n      <div class="box banner"><img src="./assets/imgs/dt01.jpg" /> </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <div class="box banner"><img src="./assets/imgs/dt01.jpg" /> </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <div class="box banner"><img src="./assets/imgs/dt01.jpg" /> </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <div style="float: left;margin-left:9%">\n\n    <button clear="true" ion-button item-end (click)="toReleaseTask()" class="red_b">发布任务</button>\n\n  </div>\n\n  <div style="float:right;margin-right:9%">\n\n    <button clear="true" ion-button item-end (click)="toAcceptTask()" class="blue_b">接取任务</button>\n\n  </div>\n\n  <img class="login-img" [asyncSrc]="picId">\n\n\n\n  <ion-list *ngFor="let item of stations" >\n\n    {{item.stationName}}\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 255;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAddrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_my_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_global__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var getAddrPage = /** @class */ (function () {
    function getAddrPage(navCtrl, param, geolocation, alertCtrl, homeService, myService, viewCtrl, contacts) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.homeService = homeService;
        this.myService = myService;
        this.viewCtrl = viewCtrl;
        this.contacts = contacts;
        this.id = "";
        // 地图开启标志
        this.mapOn = true;
        // 搜索关键字
        this.searchKey = '';
        this.cardAddr = ""; //门牌号
        this.signFlag = false;
        this.city = __WEBPACK_IMPORTED_MODULE_8__app_app_global__["a" /* GlobalVariable */].getCity(); //当前定位的城市
        this.localSearch = {};
        this.searchCache = "";
        this.centerPoint = "";
        this.centerAddr = "";
        this.id = param.data.ID ? param.data.ID : "";
        this.contact = param.data.CONTACT ? param.data.CONTACT : "";
        this.telephone = param.data.TELEPHONE ? param.data.TELEPHONE : "";
        this.address = param.data.ADDRESS ? param.data.ADDRESS : "";
        this.centerAddrFlag = false;
        // this.address = '郑州火车站';
    }
    getAddrPage.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            // 定位
            _this.locating();
            _this.initAutoDropDown(); //初始化自动搜索组件
        });
    };
    //初始化自动搜索组件
    getAddrPage.prototype.initAutoDropDown = function () {
        var that = this;
        if (this.city == "") {
            this.city = "北京";
        }
        this.localSearch = new BMap.LocalSearch(this.city, { "onSearchComplete": function (result) {
                if (result.tr != undefined) {
                    that.creatPanel(result.tr);
                }
            }
        });
    };
    //拼装搜索结果下拉框
    getAddrPage.prototype.creatPanel = function (data) {
        var str = "";
        var ln = 0;
        if (data.length > 0 && data.length < 5) {
            ln = data.length;
        }
        else if (data.length > 5) {
            ln = 5;
        }
        for (var i = 0; i < ln; i++) {
            if (data[i].title != undefined
                && data[i].point != undefined) {
                var title = data[i].title;
                var point = data[i].point;
                str = str + "<li id='" + point.lng + "," + point.lat + "' (click)='locationPoint(e)'>" + title + "</li>";
            }
        }
        var cont = document.getElementById("searchResultPanel");
        if (cont != null) {
            cont.innerHTML = "";
            cont.innerHTML += str;
        }
        cont.style.display = "block";
    };
    //下拉框点击事件
    getAddrPage.prototype.locationPoint = function () {
        var addrStr = event.srcElement.innerHTML;
        var pointStr = event.srcElement.id;
        if (pointStr.length > 1) {
            //获取经纬度
            var lng = parseFloat(pointStr.split(",")[0]);
            var lat = parseFloat(pointStr.split(",")[1]);
            var point = new BMap.Point(lng, lat);
            //隐藏下拉框
            document.getElementById("searchResultPanel").style.display = "none";
            this.searchKey = addrStr;
            this.searchCache = addrStr;
            this.setPlace(point); //将地图移动到目标位置
        }
    };
    //获取点对象，将地图移至目标位置
    getAddrPage.prototype.setPlace = function (point) {
        this.map.clearOverlays(); //清除地图上所有覆盖物
        var signIcon = new BMap.Icon("./assets/imgs/sign1.png", new BMap.Size(20, 20));
        this.centerPoint = point.lng + "," + point.lat;
        this.map.centerAndZoom(point, 18);
        this.map.addOverlay(new BMap.Marker(point, { icon: signIcon })); //添加标注
    };
    //值改变时搜索地址
    getAddrPage.prototype.searchAddr = function () {
        // 当缓存地址不为空且输入地址不跟缓存一致的情况下，才进行查询，
        // 否则判定为当前是点击搜索结果造成的值改变
        if (this.searchCache == "" || this.searchKey != this.searchCache) {
            if (this.searchKey.length > 1) {
                this.localSearch.search(this.searchKey);
            }
        }
    };
    //失去焦点时隐藏下拉框列表
    getAddrPage.prototype.setShow = function (flag) {
        if (flag == "true") {
            document.getElementById("searchResultPanel").style.display = "block";
        }
        else {
            setTimeout("document.getElementById(\"searchResultPanel\").style.display = \"none\"", 100);
            // document.getElementById("searchResultPanel").style.display = "none";
        }
    };
    getAddrPage.prototype.locating = function () {
        // 百度地图API功能
        this.map = new BMap.Map("bmap");
        var point = new BMap.Point(116.331398, 39.897445);
        this.map.centerAndZoom(point, 18);
        var geolocation = new BMap.Geolocation();
        var that = this;
        var signIcon = new BMap.Icon("./assets/imgs/sign1.png", new BMap.Size(20, 20));
        this.map.addEventListener("movestart", function () {
            that.map.clearOverlays(); //清除覆盖物
            that.signFlag = true;
        });
        this.map.addEventListener("moveend", function () {
            that.signFlag = false;
            var pt = that.map.getCenter();
            that.map.clearOverlays();
            var mk = new BMap.Marker(pt, { icon: signIcon });
            that.map.addOverlay(mk);
            var geoc = new BMap.Geocoder();
            geoc.getLocation(pt, function (rs) {
                if (typeof (that.centerAddr) != "undefined") {
                    that.centerPoint = rs.point.lng + "," + rs.point.lat;
                    var addComp = rs.addressComponents;
                    //that.centerAddr = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                    if (that.centerAddrFlag) {
                        that.centerAddr = rs.address;
                    }
                    else {
                        that.centerAddr = that.address;
                        that.centerAddrFlag = true;
                    }
                }
            });
        });
        this.map.addEventListener("zoomstart", function () {
            that.map.clearOverlays(); //清除覆盖物
            that.signFlag = true;
        });
        this.map.addEventListener("zoomend", function () {
            that.signFlag = false;
            var pt = that.map.getCenter();
            that.map.clearOverlays();
            var mk = new BMap.Marker(pt, { icon: signIcon });
            that.map.addOverlay(mk);
            var geoc = new BMap.Geocoder();
            geoc.getLocation(pt, function (rs) {
                if (typeof (that.centerAddr) != "undefined") {
                    that.centerPoint = rs.point.lng + "," + rs.point.lat;
                    var addComp = rs.addressComponents;
                    //that.centerAddr = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                    that.centerAddr = rs.address;
                }
            });
        });
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == "0") {
                var mk = new BMap.Marker(r.point, { icon: signIcon });
                that.map.addOverlay(mk);
                that.map.panTo(r.point);
                //map.addControl(new BMap.MapTypeControl({ mapTypes: ['BMAP_NORMAL_MAP'] }));
                //that.showAlert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
                //that.showAlert('failed'+this.getStatus());
            }
        }, { enableHighAccuracy: true });
    };
    getAddrPage.prototype.addStartIcon = function (point) {
        var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(100, 100));
        var marker2 = new BMap.Marker(point, { icon: myIcon }); // 创建标注
        this.map.addOverlay(marker2); // 将标注添加到地图中
    };
    getAddrPage.prototype.delAddrCont = function () {
        var that = this;
        var alert = this.alertCtrl.create({
            title: '确定删除吗?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        that.myService.delAddrCont({ id: that.id }).subscribe(function (data) {
                            if (data) {
                                that.showAlert("操作成功");
                                that.viewCtrl.dismiss({ result: "1" });
                            }
                            else {
                                that.showAlert("操作失败");
                                that.viewCtrl.dismiss({ result: "0" });
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    getAddrPage.prototype.newAddrCont = function () {
        var _this = this;
        this.myService.newAddrCont({ id: this.id, contact: this.contact, address: this.centerAddr + this.cardAddr, telephone: this.telephone, point: this.centerPoint }).subscribe(function (data) {
            if (data) {
                _this.showAlert("操作成功");
                _this.viewCtrl.dismiss({ result: "1" });
            }
            else {
                _this.showAlert("操作失败");
                _this.viewCtrl.dismiss({ result: "0" });
            }
        });
    };
    getAddrPage.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    getAddrPage.prototype.checkcontact = function () {
        var _this = this;
        this.contacts.pickContact().then(function (cont) {
            _this.contact = (cont.name.familyName ? cont.name.familyName : "") + (cont.name.givenName ? cont.name.givenName : "");
            _this.telephone = cont.phoneNumbers[0].value;
        }).catch(function (err) {
            _this.showAlert("获取联系人失败");
        });
    };
    getAddrPage.prototype.getBack = function () {
        this.viewCtrl.dismiss();
    };
    getAddrPage.prototype.getCardAddr = function (e) {
        this.cardAddr = e.target.value;
    };
    getAddrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-get_addr',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\map\get_addr.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <button ion-button clear (click)="getBack()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button> \n\n        <ion-title>地址维护</ion-title>\n\n        <button ion-button *ngIf="id!=\'\'&&id"  (click)="delAddrCont()" style="float: right;background:transparent">\n\n            <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- 地图板块 -->\n\n<ion-content class="map-p" overflow-scroll="true" style="overflow: hidden" [hidden]="!mapOn || searching" padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <ion-list>\n\n    	<div class="con">	\n\n    <a class="txl" style="float:right;margin-top: 10px;" (click)="checkcontact()"><img src="./assets/imgs/icon20.png" /></a>\n\n    <ion-item class="ts">\n\n                <ion-input clearInput type="text" placeholder="姓名"\n\n                           [(ngModel)]="contact"></ion-input>\n\n     </ion-item>\n\n     \n\n     <ion-item style="width: 50%;float:left;">\n\n                <ion-input clearInput type="text" placeholder="电话"\n\n                           [(ngModel)]="telephone"></ion-input>\n\n      </ion-item>\n\n     </div>\n\n   <div class="con" style="border-bottom:0;">\n\n   	<!-- <a class="txl" style="float:right;margin-top: 10px;" (click)="searchAddr()"><img src="./assets/imgs/icon20.png" /></a> -->\n\n    <ion-item icon-right class="mess01">\n\n        <ion-input [(ngModel)]="searchKey" (ionChange)="searchAddr()" (ionBlur)="setShow(\'false\')" (ionFocus)="setShow(\'true\')" placeholder="请输入地址" style="border:0px;background:none;width: 100%" ></ion-input>\n\n    </ion-item>\n\n       <div id="searchResultPanel" class="tc_div" (click)="locationPoint()">\n\n       </div>\n\n   </div>\n\n   <div class="con">\n\n    <ion-item>\n\n            <ion-input placeholder="请填写地址" [(ngModel)]="centerAddr"></ion-input>\n\n     </ion-item>\n\n    </div>\n\n   <div class="con">\n\n    <ion-item>\n\n            <ion-input (keyup)="getCardAddr($event)" placeholder="请填写楼号、楼层和门牌号"  ></ion-input>\n\n     </ion-item>\n\n    </div>\n\n    \n\n    <!-- 地图 -->\n\n    </ion-list>\n\n    <div class="" id="bmap" style="width:100%;height:66%;"></div>\n\n    <img class="sign" id="sign" *ngIf="signFlag" src="./assets/imgs/sign1.png" />\n\n    <div class="btn">\n\n    <button ion-button (click)="newAddrCont()" button-end class="anniu_l">确定</button>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\map\get_addr.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_my_service__["a" /* MyService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* Contacts */]])
    ], getAddrPage);
    return getAddrPage;
}());

//# sourceMappingURL=get_addr.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 301;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.loginFlag = false;
    }
    UserService.prototype.loginUesr = function (user) {
        this.setUser(user);
        this.setLogin(true);
    };
    UserService.prototype.logout = function () {
        this.setUser(null);
        this.setLogin(false);
    };
    UserService.prototype.setLogin = function (flag) {
        this.loginFlag = flag;
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.reLogin = function () {
        // this.http.post("/login/reLoad").subscribe(data => {
        //     this.setLogin(true);
        //     this.user = data;
        // });
    };
    UserService.prototype.isLogin = function () {
        return this.loginFlag;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG_TEST; });
var APP_CONFIG_TEST = {
    // server: "http://ytyiot.vipgz1.idcfengye.com/dpcdz",
    //server: "http://127.0.0.1:8080/unionserver",
    //server: "http://192.168.0.104:8080/unionserver",
    server: "http://121.41.26.65:18090/unionserver",
    timeout: 20000,
    smsInterval: 10
};
//# sourceMappingURL=app-config-test.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__executing_executing__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_confirm_publisher__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__release_release_2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_DbDict__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__confirm_confirm_publisher_check__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HistoryDetailPage = /** @class */ (function () {
    function HistoryDetailPage(navCtrl, param, alertCtrl, componentsUtil, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.alertCtrl = alertCtrl;
        this.componentsUtil = componentsUtil;
        this.taskService = taskService;
        this.task = {};
        this.state = '04';
        this.task = param.get("task");
        //标准代码转中文描述
        this.task.TYPE_STR = __WEBPACK_IMPORTED_MODULE_8__util_DbDict__["a" /* DbDict */].code2type(this.task.TYPE, "TASK_TYPE");
        this.task.BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_8__util_DbDict__["a" /* DbDict */].code2type(this.task.BIG_TYPE, "TASK_BIG_TYPE");
        this.task.FEE_TYPE_STR = __WEBPACK_IMPORTED_MODULE_8__util_DbDict__["a" /* DbDict */].code2type(this.task.FEE_TYPE, "TASK_FEE_TYPE");
        this.task.PARTNER_GENDER_STR = __WEBPACK_IMPORTED_MODULE_8__util_DbDict__["a" /* DbDict */].code2type(this.task.PARTNER_GENDER, "TASK_PARTNER_GENDER");
        this.timeParse();
    }
    //重发任务
    HistoryDetailPage.prototype.againTask = function (id) {
        this.task.again = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__release_release_2__["a" /* ReleasePage_2 */], { taskInfo: this.task });
    };
    //跳转到评价页面
    HistoryDetailPage.prototype.toEval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm_publisher__["a" /* ConfirmPublisherPage */], { task: this.task });
    };
    HistoryDetailPage.prototype.endTask = function () {
        var _this = this;
        this.taskService.endTask({ taskId: this.task.ID }).subscribe(function (data) {
            _this.task.FINISH_TIME = data;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__confirm_confirm_publisher_check__["a" /* ConfirmPublisherCheckPage */], { task: _this.task });
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //展示线路地图
    HistoryDetailPage.prototype.showMap = function (address) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__executing_executing__["a" /* ExecutingPage */], { address: address });
    };
    //发布者取消任务
    HistoryDetailPage.prototype.cancelTask = function () {
        var _this = this;
        this.taskService.cancelTask(this.task).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //发布者开始任务（日常）
    HistoryDetailPage.prototype.startTask = function () {
        var _this = this;
        this.taskService.startTask({ taskId: this.task.ID }).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //显示提示信息
    HistoryDetailPage.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    HistoryDetailPage.prototype.getTime = function () {
        var date = new Date(this.task.SUBSCRIBE_TIME.replace("-", "/"));
        var time = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2ZhDay(date) + "/" + date.getHours() + ":" + date.getMinutes();
        return time;
    };
    HistoryDetailPage.prototype.timeParse = function () {
        var EXPIRE_TIME = new Date(this.task.EXPIRE_TIME);
        var mins = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].diff(EXPIRE_TIME, new Date(), __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].MINUTES);
        console.log(mins);
        this.task.EXPIRE_TIME_STR = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].min2ZhHourMin(mins);
        this.task.TOTAL_TIME_STR = this.totalTimeParse(new Date(this.task.FINISH_TIME), new Date(this.task.ORDER_TIME));
    };
    HistoryDetailPage.prototype.totalTimeParse = function (finishTime, startTime) {
        var diffs = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].diff(finishTime, startTime, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].SECONDS);
        var hours = Math.floor(diffs / 3600);
        var mins = Math.floor((diffs - hours * 3600) / 60);
        var seconds = diffs - hours * 3600 - mins * 60;
        return __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2DoubleDigit(hours) + ":" + __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2DoubleDigit(mins) + "' " + seconds;
    };
    HistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-h-detail',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\detail\history_detail.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>悬赏任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;" class="detail">\n\n    <div class="tiao2 detail-title">\n\n        <span class="font01">{{task.BIG_TYPE_STR}}</span>\n\n        <span style="color:#fff;margin-left:10px;">{{task.PUBLISH_TIME}}</span><br />\n\n        <span>订单号:{{task.ID}}</span>\n\n    </div>\n\n    <div class="detail-star">\n\n        <img *ngFor="let i of [1,2,3,4,5]" [hidden]="task.LEVEL < i" src=\'./assets/imgs/star.png\' />\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'01\'">\n\n        <div [ngClass]="{\'title011\':task.BIG_TYPE==\'12\',\'title012\':task.BIG_TYPE!=\'12\'}">{{task.FROM_ADDR}}</div>\n\n        <div style="color: #eeeeee" *ngIf="task.BIG_TYPE!=\'12\'">{{task.FROM_MAN}}-{{task.FROM_TELEPHONE}}</div>\n\n        <div class="title013">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'02\'">\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'03\'">\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n\n\n    <div class="bg02" >\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span>{{task.TYPE_STR}}</span>\n\n        </div>\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:18px;padding-left: 0px">{{task.COIN}}<br/>金币</span>\n\n        </div>\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:18px;padding-left: 0px" *ngIf="task.TYPE == \'01\'&&task.BIG_TYPE!=\'12\'">{{task.CONSUME_TIME}}<br/>分钟</span>\n\n            <span style="line-height: 22px;padding-top:28px;padding-left: 0px" *ngIf="task.TYPE == \'01\'&&task.BIG_TYPE==\'12\'">{{task.CONSUME_TIME}}<br/></span>\n\n            <span *ngIf="task.TYPE == \'02\'">{{task.FEE_TYPE_STR}}</span>\n\n            <span *ngIf="task.TYPE == \'03\'">{{task.EXPIRE_TIME_STR}}</span>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <div class="mess" *ngIf="task.TYPE == \'01\'&&task.BIG_TYPE!=\'12\'">\n\n        <img src="./assets/imgs/im.png" [asyncSrc]="task.PUBLISH_IMG_ID" style="width: 53px;height: 53px"/>\n\n        <div class="img01" style="width:36%">取件时间<br/><span>{{task.SUBSCRIBE_TIME}}</span></div>\n\n        <div class="img01">物品重量<br/><span>{{task.WEIGHT}}千克</span></div>\n\n        <div class="img01">物品价值<br/><span>{{task.COST}}金币</span></div>\n\n    </div>\n\n    <div class="mess02" *ngIf="task.TYPE == \'02\'">\n\n        <div>\n\n            <span>开始时间</span>\n\n            <span class="info">{{getTime()}}</span>\n\n        </div>\n\n        <div>\n\n            <span>同伴性别</span>\n\n            <span class="info">{{task.PARTNER_GENDER_STR}}</span>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- “待接”任务可取消 -->\n\n    <div *ngIf="task.STATE ==\'01\'&&task.BIG_TYPE!=\'11\'&&task.BIG_TYPE!=\'12\'">\n\n        <div class="mess" style="height: 30px;text-align:center;">请耐心等待，超过15分钟无人接单将自动取消</div>\n\n        <div class="btn">\n\n            <button ion-button item-end (click)="startTask(task.ID)" class="anniu_l" >开始任务</button>\n\n        </div>\n\n        <div class="btn">\n\n            <button ion-button item-end (click)="cancelTask(task.ID)" class="anniu_l" >取消任务</button>\n\n        </div>\n\n    </div>\n\n    <div *ngIf="task.BIG_TYPE==\'11\'||task.BIG_TYPE==\'12\'">\n\n        <div class="mess" style="height: 30px;text-align:center;">请耐心等待，超过15分钟无人接单将自动取消</div>\n\n        <div class="btn">\n\n            <button ion-button item-end (click)="cancelTask(task.ID)" class="anniu_l" >取消任务</button>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <!-- “进行中”不可操作 -->\n\n    <div *ngIf="task.STATE == \'02\'">\n\n        <div *ngIf="task.TYPE == \'02\'">\n\n            <div class="font03" (click)="endTask()">结束任务</div>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- “已完成”待“确认完成”的任务需要用户确认状态 -->\n\n    <!--<div *ngIf="task.STATE ==\'03\'">-->\n\n        <!--<div class="con03">-->\n\n            <!--<span [ngClass]="{true: \'active\', false: \'\'}[state == \'04\']" (click)="state = \'04\'">完成</span>-->\n\n            <!--<span [ngClass]="{true: \'active\', false: \'\'}[state == \'00\']" (click)="state = \'00\'">未完成</span>-->\n\n        <!--</div>-->\n\n        <!--<div class="font03" (click)="confirmTask()">确认提交</div>-->\n\n    <!--</div>-->\n\n\n\n    <!-- “确认完成”的任务需要用户评价 -->\n\n    <div *ngIf="task.STATE ==\'04\'">\n\n        <div class="font03" (click)="toEval()">任务评价</div>\n\n    </div>\n\n    <!--<div class="btn" *ngIf="task.STATE ==\'03\'">-->\n\n        <!--<button ion-button item-end (click)="againTask(task.ID)" class="anniu_l" >编辑并发布</button>-->\n\n    <!--</div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\detail\history_detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_9__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_4__providers_task_service__["a" /* TaskService */]])
    ], HistoryDetailPage);
    return HistoryDetailPage;
}());

//# sourceMappingURL=history_detail.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendRankPage = /** @class */ (function () {
    function FriendRankPage(navCtrl, friendService) {
        this.navCtrl = navCtrl;
        this.friendService = friendService;
        this.tabs = "day";
    }
    FriendRankPage.prototype.ionViewDidEnter = function () {
        this.getFriendList();
    };
    FriendRankPage.prototype.getFriendList = function () {
        var _this = this;
        this.friendService.friendRank(this.tabs).subscribe(function (data) {
            _this.friends = data;
        });
    };
    FriendRankPage.prototype.segmentChanged = function (e) {
        this.getFriendList();
    };
    FriendRankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-friendrank',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\friendrank\friendrank.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <button ion-button menuToggle>\n\n    </button>\n\n\n\n    <ion-title>好友排名</ion-title>\n\n    <ion-buttons >\n\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="tabs" (ionChange)="segmentChanged($event)">\n\n      <ion-segment-button value="day">\n\n        当日\n\n      </ion-segment-button>\n\n      <ion-segment-button value="month">\n\n        当月\n\n      </ion-segment-button>\n\n      <ion-segment-button value="all">\n\n        历史\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	\n\n  <div [ngSwitch]="tabs">\n\n    <ion-list *ngSwitchCase="\'day\'">\n\n      <ion-item-sliding  *ngFor="let friend of friends  index as i ">\n\n        <ion-item   class="img03">\n\n        	<div class="crown"><img *ngIf="i==0" src="./assets/imgs/crown1.png" /><span *ngIf="i!=0&&i!=1&&i!=2">{{i+1}}</span><img *ngIf="i==1" src="./assets/imgs/crown2.png" /><img *ngIf="i==2" src="./assets/imgs/crown3.png" /></div>\n\n           <img class="login-img" item-left [asyncSrc]="friend.PIC_ID">\n\n          {{friend.USER_NAME}}\n\n          <img  src="./assets/imgs/da{{friend.USER_LEV}}.png"  />\n\n          <span item-right class="coin">{{friend.COUNTCOIN}}</span>\n\n        </ion-item>\n\n      </ion-item-sliding>\n\n     <!-- <div class="elem02">\n\n       <div class="crown2"><span>35</span></div>\n\n       <img src="./assets/imgs/head.png" width="40" class="img02" /> \n\n       <div class="item-ii"></div>\n\n        \n\n    </div> -->\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'month\'">\n\n      <ion-item-sliding  *ngFor="let friend of friends  index as i ">\n\n        <ion-item   class="img03">\n\n        	<div class="crown"><img *ngIf="i==0" src="./assets/imgs/crown1.png" /><span *ngIf="i!=0&&i!=1&&i!=2">{{i+1}}</span><img *ngIf="i==1" src="./assets/imgs/crown2.png" /><img *ngIf="i==2" src="./assets/imgs/crown3.png" /></div>\n\n           <img class="login-img" item-left [asyncSrc]="friend.PIC_ID">\n\n          {{friend.USER_NAME}}\n\n          <img  src="./assets/imgs/da{{friend.USER_LEV}}.png"  />\n\n          <span item-right class="coin">{{friend.COUNTCOIN}}</span>\n\n        </ion-item>\n\n      </ion-item-sliding>\n\n\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'all\'">\n\n      <ion-item-sliding  *ngFor="let friend of friends  index as i ">\n\n        <ion-item   class="img03">\n\n        	<div class="crown"><img *ngIf="i==0" src="./assets/imgs/crown1.png" /><span *ngIf="i!=0&&i!=1&&i!=2">{{i+1}}</span><img *ngIf="i==1" src="./assets/imgs/crown2.png" /><img *ngIf="i==2" src="./assets/imgs/crown3.png" /></div>\n\n           <img class="login-img" item-left [asyncSrc]="friend&&friend.PIC_ID">\n\n          {{friend.USER_NAME}} \n\n          <img  src="./assets/imgs/da{{friend.USER_LEV}}.png"  />\n\n          <span item-right class="coin">{{friend.COUNTCOIN}}</span>\n\n        </ion-item>\n\n      </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    \n\n\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\friendrank\friendrank.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__["a" /* FriendService */]])
    ], FriendRankPage);
    return FriendRankPage;
}());

//# sourceMappingURL=friendrank.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appConfig_properties__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChangePwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPwdPage = /** @class */ (function () {
    function ForgetPwdPage(navCtrl, param, appConfig, loginService, userService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.appConfig = appConfig;
        this.loginService = loginService;
        this.userService = userService;
        // 以下验证成功之后才用到的属性
        this.validSuccess = false;
        this.userName = this.param.get("userName");
    }
    ForgetPwdPage.prototype.userNameValid = function () {
        return this.userName && (this.userName.length == 11 || this.userName.length == 18);
    };
    ForgetPwdPage.prototype.sendForgetPwdSms = function () {
        var _this = this;
        this.loginService.sendSms(this.userName).subscribe(function (data) {
            _this.smsCountDown();
        }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    ForgetPwdPage.prototype.validSms = function () {
        var _this = this;
        var DATA = {
            userName: this.userName + "",
            smsCode: this.smsCode + ""
        };
        this.loginService.validSms(DATA).subscribe(function (data) {
            _this.validSuccess = true;
        }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //获取验证码
    ForgetPwdPage.prototype.smsCountDown = function () {
        var _this = this;
        this.countdownNum = this.appConfig.getInstance().smsInterval;
        var inter = setInterval(function () {
            if (_this.countdownNum) {
                --_this.countdownNum;
            }
            else {
                clearInterval(inter);
            }
        }, 1000);
    };
    ForgetPwdPage.prototype.reSetPwd = function () {
        var _this = this;
        var DATA = {
            password: this.password,
            userName: this.userName
        };
        this.loginService.reSetPwd(DATA).subscribe(function (val) {
            _this.userService.loginUesr(val);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        });
    };
    ForgetPwdPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ForgetPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-pwd',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\login\forget-pwd\forget-pwd.html"*/'<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\');">\n\n\n\n    <!-- 以下为忘记密码验证成功，重置密码显示的部分 -->\n\n    <div *ngIf="validSuccess">\n\n        <div class="logtitel" style="height:200px">\n\n            <img src=\'./assets/imgs/logo01.png\' />\n\n        </div>\n\n\n\n        <div class="mess01">\n\n            请设置您的登录密码\n\n        </div>\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="password" placeholder="请输入密码" [(ngModel)]="password" class="lo_ico02"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="btn" style="margin-top: 30%;">\n\n            <button ion-button type="submit" block clear="true"\n\n                    [disabled]="!password"\n\n                    (click)="reSetPwd()">\n\n                <span  class="anniu_l">确 定</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- 以下为忘记密码部分 -->\n\n    <div *ngIf="!validSuccess">\n\n        <div class="logtitel" >\n\n            <img src=\'./assets/imgs/logo01.png\' />\n\n        </div>\n\n\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="number" [min]="11" [max]="18" placeholder="请输入帐号"\n\n                       [(ngModel)]="userName" class="lo_ico01"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="text" placeholder="请输入验证码" [(ngModel)]="smsCode" class="lo_ico02"></ion-input>\n\n            <button ion-button item-end *ngIf="!countdownNum" (click)="sendForgetPwdSms()"\n\n                    [disabled]="!userNameValid()" class="prove" style="margin-top:20px;">发送验证码\n\n            </button>\n\n            <button ion-button item-end *ngIf="countdownNum >= 1" [disabled]="true">{{countdownNum}}秒后可重发</button>\n\n        </ion-item>\n\n\n\n        <div class="btn">\n\n            <button ion-button type="submit" block clear="true"\n\n                    [disabled]="!userNameValid()"\n\n                    (click)="validSms()">\n\n                <span  class="anniu_l">确 定</span>\n\n            </button>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <button item-start ios-undo-outline item-right (click)="goBack()" class="return">返回</button>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\login\forget-pwd\forget-pwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appConfig_properties__["a" /* AppCfgProperties */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */]])
    ], ForgetPwdPage);
    return ForgetPwdPage;
}());

//# sourceMappingURL=forget-pwd.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appConfig_properties__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChangePwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, param, appConfig, loginService, userService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.appConfig = appConfig;
        this.loginService = loginService;
        this.userService = userService;
        // 以下注册成功之后才用到的属性
        this.registerSuccess = false;
        this.userName = this.param.get("userName");
    }
    RegisterPage.prototype.userNameValid = function () {
        return this.userName && (this.userName.length == 11 || this.userName.length == 18);
    };
    RegisterPage.prototype.sendRegisterSms = function () {
        var _this = this;
        this.loginService.sendRegisterSms(this.userName).subscribe(function (data) {
            _this.smsCountDown();
        }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        var DATA = {
            userName: this.userName + "",
            smsCode: this.smsCode + ""
        };
        this.loginService.doRegister(DATA).subscribe(function (data) {
            _this.registerSuccess = true;
        }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //获取验证码
    RegisterPage.prototype.smsCountDown = function () {
        var _this = this;
        this.countdownNum = this.appConfig.getInstance().smsInterval;
        var inter = setInterval(function () {
            if (_this.countdownNum) {
                --_this.countdownNum;
            }
            else {
                clearInterval(inter);
            }
        }, 1000);
    };
    RegisterPage.prototype.setPwd = function () {
        var _this = this;
        var DATA = {
            password: this.password,
            shortName: this.shortName
        };
        this.loginService.setPwd(DATA).subscribe(function (val) {
            _this.userService.loginUesr(val);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, __WEBPACK_IMPORTED_MODULE_4__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'paget-register',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\login\register\register.html"*/'<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\');">\n\n\n\n    <!-- 以下为注册成功才会显示的部分 -->\n\n    <div *ngIf="registerSuccess">\n\n        <div class="logtitel" style="height:200px">\n\n            <img src=\'./assets/imgs/logo01.png\' />\n\n        </div>\n\n\n\n        <div class="mess01">\n\n            <span>注册成功！</span> <br/>请设置你的用户名和密码\n\n        </div>\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="text" placeholder="请输入昵称"\n\n                       [(ngModel)]="shortName" class="lo_ico01"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="password" placeholder="请输入密码" [(ngModel)]="password" class="lo_ico02"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="btn">\n\n            <button ion-button type="submit" block clear="true"\n\n                    [disabled]="!shortName || !password"\n\n                    (click)="setPwd()">\n\n                    <span class="anniu_l">确定</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- 以下为未注册部分 -->\n\n    <div *ngIf="!registerSuccess">\n\n        <div class="logtitel">\n\n            <img src=\'./assets/imgs/logo01.png\' />\n\n        </div>\n\n\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="number" [min]="11" [max]="18" placeholder="请输入帐号"\n\n                       [(ngModel)]="userName" class="lo_ico01"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item class="item-nobg">\n\n            <ion-input clearInput type="text" placeholder="请输入验证码" [(ngModel)]="smsCode" class="lo_ico02"></ion-input>\n\n            <button ion-button item-end *ngIf="!countdownNum" (click)="sendRegisterSms()"\n\n                    [disabled]="!userNameValid()" class="prove" style="margin-top:20px;">发送验证码\n\n            </button>\n\n            <button ion-button item-end *ngIf="countdownNum >= 1" [disabled]="true">{{countdownNum}}秒后可重发</button>\n\n        </ion-item>\n\n\n\n        <div class="btn">\n\n            <button ion-button type="submit" block clear="true"\n\n                    [disabled]="!userNameValid()"\n\n                    (click)="doRegister()">\n\n                <span class="anniu_l">注册</span>\n\n            </button>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <button item-start ios-undo-outline item-right (click)="goBack()" class="return">返回</button>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\login\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appConfig_properties__["a" /* AppCfgProperties */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accept_already_accept__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__executing_executing__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_DbDict__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, param, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.taskService = taskService;
        this.task = {};
        this.task = param.get("task");
        //标准代码转中文描述
        this.task.TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.TYPE, "TASK_TYPE");
        this.task.BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.BIG_TYPE, "TASK_BIG_TYPE");
        this.task.FEE_TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.FEE_TYPE, "TASK_FEE_TYPE_REVERSE");
        this.task.PARTNER_GENDER_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.PARTNER_GENDER, "TASK_PARTNER_GENDER");
        this.timeParse();
    }
    DetailPage.prototype.acceptTask = function (task) {
        var _this = this;
        // 日常任务另外接取
        if (task.TYPE == '02') {
            this.taskService.chAcceptTask(task.ID).subscribe(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__accept_already_accept__["a" /* AlreadyAcceptPage */]);
            }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        else {
            this.taskService.acceptTask(task.ID).subscribe(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__accept_already_accept__["a" /* AlreadyAcceptPage */]);
            }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
    };
    //展示线路地图
    DetailPage.prototype.showMap = function (address) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__executing_executing__["a" /* ExecutingPage */], { address: address });
    };
    DetailPage.prototype.getTime = function () {
        var date = new Date(this.task.SUBSCRIBE_TIME.replace("-", "/"));
        var time = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2ZhDay(date) + "/" + date.getHours() + ":" + date.getMinutes();
        return time;
    };
    DetailPage.prototype.timeParse = function () {
        var EXPIRE_TIME = new Date(this.task.EXPIRE_TIME);
        var mins = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].diff(EXPIRE_TIME, new Date(), __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].MINUTES);
        console.log(mins);
        this.task.EXPIRE_TIME_STR = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].min2ZhHourMin(mins);
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\detail\detail.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>悬赏任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;" class="detail">\n\n    <div class="tiao2 detail-title">\n\n        <span class="font01">{{task.BIG_TYPE_STR}}</span>\n\n        <span style="color:#fff;margin-left:10px;">{{task.PUBLISH_TIME}}</span><br />\n\n        <span>订单号:{{task.ID}}</span>\n\n    </div>\n\n        <div class="detail-star">\n\n       <img *ngIf="task.LEVEL >=1 " src=\'./assets/imgs/star.png\' />\n\n       <img *ngIf="task.LEVEL >=2 " src=\'./assets/imgs/star.png\' />\n\n       <img *ngIf="task.LEVEL >=3 " src=\'./assets/imgs/star.png\' />\n\n       <img *ngIf="task.LEVEL >=4 " src=\'./assets/imgs/star.png\' />\n\n       <img *ngIf="task.LEVEL >=5 " src=\'./assets/imgs/star.png\' />\n\n    </div>\n\n\n\n    <div class="bg01" *ngIf="task.TYPE == \'01\'">\n\n    	<div class="title01">{{task.FROM_ADDR}}</div>\n\n        <div style="color: #eeeeee;display: none;">{{task.FROM_MAN}}-{{task.FROM_TELEPHONE}}</div>\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee;display: none;">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n    	<div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'02\'">\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'03\'">\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n\n\n    <div class="bg02">\n\n            <div class="mix">\n\n                    <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n                    <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n                    <span>{{task.TYPE_STR}}</span>\n\n            </div>\n\n            <div class="mix">\n\n                    <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n                    <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n                    <span style="line-height: 22px;padding-top:18px;padding-left: 0px">{{task.COIN}}<br/>金币</span>\n\n            </div>\n\n            <div class="mix">\n\n                    <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n                    <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n                    <span style="line-height: 22px;padding-top:18px;padding-left: 0px" *ngIf="task.TYPE == \'01\'">{{task.CONSUME_TIME}}<br/>分钟</span>\n\n                    <span *ngIf="task.TYPE == \'02\'">{{task.FEE_TYPE_STR}}</span>\n\n                <span *ngIf="task.TYPE == \'03\'">{{task.EXPIRE_TIME_STR}}</span>\n\n            </div>\n\n    </div>\n\n\n\n    <div class="mess" *ngIf="task.TYPE == \'01\'">\n\n        <img style="width: 54px;height: 53px;" src="./assets/imgs/im.png"  [asyncSrc]="task.PUBLISH_IMG_ID"/>\n\n        <div class="img01" style="width:36%">取件时间<br/><span>{{task.SUBSCRIBE_TIME}}</span></div>\n\n        <div class="img01">物品重量<br/><span>{{task.WEIGHT}}千克</span></div>\n\n        <div class="img01">物品价值<br/><span>{{task.COST}}金币</span></div>\n\n    </div>\n\n    <div class="mess02" *ngIf="task.TYPE == \'02\'">\n\n        <div>\n\n            <span>开始时间</span>\n\n            <span class="info">{{getTime()}}</span>\n\n        </div>\n\n        <div>\n\n            <span>同伴性别</span>\n\n            <span class="info">{{task.PARTNER_GENDER_STR}}</span>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="btn">\n\n        <button ion-button item-end (click)="acceptTask(task)" class="anniu_l">立即接取</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\detail\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskList_finish_history__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_DbDict__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_components_util__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlreadyDetailPage = /** @class */ (function () {
    function AlreadyDetailPage(navCtrl, param, componentsUtil, taskService, callNumber, alertCtrl) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.componentsUtil = componentsUtil;
        this.taskService = taskService;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.task = param.get("task");
        //标准代码转中文描述
        this.task.TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.TYPE, "TASK_TYPE");
        this.task.BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.BIG_TYPE, "TASK_BIG_TYPE");
        this.task.FEE_TYPE_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.FEE_TYPE, "TASK_FEE_TYPE_REVERSE");
        this.task.PARTNER_GENDER_STR = __WEBPACK_IMPORTED_MODULE_6__util_DbDict__["a" /* DbDict */].code2type(this.task.PARTNER_GENDER, "TASK_PARTNER_GENDER");
        this.timeParse();
    }
    //完成任务【跳转到已完成任务列表】
    AlreadyDetailPage.prototype.finishTask = function () {
        var _this = this;
        this.taskService.finishTask(this.task).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_finish_history__["a" /* FinishHistoryPage */], { task: _this.task });
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    AlreadyDetailPage.prototype.exitTask = function (taskId) {
        var _this = this;
        this.taskService.exitTask(taskId).subscribe(function (data) {
            _this.navCtrl.pop();
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //联系发布人
    AlreadyDetailPage.prototype.call = function (phone) {
        console.log(phone);
        var that = this;
        var alert = this.alertCtrl.create({
            title: "拨打:" + phone + "?",
            message: "",
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('选择取消按钮');
                    }
                }, {
                    text: '确认',
                    handler: function () {
                        that.callNumber.callNumber(phone, true)
                            .then(function (res) { return console.log('Launched dialer!', res); })
                            .catch(function (err) { return console.log('Error launching dialer', err); });
                    }
                }
            ]
        }).present();
    };
    AlreadyDetailPage.prototype.getTime = function () {
        var date = new Date(this.task.SUBSCRIBE_TIME.replace("-", "/"));
        var time = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].time2ZhDay(date) + "/" + date.getHours() + ":" + date.getMinutes();
        return time;
    };
    AlreadyDetailPage.prototype.timeParse = function () {
        var EXPIRE_TIME = new Date(this.task.EXPIRE_TIME);
        var mins = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].diff(EXPIRE_TIME, new Date(), __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].MINUTES);
        console.log(mins);
        this.task.EXPIRE_TIME_STR = __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].min2ZhHourMin(mins);
    };
    AlreadyDetailPage.prototype.answerTask = function () {
        var _this = this;
        if (!this.task.answer) {
            this.componentsUtil.showAlert("请填写问题答案");
            return false;
        }
        var data = {
            taskId: this.task.ID,
            answer: this.task.answer
        };
        this.taskService.answerTask(data).subscribe(function (data) {
            _this.navCtrl.pop();
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    AlreadyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-already_detail',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\detail\already_detail.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>悬赏任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;" class="detail task">\n\n    <div class="tiao2 detail-title">\n\n        <span class="font01">{{task.BIG_TYPE_STR}}</span>\n\n        <span style="color:#fff;margin-left:10px;">{{task.PUBLISH_TIME}}</span><br />\n\n        <span>订单号:{{task.ID}}</span>\n\n    </div>\n\n    <div class="detail-star">\n\n        <img *ngIf="task.LEVEL >=1 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.LEVEL >=2 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.LEVEL >=3 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.LEVEL >=4 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.LEVEL >=5 " src=\'./assets/imgs/star.png\' />\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'01\'">\n\n        <div class="title01">{{task.FROM_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.FROM_MAN}}-{{task.FROM_TELEPHONE}}</div>\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'02\'">\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'03\'">\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n\n\n\n\n    <div class="bg02">\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span>{{task.TYPE_STR}}</span>\n\n        </div>\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:18px;padding-left: 0px">{{task.COIN}}<br/>金币</span>\n\n        </div>\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:18px;padding-left: 0px" *ngIf="task.TYPE == \'01\'">{{task.CONSUME_TIME}}<br/>分钟</span>\n\n            <span *ngIf="task.TYPE == \'02\'">{{task.FEE_TYPE_STR}}</span>\n\n            <span *ngIf="task.TYPE == \'03\'">{{task.EXPIRE_TIME_STR}}</span>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="mess" *ngIf="task.TYPE == \'01\'">\n\n        <img src="./assets/imgs/im.png" [asyncSrc]="task.PUBLISH_IMG_ID" style="width: 53px;height: 53px"/>\n\n        <div class="img01" style="width:36%">取件时间<br/><span>{{task.SUBSCRIBE_TIME}}</span></div>\n\n        <div class="img01">物品重量<br/><span>{{task.WEIGHT}}千克</span></div>\n\n        <div class="img01">物品价值<br/><span>{{task.COST}}金币</span></div>\n\n    </div>\n\n    <div class="mess02" *ngIf="task.TYPE == \'02\'">\n\n        <div>\n\n            <span>开始时间</span>\n\n            <span class="info">{{getTime()}}</span>\n\n        </div>\n\n        <div>\n\n            <span>同伴性别</span>\n\n            <span class="info">{{task.PARTNER_GENDER_STR}}</span>\n\n        </div>\n\n    </div>\n\n    <div *ngIf="task.TYPE == \'03\'">\n\n        <ion-input class="answer" type="text" placeholder="请填写答案" [(ngModel)]="task.answer"></ion-input>\n\n    </div>\n\n\n\n\n\n    <div class="font03" *ngIf="task.TYPE == \'01\'" (click)="call(task.LOGIN_CODE)" >联系发布人</div>\n\n    <div class="font03" *ngIf="task.TYPE == \'02\'" (click)="call(task.LOGIN_CODE)" >联系同伴</div>\n\n    <div class="btn" *ngIf="task.TYPE == \'02\'">\n\n        <button ion-button item-end (click)="exitTask(task.ID)" class="anniu_l" >退出任务</button>\n\n    </div>\n\n    <div class="btn" *ngIf="task.TYPE == \'03\'">\n\n        <button ion-button item-end (click)="answerTask()" class="anniu_l" >提交答案</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\detail\already_detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], AlreadyDetailPage);
    return AlreadyDetailPage;
}());

//# sourceMappingURL=already_detail.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinishDetailPage = /** @class */ (function () {
    function FinishDetailPage(navCtrl, param) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.task = param.get("task");
        //类型
        if (this.task.TYPE == '01') {
            this.task.TYPE_STR = "跑腿";
        }
        if (this.task.TYPE == '02') {
            this.task.TYPE_STR = "日常";
        }
        if (this.task.TYPE == '03') {
            this.task.TYPE_STR = "问答";
        }
        //任务分类大类型
        if (this.task.BIG_TYPE == '11') {
            this.task.BIG_TYPE_STR = "镖局";
        }
        if (this.task.BIG_TYPE == '12') {
            this.task.BIG_TYPE_STR = "代购";
        }
    }
    FinishDetailPage.prototype.toHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FinishDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finish_detail',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\detail\finish_detail.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>悬赏任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;" class="detail">\n\n    <div class="tiao2 detail-title">\n\n        <span class="font01">{{task.BIG_TYPE_STR}}</span>\n\n        <span style="color:#fff;margin-left:10px;">{{task.PUBLISH_TIME}}</span><br />\n\n        <span>订单号:{{task.ID}}</span>\n\n    </div>\n\n    <div class="detail-star">\n\n        <img *ngIf="task.level >=1 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.level >=2 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.level >=3 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.level >=4 " src=\'./assets/imgs/star.png\' />\n\n        <img *ngIf="task.level >=5 " src=\'./assets/imgs/star.png\' />\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'01\'">\n\n        <div class="title01">{{task.FROM_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.FROM_MAN}}-{{task.FROM_TELEPHONE}}</div>\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'02\'">\n\n        <div class="title01">{{task.TO_ADDR}}</div>\n\n        <div style="color: #eeeeee">{{task.TO_MAN}}-{{task.TO_TELEPHONE}}</div>\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n    <div class="bg01" *ngIf="task.TYPE == \'03\'">\n\n        <div class="title02">{{task.DESCRIPTION}}</div>\n\n    </div>\n\n\n\n\n\n    <div class="bg02">\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:25px;padding-left: 0px">{{task.TYPE_STR}}</span>\n\n        </div>\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:18px;padding-left: 0px">{{task.COIN}}<br/>金币</span>\n\n        </div>\n\n        <div class="mix">\n\n            <div class="ta_out"><img class="Rotation" src="./assets/imgs/a0_out.png"  width="81" height="81"/></div>\n\n            <div class="ta_in"><img class="Rota2" src="./assets/imgs/a0_in.png" width="81" height="81"/></div>\n\n            <span style="line-height: 22px;padding-top:18px;padding-left: 0px" *ngIf="task.TYPE == \'01\'">{{task.CONSUME_TIME}}<br/>分钟</span>\n\n            <span *ngIf="task.TYPE == \'02\'">{{task.FEE_TYPE_STR}}</span>\n\n            <span *ngIf="task.TYPE == \'03\'">{{task.EXPIRE_TIME_STR}}</span>\n\n        </div>\n\n    </div>\n\n    <div class="mess" *ngIf="task.TYPE == \'01\'">\n\n        <img src="./assets/imgs/im.png" [asyncSrc]="task.PUBLISH_IMG_ID" style="width: 53px;height: 53px"/>\n\n        <div class="img01" style="width:36%">取件时间<br/><span>{{task.SUBSCRIBE_TIME}}</span></div>\n\n        <div class="img01">物品重量<br/><span>{{task.WEIGHT}}千克</span></div>\n\n        <div class="img01">物品价值<br/><span>{{task.COST}}金币</span></div>\n\n    </div>\n\n    <div class="mess02" *ngIf="task.TYPE == \'02\'">\n\n        <div>\n\n            <span>开始时间</span>\n\n            <span class="info">{{getTime()}}</span>\n\n        </div>\n\n        <div>\n\n            <span>同伴性别</span>\n\n            <span class="info">{{task.PARTNER_GENDER_STR}}</span>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="btn">\n\n        <button ion-button item-end (click)="toHome()" class="anniu_l" >返回主页</button>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\detail\finish_detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FinishDetailPage);
    return FinishDetailPage;
}());

//# sourceMappingURL=finish_detail.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirm_confirm_order__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OrderMapPage = /** @class */ (function () {
    function OrderMapPage(navCtrl, param, geolocation, actionSheetCtrl, camera, alertCtrl, taskService, homeService, callNumber, friendService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.taskService = taskService;
        this.homeService = homeService;
        this.callNumber = callNumber;
        this.friendService = friendService;
        // 地图开启标志
        this.mapOn = true;
        // 搜索关键字
        this.searchKey = '';
        this.task = {};
        this.distance = 0; //距离
        this.task = param.get("task");
        this.centerPoint = "";
        this.centerAddr = "";
        //任务状态
        this.queryState();
        // this.address = '郑州火车站';
    }
    OrderMapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            // 定位
            _this.locating();
        });
    };
    // 页面控件初始化完成，加载数据
    OrderMapPage.prototype.ionViewWillEnter = function () {
        this.alive = true;
    };
    OrderMapPage.prototype.ionViewDidLeave = function () {
        this.alive = false;
    };
    // 页面销毁
    OrderMapPage.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    OrderMapPage.prototype.locating = function () {
        // 百度地图API功能
        this.map = new BMap.Map("bmap");
        var point = new BMap.Point(116.331398, 39.897445);
        this.map.centerAndZoom(point, 12);
        var geolocation = new BMap.Geolocation();
        this.addIcon(); //添加起点图片和终点图片
        var that = this;
        //用插件定位当前位置，添加图片
        baidumap_location.getCurrentPosition(function (result) {
            var point = new BMap.Point(result.lontitude, result.latitude);
            var manIcon = new BMap.Icon("./assets/imgs/man.png", new BMap.Size(100, 100));
            var mk = new BMap.Marker(point, { icon: manIcon });
            that.map.addOverlay(mk);
            that.map.panTo(point);
        });
        //百度自带定位，不准
        // geolocation.getCurrentPosition(function(r){
        //     if(this.getStatus() == "0"){
        //         let manIcon = new BMap.Icon("./assets/imgs/man.png", new BMap.Size(100, 100));
        //         let mk = new BMap.Marker(r.point, {icon: manIcon});
        //         that.map.addOverlay(mk);
        //         that.map.panTo(r.point);
        //     }
        //     else {
        //     }
        // },{enableHighAccuracy: true})
    };
    //计算距离
    OrderMapPage.prototype.calDistance = function () {
        var myGeo = new BMap.Geocoder();
        var that = this;
        myGeo.getPoint(this.task.TO_ADDR, function (point) {
            if (point) {
                baidumap_location.getCurrentPosition(function (result) {
                    var _p = new BMap.Point(result.lontitude, result.latitude);
                    that.distance = that.map.getDistance(_p, point).toFixed(2); //距离 米
                    that.distance = that.distance / 1000; //转换为公里
                });
            }
            else {
                //alert("您选择地址没有解析到结果!");
            }
        }, "北京市");
    };
    OrderMapPage.prototype.addIcon = function () {
        var startIcon = new BMap.Icon("./assets/imgs/start.png", new BMap.Size(100, 100));
        var endIcon = new BMap.Icon("./assets/imgs/end.png", new BMap.Size(100, 100));
        //let marker1 = new BMap.Marker(point, {icon: myIcon});  // 创建标注
        //map.centerAndZoom(point, 16);
        var myGeo = new BMap.Geocoder();
        var that = this;
        // 将地址解析结果显示在地图上,并调整地图视野
        //若经纬度不为空按经纬度定位
        if (this.task.FROM_POINT != null && this.task.FROM_POINT != "") {
            var _str = this.task.FROM_POINT.split(","); //拆分字符串  经度,维度
            if (_str.length > 1) {
                var _point = new BMap.Point(parseFloat(_str[0]), parseFloat(_str[1]));
                var marker1 = new BMap.Marker(_point, { icon: startIcon });
                that.map.addOverlay(marker1);
            }
        }
        else {
            myGeo.getPoint(this.task.FROM_ADDR, function (point) {
                if (point) {
                    var marker1 = new BMap.Marker(point, { icon: startIcon });
                    that.map.addOverlay(marker1);
                }
                else {
                    //alert("您选择地址没有解析到结果!");
                }
            }, "北京市");
        }
        // 将地址解析结果显示在地图上,并调整地图视野
        //若经纬度不为空按经纬度定位
        if (this.task.TO_POINT != null && this.task.TO_POINT != "") {
            var _str = this.task.TO_POINT.split(","); //拆分字符串  经度,维度
            if (_str.length > 1) {
                var _point = new BMap.Point(parseFloat(_str[0]), parseFloat(_str[1]));
                var marker1 = new BMap.Marker(_point, { icon: endIcon });
                that.map.addOverlay(marker1);
            }
        }
        else {
            myGeo.getPoint(this.task.TO_ADDR, function (point) {
                if (point) {
                    var marker2 = new BMap.Marker(point, { icon: endIcon });
                    that.map.addOverlay(marker2);
                    that.map.centerAndZoom(point, 13);
                }
                else {
                    //alert("您选择地址没有解析到结果!");
                }
            }, "北京市");
        }
    };
    //更新任务状态
    OrderMapPage.prototype.updateState = function (code, detail) {
        var _this = this;
        var progressInfo = {};
        progressInfo.progress_state = code;
        progressInfo.progress_description = detail;
        progressInfo.id = this.task.ID;
        this.taskService.updateState(progressInfo).subscribe(function (data) {
            if (code == "04") {
                _this.taskService.finishTask(_this.task).subscribe(function (data) {
                }, __WEBPACK_IMPORTED_MODULE_9__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
            }
            if (code == "05") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__confirm_confirm_order__["a" /* ConfirmOrderPage */], { task: _this.task });
            }
            _this.queryState(); //重新查询状态
        }, __WEBPACK_IMPORTED_MODULE_9__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //查询任务进程状态
    OrderMapPage.prototype.queryState = function () {
        var _this = this;
        var param = {};
        param.id = this.task.ID;
        this.taskService.queryTaskProgressState(param).subscribe(function (data) {
            if (data.length > 0) {
                _this.task.pro_state = data[0].STATE;
            }
        }, __WEBPACK_IMPORTED_MODULE_9__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    OrderMapPage.prototype.toHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    //显示提示信息
    OrderMapPage.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    OrderMapPage.prototype.goAddFriend = function () {
        var _this = this;
        this.friendService.addFriend(this.task.USER_ID).subscribe(function (data) {
            if (data) {
                _this.alertCtrl.create({
                    title: '',
                    subTitle: "添加成功"
                }).present();
            }
            else {
                _this.alertCtrl.create({
                    title: '',
                    subTitle: "添加失败"
                }).present();
            }
        });
    };
    OrderMapPage.prototype.goCall = function () {
        var that = this;
        this.alertCtrl.create({
            title: "拨打:" + that.task.FROM_TELEPHONE + "?",
            message: "",
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('选择取消按钮');
                    }
                }, {
                    text: '确认',
                    handler: function () {
                        that.callNumber.callNumber(that.task.FROM_TELEPHONE, true)
                            .then(function (res) { return console.log('Launched dialer!', res); })
                            .catch(function (err) { return console.log('Error launching dialer', err); });
                    }
                }
            ]
        }).present();
    };
    OrderMapPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: '拍照',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    OrderMapPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.path = base64Image;
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    OrderMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-order_map',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\map\order_map.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="map-p" overflow-scroll="true" style="overflow: hidden" [hidden]="!mapOn || searching" padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div style="position:relative;height:85%">\n\n        <ion-item class="mapover">\n\n            <a (click)="goCall()" class="anniu01"><img src=\'./assets/imgs/icon22.png\' /></a><a (click)="goAddFriend()" class="anniu01"><img src=\'./assets/imgs/icon21.png\' /></a>\n\n            <div class="elem01">\n\n                <img src=\'./assets/imgs/head.png\' width="40" [asyncSrc]="task.PIC_ID"/>\n\n            </div>\n\n            <div class="elem02">{{task.SHORT_NAME}}<span>称号</span></div><br/>\n\n            <div class="elem03">\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' /> 4.9分/95%</div>\n\n            <div class="clear" style="height:20px;"></div>\n\n            <div class="font02">{{task.CONSUME_TIME}}</div>\n\n            <div class="clear"></div>\n\n            <div class="exp_h">距离终点还有{{distance}}公里</div>\n\n        </ion-item>\n\n        <!-- 地图 -->\n\n        <div class="map" id="bmap" >\n\n        </div>\n\n        <img class="camera01" id="camera01" *ngIf="task.pro_state ==\'04\'" src="./assets/imgs/camera01.jpg" (click)="presentActionSheet()"/>\n\n    </div>\n\n    <div class="btn">\n\n        <div (click)="updateState(\'03\',\'取镖完成\')" *ngIf="task.pro_state ==\'02\'" class="anniu_l" style="padding-top: 20px">取镖完成</div>\n\n        <div (click)="updateState(\'04\',\'押镖完成\')" *ngIf="task.pro_state ==\'03\'" class="anniu_l" style="padding-top: 20px">押镖完成</div>\n\n        <div (click)="updateState(\'05\',\'任务完成\')" *ngIf="task.pro_state ==\'04\'" class="anniu_l" style="padding-top: 20px">任务完成</div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\map\order_map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_10__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__["a" /* FriendService */]])
    ], OrderMapPage);
    return OrderMapPage;
}());

//# sourceMappingURL=order_map.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasePage_3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charge_charge__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__release_4__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_global__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_home_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReleasePage_3 = /** @class */ (function () {
    function ReleasePage_3(navCtrl, param, alertCtrl, taskService, homeService, modalController, cmpUtil) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.alertCtrl = alertCtrl;
        this.taskService = taskService;
        this.homeService = homeService;
        this.modalController = modalController;
        this.cmpUtil = cmpUtil;
        this.DESCRIPTION = ""; //任务详细
        this.address = ""; //货物地址
        this.point = ""; //第一个地址的经纬度
        this.address_2 = ""; //收货地址
        this.point_2 = ""; //第二个地址的经纬度
        this.consignee = ""; //货物保管人
        this.telephone = ""; //货物保管人电话
        this.consignee_2 = ""; //收货人
        this.telephone_2 = ""; //收货人电话
        this.coin = ""; //奖励金额
        this.time = "30"; //任务要求时间
        this.remark = ""; //备注
        this.level = "5"; //任务等级 【默认是5】
        this.range = {}; //金币范围
        this.taskInfo = {}; //任务
        this.typeCode = ""; //任务类型
        this.type_2_code = ""; //下级任务类型
        this.SMALL_TYPE = ""; //镖局详细类型
        this.detailTypeStr = ""; //镖局详细类型
        //代购定义变量
        this.isShow = true;
        this.firstList = [];
        this.secondList = [];
        this.firstCheck = "0";
        this.secondCheck = "00";
        this.ticketList = [];
        this.payType = "out";
        this.ticketCheck = "01";
        this.agreement = false;
        this.near = false;
        this.city = __WEBPACK_IMPORTED_MODULE_9__app_app_global__["a" /* GlobalVariable */].getCity(); //当前定位的城市
        this.localSearch = {};
        this.searchCache = "";
        this.taskInfo = param.get("taskInfo");
        this.typeCode = this.taskInfo.typeCode;
        //设置默认值
        this.range.min = "50000";
        this.range.max = "99999";
        this.coin = this.range.max; //设置默认值
        this.type_2_code = this.taskInfo.type_2_code;
        this.SMALL_TYPE = "1"; //详细类型
        this.detailTypeStr = "钥匙";
        this.path1 = "./assets/imgs/star2.png";
        this.path2 = "./assets/imgs/star2.png";
        this.path3 = "./assets/imgs/star2.png";
        this.path4 = "./assets/imgs/star2.png";
        this.path5 = "./assets/imgs/star2.png";
        if (this.taskInfo.type_2_code == '24') {
            this.typeCode = "01"; //江湖救急使用01模板
            this.coin = "100000";
        }
        //代购变量查询获取
        this.firstList.push({
            name: "星巴克", value: "0"
        });
        this.firstList.push({
            name: "麦当劳", value: "1"
        });
        this.firstList.push({
            name: "肯德基", value: "2"
        });
        this.firstList.push({
            name: "便利店", value: "3"
        });
        this.firstList.push({
            name: "药店", value: "4"
        });
        this.firstList.push({
            name: "水果店", value: "5"
        });
        this.firstList.push({
            name: "烟酒店", value: "6"
        });
        this.firstList.push({
            name: "其它", value: "7"
        });
        this.secondList.push({ value: "0",
            second: [{ name: "拿铁", value: "00" },
                { name: "摩卡", value: "01" },
                { name: "卡布奇诺", value: "02" },
                { name: "美式", value: "03" },
                { name: "焦糖玛奇朵", value: "04" },
                { name: "拿铁", value: "05" }
            ] });
        this.secondList.push({ value: "1",
            second: [{ name: "汉堡", value: "10" },
                { name: "薯条", value: "11" },
                { name: "牛奶", value: "12" },
                { name: "可乐", value: "13" },
                { name: "照烧鸡肉饭", value: "14" }
            ] });
        this.secondList.push({ value: "2",
            second: [{ name: "鸡肉卷", value: "20" },
                { name: "全家桶", value: "21" },
                { name: "果粒橙", value: "22" },
                { name: "雪碧", value: "23" },
                { name: "红茶", value: "24" }
            ] });
        this.secondList.push({ value: "3",
            second: [{ name: "五金", value: "30" },
                { name: "生活用品", value: "31" },
                { name: "生鲜", value: "32" },
                { name: "厨具", value: "33" },
                { name: "充值卡", value: "34" }
            ] });
        this.secondList.push({ value: "4",
            second: [{ name: "感冒灵", value: "40" },
                { name: "布洛芬", value: "41" },
                { name: "奥司他韦", value: "42" },
                { name: "氨酚黄那敏", value: "43" },
                { name: "维D滴剂", value: "44" }
            ] });
        this.secondList.push({ value: "5",
            second: [{ name: "免税店", value: "50" }, { name: "其它", value: "51" }
            ] });
        this.secondList.push({ value: "5",
            second: [{ name: "苹果", value: "50" },
                { name: "葡萄", value: "51" },
                { name: "香蕉", value: "52" },
                { name: "哈密瓜", value: "53" },
                { name: "火龙果", value: "54" }
            ] });
        this.secondList.push({ value: "6",
            second: [{ name: "中华", value: "60" },
                { name: "利群", value: "61" },
                { name: "玉溪", value: "62" },
                { name: "熊猫", value: "63" },
                { name: "剑南春", value: "64" },
                { name: "五粮液", value: "65" },
                { name: "茅台", value: "66" },
                { name: "洋河", value: "67" }
            ] });
        this.secondList.push({ value: "7",
            second: [{ name: "免税店", value: "70" }, { name: "其它", value: "71" }
            ] });
        this.reachTime = "12:11";
        var sdate1 = new Date();
        sdate1.setMinutes(sdate1.getMinutes() + 30);
        if (sdate1.getMinutes() < 10) {
            this.reachTime = sdate1.getHours() + ":0" + sdate1.getMinutes();
        }
        else {
            this.reachTime = sdate1.getHours() + ":" + sdate1.getMinutes();
        }
        this.proPrice = 50;
        this.ticketList.push({ "text": "50金币", "id": "01" });
        this.ticketList.push({ "text": "100金币", "id": "02" });
        this.ticketList.push({ "text": "20金币", "id": "03" });
        this.agreement = false;
    }
    //代购点击事件
    ReleasePage_3.prototype.firstListCheck = function (i) {
        if (this.firstList[i].value != this.firstCheck) {
            this.firstCheck = i + "";
        }
    };
    ReleasePage_3.prototype.secondListCheck = function (e) {
        if (e.target.getAttribute("class") == "cur") {
            e.target.setAttribute("class", "");
            this.DESCRIPTION = this.DESCRIPTION.replace(e.target.innerText + "", "");
        }
        else {
            e.target.setAttribute("class", "cur");
            this.DESCRIPTION = this.DESCRIPTION + " " + e.target.innerText;
        }
    };
    ReleasePage_3.prototype.goNear = function () {
        this.isShow = !this.isShow;
    };
    ReleasePage_3.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            _this.initAutoDropDown(); //初始化自动搜索组件
        });
    };
    // 页面控件初始化完成，加载数据
    ReleasePage_3.prototype.ionViewDidEnter = function () {
        console.log('页面加载完毕');
    };
    // releaseTask() {
    //     this.navCtrl.push(ReleasePage_4);
    // }
    ReleasePage_3.prototype.releaseTask = function () {
        var _this = this;
        if (this.type_2_code == "12") {
            //
            // if(this.secondCheck == "" || this.secondCheck == null){
            //     this.showAlert('请选择商品类型');
            //     return;
            // }
            if (this.DESCRIPTION == "" || this.DESCRIPTION == null) {
                this.showAlert('请输入所需商品的名称和数量');
                return;
            }
            if ((this.address == "" || this.address == null) && this.isShow) {
                this.showAlert('请填写购买地址');
                return;
            }
            if (this.consignee_2 == "" || this.consignee_2 == null) {
                this.showAlert('请填写收货人姓名');
                return;
            }
            if (this.telephone_2 == "" || this.telephone_2 == null) {
                this.showAlert('请填写收货人电话');
                return;
            }
            if (this.address_2 == "" || this.address_2 == null) {
                this.showAlert('请填写收货人地址');
                return;
            }
            // if(this.payType == "" || this.payType == null){
            //     this.showAlert('请选择支付类型');
            //     return;
            // } 
            if (this.agreement == false || this.agreement == null || !this.agreement) {
                this.showAlert('请阅读并同意《代购服务协议》');
                return;
            }
            this.taskInfo.secondCheck = this.secondCheck;
            this.taskInfo.DESCRIPTION = this.DESCRIPTION;
            if (this.isShow) {
                this.taskInfo.address = this.address;
            }
            else {
                this.taskInfo.address = "就近购买";
            }
            this.taskInfo.address = this.address;
            this.taskInfo.address_2 = this.address_2;
            this.taskInfo.consignee = null;
            this.taskInfo.consignee_2 = this.consignee_2;
            this.taskInfo.telephone_2 = this.telephone_2;
            this.taskInfo.reachTime = this.reachTime;
            this.taskInfo.consume_time = this.reachTime;
            this.taskInfo.pick_time = null;
            this.taskInfo.telephone = null;
            this.taskInfo.value = null;
            this.taskInfo.weight = null;
            this.taskInfo.SMALL_TYPE = "12";
            this.taskInfo.proPrice = this.proPrice;
            this.taskInfo.payType = this.payType;
            this.taskInfo.ticketCheck = this.ticketCheck;
            this.taskInfo.coin = this.coin;
            if (parseInt(this.coin) > parseInt(this.taskInfo.coin_personal)) {
                this.showAlert("金币余额不足！将跳转到充值页面！");
                var that_1 = this;
                setTimeout(function () {
                    that_1.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__charge_charge__["a" /* ChargePage */]);
                }, 2000);
                return;
            }
            this.cmpUtil.showLoading("发布中...");
            this.taskService.releaseTask(this.taskInfo).subscribe(function (data) {
                //发布完成任务自动跳转到历史发布界面
                if (data) {
                    _this.cmpUtil.hideLoading();
                    _this.cmpUtil.showAlert("恭喜您，任务发布成功");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__taskList_release_history__["a" /* ReleaseHistoryPage */]);
                }
                else {
                    var that_2 = _this;
                    _this.alertCtrl.create({
                        title: "",
                        message: "金币余额不足,是否到充值页面?",
                        buttons: [
                            {
                                text: '取消',
                                role: 'cancel',
                                handler: function () {
                                    console.log('选择取消按钮');
                                    that_2.cmpUtil.hideLoading();
                                }
                            }, {
                                text: '确认',
                                handler: function () {
                                    that_2.cmpUtil.hideLoading();
                                    that_2.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__charge_charge__["a" /* ChargePage */]);
                                }
                            }
                        ]
                    }).present();
                }
            }, __WEBPACK_IMPORTED_MODULE_6__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        else {
            /*--------------------------【镖局任务信息校验 start】-----------------------------*/
            if (this.SMALL_TYPE == "" || this.SMALL_TYPE == null) {
                this.showAlert('请选择任务详类型');
                return;
            }
            if (this.DESCRIPTION == "" || this.DESCRIPTION == null) {
                this.showAlert('请填写物品详细信息');
                return;
            }
            if (this.consignee == "" || this.consignee == null) {
                this.showAlert('请填物品保管人');
                return;
            }
            if (this.telephone == "" || this.telephone == null) {
                this.showAlert('请填物品保管人电话');
                return;
            }
            if (this.address == "" || this.address == null) {
                this.showAlert('请填物品地址');
                return;
            }
            if (this.consignee_2 == "" || this.consignee_2 == null) {
                this.showAlert('请填物品接收人');
                return;
            }
            if (this.telephone_2 == "" || this.telephone_2 == null) {
                this.showAlert('请填物品接收人电话');
                return;
            }
            if (this.address_2 == "" || this.address_2 == null) {
                this.showAlert('请填送达地址');
                return;
            }
            /*--------------------------【镖局任务信息校验 end】-----------------------------*/
            var timeStr = "";
            // if(this.typeCode != "03"){
            //     timeStr = document.querySelectorAll("div[class='datetime-text']")[0].innerHTML;
            // }
            // var x = timeStr.indexOf("分");
            // if(x==-1){
            //     this.time = timeStr;
            // }else{
            //     timeStr = timeStr.substring(0,x);//22 分钟内
            //     this.time=timeStr;
            // }
            //
            //
            // if(this.typeCode != "03" && (this.time == "" || this.time == null)){
            //     this.showAlert('请填写任务时间');
            //     return;
            // }
            this.taskInfo.SMALL_TYPE = this.SMALL_TYPE;
            this.taskInfo.DESCRIPTION = this.DESCRIPTION;
            this.taskInfo.address = this.address;
            this.taskInfo.address_2 = this.address_2;
            this.taskInfo.point = this.point;
            this.taskInfo.point_2 = this.point_2;
            this.taskInfo.consignee = this.consignee;
            this.taskInfo.consignee_2 = this.consignee_2;
            this.taskInfo.telephone = this.telephone;
            this.taskInfo.telephone_2 = this.telephone_2;
            // if(this.taskInfo.type_2_code != '24'
            //     && (parseInt(this.coin) < parseInt(this.range.min)
            //         || parseInt(this.coin) > parseInt(this.range.max))){
            //     this.showAlert(this.level+'星任务金币范围为 '+this.range.min +'~'+this.range.max);
            //     return;
            // }
            // if(parseInt(this.coin) > parseInt(this.taskInfo.coin_personal)){
            //     this.showAlert("金币余额不足！");
            //     let that:any = this;
            //     setTimeout(function(){//三秒后跳转到审核界面
            //         that.navCtrl.push(ChargePage);
            //     },2000);
            //     return;
            // }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__release_4__["a" /* ReleasePage_4 */], { taskInfo: this.taskInfo });
        }
        //跳转到下一步
    };
    //显示提示信息
    ReleasePage_3.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    ReleasePage_3.prototype.onInputTime = function () {
        if (parseInt(this.coin) >= 50000) {
            this.path5 = "./assets/imgs/star2.png";
            this.path4 = "./assets/imgs/star2.png";
            this.path3 = "./assets/imgs/star2.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) >= 10000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star2.png";
            this.path3 = "./assets/imgs/star2.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) >= 5000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star1.png";
            this.path3 = "./assets/imgs/star2.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) >= 2000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star1.png";
            this.path3 = "./assets/imgs/star1.png";
            this.path2 = "./assets/imgs/star2.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
        if (parseInt(this.coin) < 2000) {
            this.path5 = "./assets/imgs/star1.png";
            this.path4 = "./assets/imgs/star1.png";
            this.path3 = "./assets/imgs/star1.png";
            this.path2 = "./assets/imgs/star1.png";
            this.path1 = "./assets/imgs/star2.png";
            return;
        }
    };
    //跳转获取联系人及地址模板
    ReleasePage_3.prototype.checkContacts = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.consignee = data.CONTACT;
                _this.address = data.ADDRESS;
                _this.telephone = data.TELEPHONE;
                _this.point = data.POINT;
            }
        });
        modal.present();
    };
    ;
    ReleasePage_3.prototype.checkContacts2 = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.consignee_2 = data.CONTACT;
                _this.address_2 = data.ADDRESS;
                _this.telephone_2 = data.TELEPHONE;
                _this.point_2 = data.POINT;
            }
        });
        modal.present();
    };
    ;
    //点击图标事件
    ReleasePage_3.prototype.change = function (e) {
        if (e.target.getAttribute("class") == "cur") {
            e.target.setAttribute("class", "");
            this.DESCRIPTION = this.DESCRIPTION.replace(e.target.innerText + "", "");
        }
        else {
            e.target.setAttribute("class", "cur");
            this.DESCRIPTION = this.DESCRIPTION + " " + e.target.innerText;
        }
    };
    //设置任务等级
    ReleasePage_3.prototype.setLevel = function (num) {
        this.initStar(); //初始化星星
        for (var i = parseInt(num); i > 0; i--) {
            document.getElementById("star_" + i).src = "./assets/imgs/star2.png";
        }
        this.level = num + ""; //保存等级
        this.setRange(num);
    };
    //设置根据任务等级金币限制
    ReleasePage_3.prototype.setRange = function (num) {
        if (num == '1') {
            this.range.min = "0";
            this.range.max = "2000";
            this.coin = "2000";
        }
        if (num == '2') {
            this.range.min = "2000";
            this.range.max = "4999";
            this.coin = "4999";
        }
        if (num == '3') {
            this.range.min = "5000";
            this.range.max = "9999";
            this.coin = "9999";
        }
        if (num == '4') {
            this.range.min = "10000";
            this.range.max = "49999";
            this.coin = "49999";
        }
        if (num == '5') {
            this.range.min = "50000";
            this.range.max = "99999";
            this.coin = "99999";
        }
    };
    //初始化星星，全部设置为空心
    ReleasePage_3.prototype.initStar = function () {
        document.getElementById("star_1").src = "./assets/imgs/star1.png";
        document.getElementById("star_2").src = "./assets/imgs/star1.png";
        document.getElementById("star_3").src = "./assets/imgs/star1.png";
        document.getElementById("star_4").src = "./assets/imgs/star1.png";
        document.getElementById("star_5").src = "./assets/imgs/star1.png";
    };
    //初始化自动搜索组件
    ReleasePage_3.prototype.initAutoDropDown = function () {
        var that = this;
        if (this.city == "") {
            this.city = "北京";
        }
        this.localSearch = new BMap.LocalSearch(this.city, { "onSearchComplete": function (result) {
                if (result.tr != undefined) {
                    that.creatPanel(result.tr);
                }
            }
        });
    };
    //拼装搜索结果下拉框
    ReleasePage_3.prototype.creatPanel = function (data) {
        var str = "";
        var ln = 0;
        if (data.length > 0 && data.length < 5) {
            ln = data.length;
        }
        else if (data.length > 5) {
            ln = 5;
        }
        for (var i = 0; i < ln; i++) {
            if (data[i].title != undefined
                && data[i].point != undefined) {
                var title = data[i].title;
                var point = data[i].point;
                str = str + "<li id='" + point.lng + "," + point.lat + "' (click)='locationPoint(e)'>" + title + "</li>";
            }
        }
        var cont = document.getElementById("searchResultPanel");
        if (cont != null) {
            cont.innerHTML = "";
            cont.innerHTML += str;
        }
        cont.style.display = "block";
    };
    //下拉框点击事件
    ReleasePage_3.prototype.locationPoint = function () {
        var addrStr = event.srcElement.innerHTML;
        var pointStr = event.srcElement.id;
        if (pointStr.length > 1) {
            //获取经纬度
            var lng = parseFloat(pointStr.split(",")[0]);
            var lat = parseFloat(pointStr.split(",")[1]);
            var point = new BMap.Point(lng, lat);
            //隐藏下拉框
            document.getElementById("searchResultPanel").style.display = "none";
            this.address = addrStr;
            this.searchCache = addrStr;
        }
    };
    //值改变时搜索地址
    ReleasePage_3.prototype.searchAddr = function () {
        // 当缓存地址不为空且输入地址不跟缓存一致的情况下，才进行查询，
        // 否则判定为当前是点击搜索结果造成的值改变
        if (this.searchCache == "" || this.address != this.searchCache) {
            if (this.address.length > 1) {
                this.localSearch.search(this.address);
            }
        }
    };
    //失去焦点时隐藏下拉框列表
    ReleasePage_3.prototype.setShow = function (flag) {
        if (flag == "true") {
            document.getElementById("searchResultPanel").style.display = "block";
        }
        else {
            setTimeout("document.getElementById(\"searchResultPanel\").style.display = \"none\"", 100);
            //document.getElementById("searchResultPanel").style.display = "none";
        }
    };
    ReleasePage_3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-release3',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\release\release_3.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent  >\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>发布任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div id="01" *ngIf="typeCode==\'01\' && type_2_code==\'11\'">\n\n        <ion-item class="city" >\n\n            <span  (click)="change($event)">钥匙</span>\n\n            <span  (click)="change($event)">鲜花</span>\n\n            <span  (click)="change($event)">蛋糕</span><br />\n\n            <span  (click)="change($event)">文件</span>\n\n            <span  (click)="change($event)">食品饮料</span>\n\n            <span  (click)="change($event)">水果生鲜</span><br />\n\n            <span  (click)="change($event)">证件照片</span>\n\n            <span  (click)="change($event)">其他</span>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-input clearInput type="text" placeholder="请输入押的镖所含的商品和数量" class="coin"\n\n                       [(ngModel)]="DESCRIPTION">{{DESCRIPTION}}</ion-input>\n\n        </ion-item>\n\n        <div class="mess">温馨提示：根据相关法律规定,冒险者公会镖师将对您所押送的物品进行核实,请暂时不要将物品外包装封口,感谢你的配合</div>\n\n\n\n        <div>\n\n            <div class="posit">取件地址</div>\n\n            <div class="con">\n\n            	<a class="txl" (click)="checkContacts()"><img src="./assets/imgs/icon20.png" /></a>\n\n            <ion-item style="width: 80px;float:left;" class="ts">\n\n                <ion-input clearInput type="text" placeholder="姓名"\n\n                           [(ngModel)]="consignee">{{consignee}}</ion-input>\n\n            </ion-item>\n\n            <ion-item style="width: 150px;float:left;">\n\n                <ion-input clearInput type="text" placeholder="电话"\n\n                           [(ngModel)]="telephone">{{telephone}}</ion-input>\n\n            </ion-item>\n\n            <ion-input clearInput *ngIf="type_2_code !=\'13\' " type="text" placeholder="请填写取件地址" style="float: left;"\n\n                       [(ngModel)]="address" style="padding-left:16px;float: left;width: 87%;">{{address}}</ion-input>\n\n        </div></div>\n\n        <div>\n\n            <div class="posit">押镖所到地址</div>\n\n            <div class="con">\n\n            	<a class="txl" (click)="checkContacts2()"><img src="./assets/imgs/icon20.png" /></a>\n\n            <ion-item style="width: 80px;float:left;" class="ts">\n\n                <ion-input clearInput type="text" placeholder="姓名"\n\n                           [(ngModel)]="consignee_2">{{consignee_2}}</ion-input>\n\n            </ion-item>\n\n            <ion-item style="width: 150px;float:left;">\n\n                <ion-input clearInput type="text" placeholder="电话"\n\n                           [(ngModel)]="telephone_2">{{telephone_2}}</ion-input>\n\n            </ion-item>\n\n            <ion-input clearInput *ngIf="type_2_code !=\'13\' " type="text" placeholder="请填写目的地址" style="float: left;"\n\n                       [(ngModel)]="address_2" style="padding-left:16px;float: left;width: 87%;">{{address_2}}</ion-input>\n\n        </div></div>\n\n\n\n    </div>\n\n    <div id="01" *ngIf="typeCode==\'01\' && type_2_code==\'12\'">\n\n  <ul id="shop">\n\n       <li  *ngFor="let  item of firstList   index as i"   (click)="firstListCheck(i)" [ngClass]="{\'cur\':item.value==firstCheck}" value="{item.value}"><img src="./assets/imgs/p{{item.value}}.png"/><br/>{{item.name}}</li>\n\n  </ul>\n\n        <div [ngSwitch]="firstCheck">\n\n            <div *ngFor="let firstitem of firstList">\n\n                <div *ngSwitchCase="firstitem.value">\n\n                    <ion-item  class="city"    >\n\n                        <span *ngFor="let  item of secondList[firstitem.value].second   index as i"  (click)="secondListCheck($event)" >{{item.name}}</span>\n\n                    </ion-item>\n\n                </div>\n\n            </div>\n\n        </div>\n\n       \n\n        <ion-item>\n\n            <ion-input clearInput type="text" placeholder="请输入所需商品描述，如：星巴克 大杯拿铁＊1" class="coin"\n\n                       [(ngModel)]="DESCRIPTION">{{DESCRIPTION}}</ion-input>\n\n        </ion-item>\n\n\n\n        <div>\n\n           <div class="posit">购买地址<div (click)="goNear()" [ngClass]="{\'jj\':isShow,\'jj2\':!isShow}">就近购买</div></div> \n\n            <div class="con" style="height:30px;" *ngIf="isShow">\n\n                 <ion-input clearInput  type="text" placeholder="请填写购买地址" style="float: left;" (ionChange)="searchAddr()" (ionBlur)="setShow(\'false\')"\n\n                       [(ngModel)]="address" style="padding-left:16px;float: left;width: 87%;">\n\n                 </ion-input>\n\n                 <div id="searchResultPanel" class="tc_div" (click)="locationPoint()">\n\n                 </div>\n\n            </div>\n\n            </div>\n\n        <div>\n\n            <div class="posit">收货人信息</div>\n\n            <div class="con">\n\n            	<a class="txl" (click)="checkContacts2()"><img src="./assets/imgs/icon20.png" /></a>\n\n                <ion-item style="width: 80px;float:left;" class="ts">\n\n                    <ion-input clearInput type="text" placeholder="姓名"\n\n                           [(ngModel)]="consignee_2">{{consignee_2}}</ion-input>\n\n                </ion-item>\n\n                <ion-item style="width: 150px;float:left;">\n\n                    <ion-input clearInput type="text" placeholder="电话"\n\n                           [(ngModel)]="telephone_2">{{telephone_2}}</ion-input>\n\n                </ion-item>\n\n                <ion-input clearInput  type="text" placeholder="请填写收货人地址" style="float: left;"\n\n                       [(ngModel)]="address_2" style="padding-left:16px;float: left;width: 87%;">{{address_2}}</ion-input>\n\n            </div>\n\n            <div style="width:100%;text-align: center">预计送达:{{reachTime}}</div>\n\n            <div  style="width:100%;text-align: center"><span >预估价格</span><span>{{proPrice}}</span>元</div>\n\n            <div>\n\n                    <!-- <ion-item>\n\n                            <ion-label>支付方式</ion-label>\n\n                            <ion-select [(ngModel)]="payType">\n\n                              <ion-option value="in">APP内支付</ion-option>\n\n                              <ion-option value="out">当面付清</ion-option>\n\n                            </ion-select>\n\n                    </ion-item> -->\n\n                    <!-- <ion-item>\n\n                            <ion-label>优惠券</ion-label>\n\n                            <ion-select  [(ngModel)]="ticketCheck">\n\n                              <ion-option *ngFor="let ticket  of ticketList  index as i  " value={{ticket.id}}>{{ticket.text}}</ion-option>\n\n                            </ion-select>\n\n                    </ion-item> -->\n\n            </div>\n\n            <ion-item>\n\n                    <div class="star">\n\n                     <img id="star_1" (click)="setLevel(\'1\')" src={{path1}}/>\n\n                     <img id="star_2" (click)="setLevel(\'2\')" src={{path2}}/>\n\n                     <img id="star_3" (click)="setLevel(\'3\')" src={{path3}}/>\n\n                     <img id="star_4" (click)="setLevel(\'4\')" src={{path4}}/>\n\n                     <img id="star_5" (click)="setLevel(\'5\')" src={{path5}}/>\n\n                 </div>\n\n            </ion-item>\n\n            <ion-item style="text-align: center">\n\n                 <ion-input clearInput type="number" placeholder="请输入金币数"  class="coin" (ionChange)="onInputTime()"\n\n                               [(ngModel)]="coin"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                    <ion-label>已阅读并同意《代购服务协议》</ion-label>\n\n                    <ion-checkbox [(ngModel)]="agreement" ></ion-checkbox>\n\n            </ion-item>\n\n        </div>\n\n\n\n    </div>\n\n    <div id="02" *ngIf="typeCode==\'02\'">\n\n        <div class="img02">\n\n            <ion-textarea clearInput minlength="5" maxlength="200"  placeholder="请输入任务描述"\n\n                          style="border: 0px solid; padding: 20px;margin-top: 15px;margin-left: 10px;"\n\n                          color="#cccccc" rows=6\n\n                          [(ngModel)]="detail" class="textarea" ></ion-textarea>\n\n        </div>\n\n        <ion-datetime displayFormat="YYYY/MM/DD HH:mm" [(ngModel)]="time" class="font04"\n\n                      placeholder="请输入时间"\n\n                      pickerFormat="YYYY年MM月DD日 HH:mm" min="2018" max="2030-10-31"\n\n                       style="color: #cccccc;text-align: left"  cancelText="取消" doneText="确定">\n\n            <img id="img_1" src=\'\' />\n\n        </ion-datetime>\n\n        <div style="margin-bottom:10px;">\n\n            <span class="posit" style="float: left;">地点</span>\n\n            <ion-item style="width: 250px">\n\n                <ion-input clearInput type="text" placeholder="请填写任务地址" style="float: left;"\n\n                           [(ngModel)]="address">{{address}}</ion-input>\n\n            </ion-item>\n\n        </div>\n\n        <div>\n\n            <span class="posit" style="float: left;">联系人</span>\n\n            <ion-item style="width: 80px;float:left;" class="ts">\n\n                <ion-input clearInput type="text" placeholder="姓名"\n\n                           [(ngModel)]="consignee">{{consignee}}</ion-input>\n\n            </ion-item>\n\n            <ion-item style="width: 150px;float:left;">\n\n                <ion-input clearInput type="text" placeholder="电话"\n\n                           [(ngModel)]="telephone">{{telephone}}</ion-input>\n\n            </ion-item>\n\n        </div>\n\n        <ion-item>\n\n            <div class="star">\n\n             <img id="star_1" (click)="setLevel(\'1\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_2" (click)="setLevel(\'2\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_3" (click)="setLevel(\'3\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_4" (click)="setLevel(\'4\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_5" (click)="setLevel(\'5\')" src=\'./assets/imgs/star2.png\'/>\n\n         </div>\n\n        </ion-item>\n\n        <ion-item style="text-align: center">\n\n            <ion-input clearInput type="number" placeholder="请输入金币数" [min]="1" [max]="5" class="coin"\n\n                       [(ngModel)]="coin">{{coin}}</ion-input>\n\n        </ion-item>\n\n    </div>\n\n    <div id="03" *ngIf="typeCode==\'03\'">\n\n        <div class="img02">\n\n            <ion-textarea clearInput minlength="5" maxlength="200"  placeholder="请输入问题描述"\n\n                          style="border: 0px solid; padding: 20px;margin-top: 15px;margin-left: 10px;"\n\n                          color="#cccccc" rows=6\n\n                          [(ngModel)]="detail" class="textarea" ></ion-textarea>\n\n        </div>\n\n        <ion-item>\n\n            <div class="star">\n\n             <img id="star_1" (click)="setLevel(\'1\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_2" (click)="setLevel(\'2\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_3" (click)="setLevel(\'3\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_4" (click)="setLevel(\'4\')" src=\'./assets/imgs/star2.png\'/>\n\n             <img id="star_5" (click)="setLevel(\'5\')" src=\'./assets/imgs/star2.png\'/>\n\n         </div>\n\n        </ion-item>\n\n        <ion-item style="text-align: center">\n\n            <ion-input clearInput type="number" placeholder="请输入金币数" [min]="1" [max]="5"  class="coin"\n\n                       [(ngModel)]="coin">{{coin}}</ion-input>\n\n        </ion-item>\n\n    </div>\n\n    <div class="btn">\n\n            <div *ngIf="typeCode==\'01\' && type_2_code==\'11\'" (click)="releaseTask()" class="anniu_l" style="padding-top: 20px">下一步</div>\n\n            <div *ngIf="typeCode==\'01\' && type_2_code==\'12\'" (click)="releaseTask()" class="anniu_l" style="padding-top: 20px">立即发布</div>\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\release\release_3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_0__util_components_util__["a" /* ComponentsUtil */]])
    ], ReleasePage_3);
    return ReleasePage_3;
}());

//# sourceMappingURL=release_3.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeNextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_alipay__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_charge_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pay_modal__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_components_util__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChargeNextPage = /** @class */ (function () {
    function ChargeNextPage(navCtrl, cmptUtil, platform, chargeService, alipay) {
        this.navCtrl = navCtrl;
        this.cmptUtil = cmptUtil;
        this.platform = platform;
        this.chargeService = chargeService;
        this.alipay = alipay;
        this.amount = 50;
        this.coin = 500;
        this.isAliPay = true; // 充值金额列表
        this.check = "font04";
        this.uncheck = "font05";
        this.payList = [];
        this.classNameFont04 = "font04";
        this.classNameFont05 = "font05";
        //创建订单入参
        this.orderDate = new __WEBPACK_IMPORTED_MODULE_4__pay_modal__["b" /* OrderDate */]();
        // 是否选择其他金额
        this.chooseOtherAmount = false;
        this.payList = Object(__WEBPACK_IMPORTED_MODULE_4__pay_modal__["c" /* getPayList */])();
    }
    ChargeNextPage.prototype.checkPayMod = function (payModel) {
        if (payModel == 'alipay') {
            this.isAliPay = true;
            this.classNameFont04 = "font04";
            this.classNameFont05 = "font05";
        }
        else {
            this.isAliPay = false;
            this.classNameFont04 = "font05";
            this.classNameFont05 = "font04";
        }
    };
    ChargeNextPage.prototype.checkCharge = function (i) {
        for (var j = 0; j < this.payList.length; j++) {
            this.payList[j].isChecked = false;
        }
        this.payList[i].isChecked = true;
        this.amount = this.payList[i].money;
        this.coin = this.amount * 10;
        this.chooseOtherAmount = false;
    };
    ChargeNextPage.prototype.otherCharge = function (e) {
        for (var j = 0; j < this.payList.length; j++) {
            this.payList[j].isChecked = false;
        }
        this.chooseOtherAmount = true;
        if (Number.isInteger(this.otherAmount)) {
            if (this.otherAmount > 5000) {
                this.otherAmount = 5000;
            }
            this.amount = this.otherAmount;
            this.coin = this.otherAmount * 10;
        }
        else {
            this.otherAmount = null;
            this.amount = this.otherAmount;
            this.coin = null;
        }
    };
    //支付代码
    ChargeNextPage.prototype.beginPay = function () {
        if (!this.amount) {
            this.cmptUtil.showAlert("请选择充值金额，或输入自定义金额！");
            return;
        }
        //this.cmptUtil.showLoading('充值中...');
        if (!this.isAliPay) {
            // 微信支付
            this.checkWechat();
        }
        else {
            // 支付宝支付
            this.createOrder();
        }
    };
    // 判断是否已安装微信插件
    ChargeNextPage.prototype.checkWechat = function () {
        var _this = this;
        Wechat.isInstalled(function (isInstalled) {
            if (isInstalled) {
                // 已安装微信
                _this.createOrder();
            }
            else {
                // 未安装微信
                var MSG = '尚未安装微信，无法调起微信支付！';
                console.log(MSG);
                _this.cmptUtil.showAlert(MSG);
            }
        }, function (error) {
            var MSG = '调用微信检查插件失败！';
            _this.cmptUtil.hideLoading();
            _this.cmptUtil.showAlert(MSG);
            console.log(MSG + "\u5931\u8D25\u4FE1\u606F\uFF1A");
            console.log(error);
        });
    };
    // 创建订单
    ChargeNextPage.prototype.createOrder = function () {
        this.orderDate.payMode = this.isAliPay ? '02' : '01'; //01-微信，02支付宝
        this.orderDate.rechAmount = this.amount;
        this.orderDate.rechType = '01'; //账户充值
        this.orderDate.sysType = this.platform.is("android") ? '01' : "02"; //系统类型，01-安卓，02-iOS，03-WEB，04-微信
        var cor = new __WEBPACK_IMPORTED_MODULE_4__pay_modal__["a" /* CreateOrderResponse */]();
        cor.rechId = "1111111";
        cor.alipayOrderStr = '222222';
        cor.wechatOrder = { test: "test" };
        /*   */
        this.payWithApp(cor);
        // 创建订单
        // this.chargeService.newOrder(this.orderDate).subscribe(value => {
        //     console.log(value);
        //     console.log(`创建订单成功！订单号：${value.rechId}`);
        //   this.payWithApp(value);
        // }, () => this.cmptUtil.hideLoading());
    };
    // 调用支付应用支付
    ChargeNextPage.prototype.payWithApp = function (data) {
        var _this = this;
        var onPaySuccess = function (payResult) {
            var tradeNo;
            console.log('调用应用成功！返回数据：');
            console.log(payResult);
            _this.cmptUtil.hideLoading();
            // 判断支付宝返回状态
            if (_this.isAliPay && payResult.hasOwnProperty('resultStatus')) {
                switch (payResult.resultStatus) {
                    case '9000':
                        _this.cmptUtil.showToast({ message: '订单支付成功！' });
                        break;
                    case '8000':
                        _this.cmptUtil.showToast({ message: '订单处理中...' });
                        break;
                    case '4000':
                        _this.cmptUtil.showAlert('订单支付失败！');
                        return;
                    case '6001':
                        _this.cmptUtil.showToast({ message: '已取消支付' });
                        return;
                    case '6002':
                        _this.cmptUtil.showAlert('网络连接出错！');
                        return;
                    default:
                        _this.cmptUtil.showAlert('未知支付状态！');
                        return;
                }
                // 获取支付宝订单流水号
                var ORDER_RESULT = JSON.parse(payResult.result);
                tradeNo = ORDER_RESULT.alipay_trade_app_pay_response.trade_no;
                console.log('获取到的支付宝订单流水号：' + tradeNo);
            }
            _this.cmptUtil.showLoading('更新订单中...');
            // 更新订单
            // this.rechargeService.updateRechargeOrder(data.rechId, tradeNo)
            // .subscribe(() => {
            //     console.log('充值成功！');
            //     // 变更余额
            //     this.balance = Number((this.balance + this.rechAmount).toFixed(2));
            //     this.cmptUtil.showToast({message: '充值成功！'});
            //     this.cmptUtil.hideLoading();
            // }, () => this.cmptUtil.hideLoading());
        };
        var onPayFailed = function (error) {
            var CANCEL_MSG = '用户点击取消并返回';
            var MSG = '调用应用支付失败！';
            if (error == CANCEL_MSG) {
                _this.cmptUtil.showToast({ message: CANCEL_MSG });
            }
            else {
                _this.cmptUtil.showAlert(MSG);
            }
            _this.cmptUtil.hideLoading();
            console.log(MSG + "\u5931\u8D25\u4FE1\u606F\uFF1A");
            console.log(error);
        };
        if (this.isAliPay) {
            // 支付宝支付
            console.log('调用支付宝应用支付...');
            this.alipay.pay(data.alipayOrderStr)
                .then(onPaySuccess).catch(onPayFailed);
        }
        else {
            // 微信支付
            console.log('调用微信应用支付...');
            Wechat.sendPaymentRequest(data.wechatOrder, onPaySuccess, onPayFailed);
        }
    };
    ChargeNextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chargenext',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\charge\chargenext\chargenext.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>充值中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n  <ion-item>\n\n        <span class="font02">支付方式</span>\n\n      <span class="font01" >免费开通</span>\n\n    </ion-item>\n\n    <div class="{{classNameFont04}}" (click)="checkPayMod(\'alipay\')"><img class="fl" src=\'./assets/imgs/icon16.png\' />支付宝 <img src=\'./assets/imgs/dui.png\' *ngIf="isAliPay" /></div>\n\n    <div class="{{classNameFont05}}" (click)="checkPayMod(\'wechat\')"><img class="fl" src=\'./assets/imgs/icon17.png\' />微信支付<img src=\'./assets/imgs/dui.png\'  *ngIf="!isAliPay" /></div>\n\n     <ion-item>\n\n        <span class="font02">支付金额</span>\n\n    </ion-item>\n\n    <ion-item class="city" >\n\n        <span *ngFor="let payMap  of  payList   index as i" [ngClass]="{\'cur\':payMap.isChecked}" (click)=\'checkCharge(i)\'>{{payMap.money}}</span>\n\n    </ion-item>\n\n    	<div class="font05" style="margin-left:20px;margin-top:0;"  ><input clearInput class="lo_ico02" type="number" min=1 max=5000 step=1 [(ngModel)]="otherAmount"  placeholder="请输入金额" (keyup)="otherCharge($event)"></div>\n\n   <div class="img01"><div class="title01">{{coin}}</div></div>\n\n  <div class="btn">\n\n        <button ion-button type="submit"  class="anniu_l"  (click)="beginPay()">确定</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\charge\chargenext\chargenext.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__util_components_util__["a" /* ComponentsUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__providers_charge_service__["a" /* ChargeService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_alipay__["a" /* Alipay */]])
    ], ChargeNextPage);
    return ChargeNextPage;
}());

//# sourceMappingURL=chargenext.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PicturesPage = /** @class */ (function () {
    //=["4c053c82-ed1e-4ae3-a3de-1c9a92fc5da2,4c053c82-ed1e-4ae3-a3de-1c9a92fc5da2","486059ae-8da6-4936-9247-f482049906e9"];
    function PicturesPage(navparams, navCtrl, viewCtrl, modalController, alertCtrl) {
        this.navparams = navparams;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        //this.pictures=this.navparams.get("imgIdsStr");
        if (this.pictures.indexOf && this.pictures.indexOf(",") > 0) {
            this.picturesList = this.pictures.split(",");
        }
        else {
            this.picturesList.push(this.pictures);
        }
    }
    PicturesPage.prototype.getBack = function () {
        for (var i = 0; i < this.picturesList.length; i++) {
            if (i == 0) {
                this.pictures = this.picturesList[i];
            }
            else {
                this.pictures += "," + this.picturesList[i];
            }
        }
        this.viewCtrl.dismiss({ imgIdsStr: this.pictures });
    };
    PicturesPage.prototype.delImg = function (flag) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '确定删除吗?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        _this.picturesList.splice(flag, 1);
                        if (_this.picturesList.length == 0) {
                            _this.viewCtrl.dismiss({ imgIdsStr: "" });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    PicturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pictures',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\modal\pictures\pictures.html"*/'<ion-header no-border >\n\n    <ion-navbar transparent >\n\n        <button ion-button  clear (click)="getBack()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>  \n\n        <ion-title></ion-title>\n\n        \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <ion-slides>\n\n        <ion-slide *ngFor="let imgid of picturesList   index as  i">\n\n          <!-- <ion-icon style="float:right;color:#fff" name="close-circle" (click)="delImg(i)"> </ion-icon> -->\n\n          <img class="picture" src="./assets/imgs/head.png" [asyncSrc]="imgid"  >\n\n        </ion-slide>\n\n        \n\n      </ion-slides>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\modal\pictures\pictures.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], PicturesPage);
    return PicturesPage;
}());

//# sourceMappingURL=pictures.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Release3DailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charge_charge__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_TaskAddModel__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_DbDict__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Release3DailyPage = /** @class */ (function () {
    function Release3DailyPage(navCtrl, param, alertCtrl, taskService, componentUtil, modalController) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.alertCtrl = alertCtrl;
        this.taskService = taskService;
        this.componentUtil = componentUtil;
        this.modalController = modalController;
        // 难度等级是否可以重置
        this.canResetLevel = true;
        // 最低金币
        this.minCoin = 1;
        this.areasColumns = __WEBPACK_IMPORTED_MODULE_9__util_DbDict__["a" /* DbDict */].getAreas();
        // 金币等级关系
        this.starsCoin = [{
                minCoin: 1,
                coin: 2000
            }, {
                minCoin: 2001,
                coin: 4999
            }, {
                minCoin: 5000,
                coin: 9999
            }, {
                minCoin: 10000,
                coin: 49999
            }, {
                minCoin: 50000,
                coin: 99999
            }];
        this.starLevel = 0; //难度等级，<=此下标的星星都是活跃状态
        this.task = new __WEBPACK_IMPORTED_MODULE_7__models_TaskAddModel__["a" /* TaskAddModel */]();
        this.taskDescript = {};
        this.initTypes();
        var taskInfo = param.get("taskInfo");
        console.log(taskInfo);
        this.personalCoin = parseInt(taskInfo.coin_personal);
        this.task.type = taskInfo.typeCode;
        this.task.bigType = taskInfo.type_2_code;
        this.initTask();
    }
    // 页面控件初始化完成，加载数据
    Release3DailyPage.prototype.ionViewDidEnter = function () {
        console.log('页面加载完毕');
    };
    Release3DailyPage.prototype.releaseTask = function () {
        var _this = this;
        var msg = "", request = this.task;
        request.level = this.starLevel;
        request.classify = '10'; //悬赏任务
        // 21一起玩、22一起吃、23一起旅游、24江湖救急
        if (this.task.bigType == '21') {
            msg = this.playTogetherValidate(request);
        }
        else if (this.task.bigType == '22') {
            msg = this.eatTogetherValidate(request);
        }
        else if (this.task.bigType == '23') {
            msg = this.travelTogetherValidate(request);
        }
        else if (this.task.bigType == '24') {
            msg = this.jhjjValidate(request);
        }
        else if (this.task.bigType == '25') {
            msg = this.otherValidate(request);
        }
        else if (this.task.type == '03') {
            msg = this.questionValidate(request);
        }
        if (msg) {
            this.componentUtil.showAlert(msg);
            return false;
        }
        if (this.personalCoin < request.coin) {
            this.showCoinUnEnoughAlert();
            return false;
        }
        this.componentUtil.showLoading("发布中...");
        this.taskService.addTask(request).subscribe(function (data) {
            //发布完成任务自动跳转到历史发布界面
            _this.componentUtil.hideLoading();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__taskList_release_history__["a" /* ReleaseHistoryPage */]);
        }, function (error) {
            _this.componentUtil.hideLoading();
            if (error.message == "COIN_UN_ENOUGH") {
                _this.showCoinUnEnoughAlert();
            }
            else {
                _this.componentUtil.showAlert(error.message);
            }
        });
    };
    //跳转获取联系人及地址模板
    Release3DailyPage.prototype.checkFromContacts = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_1__modal_modal__["a" /* ModalPage */]);
        modal.onDidDismiss(function (data) {
            _this.task.fromMan = data.CONTACT;
            _this.task.fromAddr = data.ADDRESS;
            _this.task.fromTelephone = data.TELEPHONE;
        });
        modal.present();
    };
    ;
    Release3DailyPage.prototype.checkToContacts = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_1__modal_modal__["a" /* ModalPage */]);
        modal.onDidDismiss(function (data) {
            _this.task.toMan = data.CONTACT;
            _this.task.toAddr = data.ADDRESS;
            _this.task.toTelephone = data.TELEPHONE;
        });
        modal.present();
    };
    ;
    Release3DailyPage.prototype.setLevel = function (star, num) {
        if (!this.canResetLevel) {
            return false;
        }
        this.setStarActiveUntil(num);
        this.task.coin = star.coin;
    };
    Release3DailyPage.prototype.setStarActiveUntil = function (num) {
        this.starLevel = num;
    };
    Release3DailyPage.prototype.onCoinChange = function () {
        var coin = !this.task.coin.toString() ? 0 : parseInt(this.task.coin.toString());
        var arr = this.starsCoin;
        var length = arr.length;
        var min = arr[0].minCoin, max = arr[length - 1].coin;
        for (var i = 0; i < arr.length; i++) {
            if (coin < min) {
                this.setStarActiveUntil(0);
                break;
            }
            else if (arr[i].coin >= coin && arr[i].minCoin <= coin) {
                this.setStarActiveUntil(++i);
                break;
            }
            else if (coin > max) {
                this.setStarActiveUntil(length);
                break;
            }
        }
    };
    Release3DailyPage.prototype.requestBasicValidate = function (request) {
        return !request.description && "请输入任务描述"
            || !request.subscribeTime && "请输入任务开始的具体时间"
            || !request.toMan && "请输入目的地联系人姓名"
            || !request.toTelephone && "请输入目的地联系电话"
            || !__WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].isPhone(request.toTelephone) && "目的地联系电话格式不正确"
            || !request.toAddr && "请输入目的地地址"
            || request.coin < this.minCoin && "\u91D1\u5E01\u6700\u5C11\u4E0D\u80FD\u4F4E\u4E8E" + this.minCoin
            || !request.level && "请选择任务难度"
            || "";
    };
    Release3DailyPage.prototype.playTogetherValidate = function (request) {
        var msg = this.requestBasicValidate(request);
        return msg && msg
            || !request.partnerGender && "请选择同伴性别"
            || !request.feeType && "请选择费用结算类型";
    };
    Release3DailyPage.prototype.eatTogetherValidate = function (request) {
        var msg = this.requestBasicValidate(request);
        return msg && msg
            || !request.partnerGender && "请选择同伴性别"
            || !request.feeType && "请选择费用结算类型"
            || !request.smallType && "请选择伙食类型"
            || "";
    };
    Release3DailyPage.prototype.travelTogetherValidate = function (request) {
        var msg = this.requestBasicValidate(request);
        return msg && msg
            || (!request.area || request.area == "添加标签") && "请添加标签"
            || !request.fromMan && "请填写集合人姓名"
            || !request.fromAddr && "请填写集合地址"
            || !request.fromTelephone && "请填写集合人电话"
            || !request.partnerGender && "请选择同伴性别"
            || !request.feeType && "请选择费用结算类型"
            || !__WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].isPhone(request.fromTelephone) && "集合人联系方式格式不正确"
            || !(request.area.split("-")[1].substring(0, 2) == request.toAddr.substring(0, 2)) && "标签与目的地不符"
            || "";
    };
    Release3DailyPage.prototype.jhjjValidate = function (request) {
        var msg = this.requestBasicValidate(request);
        return msg && msg
            || !request.fromAddr && "请填写坐标地址"
            || "";
    };
    Release3DailyPage.prototype.otherValidate = function (request) {
        var msg = this.requestBasicValidate(request);
        return msg && msg
            || !request.fromMan && "请填写集合人姓名"
            || !request.fromAddr && "请填写集合地址"
            || !request.fromTelephone && "请填写集合人电话"
            || !request.partnerGender && "请选择同伴性别"
            || !request.feeType && "请选择费用结算类型"
            || !__WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].isPhone(request.fromTelephone) && "集合人联系方式格式不正确"
            || "";
    };
    Release3DailyPage.prototype.questionValidate = function (request) {
        return !request.description && "请输入问题描述"
            || !request.expireTime && "请输入任务截止时间"
            || request.coin < this.minCoin && "\u91D1\u5E01\u6700\u5C11\u4E0D\u80FD\u4F4E\u4E8E" + this.minCoin
            || !request.level && "请选择任务难度"
            || "";
    };
    Release3DailyPage.prototype.showCoinUnEnoughAlert = function () {
        var that = this;
        this.alertCtrl.create({
            title: "提示",
            message: "任务扣除后不足500金币,是否到充值页面?",
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('选择取消按钮');
                    }
                }, {
                    text: '确认',
                    handler: function () {
                        that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__charge_charge__["a" /* ChargePage */]);
                    }
                }
            ]
        }).present();
    };
    Release3DailyPage.prototype.initTypes = function () {
        var types = [];
        "2202甜品 2203清单 2204素食 2205麻辣 2206养生 2207火锅 2208视觉 2299其他".split(" ").forEach(function (val) {
            types.push({
                codeType: val.substring(0, 4),
                typeName: val.substring(4)
            });
        });
        this.eatTypes = types;
        this.partnerGenderTypes = __WEBPACK_IMPORTED_MODULE_9__util_DbDict__["a" /* DbDict */].getTypes('TASK_PARTNER_GENDER');
        this.feeTypes = __WEBPACK_IMPORTED_MODULE_9__util_DbDict__["a" /* DbDict */].getTypes('TASK_FEE_TYPE');
    };
    Release3DailyPage.prototype.getTypeName = function (code, type) {
        return __WEBPACK_IMPORTED_MODULE_9__util_DbDict__["a" /* DbDict */].code2type(code, type);
    };
    Release3DailyPage.prototype.initTask = function () {
        // 21-一起玩 22-一起吃 23-一起旅游 24-江湖救急
        if (this.task.bigType == '21') {
            this.taskDescript.placeholder = "请输入任务描述";
            this.taskDescript.toAddrDescript = "目的地信息与联系人方式";
        }
        else if (this.task.bigType == '22') {
            this.taskDescript.placeholder = "请输入任务描述，如：一起吃海底捞火锅";
            this.taskDescript.toAddrDescript = "目的地信息与联系人方式";
        }
        else if (this.task.bigType == '23') {
            this.taskDescript.placeholder = "请输入任务描述，如：“上海自驾游1日”";
            this.taskDescript.toAddrDescript = "目的地信息与联系人方式";
        }
        else if (this.task.bigType == '24') {
            this.canResetLevel = false;
            this.minCoin = 100000;
            this.starLevel = 5;
            this.taskDescript.placeholder = "请输入您的需求，如：出了车祸，人走不开，狗狗急需送医救治。我在坐标1，需送往坐标2。";
            this.taskDescript.toAddrDescript = "坐标2与联系人方式";
        }
        else {
            this.taskDescript.placeholder = "请输入任务描述";
            this.taskDescript.toAddrDescript = "目的地信息与联系人方式";
        }
    };
    Release3DailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-release-3-daily',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\release\release-3-daily.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>发布任务 2/3</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n\n\n    <!-- 日常 -->\n\n    <div *ngIf="task.type == \'02\'">\n\n\n\n        <!-- 一起吃  吃类型选择 -->\n\n        <ion-item class="city" *ngIf="task.bigType == \'22\'">\n\n            <span *ngFor="let eatType of eatTypes"\n\n                  [ngClass]="{true: \'cur\', false: \'\'}[eatType.codeType == task.smallType]"\n\n                  (click)="task.smallType = eatType.codeType">{{eatType.typeName}}</span>\n\n        </ion-item>\n\n        <!-- 一起旅游  地区标签 -->\n\n        <ion-item class="city" *ngIf="task.bigType == \'23\'">\n\n            <ion-multi-picker item-content [cancelText]="\'取消\'" [doneText]="\'完成\'" [placeholder]="task.area == undefined ? \'添加标签\' : task.area"\n\n                              [separator]="\'-\'" [(ngModel)]="task.area" [multiPickerColumns]="areasColumns"></ion-multi-picker>\n\n        </ion-item>\n\n\n\n\n\n\n\n        <div class="img02">\n\n            <ion-textarea clearInput minlength="5" maxlength="200" placeholder="{{taskDescript.placeholder}}"\n\n                          style="border: 0px solid; padding: 20px;margin-top: 15px;margin-left: 10px;"\n\n                          color="#cccccc" rows=6\n\n                          [(ngModel)]="task.description" class="textarea"></ion-textarea>\n\n        </div>\n\n        <ion-datetime displayFormat="YYYY/MM/DD HH:mm" [(ngModel)]="task.subscribeTime" class="font04"\n\n                      placeholder="请输入时间"\n\n                      pickerFormat="YYYY年MM月DD日 HH:mm" min="2018" max="2030-10-31"\n\n                      cancelText="取消" doneText="确定">\n\n            <img id="img_1" src=\'\'/>\n\n        </ion-datetime>\n\n\n\n        <!-- 集合地 -->\n\n        <div>\n\n            <!-- 一起旅游、其它类型 -->\n\n            <div *ngIf="task.bigType == \'23\' || task.bigType == \'25\'">\n\n                <div class="posit">集合地点和联系人信息</div>\n\n                <div class="con">\n\n                    <a class="txl" (click)="checkFromContacts()"><img src="./assets/imgs/icon20.png"/></a>\n\n                    <ion-item class="ts name">\n\n                        <ion-input clearInput type="text" placeholder="姓名"\n\n                                   [(ngModel)]="task.fromMan">\n\n                        </ion-input>\n\n                    </ion-item>\n\n                    <ion-item style="width: 150px;float:left;">\n\n                        <ion-input clearInput type="number" placeholder="电话" [min]="10000000000" [max]="19999999999"\n\n                                   [(ngModel)]="task.fromTelephone">\n\n                        </ion-input>\n\n                    </ion-item>\n\n                    <ion-input class="addr" type="text" placeholder="请填写集合地址"\n\n                               [(ngModel)]="task.fromAddr">\n\n                    </ion-input>\n\n                </div>\n\n            </div>\n\n            <!-- 江湖救急类型 -->\n\n            <div *ngIf="task.bigType == \'24\'">\n\n                <div class="posit">坐标1与联系人方式</div>\n\n                <div class="con-small">\n\n                    <ion-input clearInput class="addr" type="text" placeholder="请填写集合地址"\n\n                               [(ngModel)]="task.fromAddr">\n\n                    </ion-input>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n        <!--目的地 -->\n\n        <div>\n\n            <div class="posit">{{taskDescript.toAddrDescript}}</div>\n\n            <div class="con">\n\n                <a class="txl" (click)="checkToContacts()"><img src="./assets/imgs/icon20.png"/></a>\n\n                <ion-item class="ts name">\n\n                    <ion-input clearInput type="text" placeholder="姓名"\n\n                               [(ngModel)]="task.toMan">\n\n                    </ion-input>\n\n                </ion-item>\n\n                <ion-item style="width: 150px;float:left;">\n\n                    <ion-input clearInput type="number" placeholder="电话" [min]="10000000000" [max]="19999999999"\n\n                               [(ngModel)]="task.toTelephone">\n\n                    </ion-input>\n\n                </ion-item>\n\n                <ion-input clearInput class="addr" type="text" placeholder="请填写目的地址" [(ngModel)]="task.toAddr">\n\n                </ion-input>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="mess02" *ngIf="task.bigType != \'24\'">\n\n            <ion-item>\n\n                <ion-label>同伴性别</ion-label>\n\n                <ion-select [(ngModel)]="task.partnerGender" interface="popover">\n\n                    <ion-option *ngFor="let type of partnerGenderTypes"\n\n                                value="{{type.code}}">{{type.codeName}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>费用结算</ion-label>\n\n                <ion-select [(ngModel)]="task.feeType" interface="popover">\n\n                    <ion-option *ngFor="let type of feeTypes"\n\n                                value="{{type.code}}">{{type.codeName}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <!-- 问答 -->\n\n    <div *ngIf="task.type == \'03\'">\n\n\n\n        <div class="img02">\n\n            <ion-textarea clearInput minlength="5" maxlength="200" placeholder="请输入问题描述"\n\n                          style="border: 0px solid; padding: 20px;margin-top: 15px;margin-left: 10px;"\n\n                          color="#cccccc" rows=6\n\n                          [(ngModel)]="task.description" class="textarea"></ion-textarea>\n\n        </div>\n\n\n\n        <ion-datetime *ngIf="task.type == \'03\'"\n\n                      displayFormat="YYYY/MM/DD HH:mm" [(ngModel)]="task.expireTime" class="font04"\n\n                      placeholder="请输入任务截止时间"\n\n                      pickerFormat="YYYY年MM月DD日 HH:mm" min="2018" max="2030-10-31"\n\n                      cancelText="取消" doneText="确定">\n\n            <img id="img_1" src=\'\'/>\n\n        </ion-datetime>\n\n    </div>\n\n\n\n    <div>\n\n        <ion-item>\n\n            <div class="star">\n\n                <img [ngClass]="{true: \'star-avtive\', false: \'star-non-avtive\'}[(idx + 1) <= starLevel]"\n\n                     *ngFor="let star of starsCoin; let idx = index" (click)="setLevel(star, (idx + 1))"/>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item style="text-align: center">\n\n            <ion-input class="coin" clearInput type="number" placeholder="请输入金币数" [min]="minCoin"\n\n                       [(ngModel)]="task.coin" (ionChange)="onCoinChange()">\n\n            </ion-input>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <div class="btn">\n\n        <div (click)="releaseTask()" class="anniu_l"\n\n             style="padding-top: 20px">立即发布\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\release\release-3-daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_8__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"]])
    ], Release3DailyPage);
    return Release3DailyPage;
}());

//# sourceMappingURL=release-3-daily.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__check__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, params, actionSheetCtrl, taskService, alertCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.actionSheetCtrl = actionSheetCtrl;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.avatar = "";
        this.fileInfo = {}; //文件信息
        this.img_1 = ""; //正面照片id
        this.img_2 = ""; //反面照片id
        //this.fileInfo.fileId = "0ec633ed-57a8-4217-83c6-f465605a76ec";
    }
    UploadPage.prototype.presentActionSheet = function (flag) {
        var _this = this;
        this.flag = flag;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: '拍照',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                //  {
                //     text: '从相册选择',
                //     role: 'chooseFromAlbum',
                //     handler: () => {
                //         this.chooseFromAlbum();
                //     }
                // },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    UploadPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = { 'fileType': 'jpg', 'fileBase64': imageData };
            _this.path = base64Image;
            _this.upload();
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    UploadPage.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = { 'fileType': 'jpg', 'fileBase64': imageData };
            _this.path = base64Image;
            _this.upload();
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    UploadPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "上传失败", message: "只能选择一张图片", buttons: ["确定"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    UploadPage.prototype.upload = function () {
        var _this = this;
        this.taskService.uploadFile(this.path).subscribe(function (data) {
            _this.fileInfo = data;
            if (_this.flag == "1") {
                _this.img_1 = data.fileId;
            }
            if (_this.flag == "2") {
                _this.img_2 = data.fileId;
            }
        }, __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //完成任务
    UploadPage.prototype.toHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    //保存身份证照片id
    UploadPage.prototype.saveCardImg = function () {
        var _this = this;
        if (this.img_1 == "") {
            this.showAlert('正面照片还未选择！');
            return;
        }
        if (this.img_2 == "") {
            this.showAlert('反面照片还未选择！');
            return;
        }
        var imgInfo = {};
        imgInfo.img_1 = this.img_1;
        imgInfo.img_2 = this.img_2;
        this.taskService.updateCardImg(imgInfo).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__check__["a" /* CheckPage */]);
        }, __WEBPACK_IMPORTED_MODULE_5__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //显示提示信息
    UploadPage.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upload',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\upload\upload.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>上传证件</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="font01">在发布/接取任务之前,需要您进行实名认证,请按照以下提示完善身份信息</div>\n\n    <ion-item>\n\n        <div class="header-image"  tappable (click)="presentActionSheet(\'1\')">\n\n            <img class="login-img" [asyncSrc]="img_1">\n\n            拍摄身份证正面\n\n        </div>\n\n    </ion-item>\n\n    <ion-item>\n\n        <div class="header-image"  tappable (click)="presentActionSheet(\'2\')" >\n\n            <img class="login-img" [asyncSrc]="img_2">\n\n            拍摄身份证反面\n\n        </div>\n\n    </ion-item>\n\n\n\n    <div class="btn">\n\n        <button clear="true" ion-button item-end (click)="saveCardImg()" class="anniu_l">确定</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\upload\upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckPage = /** @class */ (function () {
    function CheckPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //完成任务
    CheckPage.prototype.toHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-check',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\upload\check.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>上传证件</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="font01">身份信息提交成功，请等待审核</div>\n\n\n\n\n\n    <div class="btn">\n\n        <button clear="true" ion-button item-end (click)="toHome()" class="anniu_l">确定</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\upload\check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], CheckPage);
    return CheckPage;
}());

//# sourceMappingURL=check.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPublisherCheckUnFinishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_DbDict__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_publisher__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__release_release_2__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmPublisherCheckUnFinishPage = /** @class */ (function () {
    function ConfirmPublisherCheckUnFinishPage(navCtrl, param, alertCtrl, componentsUtil, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.alertCtrl = alertCtrl;
        this.componentsUtil = componentsUtil;
        this.taskService = taskService;
        this.task = {};
        this.task = param.get("task");
        //标准代码转中文描述
        this.task.TYPE_STR = __WEBPACK_IMPORTED_MODULE_3__util_DbDict__["a" /* DbDict */].code2type(this.task.TYPE, "TASK_TYPE");
        this.task.BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_3__util_DbDict__["a" /* DbDict */].code2type(this.task.BIG_TYPE, "TASK_BIG_TYPE");
        this.task.FEE_TYPE_STR = __WEBPACK_IMPORTED_MODULE_3__util_DbDict__["a" /* DbDict */].code2type(this.task.FEE_TYPE, "TASK_FEE_TYPE");
        this.task.PARTNER_GENDER_STR = __WEBPACK_IMPORTED_MODULE_3__util_DbDict__["a" /* DbDict */].code2type(this.task.PARTNER_GENDER, "TASK_PARTNER_GENDER");
    }
    //重发任务
    ConfirmPublisherCheckUnFinishPage.prototype.againTask = function (id) {
        this.task.again = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__release_release_2__["a" /* ReleasePage_2 */], { taskInfo: this.task });
    };
    //跳转到评价页面
    ConfirmPublisherCheckUnFinishPage.prototype.toEval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__confirm_publisher__["a" /* ConfirmPublisherPage */], { task: this.task });
    };
    ConfirmPublisherCheckUnFinishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-publisher-check-un-finish',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\confirm\confirm_publisher_check_un_finish.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>任务评价</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;" class="detail">\n\n\n\n    <div class="tiao2 detail-title">\n\n        <span class="font01">{{task.BIG_TYPE_STR}}</span>\n\n        <div class="detail-star star-top">\n\n            <img *ngFor="let i of [1,2,3,4,5]" [hidden]="task.LEVEL < i" src=\'./assets/imgs/star.png\' />\n\n        </div>\n\n        <span style="display: block;">{{task.DESCRIPTION}}</span>\n\n    </div>\n\n\n\n    <div style="text-align: center;">\n\n        感谢使用冒险者公会!\n\n    </div>\n\n\n\n    <div>实付：{{task.COIN}}金币</div>\n\n\n\n    <div class="font03" (click)="againTask()">再次发布</div>\n\n    <div class="font03" (click)="toEval()">任务评价</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\confirm\confirm_publisher_check_un_finish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], ConfirmPublisherCheckUnFinishPage);
    return ConfirmPublisherCheckUnFinishPage;
}());

//# sourceMappingURL=confirm_publisher_check_un_finish.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_order__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_friend_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReleaseMapPage = /** @class */ (function () {
    function ReleaseMapPage(navCtrl, param, geolocation, callNumber, friendService, alertCtrl, platform, taskService, homeService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.geolocation = geolocation;
        this.callNumber = callNumber;
        this.friendService = friendService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.taskService = taskService;
        this.homeService = homeService;
        // 地图开启标志
        this.mapOn = true;
        // 搜索关键字
        this.searchKey = '';
        this.showFlag = false; //是否显示任务详细信息
        this.progressInfo = {}; //任务进程信息
        this.task = param.get("task");
        this.progressInfo = param.get("progressInfo");
        this.centerPoint = "";
        this.centerAddr = "";
    }
    ReleaseMapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            // 定位
            _this.locating();
        });
    };
    // 页面控件初始化完成，加载数据
    ReleaseMapPage.prototype.ionViewWillEnter = function () {
        this.alive = true;
    };
    ReleaseMapPage.prototype.ionViewDidLeave = function () {
        this.alive = false;
    };
    // 页面销毁
    ReleaseMapPage.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ReleaseMapPage.prototype.locating = function () {
        // 百度地图API功能
        this.map = new BMap.Map("bmap");
        var point = new BMap.Point(116.331398, 39.897445);
        this.map.centerAndZoom(point, 12);
        var geolocation = new BMap.Geolocation();
        var that = this;
        this.addIcon(); //添加起点图片和终点图片，接单人位置
        // geolocation.getCurrentPosition(function(r){
        //     if(this.getStatus() == "0"){
        //         let manIcon = new BMap.Icon("./assets/imgs/man.png", new BMap.Size(100, 100));
        //         let mk = new BMap.Marker(r.point, {icon: manIcon});
        //         that.map.addOverlay(mk);
        //         that.map.panTo(r.point);
        //     }
        //     else {
        //     }
        // },{enableHighAccuracy: true})
    };
    ReleaseMapPage.prototype.addIcon = function () {
        var startIcon = new BMap.Icon("./assets/imgs/start.png", new BMap.Size(100, 100));
        var endIcon = new BMap.Icon("./assets/imgs/end.png", new BMap.Size(100, 100));
        var manIcon = new BMap.Icon("./assets/imgs/man.png", new BMap.Size(100, 100));
        var myGeo = new BMap.Geocoder();
        var that = this;
        // 将地址解析结果显示在地图上,并调整地图视野
        //若经纬度不为空按经纬度定位
        if (this.task.FROM_POINT != null && this.task.FROM_POINT != "") {
            var _str = this.task.FROM_POINT.split(","); //拆分字符串  经度,维度
            if (_str.length > 1) {
                var _point = new BMap.Point(parseFloat(_str[0]), parseFloat(_str[1]));
                var marker1 = new BMap.Marker(_point, { icon: startIcon });
                that.map.addOverlay(marker1);
            }
        }
        else {
            myGeo.getPoint(this.task.FROM_ADDR, function (point) {
                if (point) {
                    var marker1 = new BMap.Marker(point, { icon: startIcon });
                    that.map.addOverlay(marker1);
                    that.map.centerAndZoom(point, 13);
                    that.map.panTo(point);
                }
                else {
                    //alert("您选择地址没有解析到结果!");
                }
            }, "北京市");
        }
        // 将地址解析结果显示在地图上,并调整地图视野
        //若经纬度不为空按经纬度定位
        if (this.task.TO_POINT != null && this.task.TO_POINT != "") {
            var _str = this.task.TO_POINT.split(","); //拆分字符串  经度,维度
            if (_str.length > 1) {
                var _point = new BMap.Point(parseFloat(_str[0]), parseFloat(_str[1]));
                var marker1 = new BMap.Marker(_point, { icon: endIcon });
                that.map.addOverlay(marker1);
            }
        }
        else {
            myGeo.getPoint(this.task.TO_ADDR, function (point) {
                if (point) {
                    var marker2 = new BMap.Marker(point, { icon: endIcon });
                    that.map.addOverlay(marker2);
                    that.map.centerAndZoom(point, 13);
                    that.map.panTo(point);
                }
                else {
                    //alert("您选择地址没有解析到结果!");
                }
            }, "北京市");
        }
        //添加接单人位置图标
        myGeo.getPoint(this.task.POSITION, function (point) {
            if (point) {
                var marker3 = new BMap.Marker(point, { icon: manIcon });
                that.map.addOverlay(marker3);
                that.map.centerAndZoom(point, 13);
                that.map.panTo(point);
            }
            else {
                //alert("您选择地址没有解析到结果!");
            }
        }, "北京市");
    };
    //查询任务进程状态
    ReleaseMapPage.prototype.queryProgress = function () {
        var _this = this;
        var param = {};
        param.id = this.task.ID;
        this.taskService.queryTaskProgressState(param).subscribe(function (data) {
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    if (item.STATE == "02") {
                        item.STATE_STR = "镖师接镖";
                    }
                    if (item.STATE == "03") {
                        item.STATE_STR = "镖师取镖";
                    }
                    if (item.STATE == "04") {
                        item.STATE_STR = "押镖完成";
                    }
                }
                _this.progressInfo = data;
            }
        }, __WEBPACK_IMPORTED_MODULE_8__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //是否显示任务进程信息
    ReleaseMapPage.prototype.showDetail = function () {
        if (this.showFlag) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
    };
    //接受任务者确定完成任务，添加照片页面
    ReleaseMapPage.prototype.toConfirmOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__confirm_confirm_order__["a" /* ConfirmOrderPage */], { task: this.task });
        this.alive = false;
    };
    ReleaseMapPage.prototype.toHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    //发布者添加接受者为好友
    ReleaseMapPage.prototype.goAddFriend = function () {
        var _this = this;
        this.friendService.addFriend(this.task.ORDER).subscribe(function (data) {
            if (data) {
                _this.alertCtrl.create({
                    title: '',
                    subTitle: "添加成功"
                }).present();
            }
            else {
                _this.alertCtrl.create({
                    title: '',
                    subTitle: "添加失败"
                }).present();
            }
        });
    };
    //拨打接受者电话 【取user表里面 TELEPHONE】
    ReleaseMapPage.prototype.goCall = function () {
        if (this.task.TELEPHONE == undefined || this.task.TELEPHONE == null) {
            console.log("获取电话号码失败");
            return;
        }
        var that = this;
        this.alertCtrl.create({
            title: "拨打:" + that.task.TELEPHONE + "?",
            message: "",
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('选择取消按钮');
                    }
                }, {
                    text: '确认',
                    handler: function () {
                        that.callNumber.callNumber(that.task.TELEPHONE, true)
                            .then(function (res) { return console.log('Launched dialer!', res); })
                            .catch(function (err) { return console.log('Error launching dialer', err); });
                    }
                }
            ]
        }).present();
    };
    ReleaseMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-release_map',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\map\release_map.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- 地图板块 -->\n\n<ion-content class="map-p" overflow-scroll="true" style="overflow: hidden" [hidden]="!mapOn || searching" padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div style="position:relative;height:95%">\n\n        <ion-item class="mapover">\n\n\n\n            <a (click)="goCall()" class="anniu01"><img src=\'./assets/imgs/icon22.png\' /></a>\n\n            <a (click)="goAddFriend()" class="anniu01"><img src=\'./assets/imgs/icon21.png\' /></a>\n\n            <div class="elem01"><img src=\'./assets/imgs/head.png\' width="40" [asyncSrc]="task.PIC_ID"/></div>\n\n            <div class="elem02">{{task.SHORT_NAME}}<span>称号</span></div><br/>\n\n            <div class="elem03" style="display: none">\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' />\n\n                <img src=\'./assets/imgs/star.png\' /> 4.9分/95%</div>\n\n            <div class="clear" style="height:20px;"></div>\n\n            <div class="font01" *ngIf="progressInfo[0].STATE !=\'04\' && progressInfo[0].STATE !=\'05\'">镖师押镖中</div>\n\n            <div class="font02">{{task.CONSUME_TIME}}</div>\n\n            <div class="clear"></div>\n\n            <div class="exp_h">距离终点还有1.2公里</div>\n\n            <div *ngIf="showFlag">\n\n                <div *ngFor="let item of progressInfo" >\n\n                    <div class="exp" *ngIf="item.STATE_STR !=\'\'">{{item.STATE_STR}}\n\n                        <span>{{item.INSERT_TIME}}</span>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div style="text-align:center;">\n\n                <a *ngIf="showFlag"><img src=\'./assets/imgs/icon26.png\' (click)="showDetail()" /></a>\n\n                <a *ngIf="!showFlag"><img src=\'./assets/imgs/icon25.png\' (click)="showDetail()" /></a>\n\n\n\n            </div>\n\n        </ion-item>\n\n        <!-- 地图 -->\n\n        <div class="map" id="bmap" >\n\n        </div>\n\n    </div>\n\n    <div class="font03" *ngIf="progressInfo[0].STATE !=\'04\' && progressInfo[0].STATE !=\'05\'" style="margin-top: 8px">\n\n        预计送达 15:35\n\n    </div>\n\n    <div class="font03" *ngIf="progressInfo[0].STATE ==\'04\' || progressInfo[0].STATE ==\'05\'" style="margin-top: 8px">\n\n        已送达\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\map\release_map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_11__providers_friend_service__["a" /* FriendService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_9__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_home_service__["a" /* HomeService */]])
    ], ReleaseMapPage);
    return ReleaseMapPage;
}());

//# sourceMappingURL=release_map.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharePage = /** @class */ (function () {
    function SharePage(navCtrl, socialSharing, alertController) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.alertController = alertController;
    }
    SharePage.prototype.shareMyApp = function (flag) {
        if (flag == "wechat" || flag == "wechatZone") {
            //this.checkWechat(flag);
            this.shareOthers("com.tencent.mm");
        }
        else if (flag == "QQ") {
            this.shareOthers("com.tencent.mqq");
        }
        else if (flag == "QQZone") {
            this.shareOthers("com.qzone");
        }
        else if (flag == "weibo") {
            this.shareOthers("com.sina.weibo");
        }
    };
    SharePage.prototype.checkWechat = function (flag) {
        Wechat.isInstalled(function (installed) {
            this.shareWechat(flag == "wechat" ? "0" : "1");
        }, function (reason) {
            this.alertController.creat({ title: "分享失败", message: "你没有安装微信哟!", buttons: ["确定"] });
            console.log("Failed: " + reason);
        });
    };
    SharePage.prototype.shareWechat = function (type) {
        Wechat.share({
            message: {
                title: "冒险者工会",
                description: "超好玩的APP",
                thumb: "./assets/imgs/head.png",
                media: {
                    type: Wechat.Type.WEBPAGE,
                    webpageUrl: "www.分享页面.com"
                }
            },
            scene: type // share to Timeline  
        }, function () {
            this.alertController.create({ title: "分享成功", message: "独乐乐不如与众乐乐!", buttons: ["确定"] });
        }, function (reason) {
            this.alertController.create({ title: "分享失败", message: "独乐乐不如与众乐乐!", buttons: ["确定"] });
        });
    };
    SharePage.prototype.shareOthers = function (packageName) {
        var _this = this;
        // this.socialSharing.canShare(packageName).then(() => {
        //this.socialSharing.shareVia(packageName,"冒险者工会","超好玩的APP","./assets/imgs/head.png","www.分享页面.com").
        this.socialSharing.share("冒险者工会,超好玩的APP", "冒险者工会,超好玩的APP", "http://smeossdev.oss-cn-hangzhou.aliyuncs.com/3b0cd7a0-f20c-431c-a2a7-750179625b42", "http://www.izle.cn").
            then(function () {
            _this.alertController.create({ title: "分享成功", message: "独乐乐不如与众乐乐!", buttons: ["确定"] });
        }).catch(function () {
            _this.alertController.create({ title: "分享失败", message: "独乐乐不如与众乐乐!", buttons: ["确定"] });
        });
        // }).catch(() => {
        //    this.alertController.create({title: "分享失败", message: "独乐乐不如与众乐乐!", buttons: ["确定"]});
        // });
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-share',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\share\share.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>分享</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	<div style="margin-top:100px;">\n\n<div class="font04" (click)="shareMyApp(\'wechat\')"><img class="fl" src=\'./assets/imgs/shar01.png\' />微信好友</div>\n\n<div class="font04" (click)="shareMyApp(\'wechatZone\')"><img class="fl" src=\'./assets/imgs/shar02.png\' />朋友圈 </div>\n\n<div class="font04" (click)="shareMyApp(\'QQ\')"><img class="fl" src=\'./assets/imgs/shar03.png\' />QQ好友 </div>\n\n<div class="font04" (click)="shareMyApp(\'QQZone\')"><img class="fl" src=\'./assets/imgs/shar04.png\' />QQ空间</div>\n\n<div class="font04" (click)="shareMyApp(\'weibo\')"><img class="fl" src=\'./assets/imgs/shar05.png\' />新浪微博 </div>\n\n</div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\share\share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnFriendInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnFriendInfoPage = /** @class */ (function () {
    function UnFriendInfoPage(navCtrl, userService, friendService, param, componentsUtil) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.friendService = friendService;
        this.param = param;
        this.componentsUtil = componentsUtil;
        this.friendInfo = param.data.friendInfo;
        this.friendInfo.PIC_ID ? this.friendInfo.PIC_ID : "";
    }
    UnFriendInfoPage.prototype.addFriend = function () {
        var _this = this;
        this.friendService.addFriend(this.friendInfo.USER_ID).subscribe(function (data) {
            if (data) {
                _this.componentsUtil.showAlert("添加成功");
            }
            else {
                _this.componentsUtil.showAlert("添加失败");
            }
        });
    };
    UnFriendInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-unfriendinfo',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\friend\unfriendinfo\unfriendinfo.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' ></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>用户信息</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	 <div class="img01">\n\n            <div class="img02"><img src="./assets/imgs/head.png" [asyncSrc]="friendInfo.PIC_ID"/></div>\n\n	 </div>\n\n	 <div class="img03"><span class="font01">{{friendInfo.PUBCOUNT}}</span><div class="font02">{{friendInfo.SHORT_NAME}}</div><span class="font01" style="left:267px;">{{friendInfo.ORDCOUNT}}</span></div>\n\n    <div class="font03" (click)="addFriend()" >添加好友</div>\n\n       <!--    <img class="login-img" [asyncSrc]="friendInfo.PIC_ID">\n\n    <hr>    姓名:{{friendInfo.USER_NAME}}\n\n    <hr>    级别：{{friendInfo.USER_LEV}}\n\n    <hr>    发布：{{friendInfo.PUBCOUNT}}\n\n    <hr>    接单：{{friendInfo.ORDCOUNT}}\n\n    <br>\n\n  <button ion-button [navPush]="commentsPage" [navParams]="params">修改备注</button>\n\n  <button ion-button [navPush]="messagePage" [navParams]="params">发送消息</button>\n\n\n\n-->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\friend\unfriendinfo\unfriendinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__providers_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__util_components_util__["a" /* ComponentsUtil */]])
    ], UnFriendInfoPage);
    return UnFriendInfoPage;
}());

//# sourceMappingURL=unfriendinfo.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments_comments__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendInfoPage = /** @class */ (function () {
    function FriendInfoPage(navCtrl, userService, friendService, param) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.friendService = friendService;
        this.param = param;
        this.friendInfo = param.data.friendInfo;
        this.friendInfo.PIC_ID ? this.friendInfo.PIC_ID : "";
        this.friendInfo.COMMENTS ? this.friendInfo.COMMENTS : "";
    }
    FriendInfoPage.prototype.goComments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__comments_comments__["a" /* CommentsPage */], { friendId: this.friendInfo.USER_ID, comments: this.friendInfo.COMMENTS });
    };
    FriendInfoPage.prototype.goMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */], { friendId: this.friendInfo.USER_ID });
    };
    FriendInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-friendinfo',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\friend\friendinfo\friendinfo.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>用户信息</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	<div class="img01">\n\n    <div class="img02"><img src="./assets/imgs/head.png" [asyncSrc]="friendInfo.PIC_ID"/></div>\n\n</div>\n\n<div class="img03"><span class="font01">{{friendInfo.PUBCOUNT}}</span><div class="font02">{{friendInfo.USER_NAME}}</div><span class="font01" style="left:71%;">{{friendInfo.ORDCOUNT}}</span></div>\n\n<div class="font03" (click)="goComments()">添加备注</div>\n\n    <div class="font03"(click)="goMessage()">发送消息</div>\n\n    \n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\friend\friendinfo\friendinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], FriendInfoPage);
    return FriendInfoPage;
}());

//# sourceMappingURL=friendinfo.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, userService, friendService, param, componentsUtil) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.friendService = friendService;
        this.param = param;
        this.componentsUtil = componentsUtil;
        this.friendId = param.data.friendId;
        this.comments = param.data.comments;
    }
    CommentsPage.prototype.modComments = function () {
        var _this = this;
        this.friendService.modComments(this.friendId, this.comments).subscribe(function (data) {
            if (data) {
                _this.componentsUtil.showAlert("保存成功");
                _this.navCtrl.pop();
            }
        });
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-comments',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\friend\comments\comments.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>用户信息</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n      <ion-item class="item-nobg">\n\n        <ion-input clearInput type="text" [(ngModel)]="comments"  placeholder="请输入备注信息" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="modComments()" block clear="true"><span class="anniu_l">保存</span>\n\n\n\n        </button>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\friend\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__providers_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__util_components_util__["a" /* ComponentsUtil */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, userService, friendService, param) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.friendService = friendService;
        this.param = param;
        this.friendId = param.get("friendId");
    }
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-message',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\friend\message\message.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>张三</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n  <div class=\'left\' ><img src=\'../../../assets/imgs/head.png\'><span>李四你好</span></div>\n\n  <div class=\'right\'><img src=\'../../../assets/imgs/head.png\'><span>张三你好</span></div>\n\n  <div class="elem01">\n\n  <ion-input type="text" placeholder="Mobile no" ><ion-icon item-right name="contacts" ></ion-icon></ion-input>\n\n  <a><img src=\'../../../assets/imgs/icon27.png\'></a>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\friend\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__providers_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DirectiveDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, util, loginService, storage) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.loginService = loginService;
        this.storage = storage;
        this.slides = [
            {
                image: "assets/imgs/img02.png",
                last: true
            }
        ];
        this.countDown();
    }
    //获取验证码
    WelcomePage.prototype.countDown = function () {
        var _this = this;
        this.countdownNum = 500;
        var inter = setInterval(function () {
            if (_this.countdownNum) {
                --_this.countdownNum;
            }
            else {
                clearInterval(inter);
                _this.skip();
            }
        }, 1000);
    };
    WelcomePage.prototype.skip = function () {
        var _this = this;
        this.storage.set("isFirstEntry", true);
        this.loginService.reLogin().subscribe(function (e) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            if (err != "AUTO_LOGIN_FAIL") {
                _this.util.showAlert(err);
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\welcome\welcome.html"*/'<ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides" style="background:url(./assets/imgs/bgimg.jpg);background-size: 100% 100%;">\n\n\n\n        <img src=\'./assets/imgs/img02.png\' />\n\n        <button *ngIf="slide.last" clear ion-button item-end (click)="skip()">跳过({{countdownNum}}s)</button>\n\n    </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_my_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPicPage = /** @class */ (function () {
    function MyPicPage(navCtrl, navparams, camera, alertCtrl, myService) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.myService = myService;
        this.fileId = navparams.data.PIC_ID;
    }
    MyPicPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = { 'fileType': 'jpg', 'fileBase64': imageData };
            _this.path = base64Image;
            _this.avatar = imageData.slice(7);
            _this.upload();
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    MyPicPage.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = { 'fileType': 'jpg', 'fileBase64': imageData };
            _this.path = base64Image;
            _this.upload();
            console.log('base64Image: ' + base64Image);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    MyPicPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    MyPicPage.prototype.upload = function () {
        var _this = this;
        this.myService.uploadFile(this.path).subscribe(function (data) {
            _this.fileInfo = data;
            _this.fileId = data.fileId;
        });
    };
    MyPicPage.prototype.updateMyPic = function () {
        var _this = this;
        this.myService.updateMyPic(this.fileId).subscribe(function (result) {
            if (result) {
                _this.alertCtrl.create({ title: "上传成功", message: "头像修改成功", buttons: ["确定"] });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__my__["a" /* MyPage */]);
            }
        });
    };
    MyPicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-mypic',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\my\mypic\mypic.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>个人信息</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	<div style="position:relative;background:url(\'./assets/imgs/bg_adm.png\') no-repeat;width:244px;height:240px;margin:0 auto;">\n\n            <div class="img01"><img src="./assets/imgs/head.png" [asyncSrc]="fileId" /></div>\n\n        </div>\n\n    <div class="font03" (click)="chooseFromAlbum()">从相册选择</div>\n\n    <div class="font03" (click)="takePhoto()">拍 照</div>\n\n   <div class="btn">\n\n        <button clear="true" ion-button item-end (click)="updateMyPic()" class="anniu_l">保存</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\my\mypic\mypic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1__providers_my_service__["a" /* MyService */]])
    ], MyPicPage);
    return MyPicPage;
}());

//# sourceMappingURL=mypic.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getStation = function () {
        return this.http.post("/api/no-auth/station/getAllStation", null);
    };
    HomeService.prototype.test = function () {
        return this.http.post("/test/chance", null);
    };
    /**
     * 通过服务端请求获得文件的真实路径
     * @param fileId
     */
    HomeService.prototype.getFileRealPath = function (fileId) {
        var URL = '/file/path';
        console.log(fileId);
        return this.http.post(URL, fileId, { showLoading: false, showError: false });
    };
    ;
    HomeService.prototype.updateShowFlag = function (showFlag) {
        var URL = '/my/updateShowFlag';
        return this.http.post(URL, { showFlag: showFlag }, { showLoading: false, showError: false });
    };
    /**
     * 加载地图相关js
     * @returns {Observable<void>}
     */
    HomeService.prototype.loadScript = function () {
        var callbackCount = 0;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (subscribe) {
            if (document.getElementById('cache-bmap')) {
                subscribe.next();
                return;
            }
            // let amapScriptE = document.createElement('script');
            var bmapScriptE = document.createElement('script');
            // amapScriptE.src = 'http://webapi.amap.com/maps?v=1.3&key=112f11b7a319047e4e209633aa63d915';
            // amapScriptE.id = 'cache-amap';
            bmapScriptE.src = 'http://api.map.baidu.com/getscript?v=3.0&ak=A5M0Uy5MeVBU4vkxcbu4cRBD3HiVFlkK';
            bmapScriptE.id = 'cache-bmap';
            // document.head.appendChild(amapScriptE);
            document.head.appendChild(bmapScriptE);
            // amapScriptE.onload = () => {
            //     callbackCount++;
            //     if (callbackCount == 2) {
            //         subscribe.next();
            //     }
            // };
            bmapScriptE.onload = function () {
                // callbackCount++;
                // if (callbackCount == 2) {
                subscribe.next();
                // }
            };
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_my_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyInfoPage = /** @class */ (function () {
    function MyInfoPage(navCtrl, navparams, myService, componentsUtil) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.myService = myService;
        this.componentsUtil = componentsUtil;
        this.telephone = this.navparams.data.telephone;
        this.userName = this.navparams.data.userName;
    }
    MyInfoPage.prototype.updateMyInfo = function () {
        var _this = this;
        this.myService.updateMyInfo({ telephone: this.telephone, userName: this.userName }).subscribe(function (data) {
            if (data) {
                _this.componentsUtil.showAlert("保存成功");
                _this.navCtrl.pop();
            }
        });
    };
    MyInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-myinfo',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\my\myinfo\myinfo.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>个人信息</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n  <ion-item class="item-nobg">\n\n        <ion-input clearInput type="text" [(ngModel)]="userName" placeholder="请输入姓名" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item *ngIf="!isSmsLogin"  class="item-nobg">\n\n        <ion-input clearInput type="number" [(ngModel)]="telephone" placeholder="请输入手机号码"  class="lo_ico02"></ion-input>\n\n        \n\n    </ion-item>\n\n    <div class="btn">\n\n        <button  (click)="updateMyInfo()" ion-button type="submit" block clear="true"><span class="anniu_l">保存</span>\n\n\n\n        </button>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\my\myinfo\myinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_my_service__["a" /* MyService */], __WEBPACK_IMPORTED_MODULE_0__util_components_util__["a" /* ComponentsUtil */]])
    ], MyInfoPage);
    return MyInfoPage;
}());

//# sourceMappingURL=myinfo.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exchangeprop_exchangeprop__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exchangemoney_exchangemoney__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchangetelefare_exchangetelefare__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExchangePage = /** @class */ (function () {
    function ExchangePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ExchangePage.prototype.exchange = function (type) {
        if (type == '1') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__exchangetelefare_exchangetelefare__["a" /* ExchangeTelefarePage */]);
        }
        else if (type == '2') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__exchangeprop_exchangeprop__["a" /* ExchangePropPage */]);
        }
        else if (type == '3') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__exchangemoney_exchangemoney__["a" /* ExchangeMoneyPage */]);
        }
    };
    ExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-exchange',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\exchange\exchange.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n    <ion-title>兑换中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n <div class="cont">\n\n   <div class="bg01" style="left:5%;top:20px;"><img (click)="exchange(\'1\')" src=\'./assets/imgs/text01.png\' /></div>\n\n   <div class="bg01" style="left:34%;top:120px;"><img (click)="exchange(\'2\')" src=\'./assets/imgs/text02.png\' /></div>\n\n   <div class="bg01" style="left:16%;top:287px;"><img (click)="exchange(\'3\')" src=\'./assets/imgs/text03.png\' /></div></div>\n\n <div class="text01">\n\n 1.兑换需要人工审核.<br/>\n\n 2.填写兑换信息时请确保提供的手机号或者支付宝账号准确.\n\n </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\exchange\exchange.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"]])
    ], ExchangePage);
    return ExchangePage;
}());

//# sourceMappingURL=exchange.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_exchange_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_components_util__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExchangePropPage = /** @class */ (function () {
    function ExchangePropPage(navCtrl, exchangeService, comutil) {
        this.navCtrl = navCtrl;
        this.exchangeService = exchangeService;
        this.comutil = comutil;
        this.coin = 0;
        this.exchangeCoin = 0;
        this.exchangeObj = 0;
    }
    ExchangePropPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.exchangeService.getCoinInfo().subscribe(function (data) {
            _this.coin = data;
        });
        this.exchangeService.getConfig("HORN_L").subscribe(function (data) {
            _this.hornL = data[0].CONFIG_VALUE;
            _this.step = _this.hornL;
        });
        this.exchangeService.getConfig("HORN_H").subscribe(function (data) {
            _this.hornH = data[0].CONFIG_VALUE;
        });
    };
    ExchangePropPage.prototype.exchange = function () {
        var _this = this;
        if (this.step == null) {
            this.comutil.showAlert("请选择兑换道具");
            return;
        }
        if (!this.exchangeCoin || this.exchangeCoin == null || this.exchangeCoin == 0) {
            this.comutil.showAlert("请选择正确的兑换金额");
            return;
        }
        this.exchangeObj = (this.exchangeCoin / this.step).toFixed(0);
        var hornType;
        if (this.step == this.hornL) {
            hornType = 'hornL';
        }
        else if (this.step == this.hornH) {
            hornType = 'hornH';
        }
        var obj = { account: this.step, exchangeObj: this.exchangeObj, hornType: hornType };
        this.exchangeService.exchangeProp(obj).subscribe(function (data) {
            if (data) {
                _this.comutil.showAlert("兑换成功");
                _this.exchangeService.getCoinInfo().subscribe(function (data) {
                    _this.coin = data;
                });
                _this.exchangeCoin = 0;
                _this.exchangeObj = 0;
            }
            else {
                _this.comutil.showAlert("兑换失败");
                _this.exchangeService.getCoinInfo().subscribe(function (data) {
                    _this.coin = data;
                });
                _this.exchangeCoin = 0;
                _this.exchangeObj = 0;
            }
        });
    };
    ExchangePropPage.prototype.checkProp = function (flag) {
        if (flag == '1') {
            this.step = this.hornL;
        }
        else if (flag == '2') {
            this.step = this.hornH;
        }
    };
    ExchangePropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-exchangeprop',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\exchange\exchangeprop\exchangeprop.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n    <ion-title>兑换中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	  <div [ngClass]="{\'font04\':step==hornL,\'font05\':step==hornH}" (click)="checkProp(\'1\')">小喇叭 \n\n      <img *ngIf="step==hornL"  src=\'./assets/imgs/dui.png\' />\n\n    </div>\n\n    <div [ngClass]="{\'font04\':step==hornH,\'font05\':step==hornL}" (click)="checkProp(\'2\')" >世界喇叭\n\n        <img *ngIf="step==hornH"  src=\'./assets/imgs/dui.png\' />\n\n      </div>\n\n      <ion-range  min="0" [max]="coin"  [(ngModel)]="exchangeCoin" step={{step}} ></ion-range>\n\n      <div class="title01">消耗金币：{{exchangeCoin}}/{{coin}}</div>\n\n      <div class="img01"><span class="font01">{{(exchangeCoin/step).toFixed(0)}}</span><br/><span class="font02">个</span></div>\n\n  \n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="exchange()" class="anniu_l">确定</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\exchange\exchangeprop\exchangeprop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0__providers_exchange_service__["a" /* ExchangeService */], __WEBPACK_IMPORTED_MODULE_3__util_components_util__["a" /* ComponentsUtil */]])
    ], ExchangePropPage);
    return ExchangePropPage;
}());

//# sourceMappingURL=exchangeprop.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_exchange_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExchangeMoneyPage = /** @class */ (function () {
    function ExchangeMoneyPage(navCtrl, exchangeService, comutil) {
        this.navCtrl = navCtrl;
        this.exchangeService = exchangeService;
        this.comutil = comutil;
        this.coin = 0;
        this.exchangeCoin = 0;
        this.exchangeObj = 0;
    }
    ExchangeMoneyPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.exchangeService.getCoinInfo().subscribe(function (data) {
            _this.coin = data;
        });
    };
    ExchangeMoneyPage.prototype.exchange = function () {
        var _this = this;
        if (!this.account || this.account == null || this.account == '') {
            this.comutil.showAlert("请输入正确的支付宝账号");
            return;
        }
        if (!this.exchangeCoin || this.exchangeCoin == null || this.exchangeCoin == 0) {
            this.comutil.showAlert("请选择正确的兑换金额");
            return;
        }
        this.exchangeObj = (this.exchangeCoin / 10).toFixed(0);
        var obj = { account: this.account, exchangeObj: this.exchangeObj };
        this.exchangeService.exchangeMoney(obj).subscribe(function (data) {
            if (data) {
                _this.comutil.showAlert("兑换提交成功");
                _this.exchangeService.getCoinInfo().subscribe(function (data) {
                    _this.coin = data;
                });
                _this.exchangeCoin = 0;
                _this.exchangeObj = 0;
            }
            else {
                _this.comutil.showAlert("兑换提交失败");
                _this.exchangeService.getCoinInfo().subscribe(function (data) {
                    _this.coin = data;
                });
                _this.exchangeCoin = 0;
                _this.exchangeObj = 0;
            }
        });
    };
    ExchangeMoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-exchangemoney',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\exchange\exchangemoney\exchangemoney.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n    <ion-title>兑换中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	 <ion-item class="item-nobg">\n\n        <ion-input clearInput   placeholder="请输入支付宝账号"\n\n                   [(ngModel)]="account" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n    <ion-range  min="0" [max]="coin"  [(ngModel)]="exchangeCoin" step="10" ></ion-range>\n\n   <div class="title01">消耗金币：{{exchangeCoin}}/{{coin}}</div>\n\n   <div class="img01"><span class="font01">{{(exchangeCoin/10).toFixed(0)}}</span><br/><span class="font02">元</span></div>\n\n   <div class="font03">返现需经过系统审核，审核通过后2个工作日内到账。</div>\n\n    <div class="btn">\n\n        <button ion-button (click)="exchange()" class="anniu_l">确定</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\exchange\exchangemoney\exchangemoney.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1__providers_exchange_service__["a" /* ExchangeService */], __WEBPACK_IMPORTED_MODULE_0__util_components_util__["a" /* ComponentsUtil */]])
    ], ExchangeMoneyPage);
    return ExchangeMoneyPage;
}());

//# sourceMappingURL=exchangemoney.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeTelefarePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exchange_service__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExchangeTelefarePage = /** @class */ (function () {
    function ExchangeTelefarePage(navCtrl, exchangeService, comutil) {
        this.navCtrl = navCtrl;
        this.exchangeService = exchangeService;
        this.comutil = comutil;
        this.coin = 0;
        this.exchangeCoin = 0;
        this.exchangeObj = 0;
        this.checkTel = true;
    }
    ExchangeTelefarePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.exchangeService.getCoinInfo().subscribe(function (data) {
            _this.coin = data;
        });
    };
    ExchangeTelefarePage.prototype.exchange = function () {
        var _this = this;
        if (!this.checkTel) {
            this.comutil.showAlert("请输入正确的手机号");
            return;
        }
        if (!this.exchangeCoin || this.exchangeCoin == null || this.exchangeCoin == 0) {
            this.comutil.showAlert("请选择正确的兑换金额");
            return;
        }
        this.exchangeObj = (this.exchangeCoin / 10).toFixed(0);
        var obj = { account: this.account, exchangeObj: this.exchangeObj };
        this.exchangeService.exchangeTelefare(obj).subscribe(function (data) {
            if (data) {
                _this.comutil.showAlert("兑换提交成功");
                _this.exchangeService.getCoinInfo().subscribe(function (data) {
                    _this.coin = data;
                });
                _this.exchangeCoin = 0;
                _this.exchangeObj = 0;
            }
            else {
                _this.comutil.showAlert("兑换提交失败");
                _this.exchangeService.getCoinInfo().subscribe(function (data) {
                    _this.coin = data;
                });
                _this.exchangeCoin = 0;
                _this.exchangeObj = 0;
            }
        });
    };
    ExchangeTelefarePage.prototype.checkMobile = function (e) {
        console.log(e);
        var str = e.target.value;
        if (str == "") {
            this.checkTel = false;
        }
        else {
            var re = /^1\d{10}$/;
            if (re.test(str)) {
                this.checkTel = true;
            }
            else {
                this.checkTel = false;
            }
        }
    };
    ExchangeTelefarePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exchangetelefare',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\exchange\exchangetelefare\exchangetelefare.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n    <ion-title>兑换中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	 <div style="position:relative;">\n\n	 <ion-item class="item-nobg">\n\n        <ion-input clearInput type="tel" [ngClass]="{\'checkTel\':!checkTel}" (keyup)="checkMobile($event)" placeholder="请输入手机号"\n\n                   [(ngModel)]="account" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n    <a class="txl">通讯录</a>\n\n    </div>\n\n    <ion-range  min="0" [max]="coin"  [(ngModel)]="exchangeCoin" step="10" ></ion-range>\n\n    <div class="title01">消耗金币：{{exchangeCoin}}/{{coin}}</div>\n\n    <div class="img01"><span class="font01">{{(exchangeCoin/10).toFixed(0)}}</span><br/><span class="font02">元</span></div>\n\n   \n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="exchange()" class="anniu_l">确定</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\exchange\exchangetelefare\exchangetelefare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_exchange_service__["a" /* ExchangeService */], __WEBPACK_IMPORTED_MODULE_2__util_components_util__["a" /* ComponentsUtil */]])
    ], ExchangeTelefarePage);
    return ExchangeTelefarePage;
}());

//# sourceMappingURL=exchangetelefare.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CachePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CachePage = /** @class */ (function () {
    function CachePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.percent = 0;
        for (var j = 0; j < 101; j++) {
        }
    }
    CachePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cache',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\cache\cache.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bg_clear.jpg\'); background-size:100% 100%;">\n\n  <div class="font01">\n\n      正在清理缓存...\n\n   </div>\n\n   <div class="font02">75%</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\cache\cache.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], CachePage);
    return CachePage;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassWordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_accept_accept__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PassWordPage = /** @class */ (function () {
    function PassWordPage(navCtrl, comutil, loginService, userService) {
        this.navCtrl = navCtrl;
        this.comutil = comutil;
        this.loginService = loginService;
        this.userService = userService;
    }
    PassWordPage.prototype.loadData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__task_accept_accept__["a" /* AcceptPage */]);
    };
    PassWordPage.prototype.changePwd = function () {
        var _this = this;
        if (this.passwordOld == "" || this.passwordOld == null) {
            this.comutil.showAlert("请输入原密码");
            return;
        }
        if (this.passwordNew == "" || this.passwordNew == null) {
            this.comutil.showAlert("请输入修改的密码");
            return;
        }
        this.loginService.changePwd({ passwordOld: this.passwordOld, passwordNew: this.passwordNew }).catch(function (err) {
            return err;
        }).subscribe(function (val) {
            if (typeof (val) != "string") {
                _this.userService.loginUesr(val);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
        });
    };
    PassWordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-password',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\password\password.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title>密码修改</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n      <ion-item class="item-nobg">\n\n        <ion-input type="password" clearInput [(ngModel)]="passwordOld"  placeholder="请输入的原密码" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n      <ion-item class="item-nobg">\n\n        <ion-input type="password" clearInput  [(ngModel)]="passwordNew"  placeholder="请输入新密码" class="lo_ico01"></ion-input>\n\n    </ion-item>\n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="changePwd()" block clear="true"><span class="anniu_l">保存</span>\n\n\n\n        </button>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__util_components_util__["a" /* ComponentsUtil */], __WEBPACK_IMPORTED_MODULE_2__providers_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__providers_user_service__["a" /* UserService */]])
    ], PassWordPage);
    return PassWordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_model_common_util__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DirectiveDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, util, loginService, userService) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.loginService = loginService;
        this.userService = userService;
    }
    LogoutPage.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function () {
            _this.userService.logout();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, __WEBPACK_IMPORTED_MODULE_7__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    LogoutPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-logout',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\logout\logout.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bg_out.jpg\'); background-size:100% 100%;">\n\n  <div class="img01">是否退出系统</div>\n\n  <button clear ion-button (click)="logout()" class="font03">确认</button>\n\n  <button clear ion-button (click)="cancel()" class="font03">取消</button>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\logout\logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__util_components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_accept_accept__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.loadData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task_accept_accept__["a" /* AcceptPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button color="light" (click)="loadData()">加载数据</button>\n\n\n\n  <img class="login-img" [asyncSrc]="picId">\n\n\n\n  <ion-list *ngFor="let item of stations" >\n\n    {{item.stationName}}\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbDict; });
var DbDict = /** @class */ (function () {
    function DbDict() {
        // private areas = [{
        //     areaTitle:"华北",
        //     areaNames: ["北京市", "天津市", "河北省", "山西省", "内蒙古"]
        // }, {
        //     areaTitle:"华东",
        //     areaNames: ["山东省", "江苏省", "安徽省", "上海市", "浙江省", "江西省", "福建省"]
        // }, {
        //     areaTitle:"华南",
        //     areaNames: ["广东省", "广西省", "海南省"]
        // }, {
        //     areaTitle:"华中",
        //     areaNames: ["湖北省", "湖南省", "河南省", "江西省"]
        // }, {
        //     areaTitle:"西北",
        //     areaNames: ["宁夏", "新疆", "青海省", "陕西省"]
        // }, {
        //     areaTitle:"西南",
        //     areaNames: ["四川省", "云南省", "贵州省", "西藏", "重庆市"]
        // }, {
        //     areaTitle:"东北",
        //     areaNames: ["辽宁省", "吉林省", "黑龙江省"]
        // }, {
        //     areaTitle:"台港澳",
        //     areaNames: ["台湾", "香港", "澳门"]
        // }];
        this.areas = [
            {
                options: [{ text: "华东", value: "华东" }, { text: "华北", value: "华北" }, { text: "华南", value: "华南" },
                    { text: "华中", value: "华中" }, { text: "西北", value: "西北" }, { text: "西南", value: "西南" },
                    { text: "东北", value: "东北" }, { text: "台港澳", value: "台港澳" }]
            },
            {
                options: [{ text: "山东省", value: "山东省", parentVal: "华东" }, { text: "江苏省", value: "江苏省", parentVal: "华东" }, { text: "安徽省", value: "安徽省", parentVal: "华东" },
                    { text: "上海市", value: "上海市", parentVal: "华东" }, { text: "浙江省", value: "浙江省", parentVal: "华东" }, { text: "江西省", value: "江西省", parentVal: "华东" },
                    { text: "福建省", value: "福建省", parentVal: "华东" }, { text: "北京市", value: "北京市", parentVal: "华北" }, { text: "天津市", value: "天津市", parentVal: "华北" },
                    { text: "河北省", value: "河北省", parentVal: "华北" }, { text: "山西省", value: "山西省", parentVal: "华北" }, { text: "内蒙古", value: "内蒙古", parentVal: "华北" },
                    { text: "广东省", value: "广东省", parentVal: "华南" }, { text: "广西省", value: "广西省", parentVal: "华南" }, { text: "海南省", value: "海南省", parentVal: "华南" },
                    { text: "湖北省", value: "湖北省", parentVal: "华中" }, { text: "湖南省", value: "湖南省", parentVal: "华中" }, { text: "河南省", value: "河南省", parentVal: "华中" },
                    { text: "江西省", value: "江西省", parentVal: "华中" }, { text: "宁夏", value: "宁夏", parentVal: "西北" }, { text: "新疆", value: "新疆", parentVal: "西北" },
                    { text: "青海省", value: "青海省", parentVal: "西北" }, { text: "陕西省", value: "陕西省", parentVal: "西北" }, { text: "四川省", value: "四川省", parentVal: "西南" },
                    { text: "云南省", value: "云南省", parentVal: "西南" }, { text: "贵州省", value: "贵州省", parentVal: "西南" }, { text: "西藏", value: "西藏", parentVal: "西南" },
                    { text: "重庆市", value: "重庆市", parentVal: "西南" }, { text: "辽宁省", value: "辽宁省", parentVal: "东北" }, { text: "吉林省", value: "吉林省", parentVal: "东北" },
                    { text: "黑龙江省", value: "黑龙江省", parentVal: "东北" }, { text: "台湾", value: "台湾", parentVal: "台港澳" }, { text: "香港", value: "香港", parentVal: "台港澳" },
                    { text: "澳门", value: "澳门", parentVal: "台港澳" }]
            }
        ];
        // 代码类型和具体代码集
        this.types = {
            TASK_TYPE: "01-跑腿 02-日常 03-问答",
            TASK_BIG_TYPE: "11-镖局 12-代购 21-一起玩 22-一起吃 23-一起旅游 24-江湖救急 31-生活常识 32-医学 33-科学 34-汽车",
            TASK_FEE_TYPE: "01-我请客 02-接收者请客 03-AA",
            TASK_FEE_TYPE_REVERSE: "01-发布者请客 02-我请客 03-AA",
            TASK_PARTNER_GENDER: "01-男 02-女 03-男女都可以"
        };
        this.typeArray = null;
        this.typeMapper = null;
        this.typeMapper = {};
        this.typeArray = {};
        var _loop_1 = function (typeName) {
            var mapper = {}, array = [];
            this_1.types[typeName].split(" ").forEach(function (val) {
                var type = val.split("-");
                mapper[type[0]] = type[1];
                array.push({
                    code: type[0],
                    codeName: type[1]
                });
            });
            this_1.typeMapper[typeName] = mapper;
            this_1.typeArray[typeName] = array;
        };
        var this_1 = this;
        for (var typeName in this.types) {
            _loop_1(typeName);
        }
    }
    DbDict.getInstance = function () {
        if (this._instance == null) {
            this._instance = new DbDict();
        }
        return this._instance;
    };
    /**
     * 标准代码转换为中文描述
     * @param {string} val 代码
     * @param {boolean} type 代码类型
     * @returns {any}
     */
    DbDict.code2type = function (code, type) {
        if (!code || !type) {
            return "";
        }
        var mapper = DbDict.getInstance().typeMapper[type];
        return mapper && mapper[code];
    };
    /**
     * 获取类型数组
     * @param {string} type
     * @returns {any}
     */
    DbDict.getTypes = function (type) {
        if (!type) {
            return [];
        }
        var array = DbDict.getInstance().typeArray[type];
        console.log(array);
        return array;
    };
    /**
     * 获取地区信息
     * @returns {any}
     */
    DbDict.getAreas = function () {
        return DbDict.getInstance().areas;
    };
    return DbDict;
}());

//# sourceMappingURL=DbDict.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(483);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_app_update__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_contacts__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_modal_modal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_share_share__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_my__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_charge_charge__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_exchange_exchange__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_system_system__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_update_update__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cache_cache__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_password_password__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_friend_friend__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_friend_friendinfo_friendinfo__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_friend_unfriendinfo_unfriendinfo__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_friend_comments_comments__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_friend_message_message__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_charge_chargeover_chargeover__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_exchange_exchangemoney_exchangemoney__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_exchange_exchangeprop_exchangeprop__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_exchange_exchangetelefare_exchangetelefare__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__util_http_wrapper_util__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_directives_module__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__properties_app_config_test__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__models_app_config__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_login_forget_pwd_forget_pwd__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_user_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_appConfig_properties__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_login_register_register__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_friend_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_charge_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_task_accept_accept__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_task_taskList_taskList__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_task_detail_detail__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_task_release_release__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_task_release_release_2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_task_release_release_3__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_task_release_release_4__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_task_taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_task_detail_history_detail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_task_accept_already_accept__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_welcome_welcome__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_task_executing_executing__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_task_finish_finish__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_task_release_release_address__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_task_camera_camera__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_task_query_query__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_task_confirm_confirm_order__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_task_confirm_confirm_publisher__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_task_again_release_again__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_image_picker__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_charge_chargenext_chargenext__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_my_myinfo_myinfo__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_my_mypic_mypic__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_friendrank_friendrank__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_task_detail_already_detail__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_task_taskList_finish_history__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_task_detail_finish_detail__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_alipay__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_logout_logout__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__providers_exchange_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ionic_native_social_sharing__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_task_upload_upload__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_task_upload_check__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_task_map_release_map__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_task_map_get_addr__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_task_map_order_map__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_task_release_release_3_daily__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ionic_native_call_number__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_task_confirm_confirm_publisher_check__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ion_multi_picker__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_89_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_task_confirm_confirm_publisher_check_un_finish__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_modal_pictures_pictures__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




///<reference path="../pages/task/release/release_address.ts"/>
























































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_login_forget_pwd_forget_pwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_login_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_task_accept_accept__["a" /* AcceptPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_friend_friendinfo_friendinfo__["a" /* FriendInfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_friend_unfriendinfo_unfriendinfo__["a" /* UnFriendInfoPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_friendrank_friendrank__["a" /* FriendRankPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_friend_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_friend_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_task_taskList_taskList__["a" /* TaskListPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_task_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_my_my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_exchange_exchange__["a" /* ExchangePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_system_system__["a" /* SystemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_update_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cache_cache__["a" /* CachePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_password_password__["a" /* PassWordPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_task_release_release__["a" /* ReleasePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_task_release_release_2__["a" /* ReleasePage_2 */],
                __WEBPACK_IMPORTED_MODULE_53__pages_task_release_release_3__["a" /* ReleasePage_3 */],
                __WEBPACK_IMPORTED_MODULE_86__pages_task_release_release_3_daily__["a" /* Release3DailyPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_task_release_release_4__["a" /* ReleasePage_4 */],
                __WEBPACK_IMPORTED_MODULE_55__pages_task_taskList_release_history__["a" /* ReleaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_task_detail_history_detail__["a" /* HistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_task_accept_already_accept__["a" /* AlreadyAcceptPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_task_executing_executing__["a" /* ExecutingPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_task_release_release_address__["a" /* ReleasePage_Address */],
                __WEBPACK_IMPORTED_MODULE_61__pages_task_finish_finish__["a" /* FinishPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_task_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_task_query_query__["a" /* QueryPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_task_confirm_confirm_order__["a" /* ConfirmOrderPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_task_confirm_confirm_publisher_check__["a" /* ConfirmPublisherCheckPage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_task_confirm_confirm_publisher_check_un_finish__["a" /* ConfirmPublisherCheckUnFinishPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_task_confirm_confirm_publisher__["a" /* ConfirmPublisherPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_task_taskList_finish_history__["a" /* FinishHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_task_detail_finish_detail__["a" /* FinishDetailPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_task_detail_already_detail__["a" /* AlreadyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_task_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_task_upload_check__["a" /* CheckPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_task_again_release_again__["a" /* AgainPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_exchange_exchangemoney_exchangemoney__["a" /* ExchangeMoneyPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_exchange_exchangeprop_exchangeprop__["a" /* ExchangePropPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_exchange_exchangetelefare_exchangetelefare__["a" /* ExchangeTelefarePage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_charge_chargenext_chargenext__["a" /* ChargeNextPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_charge_chargeover_chargeover__["a" /* ChargeOverPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_my_mypic_mypic__["a" /* MyPicPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_my_myinfo_myinfo__["a" /* MyInfoPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_task_map_release_map__["a" /* ReleaseMapPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_task_map_get_addr__["a" /* getAddrPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_modal_pictures_pictures__["a" /* PicturesPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_task_map_order_map__["a" /* OrderMapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_89_ion_multi_picker__["MultiPickerModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_33__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: [
                        //路由跳转
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */], name: 'home', segment: 'home', priority: "high" },
                        { component: __WEBPACK_IMPORTED_MODULE_58__pages_welcome_welcome__["a" /* WelcomePage */], name: 'welcome', segment: 'welcome' },
                        { component: __WEBPACK_IMPORTED_MODULE_38__pages_login_login__["a" /* LoginPage */], name: 'login', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_78__pages_logout_logout__["a" /* LogoutPage */], name: 'logout', segment: 'logout' },
                        { component: __WEBPACK_IMPORTED_MODULE_40__pages_login_forget_pwd_forget_pwd__["a" /* ForgetPwdPage */], name: 'forgetPwd', segment: 'forgetPwd' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_friend_friend__["a" /* FriendPage */], name: 'friend', segment: 'friend' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_friend_friendinfo_friendinfo__["a" /* FriendInfoPage */], name: 'friendinfo', segment: 'friendinfo' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_friend_unfriendinfo_unfriendinfo__["a" /* UnFriendInfoPage */], name: 'unfriendinfo', segment: 'unfriendinfo' },
                        { component: __WEBPACK_IMPORTED_MODULE_73__pages_friendrank_friendrank__["a" /* FriendRankPage */], name: 'friendrank', segment: 'friendrank' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_friend_comments_comments__["a" /* CommentsPage */], name: 'comments', segment: 'comments' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_friend_message_message__["a" /* MessagePage */], name: 'message', segment: 'message' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_exchange_exchange__["a" /* ExchangePage */], name: 'exchange', segment: 'exchange' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_exchange_exchangemoney_exchangemoney__["a" /* ExchangeMoneyPage */], name: 'exchangemoney', segment: 'exchangemoney' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_exchange_exchangetelefare_exchangetelefare__["a" /* ExchangeTelefarePage */], name: 'exchangetelefare', segment: 'exchangetelefare' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_exchange_exchangeprop_exchangeprop__["a" /* ExchangePropPage */], name: 'exchangeprop', segment: 'exchangeprop' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_charge_charge__["a" /* ChargePage */], name: 'charge', segment: 'charge' },
                        { component: __WEBPACK_IMPORTED_MODULE_70__pages_charge_chargenext_chargenext__["a" /* ChargeNextPage */], name: 'chargenext', segment: 'chargenext' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_charge_chargeover_chargeover__["a" /* ChargeOverPage */], name: 'chargeover', segment: 'chargeover' },
                        { component: __WEBPACK_IMPORTED_MODULE_47__pages_task_accept_accept__["a" /* AcceptPage */], name: 'accept', segment: 'accept' },
                        { component: __WEBPACK_IMPORTED_MODULE_57__pages_task_accept_already_accept__["a" /* AlreadyAcceptPage */], name: 'already_accept', segment: 'already_accept' },
                        { component: __WEBPACK_IMPORTED_MODULE_50__pages_task_detail_detail__["a" /* DetailPage */], name: 'detail', segment: 'detail' },
                        { component: __WEBPACK_IMPORTED_MODULE_74__pages_task_detail_already_detail__["a" /* AlreadyDetailPage */], name: 'alreadyDetail', segment: 'alreadyDetail' },
                        { component: __WEBPACK_IMPORTED_MODULE_56__pages_task_detail_history_detail__["a" /* HistoryDetailPage */], name: 'historyDetail', segment: 'historyDetail' },
                        { component: __WEBPACK_IMPORTED_MODULE_76__pages_task_detail_finish_detail__["a" /* FinishDetailPage */], name: 'finishDetail', segment: 'finishDetail' },
                        { component: __WEBPACK_IMPORTED_MODULE_60__pages_task_executing_executing__["a" /* ExecutingPage */], name: 'executing', segment: 'executing' },
                        { component: __WEBPACK_IMPORTED_MODULE_61__pages_task_finish_finish__["a" /* FinishPage */], name: 'finish', segment: 'finish' },
                        { component: __WEBPACK_IMPORTED_MODULE_51__pages_task_release_release__["a" /* ReleasePage */], name: 'release', segment: 'release' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* SharePage */], name: 'share', segment: 'share' },
                        { component: __WEBPACK_IMPORTED_MODULE_52__pages_task_release_release_2__["a" /* ReleasePage_2 */], name: 'release_2', segment: 'release_2' },
                        { component: __WEBPACK_IMPORTED_MODULE_53__pages_task_release_release_3__["a" /* ReleasePage_3 */], name: 'release_3', segment: 'release_3' },
                        { component: __WEBPACK_IMPORTED_MODULE_86__pages_task_release_release_3_daily__["a" /* Release3DailyPage */], name: 'release3Daily', segment: 'release3Daily' },
                        { component: __WEBPACK_IMPORTED_MODULE_54__pages_task_release_release_4__["a" /* ReleasePage_4 */], name: 'release_4', segment: 'release_4' },
                        { component: __WEBPACK_IMPORTED_MODULE_62__pages_task_release_release_address__["a" /* ReleasePage_Address */], name: 'release_address', segment: 'release_address' },
                        { component: __WEBPACK_IMPORTED_MODULE_55__pages_task_taskList_release_history__["a" /* ReleaseHistoryPage */], name: 'release_history', segment: 'release_history' },
                        { component: __WEBPACK_IMPORTED_MODULE_48__pages_task_taskList_taskList__["a" /* TaskListPage */], name: 'taskList', segment: 'taskList' },
                        { component: __WEBPACK_IMPORTED_MODULE_75__pages_task_taskList_finish_history__["a" /* FinishHistoryPage */], name: 'finishHistory', segment: 'finishHistory' },
                        { component: __WEBPACK_IMPORTED_MODULE_63__pages_task_camera_camera__["a" /* CameraPage */], name: 'camera', segment: 'camera' },
                        { component: __WEBPACK_IMPORTED_MODULE_64__pages_task_query_query__["a" /* QueryPage */], name: 'query', segment: 'query' },
                        { component: __WEBPACK_IMPORTED_MODULE_65__pages_task_confirm_confirm_order__["a" /* ConfirmOrderPage */], name: 'confirm_order', segment: 'confirm_order' },
                        { component: __WEBPACK_IMPORTED_MODULE_88__pages_task_confirm_confirm_publisher_check__["a" /* ConfirmPublisherCheckPage */], name: 'confirmPublisherCheck', segment: 'confirmPublisherCheck' },
                        { component: __WEBPACK_IMPORTED_MODULE_90__pages_task_confirm_confirm_publisher_check_un_finish__["a" /* ConfirmPublisherCheckUnFinishPage */], name: 'confirmPublisherCheckUnFinish', segment: 'confirmPublisherCheckUnFinish' },
                        { component: __WEBPACK_IMPORTED_MODULE_66__pages_task_confirm_confirm_publisher__["a" /* ConfirmPublisherPage */], name: 'confirm_publisher', segment: 'confirm_publisher' },
                        { component: __WEBPACK_IMPORTED_MODULE_81__pages_task_upload_upload__["a" /* UploadPage */], name: 'upload', segment: 'upload' },
                        { component: __WEBPACK_IMPORTED_MODULE_82__pages_task_upload_check__["a" /* CheckPage */], name: 'check', segment: 'check' },
                        { component: __WEBPACK_IMPORTED_MODULE_67__pages_task_again_release_again__["a" /* AgainPage */], name: 'again', segment: 'again' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_my_my__["a" /* MyPage */], name: 'my', segment: 'my' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_cache_cache__["a" /* CachePage */], name: 'cache', segment: 'cache' },
                        { component: __WEBPACK_IMPORTED_MODULE_71__pages_my_myinfo_myinfo__["a" /* MyInfoPage */], name: 'myinfo', segment: 'myinfo' },
                        { component: __WEBPACK_IMPORTED_MODULE_72__pages_my_mypic_mypic__["a" /* MyPicPage */], name: 'mypic', segment: 'mypic' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_system_system__["a" /* SystemPage */], name: 'system', segment: 'system' },
                        { component: __WEBPACK_IMPORTED_MODULE_84__pages_task_map_get_addr__["a" /* getAddrPage */], name: 'get_addr', segment: 'get_addr' },
                        { component: __WEBPACK_IMPORTED_MODULE_83__pages_task_map_release_map__["a" /* ReleaseMapPage */], name: 'release_map', segment: 'release_map' },
                        { component: __WEBPACK_IMPORTED_MODULE_2__pages_modal_modal__["a" /* ModalPage */], name: 'modal', segment: 'modal' },
                        { component: __WEBPACK_IMPORTED_MODULE_85__pages_task_map_order_map__["a" /* OrderMapPage */], name: 'order_map', segment: 'order_map' },
                        { component: __WEBPACK_IMPORTED_MODULE_91__pages_modal_pictures_pictures__["a" /* PicturesPage */], name: 'pictures', segment: 'pictures' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_my_my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_my_myinfo_myinfo__["a" /* MyInfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_my_mypic_mypic__["a" /* MyPicPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_charge_chargenext_chargenext__["a" /* ChargeNextPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_charge_chargeover_chargeover__["a" /* ChargeOverPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_exchange_exchange__["a" /* ExchangePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_exchange_exchangeprop_exchangeprop__["a" /* ExchangePropPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_exchange_exchangetelefare_exchangetelefare__["a" /* ExchangeTelefarePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_exchange_exchangemoney_exchangemoney__["a" /* ExchangeMoneyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_system_system__["a" /* SystemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_update_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cache_cache__["a" /* CachePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_password_password__["a" /* PassWordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_login_forget_pwd_forget_pwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_login_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_friendrank_friendrank__["a" /* FriendRankPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_friend_friendinfo_friendinfo__["a" /* FriendInfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_friend_unfriendinfo_unfriendinfo__["a" /* UnFriendInfoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_friend_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_friend_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_task_accept_accept__["a" /* AcceptPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_task_taskList_taskList__["a" /* TaskListPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_task_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_task_release_release__["a" /* ReleasePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_task_release_release_2__["a" /* ReleasePage_2 */],
                __WEBPACK_IMPORTED_MODULE_53__pages_task_release_release_3__["a" /* ReleasePage_3 */],
                __WEBPACK_IMPORTED_MODULE_86__pages_task_release_release_3_daily__["a" /* Release3DailyPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_task_release_release_4__["a" /* ReleasePage_4 */],
                __WEBPACK_IMPORTED_MODULE_55__pages_task_taskList_release_history__["a" /* ReleaseHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_task_detail_history_detail__["a" /* HistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_task_accept_already_accept__["a" /* AlreadyAcceptPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_task_executing_executing__["a" /* ExecutingPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_task_release_release_address__["a" /* ReleasePage_Address */],
                __WEBPACK_IMPORTED_MODULE_61__pages_task_finish_finish__["a" /* FinishPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_task_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_task_upload_check__["a" /* CheckPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_task_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_task_query_query__["a" /* QueryPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_task_confirm_confirm_order__["a" /* ConfirmOrderPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_task_confirm_confirm_publisher_check__["a" /* ConfirmPublisherCheckPage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_task_confirm_confirm_publisher_check_un_finish__["a" /* ConfirmPublisherCheckUnFinishPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_task_confirm_confirm_publisher__["a" /* ConfirmPublisherPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_task_detail_already_detail__["a" /* AlreadyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_task_taskList_finish_history__["a" /* FinishHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_task_detail_finish_detail__["a" /* FinishDetailPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_task_again_release_again__["a" /* AgainPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_task_map_release_map__["a" /* ReleaseMapPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_task_map_get_addr__["a" /* getAddrPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_modal_pictures_pictures__["a" /* PicturesPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_task_map_order_map__["a" /* OrderMapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_37__models_app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_36__properties_app_config_test__["a" /* APP_CONFIG_TEST */] },
                __WEBPACK_IMPORTED_MODULE_42__providers_appConfig_properties__["a" /* AppCfgProperties */],
                __WEBPACK_IMPORTED_MODULE_31__util_http_wrapper_util__["a" /* HttpWrapper */],
                __WEBPACK_IMPORTED_MODULE_35__providers_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_39__providers_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_41__providers_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_44__providers_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_45__providers_friend_service__["a" /* FriendService */],
                __WEBPACK_IMPORTED_MODULE_46__providers_charge_service__["a" /* ChargeService */],
                __WEBPACK_IMPORTED_MODULE_79__providers_exchange_service__["a" /* ExchangeService */],
                __WEBPACK_IMPORTED_MODULE_32__util_components_util__["a" /* ComponentsUtil */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_77__ionic_native_alipay__["a" /* Alipay */],
                __WEBPACK_IMPORTED_MODULE_80__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_3__providers_my_service__["a" /* MyService */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_87__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_app_update__["a" /* AppUpdate */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_app_config__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__properties_app_config_test__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_appConfig_properties__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_common_util__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HttpWrapper = /** @class */ (function () {
    function HttpWrapper(http, util, appConfig) {
        this.http = http;
        this.util = util;
        this.appConfig = appConfig;
    }
    /**
     * post请求方法
     * @param {string} url 地址
     * @param data 数据
     * @param {HttpOptions} config 请求配置
     * @returns {Observable<any>}
     */
    HttpWrapper.prototype.post = function (url, data, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        // 默认显示loading
        config.showLoading = Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__["l" /* isPresent */])(config.showLoading) ? config.showLoading : true;
        // 默认显示错误
        config.showError = Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__["l" /* isPresent */])(config.showError) ? config.showError : true;
        // 判断服务器响应时间
        config.timeout = Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_util__["l" /* isPresent */])(config.timeout) ? config.timeout : this.appConfig.getInstance().timeout;
        config.showLoading && this.util.showLoading();
        url = this.appConfig.getInstance().server + url;
        data = data || {};
        var request;
        if (config.withSession == "N") {
            request = data;
        }
        else {
            request = {
                sessionId: __WEBPACK_IMPORTED_MODULE_12__model_common_util__["a" /* CommonUtil */].getStoredItem("sessionId"),
                data: data
            };
        }
        console.log("\u5F00\u59CB\u8BF7\u6C42\uFF1A'" + url + "'\uFF0C\u8BF7\u6C42\u6570\u636E\u5982\u4E0B");
        console.log(request);
        return this.http.post(url, request, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */](), observe: 'body' })
            .timeoutWith(config.timeout, __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('连接超时，请稍后重试'))
            .map(function (response) {
            if (config.showLoading) {
                _this.util.hideLoading();
            }
            console.log("\u8BF7\u6C42\uFF1A'" + url + "'\u83B7\u53D6\u7684\u6570\u636E\u4E3A\uFF1A");
            console.log(response);
            if (response.success) {
                return response.data;
            }
            else {
                throw response.message;
            }
        })
            .catch(function (err) {
            config.showLoading && _this.util.hideLoading();
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpErrorResponse */]) {
                console.log("\u8BF7\u6C42\uFF1A'" + url + "'\u53D1\u751F\u5F02\u5E38\uFF0C\u5F02\u5E38\u4FE1\u606F\uFF1A");
                console.log(err);
                var message = '服务器正在偷懒，请稍候再试';
                config.showError && _this.util.showAlert(message);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(message);
            }
            else {
                console.error("\u8BF7\u6C42\uFF1A'" + url + "'\u8FD4\u56DE\u9519\u8BEF\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A");
                console.error(err);
                config.showError && _this.util.showAlert(err);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
            }
        });
    };
    HttpWrapper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__models_app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_10__properties_app_config_test__["a" /* APP_CONFIG_TEST */] }
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__components_util__["a" /* ComponentsUtil */],
            __WEBPACK_IMPORTED_MODULE_11__providers_appConfig_properties__["a" /* AppCfgProperties */]])
    ], HttpWrapper);
    return HttpWrapper;
}());

//# sourceMappingURL=http-wrapper.util.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_history_detail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_release_map__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_DbDict__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_confirm_publisher_check__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReleaseHistoryPage = /** @class */ (function () {
    function ReleaseHistoryPage(navCtrl, param, homeService, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.homeService = homeService;
        this.taskService = taskService;
        this.progressInfo = {}; //任务进程信息
        this.types = [
            { id: "1", title: "待接", states: "'01'" },
            { id: "2", title: "进行中", states: "'02','03'" },
            { id: "3", title: "完成", states: "'04'" },
            { id: "4", title: "回收站", states: "'10'" }
        ];
        this.selectType = this.types[0]; //缓存类型信息
        this.initHistoryReleaseTask(); //初始化查询自己已发布的任务
    }
    ReleaseHistoryPage.prototype.backButtonClick = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    ReleaseHistoryPage.prototype.showDetail = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_history_detail__["a" /* HistoryDetailPage */], { task: task });
    };
    ReleaseHistoryPage.prototype.publisherCheckTask = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__confirm_confirm_publisher_check__["a" /* ConfirmPublisherCheckPage */], { task: task });
    };
    ReleaseHistoryPage.prototype.ionViewDidLoad = function () {
        this.navBar.backButtonClick = this.backButtonClick;
    };
    ReleaseHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            _this.initHistoryReleaseTask(); //初始化查询自己已发布的任务
        });
    };
    //展示地图
    //查询任务进程状态
    ReleaseHistoryPage.prototype.showMap = function (id) {
        var _this = this;
        var param = {};
        param.id = id;
        this.taskService.queryTaskProgressState(param).subscribe(function (data) {
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    item.STATE_STR = "";
                    if (item.STATE == "02") {
                        item.STATE_STR = "镖师接镖";
                    }
                    if (item.STATE == "03") {
                        item.STATE_STR = "镖师取镖";
                    }
                    if (item.STATE == "04") {
                        item.STATE_STR = "押镖完成";
                    }
                }
                _this.progressInfo = data;
                for (var _i = 0, _a = _this.taskList; _i < _a.length; _i++) {
                    var task = _a[_i];
                    if (id == task.ID) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_release_map__["a" /* ReleaseMapPage */], { task: task, progressInfo: _this.progressInfo });
                    }
                }
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //查询自己已发布的任务【01  是待接取】
    ReleaseHistoryPage.prototype.initHistoryReleaseTask = function () {
        var _this = this;
        this.taskService.getHistoryReleaseTask("01").subscribe(function (data) {
            _this.taskList = data;
            for (var i = 0; i < data.length; i++) {
                //标准代码转中文描述
                _this.taskList[i].BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_7__util_DbDict__["a" /* DbDict */].code2type(_this.taskList[i].BIG_TYPE, "TASK_BIG_TYPE");
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    //根据类型查询已发布的任务
    ReleaseHistoryPage.prototype.queryHistoryReleaseTask = function (type) {
        var _this = this;
        this.selectType = type;
        this.taskService.getHistoryReleaseTask(type.states).subscribe(function (data) {
            _this.taskList = data;
            for (var i = 0; i < data.length; i++) {
                //标准代码转中文描述
                _this.taskList[i].BIG_TYPE_STR = __WEBPACK_IMPORTED_MODULE_7__util_DbDict__["a" /* DbDict */].code2type(_this.taskList[i].BIG_TYPE, "TASK_BIG_TYPE");
            }
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], ReleaseHistoryPage.prototype, "navBar", void 0);
    ReleaseHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-re-history',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\taskList\release_history.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n        <ion-title>历史发布</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="anniu_zu">\n\n        <span  *ngFor="let type of types"\n\n               [ngClass]="{true: \'cur\', false: \'\'}[type.id == selectType.id]"\n\n              (click)="queryHistoryReleaseTask(type)">{{type.title}}</span>\n\n    </div>\n\n    <ion-list *ngFor="let item of taskList"><!-- 悬赏样式 -->\n\n        <div class="tiao" *ngIf="item.STATE == \'02\' && item.TYPE != \'02\'">\n\n            <a class="font03" (click)="showDetail(item)"></a>\n\n            <a class="font04" (click)="showMap(item.ID)"></a>\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span>\n\n            <span class="font02" *ngIf="item.STATE == \'02\'">{{item.CONSUME_TIME}}</span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n        <div class="tiao01" *ngIf="item.STATE == \'02\' && item.TYPE == \'02\'">\n\n            <a class="font03" (click)="showDetail(item)"></a>\n\n            <a class="font04" (click)="showMap(item.ID)"></a>\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span>\n\n            <span class="font02">待确认</span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n        <div class="tiao01" *ngIf="item.STATE == \'03\'">\n\n            <a class="font03" (click)="publisherCheckTask(item)"></a>\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span>\n\n            <span class="font02">待确认</span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n        <div class="tiao01" *ngIf="item.STATE != \'02\' && item.STATE != \'03\'">\n\n            <a class="font03" (click)="showDetail(item)"></a>\n\n            <a class="font04" (click)="showMap(item.ID)"></a>\n\n            <span class="font01">{{item.BIG_TYPE_STR}}</span>\n\n            <span class="font02">\n\n                <img *ngFor="let i of [1,2,3,4,5]" [hidden]="item.LEVEL < i" src=\'./assets/imgs/star.png\' />\n\n            </span><br />\n\n            <span>{{item.DESCRIPTION}}</span>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\taskList\release_history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__providers_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], ReleaseHistoryPage);
    return ReleaseHistoryPage;
}());

//# sourceMappingURL=release_history.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendService = /** @class */ (function () {
    function FriendService(http) {
        this.http = http;
    }
    /**
     * 通过服务端请求获得任务列表
     * @param fileId
     */
    FriendService.prototype.getFriendList = function (type) {
        var URL = '/friend/getFriendList';
        return this.http.post(URL, type, { showLoading: false, showError: true });
    };
    FriendService.prototype.getUnFriendList = function (type) {
        var URL = '/friend/getUnFriendList';
        return this.http.post(URL, type, { showLoading: false, showError: true });
    };
    FriendService.prototype.friendRank = function (type) {
        var URL = '/friend/friendRank';
        return this.http.post(URL, type, { showLoading: false, showError: true });
    };
    FriendService.prototype.removeFriend = function (type) {
        var URL = '/friend/removeFriend';
        return this.http.post(URL, type, { showLoading: false, showError: true });
    };
    ;
    FriendService.prototype.addFriend = function (type) {
        var URL = '/friend/addFriend';
        return this.http.post(URL, type, { showLoading: false, showError: true });
    };
    ;
    FriendService.prototype.getFriendInfo = function (type) {
        var URL = '/friend/getFriendInfo';
        return this.http.post(URL, type, { showLoading: false, showError: true });
    };
    FriendService.prototype.modComments = function (FRIEND_ID, comments) {
        var URL = '/friend/modComments';
        return this.http.post(URL, { friendId: FRIEND_ID, comments: comments }, { showLoading: false, showError: true });
    };
    FriendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], FriendService);
    return FriendService;
}());

//# sourceMappingURL=friend.service.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_task_taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_share_share__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_login_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_components_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_my__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_exchange_exchange__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cache_cache__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_password_password__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_logout_logout__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_update__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, storage, toastCtrl, menuCtrl, util, loginService, comUtil, appUpdate) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.util = util;
        this.loginService = loginService;
        this.comUtil = comUtil;
        this.appUpdate = appUpdate;
        this.isNotFirstEntry().then(function (e) {
            _this.loginService.reLogin().subscribe(function (e) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
            }, function (err) {
                if (err != "AUTO_LOGIN_FAIL") {
                    _this.util.showAlert(err);
                }
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
            });
        }, function (e) {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__["a" /* WelcomePage */];
        });
        this.initializeApp();
        if (this.platform.is("android")) {
            this.pages = [
                { title: '首   页', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
                { title: '个人信息', component: __WEBPACK_IMPORTED_MODULE_13__pages_my_my__["a" /* MyPage */] },
                { title: '充值中心', component: __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__["a" /* ChargePage */] },
                { title: '兑换中心', component: __WEBPACK_IMPORTED_MODULE_15__pages_exchange_exchange__["a" /* ExchangePage */] },
                { title: '我的好友', component: __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__["a" /* FriendPage */] },
                //  {title: '系统消息', component: SystemPage},
                { title: '在线升级', component: __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__["a" /* FriendPage */] },
                { title: '清除缓存', component: __WEBPACK_IMPORTED_MODULE_16__pages_cache_cache__["a" /* CachePage */] },
                { title: '密码修改', component: __WEBPACK_IMPORTED_MODULE_17__pages_password_password__["a" /* PassWordPage */] }
            ];
        }
        else if (this.platform.is("iso")) {
            this.pages = [
                { title: '首   页', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
                { title: '个人信息', component: __WEBPACK_IMPORTED_MODULE_13__pages_my_my__["a" /* MyPage */] },
                { title: '充值中心', component: __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__["a" /* ChargePage */] },
                { title: '兑换中心', component: __WEBPACK_IMPORTED_MODULE_15__pages_exchange_exchange__["a" /* ExchangePage */] },
                { title: '我的好友', component: __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__["a" /* FriendPage */] },
                //  {title: '系统消息', component: SystemPage},
                // {title: '在线升级', component: UpdatePage},
                { title: '清除缓存', component: __WEBPACK_IMPORTED_MODULE_16__pages_cache_cache__["a" /* CachePage */] },
                { title: '密码修改', component: __WEBPACK_IMPORTED_MODULE_17__pages_password_password__["a" /* PassWordPage */] }
            ];
        }
        else {
            this.pages = [
                { title: '首   页', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
                { title: '个人信息', component: __WEBPACK_IMPORTED_MODULE_13__pages_my_my__["a" /* MyPage */] },
                { title: '充值中心', component: __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__["a" /* ChargePage */] },
                { title: '兑换中心', component: __WEBPACK_IMPORTED_MODULE_15__pages_exchange_exchange__["a" /* ExchangePage */] },
                { title: '我的好友', component: __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__["a" /* FriendPage */] },
                //  {title: '系统消息', component: SystemPage},
                //  {title: '在线升级', component: FriendPage},
                { title: '清除缓存', component: __WEBPACK_IMPORTED_MODULE_16__pages_cache_cache__["a" /* CachePage */] },
                { title: '密码修改', component: __WEBPACK_IMPORTED_MODULE_17__pages_password_password__["a" /* PassWordPage */] }
            ];
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.registerBackButtonAction();
            //  this.checkForUpdate();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == "在线升级") {
            this.comUtil.showLoading("正在检查更新");
            this.checkForUpdate();
            this.comUtil.hideLoading();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.toLogoutPage = function () {
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_logout_logout__["a" /* LogoutPage */]);
    };
    MyApp.prototype.toSharePage = function () {
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_share_share__["a" /* SharePage */]);
    };
    MyApp.prototype.exitApp = function () {
        var _this = this;
        if (this.registerBackButton) {
            this.platform.exitApp();
        }
        else {
            this.registerBackButton = true;
            this.toastCtrl.create({
                message: "再按一次退出应用",
                duration: 2000,
                position: "bottom",
                cssClass: "toast-black"
            }).present();
            setTimeout(function () { return _this.registerBackButton = false; }, 2000);
        }
    };
    // 判断当前页面是否首页
    MyApp.prototype.isHomePage = function () {
        return this.app.getActiveNav().getActive().component;
    };
    MyApp.prototype.registerBackButtonAction = function () {
        console.log('监听右键：');
        var that = this;
        this.platform.registerBackButtonAction(function () {
            console.log('监听右键Boolean值：' + that.checkPage);
            if (that.app.getActiveNav().getActive().component === __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]) {
                that.exitApp();
            }
            else if (that.app.getActiveNav().getActive().component === __WEBPACK_IMPORTED_MODULE_0__pages_task_taskList_release_history__["a" /* ReleaseHistoryPage */]) {
                that.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
            }
            else {
                that.app.goBack();
            }
        }, 101);
        // 后面的数字10是必要参数，如果不写默认是0，数字越大优先级越高
    };
    MyApp.prototype.isNotFirstEntry = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isMobile = _this.platform.is("iso") || _this.platform.is("android");
            if (!isMobile) {
                // 浏览器调试默认非首次，不加载启动动画
                console.log("web端浏览");
                resolve(true);
            }
            else {
                _this.storage.get("isFirstEntry").then(function (isFirstEntry) {
                    console.log(isFirstEntry ? "非首次进入APP" : "首次进入APP");
                    isFirstEntry ? resolve(true) : reject(false);
                }).catch(function (err) {
                    console.log('Your SetRadious dont exist: ' + JSON.stringify(err));
                });
            }
        });
    };
    MyApp.prototype.checkForUpdate = function () {
        try {
            var updateUrl = 'https://www.izile.cn/unionapp.xml';
            this.appUpdate.checkAppUpdate(updateUrl)
                .then(function (data) {
                console.log(data);
                console.log(data.version);
                console.log('Update available');
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Nav"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Nav"]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\unionapp\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header no-border>\n\n        <ion-toolbar transparent>\n\n            <ion-title class="title01">会员中心</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="menu0">\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                {{p.title}}\n\n            </button>\n\n        </ion-list>\n\n      <a class="anniu03" (click)="toSharePage()"><img src=\'./assets/imgs/icon07.png\' /></a>\n\n      <a class="anniu04" (click)="toLogoutPage()"><img src=\'./assets/imgs/icon06.png\'/></a>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["MenuController"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__util_components_util__["a" /* ComponentsUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__util_components_util__["a" /* ComponentsUtil */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__providers_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_login_service__["a" /* LoginService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_11__util_components_util__["a" /* ComponentsUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__util_components_util__["a" /* ComponentsUtil */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_update__["a" /* AppUpdate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_update__["a" /* AppUpdate */]) === "function" && _m || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    LoginService.prototype.newSession = function () {
        var URL = '/session/new';
        return this.http.post(URL, null, { showError: false, withSession: "N" });
    };
    LoginService.prototype.autoLogin = function () {
        var _this = this;
        var URL = '/login/autoLogin';
        return this.http.post(URL, null, { showError: false }).map(function (val) {
            _this.userService.loginUesr(val);
        });
    };
    LoginService.prototype.reLogin = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__util_model_common_util__["a" /* CommonUtil */].getStoredItem("sessionId")) {
            return this.autoLogin().catch(function (err) {
                if (err == "NOT_VALID_SESSION") {
                    __WEBPACK_IMPORTED_MODULE_2__util_model_common_util__["a" /* CommonUtil */].removeStoredItem("sessionId");
                    return _this.newSession().map(function (val) {
                        // return Observable.throw("用户未登录");
                        __WEBPACK_IMPORTED_MODULE_2__util_model_common_util__["a" /* CommonUtil */].setStoredItem("sessionId", val);
                        throw ("用户未登录");
                    });
                }
                else {
                    throw (err);
                }
            });
        }
        else {
            return this.newSession().map(function (val) {
                // return Observable.throw("用户未登录");
                __WEBPACK_IMPORTED_MODULE_2__util_model_common_util__["a" /* CommonUtil */].setStoredItem("sessionId", val);
                throw ("用户未登录");
            });
        }
    };
    LoginService.prototype.sendSms = function (loginCode) {
        var URL = '/login/sendSms';
        return this.http.post(URL, loginCode);
    };
    LoginService.prototype.validSms = function (loginCode) {
        var URL = '/login/validSms';
        return this.http.post(URL, loginCode);
    };
    LoginService.prototype.doLogin = function (model) {
        var _this = this;
        var URL = '/login/doLogin';
        return this.http.post(URL, model).map(function (val) {
            _this.userService.loginUesr(val);
        });
    };
    LoginService.prototype.sendRegisterSms = function (loginCode) {
        var URL = '/login/sendRegisterSms';
        return this.http.post(URL, loginCode);
    };
    LoginService.prototype.doRegister = function (model) {
        var URL = '/login/doRegister';
        return this.http.post(URL, model);
    };
    LoginService.prototype.setPwd = function (model) {
        var URL = '/login/setPwd';
        return this.http.post(URL, model);
    };
    LoginService.prototype.reSetPwd = function (model) {
        var URL = '/login/reSetPwd';
        return this.http.post(URL, model);
    };
    LoginService.prototype.changePwd = function (model) {
        var URL = '/login/changePwd';
        return this.http.post(URL, model);
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        var URL = '/login/logout';
        return this.http.post(URL).map(function (val) {
            __WEBPACK_IMPORTED_MODULE_2__util_model_common_util__["a" /* CommonUtil */].removeStoredItem("sessionId");
            throw "success";
        }).catch(function (err) {
            if (err == "success") {
                return _this.newSession().map(function (val) {
                    // return Observable.throw("用户未登录");
                    __WEBPACK_IMPORTED_MODULE_2__util_model_common_util__["a" /* CommonUtil */].setStoredItem("sessionId", val);
                });
            }
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__["a" /* HttpWrapper */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderResponse; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getPayList;
//支付金额
var Pay = /** @class */ (function () {
    function Pay() {
        //是否选中
        this.isChecked = false;
    }
    return Pay;
}());

//订单入参
var OrderDate = /** @class */ (function () {
    function OrderDate() {
    }
    return OrderDate;
}());

var CreateOrderResponse = /** @class */ (function () {
    function CreateOrderResponse() {
    }
    return CreateOrderResponse;
}());

// 获取
function getPayList(moneyList) {
    if (moneyList === void 0) { moneyList = [50, 100, 200, 300, 500, 1000]; }
    var payList = [];
    for (var i = 0; i < moneyList.length; i++) {
        var checked = void 0;
        if (i == 0) {
            checked = true;
        }
        else {
            checked = false;
        }
        payList.push({
            isChecked: checked,
            money: moneyList[i]
        });
    }
    return payList;
}
//# sourceMappingURL=pay.modal.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskAddModel; });
var TaskAddModel = /** @class */ (function () {
    function TaskAddModel() {
    }
    return TaskAddModel;
}());

//# sourceMappingURL=TaskAddModel.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemPage = /** @class */ (function () {
    function SystemPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SystemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-system',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\system\system.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      系统消息\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\system\system.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SystemPage);
    return SystemPage;
}());

//# sourceMappingURL=system.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdatePage = /** @class */ (function () {
    function UpdatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-update',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\update\update.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\update\update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], UpdatePage);
    return UpdatePage;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeOverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChargeOverPage = /** @class */ (function () {
    function ChargeOverPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChargeOverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chargeover',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\charge\chargeover\chargeover.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>充值中心</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n  \n\n <div class="img01"></div>\n\n <div class="img02"><img src=\'./assets/imgs/img18.png\' /><br/><img src=\'./assets/imgs/img19.png\' /></div>\n\n <div class="font01">充值成功</div>\n\n <div class="font02">请开始您的冒险之旅吧！</div>\n\n<div class="img03"><div class="title01">金币总数：500</div></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\charge\chargeover\chargeover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ChargeOverPage);
    return ChargeOverPage;
}());

//# sourceMappingURL=chargeover.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_friend__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__friend_friend__["a" /* FriendPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Friend" tabIcon="contacts"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyService = /** @class */ (function () {
    function MyService(http) {
        this.http = http;
    }
    //获取当前人的常用地址及联系人
    MyService.prototype.getAddrCont = function () {
        var URL = '/my/getAddrCont';
        return this.http.post(URL, null, { showLoading: false, showError: true });
    };
    /**
     * 通过服务端请求获得当前登陆人信息
     * @param fileId
     */
    MyService.prototype.getMyInfo = function () {
        var URL = '/my/getMyInfo';
        return this.http.post(URL, null, { showLoading: false, showError: true });
    };
    MyService.prototype.getAreaList = function () {
        var URL = '/my/getAreaList';
        return this.http.post(URL, null, { showLoading: false, showError: true });
    };
    /**
     * 修改个人信息
     * @param fileId
     */
    MyService.prototype.updateMyInfo = function (param) {
        var URL = '/my/updateMyInfo';
        return this.http.post(URL, param, { showLoading: false, showError: true });
    };
    ;
    MyService.prototype.updateTaskInfo = function (param) {
        var URL = '/my/updateTaskInfo';
        return this.http.post(URL, param, { showLoading: false, showError: true });
    };
    ;
    MyService.prototype.uploadFile = function (data) {
        var URL = '/file/upload';
        console.log(data);
        return this.http.post(URL, data, { showLoading: false, showError: true });
    };
    ;
    MyService.prototype.updateMyPic = function (param) {
        var URL = '/my/updateMyPic';
        return this.http.post(URL, { picId: param }, { showLoading: false, showError: true });
    };
    ;
    MyService.prototype.newAddrCont = function (param) {
        var URL = '/my/newAddrCont';
        return this.http.post(URL, param, { showLoading: false, showError: false });
    };
    ;
    MyService.prototype.delAddrCont = function (param) {
        var URL = '/my/delAddrCont';
        return this.http.post(URL, param, { showLoading: false, showError: false });
    };
    ;
    MyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_http_wrapper_util__["a" /* HttpWrapper */]])
    ], MyService);
    return MyService;
}());

//# sourceMappingURL=my.service.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_src_async_src__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__async_src_async_src__["a" /* AsyncSrcDirective */],
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__async_src_async_src__["a" /* AsyncSrcDirective */],
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncSrcDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_home_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {MsdkService} from "msdk-angular";

var AsyncSrcDirective = /** @class */ (function () {
    function AsyncSrcDirective(element, homeService) {
        this.element = element;
        this.homeService = homeService;
        this.originalSrc = element.nativeElement.src;
        console.log(this.originalSrc);
    }
    AsyncSrcDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.asyncSrc && changes.asyncSrc.currentValue) {
            this.homeService.getFileRealPath(this.asyncSrc)
                .subscribe(function (srcUrl) {
                _this.element.nativeElement.src = srcUrl;
            }, function () { });
        }
        else {
            this.element.nativeElement.src = this.originalSrc;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('asyncSrc'),
        __metadata("design:type", String)
    ], AsyncSrcDirective.prototype, "asyncSrc", void 0);
    AsyncSrcDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[asyncSrc]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__providers_home_service__["a" /* HomeService */]])
    ], AsyncSrcDirective);
    return AsyncSrcDirective;
}());

//# sourceMappingURL=async-src.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__release_2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskList_release_history__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReleasePage = /** @class */ (function () {
    function ReleasePage(navCtrl, alertCtrl, taskService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.taskService = taskService;
        this.taskInfo = {};
    }
    ReleasePage.prototype.releaseNext = function (str) {
        if (this.title == "" || this.title == null) {
            this.showAlert('请填写任务标题');
            return;
        }
        this.taskInfo.title = this.title;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__release_2__["a" /* ReleasePage_2 */], { taskInfo: this.taskInfo });
    };
    //显示提示信息
    ReleasePage.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    //跳转到已发布的
    ReleasePage.prototype.toReleaseHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_release_history__["a" /* ReleaseHistoryPage */]);
    };
    ReleasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-release',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\release\release.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="font01">发布任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	<div class="img01">\n\n		<div class="icon01"><img (click)="toReleaseHistory()" src="./assets/imgs/icon08.png" /></div>\n\n		<div class="icon02"><img src="./assets/imgs/icon09.png" /></div>\n\n		<p class="num"><span style="font-size:36px;">1</span>/5</p>\n\n    <ion-item class="item">\n\n               请输入任务标题\n\n    </ion-item>\n\n	</div>\n\n	<div class="img02"><ion-input clearInput type="text" [min]="2" [max]="9" placeholder="此处输入标题"\n\n                                  [(ngModel)]="title" class="lo_ico01"></ion-input></div>\n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="releaseNext(2)" class="anniu_l">下一步</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\release\release.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], ReleasePage);
    return ReleasePage;
}());

//# sourceMappingURL=release.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinishPage = /** @class */ (function () {
    function FinishPage(navCtrl, param, taskService) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.taskService = taskService;
        this.task = param.get("task");
    }
    FinishPage.prototype.getAlreadyFinish = function (classType) {
        this.taskService.getAlreadyFinish(classType).subscribe(function (data) {
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    FinishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finish',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\finish\finish.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n    <button ion-button menuToggle>\n\n      <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n    </button>\n\n\n\n        <ion-title>已完成</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="anniu_zu">\n\n        <span>悬赏</span>\n\n        <span class="cur">挑战</span>\n\n    </div>\n\n    <div class="bg01"><p class="font01"><span class="font02">95</span>%</p><p>成功率</p></div>\n\n    <div class="font03">累计奖金:500</div>\n\n    <div class="bg02">\n\n    	<div class="font04"><img src=\'./assets/imgs/dui.png\' />挑战成功<span class="pp">10</span></div>\n\n    	<div class="font05"><img src=\'./assets/imgs/cuo.png\' />挑战失败<span class="pp">2</span></div>\n\n   \n\n    </div>\n\n <ion-list *ngFor="let item of taskList" >\n\n        <ion-item (click)="showDetail(item.ID,index)">\n\n\n\n            <div style="display: none"></div>\n\n        </ion-item>\n\n  </ion-list> <!-- 悬赏的已完成 -->\n\n\n\n    <!-- 挑战的已完成 -->\n\n  \n\n    <div class="btn">\n\n        <button ion-button item-end (click)="acceptTask(task.ID)" class="anniu_l">继续挑战</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\finish\finish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], FinishPage);
    return FinishPage;
}());

//# sourceMappingURL=finish.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasePage_Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_home_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__release_4__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReleasePage_Address = /** @class */ (function () {
    function ReleasePage_Address(navCtrl, param, taskService, homeService, geolocation, cd, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.taskService = taskService;
        this.homeService = homeService;
        this.geolocation = geolocation;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.taskInfo = {}; //任务
        this.taskInfo = param.get("taskInfo");
    }
    ReleasePage_Address.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.loadScript()
            .subscribe(function () {
            // 定位
            _this.locating();
        });
    };
    // 页面控件初始化完成，加载数据
    ReleasePage_Address.prototype.ionViewWillEnter = function () {
        this.alive = true;
    };
    ReleasePage_Address.prototype.ionViewDidLeave = function () {
        this.alive = false;
    };
    // 页面销毁
    ReleasePage_Address.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ReleasePage_Address.prototype.releaseTask = function () {
        var _this = this;
        this.taskService.releaseTask(this.taskInfo).subscribe(function (data) {
            //发布完成任务自动跳转到历史发布界面
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_release_history__["a" /* ReleaseHistoryPage */]);
        }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
    };
    ReleasePage_Address.prototype.locating = function () {
        console.log('开始定位...');
        // 百度地图API功能
        this.map = new BMap.Map(document.getElementById('bmap'));
        var geolocation = new BMap.Geolocation();
        var that = this;
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == "0") {
                that.province = r.address.province;
                that.city = r.address.city;
                //根据城市获取区县信息
                that.taskService.getArea(that.city).subscribe(function (data) {
                    that.area = data;
                    that.cd.detectChanges();
                }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
            }
            else {
                //alert('failed'+this.getStatus());
            }
        }, { enableHighAccuracy: true });
    };
    //点击缓存区县信息
    ReleasePage_Address.prototype.catchData = function (areaStr) {
        this.selectArea = areaStr;
    };
    ReleasePage_Address.prototype.releaseNext = function () {
        if (this.selectArea == "" || this.selectArea == null) {
            this.showAlert('请选择区县');
            return;
        }
        var areaData = ""; //拼装地址
        areaData = this.province + this.city + this.selectArea;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__release_4__["a" /* ReleasePage_4 */], { areaData: areaData, taskInfo: this.taskInfo });
    };
    //显示提示信息
    ReleasePage_Address.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    ReleasePage_Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-release_add',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\release\release_address.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="font01">发布任务 4/5</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <ion-item>\n\n        <span class="font02">当前定位</span>\n\n    </ion-item>\n\n    <ion-item class="city">\n\n        <span>{{city}}</span>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="font02">选择区县</span>\n\n    </ion-item>\n\n\n\n    <ion-item class="city" >\n\n        <ion-list *ngFor="let item of area" >\n\n                <span (click)="catchData(item.AREA_NAME)">\n\n                    {{item.AREA_NAME}}\n\n                </span>\n\n        </ion-list>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <span class="font02">接受范围</span>\n\n        <span style="padding:5px;"><div class="prog"><span></span></div></span>\n\n    </ion-item>\n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="releaseNext(4)" class="anniu_l">下一步</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\release\release_address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], ReleasePage_Address);
    return ReleasePage_Address;
}());

//# sourceMappingURL=release_address.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, navParams, actionSheetCtrl, alertCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.avatar = "";
    }
    CameraPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: '拍照',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                // {
                //     text: '从相册选择',
                //     role: 'chooseFromAlbum',
                //     handler: () => {
                //         this.chooseFromAlbum();
                //     }
                // },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    CameraPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
        };
        this.camera.getPicture(options).then(function (image) {
            console.log('Image URI: ' + image);
            _this.avatar = image.slice(7);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    CameraPage.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 200,
            height: 200
        };
        this.imagePicker.getPictures(options).then(function (images) {
            if (images.length > 1) {
                _this.presentAlert();
            }
            else if (images.length === 1) {
                console.log('Image URI: ' + images[0]);
                _this.avatar = images[0].slice(7);
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    CameraPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-camera',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\camera\camera.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>编辑</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button>保存</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="header-image" tappable [ngStyle]="{\'background-image\': \'url(\'+avatar+\')\'}" (click)="presentActionSheet()">\n\n\n\n        点击添加照片\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\camera\camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskList_taskList__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QueryPage = /** @class */ (function () {
    function QueryPage(navCtrl, taskService) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
    }
    //查询可接任务，状态 【STATE = '01'】
    QueryPage.prototype.getTaskList = function (type) {
        var _this = this;
        if (type == "01") {
            var param = {};
            param.type = type; //查询任务的类型
            param.state = '01'; //查询可接任务，状态 【STATE = '01'】
            this.taskService.getTaskList(param).subscribe(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_taskList__["a" /* TaskListPage */], { taskArr: data });
            }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        if (type == '02') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_taskList__["a" /* TaskListPage */]);
        }
        if (type == '03') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_taskList__["a" /* TaskListPage */]);
        }
    };
    QueryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-query',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\query\query.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>悬赏任务查询</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="img_l"><img src=\'./assets/imgs/img14.png\' /><ion-input clearInput type="number" [min]="11" [max]="18" placeholder="全国科技人才活动日"\n\n                                                                              [(ngModel)]="userName" class="lo_ico01"></ion-input></div>\n\n    <div class="font01">最近搜索</div>\n\n    <div class="font03">搜索内容</div>\n\n    <div class="font03">搜索内容</div>\n\n    <div class="font03">搜索内容</div>\n\n    <div class="font03">搜索内容</div>\n\n    <div class="font03">搜索内容</div>\n\n    <div class="font03">搜索内容</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\query\query.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], QueryPage);
    return QueryPage;
}());

//# sourceMappingURL=query.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskList_taskList__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgainPage = /** @class */ (function () {
    function AgainPage(navCtrl, taskService) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
    }
    //查询可接任务，状态 【STATE = '01'】
    AgainPage.prototype.getTaskList = function (type) {
        var _this = this;
        if (type == "01") {
            var param = {};
            param.type = type; //查询任务的类型
            param.state = '01'; //查询可接任务，状态 【STATE = '01'】
            this.taskService.getTaskList(param).subscribe(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_taskList__["a" /* TaskListPage */], { taskArr: data });
            }, __WEBPACK_IMPORTED_MODULE_3__util_model_common_util__["a" /* CommonUtil */].emptyCallback);
        }
        if (type == '02') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_taskList__["a" /* TaskListPage */]);
        }
        if (type == '03') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskList_taskList__["a" /* TaskListPage */]);
        }
    };
    AgainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-again',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\again_release\again.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <span><img src=\'./assets/imgs/icon04.png\' /></span>\n\n        </button>\n\n        <ion-title>任务确认</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n    <div class="anniu_zu">\n\n        <span>任务标题</span>\n\n        <span>任务明细</span>\n\n    </div>\n\n\n\n    <ion-item>\n\n        <button clear="true" ion-button item-end (click)="toReleaseTask()" class="red_b">再次发布</button>\n\n\n\n        <button clear="true" ion-button item-end (click)="toReleaseTask()" class="red_b">删除任务</button>\n\n\n\n    </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\again_release\again.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_service__["a" /* TaskService */]])
    ], AgainPage);
    return AgainPage;
}());

//# sourceMappingURL=again.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasePage_2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__release_3__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__taskList_release_history__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__release_3_daily__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReleasePage_2 = /** @class */ (function () {
    function ReleasePage_2(navCtrl, param, alertCtrl) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.alertCtrl = alertCtrl;
        this.type_2_code = ""; //下级类型
        this.type_2 = "";
        this.taskInfo = {}; //任务
        this.taskInfo = param.get("taskInfo");
        //初始化
        this.type = "跑腿";
        this.typeCode = "01"; //类型的编码
        this.type_2 = "帮我送";
        this.type_2_code = "11";
    }
    ReleasePage_2.prototype.releaseNext = function (str) {
        //this.taskInfo = {};
        if (this.type == "" || this.type == null) {
            this.showAlert('请填写任务类型');
            return;
        }
        this.taskInfo.type = this.type;
        this.taskInfo.typeCode = this.typeCode;
        this.taskInfo.type_2_code = this.type_2_code;
        if (this.typeCode == '01') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__release_3__["a" /* ReleasePage_3 */], { taskInfo: this.taskInfo });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__release_3_daily__["a" /* Release3DailyPage */], { taskInfo: this.taskInfo });
        }
    };
    //设置类型
    ReleasePage_2.prototype.setType = function (str, code, e) {
        this.cleanStyle("1"); //先清理所有样式
        if (e.target.classList.length > 0) {
            e.target.classList.remove("cur");
        }
        else {
            e.target.classList.add("cur");
            //根据点击设置显示的下级类型
            document.getElementById(code + "_type").style.display = "block";
            //设置默认选中第一个
            var idStr = e.target.id.substr(1, 1);
            document.getElementById(idStr + "1").classList.add("cur");
            this.type_2_code = idStr + "1";
        }
        this.type = str;
        this.typeCode = code; //类型的编码
    };
    //设置二级类型
    ReleasePage_2.prototype.setType_2 = function (str, code, e) {
        this.cleanStyle(""); //先清理所有样式
        if (e.target.classList.length > 0) {
            e.target.classList.remove("cur");
        }
        else {
            e.target.classList.add("cur");
        }
        this.type_2 = str;
        this.type_2_code = code; //二类型的编码
    };
    //显示提示信息
    ReleasePage_2.prototype.showAlert = function (str) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: str
        });
        alert.present();
    };
    //清理样式
    ReleasePage_2.prototype.cleanStyle = function (flag) {
        if (flag == "1") {
            // 清理所有样式
            document.getElementById("01").classList.remove("cur");
            document.getElementById("02").classList.remove("cur");
            document.getElementById("03").classList.remove("cur");
            //全部设置不可见
            document.getElementById("01_type").style.display = "none";
            document.getElementById("02_type").style.display = "none";
            document.getElementById("03_type").style.display = "none";
        }
        document.getElementById("11").classList.remove("cur");
        document.getElementById("12").classList.remove("cur");
        //document.getElementById("13").classList.remove("cur");
        document.getElementById("21").classList.remove("cur");
        document.getElementById("22").classList.remove("cur");
        document.getElementById("23").classList.remove("cur");
        document.getElementById("24").classList.remove("cur");
        document.getElementById("25").classList.remove("cur");
        document.getElementById("31").classList.remove("cur");
        document.getElementById("32").classList.remove("cur");
        document.getElementById("33").classList.remove("cur");
        document.getElementById("34").classList.remove("cur");
    };
    //跳转到已发布的
    ReleasePage_2.prototype.toReleaseHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__taskList_release_history__["a" /* ReleaseHistoryPage */]);
    };
    ReleasePage_2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-release2',template:/*ion-inline-start:"C:\ionic\unionapp\src\pages\task\release\release_2.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <!-- 侧边栏入口 -->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="font01">发布任务</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background:url(\'./assets/imgs/bgimg.jpg\'); background-size:100% 100%;">\n\n	<div class="img01">\n\n		<div class="icon01"><img (click)="toReleaseHistory()" src="./assets/imgs/icon08.png" /></div>\n\n		<div class="icon02"><img src="./assets/imgs/icon09.png" /></div>\n\n		<p class="num"><span style="font-size:36px;">1</span>/3</p>\n\n    <ion-item class="item tit">\n\n               请选择任务类型\n\n    </ion-item>\n\n	</div>\n\n    <div class="out_tit2">\n\n    <ion-item class="title01">\n\n        <span id="01" (click)="setType(\'跑腿\',\'01\',$event)" class="cur">跑腿</span>\n\n        <span id="02" (click)="setType(\'日常\',\'02\',$event)" >日常</span>\n\n        <span id="03" (click)="setType(\'问答\',\'03\',$event)">问答</span>\n\n    </ion-item>\n\n    <ion-item id="01_type" class="title02">\n\n        <span id="11" (click)="setType_2(\'镖局\',\'11\',$event)" class="cur">镖局</span>\n\n        <span id="12" (click)="setType_2(\'代购\',\'12\',$event)">代购</span>\n\n\n\n    </ion-item>\n\n    <ion-item id="02_type" class="title02" style="display: none">\n\n        <span id="21" (click)="setType_2(\'一起玩\',\'21\',$event)" class="cur">一起玩</span>\n\n        <span id="22" (click)="setType_2(\'一起吃\',\'22\',$event)">一起吃</span><br />\n\n        <span id="23" (click)="setType_2(\'一起旅游\',\'23\',$event)">一起旅游</span>\n\n        <span id="24" (click)="setType_2(\'江湖救急\',\'24\',$event)">江湖救急</span>\n\n        <span id="25" (click)="setType_2(\'其它\',\'25\',$event)">其它</span>\n\n    </ion-item>\n\n    <ion-item id="03_type" class="title02" style="display: none">\n\n        <span id="31" (click)="setType_2(\'生活常识\',\'31\',$event)" class="cur">生活常识</span>\n\n        <span id="32" (click)="setType_2(\'医学\',\'32\',$event)">医学</span><br />\n\n        <span id="33" (click)="setType_2(\'科学\',\'33\',$event)">科学</span>\n\n        <span id="34" (click)="setType_2(\'汽车\',\'34\',$event)">汽车</span>\n\n    </ion-item>\n\n    </div>\n\n    <div *ngIf="type_2_code==\'24\'&&typeCode==\'02\'" style="text-align: center;color: #169dbd"> 此任务为伪5星任务出现在5星任务列表中，内容不限，报酬将高于10000金币</div>\n\n    <div class="btn">\n\n        <button ion-button type="submit" (click)="releaseNext(2)" class="anniu_l">下一步</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\unionapp\src\pages\task\release\release_2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ReleasePage_2);
    return ReleasePage_2;
}());

//# sourceMappingURL=release_2.js.map

/***/ })

},[462]);
//# sourceMappingURL=main.js.map