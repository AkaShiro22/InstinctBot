let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '62859106999930@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '62859106999930', 'InstinctBot', m)
  this.sendContact(m.chat, '62859106999930', 'Owner Instinct Bot :)', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler