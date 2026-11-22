---
title: "Analogue-meter Geiger counter"
headline: "Counting pulses onto a moving-coil meter"
tags: ["Electrical"]
summary: "My first Geiger counter, with a custom circuit that turns tube pulses into a voltage for an analogue meter."
order: 9
featured: false
status: "Built, 2020"
image: /assets/img/meter-geiger-counter/hero.jpg
image_alt: "Geiger counter with an analogue meter, in a black fabric carry case"
---

## Problem

While researching my [night vision monocular](../night-vision-monocular/) I got
interested in radiation detection, because the monocular's high-voltage supply
could produce X-rays. This counter cannot detect the low-energy X-rays the
monocular might produce, but it was a good first project for learning about
vacuum tubes and high voltage.

## Design

Besides the tube's high-voltage supply, it has a custom counting circuit that
converts the pulses from the Geiger tube into an analogue voltage, shown on a
meter.

## Build

The prototype is hand-built on perfboard in a small enclosure.

![Inside the enclosure: hand-wired perfboard, batteries and the tube]({{ '/assets/img/meter-geiger-counter/internals.jpg' | relative_url }})
