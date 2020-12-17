import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {

  public cargos: any;

  public cargo: any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getCargos().subscribe((data:any)=>{
      this.cargos = data;
    });
  }

  cadastraCargo(){
    this.apiService.cadastraCargo(this.cargo)
  };

}
