import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'c-finder-back-button',
    styleUrls: ['back-button.component.scss'],
    templateUrl: 'back-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButtonComponent {
    @Output() pressed = new EventEmitter();
    constructor() {}

    click(): void {
        this.pressed.emit();
    }
}