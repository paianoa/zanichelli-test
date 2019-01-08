/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 242);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/react/index.js'");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/react-dom/index.js'");

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/react-router/es/index.js'");

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history__);
// history.js


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_history__["createBrowserHistory"])({
    /* pass a configuration object here if needed */
}));

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_styles__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios_index__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AlertDismissable__ = __webpack_require__(643);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// CreateItem.js









var CreateUser = function (_Component) {
    _inherits(CreateUser, _Component);

    function CreateUser(props) {
        _classCallCheck(this, CreateUser);

        var _this = _possibleConstructorReturn(this, (CreateUser.__proto__ || Object.getPrototypeOf(CreateUser)).call(this, props));

        _this.state = { name: '', email: '', password: '', err: false, err_message: "" };

        _this.handleChange = _this.handleChange.bind(_this);

        _this.handleSubmit = _this.handleSubmit.bind(_this);

        _this.onCancelError = _this.onCancelError.bind(_this);
        return _this;
    }

    _createClass(CreateUser, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.editMode === true) {
                __WEBPACK_IMPORTED_MODULE_5_axios_index__["default"].get('/users/' + this.props.id).then(function (response) {
                    _this2.setState({
                        name: response.data.data.name,
                        email: response.data.data.email,
                        password: response.data.data.password
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var newstate = {};
            newstate[e.target.name] = e.target.value;
            this.setState(newstate);

            //ES6: this.setState([e.target.id] = e.target.value);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log(this.state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            var users = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };

            var uri = '/users';
            if (this.props.editMode === true) {
                uri += '/' + this.props.id;
                __WEBPACK_IMPORTED_MODULE_5_axios_index__["default"].patch(uri, users).then(function (response) {
                    if ('callback' in _this3.props) _this3.props.callback();
                }).catch(function (error) {
                    _this3.setState({ err: true, err_message: error.message });
                });
            } else {

                console.log('post ' + users);
                __WEBPACK_IMPORTED_MODULE_5_axios_index__["default"].post(uri, users).then(function (response) {
                    if ('callback' in _this3.props) _this3.props.callback();
                }).catch(function (error) {

                    _this3.setState({ err: true, err_message: error.message });
                });;
            }
        }
    }, {
        key: 'onCancelError',
        value: function onCancelError() {
            this.setState({ err: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                email = _state.email,
                name = _state.name,
                password = _state.password;


            var style = { fontSize: 18 };

            return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                null,
                this.state.err == true ? __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_6__AlertDismissable__["a" /* default */], { bsStyle: 'danger', message: this.state.err_message, parentOnDismiss: this.onCancelError }) : "",
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator__["ValidatorForm"],
                    {
                        ref: 'form',
                        onSubmit: this.handleSubmit,
                        onError: function onError(errors) {
                            return console.log(errors);
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'row' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'col-md-6' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'form-group' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator__["TextValidator"], {
                                    label: 'Name',
                                    InputProps: { style: style },
                                    InputLabelProps: { style: style },
                                    FormHelperTextProps: { style: style },
                                    onChange: this.handleChange,
                                    name: 'name',
                                    value: name,
                                    validators: ['required'],
                                    errorMessages: ['this field is required']
                                })
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'row' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'col-md-6' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'form-group' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator__["TextValidator"], {
                                    InputProps: { style: style },
                                    InputLabelProps: { style: style },
                                    FormHelperTextProps: { style: style },
                                    label: 'Email',
                                    onChange: this.handleChange,
                                    name: 'email',
                                    value: email,
                                    validators: ['required', 'isEmail'],
                                    errorMessages: ['this field is required', 'email is not valid']
                                })
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'row' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'col-md-6' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'form-group' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4_react_material_ui_form_validator__["TextValidator"], {
                                    InputProps: { style: style },
                                    InputLabelProps: { style: style },
                                    FormHelperTextProps: { style: style },
                                    label: 'Password',
                                    onChange: this.handleChange,
                                    name: 'password',
                                    value: password,
                                    validators: ['required'],
                                    errorMessages: ['this field is required']
                                })
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('hr', null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'row' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'col-md-6' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__["default"],
                                { className: 'btn btn-primary', style: { fontSize: 20 }, type: 'submit' },
                                'Submit'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CreateUser;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CreateUser);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/react-bootstrap/es/index.js'");

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(243);
module.exports = __webpack_require__(632);


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CreateUser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DisplayUser__ = __webpack_require__(471);
// app.js

__webpack_require__(244);








Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router__["Router"],
    { history: __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'container' },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'nav',
            { className: 'navbar navbar-default' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'navbar-header' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'a',
                        { className: 'navbar-brand', href: '#' },
                        'Zanichelli'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'ul',
                    { className: 'nav navbar-nav' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'li',
                        { className: 'active' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'a',
                            { href: '#' },
                            'Home'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'a',
                            { href: '#' },
                            'Page 1'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'a',
                            { href: '#' },
                            'Page 2'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'a',
                            { href: '#' },
                            'Page 3'
                        )
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_router__["Switch"],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Route"], { path: '/', exact: true, component: __WEBPACK_IMPORTED_MODULE_5__components_DisplayUser__["a" /* default */] })
            )
        )
    )
), document.getElementById('main'));

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(245);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(247);

  __webpack_require__(248);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(92);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/lodash/lodash.js'");

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'");

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/@material-ui/styles/index.es.js'");

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/@material-ui/core/Button/index.js'");

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/react-material-ui-form-validator/lib/index.js'");

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TableRow__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CreateUser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AlertDismissable__ = __webpack_require__(643);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// DisplayItem.js








var DisplayUser = function (_Component) {
    _inherits(DisplayUser, _Component);

    function DisplayUser(props) {
        _classCallCheck(this, DisplayUser);

        var _this = _possibleConstructorReturn(this, (DisplayUser.__proto__ || Object.getPrototypeOf(DisplayUser)).call(this, props));

        _this.onDelete = _this.onDelete.bind(_this);
        _this.onEdit = _this.onEdit.bind(_this);
        _this.state = { users: '', show: false, err: false, err_message: "", editMode: false, id: -1 };

        _this.handleShow = _this.handleShow.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.renderError = _this.renderError.bind(_this);
        _this.cancelError = _this.cancelError.bind(_this);

        return _this;
    }

    _createClass(DisplayUser, [{
        key: 'handleClose',
        value: function handleClose() {
            this.setState({ show: false });
            // Force a render with a simulated state change
            console.log('reredenring');
            this.componentDidMount();
        }
    }, {
        key: 'handleShow',
        value: function handleShow() {
            var editMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

            this.setState({ show: true, editMode: editMode, id: id });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('./users').then(function (response) {
                _this2.setState({ users: response.data.data });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'tabRow',
        value: function tabRow() {

            if (this.state.users instanceof Array) {

                return this.state.users.map(function (object, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__TableRow__["a" /* default */], { obj: object, key: i, editCb: this.onEdit, onDelete: this.onDelete });
                }, this);
            }
        }
    }, {
        key: 'onDelete',
        value: function onDelete(data, err, err_message) {

            if (err == false) {
                this.setState(function (prevState) {
                    return {
                        err: false,
                        users: prevState.users.filter(function (item) {
                            return item.id != data;
                        })
                    };
                });
            } else {
                this.setState({ err: true, err_message: err_message });
            }
        }
    }, {
        key: 'onEdit',
        value: function onEdit(id) {

            this.handleShow(true, id);
        }
    }, {
        key: 'cancelError',
        value: function cancelError() {
            this.setState({ err: false });
        }
    }, {
        key: 'renderError',
        value: function renderError() {

            if (this.state.err == true) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__AlertDismissable__["a" /* default */], { bsStyle: 'danger', message: this.state.err_message, parentOnDismiss: this.cancelError });
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', null);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'h1',
                    null,
                    'Users'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'col-md-10' }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'col-md-2' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"],
                            { bsStyle: 'primary', bsSize: 'large', onClick: this.handleShow },
                            'Create User'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('br', null),
                this.renderError(),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'table',
                    { className: 'table table-hover' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'thead',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'tr',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'td',
                                null,
                                'ID'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'td',
                                null,
                                'Name'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'td',
                                null,
                                'Email'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'td',
                                null,
                                'Password'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('td', null)
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'tbody',
                        null,
                        this.tabRow()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"],
                    { show: this.state.show, onHide: this.handleClose },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Header,
                        { closeButton: true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Title,
                            null,
                            ' ',
                            this.state.editMode == true ? "Edit" : "Create",
                            ' User '
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Body,
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__CreateUser__["a" /* default */], { editMode: this.state.editMode, id: this.state.id, callback: this.handleClose })
                    )
                )
            );
        }
    }]);

    return DisplayUser;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DisplayUser);

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TableRow.js




var TableRow = function (_Component) {
    _inherits(TableRow, _Component);

    function TableRow(props) {
        _classCallCheck(this, TableRow);

        var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }

    _createClass(TableRow, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            event.preventDefault();
            var uri = 'users/' + this.props.obj.id;
            axios.delete(uri).then(function (response) {
                _this2.props.onDelete(_this2.props.obj.id, false, "");
            }).catch(function (error) {
                _this2.props.onDelete(_this2.props.obj.id, true, error.message ? error.message : "");
                console.log("errr " + error);
            });
        }
    }, {
        key: 'handleEdit',
        value: function handleEdit() {
            this.props.editCb(this.props.obj.id);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'tr',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'td',
                    null,
                    this.props.obj.id
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'td',
                    null,
                    this.props.obj.name
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'td',
                    null,
                    this.props.obj.email
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'td',
                    null,
                    this.props.obj.password
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'td',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
                        { onClick: this.handleEdit, className: 'btn btn-primary' },
                        'Edit'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'td',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', { type: 'submit', value: 'Delete', className: 'btn btn-danger' })
                    )
                )
            );
        }
    }]);

    return TableRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TableRow);

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import \"~bootstrap-sass/assets/stylesheets/bootstrap\";\n^\n      File to import not found or unreadable: /home/andrea/PhpstormProjects/zanichelli/node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss.\n      in /home/andrea/PhpstormProjects/zanichelli/resources/assets/sass/app.scss (line 9, column 1)\n    at runLoaders (/home/andrea/PhpstormProjects/zanichelli/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/andrea/PhpstormProjects/zanichelli/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/andrea/PhpstormProjects/zanichelli/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/home/andrea/PhpstormProjects/zanichelli/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/home/andrea/PhpstormProjects/zanichelli/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/home/andrea/PhpstormProjects/zanichelli/node_modules/neo-async/async.js:8077:18)\n    at options.error (/home/andrea/PhpstormProjects/zanichelli/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AlertDismissable = function (_React$Component) {
    _inherits(AlertDismissable, _React$Component);

    function AlertDismissable(props, context) {
        _classCallCheck(this, AlertDismissable);

        var _this = _possibleConstructorReturn(this, (AlertDismissable.__proto__ || Object.getPrototypeOf(AlertDismissable)).call(this, props, context));

        _this.handleDismiss = _this.handleDismiss.bind(_this);
        _this.handleShow = _this.handleShow.bind(_this);

        _this.state = {
            show: true
        };
        return _this;
    }

    _createClass(AlertDismissable, [{
        key: 'handleDismiss',
        value: function handleDismiss() {
            this.setState({ show: false });
            this.props.parentOnDismiss();
        }
    }, {
        key: 'handleShow',
        value: function handleShow() {
            this.setState({ show: true });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.show) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Alert"],
                    { bsStyle: 'danger', onDismiss: this.handleDismiss },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'strong',
                        null,
                        'Error: '
                    ),
                    ' ',
                    this.props.message
                );
            }
            return null;
        }
    }]);

    return AlertDismissable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

/* harmony default export */ __webpack_exports__["a"] = (AlertDismissable);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/history/es/index.js'");

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/andrea/PhpstormProjects/zanichelli/node_modules/axios/index.js'");

/***/ })

/******/ });