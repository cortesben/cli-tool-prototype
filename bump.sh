#!/bin/bash
# Collection two arguements
VERSION=$1
MESSAGE=$2
echo "Creating tag for: npm version $VERSION"
# Using version argument to tag repository
npm version $VERSION -m "$MESSAGE"

# Capturing the new version number
VERSION_NUMBER=$(git describe)
RELEASE_BRANCH="release-$VERSION_NUMBER"

# Creating new release branch
# Publish release branch
# Publish tag
git branch $RELEASE_BRANCH
git push -u origin $RELEASE_BRANCH
git push origin $RELEASE_BRANCH
