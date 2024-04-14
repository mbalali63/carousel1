import imgList from './../imagePack.js'
import {gsap} from "gsap"

export default function RightFrame({imageIndex,handleClick,direction}) {
	const xStart = (direction === 'right') ? '500%' : '-100%'
	const loader = () => {
		gsap.from("#right-frame-image", {x:xStart, duration: .5, delay:0.1})
	}
	return (
		<div className="image-container" id="right-frame">
			<img 
				id = "right-frame-image"
				src={imgList[imageIndex].image}
				onLoad = {loader}
				onClick = {handleClick}
			/>
		</div>
	)
}
