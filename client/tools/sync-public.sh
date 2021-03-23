#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

cd ${MY_DIR}

export PUBLIC_GIT_IGNORE=${MY_DIR}/../public/.gitignore
rm ${PUBLIC_GIT_IGNORE}
touch ${PUBLIC_GIT_IGNORE}

./sync-public-from.sh '@kubevious/ui-components'
./sync-public-from.sh '@kubevious/ui-properties'
./sync-public-from.sh '@kubevious/ui-diagram'
./sync-public-from.sh '@kubevious/ui-alerts'

exit 0