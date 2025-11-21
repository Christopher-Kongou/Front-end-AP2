document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-registro');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;
        const perfil = document.getElementById('perfil').value;

        try {
            const response = await fetch('http://localhost:8080/api/usuarios/criar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, senha, perfil })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Erro ao registrar');
            }

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Erro:', error);
            alert(error.message);
        }
    });
});
