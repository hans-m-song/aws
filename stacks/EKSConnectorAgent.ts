import * as cdk from "aws-cdk-lib";
import { EKSConnectorAgentRole } from "@resources/iam/Role-EKS-ConnectorAgent.js";
import { App } from "aws-cdk-lib";

const app = new App();
const stack = new cdk.Stack(app, "EKSConnectorAgent");
new EKSConnectorAgentRole(stack, "deep-thought");
