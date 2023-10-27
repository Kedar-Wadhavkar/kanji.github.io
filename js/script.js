window.onload = function(e){

        const rwList = document.querySelectorAll(".row");
        for (const row of rwList) {

                let butList = row.getElementsByTagName('button');
                for (const but of butList) {

                        but.classList.add("sel");
                }
        }

        const selects = Array.from(document.getElementsByClassName('sel'));

        selects.forEach(sel => {
                sel.addEventListener('touchstart', function handleClick() {                        
                        sel.setAttribute('style', 'transform: scale(0.94);');
                        setTimeout(() => {sel.setAttribute('style', 'transform: scale(1);');}, 500);
                });        
                sel.addEventListener('touchend', function handleClick() {                        
                        sel.setAttribute('style', 'transform: scale(1);');
                });
        });


        var playlistLoop = localStorage.getItem("playlistLoop");

        if (parseInt(playlistLoop) === 1){
                document.querySelector(".loopPlaylistBut").style.opacity = "0.8";
        }
        else{
                document.querySelector(".loopPlaylistBut").style.opacity = "0.3";
        };


        var currentAudioLoop = localStorage.getItem("currentAudioLoop");

        if (parseInt(currentAudioLoop) === 1){
                document.querySelector(".loopNowAud").style.opacity = "1";
        }
        else{
                document.querySelector(".loopNowAud").style.opacity = "0.3";
        };


        
        document.querySelector(".lyricsCont").style.display = "none";
        document.querySelector(".lyricsBut").style.display = "";
        document.querySelector(".lyricsBut").style.opacity = "0.3";
        document.querySelector("#listWithHandle").style.top = "12.1rem";

        
        var prevPlaylist = JSON.parse(localStorage.getItem("prevPlaylist"));
        if((prevPlaylist != null) && (prevPlaylist.length > 0)){document.querySelector(".prevPlayBut").style.opacity = "0.8";}
        else {document.querySelector(".prevPlayBut").style.opacity = "0.3";}


        // create playing playlist audio divs

        var playlist = JSON.parse(localStorage.getItem("playlist"));

        if((playlist != null) && (playlist.length > 0)){
                
                if (playlist.length === 1) {document.querySelector(".nextPlayBut").style.opacity = "0.3";}
                else {document.querySelector(".nextPlayBut").style.opacity = "0.8";}

                const lyricswin = document.querySelector(".lyricsWindow");
                lyricswin.innerHTML = playlistData.filter(a => a.id == playlist[0])[0].lyrics;

                const currAudName = document.querySelector(".currAudName");
                currAudName.innerHTML = playlistData.filter(a => a.id == playlist[0])[0].name;
                
                const grpList = document.querySelector(".playingPlaylistItems");

                for (const id of playlist){
        
                        const div = document.createElement("div");
                        div.id = id;
                        div.classList.add("list-group-item-common");
                        grpList.appendChild(div);
        
                        const table = document.createElement("table");
                        div.appendChild(table);

                        const tr = document.createElement("tr");
                        table.appendChild(tr);

        
                        const td1 = document.createElement("td");
                        tr.appendChild(td1);
        
                        const playButton = document.createElement("button");
                        playButton.classList.add("playBut");
                        playButton.value = id;
                        playButton.addEventListener("click", whenPlayed, false);
                        playButton.paramId = id;
                        td1.appendChild(playButton);

                        const imgPlay = document.createElement("img");
                        imgPlay.src = "css/media/play.png";
                        playButton.appendChild(imgPlay);


                        const td2 = document.createElement("td");
                        tr.appendChild(td2);

                        const spanAudInfo = document.createElement("span");
                        spanAudInfo.classList.add("audInfo");
                        td2.appendChild(spanAudInfo);

                        const divAudName = document.createElement("div");
                        divAudName.classList.add("audName");
                        divAudName.innerHTML = playlistData.filter(a => a.id == id)[0].name;
                        spanAudInfo.appendChild(divAudName);
        
                        const crAudio = document.createElement("audio");
                        crAudio.src = 'css/media/' + id + '.mp3';
                        crAudio.type = "audio/mp3";
                        crAudio.controls = false;
                        crAudio.controlsList = "nodownload noplaybackrate"; //
                        crAudio.paramAudId = id;
                        spanAudInfo.appendChild(crAudio);
        
                        const divAudDur = document.createElement("div");
                        divAudDur.classList.add("audDur");
                        divAudDur.innerHTML = playlistData.filter(a => a.id == id)[0].duration;
                        spanAudInfo.appendChild(divAudDur);


                        const td3 = document.createElement("td");
                        tr.appendChild(td3);
        
                        const closeButton = document.createElement("button");
                        closeButton.classList.add("closeBut");
                        closeButton.value = id;
                        closeButton.addEventListener("click", remFunction, false);
                        closeButton.paramId = id;
                        td3.appendChild(closeButton);

                        const imgClose = document.createElement("img");
                        imgClose.src = "css/media/close.png";
                        closeButton.appendChild(imgClose);


                        const td4 = document.createElement("td");
                        tr.appendChild(td4);

                        const spanSort = document.createElement("span");
                        spanSort.classList.add("my-handle");
                        spanSort.setAttribute('aria-hidden', 'true');
                        td4.appendChild(spanSort);

                        const imgSort = document.createElement("img");
                        imgSort.src = "css/media/sort.png";
                        spanSort.appendChild(imgSort);

                }

                var parent = document.getElementById(playlist[0]);
                var audio = parent.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1];
                audio.controls = true;

                var nowAud = document.getElementById("hereAud");
                var cloneAud = audio.cloneNode(true);
                nowAud.appendChild(cloneAud);
                cloneAud.id = "cloneAud";
                cloneAud.controls = true;

                const divAudRemTime = document.createElement("div");
                divAudRemTime.classList.add("timeRem");
                divAudRemTime.innerHTML = parent.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2].innerHTML;
                nowAud.appendChild(divAudRemTime);                
                
                var transAudio = document.getElementById("cloneAud");
                transAudio.removeEventListener("play", whenPlayed, false);
                
                parent.style.display = "none";

                transAudio.addEventListener("ended", delParent);
                transAudio.addEventListener("ended", playNext);
        
        }
        else{
                document.querySelector(".playPlaylist").style.opacity = "0.3";
                document.querySelector(".playNowAud").style.opacity = "0.3";
                document.querySelector(".nextPlayBut").style.opacity = "0.3";
                document.querySelector(".clearPlaylistBut").style.opacity = "0.3";
                document.querySelector(".prevFifBut").style.opacity = "0.3";
                document.querySelector(".nextFifBut").style.opacity = "0.3";
                document.querySelector(".closeNowAud").style.opacity = "0.3";
                document.querySelector(".clearPlaylistBut").style.opacity = "0.3";
                document.querySelector(".lyricsBut").style.display = "none";
        };

        sortIt("listWithHandle");

        var savedPlaylistsDictionary = JSON.parse(localStorage.getItem("savedPlaylistsDictionary"));
        
        if((savedPlaylistsDictionary != null)){

                for (const thisSavedPlaylist of savedPlaylistsDictionary["savedPlaylistsList"]){

                                // create face divs of saved playlists
                                const savedPlaylistsFaces = document.querySelector(".showPlaylistSongs");

                                const tableMain = document.createElement("table");
                                tableMain.classList.add("playlistTable");
                                tableMain.paramSavedplaylistName = savedPlaylistsDictionary[thisSavedPlaylist]["Name"];
                                tableMain.paramSavedplaylistId = thisSavedPlaylist;
                                tableMain.addEventListener("click", openModal, false);
                                tableMain.addEventListener("click", showPlaylists, false);
                                savedPlaylistsFaces.appendChild(tableMain);

                                const tr11 = document.createElement("tr");
                                tableMain.appendChild(tr11);

                                const td11 = document.createElement("td");
                                td11.rowSpan = 2;
                                tr11.appendChild(td11);
                                const but11 = document.createElement("button");
                                but11.classList.add("playlistBullets");
                                but11.innerHTML = savedPlaylistsDictionary[thisSavedPlaylist]["Name"].charAt(0);
                                td11.appendChild(but11);

                                const td12 = document.createElement("td");
                                td12.innerHTML = savedPlaylistsDictionary[thisSavedPlaylist]["Name"];
                                tr11.appendChild(td12);

                                const tr12 = document.createElement("tr");
                                tableMain.appendChild(tr12);
                                
                                const td21 = document.createElement("td");
                                td21.classList.add("playlistDescription");
                                td21.innerHTML = savedPlaylistsDictionary[thisSavedPlaylist]["Description"];
                                tr12.appendChild(td21);

                                // create div to display audio divs
                                const showSavedPlaylistAud = document.querySelector(".showPlaylistsHere");
                                const hiderest = document.createElement("div");
                                hiderest.classList.add("hideRest");
                                hiderest.setAttribute("audfromplaylistid", thisSavedPlaylist);
                                hiderest.setAttribute("mutationhere", "");
                                showSavedPlaylistAud.appendChild(hiderest);

                                // create playlist divs of saved playlists
                                var playlistSaved = savedPlaylistsDictionary[thisSavedPlaylist]["SavedListAudList"];

                                if((playlistSaved != null) && (playlistSaved.length > 0)){ 
                                        
                                        const grpList = document.querySelector("[audFromPlaylistId=" + thisSavedPlaylist + "]");

                                        for (const id of playlistSaved){
                                
                                                const div = document.createElement("div");
                                                div.id = id;
                                                div.classList.add("list-group-item-common");
                                                grpList.appendChild(div);
                                
                                                const table = document.createElement("table");
                                                div.appendChild(table);

                                                const tr = document.createElement("tr");
                                                table.appendChild(tr);


                                                const td2 = document.createElement("td");
                                                tr.appendChild(td2);

                                                const spanAudInfo = document.createElement("span");
                                                spanAudInfo.classList.add("audInfo");
                                                td2.appendChild(spanAudInfo);

                                                const divAudName = document.createElement("div");
                                                divAudName.classList.add("audName");
                                                divAudName.innerHTML = playlistData.filter(a => a.id == id)[0].name;
                                                spanAudInfo.appendChild(divAudName);
                                
                                                const crAudio = document.createElement("audio");
                                                crAudio.src = 'css/media/' + id + '.mp3';
                                                crAudio.type = "audio/mp3";
                                                crAudio.controls = false;
                                                crAudio.controlsList = "nodownload noplaybackrate";
                                                crAudio.paramAudId = id;
                                                spanAudInfo.appendChild(crAudio);
                                
                                                const divAudDur = document.createElement("div");
                                                divAudDur.classList.add("audDur");
                                                divAudDur.innerHTML = playlistData.filter(a => a.id == id)[0].duration;
                                                spanAudInfo.appendChild(divAudDur);


                                                const td3 = document.createElement("td");
                                                tr.appendChild(td3);
                                
                                                const closeButton = document.createElement("button");
                                                closeButton.classList.add("closeBut");
                                                closeButton.value = id;
                                                closeButton.addEventListener("click", remFunction2, false);
                                                closeButton.paramId = id;
                                                closeButton.paramCurrentSavedPlaylistId = thisSavedPlaylist;
                                                td3.appendChild(closeButton);

                                                const imgClose = document.createElement("img");
                                                imgClose.src = "css/media/close.png";
                                                closeButton.appendChild(imgClose);


                                                const td4 = document.createElement("td");
                                                tr.appendChild(td4);

                                                const spanSort = document.createElement("span");
                                                spanSort.classList.add("my-handle");
                                                spanSort.setAttribute('aria-hidden', 'true');
                                                td4.appendChild(spanSort);

                                                const imgSort = document.createElement("img");
                                                imgSort.src = "css/media/sort.png";
                                                spanSort.appendChild(imgSort);

                                        };

                                };

                                const playlistOptionToSave = document.querySelector(".saveToPlaylist");
                                const addToPlaylistBut = document.createElement("button");
                                addToPlaylistBut.value = thisSavedPlaylist;
                                addToPlaylistBut.innerHTML = savedPlaylistsDictionary[thisSavedPlaylist]["Name"];
                                addToPlaylistBut.paramPlaylistName = savedPlaylistsDictionary[thisSavedPlaylist]["Name"];
                                addToPlaylistBut.addEventListener("click", saveToThisPlaylist, false);
                                playlistOptionToSave.appendChild(addToPlaylistBut);
                };

        }
        else{
                savedPlaylistsDictionary = {
                        "savedPlaylistsList":[]
                }
                localStorage.setItem("savedPlaylistsDictionary", JSON.stringify(savedPlaylistsDictionary));
        };

};




