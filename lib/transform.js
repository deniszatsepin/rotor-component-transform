var Component = require('rotor-component');
var glMatrix = require('gl-matrix');
var vec3 = glMatrix.vec3;
var quat = glMatrix.quat;
var mat4 = glMatrix.mat4;

var Transform = function() {
	Component.call(this);
	this.componentType = 'Transform';
	this.position = vec3.create();
	this.rotation = vec3.create();
	this.scale = vec3.fromValues(1.0, 1.0, 1.0);
	this.quaternion = quat.create();
	this.visible = true;
	this.worldMatrix = mat4.create();
	this.modelMatrix = mat4.create();

	this.__super = Transform.prototype;
};

Transform.prototype = Object.create(Component.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Transform,
    writable: true
  }
});
var proto = Transform.prototype;

proto.translateX = function() {

};

proto.realize = function() {
	if (!this._realized) {
		this._entity._scene.transform = this;
	}
	this.__super.realize.call(this);
};

proto.isRealized = function() {
	return this._realized;
};

proto.update = function() {
	if (!this.isRealized()) return;

	this.__super.update();
};

module.exports = Transform;