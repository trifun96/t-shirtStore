import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'pluralize'
})

export class PluralizePipe implements PipeTransform{
    transform(value:number, singularText:string, pluralText:string){
        if(value === 1) {
            return `${value} ${singularText}`
        } else{
            return `${value} ${pluralText}`
        }
    }
}