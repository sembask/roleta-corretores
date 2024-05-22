const express = require('express');
const db = require('./firebase-config');  // Certifique-se de que o caminho está correto
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/corretor-atual', async (req, res) => {
  try {
    console.log("Requisição recebida");

    // Obter o documento de controle
    const controleRef = db.collection('ControleRoleta').doc('roleta');
    const controleDoc = await controleRef.get();

    if (!controleDoc.exists) {
      res.status(404).send('Documento de controle não encontrado');
      return;
    }

    const corretorAtual = controleDoc.data().corretorAtual;

    // Obter o documento do corretor atual
    const corretoresRef = db.collection('Corretores').doc(corretorAtual.toString());
    const corretorDoc = await corretoresRef.get();

    if (!corretorDoc.exists) {
      // Se o corretor não for encontrado, reinicie a rotação para o primeiro corretor
      await controleRef.update({ corretorAtual: 1 });
      const primeiroCorretorDoc = await db.collection('Corretores').doc('1').get();
      if (!primeiroCorretorDoc.exists) {
        res.status(404).send('Nenhum corretor encontrado');
        return;
      }
      res.status(200).send({ idClickUp: primeiroCorretorDoc.data().idClickUp });
      return;
    }

    const corretorData = corretorDoc.data();

    // Atualizar o corretor atual na roleta
    const totalCorretores = await db.collection('Corretores').get().then(snapshot => snapshot.size);
    let novoCorretorAtual = corretorAtual === totalCorretores ? 1 : corretorAtual + 1;
    await controleRef.update({ corretorAtual: novoCorretorAtual });

    res.status(200).send({ idClickUp: corretorData.idClickUp });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).send('Erro ao processar a requisição: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});