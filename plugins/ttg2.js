const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
  pp = `https://lolhuman.herokuapp.com/api/attp?apikey=oniichan&text=${text}`
                     await sticker(false, pp, 'Instinct Bot', '@InstinctBot_').then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['ttg2 <teks>']
handler.tags = ['sticker']
handler.command = /^ttg2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler