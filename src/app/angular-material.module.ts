import { NgModule } from '@angular/core';

import { MdButtonModule, MdCardModule, MdListModule, MdGridListModule,
         MdMenuModule, MdToolbarModule, MdTabsModule, MdProgressSpinnerModule,
         MdIconModule, MdSlideToggleModule, MdInputModule } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule, MdCardModule, MdListModule, MdGridListModule,
        MdMenuModule, MdToolbarModule, MdTabsModule, MdProgressSpinnerModule,
        MdIconModule, MdSlideToggleModule, MdInputModule
    ],
    exports: [
        MdButtonModule, MdCardModule, MdListModule, MdGridListModule,
        MdMenuModule, MdToolbarModule, MdTabsModule, MdProgressSpinnerModule,
        MdIconModule, MdSlideToggleModule, MdInputModule
    ]
})

export class AngularMaterialModule { }
