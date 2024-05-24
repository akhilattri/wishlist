import express from 'express';
import parser from 'body-parser';

const app = express();

app.set('view engine', 'ejs');

app.use(parser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.render("main");
});

app.get("/:route", (req, res)=>{
    let title = req.params.route;
    res.send("you accessed " + title);
});

app.listen(3000, ()=>{
    console.log("listening on port 3000...");
});