import imgList from './../imagePack.js'
import {gsap} from "gsap"

export default function MainFrame({imageIndex,direction,zoomHandler}) {
	const xStart = (direction === 'left') ? '-100%' : '100%'
	const loader = () => {
		gsap.from("#main-frame-image",{ x: xStart, duration: 0.5, delay:0})
	}
	return (
		<div className="image-container" id="main-frame">
			<img  
				id = "main-frame-image" 
				src={imgList[imageIndex].image} 
				onLoad = {loader}
				onClick = {() => zoomHandler(true)}
		/>
		</div>
	)
}
