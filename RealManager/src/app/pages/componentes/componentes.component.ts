import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  public componentes : any;

  public novoComponente : any;
  public unidademedida : any;
  public valor : any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getComponentes().subscribe((data:any)=>{
      this.componentes = data;
    });
  }

  cadastraComponente(){
    this.apiService.cadastraComponentes(this.novoComponente, this.unidademedida, this.valor)
  };

}
