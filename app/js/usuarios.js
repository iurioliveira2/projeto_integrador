/**document.querySelector('.new-button').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
});**/

fetchData('https://pfd0j93j-3000.brs.devtunnels.ms/api/usuarios', '', 'get')
    .then(result => {
        console.log(result);
        
        const filteredResult = result.map(usuario => ({
            ID: usuario.idUsuario,
            Nome: usuario.nome,
            'CPF/CNPJ': usuario.cpfCnpj,
            Endereço: usuario.endereco,
            Telefone: usuario.celular,
            'E-mail': usuario.email,
            Perfil: usuario.tipo,
            Status: usuario.status
        }));

        renderUsuarios(filteredResult);
        })
        .catch(error => {
        console.error(error);
    });


function renderUsuarios(usuarios) {
    const tbody = document.querySelector('tbody');

    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');

        for (const key in usuario) {
            const td = document.createElement('td');
            td.textContent = usuario[key];
            tr.appendChild(td);
        }

        const editTd = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.setAttribute('data-id', usuario.ID);
        editButton.classList.add('edite');

        editButton.addEventListener('click', function() {
            console.log('Edit button clicked for ID:', usuario.ID);
        });

        editTd.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.setAttribute('data-id', usuario.ID);
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function() {
            deleteUsuario(usuario.ID);
        });

        editTd.appendChild(deleteButton);

        tr.appendChild(editTd);
        
        tbody.appendChild(tr);
    });
}



document.querySelector('.back').addEventListener('click', function() {
    window.location.href = 'menu.html';
});


function deleteUsuario(id) {
    console.log(id);
    
    fetchData(`https://pfd0j93j-3000.brs.devtunnels.ms/api/usuarios/${id}`, '', 'delete')
        .then(result => {
            alert(result.message);
            window.location.reload();
            console.log(result);
        })
        .catch(error => {
            alert(error);
        });
}
