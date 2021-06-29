# Intro to Rails

### Objectives

* Create a new Rails application
* Describe similarities between Sinatra routing & Rails routing
* Generate a controller
* Create actions/methods for a RESTful controller
* Generate a model
* Create routes

Here is the video from the beginning of lecture: [Sinatra configuration](https://www.youtube.com/watch?v=9ML8PrP3A8E).

## Intro: What is Rails

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions.

Rails heavily emphasizes **_"Convention over Configuration."_** This means that a programmer only needs to specify and code out the non-standard parts of a program. Even though Rails comes with its own set of tools and settings, you're certainly not limited to library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

![](https://s3-us-west-2.amazonaws.com/student-resources/uploads/lecture/Screen+Shot+2017-06-09+at+10.04.20+AM.png)

#### A Look Back

As we look back at the history of Rails, let's review some of the more significant releases over the years.

* Rails 1.0 (Dec 2005) - Mostly polishing up and closing pending tickets from the first release along with the inclusion of Scriptaculous 1.5 and Prototype 1.4.
* Rails 1.2 (Jan 2007) - REST and generation HTTP appreciation
* Rails 2.0 (Dec 2007) - Better routing resources, multi-view, HTTP basic authentication, cookie store sessions
* Rails 2.0 (Nov 2008) - i18n, thread safe, connection pool, Ruby 1.9, JRuby
* Rails 2.3 (Mar 2009) - Templates, Engines, Rack
* Rails 3.0 (Aug 2010) - New query engine, new router for controller, mailer controller, CRSF protection
* Rails 3.1 (Aug 2011) - jQuery, SASS, CoffeeScript, Sprockets with Assets Pipeline
* Rails 3.2 (Jan 2012) - Journey routing engine, faster development mode, automatic query explains, tagged loggin for multi-user application
* Rails 4.0 (June 2013) - Rails 4.2: Active Job, Asynchronous Mails, Adequate Record, Web Console, Foreign Keys.
* Rails 5.0 (June 2016) - Notable additions in Rails 5.0 include an option for an API-only application suitable for use as a backend to JavaScript or mobile applications. Also Action Cable for live features such as chat and notifications.

Over the years, Rails has indeed made it easier for beginners to dive into web development and build large complex applications. Some popular websites built on Rails include Twitter (at one point), GitHub and, of course, 37signals' very own Basecamp. Although it has often been criticized for performance and bloat, Rails continues its iterations with an ever-growing developer community and a vibrant ecosystem.

[Built With Rails](https://skillcrush.com/2015/02/02/37-rails-sites/)

#### Let's install rails, if you haven't already :)

```bash
gem install rails
```

Versions of Rails change quite rapidly, and if you leave off the "-v", you'll just get the latest version. Be specific if you want a specific version.

```bash
gem install rails -v=INSERT_RAILS_VERSION_HERE
```

## Demo: _dinosaurs!_


On the command of the parent directory where you want your app to go:

```ruby
rails new dinosaurs
cd dinosaurs
rails generate resource dinosaur name number_of_teeth:integer etc. (we can add --no-test-framework)
```

Let's look at the contents of this folder (using `ls`), and take a look at the files and folders that were magically created by the `rails new` command:

```
├── app
├── bin
├── config
├── db
├── lib
├── log
├── public
├── test
├── tmp
└── vendor
```

Some details about this structure:

* 90% of the web app code will be inside the folder `app`, including all of our model, view, and controller logic.
* `config` contains all the credentials for the DB and other 3rd party services, all the deployment settings, and the specs about how to serve this app over HTTP.
* `db` will contain all of your migrations

We will describe the other folders in later lessons, and for the next couple of weeks, you will primarily write code inside the folders described above.

```ruby
rails db:migrate # <-- this might be `rake db:migrate` if you're using <= rails v. 4.2
rails server
```

Now we'll head over to `localhost:3000/dinosaurs`. All of our REST actions are live!
We didn't use a resource generator in lecture, but it provides us with a model, migration, controller, and routes. It does not populate the controller actions for us, though. We also get some auto-generated .coffee and .scss files as well, which we likely won't use, at least for now. So we can delete those.

Rails follow a pattern called **"convention over configuration"** - this means that by default, a Rails app expects you to follow specific patterns and folder structures. This means you need to learn these conventions, but also means that once you learn them, you save time by not having to setup a lot of the configuration you'd otherwise need to set up manually.

This structure may look a bit complex – there a lot of files, specific naming conventions, and some nested files and folders. We generally don't create this structure manually, but instead use the Rails command line tool, which initializes the app for us:

> **Note:** By default, if you _do not_ add any option for the database, Rails will create the app with SQLite3. While you are working in a local development environment (localhost), you won't notice much of a difference between SQLite3 and PostgreSQL.

> Once your app is in production on a remote server, you will _not_ use SQLite, and they will often use PostgreSQL. A best practice in web development is to keep development and production environments as similar as possible, so we recommend using PostgreSQL from the start.

#### Rails Routing vs. Sinatra Routing

As you know, a "route" is a combination of **the path** that was requested and **the HTTP verb** that was used to request that path.

```
                                          -----> Model <----> DB
                                         |         |
            response        request      |         |
   Browser <-------- router -------> controller <--
                             GET         ^
                             PUT         |
                             POST         -----> view <----> html/images/css/js
                             DELETE
```

When we've used Sinatra, we were managing the routes and the code executed for a specific route in the same place:

```ruby
	get "/dinosaurs" do
		# Here is the code that will be executed when the client requests /dinosaurs
	end
```

This is handy for us as developers, because it allows us to keep everything in the same place - routing and controller logic - but if the app grows it can get unreadable. Imagine, for example, an app that has 20 or 30 different routes... your main routes file could contain a lot of complex code.

Rails has a "routing engine" that separates the routing logic from the controller logic (what we want to happen when routes are requested). The configuration for this routing engine is in the file `config/routes.rb`.

```ruby
Rails.application.routes.draw do

end
```

Everything between the `do` and the `end` will be code related to handling routes for the current application.


#### Generate a migration

In Sinatra you had to create your migrations by hand. As with most things in Rails, theres an generator for that.

```ruby
rails g migration AddAgeToDinosaurs age:integer
```

By following certain conventions like the one above, rails will generate a migration that specifically adds the age column to your existing dinosaurs column.

```ruby
class AddAgeToDinosaur < ActiveRecord::Migration[5.1]
  def change
    add_column :dinosaurs, :age, :integer
  end
end
```

#### Conclusion

Rome wasn't built in a day and neither can someone learn Rails in a day. Keep coding and it will all come together.

[Rails Guides](http://guides.rubyonrails.org/index.html)

_Content for this readme taken from work originally done by Johann Kerr_