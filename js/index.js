const loadCatagories= async()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`;
    const res= await fetch(url);
    const data= await res.json();
    displayCatagories(data.data.news_category);
}

const displayCatagories=(allnews)=>{
    allnews.map(news=> {
        const catagories= document.getElementById('catagoris');
        const catagoriesDiv= document.createElement('div');
        catagoriesDiv.classList.add('col');
        catagoriesDiv.innerHTML=`
        <p onclick="loadData(${news.category_id})">${news.category_name}</p>
        `
        catagories.appendChild(catagoriesDiv);
    });
}


const loadData= async (id)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res= await fetch(url);
    const data= await res.json();
    displayData(data.data);
}
const displayData=(catagories)=>{
    // console.log(catagories);
    catagories.forEach(element => {
        console.log(element);

        const newsBox= document.getElementById('news-box');
        const newsDiv= document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML=`
        <div class="card">
        <img src="${element.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.details.slice(0,200)}...</p>
          <div>
          <img src="${element.author.img}" class=" w-25 rounded-circle">
          <span>${element.author.name? element.author.name:'No name Found'}</span>

          <span class="ms-5"> views:${element.total_view?element.total_view:'No views found'}</span>
          </div>
        </div>
        `
        newsBox.appendChild(newsDiv);
    });
}

loadCatagories();