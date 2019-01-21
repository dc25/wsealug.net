# WSEALUG's homepage

## Development
The site uses jekyll, a static site generator. Learn more
about [jekyll here.](http://jekyllrb.com/)

### Prerequisites

1. Ruby >= 2.4.4
   - Check your system by typing in `ruby -v`
   - you may have to install [rvm](http://rvm.io) to get it running
2.  bundler `gem install bundler`

### Quick set up

#### Without a container

    $ git clone git@github.com:wsealug/wsealug.github.io.git
    $ cd wsealug.github.io
    $ bundle install
    $ bundle exec jekyll serve

Now browse to http://localhost:4000

#### Using Docker

    $ git clone git@github.com:wsealug/wsealug.github.io.git
    $ cd wsealug.github.io
    $ docker build -t wsealug-website .
    $ docker run --rm -it -p 127.0.0.1:4000:4000 --mount type=bind,src=$(pwd),dst=/usr/src/app wsealug-website

Now browse to http://localhost:4000

### Contributing

1. Fork the repo
2. Make your changes
3. Make a pull request


### Adding a blog entry
- create a new file in the `_posts`  directory using the format YYYY-MM-DD-title.md (see other files in directory for examples of the header)
- Write the entry in [markdown](https://daringfireball.net/projects/markdown/syntax)
- If you're developing using `jekyll serve`, your post should be available locally immediately. If using gh-pages, it should be live once the changes are pushed to gh-pages branch on github


### Development Resources

- [jekyll](http://jekyllrb.com/)
- [markdown](https://daringfireball.net/projects/markdown/syntax)
- [liquid templating](https://shopify.github.io/liquid/)  
- [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)


### WSEALUG Resources
- [github](https://github.com/wsealug)
- [meetup](https://www.meetup.com/WSeaLUG/)
- [twitter](https://twitter.com/WSeaLUG)
- [email](contact@wsealug.net)
- [slack signup](https://wsealug-slack-signup.herokuapp.com/)


### TODO
- [Move social media links under logo](https://gitlab.com/wsealug/wsealug.net/issues/3)
- Finish Pages
  - News
  - Events
  - Past Presentations
  - About
- Make the mascot svg
- adjust styling and get opinion on design
- discuss content (adding/removing/copy fixes) with other members
- sneak in a seaslug on the site

### LATER

- Linux Resources page
- Bio for organizers
