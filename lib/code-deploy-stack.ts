import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc } from "./constructs/vpc";
import { Ec2Instance } from "./constructs/ec2-instance";
import { CodeDeploy } from "./constructs/code-deploy";

export class CodeDeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const codeDeployTargetTag = {
      key: "CodeDeployTarget",
      value: "true",
    };

    // VPC
    const vpc = new Vpc(this, "Vpc");

    // EC2 Instance
    new Ec2Instance(this, "Ec2 Instance A", {
      vpc: vpc.vpc,
      tag: codeDeployTargetTag,
    });

    // Code Deploy
    new CodeDeploy(this, "CodeDeploy", { tag: codeDeployTargetTag });
  }
}
