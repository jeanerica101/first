import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  studentCollection : Array<object>;
  constructor(private dataStore: SharedService) { }

  ngOnInit() {
      this.studentCollection = this.dataStore.getStudent();
  }

}
