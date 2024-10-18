function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 交換位置
  }
  return array;
}

const shuffledUrls = shuffle(urls); // 將 urls 陣列進行洗牌
window.location.href = shuffledUrls.length > 0 ? shuffledUrls[0] : 'https://yjcstudy1.github.io/survey2/';
