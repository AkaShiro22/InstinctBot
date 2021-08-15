const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
   pp = `https://xteam.xyz/videomaker/bold?text=${text}&APIKEY=MIMINETBOT`
                     await sticker(false, pp, 'Bold Gif', '@InstinctBot').then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['boldgif <teks>']
//handler.tags = ['sticker']
handler.command = /^boldgif$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
//