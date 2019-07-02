const TelegramBot = require('node-telegram-bot-api');

const token = '790131528:AAGWFk9UJOv-u0mKzOvc4bl7miLzFKue-XA';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const Hi = 'hey';
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, 'hey you!');
    }

    const Bye = 'bye';
    if (msg.text.toString().toLowerCase().indexOf(Bye) === 0) {
        bot.sendMessage(msg.chat.id, 'xau mô');
    }
})

bot.onText(/\/couple/, (msg) => {
    bot.sendPhoto(msg.chat.id, "./img/IMG-20160705-WA0006.jpg", {caption: 'eu e mo ♥'});
})