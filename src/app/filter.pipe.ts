import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter',
    // pure property ensure the pipe output changes whenever not only the pipe arguments change but also when the input to it changes
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(value: any, filterString: string, propertyName: string, ...args: any[]): any {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propertyName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }

}
