var contacts = {};
    var selectedContact = null; // Variável para armazenar o contato selecionado

    function selectContact(contact) {
      var contactsList = document.querySelectorAll(".contacts li");
      
      for (var i = 0; i < contactsList.length; i++) {
        contactsList[i].classList.remove("selected");
      }
      
      contact.classList.add("selected");
      selectedContact = contact.textContent; // Atualiza o contato selecionado

      // Chama a função para exibir a conversa do contato selecionado
      displayConversation(selectedContact);
    }

    function displayConversation(contactName) {
      var chat = document.getElementById("chat");
      chat.innerHTML = "";
      
      if (!contacts[contactName]) {
        contacts[contactName] = [];
      }
      
      contacts[contactName].forEach(function(message) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        if (message.sender === "me") {
          messageElement.classList.add("sent");
        } else {
          messageElement.classList.add("received");
        }
        messageElement.innerHTML = '<div class="message-content">' + message.content + '</div>';
        chat.appendChild(messageElement);
      });

      var messageInput = document.getElementById("messageInput");
      var sendButton = document.querySelector("button");
      messageInput.disabled = false;
      sendButton.disabled = false;
    }

    function sendMessage() {
      var messageInput = document.getElementById("messageInput");
      var message = messageInput.value.trim();
      
      if (message !== "") {
        var chat = document.getElementById("chat");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = '<div class="message-content">' + message + '</div>';
        chat.appendChild(messageElement);
        
        if (!contacts[selectedContact]) {
          contacts[selectedContact] = [];
        }
        
        contacts[selectedContact].push({
          content: message,
          sender: "me"
        });
        
        // Limpar campo de entrada
        messageInput.value = "";
        
        // Scroll para a parte inferior do chat
        chat.scrollTop = chat.scrollHeight;
      }
    }