<template>
  <form
    @submit.prevent="submitForm"
    method="post"
    enctype="multipart/form-data"
  >
    <div class="main">
      <h4 class="lead">General information</h4>
      <div class="cnt">
        <div class="s sq">
          <h4 class="slv">Name of the band</h4>
          <input
            type="text"
            class="inp-1"
            @input="handleInput"
            v-model.trim="bandName"
          />
          <span class="vald" v-if="bandName == ''"
            >Please, enter band name</span
          >
        </div>
        <div class="s-box">
          <h4 class="slv">Years of band</h4>
          <input type="number" class="inp-2" v-model="yearsBand" />
          <span class="vald" v-if="yearsBand == ''"
            >Please, enter band years</span
          >
        </div>
        <div class="s-box">
          <h4 class="slv">
            Band banner
            <!-- <span class="vald" v-if="fileSizeError1"
              >File size exceeds limit</span
            > -->
          </h4>
          <input
            type="file"
            id="uploadBtn1"
            class="inp-2"
            @change="checkFile1($event)"
          />
          <label for="uploadBtn1" v-if="uploaded1 == false"
            ><img src="../assets/images/upload.png" class="upload" />Upload
            file</label
          >
          <label for="uploadBtn1" v-else>Uploaded</label>
          <p v-if="fileSizeError1" class="nt">Size: 2MB max</p>
          <p v-else-if="uploaded1 == false" class="nt">Please, upload banner</p>
        </div>
        <div class="s-box blg">
          <h4 class="slv">Band Logo</h4>
          <input
            type="file"
            id="uploadBtn2"
            class="inp-2"
            @change="checkFile2($event)"
          />
          <label for="uploadBtn2" v-if="uploaded2 == false"
            ><img src="../assets/images/upload.png" class="upload" />Upload
            file</label
          >
          <label for="uploadBtn2" v-else>Uploaded</label>
          <p v-if="fileSizeError2" class="nt">Size: 2MB max</p>
          <p v-else-if="uploaded2 == false" class="nt">Please, upload logo</p>
        </div>
      </div>
      <div class="cnt three-ddown">
        <div class="country s1">
          <h4 class="slv">Country</h4>
          <!-- <div class="dropdown">
            <select class="ddown" v-model="country">
              <option value="" disabled selected></option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
            </select>
          </div> -->
          <div class="dropdown">
            <select
              class="ddown"
              v-model="selected_country"
              @change="selectState"
            >
              <option value="" disabled selected></option>
              <option
                v-for="country in countries"
                :key="country.id"
                :value="country.id"
              >
                {{ country.country_name }}
              </option>
            </select>
          </div>
          <span class="vald" v-if="selected_country == ''"
            >Please, select the country</span
          >
        </div>
        <div class="state s1">
          <h4 class="slv">State</h4>
          <div class="dropdown">
            <select class="ddown" v-model="selected_state" @change="selectCity">
              <option value="" disabled selected></option>
              <option v-for="state in states" :key="state.id" :value="state.id">
                {{ state.state_name }}
              </option>
            </select>
          </div>
          <span class="vald" v-if="selected_state == ''"
            >Please, select the state</span
          >
        </div>
        <div class="city s1">
          <h4 class="slv">City</h4>
          <div class="dropdown">
            <select class="ddown" v-model="selected_city">
              <option value="" disabled selected></option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.city_name }}
              </option>
            </select>
          </div>
          <span class="vald" v-if="selected_city == ''"
            >Please, select the city</span
          >
        </div>
      </div>
      <div class="cnt">
        <div class="s-box-2">
          <h4 class="slv">How many piece band?</h4>
          <input type="number" class="inp-1 lng" v-model="pieceBand" />
          <span class="vald" v-if="pieceBand == ''"
            >please, enter the number</span
          >
        </div>
      </div>
    </div>
    <div class="main-2" v-for="(record, index) in records" :key="index">
      <div class="add-sing">
        <h4 class="lead sec-2">Add singer information</h4>
        <p class="sec-2 sds">+ add singer</p>
      </div>
      <div class="cnt">
        <div class="s-box">
          <h4 class="slv">
            Profile Pic
            <!-- <span class="vald" v-if="fileSizeError3">&nbsp;File size exceeds limit</span> -->
          </h4>
          <input
            type="file"
            id="uploadBtn3"
            class="inp-2"
            @change="checkFile3($event)"
          />
          <label for="uploadBtn3" v-if="uploaded3 == false"
            ><img src="../assets/images/upload.png" class="upload" />Upload
            file</label
          >
          <label for="uploadBtn3" v-else>Uploaded</label>
          <p v-if="fileSizeError3" class="nt">Size: 2MB max</p>
          <p v-else-if="uploaded3 == false" class="nt">Please, upload profile</p>
        </div>
        <div class="sa">
          <h4 class="slv">Singer name</h4>
          <input
            type="text"
            class="inp-3 spname"
            @input="handleInput"
            v-model.trim="singerName"
          />
          <span class="vald" v-if="singerName == ''"
            >Please, enter singer name</span
          >
        </div>
        <div>
          <h4 class="slv">Gender</h4>
          <div class="dropdown">
            <select class="ddown gd" v-model="gender">
              <option value="" disabled selected></option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <span class="vald" v-if="gender == ''">Please, select gender</span>
        </div>
      </div>
    </div>
    <div class="main-2">
      <div class="add-sing">
        <h4 class="lead sec-2">Add players information</h4>
        <p class="sec-2 sds">+ add player</p>
      </div>
      <div class="cnt">
        <div class="s-box">
          <h4 class="slv">
            Profile Pic
            <!-- <span class="vald" v-if="fileSizeError4"
              >&nbsp;File size exceeds limit</span
            > -->
          </h4>
          <input
            type="file"
            id="uploadBtn4"
            class="inp-2"
            @change="checkFile4($event)"
          />
          <label for="uploadBtn4" v-if="uploaded4 == false"
            ><img src="../assets/images/upload.png" class="upload" />Upload
            file</label
          >
          <label for="uploadBtn4" v-else>Uploaded</label>
          <p v-if="fileSizeError4" class="nt">Size: 2MB max</p>
          <p v-else-if="uploaded4 == false" class="nt">Please, upload profile</p>
        </div>
        <div class="sa">
          <h4 class="slv">Player name</h4>
          <input
            type="text"
            class="inp-3"
            @input="handleInput"
            v-model.trim="playerName"
          />
          <span class="vald" v-if="playerName == ''"
            >Please, enter player name</span
          >
        </div>
        <div>
          <h4 class="slv">Gender</h4>
          <div class="dropdown">
            <select class="ddown gd" v-model="playerGender">
              <option value="" disabled selected></option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <span class="vald" v-if="playerGender == ''"
            >Please, select gender</span
          >
        </div>
      </div>
    </div>
    <div class="main-2">
      <h4 class="lead sec-2">Key Languages</h4>
      <div class="cnt">
        <div class="s">
          <h4 class="slv">Choose languages in which band can perform</h4>
          <div class="mylst">
            <div class="dropdown">
              <select
                v-model="selectedOption"
                id="myDropdown"
                class="ddown"
                @change="addToLanguages"
              >
                <option value="" disabled selected></option>
                <option
                  v-for="language in api_languages"
                  :key="language.id"
                  :value="language.name"
                >
                  {{ language.name }}
                </option>
              </select>
            </div>
            <div
              class="myLanguages"
              v-for="language in languages"
              :key="language"
            >
              <span class="l-name">{{ language }}</span>
              <span class="cancel" @click="removeLang(language)">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-2">
      <h4 class="lead sec-2">Genre</h4>
      <div class="cnt">
        <div class="s">
          <div class="mylst">
            <div class="dropdown">
              <select
                v-model="selectedGenre"
                id="myDropdown"
                class="ddown"
                @change="addToGenres"
              >
                <option value="" disabled selected></option>
                <option
                  v-for="genre in api_genres"
                  :key="genre.id"
                  :value="genre.name"
                >
                  {{ genre.name }}
                </option>
              </select>
            </div>
            <div class="myLanguages" v-for="genre in genres" :key="genre">
              <span class="l-name">{{ genre }}</span>
              <span class="cancel" @click="removeGenre(genre)">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-2">
      <h4 class="lead sec-2">Where all do you opt to play</h4>
      <div class="cnt">
        <div class="s">
          <div class="mylst">
            <div class="dropdown">
              <select
                v-model="selectedPlace"
                id="myDropdown"
                class="ddown"
                @change="addToPlaces"
              >
                <option value="" disabled selected></option>
                <option
                  v-for="place in places"
                  :key="place.id"
                  :value="place.name"
                >
                  {{ place.name }}
                </option>
              </select>
            </div>
            <div class="myLanguages" v-for="place in myPlaces" :key="place">
              <span class="l-name">{{ place }}</span>
              <span class="cancel" @click="removePlace(place)">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-2">
      <h4 class="lead sec-2">Additional Information</h4>
      <h4 class="slv">Describe about your band (max 5000 words)</h4>
      <textarea
        id="txt-area"
        class="inp-4"
        @input="handleInput"
        v-model.trim="addInfo"
      ></textarea>
      <span class="vald tas" v-if="addInfo == ''"
        >Please, enter description
      </span>
      <span class="vald tas" v-else-if="wordCount > maxWords"
        >Maximum word count exceeded</span
      >
    </div>
    <div class="main-2">
      <h4 class="slv">Band Promo video link if any</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="promoLink"
      />
    </div>
    <div class="main-2">
      <h4 class="slv">Band You tube channel link if any</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="ytLink"
      />
    </div>
    <div class="main-2">
      <h4 class="slv">Band Instagram channel link if any</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="instaLink"
      />
    </div>
    <div class="main-2">
      <h4 class="slv">Band Facebook page link if any</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="fbLink"
      />
    </div>
    <div class="main-2">
      <h4 class="slv">Band website link if any</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="webLink"
      />
    </div>
    <div class="main-2">
      <div class="cnt">
        <div class="s-box">
          <h4 class="slv">Band contact number</h4>
          <div class="my-div">
            <div class="ctm">
              <img
                class="flag"
                src="../assets/images/india.png"
              />&nbsp;&nbsp;+91
            </div>
            <input
              type="number"
              id="phone"
              @input="handleContactInput"
              class="inp-5"
              v-model="cNo"
            />
          </div>
          <span class="vald" v-if="cNo == ''">Please, enter phone number</span>
          <span class="vald" v-else-if="!isValidPhoneNumber"
            >Invalid phone number</span
          >
        </div>
        <div class="sa">
          <h4 class="slv">Band email</h4>
          <div class="my-div">
            <input
              type="text"
              class="inp-5 bma"
              @input="handleEmailInput"
              v-model.trim="bandEmail"
            />
          </div>
          <span class="vald" v-if="bandEmail == ''"
            >Please, enter email address</span
          >
          <span class="vald" v-else-if="!isValidEmail"
            >Invalid email address</span
          >
        </div>
      </div>
    </div>
    <div class="main-2">
      <div class="cnt">
        <div class="s-box">
          <h4 class="slv">Band whatsapp number</h4>
          <div class="my-div">
            <div class="ctm">
              <img
                class="flag"
                src="../assets/images/india.png"
              />&nbsp;&nbsp;+91
            </div>
            <input
              type="number"
              id="whatsapp"
              @input="handleContactInput"
              class="inp-5"
              v-model="wNo"
            />
          </div>
          <span class="vald" v-if="wNo == ''"
            >Please, enter whatsapp number</span
          >
          <span class="vald" v-else-if="!isValidWhatsappNumber"
            >Invalid whatsapp number</span
          >
        </div>
      </div>
    </div>
    <div class="main-2">
      <h4 class="slv">Tech Rider (additional information)</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="tech_rider"
      />
    </div>
    <div class="main-2">
      <h4 class="lead sec-2">Band gallery</h4>
      <!-- <h4 class="slv">Upload pictures of your past performances and events</h4>
      <input type="file" class="inp-2 fc" />
      <p class="nt">Size: 2MB max (upto 10 pictures)</p> -->
      <div class="s-box">
        <h4 class="slv">
          Upload pictures of your past performances and events
          <span class="vald" v-if="fileSizeError5"
            >&nbsp;File size exceeds limit</span
          >
        </h4>
        <input
          type="file"
          id="uploadBtn5"
          class="inp-2"
          multiple
          @change="handleFileUpload"
        />
        <label for="uploadBtn5" v-if="uploaded5 == false"
          ><img src="../assets/images/upload.png" class="upload" />Upload
          file</label
        >
        <label for="uploadBtn5" v-else>Uploaded</label>
        <p class="nt" v-if="uploadedImages.length == 0">
          Upload atleast 1 image
        </p>
      </div>
      <div class="image-row">
        <div
          class="img-lst"
          v-for="(image, index) in uploadedImages"
          :key="index"
        >
          <img class="s-img" :src="image.url" alt="Uploaded Image" />
        </div>
      </div>
    </div>
    <div class="sl">
      <h4 class="slv">Band Address</h4>
      <input
        type="text"
        class="inp-1 lng"
        @input="handleInput"
        v-model.trim="bandAddress"
      />
      <span class="vald" v-if="bandAddress == ''"
        >Please, enter band address</span
      >
    </div>
    <div class="main-2">
      <button class="myBtn">Confirm changes</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("https://mykrida.com/sct-band/public/api/v1/country")
      .then(({ data, status }) => {
        this.countries = data;
        localStorage.setItem("apiCountryData", JSON.stringify(data));
      });

    axios
      .get(`https://mykrida.com/sct-band/public/api/v1/places`)
      .then(({ data, status }) => {
        this.places = data.places;
        localStorage.setItem("apiPlacesData", JSON.stringify(data.places));
      });

    axios
      .get(`https://mykrida.com/sct-band/public/api/v1/key-languages`)
      .then(({ data, status }) => {
        this.api_languages = data.key_languages;
        localStorage.setItem(
          "apiLanguagesData",
          JSON.stringify(data.key_languages)
        );
      });

    axios
      .get(`https://mykrida.com/sct-band/public/api/v1/genres`)
      .then(({ data, status }) => {
        this.api_genres = data.genres;
        localStorage.setItem("apiData", JSON.stringify(data.genres));
      });
  },
  data() {
    return {
      records: [{ file: "", singerName: "", gender: "" }],
      bandName: "",
      yearsBand: "",
      pieceBand: "",
      singerName: "",
      playerName: "",
      addInfo: "",
      cNo: "",
      bandEmail: "",
      wNo: "",
      bandAddress: "",
      selected_country: "",
      selected_state: "",
      selected_city: "",
      countries: [],
      states: [],
      cities: [],
      gender: "",
      playerGender: "",
      languages: [],
      api_languages: [],
      genres: [],
      api_genres: [],
      places: [],
      myPlaces: [],
      selectedGenre: "",
      selectedOption: "",
      selectedPlace: "",
      fileSizeError1: false,
      fileSizeError2: false,
      fileSizeError3: false,
      fileSizeError4: false,
      fileSizeError5: false,
      uploaded1: false,
      uploaded2: false,
      uploaded3: false,
      uploaded4: false,
      uploaded5: false,
      countryId: "",
      stateId: "",
      cityId: "",
      promoLink: "",
      instaLink: "",
      fbLink: "",
      ytLink: "",
      webLink: "",
      tech_rider: "",
      singer_profile_pic: {},
      player_profile_pic: {},
      gallary: [],
      singers: [],
      players: [],
      band_logo: {},
      band_banner: {},
      uploadedImages: [],
      isValidEmail: true,
      isValidPhoneNumber: true,
      isValidWhatsappNumber: true,
      maxWords: 5000,
      wordCount: 0,
    };
  },
  methods: {
    // addSinger() {
    //   this.records.push({ file: "", singerName: "", gender: "" });
    // },

    addToLanguages() {
      if (
        this.selectedOption !== "" &&
        this.languages.includes(this.selectedOption) !== true
      ) {
        this.languages.push(this.selectedOption);
        this.selectedOption = "";
      } else {
        this.selectedOption = "";
      }
    },

    addToGenres() {
      if (
        this.selectedGenre !== "" &&
        this.genres.includes(this.selectedGenre) !== true
      ) {
        this.genres.push(this.selectedGenre);
        this.selectedGenre = "";
      } else {
        this.selectedGenre = "";
      }
    },
    addToPlaces() {
      if (
        this.selectedPlace !== "" &&
        this.myPlaces.includes(this.selectedPlace) !== true
      ) {
        this.myPlaces.push(this.selectedPlace);
        this.selectedPlace = "";
      } else {
        this.selectedPlace = "";
      }
    },

    removeLang(language) {
      this.languages = this.languages.filter((l) => l !== language);
      if (this.languages.length == 0) {
        this.selectedOption = "";
      }
    },
    removeGenre(genre) {
      this.genres = this.genres.filter((g) => g !== genre);
      if (this.genres.length == 0) {
        this.selectedGenre = "";
      }
    },
    removePlace(place) {
      this.myPlaces = this.myPlaces.filter((p) => p !== place);
      if (this.myPlaces.length == 0) {
        this.selectedPlace = "";
      }
    },
    checkFile2(event) {
      console.log("check-error-1");
      const file = event.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        this.fileSizeError2 = true;
        this.uploaded2 = false;
        // Optionally, clear the file input
        event.target.value = null;
      } else {
        this.fileSizeError2 = false;
        this.uploaded2 = true;
        const file = event.target.files[0];
        console.log("check file : ", file);
        this.band_logo = file;
        // Handle file upload or further processing here
      }
    },
    checkFile1(event) {
      console.log("check-error-1");
      const file = event.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        this.fileSizeError1 = true;
        this.uploaded1 = false;
        // Optionally, clear the file input
        event.target.value = null;
      } else {
        this.fileSizeError1 = false;
        this.uploaded1 = true;
        const file = event.target.files[0];
        console.log("check file : ", file);
        this.band_banner = file;
        // Handle file upload or further processing here
      }
    },
    checkFile3(event) {
      console.log("check-error-3");
      const file = event.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        this.fileSizeError3 = true;
        this.uploaded3 = false;
        // Optionally, clear the file input
        event.target.value = null;
      } else {
        this.fileSizeError3 = false;
        this.uploaded3 = true;
        const file = event.target.files[0];
        console.log("check file : ", file);
        this.singer_profile_pic = file;
        // Handle file upload or further processing here
      }
    },
    checkFile4(event) {
      console.log("check-error-4");
      const file = event.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        this.fileSizeError4 = true;
        this.uploaded4 = false;
        // Optionally, clear the file input
        event.target.value = null;
      } else {
        this.fileSizeError4 = false;
        this.uploaded4 = true;
        const file = event.target.files[0];
        console.log("check file : ", file);
        this.player_profile_pic = file;
        // Handle file upload or further processing here
      }
    },
    checkFile5(event) {
      console.log("check-error-5");
      // const file = event.target.files[0];
      // if (file.size > 2 * 1024 * 1024) {
      //   // 2MB limit
      //   this.fileSizeError5 = true;
      //   this.uploaded5 = false;
      //   // Optionally, clear the file input
      //   event.target.value = null;
      // } else {
      this.fileSizeError5 = false;
      this.uploaded5 = true;
      console.log("my result", event.target.files);
      const file = event.target.files[0];
      console.log("check file : ", file);
      this.gallary.push(file);
      // Handle file upload or further processing here
      // }
    },

    validateForm() {
      if (
        this.uploaded1 == true &&
        this.fileSizeError1 == false &&
        this.uploaded2 &&
        this.fileSizeError2 == false &&
        this.uploaded3 &&
        this.fileSizeError3 == false &&
        this.uploaded4 &&
        this.fileSizeError4 == false &&
        this.bandName != "" &&
        this.selected_country != "" &&
        this.selected_state != "" &&
        this.selected_city != "" &&
        this.yearsBand != "" &&
        this.pieceBand != "" &&
        this.singerName != "" &&
        this.gender != "" &&
        this.playerName != "" &&
        this.playerGender != "" &&
        this.languages.length > 0 &&
        this.genres.length > 0 &&
        this.myPlaces.length > 0 &&
        this.addInfo != "" &&
        this.wordCount <= this.maxWords &&
        this.cNo != "" &&
        this.isValidPhoneNumber &&
        this.wNo != "" &&
        this.isValidWhatsappNumber &&
        this.isValidEmail &&
        this.bandEmail &&
        this.uploadedImages.length > 0 &&
        this.bandAddress != ""
      ) {
        return true;
      } else {
        if(this.uploaded1 == false)
        {
          alert("Please, upload banner");
        }
        if(this.fileSizeError1)
        {
          alert("Banner-size shouldn't more than 2 MB");
        }
        if(this.uploaded2 == false)
        {
          alert("Please, upload logo");
        }
        if(this.fileSizeError2)
        {
          alert("logo-size shouldn't more than 2 MB");
        }
        if(this.uploaded3 == false)
        {
          alert("Please, upload singer profile");
        }
        if(this.fileSizeError3)
        {
          alert("singer profile shouldn't more than 2 MB");
        }
        if(this.uploaded4 == false)
        {
          alert("Please, upload player profile");
        }
        if(this.fileSizeError4)
        {
          alert("player profile shouldn't more than 2 MB");
        }
        if(this.uploadedImages.length == 0)
        {
          alert("Upload atleast 1 image in band-gallery ")
        }
        if(this.bandName == "")
        {
          alert("Please, Enter band Name")
        }
        if(this.selected_country == "" || this.selected_state == "" || this.selected_city == "")
        {
          alert("Please, select country/state/city")
        }
        if(this.yearsBand == "")
        {
          alert("Please, enter years of band");
        }
        if(this.pieceBand == "")
        {
          alert("Please, enter pieces of band");
        }
        if(this.singerName == "")
        {
          alert("Please, enter singer name");
        }
        if(this.gender == "")
        {
          alert("Please, enter singer's gender");
        }
        if(this.playerName == "")
        {
          alert("Please, enter player name");
        }
        if(this.playerGender == "")
        {
          alert("Please, enter player's gender");
        }
        if(this.languages.length == 0)
        {
          alert("Select atleast 1 key-language");
        }
        if(this.genres.length == 0)
        {
          alert("Select atleast 1 genre");
        }
        if(this.myPlaces.length == 0)
        {
          alert("Select atleast 1 place(opt-to-play) ")
        }
        if(this.addInfo == '')
        {
          alert("Please, write description");
        }
        if(this.wordCount > this.maxWords)
        {
          alert("Only 5000 words allowed in description");
        }
        if(this.cNo == '')
        {
          alert("Please, enter phone number");
        }
        if(this.wNo == '')
        {
          alert("Please, enter whatsapp number");
        }
        if(this.isValidPhoneNumber == false)
        {
          alert("Please, enter valid phone number");
        }
        if(this.isValidWhatsappNumber == false)
        {
          alert("Please, enter valid whatsapp number");
        }
        if(this.bandEmail == "")
        {
          alert("Please, enter email address");
        }
        if(this.isValidEmail == false)
        {
          alert("Please, enter valid email address");
        }
        if(this.bandAddress == "")
        {
          alert("Please, enter band address");
        }

        return false;
      }
    },

    async submitForm(event) {
      console.log("band-logo", this.band_logo);

      const storedData = JSON.parse(localStorage.getItem("apiData"));
      console.log("api-genres : ", this.api_genres);
      console.log("genres : ", this.genres);
      console.log("stored Data : ", storedData);
      let genres_format = [];

      for (let i = 0; i < storedData.length; i++) {
        for (let j = 0; j < this.genres.length; j++) {
          if (storedData[i].name == this.genres[j]) {
            genres_format.push(storedData[i].id);
          }
        }
      }

      const storedLanguagesData = JSON.parse(
        localStorage.getItem("apiLanguagesData")
      );
      let languages_format = [];
      for (let i = 0; i < storedLanguagesData.length; i++) {
        for (let j = 0; j < this.languages.length; j++) {
          if (storedLanguagesData[i].name == this.languages[j]) {
            languages_format.push(storedLanguagesData[i].id);
          }
        }
      }

      const storedPlacesData = JSON.parse(
        localStorage.getItem("apiPlacesData")
      );
      let places_format = [];
      for (let i = 0; i < storedPlacesData.length; i++) {
        for (let j = 0; j < this.myPlaces.length; j++) {
          if (storedPlacesData[i].name == this.myPlaces[j]) {
            places_format.push(storedPlacesData[i].id);
          }
        }
      }

      this.singers.push({
        name: this.singerName,
        gender: this.gender,
        profile_pic: this.singer_profile_pic,
      });
      this.players.push({
        name: this.playerName,
        gender: this.playerGender,
        instrument_id: "1",
        profile_pic: this.player_profile_pic,
      });
      console.log("singers-2 : ", this.singers);
      console.log("players-2 : ", this.players);
      const data = {
        name: this.bandName,
        contact_country_code: "IN",
        contact: this.cNo,
        email: this.bandEmail,
        whatsapp_country_code: "IN",
        whatsapp_contact: this.wNo,
        country_id: this.selected_country,
        state_id: this.selected_state,
        city_id: this.selected_city,
        years_of_band: this.yearsBand,
        piece_of_band: this.pieceBand,
        about_yourself: this.addInfo,
        band_promo_link: this.promoLink,
        band_youtube_link: this.ytLink,
        band_instagram_link: this.instaLink,
        band_facebook_link: this.fbLink,
        band_website_link: this.webLink,
        band_apple_music_link: null,
        band_spotify_link: null,
        band_bank_detail: null,
        band_rate_card_id: null,
        tech_rider: this.tech_rider,
        band_description: this.addInfo,
        band_address: this.bandAddress,
        band_singers: this.singers,
        singers: this.singers,
        band_players: this.players,
        players: this.players,
        band_key_languages: languages_format,
        band_genres: genres_format,
        opt_to_play_places: places_format,
        band_logo: this.band_logo,
        band_banner: this.band_banner,
        band_galleries: this.gallary,
        rate_card: { id: 2, name: "25k - 50k", status: 1 },
        band_rate_card_id: 1,
      };
      const headers = {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };

      if (this.validateForm()) {
        const result = await axios
          .post(`https://mykrida.com/sct-band/public/api/v1/my-bands`, data, {
            headers: headers,
          })
          .then(function (response) {
            if (response.status == 200) {
              alert("Submitted !!!!!");
              window.location.reload();
              window.scrollTo({
                top: 0,
                behavior: "instant"
              });
            }
          })

          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("a", error.response);
              console.log("b", error.response.data);
              console.log("c", error.response.status);
              console.log("d", error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log("e", error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log("f", error.config);
          });
      }
    },

    async selectState(e) {
      this.cities = [];
      this.selected_state = "";
      this.selected_city = "";
      const countryId = e.target.value;
      const url =
        `https://mykrida.com/sct-band/public/api/v1/states/` + countryId;
      const states = await axios.get(url);
      this.states = states.data;
      this.countryId = countryId;
      // console.log(this.states);

      // const countryId = this.countries.filter((country) => country.country_name == this.selected_country);
      // console.log(countryId);
      // const response = await axios.get()
    },

    async selectCity(e) {
      this.selected_city = "";
      const stateId = e.target.value;
      const url =
        `https://mykrida.com/sct-band/public/api/v1/cities/` + stateId;
      const cities = await axios.get(url);
      this.cities = cities.data;
      this.stateId = stateId;
    },

    handleFileUpload(event) {
      // Clear the uploadedImages array to avoid duplicates
      this.uploadedImages = [];

      // Get the files from the input element
      const files = event.target.files;
      // console.log("uploaded images : ", typeof files);

      // Iterate through the files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        this.gallary.push(files[i]);

        // Read the file as a Data URL
        reader.readAsDataURL(file);

        // When the file is loaded as a Data URL
        reader.onload = () => {
          // Push an object with the file URL to the uploadedImages array
          this.uploadedImages.push({ url: reader.result });
        };
      }
    },

    handleInput(event) {
      if (event.target.value.startsWith(" ")) {
        event.target.value = event.target.value.trimStart();
      }
      if (event.target.id == "txt-area") {
        const words = this.addInfo.trim().split(/\s+/);
        this.wordCount = words.length;
        console.log(this.wordCount);
      }
    },

    handleEmailInput(event) {
      if (event.target.value.startsWith(" ")) {
        event.target.value = event.target.value.trimStart();
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isValidEmail = emailRegex.test(event.target.value);
    },

    handleContactInput(event) {
      const phoneRegex = /^[0-9]{10}$/;
      if (event.target.id == "phone") {
        this.isValidPhoneNumber = phoneRegex.test(event.target.value);
      } else if (event.target.id == "whatsapp") {
        this.isValidWhatsappNumber = phoneRegex.test(event.target.value);
      }
    },
  },
};
</script>

