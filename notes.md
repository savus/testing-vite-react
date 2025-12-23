TASK: make portfolio gallery have toggled visibility hooked up to navbar list item click events

BUG - List of users fetched from json-server db.json file would render in React component without problems, but when any of the Users were edited or deleted using fetch requests, the data from the deleted User would inject itself into the User preceding it, though without any errors in the db.json file.

SOLUTION - assigning allUsers array index as a default value for React's {key} prop was causing the glitch. Once the value was converted to the User's id, everything worked as intended.

BUG - Trying to handle error catching in updateUserOpt function was ineffective. No errors were displayed when the response failed and state of User's card was not reset.

SOLUTION - have the updateUserOpt return the updateUser api request and then use a .catch() method in the click event of the User's Edit Button.

BUG - Data analysis showed that when the server response failed, the data in the allUsers list was reset back to it's original state, but the UserCard component retained the edited data and did not reset during the re-render.

SOLUTION - in the .catch() method, along with calling the error method, use the UserCard's state setter to set the data to the original value provided by the User object.
