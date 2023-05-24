function redirect(url) {
	if (typeof(url) !== "string") {
		return {
			errors: [
				{
					text:"Input should be a string",
					code: 3
				}
			],
			output: {
				text: "ERROR: Input should be a string",
				code: 43
			}
		};
	}
	window.location.href = url;
	return {
		errors: [

		],
		output: {
			text: "redirected to " + url,
			code: 0
		}
	};
}