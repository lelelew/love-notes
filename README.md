This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Love Notes

## About

Love Notes is a project that allows a user to send scheduled SMS messages to a verified phone number. Use it to send 'love notes' to a loved one for a special occasion, plan scavenger hunts, schedule reminders/ motivational messages for yourself, etc.

The project is made using:

- Next.js: for keeping changes to the frontend and backend in sync and easier deployments
- React: because it's the most popular frontend framework available
- TypeScript: it helps to build better quality apps faster
- TypeORM: for interacting with the database in an idiomatic way that makes full use of Typescript
- pg: for interacting with postgres, but can easily be switched out for other dbs because of TypeORM
- Formik: for creating idiomatic forms with lots of common needs baked in

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Functionality

- User can sign up for an account
- Random 6 digit code is generated & texted to user to verify phone number
- User can enter verification code to verify phone number

## Planned Features To Be Added

- User can schedule messages to be sent
- If sending messages to a different phone number, the phone number can be validated
