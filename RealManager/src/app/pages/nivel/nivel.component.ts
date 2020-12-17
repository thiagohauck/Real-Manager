import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {

  public niveis : any;

  public niveldeacesso : any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getNiveis().subscribe((data:any)=>{
      this.niveis = data;
    });
  }

  cadastraNivel(){
    this.apiService.cadastraNivel(this.niveldeacesso)
  };

}
