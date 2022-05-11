//variaveis utilizadas na logica de criptografar-descriptografar
var entrada = document.querySelector ("#entrada");
var saida = document.querySelector ("#saida");
var criptografa = document.querySelector ("#criptografa");
var descriptografa = document.querySelector ("#descriptografa");	
var copiar = document.querySelector ("#copiar");
var fraseCripto= "";

//funcao responsavel por criptografar
criptografa.addEventListener("click", function codifica ()
{
  //utilizo esse loop para verificar cada letra contidas no meu input de entrada
  for( var i = 0; i < entrada.value.length; i++)
  {
    //atraves da funcao charCodeAt() pego o codigo de cada letra e comparo com a tabela ascii, segundo a tabela os numeros ficam entre 47 e 58
    //alfabeto minusculo entre 97 e 122
    // verifico se tem espaco
    //verifico se tem enter com o "\n"
    if ((entrada.value.charCodeAt(i) >= 47 && entrada.value.charCodeAt(i) <= 58 ) 
      || (entrada.value.charCodeAt(i) >= 97 && entrada.value.charCodeAt(i) <= 122)
         || (entrada.value[i] == " ") ||
         (entrada.value[i] == "\n"))
    {	
      
      if(entrada.value[i] == "e")
      {
      
        fraseCripto = fraseCripto + "enter";
      }
      else if(entrada.value[i] == "i")
      {
      
        fraseCripto =fraseCripto + "ines";
      }
      else if(entrada.value[i] == "a")
      {
      
        fraseCripto =fraseCripto + "ai";
      }
      else if(entrada.value[i] == "o")
      {
      
        fraseCripto = fraseCripto +"ober";
      }
      else if(entrada.value[i] == "u")
      {
      
      fraseCripto = fraseCripto + "ufat";
      }
      else
      {
      
      fraseCripto = fraseCripto + entrada.value[i];
      }
    }
    //qualquer valor diferente de letra minuscula, espaco e enter entra nesse else
    else
    {
      
      fraseCripto = "Por favor não utilizar letras maiúsculas, acentos ou caracteres especiais!";
      saida.value = fraseCripto;
      setTimeout(() =>{
        fraseCripto = "";
        saida.value = fraseCripto;
      }, 1000)
      break;
      
    }
  }
  //aqui eu insiro o valor da variavel no meu input de saida	
  saida.value = fraseCripto;
  //logo em siga zero o valor para poder criptografar novas mensagens 
  fraseCripto = "";	
})

//essa funcao eh a responsavel por descriptografar
descriptografa.addEventListener("click", function descodifica ()
{
  //usso esse loop para verificar todas letras contidas no meu input de saida
  for( var i = 0; i < saida.value.length; i++)
  {
    
    if(saida.value[i] == "e")
    {
      
      fraseCripto = fraseCripto + "e";
      i = i + 4;
    }
    else if(saida.value[i] == "i")
    {
      
      fraseCripto =fraseCripto + "i";
      i = i + 3;
    }
    else if(saida.value[i] == "a")
    {
      
      fraseCripto =fraseCripto + "a";
      i++;
    }
    else if(saida.value[i] == "o")
    {
      
      fraseCripto = fraseCripto +"o";
      i = i + 3;
    }
    else if(saida.value[i] == "u")
    {
      
      fraseCripto = fraseCripto + "u";
      i = i +3;
    }
    else 
    {
      fraseCripto = fraseCripto + saida.value[i];
    }
  }
    
  entrada.value = fraseCripto;
  fraseCripto = "";	
})
//essa funcao eh responsavel por copiar a mensagem no input de saida 
copiar.addEventListener("click", function copia ()
{
  //a funcao select() ira selecionar todo conteudo dentro do input
  saida.select();
  //essa funcao ira copiar o texto selecionado
  document.execCommand("copy");
  
})

//essas sao as variaveis utilizadas na minha alavanca e tela
var cabo = document.querySelector (".cabo");
var telapreta = document.querySelector(".telapreta")
var escrita = document.querySelector("#escrita");
var dialogo = document.querySelector(".dialogo")
var i = 0;
var txt = "******** Inicializando programa oracle alura 5.02 ********  usuario-aceito: true.............................. loading: 1 2 3 pin.... criando server.....................................................port 1984  recriando topografia funcional de caracteres ................true verificando verificadores de verificação: verificado...............   it's a long way to the rock if you wanna rock and roll: true......... entering the coding zone: accepted.............................level-1 challenge: 1 incializado com sucesso! ..............................start!";
//essa funcao eu utilizo para adcionar uma classe na minha alavanca e tela fazendo o efeito de inicializacao do computador

cabo.addEventListener ("click", function(){
    ligaDesliga = true;
    dialogo.classList.add("dialogo-semDisplay");
    cabo.classList.add("cabo2");
    setTimeout(escreve, "2000");
    setTimeout(function (){
      telapreta.classList.add("telapreta2");
      escrita.classList.add("escritaFadeOut");
    }, "5000");
    
    setTimeout(() => {
      telapreta.removeChild(escrita);
      escrita.innerHTML = "";
      telapreta.classList.remove("telapreta2");
      telapreta.classList.remove("telapreta");
      
                }, "6000");
})


//funcao para fazer a animacao de inicializacao do computador 
function escreve() {
if(i < txt.length) {
 escrita.innerHTML += txt[i];
  i++;
  setTimeout(escreve, "1");
}

}	

//eventos para o painel com 4 botoes 

var painel = document.querySelector(".fundo-botao");
var botao1 = document.querySelector (".botao-1-interno");
var botao2 = document.querySelector(".botao-2-interno");
var botao3 = document.querySelector(".botao-3-interno");
var botao4 = document.querySelector(".botao-4-interno");
var fundoCor = document.querySelector(".caixamaior");
var corJanela = document.querySelector(":root");
var container = document.querySelector(".container");
var container2 = document.querySelector(".container2");
var ligaDesliga = false;

botao1.addEventListener("click", addClasse);
botao2.addEventListener("click", addClasse);
botao3.addEventListener("click", addClasse);
botao4.addEventListener("click", addClasse);
function addClasse (){

if(ligaDesliga)
{
  this.classList.add ("move-botao");
  if(this.classList[0] == "botao-1-interno")
  {
    fundoCor.classList.add ("fundo-corDiferente");
  }
  if(this.classList[0] == "botao-2-interno")
  {
    corJanela.classList.add("corJanela-diferente");
  }
  if(this.classList[0] == "botao-3-interno")
  {
    descriptografa.classList.add ("roda");
    criptografa.classList.add ("roda");
    container.classList.add ("roda");
    container2.classList.add ("roda");
    fundoCor.classList.add ("move-fundo");
  }
  if(this.classList[0] == "botao-4-interno")
  {
    document.location.reload(true);
  }
  else{

    

  
  }
}
}




