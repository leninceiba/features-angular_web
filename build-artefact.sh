#!/bin/bash
#to generate the build according to the environment is run from the console as follows:
#   build-artefact.sh prod
case $1 in
    prod ) ng build --configuration=production --output-path=dist-prod;;
    dev ) ng build --configuration=development --output-path=dist-dev;;
esac