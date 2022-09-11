export const validate = (value, regex) => {
  const reg = new RegExp(regex);
  return reg.test(value)
}

export const isEmail = email => {
  const emailReg = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  return emailReg.test(email);
};

export const isEmpty = str => {
  const isEmptyReg = new RegExp(/^\s*\S+.*/);
  return !isEmptyReg.test(str);
};

export const isMobileNumber = mobile => {
  const mobileReg = new RegExp(/^([0|+[9,1]{1,2})?([6-9][0-9]{9})$/);
  return mobileReg.test(mobile);
};

export const isDigit = digit => {
  const digitReg = new RegExp(/^[0-9]+$/);
  return digitReg.test(digit);
};

export const isAlphaChar = alphaChar => {
  const alphaCharReg = new RegExp(/^[a-zA-Z]+$/);
  return alphaCharReg.test(alphaChar);
};

export const isAlphaNumChar = alphaNumChar => {
  const alphaNumCharReg = new RegExp(/^[a-zA-Z0-9]+$/);
  return alphaNumCharReg.test(alphaNumChar);
};

export const isDate = date => {
  const dateReg = new RegExp(/^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/);
  return dateReg.test(date);
};

export const isPassword = pass => {
  const passwordReg = new RegExp(/^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/);
  return passwordReg.test(pass);
};

export const isUrl = url => {
  const urlReg = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
  return urlReg.test(url);
};

export const isPANNumber = pan => {
  const panReg = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
  return panReg.test(pan);
}

export const isGSTNumber = gst => {
  const gstReg = new RegExp(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/);
  return gstReg.test(gst);
}

export const isVehicleNumber = vehicleNumber => {
  const vehicleNumberReg = new RegExp(/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/);
  return vehicleNumberReg.test(vehicleNumber);
}

export const isMongoObjectId = id => {
  // return id.match(/^[a-f\d]{24}$/i);
  const mongoObjIdReg = new RegExp(/^[a-f\d]{24}$/i);
  return mongoObjIdReg.test(id);
}

export const isEven = number => number % 2 === 0
export const isOdd = number => !isEven(number)

export default {
  validate,
  isUrl,
  isDate,
  isEmail,
  isEmpty,
  isDigit,
  isPassword,
  isAlphaChar,
  isMobileNumber,
  isAlphaNumChar,
  isMongoObjectId,
  isPANNumber,
  isGSTNumber,
  isVehicleNumber,
  isEven,
  isOdd
}
