import { Component,AfterViewInit, OnDestroy } from '@angular/core';
import { ModalService } from '../modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productonew',
  templateUrl: './productonew.component.html',
  styleUrl: './productonew.component.css'
})
export class ProductonewComponent implements OnDestroy {
  isOpen = false;
  product = {
    name: '',
    cantidad: '',
    price: null,
    category: '',
    description: ''
  };
  modalSubscription: Subscription;

  constructor(private modalService: ModalService) {
    this.modalSubscription = this.modalService.modalState$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.close();
  }

  onSubmit() {
    console.log(this.product);
    this.closeModal();
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }
}