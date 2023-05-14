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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
class Database {
    static open({ mongoUri, testEnv }) {
        // Mock the mongoose for testing purpose using Mockgoose
        // connect to mongo db
        return mongoose.connect(mongoUri)
            .catch((err) => {
            console.error(`Error connecting to database: ${mongoUri} ${JSON.stringify(err)}`);
            throw new Error(`Unable to connect to database: ${mongoUri}`);
        });
    }
    static close() {
        mongoose.disconnect();
    }
}
exports.default = Database;
// import * as mongoose from 'mongoose';
// export default class Database {
//   public static open(mongoURL: string) {
//     return new Promise((resolve, reject) => {
//       mongoose.connect(mongoURL, (err) => {
//         if (err) {
//           console.log('ERROR', err);
//           return reject(err);
//         }
//         console.log('Successfully connected to the database', mongoURL);
//         // seedData();
//         return resolve('success');
//       });
//     });
//   }
//   public static disconnect() {
//     mongoose.disconnect((err) => {
//       if (!err) console.log('Disconnected from MongoDB.');
//     });
//   }
// }
//# sourceMappingURL=Database.js.map