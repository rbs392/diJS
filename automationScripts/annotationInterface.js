/*
	fileName	: AnnotationInterface.js
	purpose		: Creates an interface for defining annotations

	@params
		String format			--> specifies the format text
		Array modules			--> specifies the modules array
		String funcParams		--> specifies the function parameters text
		String set				--> specifies the name text
*/


var Annotation = function (format,modules,funcParams,name){
	this.format	= format || '';
	this.modules = modules || [];
	this.funcParams = funcParams || '';
	this.name = name || '';
	console.log(this.format+this.modules+this.funcParams+this.name);
	return {
		'setFormat' : this.setFormat,
		'setModules': this.setModules,
		'setFuncParams' : this.setFuncParams,
		'setName' : this.setName,
		'getFormat' : this.getFormat,
		'getModules': this.getModules,
		'getFuncParams' : this.getFuncParams,
		'getName' : this.getName,
		'convert' : this.convert
	};
};

Annotation.prototype.setFormat = function (format){
	if(format && typeof format === 'string'){
		this.format = format;
	}
};
Annotation.prototype.setModules = function (modules){
	if(modules && typeof modules === 'string'){
		this.modules = modules;
	}
};
Annotation.prototype.setFuncParams = function (funcParams){
	if(funcParams && typeof funcParams === 'string'){
		this.funcParams = funcParams;
	}
};
Annotation.prototype.setName = function (name){
	if(name && typeof name === 'string'){
		this.name = name;
	}
};
Annotation.prototype.getFormat = function (){
	return this.format;
};
Annotation.prototype.getModules = function (){
	return this.modules;
};
Annotation.prototype.getFuncParams = function (){
	return this.funcParams;
};
Annotation.prototype.getName = function (){
	return this.name;
};
Annotation.prototype.convert = function (){
	return this.name;
};