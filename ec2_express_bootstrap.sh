echo '######## --------- sudo yum update --------- ########'
sudo yum update -y
echo '######## --------- sudo yum update complete --------- ########'

# apache
echo '######## --------- sudo yum install httpd --------- ########'
sudo yum install httpd -y
echo '######## --------- sudo install httpd complete --------- ########'

# nvm
echo '######## --------- curl install nvm --------- ########'
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
echo '######## --------- curl install nvm --------- ########'
echo '######## --------- . ~/.nvm/nvm.sh --------- ########'
. ~/.nvm/nvm.sh
# node
echo '######## --------- sudo nvm install node --------- ########'
nvm install node
echo '######## --------- sudo nvm install node complete --------- ########'
node -e "console.log('Running Node.js ' + process.version)"

cd /var/www/html
pwd

# git
echo '######## --------- sudo yum install git -y --------- ########'
sudo yum install git -y

# repo
echo '######## --------- sudo git clone express_ec2_timeout_app repo --------- ########'
sudo git clone https://github.com/squareben1/express_ec2_timeout_app.git
cd express_ec2_timeout_app/
sudo chmod -R 777 .

# npm install dependencies
echo '######## --------- npm install --------- ########'
npm install

echo '######## --------- npm install -g pm2 --------- ########'
npm install -g pm2
echo '######## --------- pm2 start app.js --------- ########'
pm2 start app.js --watch
pm2 save
pm2 startup
pm2 list

# ensure httpd on / started
sudo chkconfig httpd on
echo '######## --------- start httpd --------- ########'
sudo service httpd start
