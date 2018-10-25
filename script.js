//Funcao para addicionar bolinhas a cada qtd de tempo
window.onload  = function(){
    setInterval(addBola, 1000); //vai executar a fç 'passarSlide' a cada 3 segundos
}

function addBola() {
    var bola = document.createElement('div');//criei uma div com JS -> <div></div>
    bola.setAttribute('class', 'bola');//Coloquei uma classe nessa div -> <div class="bola"></div>

    //gerando as coordenadas(no css elas vao ser: 'left e top') aleatorias da bola
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    //setando, ou melhor, atribuindo os valores a nossa div criada la em cima
    bola.setAttribute('style', 'left:'+p1+'px; top: '+p2+ 'px; background-color: red');


    //criando e evento de estourar no elemento bola
    bola.setAttribute('onclick', 'estourar(this)');

    //Agora vou colocar a bola na tela, ou seja, apendar ela na tela, pois pego o q ja tenho no meu site e adiciono esse novo elemento criado bem aqui(bola)
    document.body.appendChild(bola);    
}

function estourar(elemento) {
    //esse removeChild n coloca hidden n, ele remove msm o elemento q mandamos por parametro
    document.body.removeChild(elemento);    
}















