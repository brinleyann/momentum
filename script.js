let count = localStorage.getItem("momentum-count") || 0;
document.getElementById("count").innerText = count;

function increment() {
  count++;
  localStorage.setItem("momentum-count", count);
  document.getElementById("count").innerText = count;
}
