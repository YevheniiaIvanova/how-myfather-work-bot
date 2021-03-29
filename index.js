const TelegramBot = require('node-telegram-bot-api'); 
const config = require('./config.json');
const FatherWork = require('./fatherWork');

const token = config.token; 
const bot = new TelegramBot(token, {polling: true});

const keyboard = [
  [
    {
      text: 'Проверить', 
      callback_data: 'checkSchedule' 
    }
  ],
];


bot.on('message', (msg) => {
  const chatId = msg.chat.id; 

  bot.sendMessage(chatId, 'Как папа работает?', { 
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
  });


bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  if (query.data === 'checkSchedule') { 
    const result = FatherWork.howWorkToday();
    bot.sendMessage(chatId, result);
  }
});

module.exports = bot;