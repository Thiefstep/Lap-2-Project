# Recycling Community Website
The Recycling Community Website is a platform where users can post items that they no longer need and would have thrown away or recycled in previous circumstances. Other users can then browse the items and either take them for free or buy them for a price. The website is designed to help with a recycling issue that the council is having, by reducing the amount of waste that is sent to landfill or recycling centers.

# Features
User registration and login
Post items for free or for sale
Search and browse items by category or keyword
Contact seller through phone, email or other preferred method
No checkout payment options
Admin panel to manage users, items, and categories
Technologies
The website is built using the following technologies:

HTML, CSS, and JavaScript for the front-end
Express and Node.js for the back-end
PostgreSQL for the database
Getting started
To run the website on your local machine, follow these steps:

Clone the repository from GitHub: git clone https://github.com/yourusername/recycling-website.git
Install the dependencies: `npm install`
Create a .env file in the root directory with the following environment variables:
bash
Copy code
DB_URL=postgres://user:password@localhost:5432/recycling_website
SESSION_SECRET=your_session_secret
Replace user and password with your PostgreSQL credentials, and your_session_secret with a random string of characters to secure the session.
4. Create the database tables: npm run db:create && npm run db:migrate

Start the server: `npm start`
Open your browser and go to http://localhost:3000
Contributing
Contributions to the Recycling Community Website are welcome! If you want to report a bug, suggest a feature, or submit a pull request, please follow the guidelines in CONTRIBUTING.md.

# License
The Recycling Community Website is licensed under the MIT License. See LICENSE.md for details.
