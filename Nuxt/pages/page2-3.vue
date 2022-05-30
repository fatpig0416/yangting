<template>
  <div class="main-container page-2-3  px-5" id="particles-js">
    <div class="w-100 h-100">
      <div class="row header-container">
        <div class="col-3"></div>
        <div class="col-6 page-header pt-1">
          <h1 class="m-0 gradient-text font-weight-bold">三级页面2</h1>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row content-container pb-5">
        <div class="col-3 h-100">
          <div class="list-container">
            <div class="list-btn btn-up"></div>
            <div class="list-item">
              <div class="row h-100">
                <div class="col item-image">
                  <img src="~assets/img/item-6.png">
                </div>
                <div class="col item-description">
                  <p class="item-title">
                    什么什么什么技能
                  </p>
                  <p class="item-content">技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能。介绍技能介绍技能介绍技能介绍技能介绍……</p>
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="row h-100">
                <div class="col item-image">
                  <img src="~assets/img/item-6.png">
                </div>
                <div class="col item-description">
                  <p class="item-title">
                    什么什么什么技能
                  </p>
                  <p class="item-content">技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能。介绍技能介绍技能介绍技能介绍技能介绍……</p>
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="row h-100">
                <div class="col item-image">
                  <img src="~assets/img/item-6.png">
                </div>
                <div class="col item-description">
                  <p class="item-title">
                    什么什么什么技能
                  </p>
                  <p class="item-content">技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能。介绍技能介绍技能介绍技能介绍技能介绍……</p>
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="row h-100">
                <div class="col item-image">
                  <img src="~assets/img/item-6.png">
                </div>
                <div class="col item-description">
                  <p class="item-title">
                    什么什么什么技能
                  </p>
                  <p class="item-content">技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能。介绍技能介绍技能介绍技能介绍技能介绍……</p>
                </div>
              </div>
            </div>
            <div class="list-btn btn-down"></div>
          </div>
        </div>
        <div class="col-9 h-100">
          <div class="detail-container">
            <div class="row h-100">
              <div class="col-7">
                <div class="detail-img">
                  <img src="~assets/img/item-7.png">
                </div>
              </div>
              <div class="col-5" style="padding: 30px 50px;">
                <div class="detail-description">
                  <div class="detail-title">主技能</div>
                  <div class="detail-content">
                    技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍。技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍。
                  </div>
                  <div class="detail-content">
                    技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍。技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍。
                  </div>
                  <div class="detail-content">
                    技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍。技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍。
                  </div>
                  <div class="detail-content">
                    技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍。技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍。
                  </div>
                  <div class="detail-content">
                    技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍技能介绍技能介绍。技能介绍技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍，技能介绍技能介绍技能介绍技能介绍。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 2,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
    
  }
}
</script>

<style lang="scss">
  .main-container.page-2-3 {
    background-image: url('~assets/img/bg-6.png');
    .header-container {
      height: 100px;
      .page-header {
        background-image: url('~assets/img/header-2.png');
        background-size: 100% 100%;
        text-align: center;
        height: 80px;
      }
    }
    .content-container {
      height: calc(100vh - 100px);
      .list-container {
        background-image: url('~assets/img/bg-block-11.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        .list-item {
          width: 100%;
          height: 20%;
          background-image: url('~assets/img/bg-block-12.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          color: white;
          .item-image {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            img {
              height: calc(100% - 20px);
              margin: 10px;
            }
          }
          .item-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .item-title {
              font-weight: bold;
              font-size: 12px;
              margin-bottom: 5px;
            }
            .item-content {
              padding-right: 10px;
              font-size: 12px;
              margin: 0;
            }
          }
        }
        .list-btn {
          width: 100%;
          height: 30px;
          &.btn-up {
            background-image: url('~assets/img/btn-up-1.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          &.btn-down {
            background-image: url('~assets/img/btn-down-1.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
      }
      .detail-container {
        background-image: url('~assets/img/bg-block-10.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        .detail-img {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 90%;
          }
        }
        .detail-description {
          width: 100%;
          height: 100%;
          background-image: url('~assets/img/bg-block-13.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          color: white;
          padding-left: 50px;
          padding-right: 10px;
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .detail-title {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
