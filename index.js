// 削除ボタンを作成し、各リストアイテムに追加する
const list = document.getElementsByTagName('li');
for ( let i = 0; i < list.length; i++) {
  const span = document.createElement('span');
  span.className = "close";
  span.innerText = '削除';
  list[i].appendChild(span);  
}

// 完了ボタンを作成し、未完了リストアイテムに追加する
const incompleteList = document.getElementById('myIncompleteUL');
for ( let i = 0; i < incompleteList.children.length; i++) {
  var completeSpan = document.createElement('span');
  completeSpan.className = "complete";
  completeSpan.innerText = '完了';
  incompleteList.children[i].appendChild(completeSpan);
}

// 戻すボタンを作成し、完了リストアイテムに追加する
const completeList = document.getElementById('myCompleteUL');
for ( let i = 0; i < completeList.children.length; i++) {
  var backSpan = document.createElement('span');
  backSpan.className = "back";
  backSpan.innerText = '戻す';
  completeList.children[i].appendChild(backSpan);
}

// 削除ボタンをクリックして現在のリストアイテムを隠す
const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const target = close[i].parentElement;
    target.style.display = "none";
  }
}

// リストアイテムをクリックしたときに、完了リストへ移動する
var myList = document.querySelector('#myIncompleteUL');
myList.addEventListener('click', function(ev) {
  if (ev.target.className === 'complete') {
    const incompleteValue = ev.target.parentElement.innerText.split("削除");
    ev.target.parentElement.style.display = "none";

    var li =document.createElement("li");
    var t = document.createTextNode(incompleteValue[0]);
    li.appendChild(t);
    var completeList = document.getElementById("myCompleteUL");
    completeList.appendChild(li);

    var deleteSpan = document.createElement('span');
    deleteSpan.className = "close";
    deleteSpan.innerText = '削除';
    li.appendChild(deleteSpan);

    var backSpan = document.createElement('span');
    backSpan.className = "back";
    backSpan.innerText = '戻す';
    li.appendChild(backSpan);
  
    

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      };
    };

  }
}, false);


// 追加ボタンをクリックすると、新しいリストアイテムを作成する
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("何か入力してください");
  } else {
    document.getElementById("myIncompleteUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var deleteSpan = document.createElement('span');
  deleteSpan.className = "close";
  deleteSpan.innerText = '削除';
  li.appendChild(deleteSpan);

  var completeSpan = document.createElement('span');
  completeSpan.className = "complete";
  completeSpan.innerText = '完了';
  li.appendChild(completeSpan);

  
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    };
  };
}

// リストアイテムをクリックしたときに、未完了リストへ戻る
var myCompleteList = document.querySelector('#myCompleteUL');
myCompleteList.addEventListener('click', function(ev) {
  if (ev.target.className === 'back') {
    const completeValue = ev.target.parentElement.innerText.split("削除");
    ev.target.parentElement.style.display = "none";

    var li =document.createElement("li");
    var t = document.createTextNode(completeValue[0]);
    li.appendChild(t);
    var incompleteList = document.getElementById("myIncompleteUL");
    incompleteList.appendChild(li);

    var deleteSpan = document.createElement('span');
    deleteSpan.className = "close";
    deleteSpan.innerText = '削除';
    li.appendChild(deleteSpan);

    var completeSpan = document.createElement('span');
    completeSpan.className = "complete";
    completeSpan.innerText = '完了';
    li.appendChild(completeSpan);
  

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      };
    };

  }
}, false);
