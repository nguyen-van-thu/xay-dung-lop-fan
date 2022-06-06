"use strict";
exports.__esModule = true;
exports.URM = void 0;
var SPEED;
(function (SPEED) {
    SPEED[SPEED["SLOW"] = 1] = "SLOW";
    SPEED[SPEED["MEDIUM"] = 2] = "MEDIUM";
    SPEED[SPEED["FAST"] = 3] = "FAST";
})(SPEED || (SPEED = {}));
var URM = /** @class */ (function () {
    function URM(speed, on, radius, color) {
        this._speed = SPEED.SLOW;
        this._radius = 5;
        this._color = "blue";
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(URM.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URM.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URM.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URM.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    URM.prototype.toString = function () {
        if (this._on == true) {
            console.log("".concat(this._speed, " va ").concat(this._color, " va ").concat(this._radius));
            console.log("fan is on : ".concat(this._on));
        }
        else {
            console.log("".concat(this._color, " va ").concat(this._radius));
            console.log("fan is off  :");
        }
    };
    return URM;
}());
exports.URM = URM;
var quatbat = new URM(SPEED.FAST, true, 10, "yellow");
var quattat = new URM(SPEED.MEDIUM, false, 5, "blue");
quatbat.toString();
quattat.toString();
