var Component = requre('rotor-component');
var glMatrix = requre('gl-matrix');
var vec3 = glMatrix.vec3;
var quat = glMatrix.quat;
var mat4 = glMatrix.mat4;

var Transform = function() {
	Component.call(this);
	this.position = vec3.create();
	this.rotation = vec3.create();
	this.scale = 1.0;
	this.quaternion = quat.create();
	this.visible = true;
	this._worldMatrix = mat4.create();
	this._modelMatrix = mat4.create();
};

Transform.prototype = Object.create(Component.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Transform,
    writable: true
  },
  __super: {
    value: Transform.prototype
  }
});
var proto = Transform.prototype;

proto.translateX = function() {

};

proto.realize = function() {
	if (!this._realized) {
		this._realized = true;
	}
};

proto.isRealized = function() {
	return this._realized;
};

proto.update = function() {
	this.__super.update();
};

module.exports = Transform;