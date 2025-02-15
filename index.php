<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>【博多 美野島・住吉】ランチ情報サイト | みのすみLUNCH</title>
    <meta name="description" content="博多 美野島・住吉のランチ情報が盛りだくさん！価格やジャンルでお店を検索できます。">
    <!-- ファビコン設置方法 https://shu-sait.com/favicon-html-hyouji/#outline__1 -->
    <link rel="icon" href="img/favicon.ico">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png" sizes="180x180">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e71ed35904.js" crossorigin="anonymous"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4175450347366486"
        crossorigin="anonymous"></script>
    <head> <link rel="canonical" href="https://minosumi-lunch.com/"> </head>
    <!-- スニペットのサムネイル画像設定 -->
    <meta name="thumbnail" content="./img/dog.jpeg">
</head>

<body class="top">

<!-- ヘッダーは「header.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/header.php' ); ?>

<figure class="hero">
        <img src="img/hero.png" alt="みのすみLUNCH">
    </figure>

    <!-- <h1><small>＼どこか懐かしく、温かい／<br>美野島・住吉（＠博多）</small>LUNCH Information</h1> -->

    <section id="search">
        <h2>- LUNCH SEARCH -</h2>
        <p style="text-align: center; margin-bottom: 0;">＼博多 美野島・住吉エリアのランチ検索／</p>
        <div id="search-box">
            <p class="button-gray-wide" id="index-filter-search"><a href="shop-list.php#search-top"><img src="img/search-glass.png" alt="条件検索"><br> 条件から探す</a></p>
            <p class="button-gray-wide" id="index-map-search"><a href="search-shops.php#map-search"><img src="img/map.png" alt="マップ検索"><br> マップから探す</a></p>
            <p class="button-gray-wide" id="index-roulette"><a href="roulette.php"><img src="img/rourette.png" alt="ルーレット"><br> ルーレットで決める</a></p>
            </div>
    </section>


    <section id="recommend">
        <h2>- RECOMMEND -</h2>
        <article>
            <a href="column/minoshima-oyatsu.php">
                <figure><img src="img/cuisine/nomusu1.jpg" alt="nomusu1"></figure>
                <h3>軽食）美野島のおすすめおやつ３選！</h3>
            </a>
        </article>
        <article>
            <a href="column/minoshima-sumiyoshi-pasta.php">
                <figure><img src="img/cuisine/sundish5.jpg" alt="サンディッシュカフェの美味しいパスタ"></figure>
                <h3>【博多 美野島】おしゃれ空間で美味しいパスタ＠サンディッシュカフェ</h3>
            </a>
        </article>
        <article>
            <a href="column/minoshima-sumiyoshi-udon.php">
                <figure><img src="img/cuisine/taira1.jpg" alt="うどん平のうどん"></figure>
                <h3>【美野島・住吉】ランチに美味しいうどんを食べられるお店4選！</h3>
            </a>
        </article>
        <article>
            <a href="column/minoshima-sanpo.php">
                <figure><img src="img/column/kadoya_out.jpg" alt="kadoya"></figure>
                <h3>元祖博多の台所！美野島さんぽ（その１）</h3>
            </a>
        </article>
        <div id="more"><a href="column/index.php">more　→</a></div>
    </section>

    <!-- フッターは「footer.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/footer.php' ); ?>
