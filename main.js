let start = document.getElementById("start");
let body = document.body;
let title;
let input;
let preTitle;
start.addEventListener('click', ()=> {
    // удалить любой html элемент со старницы
    start.parentNode.removeChild(start);

     title = document.createElement("h1");

     input = document.createElement("input");

    title.textContent = "Введите ваше имя"

    body.append(title);
    body.append(input);

    input.addEventListener('keyup', (event)=>{
        // event - это объект в ктором хранится инфоромация об объекте
        if(event.code == "Enter" && input.value != ""){
            title.textContent = "Добро пожаловать, " + input.value;
            input.parentNode.removeChild(input);

            setTimeout(()=> {
                title.parentNode.removeChild(title);
                iLoveMath()
            }, 3000)
        }
       

    })
})



// параметры уровня 
// вопрос , ответ, следующие уровень

function createTextLevel (question, answer, nextLevel){
    title = document.createElement("h1");
    input = document.createElement("input");
    preTitle = document.createElement("p");

    title.textContent = question;
    body.append(title);
    body.append(input);
    body.append(preTitle);
    
    input.addEventListener("keyup", (event) =>{
        if(event.code == "Enter"){
            if(input.value.toLowerCase() == answer){
                preTitle.textContent = "Верно";
                input.value = "";

                // запуск сл. уровня
                setTimeout(() => {
                    title.parentNode.removeChild(title);
                    input.parentNode.removeChild(input);
                    preTitle.parentNode.removeChild(preTitle);
                    if(nextLevel != null){
                        nextLevel();
                    }
                }, 3000);
            }

            else{
                preTitle.textContent = "Неверно";
                input.value = "";
            }

        }
    })
}



function iLoveMath(){
    createTextLevel("Сколько будет 2*8?", 16, iLoveGeograghy);
}

function iLoveGeograghy(){
   createTextLevel("Столица Бразилии?", "бразилиа", iLoveBiology );
}

function iLoveBiology (){
    createTextLevel("Сколько хромосом у человека?", 47, null );
}

function createIMGLevel(img1, img2, question, answer, nextLevel){

}