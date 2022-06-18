
let index = 0;
let wrapper = document.querySelector(".wrapper");
// const wrapper = document.all.wrapper
let star = false;
let plus = document.querySelector(".two .plus");
let breathing = document.querySelector(".two .breathing");
let context = document.querySelector(".two .context");
let contextSpan = document.querySelectorAll(".two .context span");
let contextI = document.querySelector(".two i");
let bkg = document.querySelector(".two .bkg");
let right_people = document.querySelector(".two .right_people");
let helmet = document.querySelector(".two .helmet");
// 滑动
document.addEventListener("mousewheel", (e) => {
  if (star) return;
  star=true
  if (e.wheelDeltaY > 0) {
    index = Math.min(++index, 0);
  } else {
    index = Math.max(--index, -5);
  }
  wrapper.style.transform = `translateY(${index * 100}%)`;
  star = true;
  setTimeout(() => {
    star = false;
  },800);
});

// 呼吸灯
plus.onclick = function () {
  context.className = "context move";
  contextSpan[0].style.marginLeft = "-600px";
  contextSpan[1].style.marginLeft = "-500px";
  contextI.style.marginLeft = "-600px";
  breathing.style.display = "none";
  bkg.style.display = "block";
  // right_people.style.display = 'block'
  setTimeout(() => {
    right_people.className = " right_people right_people_show";
    right_people.style.opacity = 1;
  }, 1000);
};

// 帽子切换
let nums = ["94", "174", "254", "339", "421", "501", "582"];

function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
let timer = null;
helmet.onmouseover = function () {
  timer = setInterval(() => {
    let random = getRandom(nums);
    helmet.style.backgroundPosition = `-${nums[random]}px -10px`;
  }, 500);
};

helmet.onmouseout = function () {
  clearInterval(timer);
};

// 第三页
let puls1 = document.querySelector(".three .plus");
let context1 = document.querySelector(".three .content");
let contextP1 = document.querySelectorAll(".three .content span");
let contextI1 = document.querySelector(".three i");
let breathing1 = document.querySelector(".three .breathing");
let bkg1 = document.querySelector(".three .bkg");
let right_gun = document.querySelector(".right_gun");
puls1.onclick = function () {
  context1.className = "content moveOne";
  contextP1[0].style.marginLeft = "-600px";
  contextP1[1].style.marginLeft = "-500px";
  contextI1.style.marginLeft = "-600px";
  breathing1.style.display = "none";
  bkg1.style.display = "block";
  setTimeout(() => {
    right_gun.style.opacity = 1;
  }, 1000);
};

// 第四页
let leftP = document.querySelectorAll(".four .switch .left p");
let rightP = document.querySelectorAll(".four .switch .right p");
let weather = document.querySelector(".weather");
let terrain = document.querySelector(".terrain");
rightP[0].onclick = function () {
  this.style.display = "none";
  rightP[1].style.display = "block";
  leftP[0].style.display = "block";
  leftP[1].style.display = "none";
  terrain.style.display = "block";
  weather.style.display = "none";
};
leftP[0].onclick = function () {
  this.style.display = "none";
  rightP[0].style.display = "block";
  rightP[1].style.display = "none";
  leftP[1].style.display = "block";
  terrain.style.display = "none";
  weather.style.display = "block";
};

//第五页
let puls2 = document.querySelector(".five .plus");
let fivecontext1 = document.querySelector(".five .content");
let fivefl = document.querySelector(".five .content fl");
let fivecontextP1 = document.querySelectorAll(".five .content span");
let fivecontextI1 = document.querySelector(".five i");
let fivebreathing1 = document.querySelector(".five .breathing");
let fivebkg1 = document.querySelector(".five .bg");
let fivevido = document.querySelector(".five .vido");

puls2.onclick = function () {
  console.log(1);
  fivecontext1.className = "content moveTne";
  fivecontext1.style.display='flex'
  fivecontextP1[0].style.marginTop = "-200px";
  // fivecontextP1[0].style.width="450px"
  fivecontextP1[1].style.marginTop = "-200px";
  // fivecontextP1[1].style.width="450px"
  fivecontextI1.style.marginTop = "-110px";
  // fivecontextI1.className='i1'
  fivebreathing1.style.display = "none";
  fivevido.style.display="none"
  fivebkg1.style.display = "block";
  // setTimeout(() => {
  //   right_gun.style.opacity = 1;
  // }, 1000);
};

let vehicles = document.querySelectorAll('.vehicle img');   //获取所有的图片
let vehiclesOptions = document.querySelectorAll('.bg .footer ul li');  //获取所有的选项

vehiclesOptions.forEach(function (item, index) {
  item.onclick = function () {
      // 遍历所有的选项
      vehiclesOptions.forEach((citem, cindex) => {
          // 将不是当前下标的选项去掉选中状态
          // 将是当前下标的选项加上选中状态
          if (cindex === index) {
              citem.classList.add('on');
          } else {
              citem.classList.remove('on');
          }
      });

      // 遍历所有的交通工具
      vehicles.forEach((citem, cindex) => {
          // citem是每一个交通工具
          // cindex 是每一个交通工具的下标
          if (cindex === index) {
              // 如果当前点击的下标和交通工具的下标一致，就加上显示状态
              citem.classList.add('show');
          } else {
              // 如果下标不一致就去掉显示状态
              citem.classList.remove('show');
          }
      });
  }
});