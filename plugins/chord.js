const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord heartbreak anniversary', m)
    await m.reply('Searching...')
    axios.get(`https://docs-jojo.herokuapp.com/api/chord?q=` + text)
        .then((res) => {
            conn.reply(m.chat, res.data.result, m)
        })
        .catch()
}
handler.help = ['chord <judul lagu>']
handler.tags = ['internet']
handler.command = /^(chord)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler