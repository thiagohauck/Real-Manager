import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

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
  public apontamentosC: any;
  public apontamentosP: any;
  public operacoesC: any;
  public operacoesP: any;
  public componentesC: any;
  public componentesP: any;
  public epiC: any;

  public idA: any;
  public status = "Fechada";

  constructor(private apiserviceService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiserviceService.getOmCAn().subscribe((data: []) =>{
      this.omsC = data;
    });
    this.apiserviceService.getOmPAn().subscribe((data: []) =>{
      this.omsP = data;
    });
  }

  detalhesC(omsC){
    this.apiserviceService.detalhesC(omsC).subscribe((data:any)=>{
      this.insertC = data;
    });
    this.apiserviceService.getApontamentosCorretiva(omsC).subscribe((data:any)=>{
      this.apontamentosC = data;
    });
    this.apiserviceService.getOperacoesCorretiva(omsC).subscribe((data:any)=>{
      this.operacoesC = data;
    });
    this.apiserviceService.getComponentesCorretiva(omsC).subscribe((data:any)=>{
      this.componentesC = data;
    });
  };

  detalhesP(omsP){
    this.apiserviceService.detalhesP(omsP).subscribe((data:any)=>{
      this.insertP = data;
    });
    this.apiserviceService.getApontamentosPreventiva(omsP).subscribe((data:any)=>{
      this.apontamentosP = data;
    });
    this.apiserviceService.getOperacoesPreventiva(omsP).subscribe((data:any)=>{
      this.operacoesP = data;
    });
    this.apiserviceService.getComponentesPreventiva(omsP).subscribe((data:any)=>{
      this.componentesP = data;
    });
  };

  finalizaC(ins){
    this.apiserviceService.finalizaC(ins.idOC, this.status)
  };

  finalizaP(ins){
    this.apiserviceService.finalizaP(ins.idOP, this.status);
  };


}
