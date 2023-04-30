import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface CodeDeployProps {
  tag: {
    key: string;
    value: string;
  };
}

export class CodeDeploy extends Construct {
  constructor(scope: Construct, id: string, props: CodeDeployProps) {
    super(scope, id);

    new cdk.aws_codedeploy.ServerDeploymentGroup(this, "Default", {
      ec2InstanceTags: new cdk.aws_codedeploy.InstanceTagSet({
        [props.tag.key]: [props.tag.value],
      }),
      deploymentConfig: cdk.aws_codedeploy.ServerDeploymentConfig.ALL_AT_ONCE,
    });
  }
}
