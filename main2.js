// TRACCIA 2

// cattura elementi
let title = document.querySelector('#title');
let paragraph = document.querySelector('#paragraph');
let articles = document.querySelector('.articles');
let btn_article = document.querySelector('#btn_article');
let changecolor = document.querySelector('#changecolor')
let date = new Date();
let lengthCounter = document.querySelector('#lengthCounter');

//messa in ascolto del bottone
btn_article.addEventListener('click', () => {
    
    // creazione articolo
    
    //condizionale: se un input è vuoto si ha un messaggio di errore
    if (title.value == "" || paragraph.value == "") {
        alert('inserire un contenuto in entrambi i campi')
    } //se gli input sono riempiti si procede con la creazione dell'articolo
    else{
        if (paragraph.value.length > 300) {
            alert('testo massimo consentito: 300 caratteri')
        }
        else{
            let article = document.createElement('article');
            //selezione colore box shadow
            article.style.boxShadow = `5px 5px 10px ${changecolor.value}`;
            //riempimento articolo con titolo, paragrafo e data
            article.innerHTML = 
            `<h3>${title.value}</h3>
            <p>${paragraph.value}</p>
            <time>${date.toLocaleDateString()}</time>`;
            articles.appendChild(article);
            //pulizia dei campi input dopo la creazione di un articolo
            title.value = "";
            paragraph.value = "";
        }
    }
});
paragraph.addEventListener('input', () => {
    lengthCounter.innerHTML = `Hai inserito ${paragraph.value.length} caratteri. <br> Testo massimo consentito: 300 caratteri`;
});
