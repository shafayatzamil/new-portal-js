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
    const foundCatagories= document.getElementById('found-catagories');
    const foundMessage= document.getElementById('found-message');
    if(catagories.length!=0){
        console.log('wow');
        foundCatagories.classList.remove('d-none');
        foundMessage.innerText=`${catagories.length} result are fround`;
    }else{
        foundCatagories.classList.remove('d-none');
        foundMessage.innerText=`${catagories.length} result are fround`;

    }

    catagories.forEach(element => {
        // console.log(element);

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
          <div class="d-flex">
          <img src="${element.author.img}" class=" w-25 rounded-circle">
          </div>
          <span>${element.author.name? element.author.name:'No name Found'}</span>

          <span class="ms-5">  <i class="fa-sharp fa-solid fa-eye"></i> views:${element.total_view?element.total_view:'No views found'}</span>

          <button  onclick="loadModal('${element._id}')"type="button" class="btn btn-info ms-5" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">Show more</button>
          </div>
        </div> 
        `
        newsBox.appendChild(newsDiv);
    });
}


const loadModal= async(id)=>{
    const url=`https://openapi.programming-hero.com/api/news/${id}`;
    const res= await fetch(url);
    const data= await res.json();
    displayModal(data.data[0]);
}

const displayModal=(modal)=>{

    console.log(modal);
    const modalTitle= document.getElementById('newsDetailsModalLabel');
    modalTitle.innerText= modal.title;

    const modalBody= document.getElementById('modal-body');
    modalBody.innerHTML=`
    <img src="${modal.thumbnail_url}" class="img-fluid">
    <p> ${modal.details}</p>

    
    `
    
}
loadCatagories();