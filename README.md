# LearnMateAI
An AI-powered app to generate a learning guide

Here’s a **ReadMe file** template for your repository hosting the **LearnMateAI** app. This ReadMe provides an overview of the project, instructions for setup, and other relevant details.

---

# **LearnMateAI**  
**Your AI-Powered Personalized Learning Companion**

---

## **Overview**
LearnMateAI is a web application that helps users create personalized learning curriculums based on their goals, knowledge level, and preferred learning style. Powered by OpenAI’s GPT, it generates tailored learning plans with modules, key themes, and suggested resources.

---

## **Features**
- **Step-by-Step Guidance**: Users enter a topic, answer a few questions, and receive a customized curriculum.
- **AI-Powered Curriculum**: Generates learning plans tailored to the user’s goals and knowledge level.
- **Boolean Search Suggestions**: Provides optimized search strings for further learning.
- **User-Friendly Interface**: Simple and intuitive design for seamless navigation.

---

## **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express (for secure API key management)
- **API**: OpenAI GPT (for curriculum generation)
- **Hosting**: GitHub Pages, Netlify, or Vercel (for deployment)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/LearnMateAI.git
cd LearnMateAI
```

### **2. Set Up the Backend**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### **3. Set Up the Frontend**
1. Open the `index.html` file in your browser or deploy it using a platform like GitHub Pages, Netlify, or Vercel.
2. Ensure the frontend is configured to point to your backend URL (e.g., `http://localhost:3000` or your deployed backend URL).

---

## **How to Use**
1. **Enter a Topic**: Start by entering a topic you want to learn about (e.g., "Python Programming").
2. **Answer Questions**: Provide your learning goal, knowledge level, and preferred learning style.
3. **Generate Curriculum**: Click "Generate Curriculum" to receive a personalized learning plan.
4. **Explore Modules**: Review the modules, key themes, and suggested search terms.

---

## **Project Structure**
```
LearnMateAI/
├── backend/
│   ├── server.js          # Backend server code
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables (API key)
├── frontend/
│   ├── index.html         # Main HTML file
│   ├── styles.css         # CSS for styling
│   └── script.js          # Frontend JavaScript logic
├── README.md              # Project documentation
└── .gitignore             # Files to ignore in Git
```

---

## **Deployment**
### **Frontend**
- Deploy the `frontend` folder to GitHub Pages, Netlify, or Vercel.
- Update the `fetch` URL in `script.js` to point to your deployed backend.

### **Backend**
- Deploy the `backend` folder to a platform like Render, Heroku, or Vercel.
- Set the `OPENAI_API_KEY` as an environment variable in the hosting platform.

---

## **Contributing**
Contributions are welcome! Here’s how you can contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- **OpenAI**: For providing the GPT API used in this project.
- **Netlify/Vercel/Render**: For hosting and deployment support.

---

## **Contact**
For questions or feedback, feel free to reach out:  
- **Email**: your-email@example.com  
- **GitHub**: [your-username](https://github.com/your-username)  

---

Enjoy using **LearnMateAI**! 🚀

---

This ReadMe file provides a comprehensive guide for users, contributors, and developers. Let me know if you’d like to customize it further!
