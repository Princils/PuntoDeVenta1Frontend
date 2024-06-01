import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-productonew',
  templateUrl: './productonew.component.html',
  styleUrls: ['./productonew.component.css']
})
export class ProductonewComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initModal();
  }

  initModal() {
    const modalToggleButtons = document.querySelectorAll('[data-modal-toggle]');
    
    modalToggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const modalId = target.getAttribute('data-modal-toggle');
        
        if (modalId) { // Verificar que modalId no es null
          const modalElement = document.getElementById(modalId);

          if (modalElement) {
            this.toggleModal(modalElement);
          } else {
            console.error(`Modal with id ${modalId} does not exist.`);
          }
        } else {
          console.error('No modal ID provided.');
        }
      });
    });
  }

  toggleModal(modal: HTMLElement) {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
}
