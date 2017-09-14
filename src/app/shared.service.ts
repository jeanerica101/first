import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  shNum:number;
  shFName:string;
  shLName:string;
  shProg:string;
  shYear:string;

  shCollection: Array<object> =[];
  shNameObject: {studnum:number, firstName:string, lastName:string, studprog:string, studyear:number };

  constructor() { }

  addNewStudent(stnum:number, fname:string, lname:string, program:string, yearlvl:number){
    this.shNameObject = {
        studnum:stnum,
        firstName:fname,
        lastName:lname,
        studprog:program,
        studyear:yearlvl
    }

  this.shCollection.push(this.shNameObject);
  }

  getStudent(): Array<object>{
    return this.shCollection;
  }

}