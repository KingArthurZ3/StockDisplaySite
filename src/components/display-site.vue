<template>
  <div class="nav">
      <h1>Mr.Stock DIJA</h1>
      <div id="intro-container">
          <p id="intro">
              Mr.Stock DIJA is an etf, short for electronic trading advisor, that helps you profit from the stock market. He weights and evaluates several technical indicators of the stock market to give you advice on what to invest in. Choose companies below and see how well his predictions have been!
          </p>
      </div>
      <div id="search-wrapper"><input id="search-bar" type="text" v-model="searchQuery" placeholder="Search for company here..." @keyup="submitSearch"><button id="search-button" @click="submitSearch"></button>
      </div>
      <CompanyBlock v-if="searchQuery != '' " v-for="company in filteredCompanies" :key="company" class="single-company" v-bind:name="company.name" ></CompanyBlock>
  </div>
</template>

<script>
export default {
  name: 'MainDisplay',
  data () {
    return {
      companies: [
        {name: 'Apple'},
        {name: 'Microsoft'},
        {name: 'Amazon'},
        {name: 'Intel'},
        {name: 'Tesla'}
      ],
      searchQuery: '',
      isCompany: false
    }
  },
  computed: {
    filteredCompanies: function () {
      return this.companies.filter((company) => {
        return company.name.toUpperCase().match(this.searchQuery.toUpperCase())
      })
    },
    filteredCompanyNames: function () {
      return this.companies.filter((company) => {
        if (company.name.toUpperCase().match(this.searchQuery.toUpperCase())) {
          return company.name
        }
      })
    }
  },
  methods: {
    removeSearchQuery: function () {
      this.searchQuery = ''
      this.isCompany = false
    },
    submitSearch: function () {
      this.isResult = true
      return this.filteredCompanies
    }
  },
  components: {
    CompanyBlock: {
      props: ['name'],
      template: '<div class="company-display"><h3 class="company-title">{{name}}</h3></div>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Generic Stylesheets that are useful*/
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css">
<link rel="stylesheet" href="/static/css/style.css">

h1, h2 {
  text-align: center;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#intro-container {
width: 60%;
padding: 5px;
margin-left: auto;
margin-right: auto;
background-color: #F2F5F8;
border-radius: 10px;
}
#intro {
  width: 100%;
}
/* styles for search bar */
#search-bar{
height: 30px;
width: 20%;
outline: none;
margin: 10px;
border: 1px solid rgba(0,0,0,.12);
transition: .15s all ease-in-out;
background: white;
}
#search-button{
height: 30px;
width: 30px;
padding: 3px;
background-color: white;
outline: none;
border-radius: 5px;
border: none;
background-image: url('../assets/search-icon.svg');
background-repeat: no-repeat;
background-size: cover;
}
#search-button:hover{
cursor: pointer;
background-color: #9DCDC0;
}

#search-wrapper{
display: flex;
align-items: center;
justify-content: center;
width: auto;
height: auto;
padding: 5px;
}
/* styles for each company block */
.company-display{
width: auto;
height: 400px;
display: block;
background-color: beige;
}
#company-title{
display: block;
width: auto;
}
</style>
