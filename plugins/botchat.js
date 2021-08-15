let handler = m => m.reply('Ya kak, Ada Raden Kian Santang di Sini\n\nIngin Memulai Bot? Ketik !help atau !menu yaa ;)')

handler.customPrefix = /Raden|Kian|Santang|Raden Kian Santang/i
handler.command = new RegExp

module.exports = handler