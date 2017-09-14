import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  
  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(studentForm){
    this.dataStore.addNewStudent(studentForm.value.studnum,studentForm.value.studfname,
      studentForm.value.studlname,studentForm.value.studprog,studentForm.value.studyear);
      studentForm.reset();
  }
 
}
