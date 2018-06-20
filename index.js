const Color = require('Color');

exports.decorateTerm = (Term, { React }) => {
	return class extends React.Component {
		onDecorated = (term) => {
			const {
				onDecorated
			} = this.props;

			// if (this.props.onDecorated) this.props.onDecorated(term)
			// this.props.onDecorated && this.props.onDecorated(term);
			console.log('DEBUG::onDecorated', onDecorated);
			console.log('DEBUG::document.body', document.body);
		}

		render = () => {
			return React.createElement(Term, Object.assign({}, this.props, {
				onDecorated: this.onDecorated
			}))
		}
	}
}

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor: Color('#000').alpha(0.5).toString()
	})
}

// document.body.appendChild(this._canvas)
// return Term;
// background: url('file:///Users/heracliorios/Documents/image3.gif') center;
// background-repeat: no-repeat;
// opacity: 0.5,
