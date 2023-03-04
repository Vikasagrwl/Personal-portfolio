const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for(tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for(tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  const tab=document.getElementById(tabName);
  document.getElementById(tabName).classList.add("active-tab");
}

function showNav(){
  const nav= document.getElementById('list');
  const bars= document.getElementsByClassName('fa-bars')[0];
  if(nav.classList.contains('show-list')){
    nav.classList.remove('show-list');
    bars.style.display="block";
  }
  else{
    nav.classList.add('show-list');
    bars.style.display="none";
  }

}