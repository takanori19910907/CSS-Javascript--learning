// スクロールアニメーション用の処理をクラスオブジェクトにまとめる
//③constructorでオブジェクトの内容を定義
class ScrollObserver {
  constructor(els, cb, options) {        //引数として渡ってきた必要情報を設定
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    // ②デフォルト設定とユーザー指定の設定をmergeする(後から追加されたユーザー指定のものが優先される)
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once
    // ③監視をスタートさせる
    this._init();
  }
  _init() {
    // 関数callBackを実行
    const callBack = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    }
    // 監視する要素をセットした上で監視オブジェクトを起動
    this.io = new IntersectionObserver(callBack.bind(this), this.options);
    this.els.forEach(
      el => this.io.observe(el));
  }
  destroy() {
    this.io.disconnect();
  }
}

