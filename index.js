class Formatter {
  //add static methods here
  // Credits: https://dzone.com/articles/how-to-capitalize-the-first-letter-of-a-string-in
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    const capFirstLetter = string.charAt(0).toUpperCase()
    const splitWordsArray = string.split(" ")
    const firstWordCapped = capFirstLetter + splitWordsArray[0].slice(1)
    const capSplitWordsArray = []
    const dontCapTheseWordsArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let ans

    splitWordsArray.forEach(word => {
      let cappedWord
      if (!dontCapTheseWordsArray.includes(word)){
        // capSplitWordsArray.push(Formatter.capitalize(word))
        cappedWord = Formatter.capitalize(word)
      } else {
        cappedWord = word
      }
      capSplitWordsArray.push(cappedWord)
    })

    capSplitWordsArray[0] = firstWordCapped

    ans = capSplitWordsArray.join(" ")

    console.log(ans);
    return ans;
  }
}

// console.log(Formatter.capitalize("t capitalize this"))
// console.log(Formatter.sanitize("(C;l%^ea#n-'this' up now)"));
console.log(Formatter.titleize("the capitalize a word and from now on after"));
