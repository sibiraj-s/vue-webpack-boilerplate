<template>
  <div class="home">
    <div class="head">
      <img alt="Vue logo" src="../assets/vue.svg" class="vue-logo" />
      <h1 class="title">{{ title }}</h1>
      <p class="description">
        Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed
        from the ground up to be incrementally adoptable.
      </p>
    </div>
    <div class="badges">
      <a href="https://github.com/sibiraj-s" target="_blank">
        <img src="https://badgen.net/badge/github/sibiraj-s?icon&color=red" alt="Sibiraj @ Github" />
      </a>
      <a href="https://github.com/sibiraj-s/vue-webpack-boilerplate" target="_blank">
        <img src="https://badgen.net/badge/github/vue-webpack-boilerplate?icon&label" alt="vue-webpack-boilerplate" />
      </a>
      <a href="https://github.com/sibiraj-s/vue-webpack-boilerplate/blob/master/LICENSE" target="_blank">
        <img src="https://badgen.net/github/license/sibiraj-s/vue-webpack-boilerplate?color=green" alt="MIT" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    const title = process.env.pkgJson?.description;

    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  padding: 0 1rem;

  .head {
    margin-bottom: 1.5rem;

    .title {
      margin-bottom: 0.5rem;
    }

    .vue-logo {
      height: 10rem;
      margin-bottom: 0.3rem;
    }
  }

  .badges {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (min-width: 640px) {
  .home {
    align-items: center;
    margin: auto;
    width: 80%;

    .head {
      text-align: center;
    }

    .badges {
      flex-direction: row;

      a + a {
        margin-left: 5px;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .home {
    width: 60%;
  }
}
</style>
