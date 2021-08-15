global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/LbQ4EmWjiEh9R8rTBiYCZiZoS2eM']
global.owner = ['62859106999930']// Put your number here
global.mods = ['62859106999930'] // Want some help?
global.prems = ['62859106999930','6281399977654','6281285564463','6285768341591'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  bx: 'https://bx-hunter.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  dzx: 'https://api.dhamzxploit.my.id',
  BarBarApi: 'https://mhankbarbar.moe',
  ZeksApi: 'https://zeks.xyz',
  TechApi: 'https://api.i-tech.id',
  TobzApi: 'https://tobz-api.herokuapp.com',
  ItsApi: 'https://iamvinz.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  fdci: 'https://api.fdci.se',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  lolh: 'http://lolhuman.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
  }
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ab9942f95c09ca89',
  'https://mhankbarbar.moe': 'Nkwp9oR7Eg9yyKbejBpm',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://zeks.xyz': 'apivinz',
  'https://api.i-tech.id': '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ',
  'https://tobz-api.herokuapp.com': 'BotWeA',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://iamvinz.my.id': 'itsmeiky633',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'http://lolhuman.herokuapp.com': 'e228d999bd914b35bffb7546',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
  }

// Sticker WM
global.packname = 'wa.me/62859106999930'
global.author = 'Instinct Bot'

global.wait = '_*tunggu..*_'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})