import { NgModule } from '@angular/core';
import { welcome_routing } from './welcome.routing';
import { WelcomeViewComponent } from './welcome-view.component';
import { WelcomeSliderComponent } from "./welcome-slider.component";

@NgModule({
  declarations: [ WelcomeViewComponent, WelcomeSliderComponent ],
  imports: [ welcome_routing ]
})
export class WelcomeModule {

}
