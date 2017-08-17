# WSEALUG's homepage

## Development
The site uses jekyll, a static site generator. Learn more
about [jekyll here.](http://jekyllrb.com/)

### Prerequisites

1. Ruby 2.3
   - Check your system by typing in `ruby -v`
   - you may have to install [rvm](http://rvm.io) to get it running
2.  bundler `gem install bundler`

### Quick set up

    $ git clone git@github.com:wsealug/wsealug.github.io.git
    $ cd wsealug.github.io
    $ bundle install
    $ bundle exec jekyll serve

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


### WSEALUG Resoutces
- [github](https://github.com/wsealug)
- [meetup](https://www.meetup.com/)
- [twitter](https://twitter.com/WSeaLUG)
- [email](contact@wsealug.net)
- [slack signup](https://wsealug-slack-signup.herokuapp.com/)


### TODO

- Add slack signup link
- Add link to social media and meetup
- Add initial meeting photo to about
- Make the mascot svg
- adjust styling and get opinion on design
- discuss content(adding/removing/copy fixes) with other members
- discuss CI strategy - potential experiments  - try to get it to work with own site
- sneak in a seaslug on the site

### LATER

- Linux Resources page
- Bio for organizers
- Set up a google calender to link to for events (check integration with meetup)
- Automatic deployment after merge to master with Circle CI, Travis?
- Move this repo over to wsealug  organization