let playlistStartState = 0;


function hideEvery() {

        const contList = document.querySelectorAll(".cont2");
        for (const con of contList) {
                con.style.display = "none";
        }
        
        const smallList = document.querySelectorAll(".small");
        for (const sm of smallList) {
                sm.classList.remove("smallload");
                sm.style.backgroundColor = "#111";
                sm.style.border = "";
        }
}

function unhide1(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        ele.style.border = "none";
        document.querySelector(".chap1").style.display = "block";
}

function unhide2(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        ele.style.border = "none";
        document.querySelector(".chap2").style.display = "block";
}

function unhide3(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap3").style.display = "block";
}

function unhide4(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap4").style.display = "block";
}

function unhide5(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap5").style.display = "block";
}

function unhide6(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap6").style.display = "block";
}

function unhide7(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap7").style.display = "block";
}

function unhide8(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap8").style.display = "block";
}

function unhide9(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap9").style.display = "block";
}

function unhide10(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap10").style.display = "block";
}

function unhide11(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap11").style.display = "block";
}

function unhide12(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap12").style.display = "block";
}

function unhide13(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap13").style.display = "block";
}

function unhide14(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap14").style.display = "block";
}

function unhide15(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap15").style.display = "block";
}

function unhide16(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap16").style.display = "block";
}

function unhide17(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap17").style.display = "block";
}

function unhide18(ele) {
        hideEvery();
        ele.style.backgroundColor = "#000";
        document.querySelector(".chap18").style.display = "block";
}



