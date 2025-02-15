<!-- 共通ヘッダー -->
<header class="header">
        <div class="header-container">

            <div class="site">
                <a href="index.php">
                    minosumiLUNCH
                </a>
            </div>

            <!-- <button class="navbtn1"><i class="fa-solid fa-magnifying-glass"></i></button> -->
            <!-- buttonタグで作ることで、「クリックしてメニューをひらく」
            ことができるようにする。aタグだとリンクに飛ぶことになる -->
            <button class="navbtn" onclick="document.querySelector('html').classList.toggle('open')">
                <i class="fas fa-bars"></i>
                <i class="fas fa-times"></i>
                <!-- sr-only：スクリーンリーダーの読み上げ用設定。Font Awesomeに用意された設定。 -->
                <span class="sr-only"></span>
            </button>

            <nav class="nav">
                <ul>
                    <li style="width: 50px;"><a href="about.php" class="nav_about">About</a></li>
                    <li><a href="search-shops.php" class="nav_lunch-search">ランチ検索</a></li>
                    <li><a href="shop-list.php" class="nav_shop-list">店舗一覧</a></li>
                    <li><a href="roulette.php" class="nav_roulette">ルーレット</a></li>
                    <br>
                    <li id="sita1"><small><a href="./column/index.php" class="nav_column">コラム</a></small></li>
                    <li id="sita2"><small><a href="contact.php" class="nav_contact">お問い合わせ</a></small></li>
                </ul>
            </nav>
        </div>
    </header>
