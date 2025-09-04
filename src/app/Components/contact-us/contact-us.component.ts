import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdsService } from '../../Services/ads.service';
import { filter, last, skip, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit, OnDestroy {

  adsSubscription!: Subscription

  constructor(public adsService: AdsService) { }



  ngOnInit() {
    // this.adsSubscription = this.adsService.getAds().subscribe({
    //   next(data) {
    //     console.log(data)
    //   },
    //   error(error) {
    //     console.log(error)
    //   },
    //   complete() {
    //     console.log('Complelted...')
    //   }
    // })

    // this.adsService.getAds().subscribe((data)=>{
    //   console.log(data)
    // })

    // this.adsService.getAds2().subscribe((data)=>{
    //   console.log(data)
    // })

    this.adsService.getAds3().pipe(
      // last()
      // skip(2),
      // take(1)
      filter((ele) => ele.includes('Two'))
    ).subscribe((data) => {
      console.log(data)
    })



  }

  ngOnDestroy() {
    // this.adsSubscription.unsubscribe();
  }

}
