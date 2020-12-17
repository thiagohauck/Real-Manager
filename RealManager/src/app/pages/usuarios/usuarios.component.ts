import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios : any;
  public niveis : any = [];
  public cargos : any = [];

  public nome : any;
  public senha : any;
  public cracha : any;
  public nivel : any;
  public cargo : any;

  public cargoA : any;
  public nomeA : any;
  public nivelA : any;
  public crachaA : any;
  public senhaA : any;
  public idA : any;

  // public informacoesAlteracaoUsuario : any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getUSU().subscribe((data:any)=>{
      this.usuarios = data;
    });
    this.apiService.getCargos().subscribe((data:any)=>{
      this.cargos = data;
    });
    this.apiService.getNiveis().subscribe((data:any)=>{
      this.niveis = data;
    });
  }

  cadastraUsuario() {
    this.apiService.cadastraUsuario(this.nome, this.senha, this.cracha, this.nivel, this.cargo)
  }

  alterarUsuario() {
    this.apiService.alterarUsuario(this.nomeA, this.senhaA, this.crachaA, this.nivelA, this.cargoA, this.idA);
  }

  informacoesAlterarUsuario(usuarios) {
    this.nivelA = usuarios.nivel;
    this.nomeA = usuarios.nome;
    this.crachaA = usuarios.cracha;
    this.cargoA = usuarios.cargo;
    this.idA = usuarios.idUS;

    // this.informacoesAlteracaoUsuario = [usuarios];

    // this.apiService.informacoesAlterarUsuario(usuarios).subscribe((data:any)=>{
    //   console.log(this.informacoesAlteracaoUsuario)
    // });
  };

}
