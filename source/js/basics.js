// $(function() {
//   return $('body').keyup(function(event) {
//     if (event.which === 37 && $('.paging .left > a').length) {
//       return location.replace($('.paging .left >a').attr('href'));
//     } else if (event.which === 39 && $('.paging .right > a').length) {
//       return location.replace($('.paging .right >a').attr('href'));
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  document.addEventListener('keydown', (event) => {
    const $prevPostBtn = document.querySelector('.paging .left >a')
    const $nextPostBtn = document.querySelector('.paging .right > a')
    if (event.keyCode === 37 && $prevPostBtn) {
      location.replace($prevPostBtn.getAttribute('href'));
    } else if (event.keyCode === 39 && $nextPostBtn) {
      return location.replace($nextPostBtn.getAttribute('href'));
    }
  })
})