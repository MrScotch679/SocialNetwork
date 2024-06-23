/* eslint-disable @typescript-eslint/no-unused-vars */
export const className = (
	cls: string,
	mods?: Record<string, boolean | string>,
	additional?: string[]
) => {
	let classes = [cls]

	if (mods) {
		const modsToAdd = Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key, _]) => key)

		classes = classes.concat(modsToAdd)
	}

	if (additional) {
		classes = classes.concat(additional)
	}

	return classes.join(' ')
}
