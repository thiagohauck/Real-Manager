import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*Gerenciamentos*/
  /*Epi´s*/
  /*Lista de Epi´s*/
  public getEpis(): Observable<any>{
    return this.http.get(this.apiUrl + '/getEPI')
  };
  /*Cadastra Epi*/
  public cadastraEPI(epi, catergoria, corpo, numero){
    let EPIS: any = null;

    EPIS={
      epi: epi,
      categoria: catergoria,
      corpo: corpo,
      numero: numero
    };

    this.http.post(this.apiUrl + '/cadastraEPI', EPIS).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Equipamento de Proteção Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };
  
  /*Usuários*/
  public getUSU(): Observable<any>{
    return this.http.get(this.apiUrl + '/getUSU')
  };

  /*Cadastra Usuario*/
  public cadastraUsuario(nome, senha, cracha, nivel, cargo){
    let Usuarios: any = null;

    Usuarios={
      nome: nome,
      senha: senha,
      cracha: cracha,
      nivel: nivel,
      cargo: cargo
      
    };

    this.http.post(this.apiUrl + '/cadastroUSU', Usuarios).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Usuário Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };

  /*Alterar Usuario*/
  public alterarUsuario(nome, senha, cracha, nivel, cargo, idA){
    const usuarios = {
      nome: nome,
      senha: senha,
      cracha: cracha,
      nivel: nivel,
      cargo: cargo
    };

    this.http.post(this.apiUrl + '/alteraUSU/' + idA, usuarios).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário alterado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };


  /*Niveis*/
  public getNiveis(): Observable<any>{
    return this.http.get(this.apiUrl + '/getNiveis')
  };
  /*Cadastro de Níveis*/
  public cadastraNivel(niveldeacesso){
    let Niveis: any = null;

    Niveis={
      niveldeacesso: niveldeacesso
    };

    this.http.post(this.apiUrl + '/cadastraNivel', Niveis).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Nível de Acesso Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };
  /*Componentes*/
  public getComponentes(): Observable<any>{
    return this.http.get(this.apiUrl + '/getComponentes')
  };
  /*Cadastro de Componentes*/
  public cadastraComponentes(componente, unidademedida, valor){
    let Componentes: any = null;

    Componentes={
      componente: componente,
      unidademedida: unidademedida,
      valor: valor
    };

    this.http.post(this.apiUrl + '/cadastraComponente', Componentes).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Componente Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        }); 
      }
    );
  };
  /*Cargos*/
  public getCargos(): Observable<any>{
    return this.http.get(this.apiUrl + '/getCargos')
  };
  /*Cadastro de Cargos*/
  public cadastraCargo(cargo){
    let Cargos: any = null;

    Cargos={
      cargo: cargo
      
    };

    this.http.post(this.apiUrl + '/cadastroCargos', Cargos).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Cargo Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };

  /*Cadastro de Equipamentos Superiores*/
  public cadastraEquipamentoS(equipamentosuperior){
    let Equipamentos: any = null;

    Equipamentos={
      equipamentosuperior: equipamentosuperior
      
    };

    this.http.post(this.apiUrl + '/cadastroEquipamentoSu', Equipamentos).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Equipamento Superior Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };
  /*Cadastro de Equipamentos*/
  public cadastraEquipamento(equipamento){
    let Equipamentos: any = null;

    Equipamentos={
      equipamento: equipamento
      
    };

    this.http.post(this.apiUrl + '/cadastroEquipamentos', Equipamentos).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Novo Equipamento Cadastrado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };

  /*Informações de Cadastro*/
  /*Manutentores*/
  public getManutentor(): Observable<any>{
    return this.http.get(this.apiUrl + '/getmanutentor');
  };

  /*Locais*/
  public getLocal(): Observable<any>{
    return this.http.get(this.apiUrl + '/getlocal');
  };

  /*Equipamento*/
  public getEquipamento(): Observable<any>{
    return this.http.get(this.apiUrl + '/getequipamento');
  };

  /*Equipamento Superior*/
  public getEquipamentoSu(): Observable<any>{
    return this.http.get(this.apiUrl + '/getes');
  };

  /*Ordens Corretivas*/
  /*Cadastro de Ordem Corretiva*/
  public cadastraOrdemC(numeroordemC, numeronotaC, tituloC, descricaonotaC, solicitanteC, emissaoC, descricaoproblemaC, responsavelC, localdeinstalacaoC, equipamentoC, equipamentoSuC, prioridadeC, requerparadaC, iniciopC, fimpC, inicioproC, fimproC, horainicioproC, horafimproC, tipodemanutencaoC, statusordemC){
    let ordemC: any = null;

    ordemC={
      numeroordemC: numeroordemC,
      numeronotaC: numeronotaC,
      tituloC: tituloC,
      descricaonotaC: descricaonotaC,
      solicitanteC: solicitanteC,
      emissaoC: emissaoC,
      descricaoproblemaC: descricaoproblemaC,
      responsavelC: responsavelC,
      localdeinstalacaoC: localdeinstalacaoC,
      equipamentoC: equipamentoC,
      equipamentosuperiorC: equipamentoSuC,
      prioridadeC: prioridadeC,
      requerparadaC: requerparadaC,
      iniciopC: iniciopC,
      fimpC: fimpC,
      inicioproC: inicioproC,
      fimproC: fimproC,
      horainicioproC: horainicioproC,
      horafimproC: horafimproC,
      tipodemanutencaoC: tipodemanutencaoC,
      statusordemC: statusordemC
      
    };

    this.http.post(this.apiUrl + '/cadastroOrdemCorretiva', ordemC).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nova Ordem Cadastrada!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };
  /*Informações de Alteração de Usuário*/
  informacoesAlterarUsuario(id): Observable<any>{
    const infoAltUsu = {
      idUS: id.idUS
    };
    return this.http.get(this.apiUrl + '/detalhesUsuarios/' + id.idUS);
  };
  /*Detalhes*/
  detalhesC(id): Observable<any>{
    const omsC = {
      idOC: id.idOC
    };
    return this.http.get(this.apiUrl + '/detalhesCorretiva/' + id.idOC);
  };
  /*Abertas*/
  public getOmC(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemCorretiva');
  };
  /*Análise*/
  public getOmCAn(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemCorretivaAnalise');
  };
  /*Andamento*/
  public getOmCA(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemCorretivaAndamento');
  };
  /*Fechadas*/
  public getOmCF(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemCorretivaFechada');
  };
  
  
  /*Ordens Preventivas*/
  /*Finaliza Ordem Análise*/
  finalizaP(idOP, status){
    let fechandoOMP: any = null;

    fechandoOMP={
      status: status
    };

    this.http.post(this.apiUrl + '/finalizaOMP/' + idOP, fechandoOMP).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ordem Finalizada!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }; 
  /*Cadastro de Ordens Preventivas*/
  public cadastraOrdemP(numeroordemP, tituloP, solicitanteP, emissaoP, descricaoproblemaP, responsavelP, localdeinstalacaoP, equipamentoP, equipamentoSuP, prioridadeP, requerparadaP, iniciopP, fimpP, inicioproP, fimproP, horainicioproP, horafimproP, tipodemanutencaoP, statusordemP){
    let ordemP: any = null;

    ordemP={
      numeroordemP: numeroordemP,
      tituloP: tituloP,
      solicitanteP: solicitanteP,
      emissaoP: emissaoP,
      descricaoproblemaP: descricaoproblemaP,
      responsavelP: responsavelP,
      localdeinstalacaoP: localdeinstalacaoP,
      equipamentoP: equipamentoP,
      equipamentosuperiorP: equipamentoSuP,
      prioridadeP: prioridadeP,
      requerparadaP: requerparadaP,
      iniciopP: iniciopP,
      fimpP: fimpP,
      inicioproP: inicioproP,
      fimproP: fimproP,
      horainicioproP: horainicioproP,
      horafimproP: horafimproP,
      tipodemanutencaoP: tipodemanutencaoP,
      statusordemP: statusordemP
      
    };

    this.http.post(this.apiUrl + '/cadastroOrdemPreventiva', ordemP).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nova Ordem Cadastrada!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };

  /*Detalhes*/
  detalhesP(id): Observable<any>{
    const omsC = {
      idOP: id.idOP
    };
    return this.http.get(this.apiUrl + '/detalhesPreventiva/' + id.idOP)
  };

  /*Abertas*/
  public getOmP(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemPreventiva');
  };
  /*Análise*/
  public getOmPAn(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemPreventivaAnalise');
  };
  /*Apontamentos Preventiva da Análise*/
  getApontamentosPreventiva(id): Observable<any>{
    const apontamentos = {
      idOP: id.idOP
    };
    return this.http.get(this.apiUrl + '/getApontamentosPreventiva/' + id.idOP)
  };

  finalizaC(idOC, status){
    let fechandoOMC: any = null;

    fechandoOMC={
      status: status
    };

    this.http.post(this.apiUrl + '/finalizaOMC/' + idOC, fechandoOMC).subscribe(
      (data:any)=>{
        setTimeout(function(){document.location.reload(true);; }, 1500);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ordem Finalizada!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocorreu um Erro!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  };
  /*Operações Corretiva da Análise*/
  getOperacoesPreventiva(id): Observable<any>{
    const operacoesP = {
      idOP: id.idOP
    };
    return this.http.get(this.apiUrl + '/getOperacoesPreventiva/' + id.idOP)
  };
  /*Componentes Preventiva da Análise*/
  getComponentesPreventiva(id): Observable<any>{
    const componentes = {
      idOP: id.idOP
    };
    return this.http.get(this.apiUrl + '/getComponentesPreventiva/' + id.idOP)
  };
  
  /*Apontamentos Corretiva da Análise*/
  getApontamentosCorretiva(id): Observable<any>{
    const apontamento = {
      idOC: id.idOC
    };
    return this.http.get(this.apiUrl + '/getApontamentosCorretiva/' + id.idOC)
  };
  /*Operações Corretiva da Análise*/
  getOperacoesCorretiva(id): Observable<any>{
    const operacoes = {
      idOC: id.idOC
    };
    return this.http.get(this.apiUrl + '/getOperacoesCorretiva/' + id.idOC)
  };
  /*Componentes Corretiva da Análise*/
  getComponentesCorretiva(id): Observable<any>{
    const epicorretiva = {
      idOC: id.idOC
    };
    return this.http.get(this.apiUrl + '/getComponentesCorretiva/' + id.idOC)
  };
  /*Componentes Corretiva da Análise*/
  getEPICorretiva(id): Observable<any>{
    const componente = {
      idOC: id.idOC
    };
    return this.http.get(this.apiUrl + '/getComponentesCorretiva/' + id.idOC)
  };
  /*Andamento*/
  public getOmPA(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemPreventivaAndamento');
  };
  /*Fechadas*/
  public getOmPF(): Observable<any>{
    return this.http.get(this.apiUrl + '/getOrdemPreventivaFechada');
  };

  /*Teste*/
  /*Abertas*/
  public getTeste(): Observable<any>{
    return this.http.get(this.apiUrl + '/getTeste');
  };
}
