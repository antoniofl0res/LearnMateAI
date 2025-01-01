
const key1 = 'sk-proj-F';
const key2 = '0lwBzv4KL6avb6prTYtKUdiT8wtzfOqQ0AI9heUZLqfsqw3WocIIvJ8uWsGueEP1';
const key3 = 'q4edycDy3T3BlbkFJ1hRMGF48VuFcoIZmqaLiopnIAMlCsRnk1fkQrLIS9umGLoRjCq91H7fibNMsMW7Fiu69Ncc9AA';
const apiKey = key1+key2+key3;

function nextStep() {
  console.log("Next button clicked!"); // Debugging log
  const topic = document.getElementById('topicInput').value;
  if (topic) {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
  } else {
    alert("Please enter a topic!");
  }
}

async function generateCurriculum() {
  const topic = document.getElementById('topicInput').value;
  const goal = document.getElementById('goalInput').value;
  const knowledgeLevel = document.getElementById('knowledgeLevel').value;
  const learningStyle = document.getElementById('learningStyle').value;

  // Show loading spinner
  document.getElementById('loading').classList.remove('hidden');

  // Create a prompt for OpenAI
  const prompt = `Create a personalized learning curriculum for a learner who wants to learn ${topic} with a focus on ${goal}. The content must be specifically tailored to a ${knowledgeLevel} level of knowledge.
Include section with highly relevant, trusted, verified online ${learningStyle} platforms related to the topic ${topic} (present them as 'Try these platforms to get started').
Provide 3 modules with clear titles and a list describing key themes to be covered in each module. At the end of each module include keywords presented in a boolean string (present them as "Suggested search"). Use no more than 300 tokens`;

  try {
    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // or 'gpt-4'
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const curriculum = data.choices[0].message.content;

    // Format the AI-generated curriculum while preserving the boolean string
    const formattedCurriculum = curriculum
  .split('\n') // Split the text into lines
  .map(line => {
    if (line.startsWith('Module')) {
      return `<h4>${line}</h4>`; // Format module titles as headings
    } else if (line.startsWith('-')) {
      return `<li>${line.slice(1).trim()}</li>`; // Format bullet points as list items
    } else if (line.startsWith('Suggested search:')) {
      // Return the boolean string in its original format
      return line; // No additional formatting
    } else {
      return `<p>${line}</p>`; // Format other lines as paragraphs
    }
  })
  .join('\n'); // Combine the lines back with line breaks

    // Display the formatted curriculum
    document.getElementById('curriculumOutput').innerHTML = `
      <h3>Your Learning Plan</h3>
      <div class="curriculum">${formattedCurriculum}</div>
    `;

    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
  } catch (error) {
    console.error('Error generating curriculum:', error);
    alert('Failed to generate curriculum. Please check the console for details.');
  } finally {
    // Hide loading spinner in all cases
    document.getElementById('loading').classList.add('hidden');
  }
}