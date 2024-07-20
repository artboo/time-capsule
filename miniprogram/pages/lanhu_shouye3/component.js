Component({
  properties: {},
  data: {},
  lifetimes: {
    created: function () {},
    attached: function () {
      console.info("页面加载");
    },
    detached: function () {
      console.info("页面卸载");
    },
  },
  methods: {},
});
