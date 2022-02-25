import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoetryDbAPIService } from 'src/app/shared/api-services/poetrydb.service';
import { PoemService } from 'src/app/shared/business-services/poem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadingTofetch: boolean = false;

  constructor(
    private poetryApiService: PoetryDbAPIService,
    private poenService: PoemService,
    private router: Router) { }

  ngOnInit(): void { }

  fetchPoems() {
    this.loadingTofetch = true;
    this.poetryApiService.FetchRandomPoems(20).subscribe(res => {
      this.poenService.list = res;
      this.router.navigate(['/list']);
      this.loadingTofetch = false;
    }, err => {
      console.log(err);
      alert('error fetching data! check your internet connection and try again.');
      this.loadingTofetch = false;
    })
  }

}
