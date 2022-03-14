import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {DateService} from './services/date.service';

import {Renderer2} from './services/renderer.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
        HttpClientModule
	],
	providers: [
		DateService,
        Renderer2
	]
})
export class DateTimePickerModule {}
