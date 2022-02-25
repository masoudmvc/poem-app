import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private poenService: PoemService,
    private router: Router) { }

  ngOnInit(): void { }

  fetchPoems() {
    this.poetryApiService.FetchRandomPoems(20).subscribe(res => {
      this.poenService.list = res;
      this.router.navigate(['/list']/*, {relativeTo: this.route}*/);
    }, err => {
      console.log(err);
      alert('error fetching data!');
    })
  }

}
