//
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
  pp = `https://lolhuman.herokuapp.com/api/random2/nsfw_neko_gif?apikey=oniichan`
                     await sticker(false, pp, 'Instinct Bot', '@InstinctBot_').then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['nsfwgif']
handler.tags = ['sticker']
handler.command = /^nsfwgif$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler