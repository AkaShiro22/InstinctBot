let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *Tutorial Bot I* 」
│ 
│〘 Tutorial Bot 〙
│
│• *${usedPrefix}daftar*
│   ex : #daftar nama.umur 
│	(Untuk Akses Menu BOT)
│
│• *${usedPrefix}menu*
│   ex : #menu 
│	(menampilkan MENU BOT)
│
│• *${usedPrefix}tutorialbot*
│   ex : #tutorialbot 
│	(menampilkan Fungsi BOT)
│
│• *${usedPrefix}play text*
│   ex : #play akad 
│	(jenis : vn, mp3)
│   
│• *${usedPrefix}play2 text*
│   ex : #play2 akad
│	(jenis : video, mp4)
│
│• *${usedPrefix}ytmp3 link yt*
│   ex : #ytmp3 link yt
│	(jenis : vn, mp3)
│
│• *${usedPrefix}ytmp4 link yt*
│   ex : #ytmp4 link yt
│	(jenis : video, mp4)
│
│• *${usedPrefix}sticker tag image*
│   ex : #sticker tag image
│	(membuat gambar jadi sticker)
│
│• *${usedPrefix}toimg tag sticker*
│   ex : #toimg tag sticker
│	(membuat sticker jadi gambar)
│
│• *${usedPrefix}stickergif tag video*
│   ex : #stickergif tag video
│	(membuat gambar jadi gif)
│	durasi 10 dtk
│
│• *${usedPrefix}tovideo tag video*
│   ex : #tovideo tag video
│	(membuat video jadi stickergif)
│
│• *${usedPrefix}attp text*
│   ex : #attp Instinct Bot
│	(membuat text jadi stickergif)
│
│• *${usedPrefix}ttp text*
│   ex : #attp Instinct Bot
│	(membuat text jadi sticker)
│
│	Dan Masih Banyak
│	Menu Bot Yang Lain
│
│*©INSTINCT Bot 2020-2021*
╰─「 *Tutorial Bot* 」
`.trim(), m)
}
handler.help = ['tutorialbot']
handler.tags = ['about']
handler.command = /^(tutorialbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler