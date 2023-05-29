# Suspiria App

## Data

### Picture:
  - pictureData: 
    - title
    - creationDate
    - author
    - movement
  - image
  - description
  - temperatureColor:
    - warm
    - cold
    - mixed
  - colors:
    - colorFirst
    - colorSecond
    - colorThird
    - colorFourth
    - color Fifth
    - color Sixth

### User

  - id
  - username
  - token 
  - isLogged

### Data UI

- UI:
  - isLoading: boolean
  - isError: boolean

## Stores:

#### User:
- loginUser()
- logoutUser()

#### UI:
- showLoading()
- hideLoading()
- showModal()
- hideModal()

#### Pictures:
- loadPictures()
- loadOnePicture()
- addPicture()
- updatePicture()
- removePicture()
- filterByColors()


## Components

### App

- Renders Layout
- Receives a token from local storage

### Layout

- Renders header

### Header

- Renders a NavBar component

### NavBar

- Render a log out button
- Render a home button
- Render a createPicture button

### ModifyPictureForm

- handleSubmit()
- Receives dispatch()
- Receives picture data from id to update
- Renders form structure
- Renders a "Modify story" button component:
  - actionOnClick: handleSubmit

### ModifyPictureForm

- handleSubmit()
- Receives dispatch()
- Renders form structure
- Renders a "Add story" button component:
  - actionOnClick: handleSubmit

### LoginForm

- State:
  - User credentials
- handleLoginSubmit()
- Receives dispatch()
- Shows two inputs with "username" and "password"
- Renders a Button component
  - text: "Login"
  - actionOnClick: handleSubmit

### PictureList

- Renders a filter menu
- Receives a collection of pictures
- Renders all the picture collections

### Filter

- Receives a dispatch
- Receives picture
- loadFilteredColorPictures()

### PictureCard

- Receives a pictureData
- Receives dispatch()
- Shows the picture's data title, image description and color's palette
- Renders two Button components with:
  - text: "delete" / "modify"
  - actionOnClick: handleClick

### Button

- Receives a text or a icon
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

### Footer

- Renders Suspiria'app details
- Renders a logo

### Feedback

- Receives modalImage, modalIcon and modalMessage from props
- Receives isError
- Renders the modal

### Pagination

- Handles page navigation
- loadNext()
- loadPrevious()


## Login Form

  - Receives setLocalStorageToken() (useLocalStorage)
  - Receives getUserToken() (useUser)
  - Receives decodeToken() (useToken)
  - Receives dispatch - (loginUserActionCreator)
  - navigate(/pictures) (useNavigate)
  - submitForm()

  - Renders a logo
  - Renders LoginForm

- 404

  - Renders a description
  - Renders an image
