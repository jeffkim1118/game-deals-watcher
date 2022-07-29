# GD Watcher (Game Deals Watcher)
![image](https://user-images.githubusercontent.com/64029918/181631894-2d493c4b-1319-4532-b885-f1d435af3240.png)

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
## Interface
Register Page
![image](https://user-images.githubusercontent.com/64029918/181807997-c9c49da6-4b6b-4b72-858d-cbd846a29e68.png)

Login Page
![image](https://user-images.githubusercontent.com/64029918/181808052-bb82b570-ee6e-488c-8bbc-bfcc95b8c29d.png)

Browse Page
![image](https://user-images.githubusercontent.com/64029918/181808127-5cb3a83a-cedf-48a2-89a6-8aa5b43a6873.png)

Wishlist Page(after logging in)
![image](https://user-images.githubusercontent.com/64029918/181808255-7f1c58a0-a8fb-4638-b262-838f5cae82dc.png)

Profile Page(after register and logging in)
![image](https://user-images.githubusercontent.com/64029918/181808337-54c0cb3a-24b4-481d-a670-00e43c453e8b.png)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

