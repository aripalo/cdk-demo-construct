import * as cdk from '@aws-cdk/core';
import { DemoConstruct } from '../src';

test('Missing values', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app);
  const demo = new DemoConstruct(stack, 'Demo');

  expect(demo.node.metadataEntry).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        data: 'Account Type not provided!',
      }),
    ]),
  );

  expect(demo.node.metadataEntry).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        data: 'Environment Type not provided!',
      }),
    ]),
  );


});
