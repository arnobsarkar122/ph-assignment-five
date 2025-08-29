// love button click
document.getElementById("card-parent").addEventListener("click", function (e) {
  if (e.target.className.includes("love-btn-count")) {
    // let love = document.getElementById("love-counter");
    // let loveParse = parseInt(love.innerText);
    // let loveIncrease = loveParse + 1;
    // love.innerText = loveIncrease;
    name("love-counter");
  }
});
// function for love and copy
function name(id) {
  let love = document.getElementById(id);
  let loveParse = parseInt(love.innerText);
  let loveIncrease = loveParse + 1;
  love.innerText = loveIncrease;
}

// copy button click

document.getElementById("card-parent").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    name("copy-counter");
    const number = e.target.parentNode.parentNode.children[3].innerText;
    alert(`Number Copied ${number}`);
    navigator.clipboard.writeText(number);
  }
});

// call button click

document.getElementById("card-parent").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    let coinCount = document.getElementById("coin-counter");
    let parseInt = Number(coinCount.innerText);
    if (parseInt >= 20) {
      let netAmmount = parseInt - 20;
      coinCount.innerText = netAmmount;
      const title = e.target.parentNode.parentNode.children[1].innerText;
      const number = e.target.parentNode.parentNode.children[3].innerText;
      alert(`📞 Calling ${title} ${number}...`);
      let history = document.getElementById("call-history");
      let getdiv = document.createElement("div");
      getdiv.innerHTML = `
       <div
                  class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between my-4 lg:gap-0 gap-3"
                >
                  <div>
                    <h2 class="text-[#111] text-lg font-semibold">${title}</h2>
                    <p class="text-lg font-normal text-[#5C5C5C]">${number}</p>
                  </div>
                  <div>
                    <p>${new Date().toLocaleTimeString()}</p>
                  </div>
                </div>
      `;
      history.appendChild(getdiv);
      document.getElementById("clear").addEventListener("click", function () {
        document.createElement("div");
        getdiv.innerHTML = "";
      });
    } else {
      alert(
        "⚠ NOt Enough balance 😔 You need atleast 20 Coins to make a call "
      );
    }
  }
});
