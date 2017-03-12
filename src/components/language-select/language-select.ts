import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'language-select',
  templateUrl: 'language-select.html'
})

export class LanguageSelect {
  languages = ['en', 'ru'];
  defaultLang: string;
  languageAlertOpts: { subTitle: string };
  subTitle: string;
  languageForm: FormGroup;

  constructor(private translateService: TranslateService,
              private formBuilder: FormBuilder) {
    translateService.get('SELECT_LANGUAGE').subscribe(
      value => {
        console.log('value', value);
        this.subTitle = value;
        this.doNext();
      }
    );
    this.defaultLang = this.translateService.getDefaultLang();
    this.buildForm();
  }

  doNext() {
    this.languageAlertOpts = {
      subTitle: this.subTitle
    };
  }

  buildForm() {
    this.languageForm = this.formBuilder.group({
      'languageControl': [this.defaultLang, Validators.required],
    });
  }

  setLanguage(language: string) {
    this.translateService.setDefaultLang(language);
  }

  onChangeLang(e) {
    this.setLanguage(e);
  }

}
