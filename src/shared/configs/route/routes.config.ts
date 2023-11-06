import { CloudStorage } from "cloud-storage/src/pages/CloudStorage/CloudStorage";
import { NCore } from "../../../../../../libs/module-expander";
import { cloudStoragePath } from "./paths";
import { DatabaseSVG } from "cloud-storage/src/shared";

export const getRoutesConfig: NCore.TRoutesFunc = () => [
	{ icon: DatabaseSVG, path: cloudStoragePath, component: CloudStorage, priority: 950 },
];
