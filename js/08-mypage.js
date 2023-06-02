const menu = document.querySelector('.mypage_user_info li a');

function menuClick() {
  if(menu.classList.contains('mypage_user_info_select')) {
    menu.classList.remove('mypage_user_info_select');
  } else {
    menu.classList.add('mypage_user_info_select');
  }
}