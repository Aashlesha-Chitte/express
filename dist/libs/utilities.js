"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leanObject = void 0;
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
//# sourceMappingURL=utilities.js.map