const boxElement = document.getElementById('box');
const textElement = document.getElementById('main-text');
const emojiElement = document.getElementById('emoji-text');
// 声明定义各个元素，方便后续使用

var num = 15;

function updateContent(textStr, emojiStr) {
    textElement.style.opacity = 0;
    emojiElement.style.opacity = 0;
    // 改变内容前先隐藏
    textElement.innerText = textStr;
    emojiElement.innerText = emojiStr;
    // 重新把俩字符串写入元素的文本内容
    textElement.style.opacity = 1;
    emojiElement.style.opacity = 1;
    // 改完再展示
}

function flashScreen() {
    setInterval(() => {
        if (document.body.style.backgroundColor == 'black') {
            document.body.style.backgroundColor = 'gray';
            // 颜色比较温和，防止误伤
        } else {
            document.body.style.backgroundColor = 'black';
        }
    }, 20);
}

function takeAction() {
    if (num >= 0) {
        num --;
    }
    switch (15 - num) {
        case 1:
            updateContent('だめ！！', '😥');
            break;
        case 2:
            updateContent('再动我会消失掉的！', '😟');
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            updateContent(`${num} 次之后我就会消失掉了…`, '😔');
            break;
        case 8:
            updateContent('可是你真的不在乎我吗…', '🥺');
            break;
        case 9:
            updateContent('可恶！既然你根本不在乎我，那我一定会让你后悔的！！', '😡');
            break;
        case 10:
            updateContent('让我想想该怎么让你后悔… 把屏幕闪坏掉怎么样？', '🤬');
            break;
        case 11:
            updateContent('还不打算停下嘛！', '😭');
            break;
        case 12:
            updateContent('诶呀其实我骗你的，你点再多次我都不会消失掉哦～', '😉');
            break;
        case 13:
            updateContent('又来？', '🤨');
            break;
        case 14:
            updateContent('毁灭吧，我累了。', '💀');
            break;
        case 15:
            document.body.removeChild(boxElement);
            flashScreen();
            break;
        default:
            console.warn('似乎有计算错误发生');
    }
}

updateContent('不要动我。', '😢');
// 更新初始状态