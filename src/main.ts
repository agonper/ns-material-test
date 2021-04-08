// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "@nativescript/angular";

import { AppModule } from "./app/app.module";
import { install, installMixins } from "@nativescript-community/ui-material-core";
install();
installMixins()

platformNativeScriptDynamic().bootstrapModule(AppModule);
