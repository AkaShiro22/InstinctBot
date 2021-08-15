let handler = async m => m.reply(`
╭─「 BUY GIFT CODE 」
│ 
│ > Keterangan :
│• Fitur Gift adalah fitur kode
│• yang berisi hadiah!
│• Anda bisa mendapatkan 
│• exp & limit
│• sepuasnya! Hingga masa
│• berlaku kode giftnya habis!
│
│ > Harga :
│• 5K / Minggu (7 Hari)
│• 15K / Bulan (4 Minggu)
│• 30K / VIP (Permanen)
│
│ > Pembayaran :
│• Saweria :
│• https://saweria.co/akashiro
│• Pulsa (Live.On) :
│• +62859106999930
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['hadiah']
handler.command = /^(buygift)$/i

module.exports = handler
