---
title: Consumo consciente de detergentes
slug: detergentes
signpost:
    - inicio
    - guias
    - detergentes
takeaways:
    - "El ingrediente más perjudicial para los ríos y lagos son los fosfatos, todavía omnipresentes en los detergentes convencionales para lavavajillas. Por eso en este caso es particularmente importante usar detergentes ecológicos."
    - "Como resultado de las presiones de la industria de la detergencia, no se han prohibido ni limitado varios ingredientes no biodegradables, muy usados en los detergentes convencionales."
    - "No es que los detergentes ecológicos laven menos que los convencionales; es que éstos lavan \"demasiado\"."
    - "Usemos detergentes concentrados. Podemos comprar detergentes a granel. No lavemos la ropa a más de 40º."
updates:
    - date: 2015/11/05
      text: hemos añadido una nueva marca de detergentes ecológicos a nuestro listado
    - date: 2015/09/05
      text: el articulo "Bla bla bla" ha sido añadido a esta guía
use: ['secciones']
---

<div class="row">
<div class="small-12 columns">
<div class="panel">
<ul class="updates">
{% for update in page.updates %}
  <li>{{ update.date }}: {{ update.text }}</li>
{% endfor %}
  <a href="#">ver menos actualizaciones</a>
</ul>
</div>
<ul class="lead">
{% for point in page.takeaways %}
  <li>{{ point }}</li>
{% endfor %}
</ul>

</div>
</div>

<div class="row">
  <div class="small-9 small-centered columns">
<h3>Artículos en esta guía</h3>
</div>
</div>


{% for seccion in data.secciones %}
  {% set vars = {'title': seccion.title, 'teaser': seccion.teaser, 'loop': loop} %}
  {% include 'seccion.html' with vars %}
{% endfor %}
