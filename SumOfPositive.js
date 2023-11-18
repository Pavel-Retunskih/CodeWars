function positiveSum(arr) {
    let out = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        out+=arr[i]
      }
    }
    return out;
}