# Composition

Are you tired of writing:
```ts
let component = {
    text: "Hello, ",
    color: "red",
    italic: true,
    extra: [
        {
            text: "Wor",
            color: "green",
            hoverEvent: {
                action: "show_text",
                value: {
                    text: "Nested component ",
                    color: "red",
                    extra: [
                        {
                            text: "again",
                            bold: true
                        }
                    ]
                }
            },
            extra: [
                {
                    text: "ld",
                    color: "dark_green"
                }
            ]
        },
        {
            text: "!!",
            underlined: true
        }
    ]
}
```

Composition lets you write the following:

```ts
c`Hello, ${
    green`Wor${darkGreen`ld`}`.hover(red`Nested component ${bold`again`}`)
}${underlined`!!`}`.red().italic().json()
```

...which is just a little more ergonomic. To make it even more concise, you can use Notchian color codes in every segment:

```ts
c`&c§oHello, ${
    hover`${c`&cNested component ${c`&lagain`}`} &aWor${c`&2ld`}`
}${underlined`!!`}`.red().italic().json() // Both & and § work
```

You can also use a minimal builder syntax if you want:

```ts
new TextComponentBuilder("This is a blue link!")
    .link('https://example.com')
    .underlined()
    .blue()
    .extra(
        new TextComponentBuilder(" (and this is some other text)")
            .gray()
            .underlined(false)
    )
    .json()
```

There are also some cool shortcut template literals for writing translation components or click/hover events:

```ts
t`translation.key.goes.here ${'and here'} ${'are as many subsitutions'} ${'as you want'}

${'without restrictions on whitespace'}`

link`${'https://any-url-goes.here'} Text content for your link`
// For every one of these shortcuts that needs one tag as a special parameter, the first space
// following it is removed for spacing reasons.
```

And finally, functions for the rest of the weird chat components.

```ts
k('forward') // keybind with no "key." necessary

score('player', 'objective', 'value') // this is up to you to figure out

sel('@a') // selector
```