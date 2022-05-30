<template>
  <div id="particles-js" class="main-container page-0 p-5">
    <div class="row h-100">
      <div class="col-3" />
      <div
        class="
          col-6
          h-100
          d-flex
          flex-column
          align-items-center
          justify-content-center
          pr-0
        "
      >
        <div class="model-container">
          <img src="~assets/img/model-1.png" width="400">
        </div>
        <div class="blocks-container d-flex justify-content-around w-100">
          <NuxtLink
            class="btn btn-primary block-btns big-block"
            to="/page1"
          >
            <span class="pb-3 gradient-text">能力展示</span>
          </NuxtLink>
          <div
            @mouseover="handleSecond(true)"
            @mouseleave="handleSecond(false)"
          >
            <NuxtLink
              class="btn btn-primary block-btns big-block"
              to="/page2"
            >
              <span class="pb-3 gradient-text">管理中心</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        v-if="showSub"
        class="
          col-3
          h-100
          d-flex
          flex-column
          align-items-center
          justify-content-end
          pl-0
          pb-5
        "
        @mouseover="handleSub(true)"
        @mouseleave="handleSub(false)"
      >
        <NuxtLink
          class="btn btn-primary block-btns small-block mb-5"
          to="/page5"
        >
          <span class="pb-2 gradient-text">科研管理</span>
        </NuxtLink>
        <NuxtLink
          class="btn btn-primary block-btns small-block mb-5"
          to="/page2-2"
        >
          <span class="pb-2 gradient-text">经营管理</span>
        </NuxtLink>
        <NuxtLink
          class="btn btn-primary block-btns mb-5 small-block"
          to="/page2-3"
        >
          <span class="pb-2 gradient-text">建堂文化</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      onSecond: false,
      onSub: false
    }
  },
  computed: {
    showSub () {
      return this.onSecond || this.onSub
    }
  },
  mounted () {
    particlesJS(
      'particles-js',
      {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: '#b61924',
          background_image: '',
          background_position: '50% 50%',
          background_repeat: 'no-repeat',
          background_size: 'cover'
        }
      }
    )
  },
  methods: {
    handleSecond (val) {
      if (val) { this.onSecond = val } else {
        setTimeout(() => {
          this.onSecond = val
        }, 100)
      }
    },
    handleSub (val) {
      if (val) { this.onSub = val } else {
        setTimeout(() => {
          this.onSub = val
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss">
.main-container {
  &.page-0 {
    background-image: url("~assets/img/bg-1.jpg");
  }
  .block-btns {
    background-image: url("~assets/img/bg-block-1.png");
    color: #28e8fa;
    font-weight: bold;
    font-family: "Microsoft YaHei";
    &.big-block {
      width: 300px;
      height: 120px;
      font-size: 50px;
    }
    &.small-block {
      width: 210px;
      height: 84px;
      font-size: 30px;
    }
  }
}
</style>
