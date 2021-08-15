let handler  = async (m, { conn, usedPrefix: _p  }) => {
  conn.reply(m.chat, `
*┏━━━━━━━━━━━━━┓*
			Syarat dan Ketentuan BOT
*┗━━━━━━━━━━━━━┛*

1. selama bot aktif, Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server

2. Ketika BOT Sedang Offline, Data akan di hapus secara Otomatis

3. Semua Kiriman Yang Anda Kirim di WhatsApp, BOT tidak menyimpan dokumen yang anda kirim

4. BOT tidak akan pernah meminta anda untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot

7. *KAMI TIDAK AKAN BERTANGGUNG JAWAB!* Apapun yang anda perintah pada bot ini,

*┏━━━━━━━━━━━━━┓*
								*Thanks !*
*┗━━━━━━━━━━━━━┛*
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
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