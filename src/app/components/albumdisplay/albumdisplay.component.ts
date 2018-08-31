import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-albumdisplay',
  templateUrl: './albumdisplay.component.html',
  styleUrls: ['./albumdisplay.component.css']
})
export class AlbumdisplayComponent implements OnInit {

  @Input()
  albumList : any[];

  constructor() { }

  ngOnInit() {
  }

}
