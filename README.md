# User Management Application

This is a simple User Management Application built with React and Redux Toolkit. It allows you to create, read, update and delete (CRUD) users. Redux Toolkit is used for state management, and JSON Server is used as a mock back-end.

## Application Structure

The application is divided into several main parts:

- **Components**: This is where the React components for the application live. They are divided into `UserList`, `AddUser`, `UpdateUser`, and `DeleteUser` components.

- **API**: This folder contains the API calls to the JSON Server.

- **Redux**: This folder houses all the Redux related code including the store configuration and the slice for managing the user state.

- **Styles**: This folder houses all the styles for the different components in our application.

- **App.js**: This is the main application file where all the components are assembled.

## Installation and Setup

To install and run this application:

1. Clone the repository to your local machine using `git clone <repository-url>`.

2. Navigate to the project directory `cd user-management-app`.

3. Install the necessary dependencies with `npm install`.

4. Make sure to install JSON Server globally if you haven't done so yet, using `npm install -g json-server`.

5. Run the JSON Server on port 4000 with `json-server --watch db.json --port 4000`.

6. Start the application with `npm start`. The application should now be running on `localhost:3000`.

## Usage

The application is easy to use:

- On the homepage, you will see a list of all users. If there are no users, the list will be empty.

- To create a new user, click on the 'Add User' button, fill in the form and submit.

- To update a user, click on the 'Update' button beside a user, modify the fields as needed and submit.

- To delete a user, click on the 'Delete' button beside a user.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---
Please feel free to modify this README according to your application's requirements or any additional features you implemented. Remember, a good README should effectively communicate your project's purpose and functionality.