document.addEventListener('DOMContentLoaded', function () {
  // 処理①:ScrollObserverクラスオブジェクトに渡す関数を作成
  // 監視状況(bool値)に合わせて処理が走り
  // trueのとき(交差したとき)のみel(entry.target)のアニメーションを実行する
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }      
  } 

// ②ScrollObserverクラスオブジェクトを作成(必要情報 要素名と関数を渡す)
  const so = new ScrollObserver('.animate-title', cb);
  // so.destroy();
});
