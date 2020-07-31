apk add --update python curl which bash
curl -sSL https://sdk.cloud.google.com | bash
rm -rf /root/.config/gcloud
ln -s /root/google-cloud-sdk/bin/gcloud /tools/
