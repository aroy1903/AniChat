import axios from 'axios';

export const uppercase = (name) => {
  let nameArr = name.split(' ');
  if (nameArr.length === 1) {
    let lowercase = name.toLowerCase();
    return lowercase[0].toUpperCase() + lowercase.substring(1);
  } else {
    let upperArr = nameArr.map((word) => {
      let lowercase = word.toLowerCase();
      return lowercase[0].toUpperCase() + lowercase.substring(1);
    });
    let finalword = upperArr.join(' ');
    return finalword;
  }
};

export const imageSrc = async (name) => {
  const res = await axios.get(
    `https://kitsu.io/api/edge/anime?filter[text]=${name}`
  );
  const data = await res.data;
  const animeSrc = data.data[0].attributes;
  const { posterImage } = animeSrc;

  return posterImage.tiny;
};
