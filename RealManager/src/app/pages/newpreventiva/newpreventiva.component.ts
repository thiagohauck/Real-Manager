import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpreventiva',
  templateUrl: './newpreventiva.component.html',
  styleUrls: ['./newpreventiva.component.css']
})
export class NewpreventivaComponent implements OnInit {

  public numeroordemP: any;
  public tituloP: any;
  public solicitanteP: any;
  public emissaoP: any;
  public descricaoproblemaP: any;
  public responsavelP: any;
  public localdeinstalacaoP: any;
  public equipamentoP: any;
  public equipamentoSuP: any;
  public prioridadeP: any;
  public requerparadaP: any;
  public horainicioproP: any;
  public horafimproP: any;
  public iniciopP: any;
  public fimpP: any;
  public inicioproP: any;
  public fimproP: any;
  public tipodemanutencaoP = 'Preventiva';
  public statusordemP = 'Aberta';

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

  cadastraOrdemP(){
    this.apiService.cadastraOrdemP(this.numeroordemP, this.tituloP, this.solicitanteP, this.emissaoP, this.descricaoproblemaP, this.responsavelP, this.localdeinstalacaoP, this.equipamentoP, this.equipamentoSuP, this.prioridadeP, this.requerparadaP, this.horainicioproP, this.horafimproP, this.iniciopP, this.fimpP, this.inicioproP, this.fimproP, this.tipodemanutencaoP, this.statusordemP)
  };

}
