# [Made Mistakes](https://mademistakes.com) Source Code

This is the source code of Made Mistakes, a personal blog and portfolio built 
with [Gatsby](https://www.gatsbyjs.org/), [Travis CI](https://travis-ci.org/),  and [Netlify](https://www.netlify.com/).

## Getting started

1. **Install dependencies**
   
   ```shell
   yarn install
   ```

2. **Add `.env` file to the root with your GitHub API token.**

   ```
   GITHUB_API_TOKEN=yourPersonalGitHubApiToken
   ```

   **Note:** do not commit this file. Builds will fail without it as it is needed for the GitHub repo listing on `/pages/works.js`.

3. **Start developing.**
   
   ```shell
   gatsby develop
   ```

   **Note:** When developing on Windows prepend all Gatsby commands with `dotenv` to load environment variables. e.g. `dotenv gatsby build`

4. **Default structure:**

   ```bash
   .
   ├── config                      
   |   └──site.js             # => site wide config
   ├── src
   |   ├── comments           # => comments content
   |   ├── components
   |   ├── data
   |   |   └── taxonomy.yml   # => taxonomy content
   |   ├── images
   |   ├── pages
   |   ├── posts
   |   ├── styles
   |   ├── templates
   |   └── html.js
   ├── .travis.yml
   ├── gatsby-browser.js
   ├── gatsby-config.js
   ├── gatsby.node.js
   └── staticman.yml
   ```

### TODO Posts and Pages

Commenting is disabled by default. To enable add `comments: true` to the YAML 
Front Matter. To lock a comment thread add `comments_locked: true`.

### TODO Taxonomy Data File

### Markdown content

HTML recipes and such for styling custom bits of content used in Markdown files.

#### Figures

TODO: Migrate into a component. For now HTML in Markdown will suffice.

**Example:**

```html
<figure>
  <img src="../../images/image.jpg" alt="">
  <figcaption><p>Figure caption goes here.</p></figcaption>
</figure>
```

**Two column rows:**

```html
<figure class="two-column">
  <img src="../../images/image-1.jpg" alt="">
  <img src="../../images/image-2.jpg" alt="">
  <figcaption><p>Figure caption goes here.</p></figcaption>
</figure>
```

**Three column rows:**

```html
<figure class="three-column">
  <img src="../../images/image-1.jpg" alt="">
  <img src="../../images/image-2.jpg" alt="">
  <img src="../../images/image-3.jpg" alt="">
  <figcaption><p>Figure caption goes here.</p></figcaption>
</figure>
```

#### Notices

Call-out text via [gatsby-remark-custom-blocks](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-custom-blocks) plugin with Markdown.

**Example:**

```markdown
[[notice | iOS screen recording]]
| Apple has built this feature directly into iOS allowing you to [capture the screen](https://support.apple.com/en-us/HT207935) directly on device.
```

#### Thumbnail gallery

TODO: Migrate into a component. For now HTML in Markdown will suffice.

**Example:**

```html
<ul class="gallery-thumbnails">
  <li>
    <a href="../../images/thumbnail-1.jpg">
      <img src="../../images/image-1.jpg" alt="">
    </a>
  </li>
  ...
</ul>
```

#### Browser frame

Wrap an image with the `.browser-frame` class to give it browser chrome styling.

**Example:**

```html
<div class="browser-frame">
  <img src="../../images/webpage.jpg" alt="">
</div>
```

#### Button links

Style links to look like a button.

**Example:**

```html
<p>
  <a href="#" class="btn">Link label</a>
</p>
```

---

## License

The MIT License (MIT)

Copyright (c) 2004-2019 Michael Rose

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Made Mistakes incorporates icons from [The Noun Project](https://thenounproject.com/).
Icons are distributed under Creative Commons Attribution 3.0 United States (CC BY 3.0 US).
Home by Mahmure Alp from the Noun Project

Made Mistakes incorporates photographs from [Unsplash](https://unsplash.com).
