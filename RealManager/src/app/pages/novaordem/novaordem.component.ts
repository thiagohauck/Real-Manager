import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novaordem',
  templateUrl: './novaordem.component.html',
  styleUrls: ['./novaordem.component.css']
})
export class NovaordemComponent implements OnInit {

  public numeroordemC: any;
  public numeronotaC: any;
  public tituloC: any;
  public descricaonotaC: any;
  public solicitanteC: any;
  public emissaoC: any;
  public descricaoproblemaC: any;
  public responsavelC: any;
  public localdeinstalacaoC: any;
  public equipamentoC: any;
  public equipamentoSuC: any;
  public prioridadeC: any;
  public requerparadaC: any;
  public horainicioproC: any;
  public horafimproC: any;
  public iniciopC: any;
  public fimpC: any;
  public inicioproC: any;
  public fimproC: any;
  public tipodemanutencaoC = 'Corretiva';
  public statusordemC = 'Aberta';
  

  public manutentor: any = [];
  public local: any = [];
  public equipamentoSu: any = [];
  public equipamento: any = [];

  constructor(public apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getManutentor().subscribe((data:any)=>{
      this.manutentor = data;
    });
    this.apiService.getLocal().subscribe((data:any)=>{
      this.local = data;
    });
    this.apiService.getEquipamento().subscribe((data:any)=>{
      this.equipamento = data;
    });
    this.apiService.getEquipamentoSu().subscribe((data:any)=>{
      this.equipamentoSu = data;
    });
  }

  cadastraOrdemC(){
    this.apiService.cadastraOrdemC(this.numeroordemC, this.numeronotaC, this.tituloC, this.descricaonotaC, this.solicitanteC, this.emissaoC, this.descricaoproblemaC, this.responsavelC, this.localdeinstalacaoC, this.equipamentoC, this.equipamentoSuC, this.prioridadeC, this.requerparadaC, this.horainicioproC, this.horafimproC, this.iniciopC, this.fimpC, this.inicioproC, this.fimproC, this.tipodemanutencaoC, this.statusordemC)
  };

}
