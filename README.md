# Rhizone

## TODO
- Convert raw HTML and CSS (Bootstrap) files from [rz_font_end repository](https://github.com/mustapha0705/rz_font_end) used for beta testing into interactive Vue components.
The TODO section has been added for clarity about the next steps in development.

**Rhizone** is an online learning platform designed to bridge educational gaps and promote equitable education for students in underserved communities, particularly in Ghana. It provides a collaborative space where students can engage in discussions, ask questions, and access peer tutoring from volunteer tutors. Rhizone is built using **Node/Express** on the backend and **Vue** on the frontend.

## Features
- **Q&A Platform**: Students can ask questions and get answers from peers, fostering collaborative learning.
- **Discussion Forums**: Interactive discussions on a variety of topics, enabling knowledge-sharing.
- **Peer Tutoring**: Volunteer tutors offer personalized learning support to students.

## Tech Stack
- **Backend**: Node.js, Express
- **Frontend**: Vue.js
- **Database**: MongoDB (using Mongoose for data modeling)

## Installation
To set up Rhizone on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/mustapha0705/Rhizone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Rhizone
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Navigate to the frontend directory and install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
5. Add your MongoDB connection string to a `.env` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
6. Run the development server:
   ```bash
   npm run dev
   ```

## Contributing
While Rhizone is currently closed source, contributions may be considered in the future. Stay tuned for updates!

## License
This project is currently **unlicensed** and not open source.
