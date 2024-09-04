const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put('https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"PRIVATE-KEY": "d459187c-4159-49b9-ad33-8c978c01dfe9"}}
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)

  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);