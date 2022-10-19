import { App, Stack } from "aws-cdk-lib";
import CDKToolkit from "@resources/cloudformation/CDKToolkit/index.js";

const app = new App();
const stack = new Stack(app, "CDKToolkit", { stackName: "CDKToolkit" });
new CDKToolkit(stack, "CDKToolkit");
