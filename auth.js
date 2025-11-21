function getToken() {
    return localStorage.getItem('jwt_token');
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')));
    } catch {
        return null;
    }
}

function logout() {
    localStorage.removeItem('jwt_token');
    window.location.href = 'login.html';
}

// Redireciona se não estiver logado
if (!getToken() && !window.location.pathname.endsWith('login.html') && !window.location.pathname.endsWith('registro.html')) {
    window.location.href = 'login.html';
}
