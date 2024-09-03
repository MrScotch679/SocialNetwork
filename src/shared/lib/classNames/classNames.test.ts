import { className } from './classNames'

describe('className', () => {
	it('should return class name', () => {
		expect(className('test')).toBe('test')
	})
})
