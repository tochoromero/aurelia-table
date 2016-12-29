import {HttpClient} from "aurelia-fetch-client";

export class BasicsCustomElement {

    open = "${";
    
    users = [];

    bind(){
        let client = new HttpClient();

        return client.fetch('data.json')
            .then(response => response.json())
            .then(users => this.users = users.slice(1,10));
    }
}