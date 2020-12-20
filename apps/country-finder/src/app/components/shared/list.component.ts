import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    styleUrls: ['./list.component.scss'],
    templateUrl: './list.component.html',
    selector: 'c-finder-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
    @Input() elements: any[];
    @Output() selected = new EventEmitter<any>();
    constructor() {}

    emitSelectedItem(item: any): void {
        this.selected.emit(item);
    }
}