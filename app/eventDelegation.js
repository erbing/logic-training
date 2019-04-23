let appRom = document.getElementById('delegation');
let ulDom = appRom.children[0];

// 绑定方法
const handle = (dom, type, callback) => {
  dom.addEventListener(type, callback);
};

// 获取 target 对象方法 兼容
const getEventTarget = e => {
  e = e || window.event;
  return e.target || e.srcElement;
};

// 动态添加一个 btn 按钮
const createBtn = () => {
  let createBtnDom = document.createElement('button');
  createBtnDom.textContent = '添加';
  createBtnDom.className = 'add-btn';
  handle(createBtnDom, 'click', () => {
    let createLiDom = document.createElement('li');
    createLiDom.textContent = 'hello, li~' + Math.random();
    ulDom.appendChild(createLiDom);
  });
  return createBtnDom;
};

// 执行 添加一个 btn 按钮 方法
let createBtnHtml = createBtn();
appRom.appendChild(createBtnHtml);

// 获得点击 target 的 innerHtml 方法
handle(appRom, 'click', e => {
  let curTarget = getEventTarget(e);
  if ((curTarget.children && curTarget.children.length) || curTarget.tagName == 'BUTTON') return false;
  console.log(curTarget.innerHTML);
  return curTarget.innerHTML;
});