document.addEventListener('mouseup', function(e) {

        var det = document.querySelectorAll('#details1');
        det.forEach((det1) => {
                if (!det1.contains(e.target)) {
                        det1.removeAttribute("open");
                        det1.querySelector(".tog").style.display = "";
                        document.querySelector(".playlistOptionToSave").style.display = "";
                };
        });
        
        var elem = document.getElementById('speed');
        var topElem = document.querySelector(".playBackBut");
        if ((!elem.contains(e.target)) && (!topElem.contains(e.target))) {
                topElem.style.opacity = '';
                elem.style.display = '';
                plBack = 1;
        };

        var nav = document.querySelector('.navigation');
        if (!nav.contains(e.target)) {
                nav.style.width = "";
                document.querySelector(".bar").style.visibility = "";
                document.querySelector(".contBinder").style.visibility = "";
        };

});



// // search from specific element inner html
// const searchFun = () =>{

//         var filter = document.getElementById('myInput').value.toUpperCase();

//         var myTable = document.getElementById('myTable');
//         var trList = myTable.getElementsByTagName('tr');

//         for(const tr of trList){
        
//                 var td = tr.getElementsByTagName('td')[0];
//                 // var td2 = tr.getElementsByTagName('td')[1];

//                 if(td){//||td2){
//                         var textValue = td.textContent || td.innerHTML;
//                         // var textValue2 = td2.textContent || td2.innerHTML;

//                         if(textValue.indexOf(filter) > -1){
//                                 tr.style.display = "";
//                         }
//                         // else if(textValue2.toUpperCase().indexOf(filter) > -1){
//                         //         tr.style.display = "";
//                         // }
//                         else{
//                                 tr.style.display = "none";
//                         }
//                 }
//         }
// };



function refreshSaveToPlaylistOptions(savedPlaylistsDictionary){

        for (const thisSavedPlaylist of savedPlaylistsDictionary["savedPlaylistsList"]){
                const playlistOptionToSave = document.querySelector(".saveToPlaylist");                
                const addToPlaylistBut = document.createElement("button");
                addToPlaylistBut.value = thisSavedPlaylist;
                addToPlaylistBut.innerHTML = savedPlaylistsDictionary[thisSavedPlaylist]["Name"];
                addToPlaylistBut.paramPlaylistName = savedPlaylistsDictionary[thisSavedPlaylist]["Name"];
                addToPlaylistBut.addEventListener("click", saveToThisPlaylist, false);
                playlistOptionToSave.appendChild(addToPlaylistBut);
        };

};


let nameOfAudToAdd;
let idOfAudToAdd;
let GMode;


function pushToPlaylist(aud){

        var mode;
        var audId = aud.value;
        var appendToParent;

        if (!aud.hasAttribute('mode')) {
                mode = aud.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].querySelector('[def="selectedMode"]').value;
                appendToParent = aud.parentElement.parentElement.parentElement.parentElement.parentElement;
        }
        else{
                appendToParent = aud.parentElement.parentElement.parentElement;

                if (aud.getAttribute('mode') == 'addSavedPlaylist') {
                        mode = "addSavedPlaylist";
                }
                else if (aud.getAttribute('mode') == 'addPlayingPlaylist') {
                        mode = "addPlayingPlaylist";
                }
                else if (aud.getAttribute('mode') == 'playNow') {
                        mode = "playNow";
                };
        };        

        switch (mode) {

                case "addSavedPlaylist":
                        idOfAudToAdd = audId;
                        nameOfAudToAdd = playlistData.filter(a => a.id == audId)[0].name;
                        var playlistOptionToSave = document.querySelector(".playlistOptionToSave");
                        $(playlistOptionToSave).appendTo(appendToParent);
                        playlistOptionToSave.style.display = "block";
                        // document.querySelector(".tog").style.display = "none";
                        aud.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.tog').style.display = "none";
                        break;

                case "addPlayingPlaylist":
                        addFunction(audId);
                        break;

                case "playNow":
                        addFunction(audId);
                        whenPlayed(audId);
        };
        
};


function saveToThisPlaylist(thisPlaylist){

        const changeAlert = document.querySelector(".savedMsgHere");
        const showThisHere = document.createElement("div");        
        changeAlert.appendChild(showThisHere);

        document.querySelector(".playlistOptionToSave").style.display = "";
        thisPlaylist.currentTarget.parentElement.parentElement.parentElement.querySelector('.tog').style.display = "";

        var savedPlaylistsDict = JSON.parse(localStorage.getItem("savedPlaylistsDictionary"));        
        savedPlayId = thisPlaylist.currentTarget.value;
        if (savedPlaylistsDict[savedPlayId]["SavedListAudList"].includes(parseInt(idOfAudToAdd))){
                showThisHere.innerHTML = '* ' + thisPlaylist.currentTarget.paramPlaylistName + ' already contains ' + nameOfAudToAdd;
        }
        else{
                savedPlaylistsDict[savedPlayId]["SavedListAudList"].push(parseInt(idOfAudToAdd));
                showThisHere.innerHTML = '* Saved ' + nameOfAudToAdd + ' to ' + thisPlaylist.currentTarget.paramPlaylistName;
                createSavedAudDiv(savedPlayId,parseInt(idOfAudToAdd));
        };
        localStorage.setItem("savedPlaylistsDictionary", JSON.stringify(savedPlaylistsDict));

        setTimeout(() => {showThisHere.remove();
                nameOfAudToAdd, idOfAudToAdd = "";
        }, 2000);

};


function createSavedAudDiv(thisSavedPlaylist, id){

        const grpList = document.querySelector("[audFromPlaylistId=" + thisSavedPlaylist + "]");

        const div = document.createElement("div");
        div.id = id;
        div.classList.add("list-group-item-common");
        grpList.appendChild(div);

        const table = document.createElement("table");
        div.appendChild(table);

        const tr = document.createElement("tr");
        table.appendChild(tr);


        const td2 = document.createElement("td");
        tr.appendChild(td2);

        const spanAudInfo = document.createElement("span");
        spanAudInfo.classList.add("audInfo");
        td2.appendChild(spanAudInfo);

        const divAudName = document.createElement("div");
        divAudName.classList.add("audName");
        divAudName.innerHTML = playlistData.filter(a => a.id == id)[0].name;
        spanAudInfo.appendChild(divAudName);

        const crAudio = document.createElement("audio");
        crAudio.src = 'css/media/' + id + '.mp3';
        crAudio.type = "audio/mp3";
        crAudio.controls = false;
        crAudio.controlsList = "nodownload noplaybackrate";
        crAudio.paramAudId = id;
        spanAudInfo.appendChild(crAudio);

        const divAudDur = document.createElement("div");
        divAudDur.classList.add("audDur");
        divAudDur.innerHTML = playlistData.filter(a => a.id == id)[0].duration;
        spanAudInfo.appendChild(divAudDur);


        const td3 = document.createElement("td");
        tr.appendChild(td3);

        const closeButton = document.createElement("button");
        closeButton.classList.add("closeBut");
        closeButton.value = id;
        closeButton.addEventListener("click", remFunction2, false);
        closeButton.paramId = id;
        closeButton.paramCurrentSavedPlaylistId = thisSavedPlaylist;
        td3.appendChild(closeButton);

        const imgClose = document.createElement("img");
        imgClose.src = "css/media/close.png";
        closeButton.appendChild(imgClose);


        const td4 = document.createElement("td");
        tr.appendChild(td4);

        const spanSort = document.createElement("span");
        spanSort.classList.add("my-handle");
        spanSort.setAttribute('aria-hidden', 'true');
        td4.appendChild(spanSort);

        const imgSort = document.createElement("img");
        imgSort.src = "css/media/sort.png";
        spanSort.appendChild(imgSort);

};



