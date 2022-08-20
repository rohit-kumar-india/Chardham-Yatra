import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  submitted=false;
  phone='+919631131636';
  email='rk2146.rohit@gmail.com';
  address='Behind Khetan Super Market, Birla Mandir Rd, Subjibagh, Bakarganj, Patna, Bihar 800004';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    console.warn(data);
    this.http.post('https://formspree.io/f/xbjbjnar',data)
    .subscribe((result)=>{
      this.submitted=true;
      console.warn("result",result)
    })
    console.log(data);
  }
}
