import {bindable, bindingMode, DOM} from 'aurelia-framework';

export class AutPaginationCustomElement {

  @bindable({defaultBindingMode: bindingMode.twoWay})currentPage;
  @bindable pageSize;
  @bindable totalItems;
  @bindable hideSinglePage = true;
  @bindable paginationSize;
  @bindable boundaryLinks = false;
  @bindable firstText = 'First';
  @bindable lastText = 'Last';
  @bindable directionLinks = true;
  @bindable previousText = '<';
  @bindable nextText = '>';

  totalPages = 1;
  displayPages = [];

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.currentPage === undefined || this.currentPage === null || this.currentPage < 1) {
      this.currentPage = 1;
    }

    if (this.pageSize === undefined || this.pageSize === null || this.pageSize < 1) {
      this.pageSize = 5;
    }
  }

  totalItemsChanged() {
    this.currentPage = 1;
    this.calculatePages();
  }

  pageSizeChanged() {
    this.currentPage = 1;
    this.calculatePages();
  }

  currentPageChanged() {
    this.calculatePages();
    this.dispatchPageChangedEvent();
  }

  dispatchPageChangedEvent() {
    let event = DOM.createCustomEvent('page-changed', {
      bubbles: true,
      detail: {
        currentPage: this.currentPage
      }
    });
    this
      .element
      .dispatchEvent(event);
  }

  calculatePages() {
    this.totalPages = this.totalItems <= this.pageSize
      ? 1
      : Math.ceil(this.totalItems / this.pageSize);

    if (isNaN(this.paginationSize) || this.paginationSize <= 0) {
      this.displayAllPages();
    } else {
      this.limitVisiblePages();
    }
  }

  displayAllPages() {
    let displayPages = [];

    for (let i = 1; i <= this.totalPages; i++) {
      displayPages.push({
        title: i.toString(),
        value: i
      });
    }
    this.displayPages = displayPages;
  }

  limitVisiblePages() {
    let displayPages = [];

    let totalTiers = Math.ceil(this.totalPages / this.paginationSize);

    let activeTier = Math.ceil(this.currentPage / this.paginationSize);

    let start = ((activeTier - 1) * this.paginationSize) + 1;
    let end = start + this.paginationSize;

    if (activeTier > 1) {
      displayPages.push({
        title: '...',
        value: start - 1
      });
    }

    for (let i = start; i < end; i++) {
      if (i > this.totalPages) {
        break;
      }

      displayPages.push({
        title: i.toString(),
        value: i
      });
    }

    if (activeTier < totalTiers) {
      displayPages.push({title: '...', value: end});
    }

    this.displayPages = displayPages;
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

  firstPage() {
    this.currentPage = 1;
  }

  lastPage() {
    this.currentPage = this.totalPages;
  }
}
