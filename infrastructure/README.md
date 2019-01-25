# Infrastructure Deployment for test.wsealug.net

To deploy the AWS infrastructure for test.wsealug.net run the following command. Be sure to have the [AWS CLI](https://aws.amazon.com/cli/) installed first. 


`AWS_PROFILE=wsealug AWS_DEFAULT_REGION=us-east-1 aws cloudformation update-stack --stack-name test-wsealug-net-infra --template-body file://static-site.yml --parameters ParameterKey=HostedZone,ParameterValue="test.wsealug.net" ParameterKey=Route53ZoneID,ParameterValue="Z3CP9MYC3MFDQN"`


The above assumes you have an AWS Profile setup with creds from the AWS Account and a profile using 'wsealug' 
