// $(document).ready(function() {
//     $('.header__burger').click(function(event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//     });
// });

document.getElementsById('header_burger').onclick = function() {
    document.getElementsById('header_burger').toggleClass('active');
}