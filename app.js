const phrase = 'letsgosurfingnoweverybodyslearninghow';
const words = ['how', 'surfing', 'learning', 'now', 'go', 'lets', 'everybodys'];
let found = false;

const recursive = (progress) => {
  console.log(progress);
  if (progress === phrase) found = true;
  if (phrase.indexOf(progress) === 0) {
    words.forEach((word) => {
      if (!found) recursive(progress + word)
    })
  }
  return found;
}

console.log(recursive(''));
