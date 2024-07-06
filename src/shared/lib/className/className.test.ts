import { className } from './className'

describe('className', () => {
	it('should return class name', () => {
		expect(className('test')).toBe('test')
	})
})
