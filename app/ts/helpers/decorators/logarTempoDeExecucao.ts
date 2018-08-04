export function logarTempoDeExecucao() {
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }
    }
}