import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rajasthan-package',
  templateUrl: './rajasthan-package.component.html',
  styleUrls: ['./rajasthan-package.component.css']
})
export class RajasthanPackageComponent implements OnInit {
  phone='+919631131636';
  public packages:any[]=[
    {"pic":"rajasthan1","name":"UDAIPUR AND MOUNT ABU SIGHTSEEING","duration":"02 Nights / 03 Days","price":"Rs.4,500/- Per Person","cover":"Udaipur And Mount Abu"},
    {"pic":"rajasthan2","name":"JAIPUR, JODHPUR, UDAIPUR AND MOUNT ABU SIGHTSEEING","duration":"04 Nights / 05 Days","price":"Rs.5,500/- Per Person","cover":"Jaipur, Jodhpur, Udaipur And Mount Abu"},
    {"pic":"rajasthan3","name":"JAIPUR, JODHPUR, AJMER, PUSHKAR AND JAISALMER SIGHTSEEING","duration":"05 Nights / 06 Days","price":"Rs.7,500/- Per Person","cover":"Jaipur, Jodhpur, Ajmer, Pushkar And Jaisalmer"},
    {"pic":"rajasthan4","name":"JAIPUR AND RANTHAMBORE SIGHTSEEING","duration":"02 Nights / 03 Days","price":"Rs.3,500/- Per Person","cover":"Jaipur and Ranthambore"},
    {"pic":"rajasthan5","name":"JAIPUR JODHPUR AJMER PUSHKAR SIGHTSEEING","duration":"3 Nights / 4 days","price":"Rs.5,500/- Per Person","cover":"Jaipur, Jodhpur, Ajmer, Pushkar"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
