import {bindable, bindingMode} from "aurelia-framework";

export class AutPaginationCustomElement {

    @bindable({defaultBindingMode: bindingMode.twoWay}) currentPage;
    @bindable({defaultBindingMode: bindingMode.twoWay}) pageSize;
    @bindable totalItems;
    @bindable hideSinglePage = true;

    totalPages = 1;


    bind() {
        if (this.currentPage === undefined || this.currentPage == null || this.currentPage < 1) {
            this.currentPage = 1;
        }

        if (this.pageSize === undefined || this.pageSize === null || this.pageSize < 1) {
            this.pageSize = 5;
        }
    }

    totalItemsChanged() {
        if (this.totalItems <= this.pageSize) {
            this.totalPages = 1;
            return;
        }

        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }

    selectPage(page) {
        if (page < 1 || page > this.totalPages || page === this.currentPage) {
            return;
        }

        this.currentPage = page;
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
}