let lyricsState = 0;



// --------------- PLAYLIST SLIDER OUT VERTICAL ---------------------

const sliderPlaylistContainer = $(".mobile-slider-container");

function slideUp(w, expandDirection = false) {

        const playlistHt = screen.height - 60;
        const playlistBot = 100;

        if (w < playlistBot) w = playlistBot;
        else if (w > playlistHt) w = playlistHt;

        if (!expandDirection) 
                sliderPlaylistContainer.css({height: w.toString()+"px"});

        else {
                switch(expandDirection) {
                        case 1:
                                sliderPlaylistContainer.animate({height: playlistHt}, 250);
                                break;
                        case -1:
                                sliderPlaylistContainer.animate({height: playlistBot}, 250);
                                break;
                }
        }
};

let startPosY = 0;
let currentV;
const sliderLine = $(".mobile-slider-line");
sliderLine.on("touchstart", function(e) {

        startPosY = e.changedTouches[0].screenY;
        currentV = parseInt(sliderPlaylistContainer.css("height").slice(0, -2));

});

let currentPosY = 0;
sliderLine.on("touchmove", function(e) {

        currentPosY = e.changedTouches[0].screenY;

        if (startPosY > currentPosY) {
                if (lyricsState){
                        document.querySelector(".lyricsCont").style.display = "";
                }
                slideUp(currentV + (startPosY - currentPosY));
                }
        else if (startPosY < currentPosY) {
                slideUp(currentV - (currentPosY - startPosY));
        }
});

let endPosY = 0;
sliderLine.on("touchend", function(e) {

        endPosY = e.changedTouches[0].screenY;

        if (startPosY > endPosY) {
                slideUp(0, 1);
                document.getElementById("overlay").style.zIndex = 45;
                document.getElementById("overlay").classList.add('active');
                document.querySelector(".playPlaylist").style.visibility = "hidden";
        }

        else if (startPosY < endPosY) {
                slideUp(0, -1);                
                document.getElementById("overlay").style.zIndex = "";
                document.getElementById("overlay").classList.remove('active');
                setTimeout(() => {
                        document.querySelector(".playPlaylist").style.visibility = "";
                        if (lyricsState){
                                document.querySelector(".lyricsCont").style.display = "none";
                        }
                }, 100);                
        };
});

// ---------------------------- END ----------------------------------



// --------------- NAVIGATION SLIDER OUT HORIZONTAL ---------------------

const sliderNavContainer = $(".navigation");

function slideRight(w, expandDirection = false) {

        const playlistHt = 200;
        const playlistBot = 45;

        if (w < playlistBot) w = playlistBot;
        else if (w > playlistHt) w = playlistHt;

        if (!expandDirection) 
                sliderNavContainer.css({width: w.toString()+"px"});

        else {
                switch(expandDirection) {
                        case 1:
                                sliderNavContainer.animate({width: playlistHt}, 250);
                                break;
                        case -1:
                                sliderNavContainer.animate({width: playlistBot}, 250);
                                break;
                }
        }
};

let startPosX = 0;
let currentH;
sliderNavContainer.on("touchstart", function(e) {

        startPosX = e.changedTouches[0].screenX;
        currentH = parseInt(sliderNavContainer.css("width").slice(0, -2));

});

let currentPosX = 0;
sliderNavContainer.on("touchmove", function(e) {        

        currentPosX = e.changedTouches[0].screenX;

        if (startPosX > currentPosX) {
                slideRight(currentH - (startPosX - currentPosX));
        }
        else if (startPosX < currentPosX) {
                document.querySelector(".bar").style.visibility = "hidden";
                document.querySelector(".contBinder").style.visibility = "hidden";
                // document.querySelectorAll(".container").forEach((item) => item.style.visibility = "hidden");
                slideRight(currentH + (currentPosX - startPosX));
        }
});

let endPosX = 0;
sliderNavContainer.on("touchend", function(e) {

        endPosX = e.changedTouches[0].screenX;

        if (startPosX < endPosX) {
                slideRight(0, 1);
                setTimeout(() => {
                        // document.querySelector(".title").style.visibility = "";
                document.querySelector(".bar").style.visibility = "hidden";
                document.querySelector(".contBinder").style.visibility = "hidden";
                // document.querySelectorAll(".container").forEach((item) => item.style.visibility = "hidden");
                }, 350);        
        }

        else if (startPosX > endPosX) {
                slideRight(0, -1);
                setTimeout(() => {
                        document.querySelector(".bar").style.visibility = "";
                        document.querySelector(".contBinder").style.visibility = "";
                        // document.querySelectorAll(".container").forEach((item) => item.style.visibility = "");
                }, 350);        
        };
});

// ---------------------------- END ----------------------------------








