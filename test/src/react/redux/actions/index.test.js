import { startGame } from '../../../../../src/react/redux/actions';

describe('redux actions', () => {
    describe('startGame', () => {
        it('should be a function', () => {
            expect(typeof startGame).toBe('function');
        });
    });
});