rm -rf ariya-client
git clone https://karthik-d-n:anuradha8490@github.com/aryabot-phamax/ariya-client.git
cd ariya-client
pwd
echo "SKIP_PREFLIGHT_CHECK=true" > .env
npm install
#echo "{\"direct_line_secret\":\"$1\",\n \"bot_id\":\"$2\",\n \"speech_sdk_subscription\":\"$3\",\n \"speech_sdk_region\":\"$4\",\n \"speech_sdk_endpoint\":\"$5\",\n \"clientId\":\"${12}\",\n \"tenantId\":\"${13}\" }" > src/rest/api.config.json
#echo "{\"showShortAndLongAnswer\":\"$6\",\n \"isLoginRequired\":\"$7\" }" > src/appConfig/featureConfig.json
rm package-lock.json
npm run build
#sh ../deploy.sh $8 $9
#az login -u $8 -p $9
#az storage blob upload-batch --account-name ${14} -s ./build -d '$web'
echo "Deployed" > success.txt
echo "done"