let handler  = async (m, { conn }) => {
	conn.sendFile(m.chat, 'media/Just rape me..mp4', '', 'https://www.mediafire.com/folder/dnvq5v1ntsp36/Dephine+By+Sm330', m)
}

handler.help = ['cantik']
handler.tags = ['images']
handler.command = /^(cantik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler