# Font variant and Font Stretch
## Font Variant
- Faz variações na apresentação da fonte

~~~css
p {
	font-variant: small-caps;
}
~~~
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

## Font Stretch
- Alargamento ou encolhimento da fonte
- Aceita palavras-chaves como: expanded, condensed, normal
- Aceita porcentagens de 50% a 200%
- Essa propriedade não vai funcionar em todas as fontes

~~~css
p {
	font-variant: expanded;
}
~~~
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

# Letter e word-spacing

## Latter spacing
- Define o espaçamento entre os caracteres

~~~css
p {
	letter-spacing: 4px;
}
~~~
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

## Word spacing 
~~~css
p {
	word-spacing: 1em;
}
~~~
https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

# Line-height e text-transform

## Line height

- Define os espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Valores comuns: 1.5 ou 2

~~~css
p {
	line-height: 1.5;
}
~~~

## Text transform
- Transformação do texto
- Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana

~~~css
p {
	text-transform: uppercase;
}
~~~

# Text-decoration

- Aparência decorativa de um texto
- line: underline | overline | line-through
    - podemos aplicar mais de 1 valor
- style: wavy | dotted | double | dashed | solid
- color: `<color>` values

~~~css
h1 {
	text-decoration: underline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}
~~~
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

# Text align
- Alinhamento de um texto
- Valores: start | end | left | right | center | justify | match-parent.

# Text Shadow
- Sombra aplicada a um texto.
- Permite múltiplos valores.

~~~css
p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
~~~