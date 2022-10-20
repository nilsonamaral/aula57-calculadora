function criaCalculadora() {
    return {
        display: document.querySelector('.diplay'),

        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay();
                }
            }) ;
        },
    };
}