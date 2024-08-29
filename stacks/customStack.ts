import {Stack, StackProps} from 'aws-cdk-lib'
import {Construct} from 'constructs'
import {MonitoringFacade} from 'cdk-monitoring-constructs'
import {Bucket} from 'aws-cdk-lib/aws-s3'
import {BucketDeployment, Source} from 'aws-cdk-lib/aws-s3-deployment'

export class CustomStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const bucket = new Bucket(this, 'bucket')
    new BucketDeployment(this, 'bucket deployment', {
      destinationBucket: bucket,
      sources: [
        Source.data('test.txt', 'some text')
      ]
    })

    const monitoring = new MonitoringFacade(this, 'Monitoring')
    monitoring.monitorScope(this)
  }
}