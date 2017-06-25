# PoGo Raid Scanner

Scans a list of gyms provided in gyms.csv and sends notifications to a public Telegram channel.

### Requirements

NodeJS 7.6.0 or higher is required to run this application.

#### Usage

* run `npm install`
* Add gym co-ordinates to gyms.csv file
* Edit the config.js file, add a username, password, hash key, telegram bot token and telegram channel ID
* run `node scan.js`


#### NOTE
gyms.csv should have the following header: latitude,longitude

