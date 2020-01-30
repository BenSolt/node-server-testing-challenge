const express = require("express");

const Halo = require("../halo/haloModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/users", (req, res) => {
    Halo.find()
    .then(halo => {
      res.status(200).json(halo);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;