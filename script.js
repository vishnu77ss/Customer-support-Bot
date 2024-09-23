 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  // Greetings
  if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, how can I assist you today?";
  } 
  // Inquiry about product availability
  else if (input.includes("is product available") || input.includes("product availability")) {
      output = "Yes, the product is available. Would you like to place an order?";
  } 
  // Order status inquiry
  else if (input.includes("order status") || input.includes("track my order")) {
      output = "Please provide your order ID, and I will help you track your order.";
  } 
  // Return policy inquiry
  else if (input.includes("return policy") || input.includes("can i return") || input.includes("how to return")) {
      output = "You can return products within 30 days of purchase. Please visit our Returns page for more details.";
  } 
  // Shipping information
  else if (input.includes("shipping time") || input.includes("delivery time") || input.includes("how long for delivery")) {
      output = "Standard shipping usually takes 5-7 business days.";
  } 
  // Payment methods
  else if (input.includes("payment methods") || input.includes("how can i pay") || input.includes("available payment options")) {
      output = "We accept credit cards, debit cards, PayPal, and other major payment methods.";
  } 
  // Refund process inquiry
  else if (input.includes("refund policy") || input.includes("how to get refund") || input.includes("refund process")) {
      output = "Refunds will be processed within 5-7 business days after the returned item is received.";
  } 
  // Technical support inquiry
  else if (input.includes("technical support") || input.includes("help with my account") || input.includes("issue with website")) {
      output = "Our technical support team is here to help. Please provide more details about the issue.";
  } 
  // Product warranty
  else if (input.includes("product warranty") || input.includes("is there a warranty")) {
      output = "Yes, our products come with a one-year warranty. Please check the product page for warranty details.";
  } 
  // Cancel order
  else if (input.includes("cancel order") || input.includes("how to cancel my order")) {
      output = "You can cancel your order within 24 hours of placing it. Please provide your order ID.";
  }
  // Contact customer support
  else if (input.includes("contact support") || input.includes("customer support")) {
      output = "You can reach our customer support team at vallyshop@company.com or call 1-800-123-4567.";
  }
  // Help commandss 
  else if (input.includes("help") || input.includes("support")) {
    output = "Here are some common questions I can help with:\n" +
             "1. Product availability\n" 
             "2. Order status\n" 
             "3. Return and refund policy\n" 
             "4. Shipping information\n" 
             "5. Payment methods\n" 
             "6. Contact support\n" 
             "Type your query, and I will assist you.";
} 
  // Default response for unrecognized input
  else {
      output = "I'm sorry, I didn't understand that. Could you please try asking in a different way?";
  }

  return output;
}

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });