const apiKey = '0dd05497-a74a-4ae1-a87e-b6651b97ce4e';
const url = `https://api.goperigon.com/v1/all?apiKey=0dd05497-a74a-4ae1-a87e-b6651b97ce4e&from=2023-05-10&country=gb&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&q=inflation AND prices`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const newsfeedContainer = document.getElementById('newsfeed');
    data.articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add('article');
      const titleNode = document.createElement('h2');
      titleNode.innerText = article.title;
      const descriptionNode = document.createElement('p');
      descriptionNode.innerText = article.description;
      const linkNode = document.createElement('a');
      linkNode.href = article.url;
      linkNode.target = '_blank';
      linkNode.innerText = 'Read More';
      articleDiv.appendChild(titleNode);
      articleDiv.appendChild(descriptionNode);
      articleDiv.appendChild(linkNode);
      newsfeedContainer.appendChild(articleDiv);
    });
  })
  .catch(error => {
    console.error(error);
  });