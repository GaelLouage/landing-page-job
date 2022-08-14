import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/models/jobs';
import { JobService } from 'src/app/services/job.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
 
public newT:boolean =false;
public featured:boolean = false;
public job:any;
constructor(public route:ActivatedRoute, public jobService:JobService, public router:Router) { }

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        this.jobService.getJobs().subscribe(data => { 
          this.job = data.find(x => x.id == params.id);
        });
       });
    }
    public goBack():void {
      this.router.navigate(['jobList']);
    }
}
