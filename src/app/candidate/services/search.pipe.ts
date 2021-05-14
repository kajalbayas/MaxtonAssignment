import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    let Name: any;
   
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchText);
     });
      
    
}
}