const TelegramBot = require('node-telegram-bot-api');
const crypto = require('crypto');

// Token de acceso al bot de Telegram
const token = 'TU_TOKEN_DE_TELEGRAM';

// Crea el objeto bot
const bot = new TelegramBot(token, { polling: true });

// Manejador de comandos
bot.onText(/\/generatepassword/, (msg) => {
  const chatId = msg.chat.id;
  
  // Genera una contraseña segura de 10 caracteres
  const password = generatePassword(10);
  
  // Envía la contraseña generada como respuesta
  bot.sendMessage(chatId, `Tu contraseña segura es: ${password}`);
});

// Función para generar una contraseña segura
function generatePassword(length) {
  // Caracteres permitidos en la contraseña
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-';
  
  let password = '';
  
  // Genera caracteres aleatorios y los concatena para formar la contraseña
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  
  return password;
}
