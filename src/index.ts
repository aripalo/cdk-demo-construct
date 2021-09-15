import * as cdk from '@aws-cdk/core';

export class DemoConstruct extends cdk.Construct {
  static accountTypes = ['shared', 'dev', 'preprod', 'prod'];
  static environmentTypes = ['development', 'feature', 'prestaging', 'staging', 'preproduction', 'production'];

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
    const accountType = this.getAccountType();
    const environmentType = this.getEnvironmentType();
    this.validateAccountType(accountType);
    this.validateEnvironmentType(environmentType);
    this.node.setContext('accountType', accountType);
    this.node.setContext('environmentType', environmentType);
  }

  private getAccountType(): string | undefined {
    return this.node.tryGetContext('account-type') || this.node.tryGetContext('account') || process.env.CDK_ACCOUNT_TYPE;
  }

  private getEnvironmentType(): string | undefined {
    return this.node.tryGetContext('environment-type') || this.node.tryGetContext('environment') || process.env.CDK_ENVIRONMENT_TYPE;
  }

  private validateAccountType(value?: string): void {
    if (typeof value !== 'string') {
      cdk.Annotations.of(this).addError('Account Type not provided!');
    }
    if (value && !DemoConstruct.accountTypes.includes(value)) {
      cdk.Annotations.of(this).addError(`Invalid Account Type provided: ${value}`);
    }
  }

  private validateEnvironmentType(value?: string): void {
    if (typeof value !== 'string') {
      cdk.Annotations.of(this).addError('Environment Type not provided!');
    }
    if (value && !DemoConstruct.environmentTypes.includes(value)) {
      cdk.Annotations.of(this).addError(`Invalid Environment Type provided: ${value}`);
    }
  }

}

