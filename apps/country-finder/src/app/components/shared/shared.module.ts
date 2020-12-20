import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { BackButtonComponent } from './back-button.component';
import { LoadingComponent } from './loading.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ListComponent,
        BackButtonComponent,
        LoadingComponent,
    ],
    exports: [
        ListComponent,
        BackButtonComponent,
        LoadingComponent,
    ]
})
export class SharedModule {}