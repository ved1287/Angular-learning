import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private st:StudentService) { }
  public stdForm=new FormGroup({
    rollno:new FormControl(0),
    name:new FormControl(),
    age:new FormControl(0),
    city:new FormControl(),

  });

  ngOnInit() {
  }
  public student;
  edit(rollno){
    this.student=this.st.findStudent(rollno);
    this.stdForm.setValue({
      rollno:this.student.rollno,
      name:this.student.name,
      age:this.student.age,
      city:this.student.city,
    })
  }
  update(){
    console.log(this.stdForm.value);
    this.st.update(this.stdForm.value)
  }

}
