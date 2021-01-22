import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import { User, UserSchema } from "../../../server/entities/user";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],
  adapter: Adapters.TypeORM.Adapter(
    // The first argument should be a database connection string or TypeORM config object
    // "mysql://username:password@127.0.0.1:3306/database_name",
    {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    // The second argument can be used to pass custom models and schemas
    {
      models: {
        User: {
          model: User,
          schema: UserSchema,
        },
      },
    },
  ),

  callbacks: {
    session: async (session, user) => {
      if (session && user) {
        session.user.phoneNumber = user.phoneNumber;
      }
      return Promise.resolve(session);
    },
  },

  // A database is optional, but required to persist accounts in a database
  // database: {
  //   type: process.env.DATABASE_TYPE,
  //   host: process.env.DATABASE_HOST,
  //   port: process.env.DATABASE_PORT,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   database: process.env.DATABASE_NAME,
  // },
};

export default (req, res) => NextAuth(req, res, options);
