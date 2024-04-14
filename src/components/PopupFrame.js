import {useEffect,useRef} from "react";
import imgList from './../imagePack.js';
import {gsap} from "gsap";

export default function PopupFrame({index,zoomed,zoomHandler}){
	const containerRef = useRef()
	useEffect(() => {
		const handler = () => {
			zoomHandler(false)
		}
		const handler2 = (e) => {
			if (e.keyCode === 27) {
				zoomHandler(false)
			}
		}
		const container = containerRef.current;
		container.addEventListener('click',handler)
		container.addEventListener('keydown',handler2)
		container.focus()
		return () => {
			container.removeEventListener('click',handler)
			container.removeEventListener('keydown',handler2)
		}
	},[])
	const loader = () => {
		gsap.from('#popup-image',{scale:0.1,duration:1,delay:.5,ease:'power1'})
	}
	return (
		<div 
			id="popup-frame-container"
			style = {{display: zoomed ? 'block' : 'none'}}
			ref = {containerRef}
			tabIndex = {0}
			autoFocus
		>
			<div id="popup-image-container">
				<img 
					id="popup-image"
					src = {imgList[index].image}
					onLoad = {loader}
			/>
			</div>
		</div>
	)

}
