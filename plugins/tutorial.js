let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *Tutorial Main I* 」
│ 
│〘 Tutorial EPIC RPG 〙
│
│• *${usedPrefix}claim*
│   Staterpack yang bisa di klaim 
│   12 jam sekali
│
│• *${usedPrefix}mulung*
│• *${usedPrefix}adventure*
│• *${usedPrefix}petualang*
│   Mencari resource seperti, 
│   Money, Exp, dll..,dibutuhkan  
│   minimal 80 nyawa untuk bisa 
│   melakukannya dan kamu tidak 
│   dapat spam karena ada delay 
│	 5 menit
│
│• *${usedPrefix}use potion <jumlah>*
│   Untuk memakai potion/untuk 
│   mengisi nyawa/health
│
│• *${usedPrefix}shop buy potion <jumlah>*
│   membeli potion dan ketik 
│   *${usedPrefix}use potion <jumlah>*
│   untuk menggunakan potion
│
│• *${usedPrefix}shop <args>*
│   beli atau jual sesuatu
│
│• *${usedPrefix}shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│
│• *${usedPrefix}profile*
│• *${usedPrefix}pp*
│• *${usedPrefix}profil*
│   mengetahui No whatsapp,dll
│
│• *${usedPrefix}inv*
│• *${usedPrefix}inventory*
│• *${usedPrefix}bal*
│   mengecek nyawa, money, dll.
│
│
│• *${usedPrefix}judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.*
│
│	*_BENERAN GK BOHONG_*
│  
│*©INSTINCT Bot 2020-2021*
╰─「 *Tutorial Main* 」
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler