
(function () {
    'use strict';

    var Qnumber = 0;
    var Qcount = null;
    var Startflg = 0;
    var Anumber = 0;
   const MaxQ = 5;
    var Click = 0;
     var arr = [0, 2, 3, 4, 5, 6, 7, 8];
    var a = arr.length;
    var i = 0;


    var t;

    

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var context;

    // Audio 用の buffer を読み込む
    var getAudioBuffer = function (url, fn) {
        var req = new XMLHttpRequest();
        // array buffer を指定
        req.responseType = 'arraybuffer';

        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 0 || req.status === 200) {
                    // array buffer を audio buffer に変換
                    context.decodeAudioData(req.response, function (buffer) {
                        // コールバックを実行
                        fn(buffer);
                    });
                }
            }
        };

        req.open('GET', url, true);
        req.send('');
    };


// サウンドを再生
var playSound = function(buffer) {
  // source を作成
  var source = context.createBufferSource();
  // buffer をセット
  source.buffer = buffer;
  // context に connect
  source.connect(context.destination);
  // 再生
  source.start(0);
};

// main
    var btn = document.getElementById('btn');
    var btn2 = document.getElementById('btn2');
    var result = document.getElementById('result');
    var reset = document.getElementById('reset');
    var start = document.getElementById('start');
    var Gen = document.getElementById('Gen');
    var Kai = document.getElementById('Kai');
    var elem = document.getElementById("img")
    parseInt(Qcount, 10);


    //初期化
    start.addEventListener('click', function () {
        context = new AudioContext();
    
        if (Startflg == 0) {
            // サウンドを読み込む
            getAudioBuffer('https://raw.githubusercontent.com/studyOnl/koredake/master/audio/se.mp3', function (buffer) {

                // サウンドを再生
                playSound(buffer);
            });
            getAudioBuffer('https://raw.githubusercontent.com/studyOnl/koredake/master/audio/r6.mp3', function (buffer) {

                // サウンドを再生
                playSound(buffer);
            });
            ButtonReset();
            RandomCheck();
            Listadd();
            Startflg = 1;
            Kai.textContent = "";
            Gen.textContent = "現在" + Anumber + "問正解";

            start.textContent = " ";
        }


    });

    //ボタンを押したときのアニメーション
    btn.addEventListener('mousedown', function () {

        this.className = 'pushed';
    });

    btn2.addEventListener('mousedown', function () {

        this.className = 'pushed';
    });

    //ボタンから離れたときの処理
    if (parseInt(MaxQ) >= parseInt(Qnumber + 1)) {
        btn.addEventListener('mouseup', function () {
            this.className = '';
        });

        //○ボタンをクリックしたときの処理
      
        btn.addEventListener("click", function () {
            if (Click == 0) {
                Click = 1;
                if (parseInt(Startflg) == 1) {
                    switch (Qnumber) {
                        case 0:
                            Question(2, 1, "不正解！：2019年はまだ20歳で、2022年4月より18歳になります。");
                            break;
                        case 1:
                            Question(1, 1, "正解！：投票も忘れずに行きましょう");
                            break;
                        case 2:
                            Question(2, 1, "不正解！：自動運転レベル3において、緊急時にはドライバーの操作が必要なため飲酒や睡眠は禁止されています。");
                            break;
                        case 3:
                            Question(1, 1, "正解！：1972年にマグナボックス社から発売されました。");
                            break;
                        case 4:
                            Question(2, 1, "不正解！：一番売れたゲーム機はPlaystation2で次にニンテンドーDSです。");
                            break;
                        case 5:
                            Question(1, 1, "正解！：マインクラフトは1億7600万本の売り上げを誇っています。");
                            break;
                        case 6:
                            Question(1, 1, "正解！：洗米した後のご飯２合に対して、お酢大さじ1杯の割合を入れるようにしましょう");
                            break;
                        case 7:
                            Question(1, 1, "正解！：関西以外ではおかずとして食べないようです");
                            break;
                        case 8:
                            Question(2, 1, "不正解！：「元の場所に戻す」という意味合いで使用しているのは関西の人です。");
                            break;
                    }
                }
            }
                if (Startflg == 1) {
                    reset.classList.remove("hidden");
                }
            });

            //×ボタンをクリックしたときの処理
        btn2.addEventListener("click", function () {
            if (Click == 0) {
                Click = 1;
                if (parseInt(Startflg) == 1) {
                    switch (Qnumber) {
                        case 0:
                            Question(2, 2, "正解！：成年年齢引き下げは2022年4月に行われます。");
                            break;
                        case 1:
                            Question(1, 2, "不正解！：今年の参議院選挙の投票日は7月21日です。忘れずに行きましょう！");
                            break;
                        case 2:
                            Question(2, 2, "正解！：自動運転レベル3において、緊急時にはドライバーの操作が必要なため飲酒や睡眠は禁止されています。");
                            break;
                        case 3:
                            Question(1, 2, "不正解！：1972年にマグナボックス社から発売されました。");
                            break;
                        case 4:
                            Question(2, 2, "正解！：一番売れたゲーム機はPlaystation2で次にニンテンドーDSです。");
                            break;
                        case 5:
                            Question(1, 2, "不正解！：2019年5月にテトリスの累計販売本数1億7000万本を抜いたと報道がありました。");
                            break;
                        case 6:
                            Question(1, 2, "不正解！：洗米した後のご飯２合に対して、お酢大さじ1杯の割合を入れるようにしましょう");
                            break;
                        case 7:
                            Question(1, 2, "不正解！：関西では多くの人がおかずとして食べています。");
                            break;
                        case 8:
                            Question(2, 2, "正解！：「元の場所に戻す」という意味合いで使用しているのは関西の人です。");
                            break;

                    }
                }
                if (Startflg == 1) {
                    reset.classList.remove("hidden");
                }
            }
            });
        
        //「次の問題へ」を押した際の処理
        reset.addEventListener("click", function () {
            //Qnumber = parseInt(Qnumber + 1) ;
            Click = 0;
            elem.src = "https://github.com/studyOnl/koredake/blob/master/images/study_man_headphone.png?raw=true";
            Gen.textContent = "";
            Kai.textContent = "現在" + Anumber + "問正解";
            reset.classList.add("hidden");
            Listadd();
           
       
        });

    }

    //変数再初期化
    function ButtonReset() {
         Qcount = 0;
         Startflg = 0;
         Anumber = 0;   
         i = 0;
    }

    //正当判定
    function Question(Answerid, Clickid, Reason) {
        if (Answerid == Clickid) {
            elem.src = "https://github.com/studyOnl/koredake/blob/master/images/quiz_man_maru.png?raw=true";
            getAudioBuffer('https://raw.githubusercontent.com/studyOnl/koredake/master/audio/correct3.mp3', function (buffer) {

                // サウンドを再生
                playSound(buffer);
            });          
            Anumber++;
            Qcount+=1;
            result.textContent = Reason;
         
        }
        else {
            elem.src = "https://github.com/studyOnl/koredake/blob/master/images/quiz_man_batsu.png?raw=true";
            getAudioBuffer('https://raw.githubusercontent.com/studyOnl/koredake/master/audio/incorrect1.mp3', function (buffer) {

                // サウンドを再生
                playSound(buffer);
            });     
            Qcount+=1;
            result.textContent = Reason;

        }
 
        if (parseInt(Qcount,10)=== MaxQ) {
            Qcount = 0;       
            Last();
        }
    }
    //乱数セット
    function RandomCheck() {

        while (a) {
            var j = Math.floor(Math.random() * a);
            var t = arr[--a];
            arr[a] = arr[j];
            arr[j] = t;
        }

        ////シャッフルされた配列の要素を順番に表示する
        console.log("下から");
        arr.forEach(function (value) { console.log(value) });
    }

    //問題セット
    function Listadd() {
        Qnumber = arr[i];
        i++
        switch (Qnumber) {
            case 0:
                result.textContent = "現在の成年年齢は１８歳である";
                break;
            case 1:
                result.textContent = "今年の参議院選挙は7月21日に行われる";
                break;
            case 2:
                result.textContent = "自動運転レベル3においてドライバーは飲酒や睡眠をしても良い";
                break;
            case 3:
                result.textContent = "世界最古のゲーム機はOdyssey(オデッセイ)である";
                break;
            case 4:
                result.textContent = "一番売れたゲーム機はニンテンドーDSである";
                break;
            case 5:
                result.textContent = "世界一売れたゲームはマインクラフトである";
                break;
            case 6:
                result.textContent = "炊飯する時に酢を入れると食中毒予防になる";
                break;
            case 7:
                result.textContent = "関西の人はお好み焼きやたこ焼きをおかずとして食べる";
                break;
            case 8:
                result.textContent = "関東において「なおす」とは、「直す」「治す」の他に「元の場所に戻す」という意味合いも持つ";
                break;

        }
    }

    function Last() {
     
            reset.textContent = "結果を表示する";
        reset.addEventListener("click", function () {       
            switch (Anumber) {
       
                case 3: result.textContent = parseInt(MaxQ) + "問中" + parseInt(Anumber) + "問正解！中々凄いですね！"; break;
                case 4: result.textContent = parseInt(MaxQ) + "問中" + parseInt(Anumber) + "問正解！もう一息です！"; break;
                case 5: result.textContent = parseInt(MaxQ) + "問中" + parseInt(Anumber) + "問正解！全問正解です！お見事！"; break;
                default: result.textContent = parseInt(MaxQ) + "問中" + parseInt(Anumber) + "問正解！"; break;
            }
                start.textContent = "F5キーで最初の画面に戻ります";
  
            });
 
    }
})();

