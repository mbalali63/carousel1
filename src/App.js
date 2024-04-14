import {useState,useReducer} from 'react'
import LeftFrame from './components/LeftFrame.js'
import RightFrame from './components/RightFrame.js'
import MainFrame from './components/MainFrame.js'
import Footer from './components/Footer.js'
import PopupFrame from './components/PopupFrame.js'
import imgList from './imagePack.js'
import {bg_L_th_1,bg_L_th_2} from './colors.js'
import {bg_R_th_1,bg_R_th_2} from './colors.js'

function reducer(state,action) {
	if (action.type === 'move-left') {
		const index = state.mainFrameImageIndex;

		return {
			mainFrameImageIndex: (index + 1 < imgList.length) ? index + 1 : 0
		}
	}
	if (action.type === 'move-right') {
		const index = state.mainFrameImageIndex;
		return {
			mainFrameImageIndex: (index > 0) ? index - 1 : imgList.length-1
		}
	}
	
}


function App() {
	const [state,dispatch] = useReducer(reducer,{mainFrameImageIndex:0})
	//const [mainFrameImageIndex,setMainFrameImageIndex] = useState(0)
	const [theme,setTheme] = useState(1)
	const [currentDirection,setCurrentDirection] = useState('left')
	const [zoomed, setZoomed] = useState(false)
	const leftIndex = (index) => {
		return (index + 1 < imgList.length) ? index + 1 : 0;
	}

	const rightIndex = (index) => {
		return (index > 0) ? index - 1 : imgList.length-1;
	}

	const bg_L_th = (theme === 1) ? bg_L_th_1 : bg_L_th_2
	const bg_R_th = (theme === 1) ? bg_R_th_1 : bg_R_th_2
	const appStyle = {
		background: 'linear-gradient(to bottom,' + bg_L_th + ',' + bg_R_th + ')'
	}

	const handleLeftClick =() => {
		setCurrentDirection('left')
		dispatch({type: 'move-left'})
	}

	const handleRightClick = () => {
		setCurrentDirection('right')
		dispatch({type: 'move-right'})
	}
	const themeChangeHandler = (themeNo) => {
		if (themeNo === 1) {
			setTheme(1)
		} else {
			setTheme(2)
		}
	}
	const zoomHandler = (value) => {
		setZoomed(value)
	}
	


  return (
    <div className="App"
	 style = {appStyle}
    >
	  <div id = "theme-selector">
	  	<div 
	  		className = "theme-circle" 
	  		id = "theme-1"
	  		onClick = {() => themeChangeHandler(1)}
	  	>
	  	</div>
	  	<div 
	  		className = "theme-circle" 
	  		id = "theme-2"
	  		onClick = {() => themeChangeHandler(2)}
	  	>
	  	</div>
	  </div>
	  <h1>{imgList[state.mainFrameImageIndex].title}</h1>
	  <div className="frame-container">
	  	<LeftFrame 
	  		   imageIndex = {leftIndex(state.mainFrameImageIndex)}
	  		   handleClick = {handleLeftClick}
	  		   direction = {currentDirection}
	  	/>
		<MainFrame 
	  		   imageIndex = {state.mainFrameImageIndex} 
	  		   direction = {currentDirection}
	  		   zoomHandler = {zoomHandler}
	  	/>
	  	<RightFrame 
	  		   imageIndex = {rightIndex(state.mainFrameImageIndex)} 
	  		   handleClick = {handleRightClick}
	  		   direction = {currentDirection}
	  	/>
	  </div>
	  <div className="arrows-container">
	  	<div>
	  		<span className="material-symbols-outlined" onClick={handleLeftClick}> next_plan </span>
	  	</div>
	  	<div>
	  		<span className="material-symbols-outlined" onClick = {handleRightClick}> next_plan </span>
	  	</div>
	  </div>
	  <p id="caption">{imgList[state.mainFrameImageIndex].caption}</p>
	  <PopupFrame index={state.mainFrameImageIndex} zoomed={zoomed} zoomHandler = {zoomHandler}/>
	  <Footer />
    </div>
  );
}

export default App;