function addFunction(btnValue){
        
        const id = parseInt(btnValue);

        var playlist = JSON.parse(localStorage.getItem("playlist"));

        if(playlist == null) playlist = [];

        if(playlist.length < 1){document.querySelector(".nextPlayBut").style.opacity = "0.3";}
        else {document.querySelector(".nextPlayBut").style.opacity = "0.8";};

        if (playlist.includes(id)){
                
        }
        else{
                var grpList = document.getElementById("listWithHandle");
        
                const div = document.createElement("div");
                div.id = id;
                div.classList.add("list-group-item-common");
                grpList.appendChild(div);
        
                const table = document.createElement("table");
                div.appendChild(table);

                const tr = document.createElement("tr");
                table.appendChild(tr);

        
                const td1 = document.createElement("td");
                tr.appendChild(td1);
        
                const playButton = document.createElement("button");
                playButton.classList.add("playBut");
                playButton.value = id;
                playButton.addEventListener("click", whenPlayed, false);
                playButton.paramId = id;
                td1.appendChild(playButton);

                const imgPlay = document.createElement("img");
                imgPlay.src = "css/media/play.png";
                playButton.appendChild(imgPlay);


                const td2 = document.createElement("td");
                tr.appendChild(td2);

                const spanAudInfo = document.createElement("span");
                spanAudInfo.classList.add("audInfo");
                td2.appendChild(spanAudInfo);

                const divAudName = document.createElement("div");
                divAudName.classList.add("audName");
                divAudName.innerHTML = playlistData.filter(a => a.id == id)[0].name;
                spanAudInfo.appendChild(divAudName);
        
                const crAudio = document.createElement("audio");
                crAudio.src = 'css/media/' + id + '.mp3';
                crAudio.type = "audio/mp3";
                crAudio.controls = false;
                crAudio.controlsList = "nodownload noplaybackrate"; //
                crAudio.paramAudId = id;
                spanAudInfo.appendChild(crAudio);
        
                const divAudDur = document.createElement("div");
                divAudDur.classList.add("audDur");
                divAudDur.innerHTML = playlistData.filter(a => a.id == id)[0].duration;
                spanAudInfo.appendChild(divAudDur);


                const td3 = document.createElement("td");
                tr.appendChild(td3);
        
                const closeButton = document.createElement("button");
                closeButton.classList.add("closeBut");
                closeButton.value = id;
                closeButton.addEventListener("click", remFunction, false);
                closeButton.paramId = id;
                td3.appendChild(closeButton);

                const imgClose = document.createElement("img");
                imgClose.src = "css/media/close.png";
                closeButton.appendChild(imgClose);


                const td4 = document.createElement("td");
                tr.appendChild(td4);

                const spanSort = document.createElement("span");
                spanSort.classList.add("my-handle");
                spanSort.setAttribute('aria-hidden', 'true');
                td4.appendChild(spanSort);

                const imgSort = document.createElement("img");
                imgSort.src = "css/media/sort.png";
                spanSort.appendChild(imgSort);

                playlist.push(id);
        };

        localStorage.setItem("playlist", JSON.stringify(playlist));

        if(playlist.length == 1){

                const lyricswin = document.querySelector(".lyricsWindow");
                lyricswin.innerHTML = playlistData.filter(a => a.id == playlist[0])[0].lyrics;

                const currAudName = document.querySelector(".currAudName");
                currAudName.innerHTML = playlistData.filter(a => a.id == playlist[0])[0].name;

                playNext();
        };
};



function remFunction(remBut){

        var playlist = JSON.parse(localStorage.getItem("playlist"));
        
        const id = remBut.currentTarget.paramId;
        document.getElementById(id).remove();

        if(playlist.length == 2){document.querySelector(".nextPlayBut").style.opacity = "0.3";}
        else {document.querySelector(".nextPlayBut").style.opacity = "0.8";};

        // playlist.indexOf(id) !== -1 && playlist.splice(playlist.indexOf(id), 1);
        // localStorage.setItem("playlist", JSON.stringify(playlist));
};


function remFunction2(remBut){

        const id = remBut.currentTarget.paramId;
        document.querySelector("[audFromPlaylistId=" + remBut.currentTarget.paramCurrentSavedPlaylistId + "]").querySelector(`#${CSS.escape(id)}`).remove();

};





function whenPlayed(playAud){
        
        var transAudio = document.getElementById("cloneAud");
        transAudio.remove();
        document.querySelector(".timeRem").remove();

        var getPlaylist = JSON.parse(localStorage.getItem("playlist"));

        var prevDiv = document.getElementById(getPlaylist[0]);        
        prevDiv.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].controls = false;
        prevDiv.style.display = "";
        
        var grpList = document.getElementById("listWithHandle");

        var id;
        try {
                id = playAud.currentTarget.paramId;
        }
        catch(err) {
                id = playAud;
        }

        var parent = document.getElementById(id);
        parent.style.display = "none";
        grpList.prepend(parent);
                
        setTimeout(() => {
                  playNext();
        }, 50);

};


let audio;
let nowAudId;

function playlistPlay() {

        if (audio) { 
                audio.pause(); 
        } 
         
          playNext();
 };

function playNext() {        

        fullPlaylist = JSON.parse(localStorage.getItem("playlist"));
        
        if (fullPlaylist.length < 2){document.querySelector(".nextPlayBut").style.opacity = "0.3";}
        else{document.querySelector(".nextPlayBut").style.opacity = "0.8";};
        
        if((fullPlaylist != null) && (0 < fullPlaylist.length)) {

                var parent = document.getElementById(fullPlaylist[0]);
                var audio = parent.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1];

                var nowAud = document.getElementById("hereAud");
                var cloneAud = audio.cloneNode(true);
                nowAud.appendChild(cloneAud);
                cloneAud.id = "cloneAud";
                cloneAud.controls = true;

                const divAudRemTime = document.createElement("div");
                divAudRemTime.classList.add("timeRem");
                divAudRemTime.innerHTML = parent.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2].innerHTML;
                nowAud.appendChild(divAudRemTime);        
                
                var transAudio = document.getElementById("cloneAud");
                transAudio.removeEventListener("play", whenPlayed, false);
                
                parent.style.display = "none";

                transAudio.addEventListener("ended", delParent);
                transAudio.addEventListener("ended", playNext);

                const lyricswin = document.querySelector(".lyricsWindow");
                lyricswin.innerHTML = playlistData.filter(a => a.id == fullPlaylist[0])[0].lyrics;

                const currAudName = document.querySelector(".currAudName");
                currAudName.innerHTML = playlistData.filter(a => a.id == fullPlaylist[0])[0].name;

                document.querySelector(".playPlaylist").style.opacity = "0.8";
                document.querySelector(".playNowAud").style.opacity = "1";
                document.querySelector(".prevFifBut").style.opacity = "1";
                document.querySelector(".nextFifBut").style.opacity = "1";
                document.querySelector(".closeNowAud").style.opacity = "1";
                document.querySelector(".clearPlaylistBut").style.opacity = "0.8";
                document.querySelector(".lyricsBut").style.display = "";
                transAudio.play();
                playlistStartState = 1;
                document.getElementById("playPlaylistImg").src = "css/media/pause.png";
                document.getElementById("playNowAudImg").src = "css/media/pause_black.png";

        }
        else{
                document.querySelector(".nextPlayBut").style.opacity = "0.3";
        };
 } ;
                 
function delParent(){
        
        document.querySelector(".prevPlayBut").style.opacity = "0.8";

        fullPlaylist = JSON.parse(localStorage.getItem("playlist"));
        var playGrpList = document.getElementById("listWithHandle");
        var parent = document.getElementById(fullPlaylist[0]);

        const lyricswin = document.querySelector(".lyricsWindow");
        lyricswin.innerHTML = "";

        const currAudName = document.querySelector(".currAudName");
        currAudName.innerHTML = "";

        var transAudio = document.getElementById("cloneAud");        
        transAudio.remove();
        document.querySelector(".timeRem").remove();

        document.querySelector(".lyricsBut").style.display = "none";

        document.querySelector(".playPlaylist").style.opacity = "0.3";
        document.querySelector(".playNowAud").style.opacity = "0.3";
        document.querySelector(".prevFifBut").style.opacity = "0.3";
        document.querySelector(".nextFifBut").style.opacity = "0.3";
        document.querySelector(".closeNowAud").style.opacity = "0.3";
        document.querySelector(".clearPlaylistBut").style.opacity = "0.3";

        if (parseInt(localStorage.getItem("currentAudioLoop")) === 1){
        }
        else{

                if (parseInt(localStorage.getItem("playlistLoop")) === 1){
                        playGrpList.insertBefore(parent, null);
                        parent.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].controls = false;
                        parent.style.display = "";
                }
                else{
                        parent.remove();

                        playlistStartState = 0;

                        document.getElementById("playPlaylistImg").src = "css/media/play.png";
                        document.getElementById("playNowAudImg").src = "css/media/play_black.png";
                };
                
        };


        var prevPlaylist = JSON.parse(localStorage.getItem("prevPlaylist"));
        if(prevPlaylist == null) prevPlaylist = [];

        if (prevPlaylist.length > 0){
                if (prevPlaylist.includes(fullPlaylist[0])){
                        prevPlaylist.indexOf(fullPlaylist[0]) !== -1 && prevPlaylist.splice(prevPlaylist.indexOf(fullPlaylist[0]), 1);
                        prevPlaylist.unshift(fullPlaylist[0]);
                }
                else{
                        prevPlaylist.unshift(fullPlaylist[0]);
                };

                if (prevPlaylist.length === 6){
                        prevPlaylist.splice(-1);
                };
        }
        else{
                prevPlaylist.unshift(fullPlaylist[0]);
                document.querySelector(".prevPlayBut").style.opacity = "0.8";
        }

        localStorage.setItem("prevPlaylist", JSON.stringify(prevPlaylist));

        // const playlist = $('.playingPlaylistItems > div').map((i, div) => parseInt(div.id)).get();
        // localStorage.setItem("playlist", JSON.stringify(playlist));

};




