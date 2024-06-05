Sure, here's a sample README file that describes your project:

# Movie Storage App

This is a basic application for movie enthusiasts that allows users to view, add, delete, and favorite movies. The app fetches movies from a REST API and displays them to the user. Users can also add new movies, delete movies, and mark favorite movies. The app also allows users to view the trailer for each movie.

## Features

* View movies fetched from a REST API
* Add new movies to the app
* Delete movies from the app
* Mark favorite movies
* View the trailer for each movie
* Responsive design for mobile devices (375px - 500px)
* Professional and clean user interface

## Technologies Used

* React
* TypeScript
* Zustand for global state management
* Axios for API requests
* CSS for styling

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Start the backend server by running `npm start` in the `backend` directory.
4. Start the app by running `npm start` in the project directory.
5. Open your browser and navigate to `http://localhost:......` to view the app.

## API Endpoints

The app uses the following API endpoints:

* `GET http://localhost:8080/api/keys` - Fetch API key
* `GET http://localhost:8080/api/movies?key=<API-key>` - Fetch movies
* `POST http://localhost:8080/api/movies?key=<API-key>` - Add movie
* `PUT http://localhost:8080/api/movies/<imdbid>?key=<API-key>` - Toggle favorite movie
* `DELETE http://localhost:8080/api/movies/<imdbid>?key=<API-key>` - Delete movie

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.