<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>サイトマップ | みのすみLUNCH</title>
    <meta name="description" content="博多 美野島・住吉エリアのランチ情報サイト「みのすみLUNCH」のサイトマップです。">
    <link rel="icon" href="img/favicon.ico">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png" sizes="180x180">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e71ed35904.js" crossorigin="anonymous"></script>
    <style>
        .common-deco ol li {
            font-size: 1.05em;
            line-height: 2em;
        }

        .common-deco ol li a:hover {
            border-bottom: 5px #ccc dotted;
        }
    </style>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4175450347366486"
        crossorigin="anonymous"></script>
</head>

<body class="post">

<!-- ヘッダーは「header.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/header.php' ); ?>

    <article class="common-deco">
        <h1>サイトマップ</h1>
        <p>minosumiLUNCHのサイトマップです。</p>
        <h2>Main Page</h2>
        <ol>
            <li><a href="about.php">About - minosumiLUNCHとは</a></li>
            <li><a href="shop-list.php">条件から探す・店舗一覧</a></li>
            <li><a href="search-shops.php">マップから探す</a></li>
            <li><a href="roulette.php">ランチルーレット</a></li>
            <li><a href="./column/index.php">コラム - 美野島・住吉 散歩録</a></li>
        </ol>
        <h2>Others</h2>
        <ol>
            <li><a href="about.php">サイト運営情報</a></li>
            <li><a href="contact.php">お問い合わせ</a></li>
            <li><a href="privacy-policy.php">免責事項・プライバシーポリシー</a></li>
            <li><a href="sitemap.php">サイトマップ　<small>※現在のページです</small></a></li>
        </ol>

    </article>

<!-- サイドは「aside.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/aside.php' ); ?>

<!-- フッターは「footer.php」で管理 -->
<?php $Path = "./"; include ( dirname(__FILE__) . '/footer.php' ); ?>
