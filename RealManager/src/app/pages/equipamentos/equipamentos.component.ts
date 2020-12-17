import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  public equipamentos: any;

  public equipamento: any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getEquipamento().subscribe((data:any)=>{
      this.equipamentos = data;
    });
  }

  cadastraEquipamento(){
    this.apiService.cadastraEquipamento(this.equipamento)
  };

}
