import './style.css'
import p5 from 'p5'
/**
 *
 * @param {p5.p5InstanceExtensions} s
 */
const sketch = (s) => {
	const canvasSize = 1000

	s.setup = () => {
		s.createCanvas(canvasSize, canvasSize)
		s.background(0)
		s.textSize(32)
	}

	s.draw = () => {
		s.square(460, 500, 40)
	}
}

const sketchInstance = new p5(sketch, document.getElementById('app'))
