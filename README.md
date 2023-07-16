# PCstar - School final

Next.js 13 e-commerce site built as a diploma project.  

## Tech stack
- JavaScript/TypeScript
- Next.js 13 for their awesome static and server rendering of React
- SCSS for styling
- MongoDB with Prisma ORM for the database

## How to run
The project was deployed on Vercel but unfortunately not anymore 
You can still run it locally though if link it to a MongoDB database 

- create a .env.local file in the root of the project and fill the mongodb URI as in the example
- run `npm install`

For development run:  
- `npm run prisma:generate`  
- `npm run dev`

For production:  
- `npm run production:build`

Note: Next.js can fail loading the fonts sometimes. I am not sure if it's because I'm using next/font incorrectly or something randomly just broke after the new versions of the package. In case it fails, just reload the page or the server. It should either load correctly or load a fallback font.
