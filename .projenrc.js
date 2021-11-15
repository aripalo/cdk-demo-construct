const { AwsCdkConstructLibrary, NodePackageManager } = require('projen');
const project = new AwsCdkConstructLibrary({
  authorName: 'Ari Palo',
  authorAddress: 'ari.palo@almamedia.fi',
  name: 'cdk-demo-construct',
  description: 'Just for demo/test purposes',
  repositoryUrl: 'https://github.com/ari.palo/cdk-demo-construct.git',


  license: 'MIT',
  stability: 'experimental',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',


  //docgen: true,
  gitignore: ['.DS_Store'],
  packageManager: NodePackageManager.NPM,

  cdkDependencies: ['@aws-cdk/core'], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['shelljs'], /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();
