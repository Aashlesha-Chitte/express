"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aoaToXlsx = exports.cancelKafkaEvent = exports.produceKafkaEvent = exports.getMarketBrandName = exports.isPositiveInteger = exports.getMarketCodeFromH1 = exports.getMarketDetails = exports.getMarketNameFromClientHierarchy = exports.getUIdFromH1 = exports.getH1 = exports.getUserCrudH1H2ForEither = exports.getUserActivationCrudH1H2 = exports.getUserCrudH1H2 = exports.getUserH1H2 = exports.dataParser = exports.getEnumKeyOrValue = exports.lean = exports.leanObject = exports.schemaTranform = exports.validationCheckForSpecialChar = exports.scriptValidator = exports.validationCheckForBulkUpdate = exports.validationCheckForBulkInsert = exports.typeAndFormatValidator = exports.nonInsertAbleField = exports.nonUpdateAbleField = exports.getExtraValuesInArr = exports.checkForExtraValuesInArr = exports.fieldCompareFunc = exports.countValuesExistInArray = exports.checkIfExist = exports.enumFieldValidator = exports.fieldValidator = exports.validateField = exports.isNumber = exports.validateArraySize = exports.isArray = exports.isBoolean = exports.isString = exports.isObject = exports.nullOrUndefinedCheck = exports.idValidator = exports.isValidEmail = exports.isValidCountryName = exports.isValidObjectId = exports.compareDateFields = exports.isValidArrayOfIds = exports.maxCheck = exports.minCheck = exports.generateObjectId = void 0;
exports.getIdObject = exports.getUnrollIds = exports.groupBy = exports.getHashValue = exports.transformCCSContentToAUE = exports.wrapContentWithContainer = exports.getUniqueId = exports.isJSONString = exports.formateAdditionalInfo = exports.getUserH1ForADMD = exports.parsedCorsOrigin = exports.isAdAccountIdExist = exports.sequenceNumber = exports.baseAggregation = exports.reverseParseSnapShotConstantData = exports.parseSnapShotConstantData = exports.bufferToJson = void 0;
const config_1 = __importDefault(require("config"));
const constants_1 = require("libs/constants");
const errorMessages_1 = __importDefault(require("libs/errors/errorMessages"));
const moment = __importStar(require("moment-timezone"));
const mongoose = __importStar(require("mongoose"));
const sjcl = __importStar(require("sjcl"));
const xlsx = __importStar(require("xlsx"));
const KafkaProducerService_1 = require("../services/kafka/KafkaProducerService");
const generateObjectId = () => String(new mongoose.Types.ObjectId());
exports.generateObjectId = generateObjectId;
const minCheck = (value, minValue, fieldName) => {
    if (value >= minValue) {
        return true;
    }
    throw new Error(`${fieldName} ${errorMessages_1.default.minValue} ${minValue}`);
};
exports.minCheck = minCheck;
const maxCheck = (value, maxValue, fieldName) => {
    if (value <= maxValue) {
        return true;
    }
    throw new Error(`${fieldName} ${errorMessages_1.default.maxValue} ${maxValue}`);
};
exports.maxCheck = maxCheck;
const isValidArrayOfIds = (fieldName, value) => {
    if (!Array.isArray(value)) {
        throw new Error(`${fieldName} ${errorMessages_1.default.array}`);
    }
    if (value.length) {
        value.forEach((id, index) => {
            if (!(0, exports.isValidObjectId)(id)) {
                throw new Error(`${errorMessages_1.default.idFormatInArray}:${index}`);
            }
        });
    }
    return true;
};
exports.isValidArrayOfIds = isValidArrayOfIds;
/*
Note:Need to be used later

export const compareFields = (
  lesserValue: number,
  greaterValue: number,
  lsrFieldName: string,
  gtrFieldName: string) => {
  if (greaterValue >= lesserValue) {
    return true;
  }
  throw new Error(`${lsrFieldName} ${errorMessages.maxValue} ${gtrFieldName}`);
};
*/
const compareDateFields = (lesserValue, greaterValue, lsrFieldName, gtrFieldName) => {
    if (new Date(lesserValue) > new Date(greaterValue)) {
        throw new Error(`${lsrFieldName} ${errorMessages_1.default.maxValue} ${gtrFieldName}`);
    }
    return true;
};
exports.compareDateFields = compareDateFields;
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
exports.isValidObjectId = isValidObjectId;
const isValidCountryName = (country) => {
    try {
        if (country !== '' || country !== undefined) {
            return true;
        }
    }
    catch (error) {
        throw Error(error);
    }
};
exports.isValidCountryName = isValidCountryName;
const isValidEmail = (email) => {
    try {
        if (email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            return true;
        }
    }
    catch (error) {
        throw Error(error);
    }
};
exports.isValidEmail = isValidEmail;
const idValidator = (id, reqType, fieldName, mandatory, body = {}, index = 0) => {
    if (!id || id === '') {
        if (mandatory) {
            throw new Error(`${fieldName} ${errorMessages_1.default.mandatory}`);
        }
        else {
            throw new Error(`${fieldName} ${errorMessages_1.default.nullOrBlank}`);
        }
    }
    if (!(0, exports.isValidObjectId)(id)) {
        throw new Error(`${errorMessages_1.default.idFormat}`);
    }
    if (reqType === 'update') {
        if (Object.keys(body).length < 1) {
            throw new Error(`${errorMessages_1.default.minOneField}`);
        }
    }
    if (reqType === 'bulkUpdate') {
        if (Object.keys(body).length <= 1) {
            throw new Error(`${errorMessages_1.default.minOneFieldForBulk} ${index}`);
        }
    }
    return true;
};
exports.idValidator = idValidator;
const nullOrUndefinedCheck = (value) => {
    if (value === null || value === undefined) {
        return true;
    }
    return false;
};
exports.nullOrUndefinedCheck = nullOrUndefinedCheck;
const isObject = (item) => item &&
    typeof item === 'object' &&
    item.constructor === Object &&
    Object.keys(item).length > 0;
