OSHIRASE
========

アンソロジーや合同誌、オンリーイベントなどの告知サイトのためのHTMLテンプレートです。

##使い方
1. [ここ](https://github.com/monsier-oui/OSHIRASE/archive/master.zip)からアーカイブファイルをダウンロードして解凍する
* index.html をテキストエディタで開いて必要な情報を書く
	* パーツはガンガン削ったり足したりしてオッケーです。叩き台として使ってください。
* サーバにアップロードする 

###用意する画像ファイル
* 表紙
* イメージイラスト(横幅2000px推奨)
* 内容サンプル(小さすぎるとジャギるので600px四方くらい推奨)
* バナー
* フライヤー(あれば)

##作業上の注意
ファイルの編集には必ずテキストエディタ(メモ帳、ビルダーはダメ)を使ってください。普段テキストエディタを使わない方へのオススメは、Windowsなら[サクラエディタ](http://sakura-editor.sourceforge.net/)、Macなら[CotEditor](http://coteditor.github.io/)。

##動作確認環境
* Google Chrome 35
* iPhone Safari

##ワンポイント解説
###画像ファイルの指定について
アイキャッチ、サンプルはimg要素ではなく、div要素の背景画像として指定します。たとえばimgフォルダのimage.jpgを表示させたいなら、`style="background-image: url('img/image.jpg');"`と書きます。

###フォントについて

一部の要素に[Google Fonts](https://www.google.com/fonts)を利用しています。他のフォントに変えたい場合は、Google FontsからCSSファイルを呼び出すコードと、`style.css`の`font-family`プロパティを修正してください。

###OGPについて


##License
MIT License