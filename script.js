/* =========================================
   DESI SAFAR - PLAYLIST SYSTEM
========================================= */

const playlists = {

    truck: {
        image: "./truck-home.png",

        category: "TRUCK WALE BHAIYA RADIO",

        title: "रास्ता लंबा है।<br>गाने पुराने हैं।",

        subtitle: "सफ़र वही • गाने वही • यादें नई",

        musicCategory: "TRUCK WALE BHAIYA",

        musicTitle: "Indian Truck Driver Music",

        musicDescription: "Long roads • Old songs • Good vibes",

        spotify:
            "https://open.spotify.com/embed/playlist/0iT5gTODhpUFGSwqGZUpdG"
    },


    salon: {
        image: "./salon-home.png",

        category: "DELUXE SALOON",

        title: "कैंची चले।<br>गाने बजें।",

        subtitle: "बाल कटेंगे • गाने चलेंगे • बातें होंगी",

        musicCategory: "DELUXE SALOON",

        musicTitle: "Salon Wale Gaane",

        musicDescription: "Fresh cut • Old songs • Desi vibes",

        spotify:
            "https://open.spotify.com/embed/playlist/1LC9QRY2HdabeBrciWpVy4"
    },


    classical: {
        image: "./classical-home.png",

        category: "CLASSICAL INDIA",

        title: "सुरों का सफ़र।<br>सुकून के साथ।",

        subtitle: "राग वही • सुर वही • एहसास नया",

        musicCategory: "CLASSICAL INDIA",

        musicTitle: "Classical Indian Songs",

        musicDescription: "Raag • Sitar • Tabla • Timeless melodies",

        spotify:
            "https://open.spotify.com/embed/playlist/4kdq7V1GAOAqPofLbMPg10"
    },


    old: {
        image: "./old-home.png",

        category: "OLD IS GOLD",

        title: "पुराने गाने।<br>पुरानी यादें।",

        subtitle: "कुछ गाने कभी पुराने नहीं होते",

        musicCategory: "OLD IS GOLD",

        musicTitle: "Old Is Gold",

        musicDescription: "Golden memories • Timeless songs",

        spotify:
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYRTlrhMB12D"
    }

};


/* =========================================
   GET HTML ELEMENTS
========================================= */

const heroImage =
    document.getElementById("heroImage");

const category =
    document.getElementById("category");

const title =
    document.getElementById("title");

const subtitle =
    document.getElementById("subtitle");

const musicCategory =
    document.getElementById("musicCategory");

const musicTitle =
    document.getElementById("musicTitle");

const musicDescription =
    document.getElementById("musicDescription");

const spotifyFrame =
    document.getElementById("spotifyFrame");

const spotifyTop =
    document.getElementById("spotifyTop");

const buttons =
    document.querySelectorAll(".playlist");


/* =========================================
   CHANGE PLAYLIST
========================================= */

function changePlaylist(key) {

    const data = playlists[key];

    if (!data) {
        return;
    }


    /* FADE OUT */

    heroImage.style.opacity = "0";

    heroImage.style.transform = "scale(1.03)";


    setTimeout(() => {


        /* CHANGE IMAGE */

        heroImage.src = data.image;


        /* CHANGE HERO TEXT */

        category.textContent =
            data.category;

        title.innerHTML =
            data.title;

        subtitle.textContent =
            data.subtitle;


        /* CHANGE MUSIC SECTION */

        musicCategory.textContent =
            data.musicCategory;

        musicTitle.textContent =
            data.musicTitle;

        musicDescription.textContent =
            data.musicDescription;


        /* CHANGE SPOTIFY */

        spotifyFrame.src =
            data.spotify;


        /* CHANGE TOP SPOTIFY LINK */

        spotifyTop.href =
            data.spotify.replace(
                "/embed",
                ""
            );


        /* FADE IN */

        heroImage.style.opacity = "1";

        heroImage.style.transform = "scale(1)";


    }, 300);


    /* ACTIVE BUTTON */

    buttons.forEach(button => {

        button.classList.remove("active");

    });


    const activeButton =
        document.querySelector(
            `[data-playlist="${key}"]`
        );


    if (activeButton) {

        activeButton.classList.add("active");

    }


    /* REMEMBER PLAYLIST */

    localStorage.setItem(
        "desiSafarPlaylist",
        key
    );

}


/* =========================================
   BUTTON EVENTS
========================================= */

buttons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const key =
                button.dataset.playlist;

            changePlaylist(key);

        }
    );

});


/* =========================================
   LOAD SAVED PLAYLIST
========================================= */

const savedPlaylist =
    localStorage.getItem(
        "desiSafarPlaylist"
    );


if (
    savedPlaylist &&
    playlists[savedPlaylist]
) {

    /* Don't animate on first page load */

    const data =
        playlists[savedPlaylist];


    heroImage.src =
        data.image;

    category.textContent =
        data.category;

    title.innerHTML =
        data.title;

    subtitle.textContent =
        data.subtitle;

    musicCategory.textContent =
        data.musicCategory;

    musicTitle.textContent =
        data.musicTitle;

    musicDescription.textContent =
        data.musicDescription;

    spotifyFrame.src =
        data.spotify;

    spotifyTop.href =
        data.spotify.replace(
            "/embed",
            ""
        );


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    const savedButton =
        document.querySelector(
            `[data-playlist="${savedPlaylist}"]`
        );


    if (savedButton) {

        savedButton.classList.add("active");

    }

}
/* =========================
   LIVE TIME
========================= */

function updateLiveTime() {

    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.getElementById("liveTime").textContent = time;
}

updateLiveTime();

setInterval(updateLiveTime, 1000);
