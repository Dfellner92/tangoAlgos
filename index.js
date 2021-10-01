const getRandomDog = async () => {
  const dog = await fetch("https://dog.ceo/api/breeds/image/random");
  dogToJSON(dog);
};

const dogToJSON = async (dog) => {
  let objDog = await dog.json();
  console.log(objDog);
};

getRandomDog();

const longestString = (arr) => {
  let longest = "";
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longest.length) {
      longest = arr[i];
      finalArr.push(longest);
    } else {
      longest = longest;
    }
  }
  if (finalArr.length > 1) {
    return finalArr;
  } else {
    return longest;
  }
};

console.log(longestString(["apple", "thre", "four"]));
