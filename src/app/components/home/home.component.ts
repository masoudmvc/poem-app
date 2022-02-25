import { Component, OnInit } from '@angular/core';
import { PoetryDbAPIService } from 'src/app/shared/api-services/poetrydb.service';
import { PoemService } from 'src/app/shared/business-services/poem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private poetryApiService: PoetryDbAPIService,
    private poenService: PoemService) { }

  ngOnInit(): void {
    this.poetryApiService.FetchRandomPoems(20).subscribe(res => {
      this.poenService.list = res;
      console.log(this.poenService.list);
    }, err => {
      console.log(err);
    })
  }

}
