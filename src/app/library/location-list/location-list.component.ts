import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  @Input()
  public locationlist: any;

  @Input()
  public redirection: any;

  @Output() locationEvent = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  addLocation() {
    this.router.navigate([this.redirection]);
  }
  editLocation(data: any) {
    this.locationEvent.emit(data);
    this.router.navigate([this.redirection]);
  }
  deleteLocation(data: any) {
    this.locationEvent.emit(data);
  }
}
