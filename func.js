//置頂按鈕
//https://mrcodingroom.freesite.host/htmlcssjs%E7%B0%A1%E6%98%93%E7%BD%AE%E9%A0%82%E6%8C%89%E9%88%95/
window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("to_top").style.display = "block";
  } else {
    document.getElementById("to_top").style.display = "none";
  }
}//網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

// 重置scrollTop這個變數的值
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//選單縮放
function closeMenu() {
  switch_check = document.getElementById('switch')
  switch_check.checked = false
}

// nav 監聽
// https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/

//畫面出現才做動畫
//https://ithelp.ithome.com.tw/m/articles/10337575
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect(); //取得元素相對於螢幕的位置
  return rect.bottom < 0 || rect.top > window.innerHeight;

  //元素的上方超出畫面時top就會變負值，當元素的下方超出畫面時bottom的值會大於螢幕高度
  //rect.bottom < 0  : 在視窗下>true 視窗裡=>false
  //rect.top > window.innerHeight : 視窗外=>true 視窗裡=>false
}

function addClassToVisibleElements() {
  var aosElements = document.querySelectorAll(".aos");
  aosElements.forEach(function (aosElement) {
    if (!isElementInViewport(aosElement)) {
      aosElement.classList.add("animate__animated");
      aosElement.classList.add("animate__pulse");
    }
    else {
      aosElement.classList.remove("animate__animated");
      aosElement.classList.remove("animate__pulse");
    }
  });
}

function isMenuElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom < (window.innerHeight / 2) || rect.top > (window.innerHeight - 400);

}

function addNavToVisibleElements() {
  var menuElements = document.querySelectorAll(".change_menu");
  // var menu_items = document.querySelectorAll(".menu_item");

  menuElements.forEach(function (menuElement) {
    let menu_id = menuElement.id
    let menu_item = document.getElementById(`${menu_id}_menu`)
    if (!isMenuElementInViewport(menuElement)) {
      menu_item.classList.add("section_at");
      return
    }
    else {
      menu_item.classList.remove("section_at");
    }
  });
}

document.addEventListener("scroll", addClassToVisibleElements);
addClassToVisibleElements();

document.addEventListener("scroll", addNavToVisibleElements);
addNavToVisibleElements()


window.onload = () => {

  more_bn.onclick = () => {
    let hids = document.querySelectorAll(".hid")
    let num = document.querySelectorAll(".theme").length
    console.log(num)
    hids.forEach(hid => {
      hid.style = "display:block;"
    })
    if (num == (hids.length + 4)) {
      more_bn.style = "display:none;"
      less_bn.style = "display:block;"
    }

  }
  less_bn.onclick = () => {
    let hids = document.querySelectorAll(".hid")
    let num = document.querySelectorAll(".theme").length
    console.log(num)
    hids.forEach(hid => {
      hid.style = "display:none;"
    })
    if (num == (hids.length + 4)) {
      more_bn.style = "display:block;"
      less_bn.style = "display:none;"
    }

  }
  
}
