import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  submitted=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    console.warn(data);
    this.http.post('https://formspree.io/f/xjvzvnek',data)
    .subscribe((result)=>{
      this.submitted=true;
      console.warn("result",result,this.submitted)
    })
    console.log(data);
  }
}
