const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  
  let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama|umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 70) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*「 ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ʀᴇɢɪꜱᴛᴇʀᴇᴅ ! 」*
┏ ┅ ━━━━━━━━━ ┅ ━
┃ 						*Info Member*
┃ ┅ ━━━━━━━━━ ┅ ━
┃ ɴᴀᴍᴇ: ${name}
┃ ᴀɢᴇ: ${age} tahun
┃ Gift: $10
┃ Total Register: ${rtotalreg}
┃ CODE: ${sn}
┗ ┅ ━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━ ┅ ━
┃ 						*Noted* :
┃ ┅ ━━━━━━━━━ ┅ ━
┃ Don't forget the ID code! 
┃ Because among the codes are 
┃ gift code with prizes! 
┃ If you are lucky!_
┗ ┅ ━━━━━━━━━ ┅ ━
`.trim())
global.DATABASE._data.users[m.sender].uang += 10000
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' nama|umur')
handler.tags = ['daftar']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler