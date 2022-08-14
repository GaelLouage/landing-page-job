import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Jobs } from 'src/app/models/jobs';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
@Input() img:string ="";
//mid container
//top
@Input() company:string = "";
@Input() newT:boolean =false;
@Input() featured:boolean = false;
//mid
@Input() position:string = "";
//mid right
@Input() languages:string[] = [];
@Input() tools:string[] = [];
//bottom
@Input()  postedAt: string ="";
@Input()  contract: string ="";
@Input()  location: string ="";
// //styles onlick
 @Input() styles:object= {};
 @Input() styleTwo:object= {};
 @Input() isJob:Jobs = {} as Jobs;
 @Input() isJobTwo:Jobs = {} as Jobs;

public block:string ="block";
public none:string = "none";
@Output() getInfo = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public getItem(event:any) {
    //this.isClicked = !this.isClicked;
    this.getInfo.emit(event);
  }
}
