import { Component, OnDestroy } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'PuntoDeVenta_Beta1';
 
}
