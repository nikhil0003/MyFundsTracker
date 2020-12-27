import { Injectable } from '@angular/core';
import { interval ,Subscription} from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {LoginserviceService} from './loginservice.service';


@Injectable({
  providedIn: 'root'
})
export class TokenrefreshService {
  token : string ;
  mySubscription: Subscription;
  constructor(private loginserviceService : LoginserviceService) {
    // this.mySubscription= interval(1000).subscribe((x =>{
    //   this.doStuff();
  // }));
   }



    // doStuff(){
    //     //doing stuff with unsubscribe at end to only run once
    //     console.log("called");
    // }
  
  
}
