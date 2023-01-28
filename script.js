
// caixa com informaçao guardadas
const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//evento de ouvir o click no botão
button.addEventListener("click",add)

//função de adicionar o dia
function add() {

     // "today" recebe uma nova data, a data vai ser pelo seu local indicado
 // dentro dos paramentros do "toLocaleDateString()".
 // vai ser transformada em string formato (pt-br) e recortada pelo "slice".
 const today = new Date().toLocaleDateString("pt-br").slice(0,5)
 const dayExists = nlwSetup.dayExists(today)

   // condição se o dia já existir
   if(dayExists) {
    alert("O Dia, já existe ❌")
    return
   }

   //const "dayExists" verifica dentro do (nlwSetup) se o (today) existe.
 //se for (false) ou seja não existe, ele pula aqui para o "addDay" adicionando o dia.
 //se for (true) ele cai na condição "if (dayExists)", return finaliza o código. 
 alert("Dia adicionado com sucesso ✅")
 nlwSetup.addDay(today)
}

// Evento de ouvir a alteração no form e ativar a função
form.addEventListener("change",save)

// função de transformar o objeto em string
function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
  // const recebe a string que foi transformada em objeto, "ou isso ou aquilo" é atribuido na const.
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

      // guarda os dados obtidos na const é prepara para carregar
nlwSetup.setData(data)

      // carrega os dados
      nlwSetup.load()