import { Component, Input, OnInit } from '@angular/core';
import { SurveyContent } from '../../../posts/constants/content.interface';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Input() content: SurveyContent;
  surveyForm: UntypedFormGroup;
  results = null;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group(
      this.content.choices
        .map(x => x.title)
        .reduce((obj, cur) => ({...obj, [cur]: false}), {})
    );
  }

  submit(value: any) {
    const result = this.content.choices.filter(choice => value[choice.title] !== choice.correct);

    if (result.length === 0) {
      this.results = {
        success: true,
        message: `Nice work! You won ${this.content.points} points 👍`
      };
    } else {
      const correctChoices
        = this.content.choices
        .filter(x => x.correct)
        .map(x => x.title)
        .join(', ');
      this.results = {
        success: false,
        message: `Answers are ${correctChoices}. You lost ${this.content.points} points 🙁`
      };
    }
  }
}
