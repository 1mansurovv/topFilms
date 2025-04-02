// const TelegramBot = require("node-telegram-bot-api");
// // Tokeningizni shu yerga qo'ying
// const token = "7651896278:AAFAEdCxvp2XGqUEru8U-U3cWFRH8i7IU84"; // Bot tokenini to'g'ri joylashtiring
// const bot = new TelegramBot(token, { polling: true });

// // Kerakli kanallar
// const requiredChannels = ["filmstopsawe", "newkanallmm", "toptvcomm", "tvvott"];

// // Kodlar va media
// const kodlar = {
//   1: {
//     type: "photo",
//     content:
//     "http://asilmedia.org/15272-vikram-vedha-hind-kinosi-uzbek-tilida-2022-ozbekcha-tarjima-kino-hd.html",
//     text: "🎬 Ushbu kino video dag! 👇",
//     img: "http://asilmedia.org/uploads/mini/fullstory/72/4de6d32df4304214698299d9f17fc0.jpg",
//   },
//   2: {
//     type: "photo",
//     content:
//     "http://asilmedia.org/16946-sirli-yirtqich-bayou-2025-hd-uzbek-tilida-tarjima-kino-skachat.html",
//     text: "🎬 Ushbu kino video dag! 👇",
//     img: "http://asilmedia.org/uploads/mini/fullstory/e9/265x372xa6f46706c1e3d64622c4745b665f61.jpg.pagespeed.ic.i7SF_FeTx1.webp",
//   },
// };

// // Foydalanuvchi obuna bo'lganligini tekshirish
// async function isUserSubscribed(userId) {
//   try {
//     for (let channel of requiredChannels) {
//       const chatMember = await bot.getChatMember(`@${channel}`, userId);
//       if (!["member", "administrator", "creator"].includes(chatMember.status)) {
//         return false;
//       }
//     }
//     return true;
//   } catch (error) {
//     console.error(`❌ Obuna tekshirishda xatolik:`, error);
//     return false;
//   }
// }

// // Obuna tugmalarini qaytarish
// function getSubscriptionKeyboard() {
//   return {
//     inline_keyboard: [
//       ...requiredChannels.map((channel) => [
//         { text: `📢 Kanalga qo‘shilish`, url: `https://t.me/${channel}` },
//       ]),
//       [{ text: "✅ Obunani tekshirish", callback_data: "check_subscription" }],
//     ],
//   };
// }

// // Xabarlarni qabul qilish
// bot.on("message", async (msg) => {
//   const chatId = msg.chat.id;
//   const userId = msg.from.id;
//   const text = msg.text;
  
//   const isSubscribed = await isUserSubscribed(userId);
//   if (!isSubscribed) {
//     bot.sendMessage(
//       chatId,
//       "⛔ Avval kanalga a’zo bo‘ling va /start ni qaytadan yuboring.",
//       { reply_markup: getSubscriptionKeyboard() }
//     );
//     return;
//   }
  
//   if (text === "/start") {
//     bot.sendMessage(
//       chatId,
//       "✅Endi kodni yuboring."
//     );
//     return;
//   }
  
//   if (kodlar[text]) {
//     if (kodlar[text].type === "photo") {
//       bot.sendPhoto(chatId, kodlar[text].img, {
//         caption: `${kodlar[text].text}\n🔗 <a href="${kodlar[text].content}">Filmni ko'rish</a>`,
//         parse_mode: "HTML",
//       });
//     } else {
//       bot.sendMessage(chatId, kodlar[text].content);
//     }
//   } else {
//     bot.sendMessage(
//       chatId,
//       "❌ Bunday kod mavjud emas. Iltimos, to‘g‘ri kodni kiriting!"
//     );
//   }
// });

// // Tugmalar bosilganda ishlash
// bot.on("callback_query", async (query) => {
//   const userId = query.from.id;
//   const chatId = query.message.chat.id;
  
//   const isSubscribed = await isUserSubscribed(userId);
//   if (isSubscribed) {
//     bot.sendMessage(chatId, "✅ Endi kodni yuboring.");
//   } else {
//     bot.sendMessage(
//       chatId,
//       "❌ Hali ham obuna bo‘lmagansiz. Iltimos, quyidagi kanallarga obuna bo‘ling:",
//       { reply_markup: getSubscriptionKeyboard() }
//     );
//   }
// });

