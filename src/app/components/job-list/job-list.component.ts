import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 public filterSearch:string[] = [];
 //filter
 public tempJobList:Jobs[] = []as Jobs[];
 public tempJobLoop:Jobs = {} as Jobs;
 //style
 public border = {
  boxShadow: "-6px 0px 0px 0px rgba(91,164,164,0.84)",
};
  public noborder = {
    boxShadow: "0px 5px 15px 1px rgba(91,164,164,0.84)"
  };

  public isClickedCard:boolean = false;

  constructor(public jobservice:JobService, public router:Router) {
  }
  ngOnInit(): void {
      this.refreshList();
  }
 public getCard(item:Jobs) {
      this.tempJob = item;
      //go to url after timeout (for css animation)
      setTimeout(() => {
        this.router.navigate(["jobDetail", item.id]);
      }, 1000);
 }
 getLanguage(event:any) {
  if(!this.filterSearch.includes(event.target.value)) {
    this.filterSearch.push(event.target.value);
  }
  console.log(this.filterSearch);
  }
 public filteredList():Jobs[]{
 this.tempJobList = [];
  if(this.filterSearch.length < 1) {
    return this.jobList;
   } else {
    // filtering check if exists in tools and language
   for(let i = 0; i < this.filterSearch.length;i++) {
     for(let j = 0; j < this.jobList.length;j++){
      if(this.jobList[j].languages.includes(this.filterSearch[i]) || this.jobList[j].tools.includes(this.filterSearch[i])) {
        this.tempJobList.push(this.jobList[j]);
      }
     }
   }
  return this.tempJobList;
   }
 }
  public refreshList(){
    this.jobservice.getJobs().subscribe(data => {
       this.jobList = data;
    })
  }
  public resetJobs( filter:any, def:any) {
    filter.value = def.value;
    this.jobservice.getJobs().subscribe(data => {
      this.jobList = data;
   })
    this.filterSearch = [];
  }

  public deleteFilterItem(item:string){
   this.filterSearch = this.filterSearch.filter(x=> x != item);
  }
}
