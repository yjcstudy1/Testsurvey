function shuffle(array) {
  if (!array || array.length === 0) {
    console.log("The array is empty or undefined."); // 調試訊息
    return [];
  }
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 交換位置
  }
  return array;
}

// 假設 urls 已經被定義為一個有 URL 的陣列
urls = shuffle(urls); 

if (urls.length > 0) {
  window.location.href = urls[0];
} else {
  console.log("No URLs available, redirecting to default page.");
  window.location.href = 'https://yjcstudy1.github.io/Testsurvey/';
}
