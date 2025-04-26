function spinZodiac() {
  var yearInput = document.getElementById("year");
  var result = document.getElementById("result");
  var wheel = document.getElementById("wheel");

  var year = parseInt(yearInput.value);

  var remainder = (year - 4) % 12;
  if (remainder < 0) remainder += 12;

  var animal = "";
  var emoji = "";

  if (remainder === 0) {
    animal = "Rat";
    emoji = "🐀";
  } else if (remainder === 1) {
    animal = "Ox";
    emoji = "🐂";
  } else if (remainder === 2) {
    animal = "Tiger";
    emoji = "🐅";
  } else if (remainder === 3) {
    animal = "Rabbit";
    emoji = "🐇";
  } else if (remainder === 4) {
    animal = "Dragon";
    emoji = "🐉";
  } else if (remainder === 5) {
    animal = "Snake";
    emoji = "🐍";
  } else if (remainder === 6) {
    animal = "Horse";
    emoji = "🐎";
  } else if (remainder === 7) {
    animal = "Goat";
    emoji = "🐐";
  } else if (remainder === 8) {
    animal = "Monkey";
    emoji = "🐒";
  } else if (remainder === 9) {
    animal = "Rooster";
    emoji = "🐓";
  } else if (remainder === 10) {
    animal = "Dog";
    emoji = "🐕";
  } else if (remainder === 11) {
    animal = "Pig";
    emoji = "🐖";
  }

  var emojiList = "🐀 🐂 🐅 🐇 🐉 🐍 🐎 🐐 🐒 🐓 🐕 🐖 ";
  wheel.innerHTML = emojiList.repeat(10);

  wheel.style.transition = "none";
  wheel.style.transform = "translateX(0px)";
  void wheel.offsetWidth;

  var index = emojiList.indexOf(emoji);
  var emojiWidth = 45;
  var loops = Math.floor(Math.random() * 3 + 5);
  var offset = (index / 2) * emojiWidth + 12 * emojiWidth * loops;

  wheel.style.transition = "transform 2s ease-out";
  wheel.style.transform = "translateX(-" + offset + "px)";

  setTimeout(function () {
    result.textContent =
      "Your Chinese Zodiac Animal is: " + animal + " " + emoji;
  }, 2000);
}
