import {HttpClient} from "aurelia-fetch-client";

export class FilterCustomElement {

    open = "${";

    selected = 'preview';

    users = [];

    eyeColors = [];

    filters = [
        {value: '', keys: ['name', 'address.state']},
        {value: '', keys: ['eyeColor']},
    ];

    bind() {
        let client = new HttpClient();

        return client.fetch('data.json')
            .then(response => response.json())
            .then(users => this.users = users.slice(1, 10))
            .then(() => this.populateColors())
    }

    populateColors() {
        this.eyeColors.push('');
        for (let next of this.users) {
            let nextColor = next.eyeColor;

            if (this.eyeColors.indexOf(nextColor) === -1) {
                this.eyeColors.push(nextColor);
            }
        }
    }
}