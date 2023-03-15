const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");



const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Twiste11",
    database: "chams",
    
});

app.get("/", (req, res) => {
    res.json("hello world")
});
app.get("/get-movies", (req,res) => {
const q = "SELECT * FROM movies" 
db.query(q,(err, data) => {
    if (err) return res.json(err)
    return res.json(data)
})
});
app.post("/post-movies", (req, res) => {
    const q = "INSERT INTO chams.movies (`name`, `img`, `year`, `rating`, `ind`) VALUES (?)"
    const values = [req.body.name, req.body.img, req.body.year, req.body.rating, req.body.ind]
    db.query(q,[values], (err,data) => {
        if (err) return res.json(err)
        return res.json("movie created")
    })
});

app.put("/update-movies/:id", (req, res) => {
    const id = req.params.id;
    // const q = "UPDATE movies SET name=?, img=?, year=?, rating=?, industry=?  WHERE id=?";
    const q = "UPDATE movies SET name=?, img=?, year=?, rating=?, ind=? WHERE id=?";
    const values = [
      req.body.name,
      req.body.img,
      req.body.year,
      req.body.rating,
      req.body.ind,
      id
    ];
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json("movie updated");
    });
  });

  app.delete("/delete-movies/:id", (req, res) => {
    const id = req.params.id;
    const q = "DELETE FROM movies WHERE id=?";
    db.query(q, [id], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book deleted");
    });
  });
  


app.listen(8000, function(){
	console.log("server is running on port 8000");
});

