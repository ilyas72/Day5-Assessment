import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-albumentry',
  templateUrl: './albumentry.component.html',
  styleUrls: ['./albumentry.component.css']
})

export class AlbumentryComponent implements OnInit {
  @Input()
  albumList: any[];

  processForm(form: NgForm) {
    console.log("button clicked");
    console.log("album -> ",this.albumList);
    
    this.albumList.push(form.value);
    console.log(form.value);
    form.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
