import { Component, VERSION } from '@angular/core';
import { LocationService } from '../../location.service';

@Component({
  selector: 'location-view',
  template:
    '<location-list [locationlist]="locationlist" (locationEvent)="editEvent($event);delete($event)" redirection="add-update-location"></location-list>'
})
export class LocationViewComponent {
  locationlist: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getQuery().subscribe(res => {
      this.locationlist = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        };
      });
    });
  }
  editEvent(data: any) {
    localStorage.setItem('edit', JSON.stringify(data));
  }

  delete(data: any)  {
    this.locationService.deleteQuery(data);
  }
}
