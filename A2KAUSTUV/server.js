const express = require('express');
const app = express();

app.get("/", (req, res) =>
{
    console.log("Hi");
    res.render("home");
});

app.listen(3000);

const music = [
    {title:"Forty Six & 2", artist: "Tool", artistImage: "https://ia800203.us.archive.org/29/items/mbid-f2ff3f9b-d295-313f-b38c-990b4fcb260e/mbid-f2ff3f9b-d295-313f-b38c-990b4fcb260e-2389681103.jpg"},
    {title:"Parabola", artist: "Tool", artistImage: "https://e-cdn-images.dzcdn.net/images/cover/1645f3b192206dc412353b06491290d4/500x500-000000-80-0-0.jpg"},
    {title:"The Spirit Carries On", artist: "Dream Theater", artistImage: "https://m.media-amazon.com/images/I/71tB36+rJbL._AC_UF894,1000_QL80_.jpg"},
    {title:"Walk", artist: "Pantera", artistImage: "https://cdns-images.dzcdn.net/images/cover/740e45aa21bc556a429b695d7090866a/264x264.jpg"},
    {title:"Holy Wars", artist: "Megadeth", artistImage: "https://upload.wikimedia.org/wikipedia/en/d/dc/Megadeth-RustInPeace.jpg"},
    {title:"War Pigs", artist: "Black Sabbath", artistImage: "https://www.udiscovermusic.com/wp-content/uploads/2018/10/BlackSabbathHomeOfMetalLAExhibit2018-820x820.jpg"}
]

const playList = [];


