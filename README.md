PoroSnax is an onilne bakery store, where users purchase food items. Users place items into a shopping cart, proceed to checkout, and place an order. Orders are saved for each user, and available to view through their account page.

[PoroSnax Live Site](https://porosnax.herokuapp.com/#/)

This web app uses Ruby on Rails on the backend with PostgreSql database, and AWS S3 buckets to store images. On the front end, React and Redux are used with Webpack and Babel, along with HTML, CSS, JavaScript, and localStorage. 



One feature of my app is the shopping cart. I decided to use localStorage to persist a user's shopping cart, allowing users to navigate the site and persist their shopping cart items. Initially, items were added to the cart by the ID of the food item, but I wanted to display cart items by the order they were added to the cart. Using an array to store the order worked by keeping track of the food item's ID along with the requested quantity in the shopping cart, and removing an item shifts all items up one index.  This order is also stored both in localStorage and in the database. 

Another feature is editing items in the shopping cart. When users add an item to the shopping cart, they can modify the current quantity, and that quantity is the default number set inside the 'Add to Cart' modal. Redux stores the quantities of each cart item, and passes that information to the React components. The React components use the passed-in data, and have event listeners to keep track of changes made. Then, those modifications are sent back to the Redux state and to localStorage. This allows users to modify the quantity based on their previous choice, as well as preventing users from adding duplicate items to the shopping cart. 

