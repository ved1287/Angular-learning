import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  public students=[];
  addStudent(student){
    this.students.push(student);
    console.log(this.students);
  
  }
  deleteSudent(rollno){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollno=rollno){
        this.students.splice(i,1);
      }
  }
  }
  getAllStudents(){
    return this.students;
  }
  findStudent(rollno){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollno=rollno){
        return this.students[i];
      }
     
    }
    return null;
   
  }
  editStudent(student){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollno=student.rollno){
        this.students[i]=student;
  }
}
console.log(this.students)
  }
  update(student){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollno=student.rollno){
        this.students[i]=student;
      }
     
    }
    
   
  }
  }

