import { Component } from '@angular/core';
import { SkillTagsComponent } from "../skill-tags/skill-tags.component";

@Component({
  selector: 'app-profile-card',
  imports: [SkillTagsComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {

}
