import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { Fields } from 'asmt-lib-al-nw';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;

  constructor(private router: Router, private locationService: LocationService) {}

  ngOnInit() {
    if (localStorage.getItem('status') == 'loggedIn') {
      this.loggedIn = true;
    }
    this.locationService.getLocationList().subscribe(res => {
      console.log(res)
    })
  }

  logout() {
    localStorage.removeItem('update');
    localStorage.removeItem('status');
    this.router.navigate(['login']);
  }
}
