BUSINESS TRAVEL  AGENCY

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
- SignUp Page
    Validation on signUp page will not allow you to submit if information are not valid...
    Valid information
        * email -> something@something.xy
        * password -> Number, letter, Capital letter >=8
    Submitting validate form will redirect you to SignIn page

- SignIn Page
    Information have to bi valid to submit
    Submitting validate signIn form will redirect you to App

    Notice: if you are not logIn you are not allow to go to App pages, and if you are logIn you can not visit SignIn and SignUp pages.
    
    
-APP PAGES
- Home Page
    Select country, and than city from drop-down menu. Redirect to desire city page with information.

    Press button "SHOW INFORMATION ABOUT CITY" => 
    Menu:
    - Restaurants - information (name, contact, info, description, image, rating)   
                  - comments (user comment)
    - Hotels - information (name, contact, info, description, image, rating)   
                  - comments (user comment)
    - Attractions - information (name, contact, info, description, image, rating)   
                  - comments (user comment)
    - Airports - information (name, code, info)   
    Select form => change city
- Feedback
                  


        

 
    

### Role:
1. User
    * Default value:
      email: user@user.com, password: UserUser1
    * Can do:
    - sign in,
    - sign up,
    - see information about accommodation (hotels, hostels, apartments, houses), food & entertainment (restaurants, cafe, fast-food), safety (police, hospitals, hospitality, regulations ), transport (train, rent-a-car, bus), culture (museums, opera, dance) and airports (location, transportation, air-company),
    - see other users comments,
    - add comment,
    - choose transportation from first point to second point

2. Admin
    * Default value:
    email: admin@admin.com, password: AdminAdmin1
    * Can do:
    - All that user can do
    - delete users comment
    - edit provider

    /*TODO LIST*****  
    * if you go to some page, and are not signIn, redirect to SignInPage, after authenticate redirect on desire page
    * 