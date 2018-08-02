let negociacao = new Negociacao(new Date(), 2, 100);
negociacao._quantidade = 3; /* O VSCODE indica um erro de compilação aqui*/ /*[ts] Property '_quantidade' is private and only accessible within class 'Negociacao'.*/
console.log(negociacao);