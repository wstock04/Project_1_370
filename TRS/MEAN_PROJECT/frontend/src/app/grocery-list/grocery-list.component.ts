import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  items: any[] = [];
  newItem: string = '';

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.groceryService.getItems().subscribe(items => this.items = items);
  }

  addItem(): void {
    if (this.newItem) {
      this.groceryService.addItem(this.newItem).subscribe(item => {
        this.items.push(item);
        this.newItem = '';
      });
    }
  }

  deleteItem(id: string): void {
    this.groceryService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item._id !== id);
    });
  }
}
