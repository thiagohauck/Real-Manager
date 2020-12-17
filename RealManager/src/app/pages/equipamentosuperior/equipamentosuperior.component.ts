import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-equipamentosuperior',
  templateUrl: './equipamentosuperior.component.html',
  styleUrls: ['./equipamentosuperior.component.css']
})
export class EquipamentosuperiorComponent implements OnInit {

  public equipamentoS: any;

  public equipamentosuperior: any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getEquipamentoSu().subscribe((data:any)=>{
      this.equipamentoS = data;
    });
  }

  cadastraEquipamentoS(){
    this.apiService.cadastraEquipamentoS(this.equipamentosuperior)
  };

}
