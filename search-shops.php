<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ランチ検索 | みのすみLUNCH</title>
    <meta name="description" content="博多 美野島・住吉エリアのランチ情報を検索できます。">
    <link rel="icon" href="img/favicon.ico">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png" sizes="180x180">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e71ed35904.js" crossorigin="anonymous"></script>
    <script src="https://www.w3schools.com/lib/w3.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4175450347366486"
        crossorigin="anonymous"></script>
    <script type="text/javascript" language="javascript">
    var vc_pid = "888586847";
    </script><script type="text/javascript" src="//aml.valuecommerce.com/vcdal.js" async></script>
    <style>
        /* カレントページ表示 */
        .nav_lunch-search{
            font-weight: bold;
            border-bottom: dotted #ef9504 4px;
        }
    </style>
</head>

<body class="post">

<!-- ヘッダーは「header.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/header.php' ); ?>

<article class="common-deco">
        <h1>ランチ検索</h1>
        <p>博多 美野島・住吉エリアでランチ営業しているお店を集めました（2022年12月時点）。</p>
        <p>検索方法を選択してください。</p><br>
        <p style="text-align: center; margin-bottom: 0;">＼おすすめ／</p>
        <p class="button-gray" style="margin-top: 0;"><a href="shop-list.php#search-top"
                style="margin-top: 0.2em;">条件から探す</a></p>
        <p class="button-gray"><a href="#map-search">マップから探す</a></p>
        <!-- この↓一行いれないと、h2がヘッダに隠れないようにするcssのせいで２個目のボタンが効かなくなる -->
        <br><br>
        <hr>

        <br>
        <h2 id="map-search">マップから探す</h2>
        <p>詳細を見るにはピンをクリックしてください。<small>
                ※iphoneの方は、googlemapのアプリでの閲覧をおすすめします。</small></p>
        <div class="map">
            <iframe src="https://www.google.com/maps/d/embed?mid=1WfjXWu98Km_IpYEt2zjyTpI_KB4Rm4g&ehbc=2E312F"
                height="480px" width="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div style="padding: 1em; background-color: #fff;">
        <span style="font-weight:bold;">【 フロンティア・アカデミー福岡校の皆さんへ 】</span><br><small><br>
        プロットの色は、フロンティア福岡校からの往復時間目安です。（<span style="background-color: #fbbf2e;">黄色=往復5分</span>、<span style="background-color: #adb32e;">黄緑=往復10分</span>、<span style="background-color: #52892d;">緑=往復15分</span>）<br><br>
            「
        <a href="shop-list.php#search-top" id="a-deco">条件から探す</a>」⇒「OPEN：条件を選ぶ」⇒
        「FRからの徒歩時間」にて、往復時間ごとにフィルタ検索が可能です（便利！）</small></div>
        <br>

        <!-- <h2>スプレッドシートのてすと</h2>
        <p>さらに詳しい情報を載せました。<br></p> -->
        <!-- スプレッドシート埋め込み参考：https://tipstour.net/google-spreadsheet-web-embed -->
        <!-- <p class="button-violet"><a
                href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSQRRmyeqRItgs_eUTMpT8CK43oT9I_hcG_BXESZhISgetvBZq0zzeMv4oCZ3VSA/pub?gid=1874889521&single=true&output=pdf">ファイルをダウンロード（PDF:----KB）</a>
        </p>
        <div class="map">
            <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSQRRmyeqRItgs_eUTMpT8CK43oT9I_hcG_BXESZhISgetvBZq0zzeMv4oCZ3VSA/pubhtml?gid=1874889521&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>

        <br>
        <h2 id="#">条件検索</h2> -->

    </article>
<!-- サイドは「aside.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/aside.php' ); ?>

<!-- フッターは「footer.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/footer.php' ); ?>
