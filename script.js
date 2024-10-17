const pergunta= [{
    numPergunta : "Pergunta 1/40",
    imgPergunta :".assets",
    textoPergunta: "Como você reage a um desafio físico inesperado (como precisar carregar algo muito pesado)?",
    opcao: ["Encaro com determinação, mesmo que seja difícil.","Tento resolver com astúcia ou encontrar uma solução alternativa.","Uso ferramentas ou peço ajuda de outros"],
    foiRespondida: false

},{
numPergunta : "Pergunta 2/40",
imgPergunta :".assets",
textoPergunta: "texto Pergunta",
opcao: ["1","2","3"],
foiRespondida: false}
]
const elementoPergunta=document.getElementById('numPergunta');
const elementoTextoPergunta=document.getElementById('textoPergunta');
const elementoOpc1=document.getElementById('opc1');
const elementoOpc2=document.getElementById('opc2');
const elementoOpc3=document.getElementById('opc3');
const containerPergunta= document.getElementById('containerPergunta');
let perguntaAtual=0;

function mostraPergunta(){    
    elementoPergunta.innerText=pergunta[perguntaAtual].numPergunta;
    elementoTextoPergunta.innerText=pergunta[perguntaAtual].textoPergunta;
    elementoOpc1.innerHTML=pergunta[perguntaAtual].opcao[0];
    elementoOpc2.innerHTML=pergunta[perguntaAtual].opcao[1];
    elementoOpc3.innerHTML=pergunta[perguntaAtual].opcao[2];    
        
}

function respostaMarcada(opcao){
    if(!pergunta[perguntaAtual].foiRespondida){ 
    
    //de proxima pergunta
    
        const botaoProximaPergunta = document.createElement('button');
        botaoProximaPergunta.innerText = "Próxima Pergunta";
        botaoProximaPergunta.onclick = proximaPergunta;
        containerPergunta.appendChild(botaoProximaPergunta);}
}


function proximaPergunta()
{
    
    if(perguntaAtual<pergunta.length-1){
        
        perguntaAtual++;
        mostraPergunta();
        
    }
    else{
        //exibir botão submit e tela de resposta
        
        window.location.href = 'resultados.html'; // Redireciona para outra página
        
    }
}
mostraPergunta();
document.getElementById('opt1').addEventListener('click',()=> respostaMarcada("1"));
document.getElementById('opt2').addEventListener('click',()=> respostaMarcada("2"));
document.getElementById('opt3').addEventListener('click',()=> respostaMarcada("3"));


document.getElementById('meuQuiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    window.location.href = 'resultados.html'; // Redireciona para outra página
    });