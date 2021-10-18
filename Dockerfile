FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
#COPY /nginx/.htpasswd /etc/nginx/.htpasswd
#COPY /nginx/self.crt /etc/nginx/ssl/self.crt
#COPY /nginx/self.key /etc/nginx/ssl/self.key
#COPY /nginx/dhparam.pem /etc/nginx/ssl/dhparam.pem
COPY /dist/checkplace /usr/share/nginx/html
