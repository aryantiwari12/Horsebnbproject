var EmailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var UserNameRegEx = /^[a-zA-Z_]{0,60}$/;
var NumericNumberRegEx = /^[0-9]{0,20}$/;
var NumericResultRegEx = /^(\d{0,2}(\.\d{1,2})?|100(\.00?)?)$/;
var NameRegEx = /^[a-zA-Z \s()-]{0,60}$/;
var NumberRegEx = /^[0]?[789]\d{9}$/;
var IndNumberRegEx = /^((\+91)?|91)?[789][0-9]{9}/;
var FoodLicenseRegEx = /^[0-9]{5,10}$/;
var DrugLicenseRegEx = /^[0-9]{5,10}$/;
var PincodeRegEx = /^\d{6}$/;
var AddressRegEx = /^[a-zA-Z0-9\s,'-]*$/;
var LatLngRegEx = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
var GstRegEx = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
var CountryRegEx = "India";
var UUIDRegEx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/;
var strongPasswordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,16}$/
const email = (email) => {
    return EmailRegEx.test(String(email).toLowerCase());
}
const numberDataTypeValidation = (str) => {
    return typeof (str) === "number";
}
const nameValidation = (str) => {
    return NameRegEx.test(String(str).trim());
}
const UserNameValidation = (str) => {
    return UserNameRegEx.test(String(str).trim());
}
const MobileNumberValidation = (str) => {
    return NumberRegEx.test(str);
}
const NumberValidation = (str) => {
    return NumericNumberRegEx.test(str);
}
const ResultValidation = (str) => {
    return NumericResultRegEx.test(str);
}
const MobileNumberWithInValidation = (str) => {
    return IndNumberRegEx.test(str);
}
const FoodLicenseValidation = (str) => {
    // return FoodLicenseRegEx.test(str);
    return str
}
const DrugLicenseValidation = (str) => {
    // return DrugLicenseRegEx.test(str);
    return str
}
const GstValidation = (str) => {
    return GstRegEx.test(str);
}
const AddressValidation = (str) => {
    // return (String(str).length > 10) ? AddressRegEx.test(str) : false
    return (String(str).trim().length > 10) ? str : false
}
const PincodeValidation = (str) => {
    return PincodeRegEx.test(str);
}
const LatLngValidation = (str) => {
    return LatLngRegEx.test(str);
}
const CountryValidation = (str) => {
    return str === CountryRegEx;
}
const UuidValidation = (str) => {
    return UUIDRegEx.test(str);
}
const StringValidation = (str) => {
    return (typeof (str) === 'undefined') ? false : (String(str).trim().length >= 3) ? nameValidation(str) : false
}
const ObjectValidation = (str) => {
    return (typeof (str) === 'object')
}
const LengthValidation = (str, length) => {
    return (String(str).trim().length > length)
}
const capitalizeFirstLetter = (string) => {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return `_`
    }
}
const strongPassword = (str) => {
    return strongPasswordRegEx.test(str);
}
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
export default {
    email,
    numberDataTypeValidation,
    nameValidation,
    UserNameValidation,
    MobileNumberValidation,
    NumberValidation,
    ResultValidation,
    MobileNumberWithInValidation,
    FoodLicenseValidation,
    DrugLicenseValidation,
    GstValidation,
    AddressValidation,
    PincodeValidation,
    LatLngValidation,
    CountryValidation,
    UuidValidation,
    StringValidation,
    ObjectValidation,
    LengthValidation,
    capitalizeFirstLetter,
    strongPassword,
    numberWithCommas
}