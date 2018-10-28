# a small shell script to run smoke tests on multiple browsers
ENVIRONMENT=$1
export NODE_ENV=${ENVIRONMENT}

browsers=( "ie" "edge"  "firefox" "chrome" )

for i in "${browsers[@]}"
do

 nightwatch -c src/config/browserstack.conf.js -e ${i} --tag=browserstack

done