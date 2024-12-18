# Dockerfile (Rails)
FROM ruby:3.3.6 

# Install dependencies
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs postgresql-client yarn

# Set up the working directory
WORKDIR /app

# Install gems
COPY Gemfile Gemfile.lock /app/
RUN bundle install

# Copy the app code
COPY . /app

# Expose port for Rails
EXPOSE 3000

# Start the Rails server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]