'use strict';

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			modal: false
		};
	},

	modalToggle: function modalToggle() {
		this.setState({ modal: !this.state.modal });
		console.log('hello');
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'button',
				{ className: 'place-order', onClick: this.modalToggle },
				React.createElement('span', { className: 'fa fa-shopping-cart' })
			),
			React.createElement(Modal, { onClick: this.modalToggle, status: this.state.modal })
		);
	}
});

var Modal = React.createClass({
	displayName: 'Modal',

	getDefaultProps: function getDefaultProps() {
		return {
			title: 'Ova Highchair',
			description:
				"From formula to fruits, your baby's got a lot of eating ahead. An Ova high chair is the right place for breakfast, lunch and dinner.",
			price: '€' + 89
		};
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'modal', 'data-status': this.props.status },
			React.createElement(
				'div',
				{ className: 'modal-left' },
				React.createElement('span', { className: 'price-tag' }, this.props.price)
			),
			React.createElement(
				'div',
				{ className: 'modal-right' },
				React.createElement('h2', null, this.props.title),
				React.createElement('p', null, this.props.description),
				React.createElement(
					'button',
					{ onClick: this.props.onClick, className: 'close' },
					React.createElement('span', { className: 'fa fa-close' })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));
