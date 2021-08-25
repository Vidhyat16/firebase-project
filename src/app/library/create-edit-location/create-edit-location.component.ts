import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fields } from './fields';

@Component({
  selector: 'create-edit-location',
  templateUrl: './create-edit-location.component.html',
  styleUrls: ['./create-edit-location.component.css']
})
export class CreateEditLocationComponent implements OnInit {
  fields?: Fields;
  editEnabled = false;

  @Input ()
  type: any;

  @Input()
  locationData: any;

  @Output() locationEvent = new EventEmitter();

  locationForm: any;
  success = false;
  error: any;

  constructor() {}

  ngOnInit() {
    if (this.locationData) {
      this.editEnabled = true;
      this.fields = this.locationData;
    } else {
      this.editEnabled = false;
      this.fields = {
        name: null,
        zipCode: null,
        hours: null,
        mobileNumber: null,
        latitude: null,
        longitude: null,
        ticket: null
      };
    }
  }

  addUpdateLocation(data : any) {
    if(data.invalid) {
      alert("Please enter all fields");
    } else {
      this.locationEvent.emit(this.fields);
      data.reset();
      this.success = true;
    } 
  }

  ngOnDestroy() {
    localStorage.removeItem('update');
  }
  validate(data : any) {
    console.log(data)
  }
}
