/*
  ============================================================
  KONFIGURASI VILLA HAVEN
  ============================================================
  INI SATU-SATUNYA FILE YANG PERLU ANDA EDIT.
  Jangan edit file index.html atau invoice.html untuk ganti
  data di bawah ini — cukup ubah nilai di dalam tanda kutip " "
  pada file ini saja, lalu simpan.

  Setelah edit, upload ulang file ini ke GitHub (commit),
  perubahan akan otomatis tampil di situs.
  ============================================================
*/

const CONFIG = {

  // ---------- INFO SITUS ----------
  namaSitus: "Villa Haven",

  // ---------- WHATSAPP ADMIN ----------
  // Format internasional TANPA tanda "+" dan TANPA angka 0 di depan.
  // Contoh: nomor 0812-3456-789 ditulis "62812345678"
  nomorWhatsApp: "62123456789",

  // ---------- REKENING PEMBAYARAN ----------
  namaBank: "BCA",
  atasNamaRekening: "villahaven.co",
  nomorRekening: "123456789",

  // ---------- INSTAGRAM ----------
  instagramUsername: "villlahaven.co",

  // ---------- TELEGRAM (OPSIONAL) ----------
  // Kosongkan ("") kalau belum punya. Isi nanti kalau sudah siap,
  // notifikasi Telegram akan otomatis aktif tanpa perlu ubah kode lain.
  // Cara dapat BOT_TOKEN: chat @BotFather di Telegram, ketik /newbot
  // Cara dapat CHAT_ID: kirim 1 pesan ke bot Anda, lalu buka
  //   https://api.telegram.org/bot<TOKEN_ANDA>/getUpdates
  //   cari angka "id" di bagian "chat"
  telegramBotToken: "",
  telegramChatId: "",

};
