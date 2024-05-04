function translatePigLatin(str) {
  const vowels = ['a','e','i','o','u']
  if (vowels.includes(str[0])){
    // If the first letter is a consonant, add "ay" to end of word
    let newStr=str+"way";
    console.log(`The pig latin translation for "${newStr}" would be: ${newStr}`);
    return newStr;
    } else {
      // Otherwise move all letters after initial one and append them with an ay at the end
      var regex=/^([^aeiou]*)([aeiou].*)$/gi ;
      var matchesArray =regex.exec(str);
      var prefix='';
      while ((matchesArray!= null)) {
        prefix += matchesArray[1];
        break;
        };
        suffix="";

  return str;
}

translatePigLatin("consonant");