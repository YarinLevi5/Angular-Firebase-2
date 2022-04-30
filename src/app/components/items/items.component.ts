import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ItemsServiceService } from 'src/app/services/items-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Observable<any[]>
  constructor(private ItemsServiceService: ItemsServiceService) {
    this.items = this.ItemsServiceService.getItems();
  }
}
