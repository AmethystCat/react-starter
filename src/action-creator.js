const add_name = (text) => {
	return {
		type: 'ADD_NAME',
		text
	};
};

const add_list = (item) => {
	return {
		type: 'ADD_LIST',
		item
	};
};

const add_attr = (attr) => {
	return {
		type: 'ADD_NAME',
		attr
	};
};

export default {add_name, add_list, add_attr};