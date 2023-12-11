-- CREATE DATABASE IF NO EXISTS `db_test`;
SELECT 'CREATE DATABASE db_test'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'db_test')\gexec