<style scoped>
.tas {
  margin-top: 2px;
}

.image-row {
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping */
  overflow-x: auto; /* Enable horizontal scrolling */
  gap: 10px; /* Adjust as needed */
  object-fit: cover;
}

.upload {
  background: #292929;
  height: 15px;
  margin-right: 10px;
}

input[type="file"] {
  display: none;
}

label {
  display: inline-block;
  background: #292929;
  color: rgba(158, 158, 158, 1);
  height: 30px;
  width: 258px;
  text-align: center;
  font-size: 16px;
}

.myLanguages {
  display: flex;
  border: 1px solid #292929;
  padding: 2px;
  color: rgba(96, 96, 96, 1);
  margin-left: 25px;
  font-weight: 600;
}

.l-name {
  margin-left: 5px;
}

.cancel {
  margin-left: 14px;
  margin-right: 6px;
}

.cancel:hover {
  cursor: pointer;
}

.ddown {
  width: 387px;
  height: 30px;
  border: none;
  font-family: poppins;
  background: #292929 !important;
  color: rgba(158, 158, 158, 1);
}

.vald {
  color: #ff6f6f;
  font-size: 12px;
  margin-top: 2px;
}

.sl {
  margin: 25px 62px;
  display: flex;
  flex-direction: column;
}

