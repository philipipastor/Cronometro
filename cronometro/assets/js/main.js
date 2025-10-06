function meu_escopo(){

    const relogio = document.querySelector(".relogio")
    const button_iniciar = document.querySelector(".iniciar")
    const button_pausar = document.querySelector(".pausar")
    const button_zerar = document.querySelector(".zerar")

    function mostra_hora(segundos) {
        let data = new Date(segundos);

        return data.toLocaleTimeString("pt-br", { hour12: false, timeZone: "GMT" });
    }

    let segundos = 0;
    let timer;

    function iniciar() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = (mostra_hora(segundos * 1000));
        }, 1000);
    }


    button_iniciar.addEventListener("click", function evento_botao1(e) {
        e.preventDefault();
        iniciar();
        relogio.classList.remove("pausado");
    });

    button_pausar.addEventListener("click", function(e) {
        e.preventDefault();
        clearInterval(timer);
        relogio.classList.add("pausado");
    });

    button_zerar.addEventListener("click", function(e) {
        e.preventDefault();
        segundos = 0
        clearInterval(timer)
        relogio.innerHTML = "00:00:00";
        relogio.classList.remove("pausado");
    });
}

meu_escopo();