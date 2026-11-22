---
title: "Remote weather station"
headline: "A field-tested weather station for horticulture"
tags: ["Electrical", "Mechanical", "Software"]
summary: "My final-year project: a remote weather station for a horticulture client, designed, prototyped and tested."
order: 6
featured: false
status: "Final-year project, 2024"
image: /assets/img/weather-station/hero.jpg
image_alt: "Weather station prototype on a rooftop: sensor mast and anemometer on a black battery box"
---

## Problem

For my final-year project at AUT, another student and I designed, prototyped
and field tested a weather station for remote data collection, for a client in
the horticulture industry.

## Design

I was responsible for the electrical and mechanical design, including a handful
of laser-cut and 3D printed parts, and the firmware, written in C++. My
teammate built the wireless gateway and the client front end.

The weather station has several sensors, including air temperature and
humidity, wind speed and direction, and four others specific to the client's
application. It is powered by a 12 V sealed lead-acid battery and achieved a
battery life of more than 90 days, beating the client's specification. It
sends its data over a LoRaWAN radio link to a computer, where it is shown on
an IoT dashboard for the client.

## Results

One of the major challenges of this project was waterproofing: a weather
station is exposed to the weather in normal use. During our final week of
testing, condensation built up inside the enclosure. The station kept working,
but it was not ideal.
