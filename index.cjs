"use strict";

module.exports = function (callback, thisArg) {
	this.forEach(callback, thisArg)
	return this
}
