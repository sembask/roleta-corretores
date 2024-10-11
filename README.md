Lead Distribution Roulette
Este projeto é uma API simples para distribuir leads de forma justa entre corretores, utilizando uma roleta para selecionar o próximo corretor na fila. Toda vez que a API da roleta for chamada, ela retorna o próximo corretor disponível, garantindo que todos os corretores recebam leads de maneira equilibrada.

Funcionalidades
Distribuição Justa de Leads: A API mantém uma fila de corretores e retorna o próximo corretor disponível cada vez que é chamada.
Ciclo Contínuo: Quando o último corretor da fila recebe um lead, a roleta volta ao início e reinicia o processo.
