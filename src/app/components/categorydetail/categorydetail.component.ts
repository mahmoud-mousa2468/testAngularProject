import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categorydetail',
  standalone: true,
  imports: [],
  templateUrl: './categorydetail.component.html',
  styleUrl: './categorydetail.component.scss'
})
export class CategorydetailComponent implements OnInit {
  categoryId: any
  categorydetails:any
  private readonly _CategoryService = inject(CategoryService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.categoryId = p.get('id');
        this._CategoryService.getSpecificCategory(this.categoryId).subscribe({
          next: (res) => {
            this.categorydetails = res.data
          }
        })
      }
    })
  }
}