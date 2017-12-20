# Web-Development small projects
Projects related to front-end, sometimes relying on back-end <br />

## BoutiqueCasseeStore.rar
Offline Website (WCF Web service), single URL (using display: none/block) <br />
Uses IISExpress(x64), SQLite Runtime dependencies, HTML, CSS, JS, small-size DB (passwords hashed) <br />
Note: Store restricts access: Open-access (to public) and Closed-access (to registered) <br />
This website is used offline, relies on IISExpress viewed on browser of choice pointing to localhost <br />
* README.txt is included in the .rar file, follow to correctly get website up and running <br />

The website has features such as: <br />
* Registration & Sign-in (without alert box) <br />
* Purchasing items (without alert box) <br />
* Posting & Viewing comments <br />

The website's security is vulnerable in ways that it is prone to HTML/SQL injection: <br />
* XSS attacks <br />
* CSRF attacks <br />

Note: In future Parameterise Queries, Sanitise HTML, SessionIDs, and more <br />
