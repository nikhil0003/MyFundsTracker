import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError ,} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  myheader : HttpHeaders = new HttpHeaders();
  mydbusername: string = 'mynosql';
  mydbpass : string = "Nikhil@123";
  
  
  constructor(private http: HttpClient) { 

  }

  
  // --url https://$ASTRA_DB_ID-$ASTRA_DB_REGION.apps.astra.datastax.com/api/rest/v1/auth \
  // --header 'Content-Type: application/json' \
  // --data '{
  //    "username":"'$ASTRA_DB_USERNAME'", "password":"'$ASTRA_DB_PASSWORD'"}'

//   export ASTRA_DB_ID=03befce2-8ef1-40ad-9c98-0c08a302ee94
// export ASTRA_DB_REGION=us-east1
// export ASTRA_DB_USERNAME=mynosql
// export ASTRA_DB_KEYSPACE=mynosql
// export ASTRA_DB_PASSWORD=<database_password>

  logincall(){
    const body = {
      'username' : this.mydbusername,
      'password': this.mydbpass
    }
    this.myheader.set('content-type','application/json');
   return this.http.post('https://03befce2-8ef1-40ad-9c98-0c08a302ee94-us-east1.apps.astra.datastax.com/api/rest/v1/auth',body,{
    headers: this.myheader
 });
  }
}
