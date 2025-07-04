// ABOUTページのJavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('ABOUT page loaded');
    
    // レスポンシブ画像の設定
    function setResponsiveImage() {
        const mainImage = document.querySelector('.main-image');
        
        if (window.innerWidth <= 768) {
            mainImage.src = 'img/main_sp.png';
        } else {
            mainImage.src = 'img/main.png';
        }
    }
    
    // 初期設定
    setResponsiveImage();
    
    // ウィンドウリサイズ時の画像切り替え
    window.addEventListener('resize', setResponsiveImage);
    
    // 加治さんの画像スライドショー
    const kajiSlides = [
        document.querySelector('.kaji-slide01'),
        document.querySelector('.kaji-slide02'),
        document.querySelector('.kaji-slide03')
    ];
    
    let currentKajiSlide = 0;
    
    function showKajiSlide(index) {
        // すべてのスライドを非アクティブに
        kajiSlides.forEach(slide => slide.classList.remove('active'));
        // 指定されたスライドをアクティブに
        kajiSlides[index].classList.add('active');
    }
    
    function nextKajiSlide() {
        currentKajiSlide = (currentKajiSlide + 1) % kajiSlides.length;
        showKajiSlide(currentKajiSlide);
    }
    
    // 5秒ごとに次のスライドに切り替え
    setInterval(nextKajiSlide, 5000);
    
    // スクロールアニメーション
    const messageContainer = document.querySelector('.message-container');
    
    function checkScroll() {
        // Message container
        const messageTop = messageContainer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (messageTop < windowHeight * 0.75) {
            messageContainer.classList.add('fade-in');
        }
    }
    
    // スクロールイベントリスナー
    window.addEventListener('scroll', checkScroll);
    
    // 初回チェック（既に表示範囲にある場合）
    checkScroll();
});