function startPlaylist(){

        var transAudio = document.getElementById("cloneAud");
        
        if (transAudio){

                if (!playlistStartState){

                        var playlist = JSON.parse(localStorage.getItem("playlist"));

                        const lyricswin = document.querySelector(".lyricsWindow");
                        lyricswin.innerHTML = playlistData.filter(a => a.id == playlist[0])[0].lyrics;

                        const currAudName = document.querySelector(".currAudName");
                        currAudName.innerHTML = playlistData.filter(a => a.id == playlist[0])[0].name;

                        document.querySelector(".playPlaylist").style.opacity = "0.8";
                        document.querySelector(".playNowAud").style.opacity = "1";
                        document.querySelector(".prevFifBut").style.opacity = "1";
                        document.querySelector(".nextFifBut").style.opacity = "1";
                        document.querySelector(".closeNowAud").style.opacity = "1";
                        document.querySelector(".clearPlaylistBut").style.opacity = "0.8";

                        document.getElementById("playPlaylistImg").src = "css/media/pause.png";
                        document.getElementById("playNowAudImg").src = "css/media/pause_black.png";
                        transAudio.play();
                        playlistStartState = 1;
                }
                else{
                        transAudio.pause();
                        document.getElementById("playPlaylistImg").src = "css/media/play.png";
                        document.getElementById("playNowAudImg").src = "css/media/play_black.png";
                        playlistStartState = 0;
                }
        }
};




function playlistLoop(){

        var loop = localStorage.getItem("playlistLoop");

        if (parseInt(loop) === 1){
                localStorage.setItem("playlistLoop", 0);
                document.querySelector(".loopPlaylistBut").style.opacity = "0.3";
        }
        else{
                localStorage.setItem("playlistLoop", 1);
                document.querySelector(".loopPlaylistBut").style.opacity = "0.8";
        };

};



