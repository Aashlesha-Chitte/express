import IVersionableDocument from '../versionable/IVersionableDocument';
interface IVariantsModel {
    barcode: string;
    sku: string;
    price: number;
    comparePrice: number;
    option1: string;
    option1Val: string;
    option2: string;
    option2Val: string;
    option3: string;
    option3Val: string;
    imageUrl: string;
    fulfillmentService: string;
    inventoryPolicy: string;
    inventoryQuantity: number;
    inventoryTracker: string;
    weightUnit: string;
    isShipping: boolean;
    isTaxable: boolean;
    grams: number;
    taxCode: string;
}
interface IImagesModel {
    imageUrl: string;
    imagePosition: number;
    imageAltText: string;
}
interface IGoogleShoppingModel {
    productCategory: string;
    gender: string;
    ageGroup: string;
    mpn: string;
    adwordsGrouping: string;
    adwordsLables: any[];
    condition: string;
    customProduct: boolean;
    customLabel0: string;
    customLabel1: string;
    customLabel2: string;
    customLabel3: string;
    customLabel4: string;
}
export default interface IProductModel extends IVersionableDocument {
    _id: string;
    handle: {
        type: string;
        unique: true;
    };
    title: string;
    bodyHtml: string;
    vendor: string;
    published: boolean;
    tags: any[];
    status: string;
    giftCard: boolean;
    costPerItem: number;
    variants: IVariantsModel[];
    images: IImagesModel[];
    googleShoping: IGoogleShoppingModel;
    seo: {
        seoTitle: string;
        seoDescription: string;
    };
    standardProductType: string;
    customProductType: string;
}
export {};
