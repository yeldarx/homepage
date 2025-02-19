---
permalink: "greencard/index.html"
layout: greencard.njk
title: "Гринкарта"
eleventyNavigation:
    key: Гринкарта
    order: 5
---

<img class="right-float-photo" src="/assets/img/green-mail.jpg" alt=""  />

*Гринкартамды қолыма алған сәт. 2024 жыл.*

Бұл бетте гринкартаға қатысты нәрселерді жинамақпын.

- [Day by day](./days/)
- [Пайдалы сілтемелер](./links)
- [Сұрау-жауап](./qna/)

### Гринкарта туралы посттар

{% for post in collections.greencard %}
  <div class="post">
    <p>
      <span class="post-date">{{ post.data.date | postDate }}</span> 
      <a href="{{ post.url }}" class="post-title">{{ post.data.title }}</a>
    </p>
  </div>
{% endfor %}
