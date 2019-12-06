// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>

//   <div class="author">

//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>

//     <span>By {authors name}</span>

//   </div> author div end
// </div> -card div end
//
// Create a card for each of the articles and add the card to the DOM.

artArray = [];

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    console.log(res);

    for (item in res.data.articles) {
      console.log(item);
      artArray.push(item);
    }
    Iterator(res.data.articles.bootstrap);
    Iterator(res.data.articles.javascript);
    Iterator(res.data.articles.technology);
    Iterator(res.data.articles.jquery);
    Iterator(res.data.articles.node);

    console.log();
  })

  .catch(err => {
    console.log(err);
  });

function MakeCards(data) {
  //------------make elements--------\\
  const card = document.createElement("div"),
    headLine = document.createElement("div"),
    headLineText = document.createElement("p"),
    authorDiv = document.createElement("div"),
    imageContainer = document.createElement("div"),
    img = document.createElement("img"),
    authorName = document.createElement("span");
  //--------------append------------\\
  card.append(headLine, authorDiv);
  headLine.appendChild(headLineText);
  authorDiv.append(imageContainer, authorName);
  imageContainer.appendChild(img);
  //------------clases-------------\\
  card.classList.add("card");
  headLine.classList.add("headline");
  authorDiv.classList.add("author");
  imageContainer.classList.add("img-container");
  //------------add data----------\\\
  img.setAttribute("src", data.authorPhoto);
  headLineText.textContent = data.headline;
  authorName.textContent = data.authorName;
  return card;
}

function Iterator(arr) {
  arr.forEach(ele => {
    const home = document.querySelector(".cards-container");
    home.appendChild(MakeCards(ele));
  });
}
