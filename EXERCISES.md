# Redux Exercises

## Store posts

Demo [Redux Vanilla Lunch](https://demo.alchemycodelab.io/redux-vanilla-lunch)

* create an index.js
  * create a reducer
    * can add and remove a drink
    * can add and remove chips
    * can add and remove sandwich
  * create a `store`
  * dispatch actions to add a sandwich, drink, and chips
  * dispatch actions to remove a sandwich, drink, and chips
* create an index.html
* BONUS
  * drinks, chips, and sandwiches are arrays
  * add a way to empty drinks, chips, and sandwiches

  # Redux Action Exercises

## Action refactor

Demo [Redux Vanilla Lunch Actions](https://demo.alchemycodelab.io/redux-vanilla-lunch-actios)

* Refactor your redux-vanilla-lunch extracting actions into their own directory

## Blog Action

* create a blog-actions branch
* create `src/actions/postActions.js`
  * posts have an title and body
  * you can create a post
  * you can delete a post
  * BONUS: you can update a post by passing an id and new body

# Redux Reducer Exercises

## Reducer refactor

Demo [Redux Vanilla Lunch Reducers](https://demo.alchemycodelab.io/redux-vanilla-lunch-reducers)

* Refactor your redux-vanilla-lunch extracting reducer into its own directory

## Blog Reducers

* create a blog-reducers branch (branch from blog-actions)
* create `src/reducers/postReducer.js`
  * store an array of posts
  * handle create a post
  * handle delete a post
  * BONUS: handle update a post by index

## Blog Combine Reducers

* create a blog-combine-reducers branch (branch from blog-reducers)
* create `src/actions/commentActions.js`
  * create an action to create a comment for a post (by post index)
  * create an action to delete a comment for a post (by post index and comment index)
* create `src/reducers/commentReducer.js`
  * store comments for each post (create an object where the key is a posts index)
    and the value is an array of comments
  * handle create a comment
  * handle delete a comment
  * delete post should also delete all comments

  # Redux Selector Exercises

## Blog selectors

* create a blog-selectors branch (branch from blog-combine-reducers)
* create `src/selectors/postSelectors.js`
  * get all posts
  * get a post by index
* create `src/selectors/commentSelectors.js`
  * get all comments by post

# Redux React Exercises

## Blog React

* create a `store.js`
  * create an export a redux store
* create a `Post` component for lists
  * display a posts title
* create a `Posts` component
* create a `PostForm` component
* create a `CreatePost` container
* create an `AllPosts` container
* create an `App` component
  * use `AllPosts`
  * use `CreatePost`
* update `index.js` to use `App` wrapped in `Provider`

## Finish Blog

* create master/detail pages for post
  * use router
* display comments on `PostDetail` page
* add ability to add comments
* add ability to delete comments
* BONUS: add ability to delete post
  * you also need to delete all comments for that post
