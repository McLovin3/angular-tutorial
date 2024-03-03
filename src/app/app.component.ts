import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
