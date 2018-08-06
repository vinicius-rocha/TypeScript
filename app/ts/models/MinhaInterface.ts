import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";

export interface MinhaInterface<T> extends Imprimivel, Igualavel<T>{
}