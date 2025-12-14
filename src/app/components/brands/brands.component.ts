import { Component, inject } from '@angular/core';
import { Ibrands } from '../../core/interfaces/ibrands';
import { BrandsService } from '../../core/services/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  private readonly _BrandsService = inject(BrandsService)
  brandsData: Ibrands[] = []
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        this.brandsData = res.data
      }
    })
  }
}
