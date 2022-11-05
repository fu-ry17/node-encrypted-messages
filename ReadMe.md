<!-- start script -->

yarn dev

<!-- start docker containers -->

docker-compose -f docker-compose.dev.yml up --build -d

<!-- env -->

copy env.example to create .env file