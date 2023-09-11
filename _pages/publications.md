---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order </br> * denotes equal contribution </br>
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<p>An up-to-date list is available on <a href="https://scholar.google.com/citations?user=uekwkvYAAAAJ" target="_blank">Google Scholar</a>.</p>

<h1> Conferences & Journals </h1>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[category=conference]* %}

<!-- <h1> workshops </h1>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[category=workshop]* %} -->

<h1> Theses </h1>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[category=thesis]* %}

</div>
