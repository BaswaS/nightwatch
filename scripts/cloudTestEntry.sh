#The environment variables sets in bitbuket pipeline enviroment variables
ENVIRONMENT=$1
TEST=$2

echo "===========Set enviroment variables on ${ENVIRONMENT} =============="

export TestURL=${!TestURL}
export password=${test_password}
export envname=${ENVIRONMENT}

echo "===========Run ${TEST} on ${ENVIRONMENT} =============="

npm run ${TEST}