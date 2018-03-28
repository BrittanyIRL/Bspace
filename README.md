# Bspace
I wanted a space to tinker with code, Jekyll offers a fast roll out with Ruby and plays really nicely with githubpages so I decided to use that. I also wanted it to be a space where I could potentially blog (though I do so rarely) but didn't want to use wordpress, also a good reason to use Jekyll. Fun way to learn something new!

Also in use here: fullpage and materialize

### Structure
Site is comprised of 4 sections
- Landing : this is meant as just a splash page, nothing links back to it intentionally. There's ways to get to all the other parts of the site in the navigation, this is just supposed to be a fun place to goof off with visuals
- Projects : aka portfolio. Currently just one page, but has potential for subpages
- Photograph : This is set up to have different sections, but right now it's just one page. Using fullpage for some slider action
- Blog : Uses the CMS portion of Jekyll, so posts are all in markdown.

This structure allows me to separate styles for the site, since this is mostly a playground and also a functional portfolio, it's important that things not get tangled up. For the most part, this holds true currently though it could use some cleaning up after > 1 year of off and on tinkering!

### Todo / Work in Progress
- Optimization of images
- Clean up of base CSS
- Subpages for portfolio and photography

### Local Dev
to run local server `bundle exec jekyll serve`
- if config gets updated, need to stop bundle and restart to capture those changes
- the baseurl and url are both intentionally blank to work with github pages and a masked domain

### Update site
- brittanyfeenstra.com updates with the ghpages branch, just `git push` to that and it'll deploy or notify of failure.
