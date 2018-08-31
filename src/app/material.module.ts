import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';



const MODULES = [
   MatToolbarModule, 
   //FlexLayoutModule, 
   MatIconModule,MatCardModule, MatRadioModule , MatInputModule, FlexLayoutModule, 
   MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatSliderModule
];

@NgModule({
   imports: MODULES,
   exports: MODULES
})

export class MaterialModule { }