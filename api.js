const express = require('express')
const app = express()
const port = 3000
const pgp = require('pg-promise')(/* opotions */);
const db = pgp('postgres://postgres:Acd@2023@localhost:5432/cronogramas')
app.use(express.json());

const IP_1 = `172.16.221.204`
const PORT_1 = 3000
const SERVER_1 = [IP_1,PORT_1].join(':');

const IP_2 = `172.16.221.33`
const PORT_2 = 3030
const SERVER_2 = [IP_2,PORT_2].join(':');

const IP_3 = `172.16.222.233`
const PORT_3 = 3001
const SERVER_3 = [IP_3,PORT_3].join(':');

const IP_4 = `172.16.221.55`
const PORT_4 = 3000
const SERVER_4 = [IP_4,PORT_4].join(':');

const IP_5 = `172.16.221.155`
const PORT_5 = 3000
const SERVER_5 = [IP_5,PORT_5].join(':');


app.get('/suspensoes', async (req, res) => {
  try {
    const { data } = await server5.get('/suspensoes')
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data'});
}
})

var server5 = require('axios').create({
  baseURL: 'http://' + SERVER_5

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/competencias', (req, res) => {
  console.log("entrou no get")
  db.any('SELECT * FROM competencias')
  .then(function (data) {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Retornou todas as pessoas"
    });
  })
  .catch(function(error) {
    console.log('ERROR:', error)
  })  
})

app.get('/competencias/:id', (req, res) => {
  console.log("entrou no get/:id")
  let id = req.params.id
  console.log(id)
  db.any(`SELECT * FROM competencias WHERE id_competencia = '${id}'`)
  .then(function (data) {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Retornou todas as pessoas"     
    })
  })
  .catch(function(error) {
    console.log('ERROR:', error)
  })  
})

        
app.post('/competencias', (req, res) => {
  console.log(" ====== entrou no post ======")
  let { id, descricao } = req.body;
  db.none(`INSERT INTO competencias(id_competencia, descricao) VALUES ($1, $2)`, [id, descricao])
    .then(function (data) {
      console.log(data)
      res.status(200).json({
        status: "success",
        message: "Competência criada com sucesso",
      });
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});


app.put('/competencias/:id', (req, res) => {
  // console.log(" ====== entrou no put ======");
  const id_competencia = req.params.id;
  const {descricao} = req.body;
  db.none(`UPDATE competencias SET descricao = $1 WHERE id_competencia = $2`, [descricao, id_competencia])
  .then(function (data) {
    console.log(data)
    res.status(200).json({
      status: "success",
      message: "Competência atualizada com sucesso",
    });
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });
});


app.delete('/competencias/:id', (req, res) => {
  const id_competencia = req.params.id;
  db.none(`DELETE FROM competencias WHERE id_competencia = $1`, [id_competencia])
    .then(function (data) {
      console.log(data);
      res.status(200).json({
        status: "success",
        message: "Competência deletada com sucesso",
      });
    })
    .catch(function (error) {
      console.log("ERROR:", error);
      res.status(500).json({
        status: "error",
        message: "Erro ao deletar a competência",
      });
    });
});



app.get('/pessoas ', (req, res) => {
  res.send('TODO: implementar end-point GET: /pessoas')
})

app.get('/pessoas/:id ', (req, res) => {
  res.send('TODO: implementar end-point GET: /pessoas/:id')
})

app.post('/pessoa/:id ', (req, res) => {
  res.send('TODO: implementar end-point POST: /pessoas/:id')
})

app.put('/pessoas/:id ', (req, res) => {
  res.send('TODO: implementar end-point PUT: /pessoas/:id')
})

app.delete('/pessoas/:id ', (req, res) => {
  res.send('TODO: implementar end-point DELETE: /pessoas/:id')
})