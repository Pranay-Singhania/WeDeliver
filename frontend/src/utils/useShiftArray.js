const useShiftArray = (array, times) => {
  if (array !== undefined) {
    const length = array.length;
    const shiftedElements = array.slice(length - times).concat(array.slice(0, length - times));
    return shiftedElements;
  }
};

export default useShiftArray;
