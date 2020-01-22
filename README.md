# Homes Egypt Falak Project

# Current Version (1.1.0)
- Changed property url from `/properties/{:id}/{:title}` to `/property/{:id}/{:title}`.
- Added to settings service two methods:
  - `currentCurrency`: Get current currency based on cached currency or current query string, otherwise `USD` is the default.
  - `updateCurrency`: Update current currency.
  - `info` return current email and phone number.
  - When currency is changed from the currency bar on the top of the page, it is also changed in the search form and vice versa.
  - Created new `property-request-form` component to handle the property request in standalone component.
    - > Form handling itself is not done yet.
  - Removed property image url generator function, now property images urls are coming from the API.


# Todo 

## Search Form
  - Text or Numeric inputs text are higher than the dropdown ones in the search form.

## Property Request Form
  - Please confirm it is fully working, also don't forget to add `name` attribute to all fields.
  - `Mobile Number` and `Name` are required fields. 
  - Make sure its working.

## Advertise your property
  - Create a separate component `advertise-property` as a standalone component.
  - Cities are selected based on dropdown list, the api request for it is `/cities`, it will return all cities ands its regions, once user select city, he/she can select its regions accordingly.
  - Add sale type dropdown list `rent`| `sale` are the values, and `name` is `sale_type` 
  - Types, Beds and Baths are dropdowns not text.
  - Choose type and Area size are in one row.
  - Beds and Baths are in one row.
  - Try to use a smaller modal size by passing `size="medium"` or `size="small"` to `flk-modal` component as its too big.
- Make sure its working.

## Contact Us Form
- Create a separated `contact-form` component as a standalone.
- Make it a small modal.
- Remove `WE WILL NOT SHARE EMAIL WITH ANY ONE` sentence.
- Make sure its working.

## Pagination
- Display at least 18 property per chunk "For every READ MORE click"
- Make a lazy loading pagination

## END OF TODO

# Installation

Clone the repository then run the following command:

`yarn install`

or 

`npm install`

# Starting the server

To start the server for the first time run the following command:

`yarn start`

# Reserving an opened project

If you want to stop the server and start it again as the project is already opened in the browser, run the following command instead of `yarn start`

Run:

`yarn serve`

# Opening Visual Studio Code without extensions

To open Visual Studio Code for the project and disable extensions run the following

`yarn code`