BUSINESS TRAVEL  AGENCY
Date: 20.10.2020
Author: tanja120a@gmail.com

### Technics:
React.js
JavaScript
HTML
CSS
JSX
sessionStorage
localStorage

### About:
Application that allow users to see information about accommodation, transport, local culture, food etc. in some city, leave comment and see other users comments
App. starts with signIn page. For the first time , you have to registered on sigUp page. If you don't want to register, you can use default user or admin credentials 
    (USER: email: user@user.com, password: UserUser1, ADMIN: email: admin@admin.com, password: AdminAdmin1 )

### APP PAGES
1.  SignUp Page
    Validation on signUp page will not allow you to submit if information are not valid...
    Valid information
        * email -> something@something.xy
        * password -> Number, letter, Capital letter >=8
    Submitting validate form will redirect you to SignIn page

2. SignIn Page
    Information have to bi valid to submit
    Submitting validate signIn form will redirect you to App

    Notice: if you are not logIn you are not allow to go to App pages, and if you are logIn you can not visit SignIn and SignUp pages.
    
3. Home Page (user & admin)
    Select country, and than city from drop-down menu. Redirect to desire city page with information.

4. Life...(user and admin)
    Press button "SHOW INFORMATION ABOUT CITY" => 
    Menu:
    - Restaurants - information (name, contact, info, description, image, rating)   
                  - see comments (user comments from API and App)
                  - leave a comment (user to App) 
                  - delete a comment (admin - user comment from App)
    - Hotels - information (name, contact, info, description, image, rating)   
                 - see comments (user comments from API and App)
                  - leave a comment (user to App) 
                  - delete a comment (admin - user comment from App)
    - Attractions - information (name, contact, info, description, image, rating)   
                  - see comments (user comments from API and App)
                  - leave a comment (user to App) 
                  - delete a comment (admin - user comment from App)
    - Airports - information (name, code, info)   
    Select form => change city

5. Feedback (only user)
    - My comments - See all your feedbacks
                  - Delete your comment
    - Provider List - Providers - list
                                - details
                                - Leave comment (user to App)

6. Providers (only admin)
    - New Provider Form - add new provider
    - Provider List - Providers - list 
                                - details
                                - Edit - change information about provider 
    

### Role:
1. User
    * Default value:
      email: user@user.com, password: UserUser1
    * Can do:
    - sign in,
    - sign up,
    - see information about hotels, restaurants, attractions, airports, providers(airplane, train, bus, rent a car)
    - see other users comments,
    - add comment about hotels, restaurants, attractions, providers
    - see own comments,
    - delete own comment

2. Admin
    * Default value:
    email: admin@admin.com, password: AdminAdmin1
    * Can do:
    - All that user can do
    - delete users comment
    - add new provider
    - edit provider

 