import { Negociacao } from './Negociacao';
import { MinhaInterface } from './MinhaInterface';

export class Negociacoes implements MinhaInterface<Negociacoes> {
    
    private _negociacoes: Negociacao[] = [];
    
    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }
    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}