.ctm {
  width: 70px;
  background: #292929;
  color: #9e9e9e;
  text-align: center;
  border: none;
  font-family: poppins;
}

.fc {
  width: 205px;
}

.my-div {
  display: flex;
  gap: 20px;
  height: 30px;
}

.sds {
  margin-left: 73%;
  font-family: poppins;
  font-weight: 400;
  color: #9e9e9e;
}

.main {
  display: flex;
  flex-direction: column;
  margin: 12px 62px;
}

.main-2 {
  display: flex;
  flex-direction: column;
  margin: 12px 62px;
}

.cnt {
  display: flex;
  gap: 30px;
  margin-top: 15px;
}

.s-box {
  /* width: 20%; */
  display: flex;
  flex-direction: column;
}

.s-box-2 {
  /* margin-top: 22px; */
  display: flex;
  flex-direction: column;
}

.inp-1 {
  width: 360px;
  height: 30px;
  background: #292929;
  color: white;
  border: none;
}

.inp-2 {
  height: 30px;
  width: 258px;
  background: #292929;
  color: white;
  border: none;
}

.inp-3 {
  height: 30px;
  width: 520px;
  background: #292929;
  color: white;
  border: none;
}

.inp-4 {
  height: 200px;
  width: 1219px;
  background: #292929;
  color: white;
  border: none;
}

