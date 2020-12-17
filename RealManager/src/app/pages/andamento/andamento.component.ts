import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-andamento',
  templateUrl: './andamento.component.html',
  styleUrls: ['./andamento.component.css']
})
export class AndamentoComponent implements OnInit {

  public omsP: any;
  public omsC: any;
  public omsPA: any;
  public omsCA: any;
  public omsPF: any;
  public omsCF: any;
  public teste: any;
  data=[];


  public insertC: any;
  public insertP: any;

  constructor(private apiserviceService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiserviceService.getOmCA().subscribe((data: []) =>{
      this.omsC = data;
    });
    this.apiserviceService.getOmPA().subscribe((data: []) =>{
      this.omsP = data;
    });
  }

  detalhesC(omsC){
    this.apiserviceService.detalhesC(omsC).subscribe((data:any)=>{
      this.insertC = data;
    });
  };

  detalhesP(omsP){
    this.apiserviceService.detalhesP(omsP).subscribe((data:any)=>{
      this.insertP = data;
    });
  };

}
