'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
var snackbar_1 = require('material-ui/lib/snackbar');
var classNames = require('classnames');
var defaultAlert = {
    open: false,
    message: '',
};
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.render = function () {
        var _a = this.props, alert = _a.alert, toggleAlert = _a.toggleAlert;
        var action = alert.action, open = alert.open, message = alert.message, duration = alert.duration;
        return (React.createElement(snackbar_1.default, {className: classNames('cr-alert', action), open: open || false, message: message || '', action: action, autoHideDuration: duration || 1500, onActionTouchTap: toggleAlert, onRequestClose: toggleAlert}));
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                toggleAlert: function () {
                    dispatch(Action.toggleAlert());
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;