function prevPlay(){

        var prevPlaylist = JSON.parse(localStorage.getItem("prevPlaylist"));
        if(prevPlaylist == null) prevPlaylist = [];                
        let id;

        if (prevPlaylist.length <= 1){
                document.querySelector(".prevPlayBut").style.opacity = "0.3";
        };

        if (prevPlaylist.length > 0){
                
                id = prevPlaylist[0];

                var nowPlaylist = JSON.parse(localStorage.getItem("playlist"));
                if(nowPlaylist == null) nowPlaylist = [];

                if (nowPlaylist.length < 1){

                        // create nowAudio, create disp-nonne-down-ele

                        var grpList = document.getElementById("listWithHandle");
        
                        const div = document.createElement("div");
                        div.id = id;
                        div.classList.add("list-group-item-common");
                        grpList.prepend(div);
        
                        const table = document.createElement("table");
                        div.appendChild(table);

                        const tr = document.createElement("tr");
                        table.appendChild(tr);

        
                        const td1 = document.createElement("td");
                        tr.appendChild(td1);
        
                        const playButton = document.createElement("button");
                        playButton.classList.add("playBut");
                        playButton.value = id;
                        playButton.addEventListener("click", whenPlayed, false);
                        playButton.paramId = id;
                        td1.appendChild(playButton);

                        const imgPlay = document.createElement("img");
                        imgPlay.src = "css/media/play.png";
                        playButton.appendChild(imgPlay);


                        const td2 = document.createElement("td");
                        tr.appendChild(td2);

                        const spanAudInfo = document.createElement("span");
                        spanAudInfo.classList.add("audInfo");
                        td2.appendChild(spanAudInfo);

                        const divAudName = document.createElement("div");
                        divAudName.classList.add("audName");
                        divAudName.innerHTML = playlistData.filter(a => a.id == id)[0].name;
                        spanAudInfo.appendChild(divAudName);
        
                        const crAudio = document.createElement("audio");
                        crAudio.src = 'css/media/' + id + '.mp3';
                        crAudio.type = "audio/mp3";
                        crAudio.controls = false;
                        crAudio.controlsList = "nodownload noplaybackrate"; // 
                        crAudio.paramAudId = id;
                        spanAudInfo.appendChild(crAudio);
        
                        const divAudDur = document.createElement("div");
                        divAudDur.classList.add("audDur");
                        divAudDur.innerHTML = playlistData.filter(a => a.id == id)[0].duration;
                        spanAudInfo.appendChild(divAudDur);


                        const td3 = document.createElement("td");
                        tr.appendChild(td3);
        
                        const closeButton = document.createElement("button");
                        closeButton.classList.add("closeBut");
                        closeButton.value = id;
                        closeButton.addEventListener("click", remFunction, false);
                        closeButton.paramId = id;
                        td3.appendChild(closeButton);

                        const imgClose = document.createElement("img");
                        imgClose.src = "css/media/close.png";
                        closeButton.appendChild(imgClose);


                        const td4 = document.createElement("td");
                        tr.appendChild(td4);

                        const spanSort = document.createElement("span");
                        spanSort.classList.add("my-handle");
                        spanSort.setAttribute('aria-hidden', 'true');
                        td4.appendChild(spanSort);

                        const imgSort = document.createElement("img");
                        imgSort.src = "css/media/sort.png";
                        spanSort.appendChild(imgSort);


                        var newDiv = document.getElementById(id);
                        newDiv.style.display = "none";

                
                        setTimeout(() => {
                                  playNext();
                        }, 50);
                }

                else {

                        if (nowPlaylist.includes(id)){

                                if (id === nowPlaylist[0]){

                                        var transAudio = document.getElementById("cloneAud");
                                        transAudio.pause();
                                        transAudio.currentTime = 0
                                        transAudio.play();
                                        playlistStartState = 1;
                                        document.getElementById("playPlaylistImg").src = "css/media/pause.png";
                                        document.getElementById("playNowAudImg").src = "css/media/pause_black.png";
                                }

                                else{
                                        
                                        document.querySelector(".nextPlayBut").style.opacity = "0.3";

                                        var transAudio = document.getElementById("cloneAud");
                                        transAudio.remove();
                                        document.querySelector(".timeRem").remove();
                                        document.querySelector(".playPlaylist").style.opacity = "0.3";
                                        document.querySelector(".playNowAud").style.opacity = "0.3";
                                        document.querySelector(".prevFifBut").style.opacity = "0.3";
                                        document.querySelector(".nextFifBut").style.opacity = "0.3";
                                        document.querySelector(".closeNowAud").style.opacity = "0.3";
                                        document.querySelector(".clearPlaylistBut").style.opacity = "0.3";

                                        var prevDiv = document.getElementById(nowPlaylist[0]);
                                        prevDiv.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].controls = false;
                                        prevDiv.style.display = "";

                                        var playGrpList = document.getElementById("listWithHandle");
                                        var parent = document.getElementById(id);
                                        parent.style.display = "none";
                                        playGrpList.prepend(parent);
                
                                        setTimeout(() => {
                                                  playNext();
                                        }, 50);                        
                                }
                        }

                        else {

                                document.querySelector(".nextPlayBut").style.opacity = "0.3";

                                var transAudio = document.getElementById("cloneAud");
                                transAudio.remove();
                                document.querySelector(".timeRem").remove();
                                document.querySelector(".playPlaylist").style.opacity = "0.3";
                                document.querySelector(".playNowAud").style.opacity = "0.3";
                                document.querySelector(".prevFifBut").style.opacity = "0.3";
                                document.querySelector(".nextFifBut").style.opacity = "0.3";
                                document.querySelector(".closeNowAud").style.opacity = "0.3";
                                document.querySelector(".clearPlaylistBut").style.opacity = "0.3";

                                var prevDiv = document.getElementById(nowPlaylist[0]);
                                prevDiv.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].controls = false;
                                prevDiv.style.display = "";


                                var grpList = document.getElementById("listWithHandle");
        
                                const div = document.createElement("div");
                                div.id = id;
                                div.classList.add("list-group-item-common");
                                grpList.prepend(div);
                
                                const table = document.createElement("table");
                                div.appendChild(table);

                                const tr = document.createElement("tr");
                                table.appendChild(tr);

        
                                const td1 = document.createElement("td");
                                tr.appendChild(td1);
        
                                const playButton = document.createElement("button");
                                playButton.classList.add("playBut");
                                playButton.value = id;
                                playButton.addEventListener("click", whenPlayed, false);
                                playButton.paramId = id;
                                td1.appendChild(playButton);

                                const imgPlay = document.createElement("img");
                                imgPlay.src = "css/media/play.png";
                                playButton.appendChild(imgPlay);


                                const td2 = document.createElement("td");
                                tr.appendChild(td2);

                                const spanAudInfo = document.createElement("span");
                                spanAudInfo.classList.add("audInfo");
                                td2.appendChild(spanAudInfo);

                                const divAudName = document.createElement("div");
                                divAudName.classList.add("audName");
                                divAudName.innerHTML = playlistData.filter(a => a.id == id)[0].name;
                                spanAudInfo.appendChild(divAudName);
        
                                const crAudio = document.createElement("audio");
                                crAudio.src = 'css/media/' + id + '.mp3';
                                crAudio.type = "audio/mp3";
                                crAudio.controls = false;
                                crAudio.controlsList = "nodownload noplaybackrate"; //
                                crAudio.paramAudId = id;
                                spanAudInfo.appendChild(crAudio);
        
                                const divAudDur = document.createElement("div");
                                divAudDur.classList.add("audDur");
                                divAudDur.innerHTML = playlistData.filter(a => a.id == id)[0].duration;
                                spanAudInfo.appendChild(divAudDur);


                                const td3 = document.createElement("td");
                                tr.appendChild(td3);
        
                                const closeButton = document.createElement("button");
                                closeButton.classList.add("closeBut");
                                closeButton.value = id;
                                closeButton.addEventListener("click", remFunction, false);
                                closeButton.paramId = id;
                                td3.appendChild(closeButton);

                                const imgClose = document.createElement("img");
                                imgClose.src = "css/media/close.png";
                                closeButton.appendChild(imgClose);


                                const td4 = document.createElement("td");
                                tr.appendChild(td4);

                                const spanSort = document.createElement("span");
                                spanSort.classList.add("my-handle");
                                spanSort.setAttribute('aria-hidden', 'true');
                                td4.appendChild(spanSort);

                                const imgSort = document.createElement("img");
                                imgSort.src = "css/media/sort.png";
                                spanSort.appendChild(imgSort);


                                var newDiv = document.getElementById(id);
                                newDiv.style.display = "none";                

                
                                setTimeout(() => {
                                          playNext();
                                }, 50);

                        }
                }
        
                prevPlaylist.shift(0);
                localStorage.setItem("prevPlaylist", JSON.stringify(prevPlaylist));
        };

};



function nextPlay(){
        
        var getPlaylist = JSON.parse(localStorage.getItem("playlist"));
        if(getPlaylist == null) getPlaylist = [];
        
        var prevPlaylist = JSON.parse(localStorage.getItem("prevPlaylist"));
        if(prevPlaylist == null) prevPlaylist = [];

        if (getPlaylist.length > 1){

                var transAudio = document.getElementById("cloneAud");
                transAudio.remove();
                document.querySelector(".timeRem").remove();
                document.querySelector(".playPlaylist").style.opacity = "0.3";
                document.querySelector(".playNowAud").style.opacity = "0.3";
                document.querySelector(".prevFifBut").style.opacity = "0.3";
                document.querySelector(".nextFifBut").style.opacity = "0.3";
                document.querySelector(".closeNowAud").style.opacity = "0.3";
                document.querySelector(".clearPlaylistBut").style.opacity = "0.3";

                var prevDiv = document.getElementById(getPlaylist[0]);
                prevDiv.remove();
        
                var newDiv = document.getElementById(getPlaylist[1]);
                newDiv.style.display = "none";
                
                setTimeout(() => {
                          playNext();
                }, 50);

                if (prevPlaylist.length > 0){

                        if (prevPlaylist.includes(getPlaylist[0])){
                                prevPlaylist.indexOf(getPlaylist[0]) !== -1 && prevPlaylist.splice(prevPlaylist.indexOf(getPlaylist[0]), 1);
                                prevPlaylist.unshift(getPlaylist[0]);
                        }
                        else{
                                prevPlaylist.unshift(getPlaylist[0]);
                        };

                        if (prevPlaylist.length === 6){
                                prevPlaylist.splice(-1);
                        };
                }
                else{
                        prevPlaylist.unshift(getPlaylist[0]);
                        document.querySelector(".prevPlayBut").style.opacity = "0.8";
                }

                localStorage.setItem("prevPlaylist", JSON.stringify(prevPlaylist));
        };

};




function clearPlaylist(){

        document.querySelector(".nextPlayBut").style.opacity = "0.3";
        
        var getPlaylist = JSON.parse(localStorage.getItem("playlist"));
        if(getPlaylist == null) getPlaylist = [];

        var prevPlaylist = JSON.parse(localStorage.getItem("prevPlaylist"));
        if(prevPlaylist == null) prevPlaylist = [];

        if ((getPlaylist != null) && (getPlaylist.length > 0)){
                
                document.querySelector(".lyricsWindow").innerHTML = "";
                document.querySelector(".currAudName").innerHTML = "";

                document.getElementById("playPlaylistImg").src = "css/media/play.png";
                document.getElementById("playNowAudImg").src = "css/media/play_black.png";
                
                document.querySelector(".lyricsBut").style.display = "none";

                var transAudio = document.getElementById("cloneAud");
                transAudio.remove();
                document.querySelector(".timeRem").remove();

                document.querySelector(".playPlaylist").style.opacity = "0.3";
                document.querySelector(".playNowAud").style.opacity = "0.3";
                document.querySelector(".prevFifBut").style.opacity = "0.3";
                document.querySelector(".nextFifBut").style.opacity = "0.3";
                document.querySelector(".closeNowAud").style.opacity = "0.3";
                document.querySelector(".clearPlaylistBut").style.opacity = "0.3";

                var grpItemList = document.querySelector(".playingPlaylistItems").querySelectorAll(".list-group-item-common");

                for (const item of grpItemList) {
                        item.remove();
                }

                if (prevPlaylist.length > 0){

                        if (prevPlaylist.includes(getPlaylist[0])){
                                prevPlaylist.indexOf(getPlaylist[0]) !== -1 && prevPlaylist.splice(prevPlaylist.indexOf(getPlaylist[0]), 1);
                                prevPlaylist.unshift(getPlaylist[0]);
                        }
                        else{
                                prevPlaylist.unshift(getPlaylist[0]);
                        };

                        if (prevPlaylist.length === 6){
                                prevPlaylist.splice(-1);
                        };
                }
                else{
                        prevPlaylist.unshift(getPlaylist[0]);
                        document.querySelector(".prevPlayBut").style.opacity = "0.8";
                };

                localStorage.setItem("prevPlaylist", JSON.stringify(prevPlaylist));
        }
};



function nowAudLoop(){

        var loop = localStorage.getItem("currentAudioLoop");

        if (parseInt(loop) === 1){
                localStorage.setItem("currentAudioLoop", 0);
                document.querySelector(".loopNowAud").style.opacity = "0.3";
        }
        else{
                localStorage.setItem("currentAudioLoop", 1);
                document.querySelector(".loopNowAud").style.opacity = "1";
        };

}




function prevFifteen(){

        var transAudio = document.getElementById("cloneAud");        
        if (transAudio){
                if ((transAudio.currentTime - 10) <= 0){
                        transAudio.currentTime = 0;
                }
                else{
                        transAudio.currentTime -= 10;
                };
        };
};




function nextFifteen(){

        var transAudio = document.getElementById("cloneAud");        
        if (transAudio){
                if ((transAudio.currentTime + 10) >= transAudio.duration){
                }
                else{
                        transAudio.currentTime += 10;
                };
        };
};


function closeNowAud(){
        
        var getPlaylist = JSON.parse(localStorage.getItem("playlist"));
        if(getPlaylist == null) getPlaylist = [];

        var prevPlaylist = JSON.parse(localStorage.getItem("prevPlaylist"));
        if(prevPlaylist == null) prevPlaylist = [];        

        if (getPlaylist.length > 0){
                
                document.querySelector(".lyricsWindow").innerHTML = "";
                document.querySelector(".currAudName").innerHTML = "";
                
                document.getElementById("playPlaylistImg").src = "css/media/play.png";
                document.getElementById("playNowAudImg").src = "css/media/play_black.png";

                document.querySelector(".lyricsBut").style.display = "none";

                var transAudio = document.getElementById("cloneAud");
                transAudio.remove();
                document.querySelector(".timeRem").remove();
                document.querySelector(".playPlaylist").style.opacity = "0.3";
                document.querySelector(".playNowAud").style.opacity = "0.3";
                document.querySelector(".prevFifBut").style.opacity = "0.3";
                document.querySelector(".nextFifBut").style.opacity = "0.3";
                document.querySelector(".closeNowAud").style.opacity = "0.3";
                document.querySelector(".clearPlaylistBut").style.opacity = "0.3";

                var prevDiv = document.getElementById(getPlaylist[0]);
                prevDiv.remove();

                if (prevPlaylist.length > 0){
                        if (prevPlaylist.includes(getPlaylist[0])){
                                prevPlaylist.indexOf(getPlaylist[0]) !== -1 && prevPlaylist.splice(prevPlaylist.indexOf(getPlaylist[0]), 1);
                                prevPlaylist.unshift(getPlaylist[0]);
                        }
                        else{
                                prevPlaylist.unshift(getPlaylist[0]);
                        };

                        if (prevPlaylist.length === 6){
                                prevPlaylist.splice(-1);
                        };
                }
                else{
                        prevPlaylist.unshift(getPlaylist[0]);
                        document.querySelector(".prevPlayBut").style.opacity = "0.8";
                }

                localStorage.setItem("prevPlaylist", JSON.stringify(prevPlaylist));
        }

        if (getPlaylist.length > 1){                
        
                var newDiv = document.getElementById(getPlaylist[1]);
                newDiv.style.display = "none";
                
                setTimeout(() => {
                          playNext();
                }, 50);
        }
};





function lyricsBut(){

        if (lyricsState){
                document.querySelector(".lyricsCont").style.display = "none";
                document.querySelector(".lyricsBut").style.opacity = "0.3";
                document.querySelector("#listWithHandle").style.top = "12.1rem";
                lyricsState = 0;
        }
        else{
                document.querySelector(".lyricsCont").style.display = "";
                document.querySelector(".lyricsBut").style.opacity = "0.9";
                // document.querySelector("#listWithHandle").style.top = "29.2rem";
                document.querySelector("#listWithHandle").style.top = "27.7rem";
                lyricsState = 1;
        };
};



var plBack = 1;

function changePlaySpeed(val) {

  alert("New value is: " + val);
  var elem = document.getElementById('speed');
  elem.size = 1;
        document.querySelector(".playBackBut").style.opacity = '';
  elem.style.display = '';
  plBack = 1;
};

function playBackBut(){
    
        var elem = document.getElementById('speed');
 
        if (plBack){
                elem.size = 8;
                document.querySelector(".playBackBut").style.opacity = '0.8';
                elem.style.display = 'block';
                plBack = 0;
 }
 else{
                document.querySelector(".playBackBut").style.opacity = '';
                elem.style.display = '';
                plBack = 1;
 }
};



function downloadPlaylist(filename) {

        var getPlaylist = JSON.parse(localStorage.getItem(filename));
        if(getPlaylist == null) getPlaylist = [];
        playlistAudName = [];
        for (const id of getPlaylist){
                playlistAudName.push(playlistData.filter(a => a.id == id)[0].name);
        };
        savePlaylistData = playlistAudName.join('\n');

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURI(savePlaylistData));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

}


