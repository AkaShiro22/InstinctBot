let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
//  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
  conn.sendFile(m.chat, `https://pencarikode.xyz/api/chika?apikey=pais`, '', m, false)
  } catch {
  throw 'Maaf, Server Sedang Error'
}
}
handler.help = ['asupan']
handler.tags = ['tools']

handler.command = /^(asupan$)/i

module.exports = handler