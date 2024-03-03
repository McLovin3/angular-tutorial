import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housinglocation } from "../housinglocation";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [],
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.css",
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId: number = -1;
  housingLocation?: Housinglocation;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }
}
