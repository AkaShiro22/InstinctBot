//
let handler = async (m, { conn }) => {
 // if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 3000000
    m.reply('Rp. 3.000.000 (Tiga juta rupiah) masuk ke rekening kamu owner!! ')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
//  } else m.reply('Anda sudah mengklaim klaim harian hari ini')
}
handler.help = ['cheat']
handler.tags = ['xp']
handler.command = /^cheat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler