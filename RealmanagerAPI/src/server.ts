import express = require('express');
import { MySQL } from './mysql';
import { MySQLFactory } from './mysql_factory';
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend : true}));

const port : number = 3000;
const mysql = require('mysql');

/*Ordens Preventivas*/
/*Detalhes Usuários*/
app.get("/detalhesUsuarios/:id", (req, res)=>{
    let sql = 'select * from usuarios where idUS=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Detalhes*/
app.get("/detalhesPreventiva/:id", (req, res)=>{
    let sql = 'select * from ordempreventiva where idOP=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Abrindo Ordem*/
app.post("/cadastroOrdemPreventiva", (req, res)=>{
    let sql = 'insert into ordempreventiva(titulo, solicitante, equipamentosuperior, equipamento, responsavel, tipodemanutencao, requerparada, iniciop, fimp, iniciopro, fimpro, emissao, prioridade, numeroordem, status, horainiciopro, horafimpro, descricaoproblema, localdeinstalacao) values(\'' + req.body.tituloP + '\', \'' + req.body.solicitanteP + '\', \'' + req.body.equipamentosuperiorP + '\', \'' + req.body.equipamentoP + '\', \'' + req.body.responsavelP + '\', \'' + req.body.tipodemanutencaoP + '\', \'' + req.body.requerparadaP + '\', \'' + req.body.iniciopP + '\', \'' + req.body.fimpP + '\', \'' + req.body.inicioproP + '\', \'' + req.body.fimproP + '\', \'' + req.body.emissaoP + '\', \'' + req.body.prioridadeP + '\', \'' + req.body.numeroordemP + '\', \'' + req.body.statusordemP + '\', \'' + req.body.horainicioproP + '\', \'' + req.body.horafimproP + '\', \'' + req.body.descricaoproblemaP + '\', \'' + req.body.localdeinstalacaoP + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro')
        }
    );
});
/*Abertas*/
app.get("/getOrdemPreventiva", (req, res)=>{
    let sql = 'select * from ordempreventiva where status="Aberta"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Análise*/
app.get("/getOrdemPreventivaAnalise", (req, res)=>{
    let sql = 'select * from ordempreventiva where status="Análise"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Andamento*/
app.get("/getOrdemPreventivaAndamento", (req, res)=>{
    let sql = 'select * from ordempreventiva where status="Andamento"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Fechada*/
app.get("/getOrdemPreventivaFechada", (req, res)=>{
    let sql = 'select * from ordempreventiva where status="Fechada"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
})

/*Ordens Corretivas*/
/*Detalhes*/
app.get("/detalhesCorretiva/:id", (req, res)=>{
    let sql = 'select * from ordemcorretiva where idOC=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Abrindo Ordem*/
app.post("/cadastroOrdemCorretiva", (req, res)=>{
    let sql = 'insert into ordemcorretiva(titulo, numeroordem, numeronota, descricaonota, solicitante, equipamentosuperior, equipamento, responsavel, tipodemanutencao, requerparada, prioridade, status, iniciop, fimp, iniciopro, fimpro, horainiciopro, horafimpro, emissao, descricaoproblema, localdeinstalacao) values(\'' + req.body.tituloC + '\', \'' + req.body.numeroordemC + '\', \'' + req.body.numeronotaC + '\', \'' + req.body.descricaonotaC + '\', \'' + req.body.solicitanteC + '\', \'' + req.body.equipamentosuperiorC + '\', \'' + req.body.equipamentoC + '\', \'' + req.body.responsavelC + '\', \'' + req.body.tipodemanutencaoC + '\', \'' + req.body.requerparadaC + '\', \'' + req.body.prioridadeC + '\', \'' + req.body.statusordemC + '\', \'' + req.body.iniciopC + '\', \'' + req.body.fimpC + '\', \'' + req.body.inicioproC + '\', \'' + req.body.fimproC + '\', \'' + req.body.horainicioproC + '\', \'' + req.body.horafimproC + '\', \'' + req.body.emissaoC + '\', \'' + req.body.descricaoproblemaC + '\', \'' + req.body.localdeinstalacaoC + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data: any)=>{
            res.send(data);
        },
        (error: any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Abertas*/
app.get("/getOrdemCorretiva", (req, res)=>{
    let sql = 'select * from ordemcorretiva where status="Aberta"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Análise*/
app.get("/getOrdemCorretivaAnalise", (req, res)=>{
    let sql = 'select * from ordemcorretiva where status="Análise"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Finaliza Preventiva Análise*/
app.post("/finalizaOMP/:id", (req, res)=>{
    let sql = 'update ordempreventiva set status=(\'' + req.body.status + '\') where idOP=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Apontamentos Preventiva Análise*/
app.get("/getApontamentosPreventiva/:id", (req, res)=>{
    let sql = 'select * from apontamentopreventiva where idOP=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Operações Preventiva Análise*/
app.get("/getOperacoesPreventiva/:id", (req, res)=>{
    let sql = 'select * from operacoespreventiva where fk_op=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Componentes Preventiva Análise*/
app.get("/getComponentesPreventiva/:id", (req, res)=>{
    let sql = 'select * from componentespreventiva where fkp_op=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Finaliza Corretiva Análise*/
app.post("/finalizaOMC/:id", (req, res)=>{
    let sql = 'update ordemcorretiva set status=(\'' + req.body.status + '\') where idOC=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Apontamentos Corretiva Análise*/
app.get("/getApontamentosCorretiva/:id", (req, res)=>{
    let sql = 'select * from apontamentos where idOC=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Operações Corretiva Análise*/
app.get("/getOperacoesCorretiva/:id", (req, res)=>{
    let sql = 'select * from operacoescorretiva where fk_oc=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Componentes Corretiva Análise*/
app.get("/getComponentesCorretiva/:id", (req, res)=>{
    let sql = 'select * from componentecorretiva where fkc_oc=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Andamento*/
app.get("/getOrdemCorretivaAndamento", (req, res)=>{
    let sql = 'select * from ordemcorretiva where status="Andamento"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Fechada*/
app.get("/getOrdemCorretivaFechada", (req, res)=>{
    let sql = 'select * from ordemcorretiva where status="Fechada"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

/*Usuários*/
app.get("/getmanutentor", (req, res)=>{
    let sql = 'select * from usuarios where cargo="Mecânico"';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*EPIS*/
/*Lista de Epis*/
app.get("/getEPI", (req, res)=>{
    let sql = 'select * from epi order by epi.epi asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Cadastro de Epis*/
app.post("/cadastraEPI", (req, res)=>{
    let sql = 'insert into epi(epi, categoria, corpo, numero) values(\'' + req.body.epi + '\', \'' + req.body.categoria + '\', \'' + req.body.corpo + '\', \'' + req.body.numero + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data: any)=>{
            res.send(data);
        },
        (error: any)=>{
            res.status(404).send("Error");
        }
    );
});

/*Niveis*/
/*Lista de Niveis*/
app.get("/getNiveis", (req, res)=>{
    let sql = 'select * from nivel order by nivel.nivel asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Cadastro de Níveis*/
app.post("/cadastraNivel", (req, res)=>{
    let sql = 'insert into nivel(nivel) values(\'' + req.body.niveldeacesso + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data: any)=>{
            res.send(data);
        },
        (error: any)=>{
            res.status(404).send("Error");
        }
    );
});



/*Cargos*/
/*Lista dos Cargos*/
app.get("/getCargos", (req, res)=>{
    let sql = 'select * from cargos order by cargos.cargo asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Cadastro dos Cargos*/
app.post("/cadastroCargos", (req, res)=>{
    let sql = 'insert into cargos(cargo) values(\'' + req.body.cargo + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data: any)=>{
            res.send(data);
        },
        (error: any)=>{
            res.status(404).send("Error");
        }
    );
});

/*Local de Instalação*/
app.get("/getlocal", (req, res)=>{
    let sql = 'select * from localdeinstalacao order by localdeinstalacao.localdeinstalacao asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

/**/

/*Usuários*/
/*Lista de Usuários*/
app.get("/getUSU", (req, res)=>{
    let sql = 'select * from usuarios order by usuarios.nome asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Cadastro Usuários*/
app.post("/cadastroUSU", (req, res)=>{
    let sql = 'insert into usuarios(nome, senha, cracha, nivel, cargo) values(\'' + req.body.nome + '\', \'' + req.body.senha + '\', \'' + req.body.cracha + '\', \'' + req.body.nivel + '\', \'' + req.body.cargo + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send('Error');
        }
    );
});

app.post("/alteraUSU/:id", (req, res)=>{
    let sql = 'update usuarios set nome=(\'' + req.body.nome + '\'), senha=(\'' + req.body.senha + '\'), cracha=(\'' + req.body.cracha + '\'), nivel=(\'' + req.body.nivel + '\'), cargo=(\'' + req.body.cargo + '\') where idUS=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

/*Equipamento Superior*/
/*Lista de Equipamentos Superiores*/
app.get("/getes", (req, res)=>{
    let sql = 'select * from equipamentosuperior order by equipamentosuperior.equipamentosuperior asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Cadastro de Equipamentos Superiores*/
app.post("/cadastroEquipamentoSu", (req, res)=>{
    let sql = 'insert into equipamentosuperior(equipamentosuperior) values(\'' + req.body.equipamentosuperior + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data: any)=>{
            res.send(data);
        },
        (error: any)=>{
            res.status(404).send("Error");
        }
    );
});

/*Equipamento*/
/*Lista dos Equipamentos*/
app.get("/getequipamento", (req, res)=>{
    let sql = 'select * from equipamento order by equipamento.equipamento asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});
/*Cadastro dos Equipamentos*/
app.post("/cadastroEquipamentos", (req, res)=>{
    let sql = 'insert into equipamento(equipamento) values(\'' + req.body.equipamento + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data: any)=>{
            res.send(data);
        },
        (error: any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Componentes*/
/*Lista de Componentes*/
app.get("/getComponentes", (req, res)=>{
    let sql = 'select * from componentes order by componentes.componente asc';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});
/*Cadastro de Componentes*/
app.post("/cadastraComponente", (req, res)=>{
    let sql = 'insert into componentes(componente, unidademedida, valor) values(\'' + req.body.componente + '\', \'' + req.body.unidademedida + '\', \'' + req.body.valor + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});

/*Assumindo Ordem*/
app.post("/alterastatusAC/:id", (req, res)=>{
    let sql = 'update ordemcorretiva set status=(\'' + req.body.status + '\') where idOC=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

app.post("/alterastatusAP/:id", (req, res)=>{
    let sql = 'update ordempreventiva set status=(\'' + req.body.status + '\') where idOP=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

/*Enviando Análise*/
app.post("/alterastatusAnC/:id", (req, res)=>{
    let sql = 'update ordemcorretiva set status=(\'' + req.body.status + '\') where idOC=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

app.post("/alterastatusAnP/:id", (req, res)=>{
    let sql = 'update ordempreventiva set status=(\'' + req.body.status + '\') where idOP=(\'' + req.params.id + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(405).send('Erro');
        }
    );
});

/*Cadastro Apontamento*/
app.post("/cadapontC", (req, res)=>{
    let sql = 'insert into apontamentos(apontamento, idOC, inicio, fim) values(\'' + req.body.apontamento + '\', \'' + req.body.idOC + '\', \'' + req.body.inicio + '\', \'' + req.body.fim + '\')';
    new MySQLFactory().getConnection().select(sql).subscribe(
        (data:any)=>{
            res.send(data);
        },
        (error:any)=>{
            res.status(404).send("Error");
        }
    );
});

app.listen(3000);