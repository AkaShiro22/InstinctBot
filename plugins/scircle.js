//Caliph Kontoll
//aokwowwk ajg
const Canvacord = require('canvacord')
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send atau reply image dengan caption *#circle*'
 try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
let image = await q.download()

Canvacord.Canvas.circle(image)
  .then(async buffer => {
   stik = await require('../lib/sticker').sticker(buffer, null, packname, author); conn.sendMessage(m.chat, stik, 'stickerMessage', { quoted: m })
  }) 
 } catch (e) {
   m.reply('*Yah gagal kak:(*')
m.reply(`${e}`)
  }
}
handler.help = ['circle']
handler.tags = ['sticker']
handler.command = /^circle$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler