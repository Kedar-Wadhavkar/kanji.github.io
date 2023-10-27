let playlistData;

playlistData = [
{
"id":"1001001001",
"name":"Gita Chapter1 Verse1",
"tags":"vyasbhagwadgitaverse1chapter1geeta",
"duration":"02:36",
"lyrics":"",
"author":"Ved Vyaas",
"info":"text"
},

{
"id":"1001001002",
"name":"Gita Chapter1 Verse2",
"tags":"",
"duration":"05:08",
"lyrics":"",
"author":"Ved Vyaas",
"info":"text"
},

{
"id":"1001001003",
"name":"Gita Chapter1 Verse3",
"tags":"",
"duration":"03:44",
"lyrics":"",
"author":"Ved Vyaas",
"info":"text"
},

{
"id":"1001001004",
"name":"Gita Chapter1 Verse4",
"tags":"",
"duration":"02:58",
"lyrics":"",
"author":"Ved Vyaas",
"info":"text"
},

{
"id":"1001001005",
"name":"Gita Chapter1 Verse5",
"tags":"",
"duration":"07:49",
"lyrics":"",
"author":"Ved Vyaas",
"info":"text"
},

{
"id":"1002000000",
"name":"Shiv Tandav Stotra",
"tags":"shivtandavstotraravan",
"duration":"10:06",
"lyrics":`
जटाटवीगलज्जलप्रवाहपावितस्थले <br>
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् । <br>
डमड्डमड्डमड्डमन्निनादवड्डमर्वयं <br>
चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥१॥ <br>
<br>
जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी_ <br>
विलोलवीचिवल्लरीविराजमानमूर्धनि । <br>
धगद्धगद्धगज्जलल्ललाटपट्टपावके <br>
किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम ॥२॥ <br>
<br>
धराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर <br>
स्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे । <br>
कृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि <br>
क्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि ॥३॥ <br>
<br>
जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा <br>
कदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे । <br>
मदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे <br>
मनो विनोदमद्‍भुतं बिभर्तु भूतभर्तरि ॥४॥ <br>
`,
"author":"Dashanand Ravan",
"info":"stotra"
},

{
  "id":"1021000000",
  "name":"गणपती अथर्वशीर्ष",
  "tags":"ganpatiatharvashirsha",
  "duration":"02:40",
  "lyrics":"",
  "author":"Ved Vyaas",
  "info":"stotra"
}

];


var filteredListSearchResult = [];

function searchFun(){

        var filter = document.getElementById('myInput').value.toUpperCase();
        // var filter = document.getElementById('myInput').value;
  searchResultContainer = document.querySelector("#searchResults");
  searchResultContainer.style.display = "block";

  if (filter.length > 0){

    for (i = 0; i < Object.keys(playlistData).length; i++){

      if (playlistData[i].tags.toUpperCase().includes(filter)) {
      
        if (!filteredListSearchResult.includes(playlistData[i].id)){
        
          if (playlistData[i].info == "stotra"){
            var searchResult = document.querySelector("[findThis='" + playlistData[i].id + "']");
            var cloneSearchResult = searchResult.cloneNode(true);
            searchResultContainer.querySelector("#myTable").appendChild(cloneSearchResult);
            filteredListSearchResult.push(playlistData[i].id);
          };
        };
      }
      else{
        if (filteredListSearchResult.includes(playlistData[i].id)){
          filteredListSearchResult = filteredListSearchResult.filter(item => item !== playlistData[i].id);
          searchResultContainer.querySelector("[findThis='" + playlistData[i].id + "']").remove();
        };
      };
    };
  }
  else{
    filteredListSearchResult = [];
    var parent = searchResultContainer.querySelector("#myTable")
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    };
  };

};

function focusOff(){
  var filter = document.getElementById('myInput').value.toUpperCase();

  if (filter.length == 0){
    document.querySelector("#searchResults").style.display = "";
    document.querySelector("#myInput").style.border = "none";
  }
  else{
    document.querySelector("#myInput").style.border = "2px solid #2dcac2";
  };

};

function focusOn(){

  document.querySelector("#myInput").style.border = "none";
  document.querySelector("#searchResults").style.display = "block";

};



