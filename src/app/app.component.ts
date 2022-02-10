import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dropdownlist';  

  public dataFields: Object = {text: 'Name', value: 'Id', groupBy: 'Country' };
  public data: Object[] = [
    { Name: 'Andrew Fuller', Id: '1', Image: 'E1', Country: 'England' },
    { Name: 'Anne Dodsworth', Id: '2', Image: 'E2', Country: 'USA' },
    { Name: 'Janet Leverling', Id: '3', Image: 'E3', Country: 'USA' },
    { Name: 'Laura Callahan', Id: '4', Image: 'E4', Country: 'USA' },
    { Name: 'Margaret Peacock', Id: '5', Image: 'E5', Country: 'USA' },
    { Name: 'Michael Suyama', Id: '6', Image: 'E6', Country: 'USA' },
    { Name: 'Nancy Davolio', Id: '7', Image: 'E7', Country: 'USA' },
    { Name: 'Robert King', Id: '8', Image: 'E8', Country: 'England' },
    ];


}
