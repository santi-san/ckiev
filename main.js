// const { default: stickybits } = require("stickybits");



const headerHeight = document.querySelector('header').offsetHeight;

stickybits('.asd', {
    stickyBitStickyOffset: headerHeight
});