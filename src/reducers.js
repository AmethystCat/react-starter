export function add_test(state = {}, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_TEST':
			return {
				...state,
				action.text
			};
		default:
			return state;
	}
}