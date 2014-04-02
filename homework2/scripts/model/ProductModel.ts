// Implement "POJO" here to keep data of a single Product item.
/// <reference path='../refs.ts'/>

module auction.model {

    export class ProductModel {
        id: number;
        description: string;
        price: number;
        thumb: string;
        timeleft: number;
        title: string;
        watchers: number;
    }

}
