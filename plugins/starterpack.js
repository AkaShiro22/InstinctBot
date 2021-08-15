let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *PASANG IKLAN* 」
│╰──── 
│〘 TV Berlangganan MNC VISION 〙
│╰────
│〘 VISION STARTER PACK 〙
│╰────
│❖ Brosur1:https://ibb.co/5TJMXYF
│❖ Brosur2:https://ibb.co/3RWgG5F
│❖ Product MNC VISION
│❖ New Promo TV CABLE
│❖ Aktif Selama 12 Bulan
│❖ Biaya Rp.700.000,-
│❖ Bayar Saat Pesang
│❖ Decoder HD + Remote
│❖ Open Channel :
│❖ Fox Movies
│❖ Asian Movies
│❖ HBO dan Kids, 3 Bulan
│❖ Bulan ke-13
│❖ Mulai dr Rp.39.000/Bln
│╰────
│❖ Contact Person :
│❖ 02121500900
│❖ 081211573931 
│❖ (Mulyono)
│
│*©INSTINCT Bot 2020-2021*
╰─「 *Pasang Iklan* 」
`.trim(), m)
}
handler.help = ['starterpack']
handler.tags = ['about']
handler.command = /^(starterpack)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler