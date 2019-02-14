import fs from 'fs'
import path from 'path'
import Color from 'Color'

const BASE_64_IMAGE = fs.readFileSync(path.join(__dirname, './image.gif'), 'base64')

const generateElementForContainer = () => {
	const propertiesForPosition = ['top', 'bottom', 'left', 'right']
	const element = document.createElement('div')

	element.setAttribute('id', 'hyper-zen-container')

	propertiesForPosition.map(property => {
		element.style[property] = 0
	})

	element.style.position = 'absolute'
	element.style.padding = 8
	element.style.opacity = 0.5
	element.style.display = 'flex'
	element.style.flexDirection = 'row'
	element.style.justifyContent = 'center'
	element.style.alignItems = 'center'
	element.style.backgroundColor = '#09364c'
	element.style.zIndex = 0

	return element
}

const generateElementForImage = () => {
	const element = document.createElement('img')

	element.setAttribute('id', 'hyper-zen-image')
	element.setAttribute('src', `data:image/gif;base64, ${BASE_64_IMAGE}`)

	element.style.backgroundRepeat = 'no-repeat'
	element.style.maxWidth = '100%'
	element.style.maxHeight = '100%'
	element.style.imageRendering = 'pixelated'
	element.style.pointerEvents = 'none'
	element.style.userSelect = 'none'

	return element
}

export const decorateTerm = (Term, { React }) => {
	return class extends React.Component {
		background = (term) => {
			if (term) {
				const container = generateElementForContainer()
				const image = generateElementForImage()

				container.appendChild(image)

				term.termRef.appendChild(container)
			}
		}

		onDecorated = (term) => {
			this.background(term)
		}

		render() {
			const props = {
				...this.props,
				onDecorated: this.onDecorated,
				onCursorMove: () => { }
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
