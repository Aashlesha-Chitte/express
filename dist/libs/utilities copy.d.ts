import { Document, Query } from 'mongoose';
export declare const generateObjectId: () => string;
export declare const minCheck: (value: number, minValue: number, fieldName: string) => boolean;
export declare const maxCheck: (value: number, maxValue: number, fieldName: string) => boolean;
export declare const isValidArrayOfIds: (fieldName: string, value: string[]) => boolean;
export declare const compareDateFields: (lesserValue: string, greaterValue: string, lsrFieldName: string, gtrFieldName: string) => boolean;
export declare const isValidObjectId: (id: any) => boolean;
export declare const isValidCountryName: (country: string) => true | undefined;
export declare const isValidEmail: (email: string) => true | undefined;
export declare const idValidator: (id: string, reqType: string, fieldName: string, mandatory: boolean, body?: object, index?: number) => boolean;
export declare const nullOrUndefinedCheck: (value: any) => boolean;
export declare const isObject: (item: any) => boolean;
export declare const isString: (item: any) => boolean;
export declare const isBoolean: (item: any) => boolean;
export declare const isArray: (item: any, min: number) => boolean;
export declare const validateArraySize: (item: any, min: number, max?: number) => boolean;
export declare const isNumber: (item: any) => boolean;
interface IValidatField {
    fieldValue: any;
    fieldType: string;
    fieldName: string;
    isMandatory: boolean;
    message?: string;
    min?: number;
    max?: number;
}
export declare const validateField: ({ fieldValue, fieldType, fieldName, isMandatory, message, min, max, }: IValidatField) => boolean;
export declare const fieldValidator: (fieldvalue: any, fieldType: string, fieldName: string, isMandatory: boolean, reqType: string, min?: number) => boolean;
export declare const enumFieldValidator: (fieldvalue: any, fieldType: string, fieldName: string, isMandatory: boolean, reqType: string, options: any[]) => boolean;
export declare const checkIfExist: (values: any[], propertyToBeChecked: string, valueToBeChecked: any) => boolean;
export declare const countValuesExistInArray: (array1: any[], array2: any[]) => number;
export declare const fieldCompareFunc: (value1: any, value2: any, fieldsType: any) => 0 | 1 | -1 | undefined;
export declare const checkForExtraValuesInArr: (parentArr: any[], subArray: any[]) => boolean;
export declare const getExtraValuesInArr: (parentArr: any[], subArray: any[]) => any[];
export declare const nonUpdateAbleField: (fieldName: string) => never;
export declare const nonInsertAbleField: (fieldName: string) => never;
export declare const typeAndFormatValidator: (queryObj: any, { type, fieldName, mandatory, min, max, format, arr, index, reqType, }: {
    type: any;
    fieldName: any;
    mandatory: any;
    min: any;
    max: any;
    format: any;
    arr: any;
    index: any;
    reqType: any;
}) => void;
export declare const validationCheckForBulkInsert: (query: any[], options: any[], fields: string[]) => boolean;
export declare const validationCheckForBulkUpdate: (query: any[], options: any[], fields: string[]) => boolean;
export declare const scriptValidator: (str: any) => boolean;
export declare const validationCheckForSpecialChar: (str: any) => boolean;
export declare const schemaTranform: (doc: any, ret: any) => void;
export declare function leanObject<D extends any>(doc: any): D;
export declare function lean<D extends Document>(document: Query<D | null, D>): Promise<D>;
export declare function getEnumKeyOrValue(enums: any, enumKeyOrValue: any): string;
export declare function dataParser(data: any, entity: string, type: string): any;
export declare const getUserH1H2: (locals: any, clientCode: any) => {
    H1: unknown[];
    H2: unknown[];
};
export declare const getUserCrudH1H2: (locals: any, clientCode: any) => {
    H1: unknown[];
    H2: unknown[];
};
export declare const getUserActivationCrudH1H2: (locals: any, clientCode: any) => {
    H1: unknown[];
    H2: unknown[];
};
export declare const getUserCrudH1H2ForEither: (locals: any, clientCode: any) => {
    H1: unknown[];
    H2: unknown[];
};
export declare const getH1: (marketCode: any, data: any) => any;
export declare const getUIdFromH1: (marketCode: any, data: any) => any;
export declare const getMarketNameFromClientHierarchy: (marketCode: any, data: any) => any;
export declare const getMarketDetails: (marketCode: string, data: any[]) => any;
export declare const getMarketCodeFromH1: (h1: any, data: any) => any;
export declare const isPositiveInteger: (key: any) => {
    custom: {
        options: (value: any) => boolean;
    };
    errorMessage: string;
    in: string[];
    toInt: boolean;
};
export declare const getMarketBrandName: (dataId: any, dataChild?: never[]) => any;
export declare const produceKafkaEvent: (corrIdPrefix: any, data: any, id?: string) => void;
export declare const cancelKafkaEvent: (id: any, corrIdPrefix: any) => void;
export declare const aoaToXlsx: (data: any) => any;
export declare const bufferToJson: (data: any) => any;
export declare const parseSnapShotConstantData: (data: any) => {
    details: {
        k: string;
        v: any;
    }[];
    tag: string;
}[];
export declare const reverseParseSnapShotConstantData: (data: any) => any;
export declare const baseAggregation: (clientCode: any, H1: any, H2: any, id: any, tenantId: any) => ({
    $match: {
        deletedAt: undefined;
        'audience.clientCode'?: undefined;
        'audience.deletedAt'?: undefined;
        'audience.h1'?: undefined;
        'audience.h2'?: undefined;
        'audience.originalId'?: undefined;
        'audience.tenantId'?: undefined;
    };
    $lookup?: undefined;
    $unwind?: undefined;
} | {
    $lookup: {
        as: string;
        foreignField: string;
        from: string;
        localField: string;
    };
    $match?: undefined;
    $unwind?: undefined;
} | {
    $unwind: {
        path: string;
    };
    $match?: undefined;
    $lookup?: undefined;
} | {
    $match: {
        'audience.clientCode': any;
        'audience.deletedAt': undefined;
        'audience.h1': {
            $in: RegExp[];
        };
        'audience.h2': {
            $in: RegExp[];
        };
        'audience.originalId': any;
        'audience.tenantId': any;
        deletedAt?: undefined;
    };
    $lookup?: undefined;
    $unwind?: undefined;
})[];
export declare const sequenceNumber: (num: any) => string;
export declare const isAdAccountIdExist: (config?: never[]) => number;
export declare const parsedCorsOrigin: (cors?: string) => (string | RegExp)[];
export declare const getUserH1ForADMD: (locals: any, clientCode: any) => {
    H1: unknown[];
};
export declare const formateAdditionalInfo: (dataArr: any) => string;
export declare const isJSONString: (str: string) => boolean;
export declare const getUniqueId: () => string;
export declare const wrapContentWithContainer: (content?: any[]) => any;
export declare const transformCCSContentToAUE: (content?: any[]) => any[];
export declare const getHashValue: (key: string, url: any, body?: {}) => {
    hash: string;
    timestamp: any;
};
export declare const groupBy: (arr: any, criteria: any) => any;
export declare const getUnrollIds: (markets: any, data: any) => any[];
export declare const getIdObject: () => {
    _id: string;
    id: string;
    originalId: string;
};
export {};
