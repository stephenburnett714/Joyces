

## Overview

Joyces is a app designed to be a Caribbean restaurant by day and a bar by night. The site will allow users to create a profile and order food for pick up or delivery through the site. The user will also be able to view the menu, check up comming events and make edits to there profile page.

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash]().  Digital assets stored locally and on [Imgur]().

<br>

## MVP
Joyces is a restautant app that will allow the user to search through the website, look at the menu, events and find out more information about the company. You have the option of creating a profile where you can edit your picture and change your address. Once you have a profile you are then allowed to order a delivery or order an in store pick up. The menu will allow you to query by category or show everything on the site. Once you pick a delivery option you will be taken to a cart page where you can order items. After you make an order you can see your previous purchases under previous purchases in your profile page.


### MVP Goals

- Create the database
- Create Routes
- Create functional sign up/sign in page
- Create displaing information on all the routes.
- Full Crud
- Auth

<br>

### MVP Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Using react for the front end.             |
|   React Router   | Navigational Components                    |
| React-Router-Dom | For routing                                |
|      Rails       | Using rails on the backend                 |
|      Axios       | For calling the backend                    |

<br>

### MVP Client (Front End)

Creating the Routes.
Creating all the Components.
Creating all the Functionality.

#### Wireframes

![Erd Diagram](https://res.cloudinary.com/dkwosricc/image/upload/v1583442813/WireFrame_rtkjgi.png)

#### Component Hierarchy

![Erd Diagram](https://res.cloudinary.com/dkwosricc/image/upload/v1583440242/ComponentHeirchy_bsc24j.png)

#### Component Breakdown


|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|Header.       |   n   | - Will house the nav bar and the logo                            |
|Nav           |   n   | - Will house the nav bar and the logo                            |
|Navigation.   |   n   | - Will have the links to navigate through the site.              |
|App.js        |   y   | - Will hold Header, Main and Footer and will have the user state |
|Main          |   y   | - Holds all the states for most of the project and all the routes|
|About         |   n   | - Tell information about the website                             |
|Profile       |   n   | - Shows the user information                                     |
|Home          |   n   | - Landing page for the app                                       |
|Signin/Signout|   n   | - Allows the user to signin/sign out                             |
|Menu          |   n   | - Mapped out data of the menu and prices                         |
|Events        |   n   | - SHows information about upcoming events                        |
|Delivery      |   n   | - Lets the user pick between pick up or delivery                 |
|Cart          |   y   | - Lets the user pick items to put into the cart                  |
|Check-Out     |   n   | - Payment information and Address page for deliver               |
|Order Complete|   n   | - Thank you page that gives the user the total                   |
|Footer        |   n   | - Shows contact information                                      |

<br>

### MVP Server (Back End)

- Created all the needed routes.
- Full CRUD

#### ERD Model

![Erd Diagram](https://res.cloudinary.com/dkwosricc/image/upload/v1583440242/ERD_aeeywf.png)

#### Endpoints

- GET `/users/:id`
	- Show route for a user requested by ID
- POST `/users`
	- Create route for a new user
- PUT `/users/:id/`
  - Update a user by id to create an association to the ballots table
- Delete `/user/:id`
  - Deletes User
- GET `/products`
   - Showing all products
- GET `/products/:id`
   - Displaying items that were picked
- GET `/products/:category`
   - Displaying items for the category
- GET `/user/:id/orders`
   - Shows all the orders 
- GET `/user/:id/orders/:id`
   - Shows the order details for the order
- POST `/line_items`
	- Creates line items
<br>

***




### Timeframes


| Task                 | Priority | Estimated Time | Actual Time |
| -------------------  | :------: | :------------: | :---------: |
| Psuedocoding            |    H     |     2 hrs      |    TBD   |
| Create all models for DB|    H     |     2 hrs      |    TBD   |
| Create CRUD Actions     |    H     |     2 hrs      |    TBD   |
| Create Seed Data        |    H     |     6 hrs      |    TBD   |
| Auth                    |    H     |     10 hrs     |    TBD   |
| Create React Components |    H     |     2 hrs      |    TBD   |
| Link Routes from DB     |    M     |     2 hrs      |    TBD   |
| React Functionality     |    M     |     10 hrs     |    TBD   |
| Styling                 |    M     |     12 hrs     |    TBD   |
| Post MVP                |    L     |     8 hrs      |    TBD   |
| Debugging               |    H     |     5 hrs      |    TBD   |
| TOTAL                   |          |     67 hrs     |    TBD   |

<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                                  |
| ------ | -----------------------------------------     |
|Mar 4th | project proposal worksheet                    |
|Mar 5th | project proposal worksheet / psuedocoding     |
|Mar 6th | Project Pitch / Create DataBase               |
|Mar 7th | OFF                                           |
|Mar 8th | Front-End Components/Routes/Functionality     |
|Mar 9th | User Auth/ Finish Functionality               |
|Mar 10th| Styling                                       |
|Mar 11th| Finish MVP, Begin Post-MVP                    |
|Mar 12th| Post-MVP                                      |
|Mar 13th| Presentations                                 |

<br>

***

## Post-MVP

- Create a function that changes the background depending on the time of day.
- Creating an admin profile that can add products.

<br>

***

## Project Change Log



## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> User Auth and implementation 
