# foundation-react-express-mongodb
Boiler plate for a React, Express.js and MongoDB stack
## Setup via Docker (Suggested)
- Make sure you have Docker installed
- Run `docker-compose up`
- Use `docker ps` to check containers are up and running
- Use `docker-compose down` to shut down containers

## Setup Manually
- `npm install`
- If running with local database:
	- Ensure mongodb is installed
	- Start mongo daemon
		- Option 1: In terminal
			- `mongod`
		- Option 2: As a daemon
			- If initial run, `mkdir ~/log`
			- `mongod --fork --logpath ~/log/mongodb.log`
- Update config.json with relevant mongo url
- `mongo`
- Start:
	- Development: `npm run dev`
	- Production: `npm start`