.inp-5 {
  width: 553px;
  background: #292929;
  color: white;
  border: none;
}

.nt {
  font-family: poppins;
  color: #ff6f6f;
  font-weight: 400;
  font-size: 11px;
}

ul,
li {
  background: white;
}

.dropdown {
  font-family: poppins;
  background: #292929 !important;
  /* width: 388px;
  height: 30px; */
}

.mylst {
  display: flex;
}

.dropdown-2 {
  font-family: poppins;
  background: #292929 !important;
  width: 388px;
  height: 30px;
}

.dropdown-toggle {
  color: white;
  float: right;
}

.lng {
  width: 1225px;
}

.lead {
  color: #ffffff;
  font-family: poppins;
  font-weight: 700;
  font-size: 18px;
}

.slv {
  font-family: poppins;
  font-weight: 400;
  color: #9e9e9e;
  font-size: 18px;
}

.sec-2 {
  margin-top: 35px;
}

.add-sing {
  display: flex;
}

.flag {
  height: 15px;
}

.s-img {
  /* height: 194px;
  width: 295px;
  object-fit: cover; */
}

.img-lst {
  display: flex;
  gap: 25px;
}

.myBtn {
  background: #ff0000;
  margin-left: 79%;
  margin-top: 2%;
  height: 45px;
  width: 250px;
  font-family: poppins;
  color: white;
  border: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sq {
  display: flex;
  flex-direction: column;
}

.sa {
  display: flex;
  flex-direction: column;
}

.image-row {
  margin-top: 8px;
}

@media only screen and (max-width: 1293px) {
  label {
    width: 227px;
  }
  .ddown {
    width: 368px;
  }
  .lng {
    width: 1165px;
  }
  .lead {
    font-size: 16px;
  }
  .slv {
    font-size: 16px;
  }
  .gd {
    width: 360px !important;
  }
  .inp-4 {
    width: 1164px;
  }

  .inp-5 {
    width: 523px;
  }
}

@media only screen and (max-width: 1246px) {
  label {
    width: 213px;
  }
  .ddown {
    width: 358px;
  }
  .lng {
    width: 1135px;
  }
  .lead {
    font-size: 15px;
  }
  .slv {
    font-size: 16px;
  }
  .gd {
    width: 344px !important;
  }
  .inp-4 {
    width: 1138px;
  }

  .inp-5 {
    width: 508px;
  }
}

@media only screen and (max-width: 1210px) {
  label {
    width: 185px;
  }
  .ddown {
    width: 340px;
  }
  .lng {
    width: 1081px;
  }
  .lead {
    font-size: 15px;
  }
  .slv {
    font-size: 16px;
  }
  .gd {
    width: 318px !important;
  }
  .inp-4 {
    width: 1083px;
  }

  .inp-5 {
    width: 481px;
  }
  .myBtn {
    margin-left: 77%;
  }
}

@media only screen and (max-width: 1144px) {
  .inp-1 {
    width: 335px;
  }

  label {
    width: 145px;
  }

  form {
    margin-left: 24px;
  }

  .ddown {
    width: 304px;
  }
  .lead {
    font-size: 16px;
  }
  .slv {
    font-size: 16px;
  }

  .gd {
    width: 246px !important;
  }

  .inp-4 {
    width: 970px;
  }

  .inp-5 {
    width: 426px;
  }
}

@media only screen and (max-width: 1070px) {
  form {
    margin-left: 0px;
  }

  .inp-1 {
    width: 300px;
  }

  .ddown {
    width: 293px;
  }

  .inp-3 {
    width: 488px;
  }

  .inp-4 {
    width: 939px;
  }

  .inp-5 {
    width: 410px;
  }

  /* .s-img{
    width: 270px
  } */
}

@media only screen and (max-width: 1012px) {
  form {
    margin-left: 0px;
  }

  .inp-1 {
    width: 233px;
  }

  .ddown {
    width: 271px;
  }

  .inp-3 {
    width: 423px;
  }

  .inp-4 {
    width: 874px;
  }

  .inp-5 {
    width: 378px;
  }

  .myBtn {
    margin-left: 73%;
  }
}

@media only screen and (max-width: 933px) {
  .inp-1 {
    width: 215px;
  }

  .inp-2 {
    width: 215px;
  }

  .ddown {
    width: 250px;
  }

  .inp-3 {
    width: 358px;
  }

  .inp-4 {
    width: 810px;
  }

  .inp-5 {
    width: 345px;
  }
}

@media only screen and (max-width: 885px) {
  .cnt {
    display: flex;
    flex-wrap: wrap;
  }

  .blg {
    margin-top: -5%;
  }

  .ddown {
    width: 304px;
  }

  form {
    margin-left: 10%;
  }

  .sds {
    margin-left: 48%;
  }

  .inp-4 {
    width: 635px;
  }

  .img-lst {
    display: flex;
    flex-wrap: wrap;
  }

  .myBtn {
    margin-left: 56%;
  }

  .inp-3 {
    width: 460px;
  }
}

@media only screen and (max-width: 843px) {
  .blg {
    margin-top: 0%;
  }

  form {
    margin-left: 16%;
  }

  label {
    width: 217px;
  }

  .ddown {
    width: 465px;
  }

  .lng {
    width: 464px;
  }

  .sds {
    margin-left: 27%;
  }

  .gd {
    width: 462px !important;
  }

  .inp-4 {
    width: 464px;
  }

  .inp-5 {
    width: 374px;
  }

  .bma {
    width: 464px !important;
  }

  .myBtn {
    height: 42px;
    width: 190px;
    margin-left: 47%;
  }
}

@media only screen and (max-width: 807px) {
  .blg {
    margin-top: 0%;
  }
}

@media only screen and (max-width: 699px) {
  .cnt {
    display: flex;
    flex-direction: column;
  }

  form {
    margin-left: 26%;
  }

  .ddown {
    width: 220px;
  }

  .dropdown {
    background: black !important;
  }

  .lng {
    width: 222px;
  }

  .lead {
    font-size: 12px;
  }

  .sds,
  .slv {
    font-size: 11px;
  }

  .sds {
    margin-left: 3%;
  }

  .inp-3 {
    width: 216px;
  }

  .gd {
    width: 217px !important;
  }

  .inp-4 {
    width: 223px;
  }

  .vald {
    font-size: 10px;
  }

  .inp-5 {
    width: 131px;
  }

  .bma {
    width: 222px !important;
  }

  .s-img {
    width: 225px;
    object-fit: cover;
  }

  .myBtn {
    height: 30px;
    width: 226px;
    margin-left: 0%;
  }
}

@media only screen and (max-width: 574px) {
  form {
    margin-left: 22%;
  }
}

@media only screen and (max-width: 439px) {
  form {
    margin-left: 12%;
  }
}

@media only screen and (max-width: 355px) {
  form {
    margin-left: 4%;
  }
}

@media only screen and (max-width: 1200px) {
  .sds {
    margin-left: 72%;
  }
}

@media only screen and (max-width: 1161px) {
  .sds {
    margin-left: 71% !important;
  }
}

@media only screen and (max-width: 1144px) {
  .sds {
    margin-left: 67% !important;
  }
}

@media only screen and (max-width: 1339px) {
  .sds {
    margin-left: 72%;
  }
}

@media only screen and (max-width: 1042px) {
  .sds {
    margin-left: 66% !important;
  }
}

@media only screen and (max-width: 1015px) {
  .sds {
    margin-left: 65% !important;
  }
}

@media only screen and (max-width: 990px) {
  .sds {
    margin-left: 64% !important;
  }
}

@media only screen and (max-width: 966px) {
  .sds {
    margin-left: 63% !important;
  }
}

@media only screen and (max-width: 943px) {
  .sds {
    margin-left: 62% !important;
  }
}

@media only screen and (max-width: 921px) {
  .sds {
    margin-left: 61% !important;
  }
}

@media only screen and (max-width: 901px) {
  .sds {
    margin-left: 60% !important;
  }
}

@media only screen and (max-width: 885px) {
  .sds {
    margin-left: 50% !important;
  }
}

@media only screen and (max-width: 843px) {
  .sds {
    margin-left: 27% !important;
  }
}

@media only screen and (max-width: 695px) {
  .sds {
    margin-left: 1% !important;
  }
}

@media only screen and (max-width: 375px) {
  form {
    margin-left: 7% !important;
  }

  .lead {
    font-size: 11px;
  }
}

@media only screen and (max-width: 390px) {
  form {
    margin-left: 10%;
  }
}
</style>
