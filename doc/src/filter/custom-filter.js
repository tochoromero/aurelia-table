import {HttpClient} from "aurelia-fetch-client";

export class CustomFilterCustomElement {

    open = "${";

    users = [];

    filters = [
        {value: true, custom: this.inactiveFilter}
    ];

    bind() {
        let client = new HttpClient();

        return client.fetch('data.json')
            .then(response => response.json())
            .then(users => this.users = users.slice(1, 10));
    }

    inactiveFilter(filterValue, row) {
        return filterValue || row.isActive;
    }
}