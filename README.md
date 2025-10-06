# Cronômetro JavaScript

Este projeto é um cronômetro simples feito em JavaScript, que permite iniciar, pausar e zerar o tempo diretamente na página.

# Funcionalidades

Iniciar: inicia ou retoma a contagem do tempo.

Pausar: interrompe a contagem temporariamente.

Zerar: reseta o cronômetro para 00:00:00.

# Como funciona

O cronômetro utiliza setInterval para incrementar a contagem de segundos a cada 1000ms (1 segundo).

A função mostra_hora(segundos) converte os segundos em um formato hh:mm:ss usando Date e toLocaleTimeString().

cada botão (Iniciar, Pausar, Zerar) possui um event listener que executa a ação correspondente:

Iniciar: chama a função iniciar() e remove a classe pausado.

Pausar: para o intervalo com clearInterval(timer) e adiciona a classe pausado.

Zerar: para o intervalo, reseta a contagem e exibe 00:00:00.

# Observações

A classe CSS pausado pode ser utilizada para alterar a aparência do relógio quando pausado (por exemplo, mudar a cor do texto).

O cronômetro é baseado em contagem de segundos, não na hora real do sistema.

