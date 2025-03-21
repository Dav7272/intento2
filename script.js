const apiKey = "TU_CLAVE_API"; // Reemplázalo con tu clave API de OpenAI

async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatDiv = document.getElementById("chat");

    if (userInput.trim() === "") return;

    // Mostrar el mensaje del usuario
    chatDiv.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
    document.getElementById("user-input").value = "";

    // Llamar a la API de OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    let aiResponse = data.choices[0].message.content;

    // Mostrar respuesta de la IA
    chatDiv.innerHTML += `<p><strong>IA:</strong> ${aiResponse}</p>`;
    chatDiv.scrollTop = chatDiv.scrollHeight;
}
