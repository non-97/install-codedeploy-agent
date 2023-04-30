#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CodeDeployStack } from "../lib/code-deploy-stack";

const app = new cdk.App();
new CodeDeployStack(app, "CodeDeployStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
