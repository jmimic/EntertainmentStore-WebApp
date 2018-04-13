# Entertainment Store
## Boutique Cassee Store
* Offline Website (WCF Web service)
* Single URL (using display: none/block) <br />

Uses: IISExpress(x64), SQLite Runtime dependencies, HTML, CSS, JS, small-size DB (passwords hashed) <br />
Note: Store restricts access: Open-access (to public) and Closed-access (to registered) <br />
This website is used offline, relies on IISExpress viewed on browser of choice pointing to localhost <br />
* README.txt is included, follow to correctly get website up and running <br />

The website features: <br />
* Registration & Sign-in (without alert box) <br />
* Purchasing items (without alert box) <br />
* Posting & Viewing comments <br /><br/>

![1 estore-main](https://user-images.githubusercontent.com/32786237/38714794-0195acee-3f2c-11e8-869e-58e02a2955d6.PNG)<br/>
![2 estore-loggedin](https://user-images.githubusercontent.com/32786237/38714800-054f8f12-3f2c-11e8-99cc-17236fdfdb37.PNG)<br/>
![3 estore-purchase](https://user-images.githubusercontent.com/32786237/38714803-08298bc0-3f2c-11e8-9c22-210b7305ffac.png)<br/>
![4 estore-guestbook](https://user-images.githubusercontent.com/32786237/38714807-0a456fb4-3f2c-11e8-84f6-f84b73a333bc.PNG)<br/><br/>

The website's security is vulnerable in ways that it is prone to HTML/SQL injection: <br />
* XSS attacks <br />
* CSRF attacks <br />

Note: In future Parameterise Queries, Sanitise HTML, SessionIDs, and more <br />
