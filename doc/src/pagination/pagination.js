import {HttpClient} from "aurelia-fetch-client";

export class PaginationCustomElement {

    open = "${";

    selected = 'html';

    users = [];

    pageSize = 5;

    bind() {
        let client = new HttpClient();

        return client.fetch('data.json')
            .then(response => response.json())
            .then(users => this.users = users);
    }
}