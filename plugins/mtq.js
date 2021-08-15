let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
QUR'AN BOT:
Via Copas {SEBARKAN}
Juz 1 ⇨ https://bit.ly/3tfm3EB
Juz 2 ⇨ https://bit.ly/2PN16mP
Juz 3 ⇨ https://bit.ly/3tlibSh
Juz 4 ⇨ https://bit.ly/3nL9gbF
Juz 5 ⇨ https://bit.ly/3efSQoD
Juz 6 ⇨ https://bit.ly/3eh2lEk
Juz 7 ⇨ https://bit.ly/2SpmXSd
Juz 8 ⇨ https://bit.ly/3aZSd0x
Juz 9 ⇨ https://bit.ly/2QUWdZp
Juz 10 ⇨ https://bit.ly/33dMOP8
Juz 11 ⇨ https://bit.ly/2RrV2jR
Juz 12 ⇨ https://bit.ly/3eWF1Lb
Juz 13 ⇨ https://bit.ly/3tlIB6y
Juz 14 ⇨ https://bit.ly/3b2hsiF
Juz 15 ⇨ https://bit.ly/3b0Vqgt
Juz 16 ⇨ https://bit.ly/3ujBYDc
Juz 17 ⇨ https://bit.ly/3eR9KJn
Juz 18 ⇨ https://bit.ly/3efcq4k
Juz 19 ⇨ https://bit.ly/2PNp41f
Juz 20 ⇨ https://bit.ly/3ui842f
Juz 21 ⇨ https://bit.ly/3tqwjKp
Juz 22 ⇨ https://bit.ly/3eVGroW
Juz 23 ⇨ https://bit.ly/2Rl35Py
Juz 24 ⇨ https://bit.ly/3h0ENFl
Juz 25 ⇨ https://bit.ly/33b3BSL
Juz 26 ⇨ https://bit.ly/3eecNwb
Juz 27 ⇨ https://bit.ly/3ehNF7L
Juz 28 ⇨ https://bit.ly/2SpKpPf
Juz 29 ⇨ https://bit.ly/3thSORw
Juz 30 ⇨ https://bit.ly/2QTJTsb
`.trim(), m)
}
handler.help = ['mtq']
handler.tags = ['quotes']
handler.command = /^(mtq)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler