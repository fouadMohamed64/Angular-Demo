import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads: string[] = ['Ad one' , 'Ad Two' , 'Ad Three' , 'Ad Four'];

  constructor() { }

  getAds(){
    return new Observable<string>((observer)=>{
      let i = 0;
      let interval = setInterval(() => {
        console.log('Interval');

        observer.next(this.ads[i]);
        i++;

        if (i == this.ads.length) {
          observer.complete();
        }


        if (this.ads[i] == '') {
          observer.error('Error Occur');
        }
        
        
      }, 2000);

      return {
        unsubscribe(){
          console.log('form un subscribe function ');
          clearInterval(interval)
        }
      }

    })
  }

  getAds2(){
    return from(this.ads)
  }

  getAds3(){
    return of(...this.ads)
  }

}
