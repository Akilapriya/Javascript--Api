"use strict";

// let postUrl = "https://jsonplaceholder.typicode.com/posts";

// const cardsContainer = document.querySelector("#cards-container");

//  let renderDatas = () => {

//   let output = fetch(postUrl).then((data) => data.json());

//   output.then((posts) => {
//     console.log(posts);
//     posts.forEach((element) => {
//       const div = document.createElement("div");
//       const image = document.createElement("img");
//       const title = document.createElement("h3");
//       const userId = document.createElement("h2");
//       const body = document.createElement("p");

//       div.classList = "card";
//       image.classList = "card-img";
//       userId.classList = "card-id";
//       title.classList = "card-title";
//       body.classList = "card-body";

//       image.src =
//         "https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/coworkers-first-time-meeting.jpg";
//       userId.innerText = `UserId: ${element.userId}`;
//       title.innerText = `Title: ${element.title}`;
//       body.innerText = `Description: ${element.body}`;

//       div.appendChild(image);
//       div.appendChild(userId);
//       div.appendChild(title);
//       div.appendChild(body);
//       cardsContainer.appendChild(div);
//     });

//   });
// }
// renderDatas();

let postUrl = "https://jsonplaceholder.typicode.com/posts";

const cardsContainer = document.querySelector(".cards-Container");
let items = "";
let renderDatas = () => {
  let output = fetch(postUrl).then((data) => data.json());

  output.then((posts) => {
    console.log(posts);
    var items = "";
    posts.forEach((element) => {
      items += `
             <div class="card mb-4" style="col-md-12 width: 18rem;">
                 <div class="card-body d-inline-flex flex-row"  >
                 <div class="d-flex align-items-flex-start " >
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style="height:50px"  class="m-3 rounded-circle"  width="50" alt="User" />  
                      <div class="m-3">                                 
                       <h5 class="card-id mb-2"  style="color:red" >${element.userId} </h5>                
                        <h5 class="card-title " style="color:green">${element.title}</h5>                                            
                         <p  class="card-text" >${element.body}</p> 
                         </div>
                         <span ><i class="fa fa-eye mr-3" ></i> 19</span>
                         <span ><i class="fa fa-comment " ></i> 6</span>
                   </div>
                 </div>
             </div> 
       `;
    });
    cardsContainer.innerHTML = items;
  });
};
renderDatas();
