var handler = m => m
handler.before = function (m, { isAdmin, isBotAdmin }) {

if (m.isBaileys && m.fromMe) return true
let chat = global.db.data.chats[m.chat]
let sender = global.db.data.chats[m.sender]
  

let isSticker = m.mtype
if (chat.antiSticker && isSticker) {
if (isSticker === 'stickerMessage'){
if (global.opts) {
if (isAdmin || !isBotAdmin){		  
} else{

conn.reply(m.chat, '🚩 *الاستيكرات ممنوعه هنا*', m, fake, ) 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

} return true
}}}
return true

}

export default handler
