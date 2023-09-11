---
layout: page
permalink: /publications/
title: Publications
description: > 
    Publications in reversed chronological order 
    * denotes equal contribution
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<p>An up-to-date list is available on <a href="https://scholar.google.com/citations?user=uekwkvYAAAAJ" target="_blank">Google Scholar</a>.</p>

<!-- {% bibliography -f {{ site.scholar.bibliography }} %} -->

<h1> conferences & journals </h1>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[category=conference]* %}

<!-- <h1> workshops </h1>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[category=workshop]* %} -->

<h1> theses </h1>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[category=thesis]* %}

</div>
