import express from 'express';

const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Z0upette",
  database: "cinewild"
});

router.post('/api/movie/add', (req, res) => {
  console.log("lkj")
  let insert =  'INSERT INTO movies (title, genre, duration, releasedate, actors, synopsis, rating, image, director) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);'
  con.query(insert, [req.body.title, req.body.genre,req.body.duration, req.body.releasedate, 
    req.body.actors, req.body.synopsis, req.body.rating, req.body.image, req.body.director], (err, result, fields) => {
      
      console.log(err,result)

    if (err) throw err;
    res.status(200).json({ message: 'Ton film a bien été enregistré'});
  });

});

/* GET all movies list. */
router.get('/api/movies', (req, res) => {
    con.query("SELECT * FROM movies", (err, result, fields) => {
      if (err) throw err;
      res.status(200).json(result);
    });
});

router.get('/api/movies/random', (req, res) => {
  con.query("SELECT * FROM movies ORDER BY RAND() LIMIT 4", (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

router.delete('/api/movies/delete', (req, res) => {
  con.query(`DELETE FROM movies WHERE id = '${req.body.id}'`, (err, result, fields) => {
    console.log(req, res);
    
    if (err) throw err;
    res.status(200).json({ message: 'Ce film a bien été supprimé'});
  });
});



export default router;
