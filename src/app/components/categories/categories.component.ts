import { Component, ViewChild, ViewChildren } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  allCategories = [
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery1', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery2', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
  ]

  @ViewChildren(CategoryComponent) categoryComps: any;

  ngAfterViewInit(){
    console.log(this.categoryComps)
  }
}
