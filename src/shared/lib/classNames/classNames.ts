/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const classNames = (
	cls: string,
	mods?: Record<string, boolean | string>,
	additional?: any[]
) => {
	let classes = [cls]

	if (mods) {
		const modsToAdd = Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key, _]) => key)

		classes = classes.concat(modsToAdd)
	}

	if (additional) {
		for (const add of additional) {
			if (add) {
				classes.push(add)
			}
		}
	}

	return classes.join(' ')
}
