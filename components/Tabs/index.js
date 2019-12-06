// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    // console.log(res.data.topics);
    res.data.topics.forEach(ele => {
      const tabsHome = document.querySelector(".topics");
      tabsHome.appendChild(makeTabs(ele));
      // console.log(ele);
    });
  })
  .catch(err => {
    console.log(err);
  });

function makeTabs(data) {
  //----------create Elements----\\
  const tab = document.createElement("div"),
    cont = document.createElement("p");

  //-----------append-----------\\
  tab.appendChild(cont);
  //----------add Classes-------\\
  cont.classList.add("tab");
  //---------add Data----------\\
  cont.textContent = data;
  return tab;
}
