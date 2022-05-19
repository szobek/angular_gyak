import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {
series:Movie[]=[]
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fn2()
  }

  
  async fn2(){
    await this.apiService.fetchSeries().subscribe(data =>{
      this.series = data as Movie[];
    })
    
  }
}
