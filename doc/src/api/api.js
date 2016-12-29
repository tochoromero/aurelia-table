import {HttpClient} from "aurelia-fetch-client";

export class ApiCustomElement {

    open = "${";

    tableApi;

    users = [];

    pageSize = 10;

    bind() {
        let client = new HttpClient();

        return client.fetch('data.json')
            .then(response => response.json())
            .then(users => this.users = users);
    }

    selectLast() {
        let last = this.users[this.users.length - 1];
        last.$isSelected = true;
        this.tableApi.revealItem(last);
    }
}