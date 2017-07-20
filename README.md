A fork on project by Hector Romero. Added some support for server-side processing. A simple and powerful data table for Aurelia.
Please visit the [project page](http://tochoromero.github.com/aurelia-table) for the documentation and examples.

## Updating to 0.1.5
There was one breaking change in version 0.1.5. 
The Filter Plugin has been updated to allow multiple filters at the same time. The ```filter-text``` and
```filter-keys``` properties <strong>have been replaced</strong> by a ```filters``` property.
Please refer to the [documentation](http://tochoromero.github.com/aurelia-table) to learn how to use it.

## Features
Aurelia Table is very easy to use, and you have complete control over the look and feel. You can make your table look exactly the way you want using plain html and css.
Out of the box you will get:
 - Row Filtering
 - Column Sorting
 - Client side pagination
 - Row Selection
 - Server-side processing
 
##Getting started

1. Install package.

    ```
    npm i angular2-datagrid --save
    ```

2. Specify your template.

    ```html
    <template>
      <div class="row">
          <div class="col-md-3">
              <form submit.delegate="tableSettings.loadItems()">
                  <div class="input-group">
                      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Username"
                          value.bind="tableSettings.filter.username">
                      <span class="input-group-btn">
                          <button class="btn btn-default">Search</button>
                      </span>
                  </div>            
              </form>
          </div>
          <div class="col-md-offset-6 col-md-3">
              <div class="form-inline">
                  <div class="form-group pull-right">
                      <label for="pageSize">Page Size: </label>
                      <select value.bind="tableSettings.pageSize" id="pageSize" class="form-control">
                          <option model.bind="5">5</option>
                          <option model.bind="10">10</option>
                          <option model.bind="20">20</option>
                          <option model.bind="50">50</option>
                      </select>
                  </div>
              </div>
          </div>
      </div>
      <table class="table table-striped" aurelia-table="data.bind: tableSettings.items; display-data.bind: $displayData; 
                                                          current-page.bind: tableSettings.currentPage; page-size.bind: tableSettings.pageSize;">
          <thead>
          <tr>
              <th>Active</th>
              <th>Username</th>
              <th>Fullname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Birthdate</th>
          </tr>
          </thead>
          <tbody>
          <tr repeat.for="employee of $displayData">
              <td>${employee.userId}</td>
              <td>                
                  <a href="#" click.delegate="view(employee)">
                      ${employee.username}
                  </a>                
              </td>
              <td>${employee.firstname + ' ' + employee.lastname}</td>
              <td>${employee.age}</td>
              <td>${employee.gender}</td>
              <td>${employee.birthdate | dateFormat}</td>
          </tr>
          </tbody>
      </table>
      <div class="row">
          <div class="col-md-9">
              <aut-pagination current-page.bind="tableSettings.currentPage" page-size.bind="tableSettings.pageSize" total-items.bind="tableSettings.totalItems"
                                    pagination-size.bind="5" boundary-links.bind="true"> </aut-pagination>
          </div>
      </div>
    </template>
    ```

3. Create your class.

    ```TypeScript
    // employee-list.ts
    import { EmployeeModal } from './employee-modal';
    import { TableSettings, TableResult } from 'au-table/au-table-settings';
    import { EmployeeService } from './employee-service';
    import { Employee } from './employee-model';

    export class EmployeeList {
      tableSettings = new TableSettings<Employee>(this.service.getEmployeeList.bind(this.service));

      static inject = [EmployeeService, DialogService];
      constructor(private service: EmployeeService, private dialogService: DialogService) {    
      }

      bind() {
        return this.tableSettings.loadItems();
      }
    }

    // employee-service.ts
    import { TableSettings, TableResult } from 'au-table/au-table-settings';
    import { BaseHttpClient } from './../resources/index';
    import { Employee } from "./employee-model";

    export class EmployeeService {
        static inject = [BaseHttpClient]
        constructor(private client: BaseHttpClient) {
            
        }

        async getEmployeeList(request: ITableRequest<any>) {
            let result = await this.client.get('Employee/GetEmployeeList', request, true);
            let content = await (result.content as TableResult<Employee>);
            return content;
        }
    }

    ```


For a complete list of features and examples please visit the [project page](http://tochoromero.github.com/aurelia-table).
