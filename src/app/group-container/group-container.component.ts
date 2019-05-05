import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-container',
  templateUrl: './group-container.component.html',
  styleUrls: ['./group-container.component.sass']
})
export class GroupContainerComponent implements OnInit {
  @Input() groupDefinition;
  constructor() { }

  ngOnInit() {
    console.log(this.groupDefinition.toString());
  }

}
