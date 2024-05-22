const express = require('express');
const db = require('./firebase-config');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/novo-lead', async (req, res) => {
  try {
    const controleRef = db.collection('ControleRoleta').doc('roleta');
    const controleDoc = await controleRef.get();
    const corretorAtual = controleDoc.data().corretorAtual;

    const corretoresRef = db.collection('Corretores').doc(corretorAtual.toString());
    const corretorDoc = await corretoresRef.get();

    if (!corretorDoc.exists) {
      res.status(404).send('Corretor não encontrado');
      return;
    }

    const corretorData = corretorDoc.data();

    // Atualizar o corretor atual na roleta
    const totalCorretores = await db.collection('Corretores').get().then(snapshot => snapshot.size);
    let novoCorretorAtual = corretorAtual === totalCorretores ? 1 : corretorAtual + 1;
    await controleRef.update({ corretorAtual: novoCorretorAtual });

    res.status(200).send({ idClickUp: corretorData.idClickUp });
  } catch (error) {
    res.status(500).send('Erro ao processar o lead: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});