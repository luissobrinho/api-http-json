# api-http-json

Api para teste de entrevista

Clone ou baixe esse projeto: 

``` shell
git clone https://github.com/luissobrinho/api-http-json.git
cd api-http-json/
```


Depois execute os seguintes comandos:

``` shell
npm i
npm start
```

O pojeto estará publicado em `http://localhost:8080/api/*`

A API tem o seguintes endpoints:

```
GET    /pacientes
GET    /pacientes/1
POST   /pacientes
PUT    /pacientes/1
PATCH  /pacientes/1
DELETE /pacientes/1
```

Para filtros:

```
GET /pacientes?cns=898002940850595
```

OBS.: O filtro serve para todos os campos

# Paciente Model

``` json
{
    "id": 1,
    "nome": "SEVERINO FAUSTINO",
    "cns": "898002940850595",
    "cpf": "405.510.380-80",
    "nomeMae": "AMALIA COELHO DE MELO",
    "sexo": "MASCULINO",
    "dataNascimento": "1938-06-25T03:00:00.000Z",
    "telefone": "(82) 99999-9999",
    "cidadeNascimento": "Maceió",
    "enderecos": [{
        "cep": "57075-640",
        "logradouro": "Rua Tenente Julival Casado Costa",
        "complemento": "",
        "bairro": "Santos Dumont",
        "localidade": "Maceió",
        "uf": "AL",
        "ibge": "2704302",
        "gia": "",
        "ddd": "82",
        "siafi": "2785"
        }
    ]
}
```