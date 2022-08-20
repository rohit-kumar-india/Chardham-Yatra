import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted=false;
  title = 'Chardham Yatra';
  packageType:any='';
  package:any='';

  constructor(private http:HttpClient) { }

  onSubmit(data: any){
    console.warn(data);
    this.http.post('https://formspree.io/f/xqkjkrdq',data)
    .subscribe((result)=>{
      this.submitted=true;
      console.warn("result",result)
    })
    console.log(data);
  }
}
