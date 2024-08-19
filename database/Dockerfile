FROM mysql:8.0.32
ENV MYSQL_ROOT_PASSWORD=123456
EXPOSE 3306
HEALTHCHECK --interval=10s --timeout=10s --retries=5 CMD mysqladmin ping -h localhost || exit 1

CMD ["mysqld"]
