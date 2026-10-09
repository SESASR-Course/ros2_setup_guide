cd docs
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload --host 0.0.0.0