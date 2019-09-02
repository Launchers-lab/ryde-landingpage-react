yarn build
aws s3 sync --acl public-read --sse --delete ./build s3://rydeapp.io
aws cloudfront create-invalidation --distribution-id E10A7YIVPM65KN \
  --paths /index.html /index.html