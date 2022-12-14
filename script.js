let initMessage = "Hello World !";
document.querySelector(".keyboard-input").value = initMessage
let keyboardLang = 0;

function initKeyBoard() {
   if(localStorage.getItem('keyboardLang')) {
      keyboardLang = localStorage.getItem('keyboardLang');
   }
   getKeys(keyboardLang);
   let arrayDivKeys = document.querySelectorAll('.key');
   arrayDivKeys.forEach(element => {
   if (element.innerHTML.length === 1)
      {
         element.addEventListener('click', function(){
            
            document.querySelector(".keyboard-input").value += element.innerHTML;
         })
      }
   })
   let enter = document.querySelector(".key:nth-child(41)");
   enter.addEventListener('click', function(){ 
      document.querySelector(".keyboard-input").value += "\n";
   }) 
   let tab = document.querySelector(".key:nth-child(15)");
   tab.addEventListener('click', function(){ 
      document.querySelector(".keyboard-input").value += "\t";
   }) 
}
window.addEventListener('load', initKeyBoard)

function setLocalStorage() {
   localStorage.setItem('keyboardLang', keyboardLang);
}

window.addEventListener('beforeunload', setLocalStorage)

let arrayKeys = [
   {
      lang: "en",
      keys: [
         "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
         "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
         "Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
         "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift",
         "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "EN"
      ]

   },
   {
      lang: "ru",
      keys: [
         "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
         "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
         "Caps Lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
         "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift",
         "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "RU"
      ]
   }
]

let keyData = [
         "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
         "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash",
         "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
         "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight",
         "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "EN"
      ]

let keyboard = document.querySelector(".keyboard");
for (let index = 0; index < arrayKeys[0].keys.length; index++) {
   let btn = document.createElement("div");
   btn.classList.add("key", "keyup")  
   keyboard.append(btn) 
} 

//Функция, которая получает массив клавиш по индексу
function getKeys(index){
   arrayKeys[index].keys
  
   let arrayDivKey = document.querySelectorAll('.key');

   for (let item = 0; item < arrayKeys[index].keys.length; item++) { 
         arrayDivKey[item].setAttribute("data-key", keyData[item]); 
         arrayDivKey[item].innerHTML = arrayKeys[index].keys[item];
   }
} 

addLangListener();

function addLangListener()
{
   let langKey = document.querySelector('.key:nth-child(60)')
   langKey.addEventListener('click', function(){
      if (langKey.getAttribute('data-lang') === 'EN') {
         langKey.setAttribute('data-lang', 'RU')
         keyboardLang = 1;
         getKeys(keyboardLang);
      }
      else {
         langKey.setAttribute('data-lang', 'EN')
         keyboardLang = 0;
         getKeys(keyboardLang);
      }
   })
}

//Функция добавления событий к кнопке Caps Lock
function capsLock()
{
   let capsLockKey = document.querySelector('.key:nth-child(29)')
   capsLockKey.addEventListener('click', function(){
      if (capsLockKey.classList.contains('flag') === true) {
         capsLockKey.classList.remove('flag')
         keysToLowerCase();
      }
      else {
         capsLockKey.classList.add('flag')
         keysToUpperCase();
      }
   })
}

capsLock();

function keysToUpperCase(){
   let arrayDivKeys = document.querySelectorAll('.key');

   arrayDivKeys.forEach(element => {
      if (element.innerHTML.length === 1)
      {
         element.innerHTML = element.innerHTML.toLocaleUpperCase();
      }
   })
}

function keysToLowerCase(){
   let arrayDivKeys = document.querySelectorAll('.key');

   arrayDivKeys.forEach(element => {
      if (element.innerHTML.length === 1)
      {
         element.innerHTML = element.innerHTML.toLocaleLowerCase();
      }
   })
}

// Удаление последнего символа
let backspase = document.querySelector(".key:nth-child(14)");

backspase.addEventListener('click', function(){
   
   document.querySelector(".keyboard-input").value = document.querySelector(".keyboard-input").value.slice(0,-1);
})

document.addEventListener('keydown', function(event){
   let pressedKey = document.querySelector(`[data-key="${event.code}"]`);
   switch(event.key){
      case 'Backspace':
         document.querySelector(".keyboard-input").value = document.querySelector(".keyboard-input").value.slice(0,-1);
      break;
      case 'Tab':
         event.preventDefault(); 
         document.querySelector(".keyboard-input").value += "\t";
      break;
      case 'Alt':
         event.preventDefault();
      break;
      case 'Enter':
         event.preventDefault();
         document.querySelector(".keyboard-input").value += "\n";
      break;   
      case 'Shift':
         event.preventDefault();
         keysToUpperCase();
      break;
      case 'CapsLock':
         event.preventDefault();
         document.querySelector('.key:nth-child(29)').dispatchEvent(new Event('click'));
      break;
   }

   if(event.key.length === 1){
      document.querySelector(".keyboard-input").value += pressedKey.innerHTML;
   }

   pressedKey.classList.remove("keyup");
   pressedKey.classList.add("keydown");
})

setInterval(() => keys={}, 5000);

var keys = {}
document.addEventListener('keyup', function(event){
   let pressedKey = document.querySelector(`[data-key="${event.code}"]`);
   if(event.key === 'Shift' && document.querySelector('.key:nth-child(29)').classList.contains('flag') !== true){
      keysToLowerCase();
   }
   
   keys[event.code] = true;
   if(keys['ShiftLeft'] && keys['AltLeft']){
      document.querySelector('.key:nth-child(60)').dispatchEvent(new Event('click'));
      keys = {}
   }

   pressedKey.classList.remove("keydown");
   pressedKey.classList.add("keyup");
})