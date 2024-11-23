document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
  