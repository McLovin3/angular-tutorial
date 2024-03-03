import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from "@angular/common";
import { HousingService } from "../housing.service";
import { Housinglocation } from "../housinglocation";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter((location) =>
        location.name.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
