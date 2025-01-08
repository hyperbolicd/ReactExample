# ReactExample

## Run locally
Update backend url in `src/config/config.js`

Execute `npm start` for development, or `npm run build` then `serve -s build` in production.

## Use GitHub Actions to deploy to S3 and CloudFront

### Pre-request
1. Create S3, CloudFront
2. Create an IAM user with the necessary permissions to access S3 and CloudFront. For testing purposes, you can assign full access permissions temporarily. Once the user is created, generate an access key for programmatic access.

### Actions secrets and variables
|Type|Key|Note|
|---|---|---|
|Variable|`NODE_VERSION`||
|Secret|`AWS_ACCESS_KEY_ID`|IAM user|
|Secret|`AWS_SECRET_ACCESS_KEY`|IAM user|
|Secret|`AWS_REGION`||
|Secret|`AWS_S3_BUCKET_NAME`|S3|
|Secret|`AWS_CF_DISTRIBUTION_ID`|CloudFront|
