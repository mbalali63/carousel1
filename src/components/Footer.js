import {ft_L_th_1,ft_L_th_2} from './../colors.js'
import {ft_R_th_1,ft_R_th_2} from './../colors.js'
export default function Footer({theme}) {
	const ft_L_th = (theme === 1) ? ft_L_th_1 : ft_L_th_2
	const ft_R_th = (theme === 1) ? ft_R_th_1 : ft_R_th_2
	const ftStyle = {
		background: 'linear-gradient(to right,' + ft_L_th + ',' + ft_R_th + ')'
	}
	return (
		<footer style={ftStyle}>
			<p id="footer-p">Designed by <a href="https://twitter.com/codinggeek1984" target="_blank" >Mahdi Balali</a></p>
		</footer>
	)
}
