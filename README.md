
# Lead Distribution Roulette


Este projeto é uma API simples para distribuir leads de forma justa entre corretores, utilizando uma roleta para selecionar o próximo corretor na fila. Toda vez que a API da roleta for chamada, ela retorna o próximo corretor disponível, garantindo que todos os corretores recebam leads de maneira equilibrada.

## Funcionalidades

- Distribuição Justa de Leads: A API mantém uma fila de corretores e retorna o próximo corretor disponível cada vez que é chamada.

- Ciclo Contínuo: Quando o último corretor da fila recebe um lead, a roleta volta ao início e reinicia o processo.

## Como Funciona

1 - A fila de corretores é inicializada com todos os corretores disponíveis.

2 - Quando a API é chamada, ela seleciona o corretor que está no início da fila.

3 - Após a seleção, o corretor é movido para o final da fila.

4 - O próximo corretor na fila será escolhido na próxima vez que a API for chamada.
## Usado por

Esse projeto é usado pelas seguintes empresas:

- Prime Realty Negócios Imobiliários



# Tecnologias Utilizadas

Node.js: Para a construção da API e gerenciamento de requests.
Firebase: Utilizado como backend para armazenar os dados dos corretores e leads de forma segura e eficiente.
