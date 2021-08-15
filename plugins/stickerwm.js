//
const { MessageType, mimetype } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
  let stiker = false
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Contoh penggunaan, Reply atau send image dengan caption *#stickwm packname|author*'
  try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
let image = await q.download()
    stiker = await sticker(image, false, packname || global.packname, author || global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['stikwm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^stickwm|stikwm$/i

module.exports = handler