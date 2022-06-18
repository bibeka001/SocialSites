const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors")
const { Passport } = require("passport/lib");
const app = express();
app.use(
  cookieSession({
    name: "session",
    keys: ["Bibek"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(Passport.initialize());
app.use(Passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    Credential: true,
  })
);
app.listen("5000", () => {
  console.log("Server is running");
});
