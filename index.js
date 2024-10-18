function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [arra   
y[j], array[i]]; // 交換位置
  }
  return array;
}

urls = shuffle(urls);

if (urls.length > 0) {
  window.location.href = urls[0];
} else {
  console.error('URL陣列为空，无法进行导向');
}
