#!/bin/bash

set -eux -o pipefail

aws cloudformation deploy \
  --template-file ./resources/cloudformation/CDKToolkit/template.yaml \
  --stack-name CDKToolkit \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides Qualifier=axatol
