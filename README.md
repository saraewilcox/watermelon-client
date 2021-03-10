watermelon is a free app blending kahoot and Spotify. Write 5 questions about songs (examples: What is the best 80's rock song? The best Beyonce jam? The song that reminds you of high school?) and invite your friends to answer. Their responses are made into a Spotify playlist.

User authenticates using Spotify OAuth.

https://watermelon-jams-ts7rp.ondigitalocean.app/

####For the cloners out there

Directions for those that are cloning this project to run on their local machine. First, clone this frontend and the backend as well, https://github.com/saraewilcox/watermelon-server

#####Requirements
-Spotify developer credentials (ID and SECRET)
-A functional MongoDB instance and connection parameters (Example: mongodb://user:pass@server:port)

For the Spotify developer credentials make a Spotify Developer Account and create a project.

#####Make a watermelon-server environment file

Obtain the CLIENT_ID and CLIENT_SECRET provided by the Spotify project and create a .env.local file in the watermelon-server global directory with the following:

PORT=5000
ENV=development
CLIENT_HOSTNAME=http://localhost:3000
SPOTIFY_CLIENT_ID=your client id
SPOTIFY_CLIENT_SECRET=your secret id
MONGODB_URI=your mondo.db

#####Then make a watermelon-client environment file:

REACT_APP_PARTYPLAYLIST_API=http://localhost:5000

#####Install and run

Install the required packages on both client and server:
npm install

Run the development server:
npm run dev-windows

Run the development client:
npm run start-dev

Open http://localhost:3000 with your browser to see the result.
