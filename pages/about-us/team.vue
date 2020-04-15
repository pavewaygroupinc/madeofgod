<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + settings.about_banner + ')' }">
            <div class="bradcumbContent">
                <h2>The Team</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container grid-list-xl mt-12 class="team--content">
            <masonry
                :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
                :gutter="{default: '30px', 700: '15px'}"
            >
                <team-card :team="author" v-for="(author, index) in authors" :key="index"/>
            </masonry>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamCard from '@/components/TeamCard'
export default {
    head() {
        return {
            title: 'The Team'
        }
    },

    layout: 'contact',

    components: {
        TeamCard
    },

    data() {
        return {}
    },

    computed: {
        ...mapGetters([
            'authors',
            'settings'
        ])
    }
};
</script>

<style lang="scss" scoped>
.team-breadcumb {
    background-image: url(/about.jpg);
    position: relative;
    z-index: 10;
    width: 100%;
    height: 345px;
    .bradcumbContent {
        position: absolute;
        width: 392px;
        height: 78px;
        bottom: -39px;
        left: 50%;
        margin-left: -196px;
        z-index: 100;
        background: #FE0000;
        background: -webkit-linear-gradient(to right,#FE0000,#0c0527);
        background: linear-gradient(to right,#FE0000,#0c0527);
        text-align: center;
        h2 {
            font-size: 36px;
            color: #fff;
            margin-bottom: 0;
            line-height: 78px;
            font-weight: 900;
        }
    }
}
.team--content {
  h2 {
    margin-bottom: 35px;
    color: #262626;
    line-height: 1.3;
    font-weight: 700;
    font-size: 2rem;
  }
  
  p {
    color: #6a6a6a;
    font-size: 1.1rem;
    line-height: 2;
    font-weight: 500;
  }
}
.our-team {
  margin-top: 8rem;
  .team-heading {
    color: #262626;
    font-size: 48px;
    line-height: 1.3;
    margin-bottom: .5rem;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
  }
  .team-desc {
    color: #c1c1c1;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
  }
  .team-name {
    color: #262626;
    font-size: 1.3rem;
    line-height: 1.3;
    margin-bottom: .5rem;
    text-transform: capitalize;
    font-weight: 800;
  }
  .team-position {
    color: #414040;
    font-size: 0.9rem;
    line-height: 1.3;
    margin-bottom: .5rem;
    text-transform: capitalize;
    font-weight: 800;
  }
  .team-email {
    color: #c1c1c1;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.3;
    font-weight: 700;
  }
}
.swiper-container {
  height: auto!important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: 200px;
}
.team-banner {
    background-image: url(/concert.jpg);

    h3, h1, p {
        color: #fff;
        margin-bottom: 0;
        line-height: 1.3;
        font-weight: 700;
        font-size: 1.5rem;
    }
    
    h1 {
        font-size: 60px;
        font-weight: 900;
        color: #fff;
    }

    p {
        font-weight: 600;
        color: #fff;
        margin-bottom: 0;
    }
}
</style>
