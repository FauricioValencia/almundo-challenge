# almundo.com challenge

## Requirements

- `npm` must be installed in your computer

## Running the proyect with docker-compose

- Use a terminal and go to the root directory of your project
- The app will use the 4200 port in your machine, so be sure to make that port available
- From your terminal execute `docker-compose up` (or `make up` if you are in a Unix based system with Make installed on it)
- Wait for the proyect to be build, be patient, the first time could take much more time
- Open a web browser and go to localhost:4200.

## Running the proyect without docker-compose

This proyects use a MongoDB container to run its database, so if you want to run this project without docker and docker-compose
you will need to provide a different connection string to the `hotels service` and seed that database with the data present in
`./scripts/mongo/seed`. Also a user for that database must to be provided. you can set all those variables in the `.env` file
present in `services/hotels`. After that you can follow the next steps:

- Use a terminal and go to the root directory of your project
- Go to `./services/hotel`
- Run `npm install` to install dependencies
- Run `npm start` to start `hotel service`
- Go to `./website`
- Run `npm install -g @angular/cli` to install angular cli
- Run `npm install` to install dependencies
- Run `npm start` to start `angular website`
- Open a web browser and go to localhost:4200.
