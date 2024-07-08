// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.split(' ').join('').split('').map((x) => x.toLowerCase())
    original = original.split(' ').join('').split('').map((x) => x.toLowerCase())
    
    if (test.length != original.length) return false
    
    while(test.length || original.length){
      console.log('I AM HERE')
      if (original.includes(test[0]))
        {
          const index = original.indexOf(test[0])
          original = original.slice(0, index).concat(original.slice(index + 1))
          test.shift()
        }
      else{
        return false
      }
    }
    return test.length == original.length
  };
  