## Final Checkpoint
This repository contains my solution of the NodeJS/React checkpoint, this is the last test the 2018 JavaScript class has passed, it recognizes my skills in React/Redux, Node.js, SQL, this work has been realized during 7 hours of test.

## Theme
The theme  of the test was to realize an Allociné or Imdb like website, using all the technologies we've learnt during the 5 months of formation. The imposed duration of the test was a full day of 7 hours of work. 

## To get started 
To run my solution you have to download or clone it and then run an `npm install` into both the front and the back folders.
Launch the two servers inside those folders using `npm start` and eventually change the proxy ip address on the package.json on the front folder like under :

```javascript

{
  "name": "front",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^1.4.0",
    "@material-ui/icons": "^1.1.0",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.4",
    "redux": "^4.0.0",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  },
  "proxy" : "http://your_ip_address:5000",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```
*This work was realised by Pierrick Quetille @The_Wild_Code_School_2018*  

