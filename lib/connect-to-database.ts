import {createConnection, Connection} from "typeorm";



// here createConnection will load connection options from
// ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
// files, or from special environment variables

export async function connectToDatabase () {
  const connection: Connection = await createConnection();
}