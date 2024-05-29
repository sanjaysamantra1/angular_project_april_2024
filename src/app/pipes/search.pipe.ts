import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(inputArr: any, searchText: string) {
    if (!inputArr) return [];
    if (!searchText) return inputArr;

    const filteredArr = inputArr.filter((ele: any) => {
      return JSON.stringify(ele).includes(searchText);
      // return ele[fieldName].includes(searchText)
    });
    return filteredArr;
  }

}
