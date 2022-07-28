import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private st:StudentService) { }
  public stdForm= new FormGroup({
    rollno:new FormControl(0),
    name:new FormControl,
    age:new FormControl(0),
    city:new FormControl
  });

  ngOnInit() {
  }
  add(){
    console.log(this.stdForm.value);
this.st.addStudent(this.stdForm.value)
  }
}
