class User {

	constructor(name, birth, password){
		this._name = name
		this._birth = birth
		this._password = password
	}
	
}

set name(name){
	this._name = name
}

get name(){
	return this._name
}

set birth(birth){
	this._birth = birth
}

get birth(){
	return this._birth
}

set password(password){
	this._password = password
}

get password(){
	return this._password
}