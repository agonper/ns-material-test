import { Component, OnInit } from "@angular/core";
import { TabSelectedEventData, BottomNavigationBar } from "@nativescript-community/ui-material-bottomnavigationbar";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    selectedTab = 0;

    constructor() {
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
