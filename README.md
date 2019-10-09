# Seattle-Bucket-List

# Seattle Bucket List  
This bucket list Express app was designed with a specific place and user in mind: Seattle and the The Peters'(Lucas and Bonnie). It allows us and other guests to add details about places and activities we can checkout in the Seattle area.

![screenshot of site](https://i.imgur.com/EXdFmUK.png)

## Feature List  
**Bronze Level Feature Set** 
* App includes Express, Mongoose, and Handlebars(hbs) dependencies
* App has full CRUD capability:
 * Users can create new activities
 * Users can read/view a full list of activities as well as individual activities
 * Users can update/edit existing activities
 * Users can delete/remove existing activities
* Routes are all accessible from the browser through the use of buttons and links

**Silver Level Feature Set** // [Index Wire Frame](https://www.figma.com/file/9lxpeeqVd26KzEDEFhrpkF/Silver-Index) // [Edit/Create Wire Frame](https://www.figma.com/file/0yrIIevCeJMfr0K6iL209M/Silver-Create-Edit)  
* App has CSS stylization and optimization for mobile
* There is an about page with fun details about the Peters'
* Users are can navigate and be redirected smoothly throughout the site
 * User is able to click header to be returned home
 * "Add New", "Home", and "About Us" are all links in a navigation bar
 * User can cancel, save, or delete from an edit page
 * User is returned to the preview page for the activity they were editing after submitting one of the above actions
 * User can access the activity's website

**Gold Level Feature Set** // [Index Wire Frame](https://www.figma.com/file/sCXrDqKeVIcjXqZ7qpCfCY/Gold-Index) // [Edit/Create Wire Frame](https://www.figma.com/file/zkjPnIHRQkNVIfPM3R77Dv/Gold-Create%2FEdit)
* Create and Edit forms ensure that input matches desired model values
 * **name** = String / Input type = text
 * **address** = String / Input type = text
 * **type** = String / Select Options = Sightseeing, Arts & Culture, Outdoor Recreation, Food, Drinks, Day Trips
 * **cost** = Number / Input type = number with min of 0
 * **days** = String / Select Options = Daily, Weekdays, Weekends, Other
 * **open** = String / Select Options = 6:00AM-7:00PM, Sunrise
 * **close** = String / Select Options = 11:00AM-12:00AM, Sunset,
 * **duration** = String / Select Options = 1 Hour, 2 Hours, Half Day, Full Day
 * **url** = url / Input type = url
 * **img** = url / Input type = url
 * **user** = String / Select Options = Bonnie, Lucas, Guest
 * **done** = Boolean / Select Options = true, false
* Each activity displays with an image
* There are helpful icons on the index page to indicate type, cost, and duration at a glance
* App is responsive in both desktop and mobile
* Users are prompted to ensure they want to delete or discard edits (to be developed)
* There is a Search / Filter function (to be developed)
* There is a second model for user which allows user sign in (to be developed)
* When guests login, they are only able to add or edit but not remove (to be developed)
* Improve cost input to reflect currancy (to be developed)

## Technologies Used
* HTML
* CSS
* JavaScript
* Express
* MongoDB
* Mongoose
* Handlebars
* [Handlebar Comparison Helper](https://gist.github.com/TastyToast/5209670)

## Installation Instructions
This web app can be accessed in any browser at this link: [https://seattle-bucket-list.herokuapp.com](https://seattle-bucket-list.herokuapp.com)  
You may also choose to copy this code and make edits of your own. To do so, follow the steps in [this article](https://help.github.com/en/articles/fork-a-repo)  
Additionally, you will need to install all this app's dependencies using npm. To install npm, itself, follow the instructions [here](https://www.npmjs.com/get-npm). Once you have done that, fun the following npm installs:
* npm install express
* npm install mongoose
* npm install hbs
* npm install body-parser
* npm install method-override
Once these are each successfully installed, you may then access the app through your localhost:8080. To change the local host port, adjust index.js of your repo