# Name
Baxter Boards

# Functionality
Users may create boards, threads, and posts for other users to see. Users, boards, threads, and posts are saved in a SQL database. When a form is submitted to the corresponding database, the React App sends the data through REST to a SQL lite database, where it is stored. 

In order to register for the site, users must select the "Create an Account" option on the login screen and provide an email address. They will also be prompted to choose a frontend facing username and an encrypted password that is not visible on the backend. 

Users are only able to create boards, posts, and threads if they are registered to the site and are successfully logged in. A user who is not registered or logged in may view all three components, but are not able to contribute to the discussion.

Boards and Topics are not able to be deleted once the form is submmited to the site. Only posts are able to be deleted after submission. A user may choose to update the email address on file, their username, or their password, if they so choose. 

# Technologies Used
HTML, CSS, Bootstrap, Javascript, React, REST API, Axios, SQLite
