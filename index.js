const url = "https://api.alquran.cloud/v1/quran/en.asad";

let response = fetch(url);

response.then((v) => {
    return v.json();
}).then((sura) => {
    console.log(sura);
    ihtml = "";
    for (i=0;i<sura.data.surahs.length;i++) {
        ihtml += `
        <div class="cards" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title" style="float: right;">${sura.data.surahs[i].name}</h5>
            <h5 class="card-title" >${sura.data.surahs[i].number}.  ${sura.data.surahs[i].englishName}</h5>
            <p class="card-title" style="margin-left:1rem;" >${sura.data.surahs[i].englishNameTranslation}</p>
            <a href="All_surahs/sura${i+1}.html" style="margin-left:0.5rem ;padding:0.25rem 2.5rem 0.25rem 2.5rem; background:rgb(187, 187, 20); border-color:olive ;" class="btn btn-primary" >Read Translation</a>
        </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml;
    
})

