import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item.name.toLowerCase().includes(searchText) ||
      item.department.toLowerCase().includes(searchText)
    );
  }

  // transform(items: any[], searchText: string): any[] {
  //   if (!items) return [];
  //   if (!searchText) return items;

  //   searchText = searchText.toLowerCase();

  //   return items.filter(item => {
  //     // check all keys of the object for the search text
  //     return Object.values(item).some(val =>
  //       String(val).toLowerCase().includes(searchText)
  //     );
  //   });
  // }

}
