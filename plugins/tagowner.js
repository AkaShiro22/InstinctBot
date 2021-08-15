let handler = async (m, { conn, text }) => {
    let name = ('62859106999930@s.whatsapp.net')
    let panggil = `
    @${name.replace(/@.+/, '')}!!! Ada Apa Manggil2x ??? :v
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /Hana-cwan/i
handler.command = new RegExp

module.exports = handler