# Unborn Chat

Write complex Minecraft chat components in Typescript using tagged template literals.

SOME STUFF LIKE `link` IS BROKEN RIGHT NOW BUT I NEED TO SLEEP

```ts
import { c } from 'unborn-chat'

const simple = c`Hello, world!`.json()
// { text: 'Hello, world!' }

const formatting = c`This is some important text`.red().underlined().italic().json()

const nested = c`Hello, ${c`world`.bold()}`.red().json()
// { text: 'Hello, ', color: 'red', extra: [ { text: 'world', bold: true } ] }
// &cHello, &lworld
```

### Motivation

This began as an experiment to simplify the creation of writing Minecraft chat components in Javascript. This was inspired by MiniMessage but uses an interesting and under-used language feature for easy parsing.

### Goals

Better support for intertwining Notch formatting codes for even easier composition. This is the main roadblock before being widely used within Lilith itself.

## Usage

The `c`, `t`, and `k` template tags are essentially fancy parsing functions that take in a template string and its subsitution tags and return a component builders.
These component builders can in fact be used in a Java-like fashion to write components, but this is a much clunkier method in my opinion.
In order to use any of these components, you will need to call the `json()` method to get an actual JSON component. This is necessary because of my builder naming conventions, and I think it's worth it.

### `c`

The chat template is the simplest of the three. Strings that are passed as subsitutions are converted to text components, and any other component builders are passed through.

### `t`

The translation template has some strange conventions in order to have fancy syntax:

    - The first part of the string should be the translation key. Whitespace around this is ignored.
    - You may then specify as many subsitutions as you want, using the template string `${'subsitution'}` syntax. These are used in order by the translation, if it requires any, and can be separated by whitespace.
    - Anything outside subsitutions after the first section with the translation key is ignored.

### `k`

The keybind template is similar to the translation template, but it only uses one argument, the first string, which is used as the keybind. You do *not* need to specify `key.`, just `forward` or `attack`.

### `sel`

Selector is used similarly to the keybind template. It doesn't do anything special, it just returns a selector component.

### `score`

Score is not a template tag because I couldn't find a nice syntax for it. However, this is a simple 2-3 argument function for easy initialization.

## Shortcut template tags

There are shortcut templates for all colors and formatting codes. Additionally, there are a few special shortcuts. All of these take one argument as their **first** subsitution.

### `insert`

Takes the text that is inserted in chat when the text is shift clicked.

### `link`

Takes the URL that is opened when the text is clicked.

### `cmd`

Takes the command to be run by the player when the text is clicked.

### `suggest`

Takes the command to be suggested to the player when the text is clicked.

### `page`

Takes the page number to be switched to in a book and quill when the text is clicked.

### `copy`

Takes the text to be copied to the player's clipboard when the text is clicked.

### `twitch`

Takes the Twitch user to be displayed when the text is clicked.

### `file`

Takes the file path to be opened when the text is clicked. This is not possible to send from the server.

### `hover`

Takes the text or component that is shown when the text is hovered over.

### `item`

Takes the JSON NBT data as a string for an item that is shown when the text is hovered over.

### `entity`

Takes the JSON NBT data as a string for an entity that is shown when the text is hovered over.

### `achievement`

Takes the achievement ID to be shown when the text is hovered over.