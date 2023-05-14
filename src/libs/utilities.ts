import * as mongoose from 'mongoose';

export function leanObject<D extends any>(doc: any): D {
  try {
    if (doc && doc._id) {
      doc.id = doc._id;
      delete doc._id;
      delete doc.__v;
    }

    return doc;
  } catch (err: any) {
    return err;
  }
}