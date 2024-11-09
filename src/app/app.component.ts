import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { AboutWorkComponent } from "./components/about-work/about-work.component";
import { AboutWorkTwoComponent } from "./components/about-work-two/about-work-two.component";
import { AddressDetailsComponent } from "./components/address-details/address-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDetailsComponent, AboutWorkComponent, AboutWorkTwoComponent, AddressDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userInfo';
}
