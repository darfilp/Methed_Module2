let items = document.querySelectorAll('.item');
let lists = document.querySelectorAll('.props__list');
items[1].after(items[0]);
items = document.querySelectorAll('.item');
items[3].after(items[1]);
const item = document.querySelector('.props__item_four');
document.querySelectorAll('.props__item_four')[3].after(item);
const node3 = lists[3].cloneNode(true);
lists[3].replaceWith(lists[4]);
document.querySelectorAll('.content')[4].append(node3);
lists[2].append(document.querySelectorAll('.props__item_two')[8]);
lists[2].append(document.querySelectorAll('.props__item_two')[9]);