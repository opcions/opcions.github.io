---
title: Consumo consciente de detergentes
slug: detergentes
use: ['secciones']
---

{% include 'breadcrumbs' with {'elements': ['inicio', 'guias']} %}

<h1>{{ page.title }}</h1>
{% for seccion in data.secciones %}
  {% set vars = {'title': seccion.title, 'content': seccion.content} %}
  {% include 'seccion.html' with vars %}
{% endfor %}
