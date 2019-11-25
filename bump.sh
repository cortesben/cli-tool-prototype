#!/bin/bash

VERSION=$1
MESSAGE=$2

echo "Creating tag for: npm version $VERSION"

npm version $VERSION -m "$MESSAGE"
VERSION_NUMBER=$(git describe)
RELEASE_BRANCH="release-$VERSION_NUMBER"

git branch $RELEASE_BRANCH
# git push -u origin $RELEASE_BRANCH
# git push origin $VERSION

# git push origin -u "release_${VERSION}
# git push origin master
