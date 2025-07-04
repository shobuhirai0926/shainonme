// ABOUTページのJavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('ABOUT page loaded');
    
    // レスポンシブ画像の設定
    function setResponsiveImage() {
        const heroImage = document.querySelector('.hero-image');
        
        if (window.innerWidth <= 768) {
            heroImage.src = 'https://d2w53g1q050m78.cloudfront.net/shainonmecom/uploads/about/img/main_sp.png?1751630385356';
        } else {
            heroImage.src = 'https://d2w53g1q050m78.cloudfront.net/shainonmecom/uploads/about/img/main.png?1751630385355';
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
        kajiSlides.forEach(slide => {
            if (slide) slide.classList.remove('active');
        });
        // 指定されたスライドをアクティブに
        if (kajiSlides[index]) {
            kajiSlides[index].classList.add('active');
        }
    }
    
    function nextKajiSlide() {
        currentKajiSlide = (currentKajiSlide + 1) % kajiSlides.length;
        showKajiSlide(currentKajiSlide);
    }
    
    // 5秒ごとに次のスライドに切り替え
    setInterval(nextKajiSlide, 5000);
    
    // スクロールアニメーション
    const contentSections = document.querySelectorAll('.content-section');
    
    function checkScroll() {
        contentSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    }
    
    // スクロールイベントリスナー
    window.addEventListener('scroll', checkScroll);
    
    // 初回チェック（既に表示範囲にある場合）
    checkScroll();
});