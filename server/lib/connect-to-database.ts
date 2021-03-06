import "reflect-metadata";
import { createConnection, Connection, getConnectionOptions } from "typeorm";
import { User } from "../entities/user";
import { Message } from "../entities/message";

// here createConnection will load connection options from
// ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
// files, or from special environment variables

export async function connectToDatabase() {
  const connectionOptions = await getConnectionOptions();
  const options: any = {
    ...connectionOptions,
    entities: [User, Message],
  };
  const connection: Connection = await createConnection(options);

  return connection;
}
