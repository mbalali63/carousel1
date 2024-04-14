import imgList from './../imagePack.js'
import {gsap} from "gsap"

export default function LeftFrame({imageIndex,handleClick,direction}) {
	const xStart = (direction === 'left') ? '-500%' : '100%'
	const loader = () => {
		gsap.from("#left-frame-image",{x: xStart, duration: 0.5, delay: 0.1})
	}
	return (
		<div className="image-container" id="left-frame">
			<img
				id = "left-frame-image"
				src={imgList[imageIndex].image}
				onLoad = {loader}
				onClick = {handleClick}
			 />
		</div>
	)
}
