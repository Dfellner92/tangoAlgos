



const longestString = (arr) => {
    let longest = ''
    let finalArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= longest.length) {
        longest = arr[i]
        finalArr.push(longest)
        
      } else {
        longest = longest
      }
    }
    if (finalArr.length > 1) {
      return finalArr
    } else {
      return longest
    }
  }
  
  
  console.log(longestString(["apple", "thre", "four"]))