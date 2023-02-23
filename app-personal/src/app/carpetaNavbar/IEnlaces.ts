import { IEnlace } from "./IEnlace";

export interface IEnlaces {
    enlaces: IEnlace[];
    InsertarEnlaces(nombre : string, url : string, iconoUrl : string): void;
}