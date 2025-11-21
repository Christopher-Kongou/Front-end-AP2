document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-login');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, senha })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Erro no login');
            }

            const data = await response.json();
            localStorage.setItem('jwt_token', data.token); // igual ao auth.js

            alert('Login realizado com sucesso!');
            window.location.href = 'painel.html';
        } catch (error) {
            console.error('Erro:', error);
            alert(error.message);
        }
    });
});
