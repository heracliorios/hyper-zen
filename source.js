import fs from 'fs'
import path from 'path'
import Color from 'Color'

const BASE_64_IMAGE = fs.readFileSync(path.join(__dirname, './image.gif'), 'base64')

const generateElementForContainer = () => {
	const propertiesForPosition = ['top', 'bottom', 'left', 'right']
	const element = document.createElement('div')

	element.setAttribute('id', 'hyper-zen-container')

	element.style.position = 'absolute'

	propertiesForPosition.map(property => {
		element.style[property] = 0
	})

	element.style.opacity = 0.25
	element.style.display = 'flex'
	element.style.flexDirection = 'row'
	element.style.justifyContent = 'center'
	element.style.alignItems = 'center'
	element.style.backgroundColor = '#09364c'

	return element
}

const generateElementForImage = () => {
	const element = document.createElement('img')

	element.setAttribute('id', 'hyper-zen-image')
	element.setAttribute('src', `data:image/gif;base64, ${BASE_64_IMAGE}`)

	element.style.backgroundSize = 'cover'
	element.style.backgroundRepeat = 'no-repeat'
	element.style.width = '100%'
	element.style.imageRendering = 'pixelated'
	element.style.pointerEvents = 'none'
	element.style.userSelect = 'none'

	return element
}

export const decorateTerm = (Term, { React }) => {
	return class extends React.Component {
		background = () => {
			const container = generateElementForContainer()
			const image = generateElementForImage()

			container.appendChild(image)

			document.getElementById('hyper').appendChild(container)
		}

		onDecorated = (term) => {
			const {
				onDecorated
			} = this.props;

			onDecorated && onDecorated(term);

			this.background();
		}

		render() {
			const props = {
				...this.props,
				onDecorated: this.onDecorated
			}

			return React.createElement(Term, props)
		}
	}
}

export const decorateConfig = (config) => {
	return {
		...config,
		backgroundColor: Color('#000').alpha(0.5).toString()
	}
}
