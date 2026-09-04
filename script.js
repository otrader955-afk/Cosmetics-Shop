// ================================
// নিজের WhatsApp ও Messenger লিংক এখানে বসান
// ================================

const WHATSAPP_LINK = "#"; // উদাহরণ: https://wa.me/8801XXXXXXXXX
const MESSENGER_LINK = "#"; // উদাহরণ: https://m.me/yourpage

document.getElementById("whatsappLink").href = WHATSAPP_LINK;
document.getElementById("messengerLink").href = MESSENGER_LINK;

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("show"));
});

/*
=================================
PRODUCT ADD করার উদাহরণ:

<div class="product-card">
  <img src="YOUR-IMAGE.jpg" alt="Product Name">
  <h3>Product Name</h3>
  <p>৳ 000</p>
  <a href="YOUR-WHATSAPP-LINK">অর্ডার করুন</a>
</div>

প্রয়োজনে আরও ডিজাইন যোগ করা যাবে।
=================================
*/
