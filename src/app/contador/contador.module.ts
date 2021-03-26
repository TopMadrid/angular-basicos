import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent

    ],
    imports: [] // No incluimos CommonModule pues no usamos ngIf, ngFor...
})

export class ContadorModule {}