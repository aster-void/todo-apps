import { Surreal } from "surrealdb";
import { surrealdbNodeEngines } from "@surrealdb/node";

const db = new Surreal({
	engines: surrealdbNodeEngines(),
});
await db.connect("mem://");
await db.close();
