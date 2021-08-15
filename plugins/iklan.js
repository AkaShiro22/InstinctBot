let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *PASANG IKLAN* 」
│╰──── 
│〘 TV Berlangganan 〙
│╰────
╭───── 
│〘 PRODUCT MNCVISION 〙
│
│❖ VISION LITE
│	Ketik : #visionlite
│
│❖ STARTER PACK
│	Ketik : #starterpack
╰───── 
╭───── 
│〘 INTERNET 〙
│❖ Dalam Proses 😝
│╰──────── 
│
│〘 STB DIGITAL 〙
│❖ Dalam Proses 😝😝
│╰──────── 
│
│*©INSTINCT Bot 2020-2021*
╰─「 *Pasang Iklan* 」
`.trim(), m)
}
handler.help = ['iklan']
handler.tags = ['about']
handler.command = /^(iklan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler