'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.decorateConfig = exports.decorateTerm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Color = require('Color');

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_64_IMAGE = _fs2.default.readFileSync(_path2.default.join(__dirname, './image.gif'), 'base64');

var generateElementForContainer = function generateElementForContainer() {
	var propertiesForPosition = ['top', 'bottom', 'left', 'right'];
	var element = document.createElement('div');

	element.setAttribute('id', 'hyper-zen-container');

	propertiesForPosition.map(function (property) {
		element.style[property] = 0;
	});

	element.style.position = 'absolute';
	element.style.padding = 8;
	element.style.opacity = 0.25;
	element.style.display = 'flex';
	element.style.flexDirection = 'row';
	element.style.justifyContent = 'center';
	element.style.alignItems = 'center';
	element.style.backgroundColor = '#09364c';
	element.style.zIndex = 0;

	return element;
};

var generateElementForImage = function generateElementForImage() {
	var element = document.createElement('img');

	element.setAttribute('id', 'hyper-zen-image');
	element.setAttribute('src', 'data:image/gif;base64, ' + BASE_64_IMAGE);

	element.style.backgroundRepeat = 'no-repeat';
	element.style.maxWidth = '100%';
	element.style.maxHeight = '100%';
	element.style.imageRendering = 'pixelated';
	element.style.pointerEvents = 'none';
	element.style.userSelect = 'none';

	return element;
};

var decorateTerm = exports.decorateTerm = function decorateTerm(Term, _ref) {
	var React = _ref.React;

	return function (_React$Component) {
		_inherits(_class2, _React$Component);

		function _class2() {
			var _ref2;

			var _temp, _this, _ret;

			_classCallCheck(this, _class2);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref2, [this].concat(args))), _this), _this.background = function (term) {
				if (term) {
					var container = generateElementForContainer();
					var image = generateElementForImage();

					container.appendChild(image);

					term.termRef.appendChild(container);
				}
			}, _this.onDecorated = function (term) {
				_this.background(term);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(_class2, [{
			key: 'render',
			value: function render() {
				var props = _extends({}, this.props, {
					onDecorated: this.onDecorated,
					onCursorMove: function onCursorMove() {}
				});

				return React.createElement(Term, props);
			}
		}]);

		return _class2;
	}(React.Component);
};

var decorateConfig = exports.decorateConfig = function decorateConfig(config) {
	return _extends({}, config, {
		backgroundColor: (0, _Color2.default)('#000').alpha(0.5).toString()
	});
};
