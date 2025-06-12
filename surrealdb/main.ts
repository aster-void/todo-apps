import Surreal from "surrealdb";
import { SurrealdbNodeEngine } from "@surrealdb/node";

const db = new Surreal({
	engines: new SurrealdbNodeEngine(),
});
await db.connect("file:local.db");
