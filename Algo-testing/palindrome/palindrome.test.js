const palindrome = require('./palindrome');

describe('Palindrome', () => {
    it('should be a func', () => {
        expect(typeof palindrome).toEqual('function');
    });
    
    it('should return a bool', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
    });

    it('should return true if is a palindrome', () => {
        expect(palindrome('owo')).toBeTruthy();
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('rotator')).toBeTruthy();
    });

    it('should return false if is not a palindrome', () => {
        expect(palindrome('DM')).toBeFalsy();
        expect(palindrome('world')).toBeFalsy();
        expect(palindrome('hello')).toBeFalsy();
    });
    
    it('should return false if includes spaces', () => {
        expect(palindrome(' wow')).toBeFalsy();
        expect(palindrome('world ')).toBeFalsy();
        expect(palindrome(' hello')).toBeFalsy();
    });

});