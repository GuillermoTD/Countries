import { Component } from '@angular/core';
import { MainGridComponent } from '../maingrid/maingrid.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainGridComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
