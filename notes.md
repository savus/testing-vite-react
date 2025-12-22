TASK: make portfolio gallery have toggled visibility hooked up to navbar list item click events

BUG - List of users fetched from json-server db.json file would render in React component without problems, but when any of the Users were edited or deleted using fetch requests, the data from the deleted User would inject itself into the User preceding it, though without any errors in the db.json file. 

SOLUTION - assigning allUsers array index as a default value for React's {key} prop was causing the glitch. Once the value was converted to the User's id, everything worked as intended.