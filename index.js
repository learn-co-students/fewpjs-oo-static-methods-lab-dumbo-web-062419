class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfStrings = string.split(" ")
    for ( let i = 0; i < arrayOfStrings.length; i++ ) {
      if ( i == 0 ) {
        result.push(this.capitalize(arrayOfStrings[i]))
      } else {
        if (exceptions.includes( arrayOfStrings[ i ] ) ) {
          result.push( arrayOfStrings[ i ] )
        } else {
          result.push( this.capitalize( arrayOfStrings[ i ] ) )
        }
      }

    }
    return result.join(" ");
  }

}
