import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneDemo';
}
