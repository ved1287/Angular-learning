import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private st:StudentService) { }
  public student;
  ngOnInit() {
  }
  find(rollno){
    this.student=this.st.findStudent(rollno);
      }
}
