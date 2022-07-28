# GD Watcher (Game Deals Watcher)
##Summary
It is a web application that help users to look up video games deals from various online stores such as Steam, GOG, and more. Users can also visit stores that provides the deals. It also provides wishlist for each users to track certains video games's best deals. The wishlist feature can only be used after creating an account. The account profile can also be updated through profile page after logging in. 

For this program, I used React JS as frontend and Ruby on Rails as backend. I used Postgresql as my database.
I also used an external API called Cheapshark API and you can check it out through this link: https://apidocs.cheapshark.com/
It is completely free to use and it doesn't require any API key.

##Installation
To begin, please make sure all Ruby On Rails gems are installed using this command in your console (make sure you're in the correct directory:
```bash
bundle install
```
Also, make sure all node modules are installed as well (please install it in the client folder!):
```bash
npm install --prefix client
```
("--prefix client" at the end make sure that your node modules are installed in the "client" folder.)

Now, it will requires you to create a database on your local machine. You can create a new database by typing this in your console:

First, start the Postgresql service on your local machine:
```bash
sudo service postgresql start
```
Create a database:
```bash
rails db:create
```
Then, please migrate all the necessary column names by:
```bash
rails db:migrate
```

To run the program, please start both front-end and back-end using the following commands in to your console:
Database

Front-end (React JS)
```bash
npm start --prefix client
```
Back-end (Ruby On Rails)
```bash
rails s
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

