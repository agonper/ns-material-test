import { Component, OnInit } from "@angular/core";
import { TabSelectedEventData, BottomNavigationBar } from "nativescript-material-bottomnavigationbar";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    selectedTab = 0;

    constructor(private routerExtension: RouterExtensions, private activeRoute: ActivatedRoute) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onBarLoaded(args: any) {
        const bar = args.object as BottomNavigationBar;
        bar.showBadge(2);
    }

    onTabSelected(args: TabSelectedEventData) {
        this.selectedTab = args.newIndex;
    }
}
