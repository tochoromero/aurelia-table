import { HttpClient } from "aurelia-fetch-client";
import { TableSettings } from 'au-table/TableSettings';

export class ServerSideCustomElement {

    open = "${";

    service;
    
    tableSettings = new TableSettings(this.service.getEmployeeList.bind(this.service));

    static inject = [EmployeeService];
    constructor(service) {
        this.service = service;
    }

    bind() {
        return this.tableSettings.loadItems();
    }
}

//employee-service.js
class EmployeeService {
    constructor() {
        this.employees = [];
        for (var i = 1; i <= 100; i++) {
            let employee = {
                UserId: userId,
                username: username,
                firstname: firstname,
                lastname: lastname,
                age: 10,
                gender: userId % 2 == 0 ? "Male" : "Female",
                birthdate: new Date()
            };
            this.employees.push(employee);
        }
    }

    getEmployeeList(request) {
        return new Promise((resolve) => {
            var filtered = this.employees
                .filter(item => !request.filter
                    || !request.filter.username
                    || item.username.indexOf(request.filter.username) !== -1);
            var result = filtered
                .splice(request.start, request.pageSize + request.start);
            request.totalItems = filtered.length;
            resolve(request);
        });
    }
}