import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/models/jobs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
public languages:string[] = ["HTML","CSS","React","Python","Sass","Ruby","Vue","Angular","Django","Frontend","Senior","RoR"];
public jobList:Jobs[] = []as Jobs[];
 public tempJob:Jobs = {} as Jobs;
 public isSearching:string = "";
 //style
 public border = {
  transition: "0.3s",
  boxShadow: "-6px 0px 0px 0px rgba(91,164,164,0.84)"
};
  public noborder = {
    boxShadow: "0px 5px 15px 1px rgba(91,164,164,0.84)"
  };

  public isClickedCard:boolean = false;

  constructor(public jobservice:JobService) {
  
  }

  ngOnInit(): void {
    if(this.isSearching === "") {
      this.refreshList();
     } else {
      this.jobList = this.jobList.filter(x => x.languages.includes(this.isSearching) || x.tools.includes(this.isSearching));
     }
  }
 public getCard(item:Jobs) {
      this.tempJob = item;
 }
 getLanguage(event:any) {
   this.isSearching = event.target.value;
  }
 public filteredList():Jobs[]{
  if(this.isSearching === "") {
    
    return this.jobList.map(x => x);
   } else {
    return this.jobList.filter(x => x.languages.includes(this.isSearching) || x.tools.includes(this.isSearching));
   }
 }
  public refreshList(){
    this.jobservice.getJobs().subscribe(data => {
      return this.jobList = data;
    })
  }
}
