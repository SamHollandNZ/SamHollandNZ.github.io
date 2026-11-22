---
title: "Geiger counter watch"
headline: "A Geiger counter that fits on a wrist"
tags: ["Electrical", "Mechanical", "Software"]
summary: "A miniature Geiger-Müller tube, high-voltage bias supply and rechargeable battery in one small package."
order: 5
featured: true
status: "Built, 2023–2024"
image: /assets/img/geiger-counter-watch/hero.jpg
image_alt: "Geiger counter watch on a red strap, beside a bare PCB and the two halves of its case"
specs_title: "Design"
specs:
  - label: "Detector"
    value: "Philips ZP-1310 Geiger-Müller tube"
  - label: "Bias supply"
    value: "About 575 V: boost converter and 7-stage multiplier (Maxim AN3757)"
  - label: "Microcontroller"
    value: "ATmega4809"
  - label: "Display"
    value: "Sharp memory LCD"
  - label: "Power"
    value: "LiPo cell with charger, about 2 weeks per charge"
  - label: "Case"
    value: "Resin 3D printed, Siraya Tech Blu Clear V2"
  - label: "Size"
    value: "45 × 35 × 12 mm, 24 mm strap"
---

<!-- DRAFT: written from the November 2026 CV. Check every claim, then delete this comment. -->
## Brief

When I found some miniature Geiger-Müller tubes on eBay, I decided that a
combined watch and Geiger counter would be a fun project.

## Hardware

The watch is based around the ZP-1310 Geiger-Müller tube, a small high-energy
beta and gamma tube designed by Philips in the early 1980s. The active volume
of the tube is about 6 mm in diameter by 16 mm long, and it needs a
high-voltage bias supply of about 575 V to run.

The bias supply is based on Maxim application note 3757. It consists of a
boost converter feeding a 7-stage voltage multiplier. To regulate the supply,
a low-power comparator enables and disables the microcontroller's PWM output
through its Configurable Custom Logic (CCL).

The whole device is built around the ATmega4809. I originally chose it for its
compatibility and ease of programming, its lower power consumption than the
older microcontrollers I was familiar with, and its CCL.

The watch also includes a low-power memory LCD from Sharp, a LiPo battery and
charger, and a piezo buzzer.

The circuit is built on a custom printed circuit board and housed in a
resin 3D printed case. The finished device measures 45 × 35 × 12 mm and fits a
standard 24 mm watch strap.

## Learnings

The major challenges of this project were its small size and low power
consumption. I only got about 2 weeks of battery life, mainly because of the
microcontroller I chose: it does not have as fine control over its peripherals
as other low-power microcontrollers.

The other major challenge was printing the case itself. I chose Siraya Tech
Blu Clear V2 resin because it is durable, clear and, crucially, certified skin
safe. However, its high viscosity and clarity made it much more challenging to
print than I was prepared for.

As of 2026 I have begun work on a successor to this project, a
{% assign successor = site.projects | where_exp: "q", "q.url == '/portfolio/projects/gamma-spectrometer-watch/'" | first %}{% if successor %}[gamma spectrometer watch]({{ successor.url | relative_url }}){% else %}gamma spectrometer watch{% endif %}.

![PCB layout of the watch board in KiCad]({{ '/assets/img/geiger-counter-watch/pcb-layout.jpg' | relative_url }})

<p class="caption">PCB design.</p>

![Open case: lithium-polymer cell beside the assembled red PCB with the Geiger tube along its top edge]({{ '/assets/img/geiger-counter-watch/internals.jpg' | relative_url }})

<p class="caption">The back of the case, open.</p>

![Render of the clear case with the display showing a font test]({{ '/assets/img/geiger-counter-watch/case-render.jpg' | relative_url }})

<p class="caption">Concept render.</p>
