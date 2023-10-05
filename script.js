var consultaCEP = fetch('https://viacep.com.br/ws/38405364/json/').then(resposta => resposta.json()).then(r => console.log(r));

console.log(consultaCEP);