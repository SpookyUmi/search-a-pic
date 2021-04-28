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

After reading [Pixabay's API documentation](https://pixabay.com/api/docs/), I prepared my environment : 
- Create React App, 
- GitHub Repository, 
- deploy on Netlify.


Then, using a simple **input** on my App component, **I connected my application to Pixabay's API** and performed the first calls. The idea was to set up the **useEffect** and **async/await** function to fetch the datas we want, and verify if we're successfully connected to the API. I also began to build my **local state using useState**.


Then I **structured** my application by building all the **components** I estimated necessary. As the call to the API was implemented and functional, I didn't need to **mock** with fake data and I directly passed my **props** to the components, especially my Results component where I needed all the images received from the API. 


I **styled** my app using **Sass** variables and nesting, and using **BEM** methodology for my CSS selectors class names. I also added the **React Image Lightbox** package to make the app a little more **interactive** : you can click on a photo and it will appear bigger over the app's content. You can also pass the photos thanks to the lateral arrows. 

## Application operation

I chose **two different ways to search photos** and by extension to perform a call to the API : 
- The classic way with an **onSubmit** event plugged on my search Form : the form catches the input's value thanks to useRef and send it to our local state which triggers a re-render. 
- You can also write in the input and wait for 3sec without submitting the form. Using **debounce** and **onChange**, the app will memorize your last move and send the input's value to the local state after 3 seconds. 

I also chose to pass a **default value** to the search state, that way a call to the API is performed right after the render and the page isn't empty. I found it more interesting that way.
