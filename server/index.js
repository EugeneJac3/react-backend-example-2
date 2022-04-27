const express = require('express');

const PORT = process.env.port || 3001;

const app = express();

app.get("/api", (req, res) =>{
    // Connecting to my DB model
    // Getting a collection/table
    // Send that data as the JSON response
    res.json({message: "Hello from server"})
})

app.get("/users/42", (req,res) => {
    const aUser= {
        firstName: "Luke",
        lastName: "Skywalker",
        age: 25,
        favColor: "Blue"
    }

    res.json(aUser);
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})