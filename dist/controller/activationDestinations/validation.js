"use strict";
// import { validateField } from 'libs/utilities';
// const isBoolean = (key) => {
//   return {
//     custom: {
//       options: (value) => {
//         if (!['true', 'false'].includes(value)) {
//           return false;
//         }
//         return true;
//       },
//     },
//     errorMessage: `${key} is wrong`,
//     in: ['query'],
//   };
// };
// const configValidator: any = (config) => config.forEach((element: any) => {
//   const { k, v } = element;
//   validateField({
//     fieldName: 'k',
//     fieldType: 'string',
//     fieldValue: k,
//     isMandatory: true,
//   });
//   validateField({
//     fieldName: 'v',
//     fieldType: 'alphaNum',
//     fieldValue: v,
//     isMandatory: true,
//   });
// });
// export default Object.freeze({
//   createActivationDestinations: {
//     body: {
//       custom: {
//         options: (value: any, { req: { body } }) => {
//           validateField({
//             fieldName: 'body',
//             fieldType: 'array',
//             fieldValue: body,
//             isMandatory: true,
//           });
//           body.forEach((el: any) => {
//             const {
//               activationServiceIsActive,
//               activationServiceUrl,
//               clientHierarchy,
//               destinationCode,
//               destinationConfig,
//               destinationConnectionUrl,
//               destinationIsActive,
//               destinationName,
//               partnerCode,
//             } = el;
//             validateField({
//               fieldName: 'clientHierarchy',
//               fieldType: 'array',
//               fieldValue: clientHierarchy,
//               isMandatory: false,
//             });
//             clientHierarchy.forEach((elem: any) => {
//               const { k, v } = elem;
//               validateField({
//                 fieldName: 'k',
//                 fieldType: 'string',
//                 fieldValue: k,
//                 isMandatory: true,
//               });
//               if (k === 'h1') {
//                 validateField({
//                   fieldName: 'v',
//                   fieldType: 'array',
//                   fieldValue: v,
//                   isMandatory: true,
//                   message: 'v is required in clientHierarchy object and must be an non empty array',
//                 });
//                 v.forEach((element: any) => {
//                   validateField({
//                     fieldName: 'v',
//                     fieldType: 'string',
//                     fieldValue: element,
//                     isMandatory: true,
//                   });
//                 });
//               }
//             });
//             validateField({
//               fieldName: 'destinationName',
//               fieldType: 'string',
//               fieldValue: destinationName,
//               isMandatory: false,
//             });
//             validateField({
//               fieldName: 'destinationCode',
//               fieldType: 'string',
//               fieldValue: destinationCode,
//               isMandatory: true,
//             });
//             validateField({
//               fieldName: 'activationServiceUrl',
//               fieldType: 'string',
//               fieldValue: activationServiceUrl,
//               isMandatory: false,
//             });
//             validateField({
//               fieldName: 'partnerCode',
//               fieldType: 'string',
//               fieldValue: partnerCode,
//               isMandatory: true,
//             });
//             validateField({
//               fieldName: 'destinationConfig',
//               fieldType: 'array',
//               fieldValue: destinationConfig,
//               isMandatory: false,
//               min: 0,
//             });
//             validateField({
//               fieldName: 'destinationConnectionUrl',
//               fieldType: 'string',
//               fieldValue: destinationConnectionUrl,
//               isMandatory: false,
//             });
//             validateField({
//               fieldName: 'destinationIsActive',
//               fieldType: 'boolean',
//               fieldValue: destinationIsActive,
//               isMandatory: false,
//             });
//             validateField({
//               fieldName: 'activationServiceIsActive',
//               fieldType: 'boolean',
//               fieldValue: activationServiceIsActive,
//               isMandatory: false,
//             });
//             if (destinationConfig) {
//               destinationConfig.forEach((elem: any) => {
//                 const { geography, config } = elem;
//                 validateField({
//                   fieldName: 'geography',
//                   fieldType: 'string',
//                   fieldValue: geography,
//                   isMandatory: true,
//                 });
//                 validateField({
//                   fieldName: 'config',
//                   fieldType: 'array',
//                   fieldValue: config,
//                   isMandatory: true,
//                   message: 'config is required in destinationConfig and must be an non empty array',
//                 });
//                 configValidator(config);
//               });
//             }
//           });
//           return true;
//         },
//       },
//       errorMessage: 'Body is required',
//       in: 'body',
//       optional: false,
//       required: true,
//     },
//   },
//   getActivationDestinations: {
//     destinationIsActive: {
//       ...isBoolean('destinationIsActive'),
//       optional: true,
//     },
//   },
//   updateDestinationConfig: {
//     destinationCode: {
//       errorMessage: 'destinationCode is required',
//       in: ['body'],
//       isString: true,
//       optional: false,
//       required: true,
//       trim: true,
//     },
//     destinationConfig: {
//       custom: {
//         options: (value: any) => {
//           const { config, geography } = value;
//           validateField({
//             fieldName: 'geography',
//             fieldType: 'string',
//             fieldValue: geography,
//             isMandatory: true,
//           });
//           validateField({
//             fieldName: 'config',
//             fieldType: 'array',
//             fieldValue: config,
//             isMandatory: true,
//             message: 'config is required in destinationConfig and must be an non empty array',
//           });
//           configValidator(config);
//           return true;
//         },
//       },
//       errorMessage: 'DestinationConfig is required',
//       in: ['body'],
//       optional: false,
//       required: true,
//     },
//   },
// });
//# sourceMappingURL=validation.js.map