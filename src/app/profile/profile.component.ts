import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <div class="profile">
      <h3>Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>
    </div>
`,
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
