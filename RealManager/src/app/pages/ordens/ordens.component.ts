import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';


@Component({
  selector: 'app-ordens',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {

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
    this.apiserviceService.getOmC().subscribe((data: []) =>{
      this.omsC = data;
    });
    this.apiserviceService.getOmP().subscribe((data: []) =>{
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
