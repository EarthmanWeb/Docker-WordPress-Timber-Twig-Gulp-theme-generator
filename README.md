
## Getting Started with this repo

### System Prerequisites:

At the time of creation this works (on MacOS Mojave) with the following installed:

[Docker](https://docs.docker.com/docker-for-mac/install/): version 19.03.13

[Node (installed using Homebrew)](https://nodejs.org/en/download/package-manager/#macos): version 14.13.0

[Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable): version 1.22.5

[Gulp 4](https://gulpjs.com/): Install globally with Yarn using: `yarn global add gulp@4.0.2`


### Git clone:

Clone the repo to your local file system.  You know how to do this.  If you don't, you're in the wrong place.

---
## WordPress Timber Theme Development

### 1. Docker WordPress / DB Environment Setup:

In your terminal, navigate to the project directory, then use the commands..

`docker-compose up`
> _...not detached from terminal output - view output from all containers - use Ctrl-C to stop all containers_

##### OR

`docker-compose up -d && docker attach docker-local-wordpress-dev_wordpress_1`
> _...detaches terminal output from all containers, but then re-attach to the WordPress container to view NGINX server output only_

##### OR

`docker-compose up -d`
> _...detaches from all containers (no terminal output) - use command in #6 below to stop_

---
### 2. Build Theme:
###### ** NOTE: Make sure Docker is running (see #1 above) and wait until all Docker tasks are complete - This could take awhile, go grab a coffee, and then look for the final message:
```
docker-local-wordpress-dev_wordpress-cli_1 exited with code 0
```
###### ...THEN:

> _***If you didn't detach the docker-compose command in Step #1, then you will need to open a new terminal in the project folder to run these commands:_

a. Change to app folder:  `cd app`

b. Install node modules:  `yarn install`

> _...this will also take awhile the first time.  Go get some fresh air...then..._

c. Run build task:  `gulp build`

> _...this builds the theme to the `/build` folder which is also an alias for the WordPress `/wp-content/themes/[your custom theme]` folder - Don't bother changing these files, they WILL get overwritten by step d. below_

> After the build task is done, you can jump down to #3 to just view the site, or if you want to start developing, then also...

d. Run watch task:  `gulp watch`

> _...this will sync your changes to the files in the /app/src folder with browser at localhost:3000 - use Ctrl-C to exit watch task_

---
### 3. Activate WordPress Theme

a. Log into WP at: [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin) :  `admin : p4ssw0rd!`

b. Go to: [http://localhost:8000/wp-admin/themes.php](http://localhost:8000/wp-admin/themes.php)

c. Click 'activate' on the custom theme

---
### 4. Links to local resources:

##### WordPress frontend:
- [http://localhost:8000](http://localhost:8000)

##### WordPress Admin
- [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin)  ::  admin : p4ssw0rd!

##### Browsersync admin:
- [http://localhost:3001](http://localhost:3001)

##### WordPress with browsersync:
- [http://localhost:3000](http://localhost:3000)

---
### 5. Build production files

> _***If you didn't detach the docker-compose command in Step #1, then you will need to open a new terminal in the project folder to run these commands:_

a. Change to app folder:  `cd app`

b. Create distribution build:  `gulp dist`

c. Build files will be located in `/dist` folder

---
### 6. Stop Docker Containers:

In the project directory: `docker-compose stop`

---
### 7. Tear down and clean up:

__WARNING:  _THIS WILL DELETE ALL PERSISTENT DATA, CONTAINERS, IMAGES, NETWORKS, AND BUILD FILES___

In the project directory:
`docker-compose down && docker volume prune && docker image prune -a && docker network prune && rm -R ./wp-content && rm -R ./app/node_modules && rm -R ./build && rm -R ./dist`
