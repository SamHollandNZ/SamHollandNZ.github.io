---
title: "Active magnetic levitation bearing"
headline: "A shaft held in five axes by electromagnets"
tags: ["Electrical", "Mechanical", "Software"]
summary: "A proof-of-concept active magnetic bearing: ten electromagnets, PCB-coil position sensors and a Teensy controller."
order: 2
featured: true
status: "Proof of concept built at EnergyBank, 2026"
image: /assets/img/magnetic-levitation-bearing/hero.jpg
image_alt: "Magnetic bearing rig on an aluminium rail: a steel shaft through teal 3D-printed mounts holding electromagnets and sensor boards"
---

## Why

At EnergyBank I built a prototype, proof-of-concept active magnetic levitation
bearing: a shaft that is held in place by magnetic forces alone, with nothing
touching it. It was a work project, so this page gives only an overview.

## Design

The shaft is constrained in five axes. There is a two-axis radial bearing at
each end of the shaft and an axial bearing in the middle. Each axis has two
electromagnets, one pulling each way, and two position sensors.

The sensors are inductive proximity sensors made from a coil etched into a
PCB. They connect to a driver board carrying the proximity sensor ICs, a Teensy
microcontroller board and the H-bridge drivers for the electromagnets.

## Control

The controller continuously varies the current in each pair of electromagnets
to hold the shaft at its set position in space.

## Build

The frame is an aluminium rail with 3D-printed mounts. I designed the PCBs,
including the panelised sensor boards, and machined and printed the
mechanical parts.

![Panel of sensor PCBs, lettered A to H, held next to the driver board with its Teensy]({{ '/assets/img/magnetic-levitation-bearing/sensor-pcbs.jpg' | relative_url }})

<p class="caption">The panelised sensor PCBs, each with an etched sense coil, beside the driver board.</p>
