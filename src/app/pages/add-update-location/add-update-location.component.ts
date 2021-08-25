import { Component, VERSION } from '@angular/core';
import { LocationService } from '../../location.service';

@Component({
  selector: 'add-update',
  template:
    '<create-edit-location [locationData]="location" (locationEvent)="addUpdateLocation($event)"> </create-edit-location>'
})
export class AddUpdateLocationComponent {
  locationlist: any;
  location: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.location = JSON.parse(localStorage.getItem('edit') || '{}');
    console.log(this.location);
  }

  addUpdateLocation(newLocation: any) {
    if(this.location) {
      this.locationService.insertQuery(newLocation);
    } else {
      this.locationService.updateQuery(newLocation);
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('edit');
  }

}
