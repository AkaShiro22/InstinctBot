let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *PASANG IKLAN* 」
│╰──── 
│〘 TV Berlangganan MNC VISION 〙
│╰────
│〘 VISION LITE 〙
│╰────
│❖ Brosur https://ibb.co/zNJP8wt
│ 
│❖ New promo 
│❖ pasang TV Langganan
│❖ Dari MNCVISION
│❖ Selama PPKM
│❖ Di rumah aja...... Coy
│
│❖ New Promo 
│❖ Vision Lite Bulanan
│❖ Pasang Rp.299.000,-
│❖ /bulan Rp.99.000,-
│❖ Bayar saat pasang
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
handler.help = ['visionlite']
handler.tags = ['about']
handler.command = /^(visionlite)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler