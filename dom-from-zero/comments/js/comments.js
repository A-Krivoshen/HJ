'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment).join('');
  commentsContainer.innerHTML += comments;
}

function createComment(comment) {
  return `<div class="comment-wrap">
    <div class="photo" title="${comment.author.name}">
      <div class="avatar" style="background-image: url('${comment.author.pic}')"></div>
    </div>
    <div class="comment-block">
      <p class="comment-text">
        ${comment.text.split('\n').join('<br>')}
      </p>
      <div class="bottom-comment">
        <div class="comment-date">${new Date(comment.date).toLocaleString('ru-Ru')}</div>
        <ul class="comment-actions">
          <li class="complain">Пожаловаться</li>
          <li class="reply">Ответить</li>
        </ul>
      </div>
    </div>
  </div>`
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);
"use strict";

function showComments(list) {
  console.log(list);
  const commentsContainer = document.querySelector(".comments");
  let fragment = browserEngine(list.map(createComment));
  document.querySelector('.comments').appendChild(fragment);
}

function createComment(comment) {
  return {
    tag: "div",
    class: "comment-wrap",
    content: [
      {
        tag: "div",
        class: "photo",
        attrs: { title: `${comment.author.name}` },
        content: {
          tag: "div",
          class: "avatar",
          attrs: { style: `background-image: url('${comment.author.pic}')` }
        }
      },
      {
        tag: "div",
        class: "comment-block",
        content: [
          {
            tag: "p",
            class: "comment-text",
            content: `${comment.text}`
          },
          {
            tag: "div",
            class: "bottom-comment",
            content: [
              {
                tag: "div",
                class: "comment-date",
                content: `${new Date(comment.date).toLocaleString("ru-Ru")}`
              },
              {
                tag: "ul",
                class: "comment-actions",
                content: [
                  {
                    tag: "li",
                    class: "complain",
                    content: "Пожаловаться"
                  },
                  {
                    tag: "li",
                    class: "reply",
                    content: "Ответить"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}

function browserEngine(block) {
       if ((typeof block === 'string') || (typeof block === 'number')) {
         const text = document.createTextNode(block);
         console.log(text)
           return document.createTextNode(block);
       }
 
       if (Array.isArray(block)) {
           return block.reduce(function(f, item) {
               f.appendChild(browserEngine(item));
 
               return f;
           }, document.createDocumentFragment());
       }
 
       const element = document.createElement(block.tag);
 
       element.className = block.class;
 
       if (block.content) {
           element.appendChild(browserEngine(block.content));
       }
 
       if (block.attrs) {
           Object.keys(block.attrs).forEach(function(key) {
               element.setAttribute(key, block.attrs[key]);
           });
       }
 
       return element;
   }

fetch("https://neto-api.herokuapp.com/comments")
  .then(res => res.json())
  .then(showComments);
