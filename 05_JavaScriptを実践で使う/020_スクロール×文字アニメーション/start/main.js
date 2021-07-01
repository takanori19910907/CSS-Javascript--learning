document.addEventListener('DOMContentLoaded', function () {

  const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 文字が画面に入った時にTextAnimationを作成(文字分割を実行)
                const ta = new TextAnimation(entry.target);
            ta.animate();
            // アニメーション実行後、監視を終了
            observer.unobserve(entry.target);
            }
        });
    }
  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach(
    el => io.observe(el));
});

