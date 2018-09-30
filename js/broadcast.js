window.onload = function() {
  let box = document.querySelector('.broadCast');
  let itemsBox = document.querySelectorAll('.broadItem'); // 控制这些元素的z-index，以及动画过渡？
  let broadLength = itemsBox.length;
  let currentBroad = itemsBox.length - 1; // 当前最顶层

  // 初始化 --- 也没用，最初的一张z-index很奇怪
  itemsBox.forEach(item1 => {
    item1.style.zIndex = '9';
  });
  itemsBox[currentBroad].style.zIndex = '999';

  setInterval(() => {
    itemsBox.forEach(item1 => {
      item1.style.zIndex = '9';
    });
    itemsBox[currentBroad].style.zIndex = '999';
    if (currentBroad === broadLength - 1) {
      currentBroad = 0;
    } else {
      currentBroad ++;
    }
  }, 3000)
}
