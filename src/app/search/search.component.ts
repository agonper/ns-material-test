import { Component, OnInit } from "@angular/core";
import { resolveAfter } from "~/app/search/helper";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    done = false;

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        resolveAfter(1000, 2000, 3000, 4000).then(() => this.done = true);
    }
}
