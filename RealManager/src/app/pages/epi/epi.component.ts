import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-epi',
  templateUrl: './epi.component.html',
  styleUrls: ['./epi.component.css']
})
export class EpiComponent implements OnInit {

  public epis : any;

  public epi : any;
  public categoria : any;
  public corpo : any;
  public numero : any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getEpis().subscribe((data:any)=>{
      this.epis = data;
    });
  };

  cadastraEPI(){
    this.apiService.cadastraEPI(this.epi, this.categoria, this.corpo, this.numero)
  };


}
