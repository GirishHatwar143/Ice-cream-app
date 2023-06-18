## Ice-Cream app

You need to build a ice-cream ordering app. The user can customize the content of Thali. We can add or remove following items and change the quality of these items.There will be a favourite button on each items.
when user click on the favourite button items will be added on favourite page:


It is not mandatory to have all items , but atleast two items should be present else you need to populate error message at the time of clicking checkout button. Each item have need to have a unit price.

When the user is done building the items, they proceed to checkout page by clicking on checkout button, where they can view the items wise price and the total price of the items. 

While creating the project structure , you need to have following components in your app:

 This will contain the UI of the ingradients added to the ice-creams.  if you remove items image should not be displayed.  


Checkout.js - This component will have the checkout summary of your items and the final price.

You need to store the ingradients and thier quantity using redux store. 


