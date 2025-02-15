$(function () {
   function omikuji() {
      const cont = Math.ceil(Math.random() * 31);
      switch (cont) {
         case 1:
            $(".omikuji_name").html("今日は…「田舎家」の丼もの");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/inakaya2.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40010112/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 2:
            $(".omikuji_name").html("今日は…「うどん平」の肉ごぼううどん");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/taira1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40052349/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 3:
            $(".omikuji_name").html("今日は…「キッシュとパンのジョー」のキッシュ ");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/Joe.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40059360/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         // case 3:　閉店のため、コメントアウト中
         //    $(".omikuji_name").html("今日は…「うめうめ食堂」の定食 ");
         //    $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
         //    $(".omikuji_img").attr("src", "img/cuisine/umeume1.jpg");
         //    $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400104/40059516/");
         //    $(".btn_design2").html("もう１回まわす！");
         //    break;
         case 4:
            $(".omikuji_name").html("今日は…「エレメンタル食堂」のとり天");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/elemental2.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40058188/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 5:
            $(".omikuji_name").html("今日は…「大江戸そば」の天とじうどん");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/ohedo5.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40010081/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         // case 6:　 //2023年2月から休業のためコメントアウト中
         //    $(".omikuji_name").html("今日は…「音℃」の糸島豚塩焼きそば");
         //    $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
         //    $(".omikuji_img").attr("src", "img/cuisine/ondo1.jpg");
         //    $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40056789/");
         //    $(".btn_design2").html("もう１回まわす！");
         //    break;
         case 6:
            $(".omikuji_name").html("「元祖びっくり亭」のスタミナ鉄板焼き");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/bikkuritei1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40060294/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 7:
            $(".omikuji_name").html("今日は…「かどや食堂」の親子丼");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/kadoya1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40014238/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 8:
            $(".omikuji_name").html("今日は…「カリーマート」のカレー");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/kari_mart.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40020064/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 9:
            $(".omikuji_name").html("今日は…「吟麦製麺」のラーメン");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/ginmugi1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40058736/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 10:
            $(".omikuji_name").html("今日は…「キッチングローリ」のグローリーランチ");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/glory1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40011081/");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 11:
            $(".omikuji_name").html("今日は…「サンディッシュ」のパスタ");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/sundish1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40031165/dtlrvwlst/?smp=1");
            $(".btn_design2").html("もう１回まわす！");
            break;
         case 12:
            $(".omikuji_name").html("今日は…「中華料理シャン」の日替わり定食");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/syan1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40022270/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 13:
            $(".omikuji_name").html("今日は…「文化屋カレー店」のカレー");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/bunkaya3.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40009763/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         // case 14:　　※2023年4月閉店のためコメントアウト
         //    $(".omikuji_name").html("今日は…「想夫恋」の焼きそば");
         //    $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
         //    $(".omikuji_img").attr("src", "img/cuisine/sofuren1.jpg");
         //    $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40003736/");
         //    $(".btn_design2").html("もう１回まわす！");
         //    break;

         case 14:
            $(".omikuji_name").html("「一輩子 吉華(きっか)」の海老チャーハン");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/kikka1.png");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40063942/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 15:
            $(".omikuji_name").html("今日は…「民」のからあげ定食");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/tami1.jpg");
            $(".jump").attr("href", "https://www.hotpepper.jp/strJ000026793/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 16:
            $(".omikuji_name").html("今日は…「千咲季」のからあげ定食");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/chisaki1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40054554/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 17:
            $(".omikuji_name").html("今日は…「つけ麺鉄生」のつけ麺");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/tessei1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40061703/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 18:
            $(".omikuji_name").html("また外食？？");
            $(".omikuji_text").html("＼ぼくが作ろっか？／");
            $(".omikuji_img").attr("src", "img/cuisine/dog.jpg");
            $(".jump").attr("href", "#");
            $(".btn_design2").html("もう１回まわしとく？");

            break;
         case 19:
            $(".omikuji_name").html("今日は…「ナマステ」のインドカレー");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/namasute1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40034669/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 20:
            $(".omikuji_name").html("今日は…「バインミー」のフォー");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/bainmi2.jpg");
            $(".jump").attr("href", "https://www.hotpepper.jp/strJ001280588/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 21:
            $(".omikuji_name").html("今日は…「パンラッシュ」のランチ");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/panrush1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40050529/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 22:
            $(".omikuji_name").html("今日は…「ふなちゃん」の定食");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/funa3.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40006833/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 23:
            $(".omikuji_name").html("今日は…「マカロニキッチン」のハンバーグ");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/makaroni2.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40050172/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 24:
            $(".omikuji_name").html("今日は…「みかちゃん家のいろどりご飯」の限定ランチ");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/mikachan2.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40051938/");
            $(".btn_design2").html("もう１回まわす！");

            break;
         case 25:
            $(".omikuji_name").html("今日は…「やっこい」のチキンカツ丼");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/yakkoi1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40051800/");
            $(".btn_design2").html("もう１回まわす！");

            break;

         case 26:
            $(".omikuji_name").html("今日は…「てんぷらはちわれ」の日替わり定食");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/hachiware2.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400103/40046353/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 27:
            $(".omikuji_name").html("今日は…「桜蔵」のチャーハンセット");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/sakura1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40031693/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 28:
            $(".omikuji_name").html("「欧風ライスカレーKen's」の欧風カレー");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/kens1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40006935/https://tabelog.com/fukuoka/A4001/A400101/40006935/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 29:
            $(".omikuji_name").html("「さくら家」のたこ焼き");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/sakuratei1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40034131/dtlrvwlst/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 30:
            $(".omikuji_name").html("「中華そば さくら」の中華そば");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/tyuukasoba-sakura.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400104/40032549/");
            $(".btn_design2").html("もう１回まわす！");
            break;

         case 31:
            $(".omikuji_name").html("「一赫（いっかく）」の一赫辛麺");
            $(".omikuji_text").html("　＼店舗詳細は写真をクリック！／");
            $(".omikuji_img").attr("src", "img/cuisine/ikkaku1.jpg");
            $(".jump").attr("href", "https://tabelog.com/fukuoka/A4001/A400101/40063132/");
            $(".btn_design2").html("もう１回まわす！");
            break;

      }
   }

   $(".btn_design2").on("click", function () {
      omikuji();
   });

});