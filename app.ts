import "jsr:@std/dotenv/load";
import { MongoClient } from "mongo";
import { Client } from "mysql";

const mysqlClient = await new Client().connect({
  hostname: Deno.env.get("MYSQL_HOST"),
  username: Deno.env.get("MYSQL_USER"),
  db: Deno.env.get("MYSQL_DB"),
  password: Deno.env.get("MYSQL_PASS"),
  port: Number(Deno.env.get("MYSQL_PORT")),
  poolSize: 3,
});

const client = new MongoClient();
await client.connect(Deno.env.get("MONGO_URI")!);
