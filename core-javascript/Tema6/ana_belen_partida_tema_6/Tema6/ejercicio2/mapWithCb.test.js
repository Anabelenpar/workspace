const { mapWithCb } = require('./mapWithCb.js');

describe('mapWithCb', () => {
    
    let mockCallback;
    let exampleArray;

    beforeEach(() => {
        mockCallback = jest.fn();
        exampleArray = [1, 2, 3];
    });

    it('throws an error if first argument is not an array', () => {
        expect(() => mapWithCb('notAnArray', jest.fn())).toThrow(Error);
    });
    
    it('throws an error if second argument is not a function', () => {
        expect(() => mapWithCb(exampleArray, "notAFunction")).toThrow(Error);
    });
    
    it('calls the given function at least once', () => {
        mapWithCb(exampleArray, mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });
  
    it('calls the given function a number of times equal to the length of the given array', () => {
        mapWithCb(exampleArray, mockCallback);
        expect(mockCallback).toHaveBeenCalledTimes(exampleArray.length);
    });
  
    it('calls the given function with any one item from the given array', () => {
        mapWithCb(exampleArray, mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(exampleArray[0]);
    });
  
    it('calls the given function a second time with the second item in the given array', () => {
        mapWithCb(exampleArray, mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(exampleArray[1]);
    });
  
    it('calls the given function a final time with the final item in the given array', () => {
        mapWithCb(exampleArray, mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(exampleArray[exampleArray.length - 1]);
    });

  });