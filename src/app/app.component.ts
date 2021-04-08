import { Component, OnInit } from "@angular/core";
import { TabSelectedEventData, BottomNavigationBar } from "@nativescript-community/ui-material-bottomnavigationbar";
import { themer } from "@nativescript-community/ui-material-core";
import { Color } from "@nativescript/core";

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
        themer.setPrimaryColor(new Color("#bff937"));
        themer.setPrimaryColorVariant(new Color("#33B5E5"));
        themer.setAccentColor(new Color("#ff8a39"));
        themer.setSecondaryColor(new Color("#a830d7"));
        console.log("Accent color:", themer.getAccentColor())
        console.log("App color scheme:", themer.getAppColorScheme())
        console.log("On surface color:", themer.getOnSurfaceColor())
        console.log("Primary color:", themer.getPrimaryColor())
        console.log("Primary color variant:", themer.getPrimaryColorVariant())
        console.log("Secondary color:", themer.getSecondaryColor())
        console.log("Surface color:", themer.getSurfaceColor())
    }

    onBarLoaded(args: any) {
        const bar = args.object as BottomNavigationBar;
        bar.showBadge(2);
    }

    onTabSelected(args: TabSelectedEventData) {
        this.selectedTab = args.newIndex;
    }
}
