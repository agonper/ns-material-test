import { Component, OnInit } from "@angular/core";
import { alert, AlertOptions, MDCAlertControlerOptions, confirm, ConfirmOptions } from "nativescript-material-dialogs";
import { Color, ImageSource } from "tns-core-modules";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    showInfoDialog() {
        const options: AlertOptions & MDCAlertControlerOptions = {
            title: "¿Dónde ha ido mi progreso?",
            titleAlignment: "center",
            message: "Mientras realizas una exposición la información sobre tu progreso se oculta temporalmente. Volverá a estar disponible en cuanto finalices la exposición.",
            okButtonText: "Vale",
            buttonInkColor: new Color(255, 255, 0, 0),
            buttonTitleColor: new Color(255, 255, 0, 0)
        };
        alert(options).then((result) => console.log(result));
    }

    showConfirmDialog() {
        const options: ConfirmOptions & MDCAlertControlerOptions = {
            title: "¿Te sientes mejor?",
            titleAlignment: "center",
            okButtonText: "Sí",
            cancelButtonText: "No",
            buttonInkColor: new Color(255, 255, 0, 0),
            buttonTitleColor: new Color(255, 255, 0, 0),
            cancelable: false
        };
        confirm(options).then((result) => console.log(result));
    }

    showPositiveDialog() {
        const options: ConfirmOptions & MDCAlertControlerOptions = {
            title: "¿Te vas?",
            titleAlignment: "center",
            message: "No deberías abandonar una exposición salvo por causa mayor. Recuerda el papel negativo de la evitación. Es normal que tengas picos de ansiedad. Si te quedas, acabarás controlándolos.",
            okButtonText: "Me quedo",
            cancelButtonText: "Salir",
            buttonInkColor: new Color(255, 255, 0, 0),
            buttonTitleColor: new Color(255, 255, 0, 0),
        };
        confirm(options).then((result) => console.log(result));
    }

    showDestructiveDialog() {
        const options: ConfirmOptions & MDCAlertControlerOptions = {
            titleIcon: ImageSource.fromResourceSync("icon"),
            title: "¿Desvincular dispositivo?",
            titleAlignment: "center",
            titleColor: new Color(255, 255, 0, 0),
            message: "Si desvinculas este dispositivo perderás todo el progreso almacenado localmente (p. ej. contenido psicoeducativo visto) y tendrás que volver a configurar la app en caso de reinstalación",
            okButtonText: "Volver",
            cancelButtonText: "Salir",
            buttonInkColor: new Color(255, 255, 0, 0),
            buttonTitleColor: new Color(255, 255, 0, 0)
        };
        confirm(options).then((result) => console.log(result));
    }
}
