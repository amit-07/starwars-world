export const getCharacters = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getCollections = async (urls: string[]) => {
    try {
        const data = await Promise.all(urls.map(url => fetch(url)));
        const ext = await Promise.all(data.map(res => res.json()));
        return ext
      } catch (err) {
        console.log(err);
      }
}
