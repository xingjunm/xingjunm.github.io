# Xingjun Ma — Academic homepage

A static, English-language academic website built with HTML, CSS, and a small optional JavaScript publication search. No Jekyll, Ruby, Markdown compilation, package installation, or build step is required.

## Preview locally

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. You can also open `index.html` directly in a browser.

## Edit content

- `index.html`: biography, research, opportunities, news, books, and service.
- `publications.html`: bibliography. Each paper is an `<li class="publication">` inside a year section. Search and counts update automatically. Add a matching year link when adding a new year.
- `blog.html`: empty page reserved for future posts.
- `alumni.html`: alumni names, types, enrollment years, graduation years, and destinations; sorted by enrollment year (newest first).
- `news.html`: historical updates from 2017–2021.
- `assets/css/academic.css`: shared responsive styling.
- `assets/js/academic.js`: optional publication search. All content remains readable without JavaScript.

Old Talks and Teaching URLs redirect to Blog and Alumni.

Navigation and footer are plain HTML in each page; update them together when adding a page. Directory entry points preserve old extensionless URLs.

## Deployment

The GitHub Actions workflow publishes the static files on pushes to `main` or `master`. In repository Settings → Pages, select **GitHub Actions** as the source. Branch-based GitHub Pages also works with the root directory and `.nojekyll`.

## Original source

`docs/legacy-jekyll.zip` preserves the previous Jekyll templates and Markdown source, including the uncommitted publication updates present before migration. It is excluded from the deployment artifact. Original theme code and other assets also remain in Git history.

## Essential image

`assets/img/xxx.png` is an essential personal image explicitly requested by the site owner. Preserve the original file unchanged and keep it visible on the homepage between the title and biography. Do not remove or replace it during redesigns. Its public URL is https://xingjunm.github.io/assets/img/xxx.png.
