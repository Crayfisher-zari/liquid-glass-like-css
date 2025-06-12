# Liquid Glass風CSS

Appleが発表したiOS 26向け新インターフェースLiquid GlassのようなUIを実装できるCSSです。あくまでLiquid Glass「風」の見た目で厳密なLiquid Glassの表現、とくに屈折光を再現しているわけではありません。

その分、CSSのみで作られているので実装が準備なく手軽で、カスタマイズも可能です。またSafariを含むモダンブラウザなら問題なく表示されます。

## 使い方

CDNから利用するのが一番手軽です。

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/liquid-glass-like-css@1.0.0/dist/main.css"
/>

<!-- 矩形 -->
<div class="cfz-liquid-glass-rect">...</div>

<!-- 円形 -->
<div class="cfz-liquid-glass-circle">...</div>
```

矩形用の`cfz-liquid-glass-rect`クラス名もしくは円形用の`cfz-liquid-glass-circle`クラス名を適用したい要素のクラス名として指定すれば使えます。角丸のある四角形も矩形タイプのを指定してください。円形のはまん丸のものに指定できます。

内部的には擬似要素などを用いていますので、この要素に他のスタイルをあてる際は上書きしないよう注意してください。

## 基本的なカスタマイズ

見た目の調整に以下の4つ（円形は3つ）のCSS変数を受け取れます。いずれも`px`といった長さの単位による指定で、`%`などは受け取れません。

- `--radius`（矩形のみ）：角丸の半径。デフォルト値は`16px`
- `--strength`：周辺部での歪みの強さ。デフォルト値は`20px`
- `--expand`：周辺部で歪む領域の広さ。デフォルト値は`8px`
- `--blur`：内部のぼかしの強さ。デフォルト値は`2px`

いずれの値も大きくしすぎると変になります。CSS変数は別のクラス名から渡してあげると便利です。

```html
<div class="cfz-liquid-glass-rect your-class">...</div>
```

```css
.your-class {
  --radius: 40px;
  --expand: 8px;
  --strength: 30px;
  --blur: 0px;
}
```

## その他のカスタマイズ

`cfz-liquid-glass-rect`も`cfz-liquid-glass-circle`もそれ自体が持っているスタイルは`position`プロパティと`border-radius`プロパティのみです。それ以外のスタイルは干渉なく適用できます。

### 大きさの指定

```html
<div class="cfz-liquid-glass-rect your-class">...</div>
```

```css
.your-class {
  width: 320px;
  height: 80px;
}
```

### 背景色の指定

```html
<div class="cfz-liquid-glass-rect your-class">...</div>
```

```css
.your-class {
  background-color: rgb(80 80 80 / 0.1);
}
```

## 作例

[デモ（作成中🚧）](https://crayfisher-zari.github.io/liquid-glass-like-css/)
