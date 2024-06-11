<template>
  <div id="n-head">
    <img class="logo-img" src="../assets/images/logo.png" />
    <h1 class="nav-head-title">Welcome! lets get started</h1>
  </div>
</template>
<script></script>
<style scoped>
@font-face {
  font-family: myFont;
  src: url("./jurka.otf");
}

#n-head {
  height: 150px;
  left: -57px;
  background: #4e4e4e;
  display: flex;
  margin: 0;
}

.logo-img {
  width: 179px;
  height: 148px;
  background: #4e4e4e;
}

.nav-head-title {
  font-weight: 400;
  font-size: 60px;
  color: #ffffff;
  margin-left: 490px;
  margin-top: 36px;
  font-family: myFont;
  background: #4e4e4e;
}

@media only screen and (max-width: 1293px) {
  .nav-head-title {
    /* font-size: 46px; */
    margin-left: 27%;
  }

  #n-head {
    /* width: 128vw; */
  }
}

@media only screen and (min-width: 50px) {
  #n-head {
    /* width: 405vw; */
  }
}

@media only screen and (max-width: 1246px) {
  .nav-head-title {
    /* margin-top: 53px; */
  }
}

/* @media only screen and (max-width: 987px) {
  .nav-head-title {
    font-size: 30px;
    margin-top: 53px;
    margin-left: 410px;
  }
} */

/* @media only screen and (max-width: 914px){
    .nav-head-title {
    font-size: 30px;
    margin-top: 53px;
    margin-left: 318px;
  }
}

@media only screen and (max-width: 826px){
    .nav-head-title {
    font-size: 30px;
    margin-top: 53px;
    margin-left: 160px;
  }
}

@media only screen and (max-width: 651px){
    .nav-head-title{
        font-size: 25px;
        margin-top: 62px;
        margin-left: 87px;
    }
}

@media only screen and (max-width: 527px){
    .nav-head-title{
        font-size: 22px;
        margin-top: 62px;
        margin-left: 47px;
    }
}

@media only screen and (max-width: 461px)
{
    .nav-head-title{
        font-size: 20px;
        margin-top: 62px;
        margin-left: 16px;
    }
} */


/* @media only screen and (max-width: 406px)
{
    .logo-img
    {
        height: 120px;
        width: auto;
    }

    #n-head
    {
        height: 120px
    }

    .nav-head-title
    {
        font-size: 20px;
        margin-top: 50px;
        margin-left: 16px;
    }
} */

@media only screen and (max-width: 1144px)
{
    .nav-head-title
    {
      margin-left: 22%;
    }
}

@media only screen and (max-width: 1070px)
{
    .nav-head-title
    {
        /* margin-left: 400px; */
    }
}

@media only screen and (max-width: 1024px)
{
    .nav-head-title
    {
      font-size: 55px;
margin-top: 42px;
margin-left: 20%;
    }
}

@media only screen and (max-width: 934px)
{
    .nav-head-title
    {
        margin-left: 12%;
    }
}

@media only screen and (max-width: 885px)
{
    .nav-head-title
    {
        /* margin-left: 195px; */
    }
}

@media only screen and (max-width: 849px)
{
  .nav-head-title
  {
    margin-left: 105px;
    font-size: 35px;
  }
}

@media only screen and (max-width: 645px)
{
  .nav-head-title
  {
    margin-left: 50px;
margin-top: 50px;
  }
}

@media only screen and (max-width: 590px)
{
  .nav-head-title
  {
    margin-left: 4px;
  }
}

@media only screen and (max-width: 544px)
{
  .nav-head-title
  {
    margin-left: 4px;
margin-top: 61px;
font-size: 25px;
  }
}

@media only screen and (max-width: 439px)
{
  .nav-head-title
  {
    display: none;
  }

  .logo-img
  {
    margin-left: 30%;
  }
}

@media only screen and (max-width: 355px)
{
  .logo-img{
    margin-left: 27%;
  }
}


</style>
