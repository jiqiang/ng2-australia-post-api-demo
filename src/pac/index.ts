import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AustraliaPostAPIConfig } from './australia-post-api-config';

import { PACService } from './pac.service'

export * from './pac.service';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  exports: [],
  providers: [ PACService ]
})
export class PostageAssessmentCalculatorModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: PostageAssessmentCalculatorModule,
      providers: [
        PACService,
        {
          provide: AustraliaPostAPIConfig,
          useValue: config
        }
      ]
    };
  }
}
