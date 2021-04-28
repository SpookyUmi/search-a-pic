# Search a pic 

I'm using Pixabay API for this project.

## Stack

- React & React Hooks
- Sass
- Axios

Packages : 
- Lodash
- React Image Lightbox

## Organization

After reading Pixabay's API documentation, I prepared my environment : Create React App, GitHub Repository, deploy on Netlify.
Then, using a simple input on my App component, I connected my application to Pixabay's API and performed the first calls. The idea was to set up the useEffect and async/await function to fetch the datas we want, and verify if we're successfully connected to the API. I also began to build my local state using useState.
Then I structured my application by building all the components I estimated necessary. 
As the call to the API was implemented and functional, I didn't need to mock with fake data and I directly passed my props to the components, especially my Results component where I needed all the images received from the API. 
I styled my app using Sass variables and nesting, and using BEM norm for my CSS selectors class names. I also added the React Image Lightbox package to make the app a little more interactive : you can click on a photo and it will appear bigger over the app's content. You can also pass the photos thanks to the lateral arrows. 
