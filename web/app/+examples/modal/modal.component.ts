import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { StModalService, MessageModal, Buttons, BUTTON_TYPES } from '../../../../components';

@Component({
  selector: 'modal-example',
  template: require('./modal.component.html'),
  styles: [require('./modal.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent {
  @ViewChild('loadModal', { read: ViewContainerRef }) target: any;

  constructor(private _modalService: StModalService) {}

  showModal(): void {
    let notify: Subject<BUTTON_TYPES> = new Subject<BUTTON_TYPES>();

    // Creation of buttons
    let buttonAccept: Buttons = { type: BUTTON_TYPES.ACCEPT, title: 'Delete', notify: notify };
    let buttonCancel: Buttons = { type: BUTTON_TYPES.CANCEL, title: 'Cancel', notify: notify };

    // Creation of modal info
    let messageModal: MessageModal = {
      message: 'Are you sure of delete the id 10?',
      title: { title: 'ARE YOU SURE?', icon: 'icon-info2' },
      buttons: [buttonAccept, buttonCancel]
    };

    // Create modal and suscribe button click
    this._modalService.createMessageModalAndShow(this.target, messageModal);
    notify.subscribe((type: BUTTON_TYPES) => this.showMessageType(type));
  }

  private showMessageType(type: BUTTON_TYPES): void {
    switch (type) {
      case BUTTON_TYPES.ACCEPT:
        console.log('ACCEPT');
        break;
      case BUTTON_TYPES.CANCEL:
        console.log('CANCEL');
        break;
      default: console.log('error**************'); break;
    }
  }
}
