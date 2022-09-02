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
    console.log(catagories);
    catagories.forEach(element => {
        const newsBox= document.getElementById('news-box');
        const newsDiv= document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML=`
        <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        `
        newsBox.appendChild(newsDiv);
    });
}

loadCatagories();