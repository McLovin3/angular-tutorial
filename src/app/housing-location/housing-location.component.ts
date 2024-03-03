import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Housinglocation } from "../housinglocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./housing-location.component.html",
  styleUrl: "./housing-location.component.css",
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
