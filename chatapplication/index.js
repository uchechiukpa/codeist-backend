import express from "express"
import cors from "cors"
import { getFriends } from "./database.js";


const app = express();


app.use(cors({ origin: "http://127.0.0.1:5501" }));




app.get("/friends", async (req, res) => {
    const { id } = req.query;
    try {
      const friends = await getFriends({id});

  
      res.status(200).send({
        status: 200,
        message: "successful",
        data: friends,
      });
    } catch (error) {
      console.log("error occurred getting friends", error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
app.listen(3000, () => {
    console.log(`server is running on 3000`);
  });