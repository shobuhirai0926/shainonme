// ABOUTページのJavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('ABOUT page loaded');
    
    // 流れるテキストのセットアップ
    const flowingTextElement = document.getElementById('flowingText');
    const baseText = "A woman filled with smiles and radiance is truly beautiful.";
    
    // テキストを適切な数だけ繰り返す
    function createFlowingText() {
        const separator = " "; // テキスト間のスペース
        const repeatedText = Array(20).fill(baseText).join(separator + " ");
        flowingTextElement.textContent = repeatedText;
    }
    
    // 初期化
    createFlowingText();
    
    // 画面サイズが変わった時にテキストを再計算
    window.addEventListener('resize', createFlowingText);
    
    // スライドショーのセットアップ
    const slides = [
        document.querySelector('.slide01'),
        document.querySelector('.slide02'),
        document.querySelector('.slide03')
    ];
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // すべてのスライドを非アクティブに
        slides.forEach(slide => slide.classList.remove('active'));
        // 指定されたスライドをアクティブに
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // スマホでスライドの位置を調整
    function adjustSlidePosition() {
        if (window.innerWidth <= 768) {
            const conceptText = document.querySelector('.concept-text');
            const conceptTextRect = conceptText.getBoundingClientRect();
            const conceptTextBottom = conceptTextRect.bottom + window.scrollY;
            
            slides.forEach(slide => {
                slide.style.position = 'absolute';
                slide.style.top = (conceptTextBottom - 10) + 'px'; // concept-textの下-10px（上に配置）
                slide.style.left = '21%';
                slide.style.transform = 'translateX(-50%)';
                slide.style.width = '28%';
            });
        } else {
            // PC版では元の位置に戻す
            slides.forEach(slide => {
                slide.style.position = '';
                slide.style.top = '';
                slide.style.left = '';
                slide.style.transform = '';
                slide.style.width = '';
            });
        }
    }
    
    // 初期表示後にスライドショー開始
    setTimeout(() => {
        adjustSlidePosition(); // スライド位置調整
        showSlide(0); // 最初のスライドを表示
        setInterval(nextSlide, 3000); // 3秒ごとに次のスライドに切り替え
    }, 1800); // 1.8秒後に開始（他の要素のアニメーション後）
    
    // リサイズ時にスライド位置を再調整
    window.addEventListener('resize', function() {
        setTimeout(adjustSlidePosition, 100);
    });
    
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