const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply('Searching...')
        let res = await fetch(global.API('xteam', '/randomimage/mstrb', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*©Instinct-bot*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['mstrb']
handler.tags = ['nsfw']
handler.command = /^(mstrb)$/i
handler.premium = true
handler.register = true

module.exports = handler