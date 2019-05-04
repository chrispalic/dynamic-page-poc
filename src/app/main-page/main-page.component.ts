import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  public pageDef = {
    pageName: 'Test Page',
    pageContent: [
      {
        groupName: 'Group 1',
        groupText: 'This is the Group 1 text',
        groupContent: [
          {
            formFieldType: 1,
            formFieldText: 'Form Field 1 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 2,
            formFieldText: 'Form Field 2 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 3,
            formFieldText: 'Form Field 3 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 4,
            formFieldText: 'Form Field 4 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 5,
            formFieldText: 'Form Field 5 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
        ]
      },
      {
        groupName: 'Group 2',
        groupText: 'This is the Group 2 text',
        groupContent: [
          {
            formFieldType: 5,
            formFieldText: 'Form Field 5 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 4,
            formFieldText: 'Form Field 4 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 3,
            formFieldText: 'Form Field 3 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 2,
            formFieldText: 'Form Field 2 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 1,
            formFieldText: 'Form Field 1 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
        ]
      },
      {
        groupName: 'Group 3',
        groupText: 'This is the Group 3 text',
        groupContent: [
          {
            formFieldType: 3,
            formFieldText: 'Form Field 3 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 4,
            formFieldText: 'Form Field 4 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 2,
            formFieldText: 'Form Field 2 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 2,
            formFieldText: 'Form Field 2 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
          {
            formFieldType: 1,
            formFieldText: 'Form Field 1 Text',
            formFieldOptions: 'Options',
            formFieldData: []
          },
        ]
      }
    ],
  };
  constructor() { }

  ngOnInit() {
  }

}
