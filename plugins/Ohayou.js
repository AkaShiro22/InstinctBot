let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/ohayou.opus'
conn.sendFile(m.chat, vn, 'ohayou.opus', null, m, {
  type: 'audioMessage',
  ptt: true
})
}
handler.customPrefix = /ohayou?/i
handler.command = new RegExp
module.exports = handler