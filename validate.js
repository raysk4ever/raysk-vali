const isEmail = email =>{
	const emailReg = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
	return emailReg.test(email);
};

const isEmpty = str =>{
	if(str == "") return true;
	else return false;
};

const isMobileNumber = mobile =>{
	const mobileReg = new RegExp(/^([0|+[9,1]{1,2})?([6-9][0-9]{9})$/);
	return mobileReg.test(mobile);
};

const isDigit = digit =>{
	const digitReg = new RegExp(/^[0-9]+$/);
	return digitReg.test(digit);
};

const isAlphaChar = alphaChar =>{
	const alphaCharReg = new RegExp(/^[a-zA-Z]+$/);
	return alphaCharReg.test(alphaChar);
};

const isAlphaNumChar = alphaNumChar =>{
	const alphaNumCharReg = new RegExp(/^[a-zA-Z0-9]+$/);
	return alphaNumCharReg.test(alphaNumChar);
};

const isDate = date =>{
	const dateReg = new RegExp(/^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/);
	return dateReg.test(date);
};

const password = pass =>{
	const passwordReg = new RegExp(/^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/);
	return passwordReg.test(pass);
};

const isUrl = url =>{
	const urlReg = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
	return urlReg.test(url);
};

const isPANNumber = pan =>{
	const panReg = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
	return panReg.test(pan);	
}


module.exports = {
	isUrl,
	isDate,
	isEmail,
	isEmpty,
	isDigit,
	password,
	isAlphaChar,
	isMobileNumber,
	isAlphaNumChar
}