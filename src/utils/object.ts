export const dictionary = (val: string, options: { text: string; value: unknown }[]) => {
	return options.find((v) => v.value === val)?.text ?? val;
};
