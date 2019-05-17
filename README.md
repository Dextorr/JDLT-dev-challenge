# [JDLT](https://jdlt.co.uk) full-stack developer challenge - Dexter De Leon submission

## Dependencies
* Axios
* Babel
* Bluebird
* Body Parser
* Bootstrap
* Express
* Mongoose
* Node
* React
* Webpack

## Brief

Given the below sample data; create a full-stack app that serves the data and displays it, allowing filtering/sorting.

#### Sample data

| Supplier    | Product      | Price (£) |
| ------------|--------------|----------:|
| New Co Ltd  | Small wongle | 5.00      |
| New Co Ltd  | Large wongle | 8.00      |
| New Co Ltd  | Super wongle | 12.00     |
| Old Co Ltd  | Mini wongle  | 4.00      |
| Old Co Ltd  | Small wongle | 6.00      |
| Old Co Ltd  | Large wongle | 9.00      |
| Old Co Ltd  | Super wongle | 13.00     |

## Instructions
Clone the repo and use `yarn` to install dependencies. `yarn seed` to populate the database, `yarn serve` and `node index.js` from the root folder to run the development server.

Alternatively run `yarn build` then `node index.js` then access via `http://localhost:4000`.

## Process

I started by creating the database models using mongoose and mongoDB for the suppliers and products in the sample data.
After seeding the data and confirming that the server was returning data as expected, I moved on to fleshing out a React app to display it.

Using axios to retrieve the data from the front end. Data is passed to a `ProductTable` component, which utilises the array `map` method to display the table's rows.

By passing the same data to the dropdown menus, I could utilise the below function to programmatically populate the filter options from the database with unique products, meaning that any other products added in the future would automatically be included as a filter option.

```javascript
uniqueProducts(){
  return this.state.products.filter((product, i, arr) => {
    // Return only products whose index is equal to the first occurance of the name property in the mapped array of product names
    return arr.map(prod => prod.name).indexOf(product.name) === i
  })
}
```

Clicking on the dropdown items triggers the following:

```javascript
handleClick({ target: { name, id } }){
  let filter
  if (this.state.filter[name] &&
    this.state.filter[name] === id) filter = { ...this.state.filter, [name]: null }
  else filter = { ...this.state.filter, [name]: id }
  this.setState({ filter })
}
```

...which sets the appropriate filter property in the main App state. On click, the item and button are highlighted in dark grey so that the user is aware there is an active filter. Clicking on the active filter again will deactivate it.

The data is then filtered through the following two functions:

```javascript
filterData(){
  let data = this.state.data
  if (this.state.filter.sort) data = this.sortData(this.state.data)
  if (this.state.filter.supplier) {
    data = data.filter(product => {
      return product.supplier.name === this.state.filter.supplier
    })
  }
  if (this.state.filter.product) {
    data = data.filter(product => {
      return product.name === this.state.filter.product
    })
  }
  return data
}

sortData(data){
  if (this.state.filter.sort === 'Low to High'){
    return data.slice().sort((a, b) => a.price - b.price)
  }
  if (this.state.filter.sort === 'High to Low'){
    return data.slice().sort((a, b) => b.price - a.price)
  }
  return data
}
```
The result of these functions is passed as appropriate to the product table component to display the data relevant to the currently selected filters and search criteria.
