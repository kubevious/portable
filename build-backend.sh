#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd ${MY_DIR}/src

echo '*************************************'
echo '*************************************'
echo '*************************************'

rm -rf dist/

npm run build
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Build failed"
  exit 1;
fi

# npm run lint
# RESULT=$?
# if [ $RESULT -ne 0 ]; then
#   echo "Lint failed"
#   exit 1;
# fi
