document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Redirecionar para a página principal ou realizar outra ação
          window.location.href = '/menu.html';
        } else {
          alert("Login falhou: " + data.message);
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao tentar fazer login.");
      });
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
  