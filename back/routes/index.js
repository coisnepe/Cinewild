import express from 'express';

const router = express.Router();
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

/*INSERT into into the DB a new movie */
router.post('/api/movie/add', (req, res) => {

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("cinewild");
    let newMovie = {
      Title : req.body.title,
      Year : req.body.year,
      Rated : req.body.rated,
      Released : req.body.released,
      Runtime : req.body.runtime,
      Genre : req.body.genre,
      Director : req.body.director,
      Writer : req.body.writer,
      Actors : req.body.actors,
      Plot : req.body.plot,
      Language : req.body.language,
      Country : req.body.country,
      Awards : req.body.awards,
      Poster : req.body.poster,
      Metascore : req.body.metascore,
      imdbRating : req.body.imdbRating,
      imdbVotes : req.body.imdbVotes,
      imdbID : req.body.imdbID,
      Type : req.body.type,
      Response : req.body.response
  };
    dbo.collection("movies").insertOne(newMovie, (err, res) => {
      if (err) throw err;
    });
  res.status(200).json({ message: `Ton film ${req.body.title} a bien été enregistré`});
  db.close();
    
  });
});

/* GET all movies list. */
router.get('/api/movies', (req, res) => {
  
  MongoClient.connect(url, (err, db) =>  {
    if (err) throw err;
    const dbo = db.db("cinewild");
    dbo.collection("movies").find({}).toArray((err, result) => {
      if (err) throw err;
      res.status(200).json(result);
      db.close();
    });
  });
});
/* GET 3 random movies from the DB */
router.get('/api/movies/random', (req, res) => {
  
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("cinewild");
    dbo.collection("movies").aggregate(
      [ { $sample: { size: 3 } } ]
    ).toArray((err, result) => {
      if (err) throw err;
      res.status(200).json(result);
      db.close();
    });
  });
});

/* DELETE a movie from the DB */
router.delete('/api/movies/delete', (req, res) => {
  
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("cinewild");
    let movieId = {_id : new mongo.ObjectId(req.body.id)};
    dbo.collection('movies').deleteOne(movieId, (err, res) => {
      if (err) throw err;
    });
    res.status(200).json({message : 'Ton film a bien été supprimé !'});
    db.close();
  });
});

/*POST route to return one movie by it's ID*/
router.post('/api/movie', (req, res) => {
  
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("cinewild");
    let movieId = {_id : new mongo.ObjectId(req.body.id)};
    dbo.collection('movies').find(movieId).toArray((err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
    db.close();
  });
});

export default router;
