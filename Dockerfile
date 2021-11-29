FROM nginx
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/test-project-rule.conf
EXPOSE 80