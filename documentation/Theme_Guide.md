# Table of Contents
- [Table of Contents](#table-of-contents)
    - [Features:](#features)
        - [Html Blocks](#html-blocks)
            - [Html elements](#html-elements)
    - [Style Settings Options:](#style-settings-options)

## Features:

1. **Variable Headings:** Heading sizes will depend on screen size, meaning they adapt to mobile phones, tablets, as well as different computer screen sizes! You can change the sizing in the Style Settings Options!
[image]

2. **Custom Icons:** Sanctum uses icons from [IBM's Design Language icon library](https://www.ibm.com/design/language/iconography/ui-icons/library/)
3. **Multi-Color Highlights:** for when you need more than a single highlight color! To use them, simply use the following syntax: 

```
==highlight== - for a yellow highlight
*==highlight==* - for a blue highlight
**==highlight==** - for a pink highlight
```
<p align=center><img src="https://user-images.githubusercontent.com/91087143/139734042-ea7ed245-9cee-4b18-8466-4a1830bf3f69.gif" alt="Multi-Color Highlights" width=30%></p>


These colors are all customizable through the Style Settings plugin, as well as the highlighted text color, in order to make sure contrast is mantained (or for more funky combinations, it's up to you)

1. **Custom Checkboxes:** Besides the regular checkbox, there are 7 custom checkboxes you may use on your tasks/lists. Do note that these do not work on tables, since tables only accept the regular ones (which you can input via markdown syntax, or even html syntax. Eg: `<input type="checkbox">`)

```
- [i] Information
- [-] Cancelled
- [<] Scheduled
- [>] Rescheduled/Forwarded
- [?] Question
- [!] Important
- [l] Location
- [x] Task
- [ ] Task
```

<p align=center><img src="https://user-images.githubusercontent.com/91087143/139735135-9bb582f5-d657-4017-b162-d11e6ee674b8.png" alt="Custom Checkboxes" width=35%></p>


1. **Custom Codeblock Language - `pure-text`:** for when you have a passage you'd like to constantly copy, for some reason. This makes the codeblock appear like normal text, except it has a copy button to the right.

```
```pure-text
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum id dignissim massa, at tempor lacus.
Maecenas vel hendrerit orci, sit amet sagittis purus.```
```
<p align=center><img src="https://user-images.githubusercontent.com/91087143/139746450-5b038735-8dff-4eef-8ddd-d8626bc46ef9.gif" alt="Custom Codeblock" width=75%</p>


6. **Custom Link Icons:** In Preview Mode after writing a link, there’s a change an icon will show on the left of it. If you’d like to add links to the theme, make sure to submit a Request on the Issue section.

<p align=center><img src="" alt="" width= </p>


7. **Image Desaturation:** Images are a bit desaturated to go better with the theme and create a sense of cohesion, even if they have massive differences with other images. They will show its full colors once hovered.

8. **WYSIWYG `<hr>` element :** when writing "---" in Edit Mode (or "----" if you have Smart Typography), an hr element will appear. There is a Style Settings option to disable it, as well as center the default "---" dashes. When following headings, hr element will have smaller top margins, making them closer to the headings, and not creating massive blank spaces in the note.

<p align=center><img src="" alt="" width= </p>

<p align=center><img src="" alt="" width= </p>



9. **Active Line Highlight:** to always know in which line you're writing (as seen above).

<p align=center></p>

10. **Folded  Heading/List Indicator:** works as a reminder for when headings and/or lists are collapsed. Adding or subtracting `left-margin` from [this snippet]("fold_indicator.css") will help you adjust this feature to your font choice.

<p align=center></p>

11. **Clean Embeds:** by Moonbase, makes embeds looks seemless in Preview Mode.

<p align=center></p>


### Html Blocks
HTML Blocks are defined by a start condition (for example, `<code>`) and an end condition (`</code>`). Any text you want to be inside that block, you’ll have to include it between the conditions. Always “close” a html block, for they “continue until they are closed by their appropriate end condition, or the last line of the document or other container block” ([source](https://spec.commonmark.org/0.30/#html-blocks)). Some html elements require a few more information in order for them to work, but do not worry, as they’ll be explained below!

#### Html elements 
[source]([mdn.dev](https://developer.mozilla.org/en-US/docs/Web/HTML/Element))
<br>
**`<progress>`** - the <u>progress indicator element</u> displays the progress of a task, displayed as a progress bar. This progress needs to be input manually in obsidian (unless it's implemented in a plugin).
To input a `<progress>` element, you need to input a "value", as well as a "max" value. E.g: `<progress value="6" max="10"></progress>`. That will display a progress bar with 60% progress, with the accent color.

[image]

If you wish to have a more intuitively colored progress bar, you can use a value that's a multiple of 5, and a max of 100. That will result in the following formatting:

[image]

(Note that the progress bars are already formatted so it's easy to add a label in the line below, like the example above)



`<blockquote>` - the <u> block quotation element </u> is used to indicate that the enclosed text is part of a quotation. A text representation of the source and/or author may be given using the `<cite>` element. Blockquotes can also be written using Markdown syntax, simply including a `>` at the beginning of the line.

[image]

`<blockquote class="paraphrase">` - the <u>paraphrase</u> custom class is part of the blockquote element, and is used to enclose text that, while not a quotation,
is also not an original idea, and so should be differentiated in the text to avoid confusion and misattribution of credit/authorship. To put it simply, if you'd like to tell when you're paraphasing, you can use this class.

[image]

**`<cite>`** - the <u>citation element</u> is used for referencing a cited work. This will align the text to the right, and can (and should) be written inside a blockquote. This means you can also envelop it inside a paraphrase element in order to remind yourself of the source material.

[image]

**`<aside>`** - the <u>aside element</u> is used for simple call-outs or for presenting information that isn't directly related to the note's content. This is formatted the same way as a `<s class="aside-in">` element (more on that later), but doesn't allow for Markdown formatting. Still, it wouldn't make sense to have more advanced sidenote options, without also having the default html element.

[image]

**`<s class="aside-*">`** - the <u>sidenote element</u> is used to display references or complementary information that doesn't find its place in the main text. The end block for every sidenote type is the same: `</s>` There are 4 types of sidenote classes:
 - `<s class="aside-right">`: this places text in the side of the right margin of the note;

[image]

 - `<s class="aside-left">`: this places text in the side of the right margin of the note;
[image]

[image]

 - `<s class="aside-in">`: this places text inside the main text, but in the same way as the default `<aside>` element, is formatted as a callout;

[image]

 - `<s class="aside-hide">`: this places an icon in the side of the right margin, that will reveal its content once hovered. The revealed content will display the same way as an `<s class="aside-right">`element.

[image]

**`<samp>`** - the <u>sample output element</u> is used to enclose text that simulates an output from a computer program. It's rendered using the monospaced font set for the theme.

[image]

**`<kbd>` - the <u>keyboard input element</u> is used to represent user input from a keyboard. It's basically a good way to highlight hotkeys!

[image]

**`<small>` - the <u>side comment element</u> is used, like the name implies, to write side comments and small print. It renders a smaller font-size than the default text.

[image]

## Style Settings Options:

- Colors
    - Dark Mode Contrast Code Background
    - Accent Colors
        - Light Mode Accent Color
        - Dark Mode Accent Color
        - Text accent hover color
    - Hightlight Colors
        - Highlight 1
        - Hightlight 1 Text
        - Highlight 2
        - Highlight 2 Text
        - Highlight 3
        - Highlight 3 Text
    - Graph Colors
        - Active Note Node Color
        - Tag Node Color
        - Attachment Node Color
- Typography
    - Preview Mode Line Width
    - Fonts
        - Preview Mode Font
        - Edit Mode Font
        - UI Font
        - Monospace Font
    - Headings
        - Heading Font
        - Heading 1 Size
        - Heading 2 Size
        - Heading 3 Size
        - Heading 4 Size
        - Heading 5 Size
        - Heading 6 Size
- Elements
    - Hide Frontmatter
    - Status Bar on Top
    - Tab Header Icon Side Padding
    - File Explorer
        - Show Vault Name
        - Left Nav Arrows
        - File Explorer Relationship Lines
        - No File Icons
        - No Folder Icons
        - Show Full Titles
    - Modals
        - Settings Modal Width
        - Community Themes Modal Width
        - Community Plugins Modal Width
    - Scrollbars
        - No Scrollbar in Global Search
        - No Scrollbar in Notes
        - No Scrollbar in File Explorer
        - No Scrollbar in Modal
- Features
    -  `<hr>` (“---”) Options
    - Edit Mode Tasks
    - Footnote Title
    - Footnotes Heading
    - Wrap Note Titles
    - Wrap Kanban Lanes
    - Tables
        - Table Max Width
        - Center Tables
        - Alternate Dataview Tables
    - Sidenotes
        - Sidenote Options
        - Inner Sidenote Options
    - Relationship Lines
        - Relationship Lines
        - Alternating Relationship Lines Colors
- Advanced Options
    - No Background Blur
    - Disable Animations
    - Default Icons






















