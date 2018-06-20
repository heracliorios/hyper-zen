'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = require('Color');

exports.decorateTerm = function (Term, _ref) {
	var React = _ref.React;

	return function (_React$Component) {
		(0, _inherits3.default)(_class2, _React$Component);

		function _class2() {
			var _ref2;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, _class2);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = _class2.__proto__ || (0, _getPrototypeOf2.default)(_class2)).call.apply(_ref2, [this].concat(args))), _this), _this.onDecorated = function (term) {
				console.log('DEBUG::TEST');

				var onDecorated = _this.props.onDecorated;

				// if (this.props.onDecorated) this.props.onDecorated(term)
				// this.props.onDecorated && this.props.onDecorated(term);

				console.log('DEBUG::onDecorated', onDecorated);
				console.log('DEBUG::document.body', document.body);
			}, _this.render = function () {
				return React.createElement(Term, (0, _assign2.default)({}, _this.props, {
					onDecorated: _this.onDecorated
				}));
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		return _class2;
	}(React.Component);
};

exports.decorateConfig = function (config) {
	return (0, _assign2.default)({}, config, {
		backgroundColor: Color('#000').alpha(0.5).toString()
	});
};

// document.body.appendChild(this._canvas)
// return Term;
// background: url('file:///Users/heracliorios/Documents/image3.gif') center;
// background-repeat: no-repeat;
// opacity: 0.5,
