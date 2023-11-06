import { getRoutesConfig } from "./shared/configs";
import { IModule, Module, registerModule } from "../../../libs/module-expander";

export class CloudStorageModule extends Module implements IModule {}

registerModule({
	name: "",
	routesConfig: getRoutesConfig,
})(CloudStorageModule);
