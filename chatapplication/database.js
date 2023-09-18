import mysql from "mysql2/promise"
import dotenv from 'dotenv';

dotenv.config();

let pool = mysql.createPool({
  host: "127.0.0.1",
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  connectionLimit: 10,
});

export async function getFriends (query) {
    const { id } = query
    console.log(id)
  try {
    const query = "SELECT * FROM friends where userId = ? join users on id = friendId";
    const [rows] = await pool.query(query, id);

    console.log('rows',rows)

    if (rows.length == 0) {
      return null;
    }

    return rows;
  } catch (error) {
    console.log("error occurred getting users", error.message);
    throw error;
  }
};
