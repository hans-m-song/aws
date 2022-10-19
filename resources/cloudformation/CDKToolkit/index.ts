import { cloudformation_include } from "aws-cdk-lib";
import { Construct } from "constructs";
import path from "path";

const location = path.join(
  process.cwd(),
  "resources",
  "cloudformation",
  "CDKToolkit",
  "template.yaml",
);

export default class CDKToolkit extends cloudformation_include.CfnInclude {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
      templateFile: location,
      preserveLogicalIds: false,
      parameters: {
        // TrustedAccounts: "",
        // TrustedAccountsForLookup: "",
        // CloudFormationExecutionPolicies: "",
        // FileAssetsBucketName: "",
        // FileAssetsBucketKmsKeyId: "",
        // ContainerAssetsRepositoryName: "",
        Qualifier: "axatol",
        // PublicAccessBlockConfiguration: "true",
      },
    });
  }
}
