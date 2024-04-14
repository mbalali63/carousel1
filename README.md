# Contact Us Form

## Introduction
 
  This form is designed by Reactjs. I 've defined and completed this project to improve my skills in using Reactjs.

## Project WBS
1. <input type="checkbox" checked /> Prepare the project plan
2. <input type="checkbox" checked/> Wireframe in figma
    <ul>
        <input type="checkbox" checked/> Mobile Frame <br>
        <input type="checkbox" checked /> Desktop Frame
    </ul>
3. <input type="checkbox" checked/> Select Color Scheme
4. <input type="checkbox" checked/> Design colorful in figma
5. <input type="checkbox" checked/> List Components
6. <input type="checkbox" checked/> List Visual States
7. <input type="checkbox" checked/> Determine what triggers visual state changes
8. <input type="checkbox" checked/> How to deal with images
9. <input type="checkbox" checked/> List Hooks 
10. <input type="checkbox" checked /> List Component props and callBacks
11. <input type="checkbox" checked/> Create components
12. <input type="checkbox" checked/> Implement Visual Design
13. <input type="checkbox" checked/> Implement states and evenet handlers
14. <input type="checkbox" checked/> Test the App
15. <input type="checkbox" /> Finalize and Publish




## Notes:
1. I want to create multiple color themes, and make it possible for the user to select


## Color Themes:
 The color themes are selected from the website [Colors](https://coolors.co). These are my themes:
<ul>
    <li style="display:flex; gap:10px;"><a href="https://coolors.co/d8e2dc-ffe5d9-ffcad4-f4acb7-9d8189" target="_blank">Theme 1 </a>
    <div style="background-color:#D8E2DC;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#FFE5D9;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#FFCAD4;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#F4ACB7;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#9D8189;width:20px;height:20px; border-radius:50%"></div>
    </li>
    <li style="display:flex; gap:10px;"><a href="https://coolors.co/c2f9bb-9ad1d4-62c370-cc3363-20063b
    " target="_blank">Theme 2 </a> 
    <div style="background-color:#C2F9BB;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#9AD1D4;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#62C370;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#CC3363;width:20px;height:20px; border-radius:50%"></div>
    <div style="background-color:#20063B;width:20px;height:20px; border-radius:50%"></div>
    </li>
</ul>


## List of Components
<ol>
    <li>App</li>
    <li>mainFrame</li>
    <li>leftFrame</li>
    <li>rightFrame</li>
    <li>leftArrow</li>
    <li>rightArrow</li>
    <li>footer</li>
    <li>popUpFrame</li>
</ol>


## List of Visual States
<ol>
    <li>normal</li>
    <li>moving right</li>
    <li>moving left</li>
    <li>pop up</li>
</ol>


## Determine what triggers visual state changes 
the follwoing list reveals what trigger each state:
1. by default carousel is at <strong>normal</strong> state
2. every 5 seconds, a move to right command will be triggered, then the moving to right will be the state
3. after completeing the moving to right (or left) the normal state will be the state.
4. whenever the user clicks the leftFrame (or rightFrame) the move to left (or move to right) command will be triggered and the state will be moving left (or moving right)
5. whenever the user click on the mainFram, the image will pop up and the pop up will be the current state
6. while the pop us state is active, if the user click any-where outsidfe, the pop up will be closed and the state will change to normal

Note: in mobile media query, the leftFrame click and rightFrame click will be substituted by leftArrow and rightArrow click.


## How to Deal with Images

 I will save the images in a folder called images inside src folder. the file names will be an integer number, representing the image id.
 I a module called images, all of the images will be loaded and packed in an object array, called imgList:<br>

 
 const imgList = [
    {id:1 <br>
     fname: '1.png',<br>
     title: 'title1',<br>
     caption: 'caption1'<br>
    }
 ]
 

 all of the states (mainFrameImg, leftFrameImage, rightFrameImage) will point to the id of the image in this list.

## List of Hooks
### List of Reducers

<ol>
    <li>changeImage</li>
</ol>

### List of UseStates
<ol>
    <li>title</li>
    <li>caption</li>
    <li>mainFrameImage</li>
    <li>leftFrameImage</li>
    <li>rightFrameImage</li>
</ol>


## List of Component Props and callBacks

<table>
    <tr>
        <th>Component</th>
        <th>Props</th>
        <th>callback</th>
        <th>Parent</th>
    </tr>
    <tr>
        <td>App</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>mainFrame</td>
        <td>mainFrameImage</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>leftFrame</td>
        <td>leftFrameImage</td>
        <td>-</td>
        <td>App</td>
    </tr>
    <tr>
        <td>rightFrame</td>
        <td>rightFrameImage</td>
        <td>-</td>
        <td>App</td>
    </tr>
    <tr>
        <td>leftArrow</td>
        <td>-</td>
        <td>changeImage.dispatch(type = left)</td>
        <td>-</td>
    </tr>
    <tr>
        <td>rightArrow</td>
        <td>-</td>
        <td>changeImage.dispatch(type = right)</td>
        <td>-</td>
    </tr>
    <tr>
        <td>footer</td>
        <td></td>
        <td>-</td>
        <td>App</td>
    </tr>
    <tr>
        <td>popUpFrame</td>
        <td>mainFrameImage</td>
        <td>-</td>
        <td>App</td>
    </tr>
</table>



## CSS Variable Names Convention

AAA_GG_th_T



<table>
    <tr>
        <th>T</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Is related to theme 1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Is related to theme 2</td>
    </tr>

</table>

<table>
    <tr>
        <th>AAA</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>bg</td>
        <td>Background</td>
    </tr>
    <tr>
        <td>ft</td>
        <td>Footer</td>
    </tr>
    <tr>
        <td>ov</td>
        <td>Overlay</td>
    </tr>    
</table>

<table>
    <tr>
        <th>GG</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>R</td>
        <td>Right color of gradient</td>
    </tr>
    <tr>
        <td>L</td>
        <td>Left color of gradient</td>
    </tr>
</table>

<table>
    <tr>
        <th>T</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>C</td>
        <td>Color</td>
    </tr>
    <tr>
        <td>O</td>
        <td>Opacity</td>
    </tr>
</table>


## Colors Tables


<table>
    <tr>
        <th>Description</th>
        <th>Var Name</th>
        <th>Color code</th>
    </tr>
    <tr>
        <td>Background</td>
        <td>bg_L_th_1</td>
        <td>rgb(255,229,217,1)</td>
    </tr>
    <tr>
        <td>Background</td>
        <td>bg_R_th_1</td>
        <td>rgb(252,199,174,1)</td>
    </tr>
    <tr>
        <td>Footer</td>
        <td>ft_L_th_1</td>
        <td>rgb(157,129,137,1)</td>
    </tr>
    <tr>
        <td>Footer</td>
        <td>ft_R_th_1</td>
        <td>rgb(124,94,103,1)</td>
    </tr>
    <tr>
        <td>Overlay</td>
        <td>ov_L_th_1</td>
        <td>rgb(82,80,80,0.7)</td>
    </tr>
    <tr>
        <td>Overlay</td>
        <td>ov_R_th_1 </td>
        <td>rgb(82,80,80,0.7)</td>
    </tr>

</table>




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
