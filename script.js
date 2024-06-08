// スクロールで背景拡大
window.addEventListener('scroll', function() {
    var element = document.getElementById('main-design');
    var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    var maxScale = 1.6; // 最大拡大倍率
    var maxTranslate = 100; // 最大移動距離（左に移動する最大値）

    var scaleFactor = 1 + scrollPercentage * (maxScale - 1);
    var translateAmount = scrollPercentage * maxTranslate;

    // スクロールに応じて要素を拡大・移動
    element.style.transform = 'translateX(-' + translateAmount + 'px) scale(' + scaleFactor + ')';
});

//フェードインアニメーション
$(function() {
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();// スクロール量を取得
        const windowHeight = $(window).height();// 画面の高さを取得

        $(".wrapper").each(function() {
            const boxHeight = $(this).offset().top;// それぞれの.boxまでの高さを取得

            // 条件式に合致する場合はis-activeを付与
            if(scroll + windowHeight > boxHeight) {
                $(this).addClass("is-active");
            }
        });
    });
});
