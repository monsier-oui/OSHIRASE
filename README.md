OSHIRASE
========

アンソロジーや合同誌、オンリーイベントなどの告知サイトのためのHTMLテンプレートです。デモページは[こちら](http://monsier-oui.github.io/OSHIRASE/demo.html)

## 使い方
1. [ここ](https://github.com/monsier-oui/OSHIRASE/archive/master.zip)からダウンロードする
* index.html をテキストエディタで開いて必要な情報を書く  
※ソースはガンガン削ったり足したりしてオッケーです。叩き台として使ってください。
* サーバにアップロードする 

### 用意する画像ファイル
* 表紙
* イメージイラスト(横幅2000px推奨)
* 内容サンプル(小さすぎるとジャギるので600px四方くらい推奨)
* バナー
* フライヤー(あれば)

## 作業上の注意
ファイルの編集には必ずテキストエディタ(メモ帳、ビルダーはNG)を使ってください。普段テキストエディタを使わない方へのオススメは、Windowsなら[サクラエディタ](http://sakura-editor.sourceforge.net/)、Macなら[CotEditor](http://coteditor.github.io/)。

## 動作確認環境
* Firefox 35
* Google Chrome 40
* iPhone Safari

## ワンポイント解説
### 画像ファイルの指定について
アイキャッチ、サンプルはimg要素ではなく、div要素の背景画像として指定します。たとえばimgフォルダのimage.jpgを表示させたいなら、`style="background-image: url('img/image.jpg');"`と書きます。

### フォントについて

一部の要素に[Google Fonts](https://www.google.com/fonts)を利用しています。他のフォントに変えたい場合は、Google FontsからCSSファイルを呼び出すコードと、`style.css`で指定している`font-family`プロパティを修正してください。

### OGPについて

OGPは、ざっくり言えばTwitterやFacebookに投稿したときにサムネイルやページ概要を自動で表示してくれる機能です。詳しくは以下の記事が参考になると思います。

[OGP設定がしてあれば10分で設定完了！ツイートをより魅力的にしてくれる「Twitterカード」の設定方法｜Tips*Blog｜株式会社コプロシステム](http://www.coprosystem.co.jp/tipsblog/2014/05/01.html)

Twitterへの申請は承認までちょっと時間がかかる(1日〜数日?くらい?)こともあるので、申請だけでも先にしておいたほうがよさそうです。

もちろん、いらない!ということであればヘッダの記述ごと削除していただいて構いません。

### ソーシャルメディアアイコンについて

[こちら](http://wolfrosch.com/works/webdesign/socialicons)から以下のアイコンをお借りして同梱しています。

* pixiv
* novelist
* TINAMI
* Twitter
* Facebook
* tumblr
* ピアプロ
* ニコニコ動画
* soundcloud

他のサービスのアイコンが必要であれば追加でダウンロードして、`style.css`の984行目あたりにクラスを追加してください。

```
.icon-XXX { /* XXX=サービスの名前 */
  background-image: url(../img/icons/XXX@2x.png);
}
```

そして、アイコンを追加したいところに下記を追加します。

```
<i class="icon-social icon-XXX"></i>
```

### Enterページ的なやつについて

同人サイトによくあるEnterページ的なやつです。Cookieに訪問フラグを記憶し、2回め以降の訪問では表示しません。この機能が不要であれば、下記を`index.html`から削除してください。

```
<div id="enter" class="center">
	<p></p>
	<p><button type="button" id="button-enter">Enter</button></p>
</div>
```

Enterボタンをバナーなどの画像に変更したい場合は、img要素に`id="button-enter"`を追加してください。

## License
This software is released under the MIT License.

### 同梱物のライセンス

* [Normalize.css](http://necolas.github.io/normalize.css/) - MIT License
* [Media Queries Mixins for Sass](http://paranoida.github.io/sass-mediaqueries/) - MIT License
* [ミニ・ソーシャル・アイコン](http://wolfrosch.com/works/webdesign/socialicons) - Public Domain

## 更新履歴
### 2015/2/24
* Enterページ的なやつを追加実装

### 2014/6/26
* Android端末にも対応した(はず…)

### 2014/6/22
* リリース