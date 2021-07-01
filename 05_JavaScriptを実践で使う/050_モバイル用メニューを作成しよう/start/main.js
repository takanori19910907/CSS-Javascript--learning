class MobileMenu {
  constructor() {
    // 動きを与える要素(トグルボタン&スライドさせる大コンテナ)をインスタンスの値としてセット
    this.DOM = {};
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.btn = document.querySelector('.mobile-menu__button');
    this.DOM.globalContainer = document.querySelector
      ('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _toggle() {
    this.DOM.globalContainer.classList.toggle('menu-open');
  }

  _getEventType() {
        // スマホブラウザに標準搭載されているontouchstartプロパティを確認しイベントタイプを決定する
    return window.ontouchstart ? 'touchstart' : 'click';
  }
// 可読性を上げるためイベント登録は全てここにまとめる
// _getEventTypeで返ってきた値をイベントとして登録する
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();