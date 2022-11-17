const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// line 



const tabs = $$('.tab-item');
const details = $$('.tab-details');

const tabActive = $('.tab-item.active');
const line = $('.tabs-main .line');

line.style.left += tabActive.offsetLeft + 'px';
line.style.width += tabActive.offsetWidth + 'px';

tabs.forEach(
  (tab, idx) =>
    (tab.onclick = function () {
      const detail = details[idx]; 

      $('.tab-item.active').classList.remove('active'); 
      $('.tab-details.active').classList.remove('active'); 

      line.style.left = this.offsetLeft + 'px';
      line.style.width = this.offsetWidth + 'px';

      this.classList.add('active'); 
      detail.classList.add('active'); 
    })
);








