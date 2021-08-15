let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah uang yang akan diberikan'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu kak'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let money = parseInt(txt)
  let uang = money
  let pjk = Math.ceil(money * pajak)
  uang += pjk
  if (uang < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (uang > users[m.sender].uang) throw 'Uang Anda tidak mencukupi untuk mentransfer'
  users[m.sender].uang -= uang
  users[who].uang += money

  m.reply(`(Rp${-money}) + (Rp${-pjk} (Pajak 2%)) = ( Rp${-uang} )`)
  conn.fakeReply(m.chat, `+Rp${money}`, who, m.text)
}
handler.help = ['payuang','uang'].map(v => v + ' <@user amount>')
handler.tags = ['xp']
handler.command = /^(pay)?uang$/
handler.rowner = true

module.exports = handler