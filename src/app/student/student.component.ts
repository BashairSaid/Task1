import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent {

  public Students = [
      {"NAME": "Bashair" , "Email":"bs.aslshuhoumi@gmail.com" , "Marks":99},
      {"NAME": "Asma" , "Email":"asma@gmail.com" , "Marks":50},
      {"NAME": "AFnan" , "Email":"af.asls@gmail.com" , "Marks":30},
      {"NAME": "Bashair" , "Email":"bs.aslshuhoumi@gmail.com" , "Marks":70}
  ]

}


