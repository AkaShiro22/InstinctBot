let handler = async m => m.reply(`
╭─「 DONATION 」
│
│  SAWERIA :
│• https://saweria.co/akashiro
│
│  SOCIABUZZ :
│• https://sociabuzz.com/akashiro/support
│
│• LIVEON [+62859106999930]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
