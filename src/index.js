import Moment from 'moment';
export function isDate (value,fromformat='YYYYMMDDHHmmss') {
    return Moment(value, fromformat,true).isValid();
}
export function toDate (value,toformat='DD MMMM YYYY hh:mm a',fromformat='YYYYMMDDHHmmss') {
    return isDate(value,fromformat)===true?Moment(value,fromformat).format(toformat):null;
}

export function isValidDate (value,fromformat='yyyyMMddhhmmss') {
    return isValid(new Date(value),fromformat);
}