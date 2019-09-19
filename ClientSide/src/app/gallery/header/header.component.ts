import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { HttpClient } from "@angular/common/http";
import { ImagesService } from 'src/app/services/images.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScroll:boolean=false;
  constructor(public scrollService:ScrollService,public _http: HttpClient,public imageService:ImagesService) { }
  public get http(): HttpClient {
    return this._http;
  }
public set http(value: HttpClient) {
  this._http = value;
}
  topPosToStartShowing = 100;

  ngOnInit() {
  }



  // scroll------------------------

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    // if (scrollPosition >= this.topPosToStartShowing) {
    //   this.isScroll = true;
    // } else {
    //   this.isScroll = false;
    // }
      
    if (scrollPosition==0) {
      this.isScroll = false;
    } else {
      this.isScroll = true;
    }
  }

  // TODO: Cross browsing
  // gotoTop() {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }
}

