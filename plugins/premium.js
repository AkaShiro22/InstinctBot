let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat
│• Digunakan!
│• Dapat Menambahkan Bot Ke
│• Grup!
│
│ > Bonus :
│• Diberikan Kode Gift Seminggu!
│
│ > Harga :
│• 15K / Bulan
│• 30K / 3 Bulan
│• 75K / 12 Bulan
│
│ > Pembayaran :
│• https://saweria.co/akashiro
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^premium$/i
handler.group = false
handler.register = true

module.exports = handler