exports.isObject = isObject;
const isString = (item) => item.length && typeof item === 'string' && (item.trim() !== '');
exports.isString = isString;
const isBoolean = (item) => {
    return item && item === true || item === false;
};
exports.isBoolean = isBoolean;
const isArray = (item, min) => item &&
    typeof item === 'object' &&
    item.constructor === Array &&
    item.length >= min;
exports.isArray = isArray;
const validateArraySize = (item, min, max = 0) => item &&
    typeof item === 'object' &&
    item.constructor === Array &&
    item.length >= min && (max === 0 || item.length <= max);
exports.validateArraySize = validateArraySize;
const isNumber = (item) => (item || item >= 0) && typeof item === 'number';
exports.isNumber = isNumber;
const validateField = ({ fieldValue, fieldType, fieldName, isMandatory, message, min = 1, max = 0, }) => {
    switch (fieldType) {
        case 'number':
            if (isMandatory && ((0, exports.nullOrUndefinedCheck)(fieldValue) || !(0, exports.isNumber)(fieldValue))) {
                throw new Error(`${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
            }
            if (!isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !(0, exports.isNumber)(fieldValue)) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            // should be less than max
            if (isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && (0, exports.isNumber)(fieldValue) && fieldValue < min) {
                throw new Error(`${fieldName} ${errorMessages_1.default.minValue} ${min}`);
            }
            if (isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && (0, exports.isNumber)(fieldValue) && max && fieldValue > max) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.maxValue} ${max}`);
            }
            return true;
        case 'boolean':
            if (isMandatory && ((0, exports.nullOrUndefinedCheck)(fieldValue) || !(0, exports.isBoolean)(fieldValue))) {
                throw new Error(`${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
            }
            if (!isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !(0, exports.isBoolean)(fieldValue)) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            return true;
        case 'string':
            if (isMandatory && ((0, exports.nullOrUndefinedCheck)(fieldValue) || !(0, exports.isString)(fieldValue))) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
            }
            // is optional and have received empty string
            if (!isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !(0, exports.isString)(fieldValue)) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            return true;
        case 'alphaNum':
            if (isMandatory && ((0, exports.nullOrUndefinedCheck)(fieldValue) || !((0, exports.isString)(fieldValue) || (0, exports.isNumber)(fieldValue)))) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.mandatoryWithType} string or number`);
            }
            // is optional and have received empty string
            if (!isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !((0, exports.isString)(fieldValue) || (0, exports.isNumber)(fieldValue))) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.type}  string or number`);
            }
            return true;
        case 'array':
            if (isMandatory && ((0, exports.nullOrUndefinedCheck)(fieldValue) || !(0, exports.isArray)(fieldValue, min))) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
            }
            // is optional and have received empty string
            if (!isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !(0, exports.isArray)(fieldValue, min)) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            // exceeds max limit
            if (isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !(0, exports.validateArraySize)(fieldValue, min, max)) {
                throw new Error(`${fieldName} ${errorMessages_1.default.maxValue} ${max}`);
            }
            return true;
        case 'object':
            if (isMandatory && ((0, exports.nullOrUndefinedCheck)(fieldValue) || !(0, exports.isObject)(fieldValue))) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
            }
            // is optional and have received empty string
            if (!isMandatory && !(0, exports.nullOrUndefinedCheck)(fieldValue) && !(0, exports.isObject)(fieldValue)) {
                throw new Error(message ? message : `${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            return true;
        default: return false;
    }
};
exports.validateField = validateField;
const fieldValidator = (fieldvalue, fieldType, fieldName, isMandatory, reqType, min = 1) => {
    switch (fieldType) {
        case 'number':
        case 'boolean':
            if (typeof fieldvalue !== fieldType) {
                if (isMandatory) {
                    throw new Error(`${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
                }
                throw new Error(`${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            return true;
        case 'string':
            if (typeof fieldvalue !== fieldType) {
                if (isMandatory) {
                    throw new Error(`${fieldName} ${errorMessages_1.default.mandatoryWithType} ${fieldType}`);
                }
                throw new Error(`${fieldName} ${errorMessages_1.default.type} ${fieldType}`);
            }
            if (min && fieldvalue.trim() === '') {
                if (isMandatory) {
                    throw new Error(`${fieldName} ${errorMessages_1.default.mandatoryWithBlankString}`);
                }
                else {
                    throw new Error(`${fieldName} ${errorMessages_1.default.blankString}`);
                }
            }
            (0, exports.scriptValidator)(fieldvalue);
            return true;
        case 'date':
            if (typeof fieldvalue !== 'string' || new Date(fieldvalue).toString() === 'Invalid Date') {
                if (isMandatory) {
                    throw new Error(`${fieldName} ${errorMessages_1.default.mandatoryWithDate}`);
                }
                throw new Error(`${fieldName} ${errorMessages_1.default.invalidDate}`);
            }
            return true;
        default: return false;
    }
};
exports.fieldValidator = fieldValidator;
const enumFieldValidator = (fieldvalue, fieldType, fieldName, isMandatory, reqType, options) => {
    (0, exports.fieldValidator)(fieldvalue, fieldType, fieldName, isMandatory, reqType);
    const index = options.findIndex((option) => {
        return option === fieldvalue;
    });
    if (index === -1) {
        throw new Error(`${fieldName} ${errorMessages_1.default.enum} ${options}`);
    }
    return true;
};
exports.enumFieldValidator = enumFieldValidator;
const checkIfExist = (values, propertyToBeChecked, valueToBeChecked) => {
    let index;
    if (values.length) {
        index = values.findIndex((value) => {
            return value[propertyToBeChecked] === valueToBeChecked;
        });
    }
    if (index !== undefined && index !== -1) {
        return true;
    }
    return false;
};
exports.checkIfExist = checkIfExist;
const countValuesExistInArray = (array1, array2) => {
    let count = 0;
    if (!array1.length) {
        return count;
    }
    array2.forEach((value) => {
        count = array1.indexOf(value) !== -1 ? count + 1 : count;
    });
    return count;
};
exports.countValuesExistInArray = countValuesExistInArray;
const fieldCompareFunc = (value1, value2, fieldsType) => {
    switch (fieldsType) {
        case 'number':
            return value1 > value2 ? 1 : (value1 < value2 ? -1 : 0);
        case 'date':
            return new Date(value1) > new Date(value2) ? 1 : (new Date(value1) < new Date(value2) ? -1 : 0);
        default: return undefined;
    }
};
exports.fieldCompareFunc = fieldCompareFunc;
const checkForExtraValuesInArr = (parentArr, subArray) => {
    let isValid = true;
    if (!subArray.length) {
        return true;
    }
    if (!parentArr.length) {
        return false;
    }
    for (const element of subArray) {
        if (parentArr.findIndex((ele) => ele === element) === -1) {
            isValid = false;
            break;
        }
    }
    return isValid;
};
exports.checkForExtraValuesInArr = checkForExtraValuesInArr;
const getExtraValuesInArr = (parentArr, subArray) => {
    const extraValues = [];
    subArray.forEach((value) => {
        if (parentArr.findIndex((parentValue) => parentValue === value) === -1) {
            extraValues.push(value);
        }
    });
    return extraValues;
};
exports.getExtraValuesInArr = getExtraValuesInArr;
const nonUpdateAbleField = (fieldName) => {
    throw new Error(`${fieldName} ${errorMessages_1.default.nonUpdateAbleField}`);
};
exports.nonUpdateAbleField = nonUpdateAbleField;
const nonInsertAbleField = (fieldName) => {
    throw new Error(`${errorMessages_1.default.nonInsertAbleField} ${fieldName}`);
};
exports.nonInsertAbleField = nonInsertAbleField;
const typeAndFormatValidator = (queryObj, { type, fieldName, mandatory, min, max, format, arr, index, reqType, }) => {
    switch (type) {
        case 'string':
            if (format === 'id') {
                if (mandatory) {
                    (0, exports.idValidator)(queryObj[fieldName], reqType, fieldName, mandatory, queryObj, index);
                }
                else {
                    if (queryObj.hasOwnProperty(fieldName)) {
                        (0, exports.idValidator)(queryObj[fieldName], reqType, fieldName, mandatory, queryObj, index);
                    }
                }
            }
            else if (format === 'enum') {
                if (mandatory) {
                    (0, exports.enumFieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType, arr);
                }
                else {
                    if (queryObj.hasOwnProperty(fieldName)) {
                        (0, exports.enumFieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType, arr);
                    }
                }
            }
            else if (format === 'arrayOfIds') {
                if (mandatory) {
                    (0, exports.isValidArrayOfIds)(fieldName, queryObj[fieldName]);
                }
                else {
                    if (queryObj.hasOwnProperty(fieldName)) {
                        (0, exports.isValidArrayOfIds)(fieldName, queryObj[fieldName]);
                    }
                }
            }
            else {
                if (mandatory) {
                    (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType, min);
                    const valueLength = queryObj[fieldName].length;
                    if (max) {
                        (0, exports.maxCheck)(valueLength, max, fieldName);
                    }
                    if (min || min === 0) {
                        (0, exports.minCheck)(valueLength, min, fieldName);
                    }
                }
                else {
                    if (queryObj.hasOwnProperty(fieldName)) {
                        (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType, min);
                        const valueLength = queryObj[fieldName].length;
                        if (max) {
                            (0, exports.maxCheck)(valueLength, max, fieldName);
                        }
                        if (min || min === 0) {
                            (0, exports.minCheck)(valueLength, min, fieldName);
                        }
                    }
                }
            }
            break;
        case 'number':
            if (mandatory) {
                (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType);
                if (max) {
                    (0, exports.maxCheck)(queryObj[fieldName], max, fieldName);
                }
                if (min || min === 0) {
                    (0, exports.minCheck)(queryObj[fieldName], min, fieldName);
                }
            }
            else {
                if (queryObj.hasOwnProperty(fieldName)) {
                    (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType);
                    if (max) {
                        (0, exports.maxCheck)(queryObj[fieldName], max, fieldName);
                    }
                    if (min || min === 0) {
                        (0, exports.minCheck)(queryObj[fieldName], min, fieldName);
                    }
                }
            }
            break;
        case 'boolean':
            if (mandatory) {
                (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType);
            }
            else {
                if (queryObj.hasOwnProperty(fieldName)) {
                    (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType);
                }
            }
            break;
        case 'date':
            (0, exports.fieldValidator)(queryObj[fieldName], type, fieldName, mandatory, reqType);
            break;
        default: break;
    }
};
exports.typeAndFormatValidator = typeAndFormatValidator;
const validationCheckForBulkInsert = (query, options, fields) => {
    if (Array.isArray(query)) {
        if (!query.length) {
            throw new Error(errorMessages_1.default.bulkArrayOfObj);
        }
        query.forEach((queryObj, idx) => {
            if (!queryObj || Array.isArray(queryObj) || typeof queryObj !== 'object') {
                throw new Error(errorMessages_1.default.bulkObj);
            }
            else {
                if (!Object.keys(queryObj).length) {
                    throw new Error(errorMessages_1.default.bulkBlankObj);
                }
                else {
                    const extraFields = (0, exports.getExtraValuesInArr)(fields, Object.keys(queryObj));
                    if (extraFields.length) {
                        throw new Error(`${errorMessages_1.default.extraFeilds} ${idx}:${extraFields}`);
                    }
                    options.forEach(({ type, fieldName, mandatory, max, min, arr, format }) => {
                        (0, exports.typeAndFormatValidator)(queryObj, { type, fieldName, mandatory, min, max, format, arr, index: idx, reqType: 'create' });
                    });
                }
            }
        });
    }
    else {
        throw new Error(errorMessages_1.default.bulkArrayOfObj);
    }
    return true;
};
exports.validationCheckForBulkInsert = validationCheckForBulkInsert;
const validationCheckForBulkUpdate = (query, options, fields) => {
    if (!Array.isArray(query)) {
        throw new Error(errorMessages_1.default.bulkArrayOfObj);
    }
    if (Array.isArray(query) && !query.length) {
        throw new Error(errorMessages_1.default.bulkArrayOfObj);
    }
    query.forEach((queryObj, index) => {
        if (!queryObj || Array.isArray(queryObj) || typeof queryObj !== 'object') {
            throw new Error(errorMessages_1.default.bulkObj);
        }
        if (!Object.keys(queryObj).length) {
            throw new Error(errorMessages_1.default.bulkBlankObj);
        }
        const extraFields = (0, exports.getExtraValuesInArr)(fields, Object.keys(queryObj)) || [];
        if (extraFields.length) {
            throw new Error(`${errorMessages_1.default.extraFeilds} ${index}:${extraFields}`);
        }
        options.forEach(({ type, isNonUpdatable, fieldName, mandatory, min, max, arr, format }) => {
            if (isNonUpdatable && queryObj.hasOwnProperty(fieldName)) {
                throw new Error(`${fieldName} ${errorMessages_1.default.nonUpdateAbleField}`);
            }
            (0, exports.typeAndFormatValidator)(queryObj, { type, fieldName, mandatory, min, max, format, arr, index, reqType: 'bulkUpdate' });
        });
    });
    return true;
};
exports.validationCheckForBulkUpdate = validationCheckForBulkUpdate;
const scriptValidator = (str) => {
    const regularExpression = /<(|\/|[^>\/bi]|\/[^>bi]|[^\/>][^>]+|\/[^>][^>]+)>/g;
    const scriptValue = str && str.match(regularExpression);
    if (scriptValue && scriptValue.length) {
        throw new Error(`User ${errorMessages_1.default.scripting}`);
    }
    else {
        return true;
    }
};
exports.scriptValidator = scriptValidator;
const validationCheckForSpecialChar = (str) => {
    const regularExpression = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g;
    const specialChar = str && str.match(regularExpression);
    if (specialChar && specialChar.length) {
        throw new Error(`User ${errorMessages_1.default.specialCharacter}`);
    }
    else {
        return true;
    }
};
exports.validationCheckForSpecialChar = validationCheckForSpecialChar;
const schemaTranform = (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
};
exports.schemaTranform = schemaTranform;
function leanObject(doc) {
    try {
        if (doc && doc._id) {
            doc.id = doc._id;
            delete doc._id;
            delete doc.__v;
        }
        return doc;
    }
    catch (err) {
        return err;
    }
}
exports.leanObject = leanObject;
function lean(document) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return leanObject(yield document.lean());
        }
        catch (err) {
            return err;
        }
    });
}
exports.lean = lean;
function getEnumKeyOrValue(enums, enumKeyOrValue) {
    return enums[enumKeyOrValue];
}
exports.getEnumKeyOrValue = getEnumKeyOrValue;
function dataParser(data, entity, type) {
    let result;
    switch (entity) {
        case 'audience':
            if (type === 'request') {
                result = Object.assign({}, audienceRequestParser(data));
            }
            if (type === 'response') {
                result = Object.assign({}, audienceResponseParser(data));
            }
            return result;
        case 'audienceDetail':
            if (type === 'request') {
                const { audienceId = '' } = data;
                result = {
                    audienceId,
                    children: [...audienceDetailRequestParser(data)],
                    description: 'Container 0',
                    isIncluded: true,
                    itemId: 'c62dc1e074734',
                    type: '2',
                };
            }
            if (type === 'response') {
                result = [
                    ...audienceDetailResponseParser(data.children),
                ];
            }
            return result;
    }
}
exports.dataParser = dataParser;
function audienceResponseParser(data) {
    /* tslint:disable-next-line */
    for (const key in data) {
        const item = audienceResponseKeyParser(key, data[key]);
        delete data[key];
        if (item.survey) {
            const survey = data.survey || {};
            data.survey = Object.assign(survey, item.survey);
        }
        else {
            data = Object.assign(data, item);
        }
    }
    return data;
}
function audienceResponseKeyParser(key, val) {
    switch (key) {
        case 'audienceName':
            return { name: val };
        case 'male':
            return { maleSize: val };
        case 'female':
            return { femaleSize: val };
        case 'baseAudienceReach':
            return { baseAudienceSize: val };
        case 'audienceReach':
            return { audienceSize: val };
        case 'surveyId':
            return { survey: { id: val } };
        case 'surveyName':
            return { survey: { name: val } };
        case 'surveyDataProvider':
            return { survey: { dataSource: val } };
        case 'reContactSurveyId':
            return { reContactSurveyId: val };
        case 'reContactSurveyName':
            return { reContactSurveyName: val };
        case 'sizingPanel':
            return {
                sizingPanel: val ? ((() => {
                    let json = {};
                    /* tslint:disable-next-line */
                    for (const el in val) {
                        json = Object.assign(Object.assign({}, json), audienceResponseKeyParser(el, val[el]));
                    }
                    return json;
                })()) : val,
            };
        default:
            return { [key]: val };
    }
}
const audienceDetailResponseParser = (data = []) => {
    data.forEach((el) => {
        /* tslint:disable-next-line */
        for (const key in el) {
            const item = audienceDetailResponseKeyParser(key, el[key]);
            delete el[key];
            el = Object.assign(el, item);
        }
        if (el.type && el.type === '2') {
            if (el.children.length) {
                audienceDetailResponseParser(el.children);
            }
        }
    });
    return data;
};
function audienceDetailResponseKeyParser(key, val) {
    switch (key) {
        case 'type':
            return { itemType: val, type: val };
        case 'isIncluded':
            return { isNegative: !val };
        case 'operatorType':
            return { relation: val };
        case 'answerDetails':
            return {
                targetElementValues: val ? val.map((el) => {
                    let json = {};
                    /* tslint:disable-next-line */
                    for (const elKey in el) {
                        json = Object.assign(Object.assign({}, json), audienceDetailResponseKeyParser(elKey, el[elKey]));
                    }
                    return json;
                }) : val,
            };
        case 'answerId':
            return { dimensionArrayId: val };
        case 'useMinMaxMatch':
            return { useMinimumMatch: val };
        case 'minMatch':
            return { minimumMatch: val };
        case 'maxMatch':
            return { maximumMatch: val };
        default:
            return { [key]: val };
    }
}
function audienceRequestParser(data) {
    /* tslint:disable-next-line */
    for (const key in data) {
        const item = audienceRequestKeyParser(key, data[key]);
        delete data[key];
        data = Object.assign(data, item);
    }
    return data;
}
function audienceRequestKeyParser(key, val) {
    switch (key) {
        case 'name':
            return { audienceName: val };
        case 'maleSize':
            return { male: val };
        case 'femaleSize':
            return { female: val };
        case 'baseAudienceSize':
            return { baseAudienceReach: val };
        case 'audienceSize':
            return { audienceReach: val };
        case 'status':
            return { status: val, subStatus: val };
        case 'survey':
            return {
                reContactSurveyId: val.reContactSurveyId,
                reContactSurveyName: val.reContactSurveyName,
                surveyDataProvider: val.dataSource,
                surveyId: val.id,
                surveyName: val.name,
            };
        case 'sizingPanel':
            return {
                sizingPanel: val ? ((() => {
                    let json = {};
                    /* tslint:disable-next-line */
                    for (const valKey in val) {
                        json = Object.assign(Object.assign({}, json), audienceRequestKeyParser(valKey, val[valKey]));
                    }
                    return json;
                })()) : val,
            };
        default:
            return { [key]: val };
    }
}
function audienceDetailRequestParser(data = []) {
    data.forEach((el) => {
        /* tslint:disable-next-line */
        for (const key in el) {
            const item = audienceDetailRequestKeyParser(key, el[key]);
            delete el[key];
            el = Object.assign(el, item);
        }
        if (el.type && el.type === '2') {
            if (el.children.length) {
                audienceDetailRequestParser(el.children);
            }
        }
    });
    return data;
}
function audienceDetailRequestKeyParser(key, val) {
    switch (key) {
        case 'itemType':
            return { type: val };
        case 'isNegative':
            return { isIncluded: !val };
        case 'relation':
            return { operatorType: val };
        case 'targetElementValues':
            return {
                answerDetails: val ? val.map((el) => {
                    let json = {};
                    /* tslint:disable-next-line */
                    for (const elKey in el) {
                        json = Object.assign(Object.assign({}, json), audienceDetailRequestKeyParser(elKey, el[elKey]));
                    }
                    return json;
                }) : val,
            };
        case 'dimensionArrayId':
            return { answerId: val };
        case 'useMinimumMatch':
            return { useMinMaxMatch: val };
        case 'minimumMatch':
            return { minMatch: val };
        case 'maximumMatch':
            return { maxMatch: val };
        default:
            return { [key]: val };
    }
}
const getUserH1H2 = (locals, clientCode) => {
    const entity = locals.accessRights
        .map((e) => JSON.parse(e))
        .filter((e) => (e.type === 'entity' &&
        e.resource === 'audience' &&
        (e.client === '*' || e.client === clientCode)));
    const H1 = new Set();
    entity.forEach((el) => {
        el.levels.H1.split(',').forEach((it) => H1.add(it));
    });
    const H2 = new Set();
    entity.forEach((el) => {
        el.levels.H2.split(',').forEach((it) => H2.add(it));
    });
    if ([...H1].indexOf('*') >= 0 && [...H2].indexOf('*') >= 0) {
        return { H1: [], H2: [] };
    }
    return { H1: [...H1], H2: [...H2] };
};
exports.getUserH1H2 = getUserH1H2;
const getUserCrudH1H2 = (locals, clientCode) => {
    const entity = locals.accessRights
        .map((e) => JSON.parse(e))
        .filter((e) => (e.type === 'entity' &&
        e.resource === 'audience' &&
        (e.client === '*' || e.client === clientCode) &&
        e.operations === 'c,r,u,d'));
    const H1 = new Set();
    entity.forEach((el) => {
        el.levels.H1.split(',').forEach((it) => H1.add(it));
    });
    const H2 = new Set();
    entity.forEach((el) => {
        el.levels.H2.split(',').forEach((it) => H2.add(it));
    });
    if ([...H1].indexOf('*') >= 0 && [...H2].indexOf('*') >= 0) {
        return { H1: [], H2: [] };
    }
    return { H1: [...H1], H2: [...H2] };
};
exports.getUserCrudH1H2 = getUserCrudH1H2;
const getUserActivationCrudH1H2 = (locals, clientCode) => {
    const entity = locals.accessRights
        .map((e) => JSON.parse(e))
        .filter((e) => (e.type === 'entity' &&
        e.resource === 'activation' &&
        (e.client === '*' || e.client === clientCode) &&
        e.operations === 'c,r,u,d'));
    const H1 = new Set();
    entity.forEach((el) => {
        el.levels.H1.split(',').forEach((it) => H1.add(it));
    });
    const H2 = new Set();
    entity.forEach((el) => {
        el.levels.H2.split(',').forEach((it) => H2.add(it));
    });
    if ([...H1].indexOf('*') >= 0 && [...H2].indexOf('*') >= 0) {
        return { H1: [], H2: [] };
    }
    return { H1: [...H1], H2: [...H2] };
};
exports.getUserActivationCrudH1H2 = getUserActivationCrudH1H2;
const getUserCrudH1H2ForEither = (locals, clientCode) => {
    const entity = locals.accessRights
        .map((e) => JSON.parse(e))
        .filter((e) => (e.type === 'entity' &&
        (e.resource === 'audience' || e.resource === 'activation') &&
        (e.client === '*' || e.client === clientCode) &&
        e.operations === 'c,r,u,d'));
    const H1 = new Set();
    entity.forEach((el) => {
        el.levels.H1.split(',').forEach((it) => H1.add(it));
    });
    const H2 = new Set();
    entity.forEach((el) => {
        el.levels.H2.split(',').forEach((it) => H2.add(it));
    });
    if ([...H1].indexOf('*') >= 0 && [...H2].indexOf('*') >= 0) {
        return { H1: [], H2: [] };
    }
    return { H1: [...H1], H2: [...H2] };
};
exports.getUserCrudH1H2ForEither = getUserCrudH1H2ForEither;
const getH1 = (marketCode, data) => {
    for (const el of data) {
        if (el.isLeaf) {
            if (el.markets[0].code === marketCode) {
                return el.unrolledAccountIds;
            }
            else if (el.sub.length) {
                const uid = (0, exports.getH1)(marketCode, el.sub);
                if (uid) {
                    return uid;
                }
            }
        }
        else {
            const uid = (0, exports.getH1)(marketCode, el.sub);
            if (uid) {
                return uid;
            }
        }
    }
};
exports.getH1 = getH1;
// To fetch UID based on all client hierarchy
const getUIdFromH1 = (marketCode, data) => {
    for (const el of data) {
        if (el.isLeaf) {
            if (el.market.code === marketCode) {
                return el.unrolledAccountIds;
            }
            else if (el.sub.length) {
                const uid = (0, exports.getUIdFromH1)(marketCode, el.sub);
                if (uid) {
                    return uid;
                }
            }
        }
        else {
            const uid = (0, exports.getUIdFromH1)(marketCode, el.sub);
            if (uid) {
                return uid;
            }
        }
    }
};
exports.getUIdFromH1 = getUIdFromH1;
const getMarketNameFromClientHierarchy = (marketCode, data) => {
    for (const el of data) {
        if (el.isLeaf) {
            if (el.market.code === marketCode) {
                return el.market.name;
            }
            else if (el.sub.length) {
                const marketName = (0, exports.getUIdFromH1)(marketCode, el.sub);
                if (marketName) {
                    return marketName;
                }
            }
        }
        else {
            const marketName = (0, exports.getUIdFromH1)(marketCode, el.sub);
            if (marketName) {
                return marketName;
            }
        }
    }
};
exports.getMarketNameFromClientHierarchy = getMarketNameFromClientHierarchy;
const getMarketDetails = (marketCode, data) => data.find((el) => el.code === marketCode);
exports.getMarketDetails = getMarketDetails;
const getMarketCodeFromH1 = (h1, data) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const el of data) {
        if (el.isLeaf) {
            if (el.unrolledAccountIds === h1) {
                return el.markets[0];
            }
            if (el.sub.length) {
                const code = (0, exports.getMarketCodeFromH1)(h1, el.sub);
                if (code) {
                    return code;
                }
            }
        }
        else {
            const code = (0, exports.getMarketCodeFromH1)(h1, el.sub);
            if (code) {
                return code;
            }
        }
    }
    return undefined;
};
exports.getMarketCodeFromH1 = getMarketCodeFromH1;
const isPositiveInteger = (key) => {
    return {
        custom: {
            options: (value) => {
                if (typeof value !== 'number') {
                    return false;
                }
                return true;
            },
        },
        errorMessage: `${key} is wrong`,
        in: ['query'],
        toInt: true,
    };
};
exports.isPositiveInteger = isPositiveInteger;
let leafLabel;
const getChildrenName = (childrenData, dataId) => {
    const { unrolledAccountIds = '', name = '', sub = [] } = childrenData;
    if (unrolledAccountIds === dataId) {
        leafLabel = name;
    }
    if (sub.length) {
        sub.forEach((subChildren) => getChildrenName(subChildren, dataId));
    }
};
const getMarketBrandName = (dataId, dataChild = []) => {
    if (dataChild.length) {
        dataChild.forEach((children) => getChildrenName(children, dataId));
    }
    return leafLabel;
};
exports.getMarketBrandName = getMarketBrandName;
const produceKafkaEvent = (corrIdPrefix, data, id = '') => {
    const { kafkaConsumerGroup, aueModelScoringCronTime, aueModelTrainingCronTime, aueBlobScannerCronTime, } = config_1.default;
    let expression;
    let corrId;
    if (corrIdPrefix === constants_1.correlationBlobScannerIdPrefix) {
        expression = `0 */${aueBlobScannerCronTime} * * *`;
        corrId = corrIdPrefix;
    }
    else {
        const cronTime = corrIdPrefix === constants_1.correlationModelTrainingIdPrefix
            ? aueModelTrainingCronTime
            : aueModelScoringCronTime;
        expression = `*/${cronTime} * * * *`;
        corrId = `${corrIdPrefix}_${id}`;
    }
    data.publishTime = new Date().getTime();
    data.kafkaConsumerGroup = kafkaConsumerGroup;
    // produce kafka event
    KafkaProducerService_1.kafkaProducerService.produceCreateJobCommand({
        correlationId: corrId,
        metadata: JSON.stringify(data),
        repeatAfter: expression,
        /* tslint:disable-next-line */
        scheduledAt: null,
    }, 'produce');
};
exports.produceKafkaEvent = produceKafkaEvent;
const cancelKafkaEvent = (id, corrIdPrefix) => {
    // produce to cancel scheduled kafka event
    KafkaProducerService_1.kafkaProducerService.produceCreateJobCommand({
        correlationId: `${corrIdPrefix}_${id}`,
    }, 'cancel');
};
exports.cancelKafkaEvent = cancelKafkaEvent;
const aoaToXlsx = (data) => {
    const worksheet = xlsx.utils.aoa_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const buffer = xlsx.write(workbook, { type: 'buffer' });
    return buffer;
};
exports.aoaToXlsx = aoaToXlsx;
const bufferToJson = (data) => {
    const workbook = xlsx.read(data, {
        type: 'buffer',
    });
    const xlsxJson = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
        blankrows: false,
        dateNF: 'yyyy-mm-dd',
        header: 1,
        raw: false,
    });
    return xlsxJson;
};
exports.bufferToJson = bufferToJson;
const parseSnapShotConstantData = (data) => {
    return Object.keys(data).map((el) => {
        return ({
            details: Object.keys(data[el]).map((item) => {
                return ({
                    k: item,
                    v: data[el][item],
                });
            }),
            tag: el,
        });
    });
};
exports.parseSnapShotConstantData = parseSnapShotConstantData;
const reverseParseSnapShotConstantData = (data) => {
    const reverseParse = {};
    data.forEach((el) => {
        const value = {};
        el.details.forEach((item) => {
            Object.assign(value, { [item.k]: item.v });
        });
        Object.assign(reverseParse, { [el.tag]: value });
    });
    return reverseParse;
};
exports.reverseParseSnapShotConstantData = reverseParseSnapShotConstantData;
const baseAggregation = (clientCode, H1, H2, id, tenantId) => {
    return [
        {
            $match: {
                deletedAt: undefined,
            },
        },
        {
            $lookup: {
                as: 'audience',
                foreignField: '_id',
                from: 'Audiences',
                localField: 'audienceId',
            },
        },
        {
            $unwind: {
                path: '$audience',
            },
        },
        {
            $match: {
                'audience.clientCode': clientCode,
                'audience.deletedAt': undefined,
                'audience.h1': { $in: [new RegExp(H1.join('|'), 'i')] },
                'audience.h2': { $in: [new RegExp(H2.join('|'), 'i')] },
                'audience.originalId': id,
                'audience.tenantId': tenantId,
            },
        },
    ];
};
exports.baseAggregation = baseAggregation;
const sequenceNumber = (num) => {
    let str = String(num);
    while (str.length < 6) {
        str = '0' + str;
    }
    return str;
};
exports.sequenceNumber = sequenceNumber;
const isAdAccountIdExist = (config = []) => {
    return config.filter(({ k, v }) => k === 'adAccountId' && v).length;
};
exports.isAdAccountIdExist = isAdAccountIdExist;
const parsedCorsOrigin = (cors = '') => {
    return cors.split('|').map((el) => {
        if (el.startsWith('/') && el.endsWith('/')) {
            return new RegExp(el.slice(1, (el.length - 1)));
        }
        return el;
    });
};
exports.parsedCorsOrigin = parsedCorsOrigin;
const getUserH1ForADMD = (locals, clientCode) => {
    const entity = locals.accessRights
        .map((e) => JSON.parse(e))
        .filter((e) => (e.type === 'entity' &&
        (e.resource === 'ADMD' || e.resource === 'destination') &&
        (e.client === '*' || e.client === clientCode) &&
        e.operations === 'c,r,u,d'));
    const H1 = new Set();
    entity.forEach((el) => {
        el.levels.H1.split(',').forEach((it) => H1.add(it));
    });
    if ([...H1].indexOf('*') >= 0) {
        return { H1: [] };
    }
    return { H1: [...H1] };
};
exports.getUserH1ForADMD = getUserH1ForADMD;
const formateAdditionalInfo = (dataArr) => {
    let returnStr = '';
    if (dataArr.length) {
        for (const el of dataArr) {
            returnStr += returnStr === '' ? `${el.k} : ${el.v}` : `, ${el.k}: ${el.v}`;
        }
    }
    return returnStr === '' ? 'NA' : returnStr;
};
exports.formateAdditionalInfo = formateAdditionalInfo;
const isJSONString = (str) => {
    try {
        JSON.parse(str);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.isJSONString = isJSONString;
const getUniqueId = () => Math.random().toString(16).substring(2);
exports.getUniqueId = getUniqueId;
const wrapContentWithContainer = (content = []) => {
    if (content.length === 0 || content.length > 1) {
        return {
            children: content,
            description: 'Container',
            isNegative: false,
            itemId: 'abc123',
            itemType: '2',
            relation: 2,
            type: '2',
        };
    }
    return Object.assign({}, content[0]);
};
exports.wrapContentWithContainer = wrapContentWithContainer;
const transformCCSContentToAUE = (content = []) => {
    return content.map(({ children = [], description, isNegative = false, itemType, maximumMatch, minimumMatch, questionId, relation, targetElementValues = [], useMinimumMatch = false, }) => {
        const entity = {
            isNegative,
            itemType: itemType.toString(),
            lookup: undefined,
            relation,
            type: itemType.toString(),
        };
        if (+itemType === 2) { // container
            entity.children = children && children.length ? (0, exports.transformCCSContentToAUE)([...children]) : [];
            entity.description = description;
            entity.itemId = (0, exports.getUniqueId)();
            if (useMinimumMatch) {
                entity.maximumMatch = maximumMatch;
                entity.minimumMatch = minimumMatch;
            }
            entity.useMinimumMatch = useMinimumMatch;
        }
        else if (+itemType === 1) { // statement
            const descArr = description.split(' > ');
            entity.answer = descArr.pop();
            entity.description = descArr.join(' > ');
            entity.questionId = questionId.toString();
            entity.targetElementValues = targetElementValues;
            entity.itemId = `${(0, exports.getUniqueId)()}_${(0, exports.getUniqueId)()}`;
        }
        return entity;
    });
};
exports.transformCCSContentToAUE = transformCCSContentToAUE;
const getHashValue = (key, url, body = {}) => {
    const timestamp = moment().format('yyyy-MM-dTHH:mm:ss');
    const times = 10;
    const bodyValue = body && Object.keys(body).length === 0 ? '' : JSON.stringify(body);
    let hash = `TS=${timestamp};Key=${key};URL=${url};BODY=${bodyValue}`;
    for (let i = 0; i < times; i++) {
        hash = sjcl.hash.sha256.hash(hash);
    }
    hash = sjcl.codec.hex.fromBits(hash).toUpperCase();
    return { hash, timestamp };
};
exports.getHashValue = getHashValue;
const groupBy = (arr, criteria) => arr.reduce((obj, item) => {
    // Check if the criteria is a function to run on the item or a property of it
    const key = typeof criteria === 'function' ? criteria(item) : item[criteria];
    // If the key doesn't exist yet, create it
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = [];
    }
    // Push the value to the object
    obj[key].push(item);
    // Return the object to the next item in the loop
    return obj;
}, {});
exports.groupBy = groupBy;
const getUnrollIds = (markets, data) => {
    const unrollIds = [];
    markets.forEach((market) => {
        const h1 = (0, exports.getUIdFromH1)(market, data[0].H1.sub);
        if (h1) {
            unrollIds.push(h1);
        }
    });
    return unrollIds;
};
exports.getUnrollIds = getUnrollIds;
const getIdObject = () => {
    const id = (0, exports.generateObjectId)();
    return {
        _id: id,
        id,
        originalId: id,
    };
};
exports.getIdObject = getIdObject;
//# sourceMappingURL=utilities%20copy.js.map