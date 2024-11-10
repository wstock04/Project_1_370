import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceries: any[] = [];
  newGrocery: any = { name: '', quantity: 1 };

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.getGroceries();
  }

  getGroceries(): void {
    this.groceryService.getGroceries().subscribe(
      data => this.groceries = data,
      error => console.error('Error fetching groceries:', error)
    );
  }

  addGrocery(): void {
    this.groceryService.addGrocery(this.newGrocery).subscribe(
      () => {
        this.getGroceries(); // Refresh the list
        this.newGrocery = { name: '', quantity: 1 }; // Reset form
      },
      error => console.error('Error adding grocery:', error)
    );
  }

  deleteGrocery(id: string): void {
    this.groceryService.deleteGrocery(id).subscribe(
      () => this.getGroceries(), // Refresh the list
      error => console.error('Error deleting grocery:', error)
    );
  }
}