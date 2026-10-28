const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const sessionId = `solarbreak-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function addMessage(text, role = 'assistant') {
  const messageEl = document.createElement('div');
  messageEl.className = `message ${role}`;
  messageEl.textContent = text;
  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendInitialMessages() {
  addMessage(
    'Hello! I am the SolarBreak assistant. I can help you assess feasibility, compare states, and guide the solar ROI questionnaire for your GCC project.',
    'assistant'
  );
}

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';
  userInput.disabled = true;
  chatForm.querySelector('button').disabled = true;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, session_id: sessionId })
    });

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }

    const data = await response.json();
    addMessage(data.reply || 'No response received.', 'assistant');
  } catch (error) {
    addMessage('I could not reach the backend right now. Please make sure the FastAPI server is running and Ollama is available if you want LLM-powered answers.', 'assistant');
    console.error(error);
  } finally {
    userInput.disabled = false;
    chatForm.querySelector('button').disabled = false;
    userInput.focus();
  }
});

appendInitialMessages();
