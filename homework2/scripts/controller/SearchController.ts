/// <reference path='../refs.ts'/>

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    export interface ISearchScope extends ng.IScope {
        model: SearchController;
    }

    export class SearchController {
        public static $inject = ['$scope', 'ProductService'];

        public searchResult: m.ProductModel[];

        constructor(private $scope: ISearchScope,
                    private productService: s.IProductService) {
            this.$scope.model = this;
            this.productService.search()
                .then((products) => this.searchResult = products);
        }
    }

    angular.module('auction').controller('SearchController', SearchController);
}
