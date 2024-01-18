import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ClickStopPropagation } from '../../directives/stop-propagination.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ClickStopPropagation, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() ModalTitle: string;

  constructor(public modalService: ModalService) {}
}
