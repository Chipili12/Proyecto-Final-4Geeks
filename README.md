<div align="center">
<h1>TiendaNuestra</h1>
 <img align="center" id="img" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGViMjg2MzcyMGFhOGYzNzBiYTg2YjJkMDE4NDUyYTJhYmNlNGFlOCZjdD1n/bslZVlHus4AVVEQf1S/giphy.gif" alt="">
<h3>E-Commerce/Amazon scrapper</h3>
</div>

## Overview

This project utilizes an external web scraping tool designed to extract product information from Amazon, adding said items, along description, price, weight, etc, to the E-Commerce. This project was inspired by [TiendaMia](https://tiendamia.com/uy/), Leveraging Python, Flask, and SQLAlchemy on the backend, and HTML, CSS, React, JavaScript, and Bootstrap on the frontend.

## Features

- Web Scraping: Utilizes an external API for efficient and reliable scraping of Amazon Products.
- User-Friendly Interface: Built with React, Bootstrap, and custom CSS, offering an intuitive and responsive UI for easy navigation and interaction.
- Data Storage: Employs SQLAlchemy to efficiently store scraped data in a database, ensuring persistence and easy retrieval.
- Customization: Users can specify search parameters and filters for scrapped items according to their requirements.
- Authentication: Offers log-in features to ensure privacy & persistency of shopping cart, favourite items, etc.

## Technologies Used

- Backend: Python, Flask, SQLAlchemy
- Frontend: HTML, CSS, React, JavaScript, Bootstrap

## Usage

If you haven't already installed npm, you'll need [Node.js](https://nodejs.org/) for the front end, and [Python](https://www.python.org/downloads/) for the backend.
After that, clone the repository to your local machine.

```bash
cd /Path/to/directory

Git clone https://github.com/Chipili12/Proyecto-Final-4Geeks/
```

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Postgres recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
   
Install other necessary packages.

```bash
npm i
```

Start the backend server.

```bash
pipenv run start
```

Run frontend

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with any browser of your choosing

## Credits

This project was developed by:

- [Santiago Burgueño](github.com/chipili12)
- [Gabriel Rodriguez](github.com/gabroma)
- [Agustina Ferreira](github.com/agustinaf18)

Special thanks to [4GeeksAcademy](https://github.com/4GeeksAcademy) for providing the knowledge necessary to develop this project.
