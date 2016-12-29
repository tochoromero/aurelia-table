import {HttpClient} from "aurelia-fetch-client";

export class SortCustomElement {

    open = "${";

    users = [];

    bind() {
        let client = new HttpClient();

        return client.fetch('data.json')
            .then(response => response.json())
            .then(users => this.users = users.slice(1, 10));
    }

    nameLength(row) {
        return row.name.length;
    }

    dateSort(a, b, sortOrder) {
        let date1 = new Date(a.registered);
        let date2 = new Date(b.registered);

        if (date1 === date2) {
            return 0;
        }

        if (date1 > date2) {
            return 1 * sortOrder;
        }

        return -1 * sortOrder;
    }
}